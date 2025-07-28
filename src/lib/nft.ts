import { createMetadata, saveToDatabase } from "@/app/actions";
import { CreateNFTDataReturnType, NFTData, NFTDto } from "@/types/media";
import { devLog } from "@/utils/logging";
import { getFileType } from "@/utils/file-utils";
import { Address, parseEther } from "viem";
import { uploadMetadata } from "@/lib/ipfs/upload";
import { Result } from "@/types/result";
import { MediaContract } from "@/types/contract";
import { convertPercentToBasisPoints } from "@/utils/media-utils";
import { MediaNFT } from "@prisma/client";
import { tryCatch } from "@/utils/try-catch";
import { toWei } from "@/utils/ethers-utils";

type PatchedNFT = Omit<NFTData, "tokenId"> & {
  royaltyFeeInBasisPoints: bigint;
  priceInWei: bigint;
};

export function createNFTData(
  nftData: NFTDto,
  address: Address,
  file: File
): CreateNFTDataReturnType {
  return {
    ...nftData,
    creatorAddress: address,
    ownerAddress: address,
    fileType: getFileType(file.type),
    fileSize: BigInt(file.size),
    priceInWei: parseEther(nftData.price.toString()),
    royaltyFeeInBasisPoints: convertPercentToBasisPoints(nftData.royaltyFee),
  };
}

export async function mintNFTWithMetadata(
  nftDataDto: CreateNFTDataReturnType,
  address: Address,
  contract: MediaContract,
  fileCid: string,
  mintingFee: bigint
): Promise<Result<MediaNFT>> {
  try {
    // Create metadata
    const metadataResult = await tryCatch(createMetadata({ cid: fileCid, nftData: nftDataDto }));
    if (metadataResult.error) {
      return metadataResult;
    }

    const metadata = metadataResult.data;

    // Upload metadata to IPFS
    const metadataUploadResult = await uploadMetadata(metadata, address);

    if (metadataUploadResult.error) {
      return metadataUploadResult;
    }

    const metadataURI = metadataUploadResult.data.cid;

    const patchedNFTData = patchNFTData(nftDataDto);

    // Mint NFT on blockchain
    contract.mintNFT(
      address,
      metadataURI,
      patchedNFTData.royaltyFeeInBasisPoints,
      patchedNFTData.priceInWei,
      mintingFee
    );
    devLog("Minted NFT");

    if (!contract.mintedTokenId) {
      return {
        data: null,
        error: new Error("Failed to get minted token ID"),
      };
    }

    // Prepare data for database
    const nftDataWithCid: PatchedNFT & { tokenId: number, cid: string; metadataCid: string } = {
      ...patchedNFTData,
      tokenId: contract.mintedTokenId,
      cid: fileCid,
      metadataCid: metadataUploadResult.data.cid,
    };

    // Save to database
    return await saveToDatabase(nftDataWithCid);
  } catch (error) {
    return {
      data: null,
      error: new Error(`NFT minting failed: ${error}`),
    };
  }
}

export function patchNFTData(nftDataDto: CreateNFTDataReturnType): PatchedNFT {
  if (!nftDataDto.royaltyFeeInBasisPoints) {
    nftDataDto.royaltyFeeInBasisPoints = convertPercentToBasisPoints(nftDataDto.royaltyFee);
  }

  if (!nftDataDto.priceInWei) {
    nftDataDto.priceInWei = toWei(nftDataDto.price);
  }

  return nftDataDto as PatchedNFT;
}
