"use client";

import { useAccount, useSignMessage } from "wagmi";
import {
  createMetadata,
  saveToDatabase,
  storeMetadata,
  uploadFileWithSignature,
} from "@/app/actions";
import { NFTData } from "@/types/media";
import { devLog } from "@/utils/logging";
import { useMediaContract } from "./use-media-contract";
import { useState } from "react";
import { Address, parseEther } from "viem";
import { Result } from "@/types/result";
import { UploadResponse } from "pinata";
import { getFileType } from "@/utils/file-utils";

type UploadStatus = "unknown" | "rejected" | "failed" | "no-wallet" | null;

export function useSignedUpload() {
  const { address, isConnected } = useAccount();
  const { signMessageAsync, isPending } = useSignMessage();
  const [status, setStatus] = useState<UploadStatus>(null);
  const contract = useMediaContract();

  const { data: mintingFeeData } = contract.useMintingFee();
  const mintingFee = (mintingFeeData as bigint) || parseEther("0.001");

  const uploadWithSignature = async (
    file: File,
    nftData: Omit<NFTData, "creatorAddress" | "ownerAddress" | "tokenId">
  ) => {
    if (!isConnected || !address) {
      setStatus("no-wallet");
      return {
        data: null,
        error: new Error("No wallet detected."),
      };
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

      // Upload to Pinata IPFS
      const fileUploadResult = await uploadFile(formData, signature, address, message);

      if (fileUploadResult.error) {
        setStatus("failed");
        return fileUploadResult;
      }

      nftData.priceInWei = parseEther(nftData.price.toString());
      nftData.royaltyInBasisPoints = contract.convertPercentToBasisPoints(
        Number(nftData.royaltyFee)
      );

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

      const metadataURI = metadataUploadResult.data.cid;

      // Mint NFT with smart contract
      contract.mintNFT(
        address,
        metadataURI,
        nftData.royaltyInBasisPoints,
        nftData.priceInWei,
        mintingFee
      );
      devLog("Minted NFT");

      if (!contract.mintedTokenId) {
        return fileUploadResult;
      }

      // DB DTO
      const nftDataWithCid: NFTData & { cid: string; metadataCid: string } = {
        ...nftDataDto,
        royaltyFee: BigInt(nftDataDto.royaltyFee),
        tokenId: contract.mintedTokenId,
        cid: fileUploadResult.data.cid,
        metadataCid: metadataUploadResult.data.cid,
      };

      // Add to database
      const dbResult = await saveToDatabase(nftDataWithCid);

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
    errorType: status,
    isConnected,
  };
}

async function uploadFile(
  formData: FormData,
  signature: string,
  address: Address,
  message: string
): Promise<Result<UploadResponse>> {
  const fileUploadResult = uploadFileWithSignature(formData, {
    signature,
    signer: address,
    message,
    timestamp: Date.now(),
  });

  return fileUploadResult;
}
