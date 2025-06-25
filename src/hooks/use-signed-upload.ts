"use client";

import { useAccount, useSignMessage } from "wagmi";
import {
  createMetadata,
  saveToDatabase,
  storeMetadata,
  uploadFileWithSignature,
} from "@/app/actions";
import { NFTData } from "@/types/media";
import { devLog, getFileType } from "@/lib/utils";
import { useMediaContract } from "./use-media-contract";
import { useState } from "react";

type SignedUploadError =
  | "unknown"
  | "rejected"
  | "upload-failed"
  | "create-metadata-failed"
  | "store-metadata-failed"
  | "mint-failed"
  | null;

export function useSignedUpload() {
  const { address, isConnected } = useAccount();
  const { signMessageAsync, isPending } = useSignMessage();
  const { mintNFT, mintedTokenId } = useMediaContract();
  const [errorType] = useState<SignedUploadError>(null);

  const uploadWithSignature = async (
    file: File,
    nftData: Omit<NFTData, "creatorAddress" | "ownerAddress" | "tokenId">
  ) => {
    if (!isConnected || !address) {
      throw new Error("Wallet not connected");
    }

    try {
      // Create a message to sign
      const message = `Uploading file: ${file.name} (${file.size} bytes) at ${Date.now()}`;
      devLog(message);

      // Sign the message
      const signature = await signMessageAsync({ message });
      devLog("Signed");

      // Create FormData for server action
      const formData = new FormData();
      formData.append("file", file);

      // Upload with signature
      const fileUploadResult = await uploadFileWithSignature(formData, {
        signature,
        signer: address,
        message,
        timestamp: Date.now(),
      });

      if (fileUploadResult.error) {
        return fileUploadResult;
      }

      // Create DTO for metadata
      const nftDataDto: Omit<NFTData, "tokenId"> = {
        ...nftData,
        creatorAddress: address,
        ownerAddress: address,
        fileType: getFileType(file.type),
        fileSize: BigInt(file.size),
      };

      // Get Metadata info
      const metadata = await createMetadata(fileUploadResult.data, nftDataDto);

      // Create Metadata File
      const metadataBlob = new Blob([JSON.stringify(metadata)], {
        type: "application/json",
      });

      const metadataFile = new File([metadataBlob], `metadata.json`, {
        type: "application/json",
      });

      // Store Metadata on IPFS
      const filename = `${address.slice(0, 6)}-${Date.now()}`;
      const metadataUploadResult = await storeMetadata(metadataFile, filename);

      if (metadataUploadResult.error) {
        return metadataUploadResult;
      }

      if (fileUploadResult.error) return fileUploadResult;
      devLog("File CID retrieved: ", fileUploadResult);

      // Mint NFT with smart contract
      mintNFT(address, metadataUploadResult.data.cid, nftData.royaltyFee);
      devLog("Minted NFT");

      if (!mintedTokenId) {
        return fileUploadResult;
      }

      // DB DTO
      const nftDataWithCid: NFTData & { cid: string; metadataCid: string } = {
        ...nftDataDto,
        tokenId: mintedTokenId,
        cid: fileUploadResult.data.cid,
        metadataCid: metadataUploadResult.data.cid,
      };

      // Add to database
      const dbResult = saveToDatabase(nftDataWithCid);

      return dbResult;
    } catch (error) {
      console.error("Signed upload failed:", error);
      return {
        data: null,
        error: new Error(`useSignedUpload failed: ${error}`),
      };
    }
  };

  return {
    uploadWithSignature,
    isPending,
    errorType,
    isConnected,
  };
}
