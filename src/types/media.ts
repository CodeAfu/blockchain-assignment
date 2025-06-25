import { FileType } from "@prisma/client";
import { Address, Hash } from "viem";

export const imageTypes = ["image/jpeg", "image/png", "image/gif", "image/svg+xml"] as const;
export const audioTypes = ["audio/mpeg", "audio/ogg"] as const;
export const videoTypes = ["video/mp4"] as const;

export const allowedContentTypes = [...imageTypes, ...audioTypes, ...videoTypes] as const;

export type MediaContentType = (typeof allowedContentTypes)[number];

export interface MediaItem {
  title: string;
  owner: Address;
  ipfsHash: string;
  timestamp: bigint;
  royaltyFee: bigint;
}

export interface MediaRegisteredEvent {
  mediaId: Hash;
  owner: Address;
  title: string;
  ipfsHash: string;
  royaltyFee: bigint;
}

export interface MediaAccessedEvent {
  tokenId: bigint;
  buyer: Address;
  amountPaid: bigint;
}

export interface MediaMintedEvent {
  tokenId: bigint;
  creator: Address;
  metadataURI: string;
  royaltyFee: bigint;
}

export interface NFTData {
  tokenId: number;
  creatorAddress: string;
  ownerAddress: string;
  title: string;
  description?: string;
  royaltyFee: bigint;
  category?: string;
  tags?: string[];
  fileType?: FileType;
  fileSize?: bigint;
}

export interface NFTMetadata {
  name: string;
  description: string;
  image: string;
  attributes: Array<{
    trait_type: string;
    value: string | number;
  }>;
  properties?: {
    // Optional
    files: Array<{
      uri: string;
      type: string;
    }>;
    category: string;
  };
}

export interface MediaDetails {
  royaltyFee: bigint;
  creator: Address;
}

export interface NFTMediaItem {
  tokenId: bigint;
  tokenURI: string;
  owner: Address;
  creator: Address;
  royaltyFee: bigint;
}

export interface MediaNFTInput {
  title: string;
  description: string;
  category: string;
  tags?: string[];
  royaltyFee: bigint;
  creatorAddress: string;
  recipientAddress?: string;
}

export interface MintResult {
  tokenId: number;
  creator: string;
  recipient: string;
  royaltyFee: bigint;
  fileIpfsHash: string;
  metadataIpfsHash: string;
  transactionHash: string;
}

export interface MediaAccessData {
  tokenId: number;
  buyerAddress: string;
  amountPaid: bigint;
  transactionHash?: string;
}

export interface MediaTransferData {
  tokenId: number;
  fromAddress: string;
  toAddress: string;
  transactionHash?: string;
}
