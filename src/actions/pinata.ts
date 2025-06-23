"use server";

import { tryCatch, devLog } from "@/lib/utils";
import { Result } from "@/types/result";
import {
  FileListResponse,
  GetCIDResponse,
  GroupResponseItem,
  PinataSDK,
  UploadResponse,
} from "pinata";

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
      .then(result => result)
  );

  devLog("File Uploaded");

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
  return fileResult;
}

export async function getFiles(): Promise<Result<FileListResponse>> {
  const result = await tryCatch(pinata.files.private.list().then(result => result));
  return result;
}

export async function getFileByCid(cid: string): Promise<Result<GetCIDResponse>> {
  const result = await tryCatch(pinata.gateways.private.get(cid).then(result => result));
  return result;
}

export async function getAccessLink(cid: string): Promise<Result<string>> {
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
