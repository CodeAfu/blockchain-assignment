import { Address, Hash } from "viem";
import { UseReadContractReturnType } from "wagmi";

// Event types
export interface MediaMintedEvent {
  tokenId: bigint;
  creator: Address;
  metadataURI: string;
  creatorRoyalty: bigint;
  initialPrice: bigint;
}

export interface MediaListedEvent {
  tokenId: bigint;
  seller: Address;
  price: bigint;
}

export interface MediaSoldEvent {
  tokenId: bigint;
  seller: Address;
  buyer: Address;
  price: bigint;
  creatorRoyalty: bigint;
  platformFee: bigint;
}

export interface MediaAccessedEvent {
  tokenId: bigint;
  buyer: Address;
  amountPaid: bigint;
}

// Data structure types
export interface MediaDetails {
  creatorRoyalty: bigint;
  creator: Address;
  salePrice: bigint;
  isForSale: boolean;
}

export interface SaleInfo {
  isForSale: boolean;
  price: bigint;
  owner: Address;
  creator: Address;
  creatorRoyalty: bigint;
}

export interface NFTMediaItem {
  tokenId: bigint;
  tokenURI: string;
  owner: Address;
  creator: Address;
  creatorRoyalty: bigint;
  salePrice: bigint;
  isForSale: boolean;
}

// Main contract type
export interface MediaContract {
  // Write functions
  mintNFT: (
    recipient: Address,
    metadataURI: string,
    creatorRoyaltyBps: bigint,
    initialSalePrice: bigint,
    mintingFee: bigint
  ) => void;
  mintNFTAsync: (
    recipient: Address,
    metadataURI: string,
    creatorRoyaltyBps: bigint,
    initialSalePrice: bigint,
    mintingFee: bigint
  ) => Promise<{
    tokenId: number;
    txHash: Hash;
  }>;

  listForSale: (tokenId: bigint, price: bigint) => void;
  unlistFromSale: (tokenId: bigint) => void;
  buyNFT: (tokenId: bigint, paymentAmount: bigint) => void;
  accessMedia: (tokenId: bigint, paymentAmount?: bigint) => void;

  // Read hooks - these return wagmi's useReadContract hook results
  useTokenURI: (tokenId: bigint | undefined) => UseReadContractReturnType<readonly [unknown]>;
  useOwnerOf: (tokenId: bigint | undefined) => UseReadContractReturnType<readonly [unknown]>;
  useBalanceOf: (owner: Address | undefined) => UseReadContractReturnType<readonly [unknown]>;
  useSaleInfo: (tokenId: bigint | undefined) => UseReadContractReturnType<readonly [unknown]>;
  useTokenCount: () => UseReadContractReturnType<readonly [unknown]>;
  useMediaData: (tokenId: bigint | undefined) => UseReadContractReturnType<readonly [unknown]>;
  useMintingFee: () => UseReadContractReturnType<readonly [unknown]>;
  usePlatformRoyalty: () => UseReadContractReturnType<readonly [unknown]>;

  // Event watchers
  useWatchMediaMinted: (onEvent: (event: MediaMintedEvent) => void) => void;
  useWatchMediaListed: (onEvent: (event: MediaListedEvent) => void) => void;
  useWatchMediaSold: (onEvent: (event: MediaSoldEvent) => void) => void;
  useWatchMediaAccessed: (onEvent: (event: MediaAccessedEvent) => void) => void;

  // Utility functions
  formatMediaDetails: (
    rawData: readonly [bigint, Address, bigint, boolean] | undefined
  ) => MediaDetails | null;

  formatSaleInfo: (
    rawData: readonly [boolean, bigint, Address, Address, bigint] | undefined
  ) => SaleInfo | null;

  formatNFTMediaItem: (
    tokenId: bigint,
    tokenURI: string | undefined,
    owner: Address | undefined,
    mediaDetails: MediaDetails | null,
    saleInfo: SaleInfo | null
  ) => NFTMediaItem | null;

  convertPercentToBasisPoints: (percent: number) => bigint;
  convertBasisPointsToPercent: (basisPoints: bigint) => number;

  // Transaction state
  isWritePending: boolean;
  isConfirming: boolean;
  isConfirmed: boolean;
  lastTxHash: Hash | undefined;
  pendingTx: string | null;
  writeError: Error | null;
  txError: Error | null;

  // Contract info
  address: string; // Changed from Address to string to match your actual type
  abi: unknown; // Using unknown instead of any
  mintedTokenId: number | undefined;
}
