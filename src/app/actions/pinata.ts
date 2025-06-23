"use server";

import { tryCatch } from "../../lib/utils";
import { Result } from "@/types/result";
import { GroupResponseItem, PinataSDK, UploadResponse } from "pinata";

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
  console.log("Group ID: ", groupId);

  if (!groupId) {
    return {
      data: null,
      error: new Error(`Pinata Group ID Not Found.`),
    };
  }

  console.log("Group found");

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

  console.log("File Uploaded");

  if (fileResult.error) {
    return {
      ...fileResult,
      error: new Error(`Error Uploading File: ${fileResult.error}`),
    };
  }

  console.log("File Uploaded to IPFS with signature");

  // Add file to group
  await pinata.groups.private.addFiles({
    groupId: groupId,
    files: [fileResult.data.id],
  });

  console.log("File added to group");
  return fileResult;
}

export async function getGroup(): Promise<Result<GroupResponseItem>> {
  const groupId = process.env.PINATA_GROUP_ID;
  console.log("Group ID: ", groupId);

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
