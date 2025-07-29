"use server";

import { db } from "@/lib/database";
import { devLog } from "@/utils/logging";
import { Result } from "@/types/result";
import {
  FileListResponse,
  GetCIDResponse,
  GroupResponseItem,
  PinataSDK,
  UploadResponse,
} from "pinata";
import { CreateNFTDataReturnType, NFTData, NFTMetadata } from "@/types/media";
import { tryCatch } from "@/utils/try-catch";
import { MediaNFT } from "@prisma/client";

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

// interface UploadResult {
//   fileCid: string;
//   tokenUriCid: string;
// }

export async function uploadFileWithSignature(
  formData: FormData,
  signatureData: SignatureData
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
      .group(groupId)
      .then(result => result)
  );

  if (fileResult.error) {
    return {
      ...fileResult,
      error: new Error(`Error Uploading File: ${fileResult.error}`),
    };
  }

  devLog("File Uploaded to IPFS with signature");
  return fileResult;
}

export async function getMetadata(cid: string) {
  const result = await tryCatch(pinata.gateways.public.get(cid).then(res => res));
  return result;
}

export async function saveToDatabase(nftData: Omit<MediaNFT, "id" | "createdAt" | "updatedAt">) {
  const dbResult = await tryCatch(
    db.createMediaNFT({
      ...nftData,
      cid: nftData.cid,
      metadataCid: nftData.metadataCid,
      domain: process.env.NEXT_PUBLIC_GATEWAY_URL || null,
    })
  );

  if (dbResult.error) {
    console.error("Error during Media NFT Creation: ", dbResult.error);
  }

  devLog("DB Record created: ", dbResult.data);

  return dbResult;
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

export async function storeMetadata(file: File, filename: string): Promise<Result<UploadResponse>> {
  if (!file) {
    return {
      data: null,
      error: new Error("File not provided"),
    };
  }

  const groupId = process.env.PINATA_GROUP_ID;

  if (!groupId) {
    return {
      data: null,
      error: new Error("Missing Pinata Group ID."),
    };
  }

  const uploadResult = await tryCatch(
    pinata.upload.public
      .file(file)
      .name(`${groupId}-${filename}`)
      .keyvalues({
        env: process.env.NODE_ENV === "development" ? "dev" : "prod",
      })
      .then(res => res)
  );

  return uploadResult;
}

export async function createMetadata(metadataArgs: {
  cid: string;
  nftData: Omit<NFTData, "tokenId"> | NFTData | CreateNFTDataReturnType;
}): Promise<NFTMetadata> {
  const { cid, nftData } = metadataArgs;
  return {
    name: nftData.title,
    description: nftData.description ?? "",
    image: `ipfs://${cid}`,
    attributes: [
      { trait_type: "File Type", value: nftData.fileType || "Unknown" },
      { trait_type: "File Size", value: Number(nftData.fileSize) || "Unknown" },
      { trait_type: "Price", value: `${nftData.price} ETH` },
      { trait_type: "Royalty Fee", value: `${nftData.royaltyFee}%` },
    ],
  };
}
