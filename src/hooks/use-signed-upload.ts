"use client";

import { useAccount, useSignMessage } from "wagmi";
import { NFTDto } from "@/types/media";
import { useMediaContract } from "./use-media-contract";
import { useState } from "react";
import { parseEther } from "viem";
import { uploadFile } from "@/lib/ipfs/upload";
import { createNFTData, mintNFTWithMetadata } from "@/lib/nft";

type UploadStatus =
  | "unknown"
  | "rejected"
  | "failed"
  | "upload-failed"
  | "no-wallet"
  | "success"
  | null;

export function useSignedUpload() {
  const { isConnected, address } = useAccount();
  const { signMessageAsync, isPending } = useSignMessage();
  const [status, setStatus] = useState<UploadStatus>(null);
  const contract = useMediaContract();

  const { data: mintingFeeData } = contract.useMintingFee();
  const mintingFee = (mintingFeeData as bigint) || parseEther("0.001");

  const uploadWithSignature = async (
    file: File,
    nftData: NFTDto
  ) => {
    if (!isConnected || !address) {
      setStatus("no-wallet");
      return {
        data: null,
        error: new Error("No wallet detected."),
      };
    }

    // 1. Upload file to IPFS
    const fileUploadResult = await uploadFile(file, address, signMessageAsync);

    if (fileUploadResult.error) {
      setStatus("failed");
      return fileUploadResult;
    }

    // 2. Create NFT data
    const nftDataDto = createNFTData(nftData, address, file);

    // 3. Create and mint NFT with metadata
    const nftResult = await mintNFTWithMetadata(
      nftDataDto,
      address,
      contract,
      fileUploadResult.data.cid,
      mintingFee
    );

    return nftResult;
  };

  return {
    uploadWithSignature,
    isPending,
    status,
    isConnected,
  };
}
