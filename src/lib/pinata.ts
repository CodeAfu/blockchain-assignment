"server only";

import { PinataSDK, UploadResponse } from "pinata";

if (!process.env.PINATA_JWT) {
  throw new Error("PINATA_JWT is required");
}

const pinata = new PinataSDK({
  pinataJwt: process.env.PINATA_JWT,
  pinataGateway: process.env.PINATA_GATEWAY,
});

export interface UploadResult {
  success: boolean;
  ipfsHash?: UploadResponse;
  pinataUrl?: string;
  error?: string;
}

export interface FileMetadata {
  name?: string;
  category?: string;
  [key: string]: string | undefined;
}

export async function uploadFileToIPFS(
  file: File,
  metadata: FileMetadata = {}
): Promise<UploadResult> {
  try {
    const upload = await pinata.upload.public.file(file).keyvalues({
      name: metadata.name || "Media File",
      keyvalues: metadata,
    });

    return {
      success: true,
      ipfsHash: upload.IpfsHash,
      pinataUrl: `https://gateway.pinata.cloud/ipfs/${upload.IpfsHash}`,
    };
  } catch (error) {
    console.error("Error uploading file to IPFS:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}

export async function uploadJSONToIPFS(jsonData: object): Promise<UploadResult> {
  try {
    const upload = await pinata.upload.public.json(jsonData);

    return {
      success: true,
      ipfsHash: upload,
      pinataUrl: `https://gateway.pinata.cloud/ipfs/${upload.IpfsHash}`,
    };
  } catch (error) {
    console.error("Error uploading JSON to IPFS:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}

export async function getFromIPFS(
  ipfsHash: string
): Promise<{ success: boolean; data?: any; error?: string }> {
  try {
    const response = await fetch(`https://gateway.pinata.cloud/ipfs/${ipfsHash}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return { success: true, data };
  } catch (error) {
    console.error("Error fetching from IPFS:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}
