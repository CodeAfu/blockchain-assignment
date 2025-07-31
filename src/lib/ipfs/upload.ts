// lib/upload.ts - File upload utilities
import { uploadFileWithSignature as uploadFileAction, storeMetadata } from "@/actions/nft-actions";
import { devLog } from "@/utils/logging";
import { Address } from "viem";
import { Result } from "@/types/result";
import { UploadResponse } from "pinata";
import { NFTMetadata } from "@/types/media";
import { tryCatch } from "@/utils/try-catch";

export async function uploadFile(
  file: File,
  address: string,
  signMessageAsync: (args: { message: string }) => Promise<string>
): Promise<Result<UploadResponse>> {
  const message = `Uploading file: ${file.name} (${file.size} bytes) at ${Date.now()}`;
  devLog(message);

  const signatureResult = await tryCatch(signMessageAsync({ message }));

  if (signatureResult.error) {
    return signatureResult;
  }

  devLog("Signed");

  // Create FormData and upload
  const formData = new FormData();
  formData.append("file", file);

  return await uploadFileAction(formData, {
    signature: signatureResult.data,
    signer: address,
    message,
    timestamp: Date.now(),
  });
}

export async function uploadMetadata(
  metadata: NFTMetadata,
  address: Address
): Promise<Result<UploadResponse>> {
  const metadataBlob = new Blob([JSON.stringify(metadata)], {
    type: "application/json",
  });

  const metadataFile = new File([metadataBlob], `metadata.json`, {
    type: "application/json",
  });

  const filename = `${address.slice(0, 6)}-${Date.now()}`;
  return await storeMetadata(metadataFile, filename);
}
