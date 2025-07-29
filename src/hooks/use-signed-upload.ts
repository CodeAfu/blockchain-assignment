"use client";

import { useAccount, useSignMessage } from "wagmi";
import { NFTDto } from "@/types/media";
import { useMediaContract } from "./use-media-contract";
import { useState } from "react";
import { parseEther } from "viem";
import { uploadFile } from "@/lib/ipfs/upload";
import { createNFTData, mintNFTWithMetadata } from "@/lib/nft";

type UploadStatus =
  | "no-wallet"
  | "uploading"
  | "upload-failed"
  | "creating-nft"
  | "minting"
  | "mint-failed"
  | "success"
  | null;

export function useSignedUpload() {
  const { isConnected, address } = useAccount();
  const { signMessageAsync } = useSignMessage();
  const [status, setStatus] = useState<UploadStatus>(null);
  const contract = useMediaContract();

  const isPending = status === "uploading" || status === "creating-nft" || status === "minting";

  const { data: mintingFeeData } = contract.useMintingFee();
  const mintingFee = (mintingFeeData as bigint) || parseEther("0.001");

  const uploadWithSignature = async (file: File, nftData: NFTDto) => {
    if (!isConnected || !address) {
      setStatus("no-wallet");
      return {
        data: null,
        error: new Error("No wallet detected."),
      };
    }

    // 1. Upload file to IPFS
    setStatus("uploading");
    const fileUploadResult = await uploadFile(file, address, signMessageAsync);

    if (fileUploadResult.error) {
      setStatus("upload-failed");
      return fileUploadResult;
    }

    // 2. Create NFT data
    setStatus("creating-nft");
    const nftDataDto = createNFTData(nftData, address, file);

    // 3. Create and mint NFT with metadata
    setStatus("minting");
    const nftResult = await mintNFTWithMetadata(
      nftDataDto,
      address,
      contract,
      fileUploadResult.data.cid,
      mintingFee
    );

    if (nftResult.error) {
      setStatus("mint-failed");
      return nftResult;
    }

    setStatus("success");
    return nftResult;
  };

  return {
    uploadWithSignature,
    isPending,
    status,
    isConnected,
  };
}
