"use server";

import { db } from "@/lib/database";
import { tryCatch, devLog } from "@/lib/utils";
import { Result } from "@/types/result";
import {
  FileListResponse,
  GetCIDResponse,
  GroupResponseItem,
  PinataSDK,
  UploadResponse,
} from "pinata";
import { NFTData, NFTMetadata } from "@/types/media";

const pinata = new PinataSDK({
  pinataJwt: process.env.PINATA_JWT,
  pinataGateway: process.env.NEXT_PUBLIC_GATEWAY_URL,
});

interface SignatureData {
  signature: string;
  signer: string;
  message: string;
  timestamp: number;
}

interface GetFilesOptions {
  name?: string;
  group?: string;
  cid?: string;
  keyvalues?: Record<string, string>;
  mimeType?: string;
  order?: "ASC" | "DESC";
  limit?: number;
  cidPending?: boolean;
  noGroup?: boolean;
  pageToken?: string;
}

export async function uploadFileWithSignature(
  formData: FormData,
  signatureData: SignatureData,
  nftData?: NFTData
): Promise<Result<UploadResponse>> {
  const file = formData.get("file") as File;

  if (!file) {
    return {
      data: null,
      error: new Error("No file provided"),
    };
  }

  // Check if group exists
  const groupId = process.env.PINATA_GROUP_ID;

  if (!groupId) {
    return {
      data: null,
      error: new Error(`Pinata Group ID Not Found.`),
    };
  }

  // Upload file
  const fileResult = await tryCatch(
    pinata.upload.private
      .file(file)
      .keyvalues({
        env: process.env.NODE_ENV === "development" ? "dev" : "prod",
        signature: signatureData.signature,
        signer: signatureData.signer,
        signedMessage: signatureData.message,
        signedAt: signatureData.timestamp.toString(),
      })
      .then(result => result)
  );

  if (fileResult.error) {
    return {
      ...fileResult,
      error: new Error(`Error Uploading File: ${fileResult.error}`),
    };
  }

  devLog("File Uploaded to IPFS with signature");

  // Add file to group
  await pinata.groups.private.addFiles({
    groupId: groupId,
    files: [fileResult.data.id],
  });

  devLog("File added to group");

  // If NFT data is provided, create the database record
  if (nftData && fileResult.data.cid) {
    const fileData = fileResult.data; // Returns UploadResponse

    const metadata: NFTMetadata = {
      name: nftData.title,
      description: nftData.description ?? "",
      image: `ipfs://${fileData.cid}`,
      attributes: [
        { trait_type: "Category", value: nftData.category || "Uncategorized" },
        { trait_type: "File Type", value: nftData.fileType || "Unknown" },
        { trait_type: "Royalty Fee", value: `${nftData.royaltyFee}%` },
      ],
    };

    const metadataResult = await storeMetadata(metadata);

    if (!metadataResult.data) {
      return {
        data: null,
        error: new Error("Failed to retrieve media metadata"),
      };
    }

    const tokenUriCid = metadataResult.data.cid;

    const mediaNFT = await tryCatch(
      db.createMediaNFT({
        ...nftData,
        cid: fileData.cid,
        metadataCid: tokenUriCid,
        domain: process.env.NEXT_PUBLIC_GATEWAY_URL,
      })
    );

    if (mediaNFT.error) {
      console.error("Error during Media NFT Creation: ", mediaNFT.error);
    }
  }

  return fileResult;
}

export async function getFiles(options: GetFilesOptions = {}): Promise<Result<FileListResponse>> {
  // Create the promise and pass it to tryCatch
  const queryPromise = (async (): Promise<FileListResponse> => {
    let query = pinata.files.private.list();

    // Apply filters conditionally
    if (options.name !== undefined) {
      query = query.name(options.name);
    }
    if (options.group !== undefined) {
      query = query.group(options.group);
    }
    if (options.noGroup !== undefined) {
      query = query.noGroup(options.noGroup);
    }
    if (options.cid !== undefined) {
      query = query.cid(options.cid);
    }
    if (options.keyvalues !== undefined) {
      query = query.keyvalues(options.keyvalues);
    }
    if (options.mimeType !== undefined) {
      query = query.mimeType(options.mimeType);
    }
    if (options.order !== undefined) {
      query = query.order(options.order);
    }
    if (options.limit !== undefined) {
      query = query.limit(options.limit);
    }
    if (options.cidPending !== undefined) {
      query = query.cidPending(options.cidPending);
    }
    if (options.pageToken !== undefined) {
      query = query.pageToken(options.pageToken);
    }

    return await query;
  })();

  const result = await tryCatch(queryPromise);
  return result;
}

export async function getFileByCid(cid: string): Promise<Result<GetCIDResponse>> {
  const result = await tryCatch(pinata.gateways.private.get(cid).then(result => result));
  return result;
}

export async function getAccessLinkByCid(cid: string): Promise<Result<string>> {
  const result = await tryCatch(
    pinata.gateways.private.createAccessLink({ cid, expires: 60 }).then(result => result)
  );
  return result;
}

export async function getGroup(): Promise<Result<GroupResponseItem>> {
  const groupId = process.env.PINATA_GROUP_ID;
  devLog("Group ID: ", groupId);

  if (!groupId) {
    return {
      data: null,
      error: new Error(`No Group ID detected: ${groupId}`),
    };
  }

  const result = await tryCatch(
    pinata.groups.private
      .get({
        groupId: groupId,
      })
      .then(result => result)
  );

  return result;
}

async function storeMetadata(metadata: NFTMetadata) {
  const metadataBlob = new Blob([JSON.stringify(metadata)], {
    type: "application/json",
  });

  const metadataFile = new File([metadataBlob], "metadata.json", {
    type: "application/json",
  });

  const metadataResult = await tryCatch(pinata.upload.public.file(metadataFile).then(res => res));

  if (metadataResult.error) {
    console.error("Error uploading metadata: ", metadataResult.error);
  }

  return metadataResult;
}
