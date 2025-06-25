// src/hooks/useMediaContract.ts
import {
  useWriteContract,
  useReadContract,
  useWaitForTransactionReceipt,
  useWatchContractEvent,
  // useBalance,
} from "wagmi";
import { MEDIA_CONTRACT_ABI, MEDIA_CONTRACT_ADDRESS } from "@/lib/consts";
import { Address, Hash, decodeEventLog } from "viem";
import { useState, useCallback, useEffect } from "react";
import { MediaMintedEvent, MediaAccessedEvent, MediaDetails, NFTMediaItem } from "@/types/media";

export function useMediaContract() {
  const [lastTxHash, setLastTxHash] = useState<Hash>();
  const [pendingTx, setPendingTx] = useState<string | null>(null);
  const [mintedTokenId, setMintedTokenId] = useState<number>();

  const {
    writeContract,
    data: writeData,
    isPending: isWritePending,
    error: writeError,
  } = useWriteContract();

  // Wait for transaction confirmation
  const {
    data: receipt,
    isLoading: isConfirming,
    isSuccess: isConfirmed,
    error: txError,
  } = useWaitForTransactionReceipt({
    hash: writeData,
  });

  // Update last transaction hash when write data changes
  useEffect(() => {
    if (writeData) {
      setLastTxHash(writeData);
    }
  }, [writeData]);

  // Decode tokenId from logs
  useEffect(() => {
    if (receipt?.logs && isConfirmed) {
      for (const log of receipt.logs) {
        try {
          const parsed = decodeEventLog({
            abi: MEDIA_CONTRACT_ABI,
            eventName: "MediaMinted",
            topics: log.topics,
            data: log.data,
          });

          if (parsed.args && parsed.eventName === "MediaMinted") {
            const tokenId = (parsed.args as unknown as { tokenId: bigint }).tokenId;
            setMintedTokenId(Number(tokenId));
            break;
          }
        } catch {
          continue;
        }
      }
    }
  }, [receipt, isConfirmed]);

  // Clear pending state when transaction is confirmed or fails
  useEffect(() => {
    if (isConfirmed || txError) {
      setPendingTx(null);
    }
  }, [isConfirmed, txError]);

  // WRITE FUNCTIONS
  const mintNFT = useCallback(
    (recipient: Address, metadataURI: string, royaltyFee: bigint) => {
      setPendingTx("mintNFT");
      writeContract({
        address: MEDIA_CONTRACT_ADDRESS as Address,
        abi: MEDIA_CONTRACT_ABI,
        functionName: "mintNFT",
        args: [recipient, metadataURI, royaltyFee],
      });
    },
    [writeContract]
  );

  const accessMedia = useCallback(
    (tokenId: bigint, paymentAmount: bigint) => {
      setPendingTx("accessMedia");
      writeContract({
        address: MEDIA_CONTRACT_ADDRESS as Address,
        abi: MEDIA_CONTRACT_ABI,
        functionName: "accessMedia",
        args: [tokenId],
        value: paymentAmount,
      });
    },
    [writeContract]
  );

  // READ FUNCTIONS
  const useTokenURI = (tokenId: bigint | undefined) => {
    return useReadContract({
      address: MEDIA_CONTRACT_ADDRESS as Address,
      abi: MEDIA_CONTRACT_ABI,
      functionName: "tokenURI",
      args: tokenId !== undefined ? [tokenId] : undefined,
      query: {
        enabled: tokenId !== undefined,
      },
    });
  };

  const useOwnerOf = (tokenId: bigint | undefined) => {
    return useReadContract({
      address: MEDIA_CONTRACT_ADDRESS as Address,
      abi: MEDIA_CONTRACT_ABI,
      functionName: "ownerOf",
      args: tokenId !== undefined ? [tokenId] : undefined,
      query: {
        enabled: tokenId !== undefined,
      },
    });
  };

  const useBalanceOf = (owner: Address | undefined) => {
    return useReadContract({
      address: MEDIA_CONTRACT_ADDRESS as Address,
      abi: MEDIA_CONTRACT_ABI,
      functionName: "balanceOf",
      args: owner ? [owner] : undefined,
      query: {
        enabled: !!owner,
      },
    });
  };

  const useTokenOfOwnerByIndex = (owner: Address | undefined, index: bigint | undefined) => {
    return useReadContract({
      address: MEDIA_CONTRACT_ADDRESS as Address,
      abi: MEDIA_CONTRACT_ABI,
      functionName: "tokenOfOwnerByIndex",
      args: owner && index !== undefined ? [owner, index] : undefined,
      query: {
        enabled: !!owner && index !== undefined,
      },
    });
  };

  const useGetRoyaltyFee = (tokenId: bigint | undefined) => {
    return useReadContract({
      address: MEDIA_CONTRACT_ADDRESS as Address,
      abi: MEDIA_CONTRACT_ABI,
      functionName: "getRoyaltyFee",
      args: tokenId !== undefined ? [tokenId] : undefined,
      query: {
        enabled: tokenId !== undefined,
      },
    });
  };

  const useGetCreator = (tokenId: bigint | undefined) => {
    return useReadContract({
      address: MEDIA_CONTRACT_ADDRESS as Address,
      abi: MEDIA_CONTRACT_ABI,
      functionName: "getCreator",
      args: tokenId !== undefined ? [tokenId] : undefined,
      query: {
        enabled: tokenId !== undefined,
      },
    });
  };

  const useTokenCount = () => {
    return useReadContract({
      address: MEDIA_CONTRACT_ADDRESS as Address,
      abi: MEDIA_CONTRACT_ABI,
      functionName: "tokenCount",
    });
  };

  const useMediaData = (tokenId: bigint | undefined) => {
    return useReadContract({
      address: MEDIA_CONTRACT_ADDRESS as Address,
      abi: MEDIA_CONTRACT_ABI,
      functionName: "mediaData",
      args: tokenId !== undefined ? [tokenId] : undefined,
      query: {
        enabled: tokenId !== undefined,
      },
    });
  };

  // EVENT WATCHERS
  const useWatchMediaMinted = (onEvent: (event: MediaMintedEvent) => void) => {
    useWatchContractEvent({
      address: MEDIA_CONTRACT_ADDRESS as Address,
      abi: MEDIA_CONTRACT_ABI,
      eventName: "MediaMinted",
      onLogs: logs => {
        logs.forEach(log => {
          try {
            const decoded = decodeEventLog({
              abi: MEDIA_CONTRACT_ABI,
              data: log.data,
              topics: log.topics,
            });

            const [tokenId, creator, metadataURI, royaltyFee] = decoded.args as [
              bigint,
              Address,
              string,
              bigint,
            ];

            if (tokenId !== undefined && creator && metadataURI && royaltyFee !== undefined) {
              onEvent({ tokenId, creator, metadataURI, royaltyFee });
            }
          } catch (error) {
            console.error("Failed to decode MediaMinted event:", error);
          }
        });
      },
    });
  };

  const useWatchMediaAccessed = (onEvent: (event: MediaAccessedEvent) => void) => {
    useWatchContractEvent({
      address: MEDIA_CONTRACT_ADDRESS as Address,
      abi: MEDIA_CONTRACT_ABI,
      eventName: "MediaAccessed",
      onLogs: logs => {
        logs.forEach(log => {
          try {
            const decoded = decodeEventLog({
              abi: MEDIA_CONTRACT_ABI,
              data: log.data,
              topics: log.topics,
            });

            const [tokenId, buyer, amountPaid] = decoded.args as [bigint, Address, bigint];

            if (tokenId !== undefined && buyer && amountPaid !== undefined) {
              onEvent({ tokenId, buyer, amountPaid });
            }
          } catch (error) {
            console.error("Failed to decode MediaAccessed event:", error);
          }
        });
      },
    });
  };

  // UTILITY FUNCTIONS
  const formatMediaDetails = (
    rawData: readonly [bigint, Address] | undefined
  ): MediaDetails | null => {
    if (!rawData || rawData.length < 2) return null;

    return {
      royaltyFee: rawData[0],
      creator: rawData[1],
    };
  };

  const formatNFTMediaItem = (
    tokenId: bigint,
    tokenURI: string | undefined,
    owner: Address | undefined,
    mediaDetails: MediaDetails | null
  ): NFTMediaItem | null => {
    if (!tokenURI || !owner || !mediaDetails) return null;

    return {
      tokenId,
      tokenURI,
      owner,
      creator: mediaDetails.creator,
      royaltyFee: mediaDetails.royaltyFee,
    };
  };

  // Contract state and utilities
  const contract = {
    // Write functions
    mintNFT,
    accessMedia,

    // Read hooks
    useTokenURI,
    useOwnerOf,
    useBalanceOf,
    useTokenOfOwnerByIndex,
    useGetRoyaltyFee,
    useGetCreator,
    useTokenCount,
    useMediaData,

    // Event watchers
    useWatchMediaMinted,
    useWatchMediaAccessed,

    // Utilities
    formatMediaDetails,
    formatNFTMediaItem,

    // Transaction state
    isWritePending,
    isConfirming,
    isConfirmed,
    lastTxHash,
    pendingTx,
    writeError,
    txError,

    // Contract info
    address: MEDIA_CONTRACT_ADDRESS,
    abi: MEDIA_CONTRACT_ABI,
    mintedTokenId,
  };

  return contract;
}

// Hook for managing NFT media library
export function useMediaLibrary() {
  const contract = useMediaContract();
  const { data: tokenCount, refetch: refetchTokenCount } = contract.useTokenCount();
  const [mediaCache, setMediaCache] = useState<Map<bigint, NFTMediaItem>>(new Map());

  // Generate array of token IDs based on token count
  const generateTokenIds = useCallback((count: bigint): bigint[] => {
    const ids: bigint[] = [];
    for (let i = BigInt(0); i < count; i++) {
      ids.push(i);
    }
    return ids;
  }, []);

  const tokenIds = tokenCount ? generateTokenIds(tokenCount as bigint) : [];

  // Fetch multiple NFT media items
  const fetchMediaItems = useCallback(
    async (tokenIds: bigint[]) => {
      const items: NFTMediaItem[] = [];

      for (const tokenId of tokenIds) {
        if (mediaCache.has(tokenId)) {
          const cachedItem = mediaCache.get(tokenId);
          if (cachedItem) items.push(cachedItem);
        }
        // Note: In a real implementation, you'd want to batch these calls
        // or use a different pattern to avoid making too many individual calls
      }

      return items;
    },
    [mediaCache]
  );

  // Clear cache when new media is minted
  contract.useWatchMediaMinted(() => {
    setMediaCache(new Map());
    refetchTokenCount();
  });

  return {
    ...contract,
    tokenCount: tokenCount as bigint | undefined,
    tokenIds,
    mediaCache,
    fetchMediaItems,
    refetchTokenCount,
  };
}

// Hook for managing user's owned NFTs
export function useUserMedia(userAddress: Address | undefined) {
  const contract = useMediaContract();
  const { data: userBalance, refetch: refetchUserBalance } = contract.useBalanceOf(userAddress);

  // Generate array of indices for user's tokens
  const generateUserTokenIndices = useCallback((balance: bigint): bigint[] => {
    const indices: bigint[] = [];
    for (let i = BigInt(0); i < balance; i++) {
      indices.push(i);
    }
    return indices;
  }, []);

  const userTokenIndices = userBalance ? generateUserTokenIndices(userBalance as bigint) : [];

  // Fetch user's token IDs
  const fetchUserTokenIds = useCallback(async (): Promise<bigint[]> => {
    if (!userAddress || !userBalance) return [];

    const tokenIds: bigint[] = [];

    // for (const index of userTokenIndices) {
    //   // Note: You would need to implement this using the actual tokenOfOwnerByIndex calls
    //   // This is a simplified version - in practice you'd want to batch these calls
    // }

    return tokenIds;
  }, [userAddress, userBalance, userTokenIndices]);

  // Refresh user media when they mint new NFTs
  contract.useWatchMediaMinted(event => {
    if (event.creator === userAddress) {
      refetchUserBalance();
    }
  });

  return {
    ...contract,
    userBalance: userBalance as bigint | undefined,
    userTokenIndices,
    fetchUserTokenIds,
    refetchUserBalance,
  };
}

// Hook for individual NFT management
export function useNFTMedia(tokenId: bigint | undefined) {
  const contract = useMediaContract();

  const { data: tokenURI, refetch: refetchTokenURI } = contract.useTokenURI(tokenId);
  const { data: owner, refetch: refetchOwner } = contract.useOwnerOf(tokenId);
  const { data: royaltyFee, refetch: refetchRoyaltyFee } = contract.useGetRoyaltyFee(tokenId);
  const { data: creator, refetch: refetchCreator } = contract.useGetCreator(tokenId);
  const { data: mediaData, refetch: refetchMediaData } = contract.useMediaData(tokenId);

  const mediaDetails = contract.formatMediaDetails(
    mediaData as readonly [bigint, Address] | undefined
  );

  const nftMediaItem = contract.formatNFTMediaItem(
    tokenId || BigInt(0),
    tokenURI as string | undefined,
    owner as Address | undefined,
    mediaDetails
  );

  const refetchAll = useCallback(() => {
    refetchTokenURI();
    refetchOwner();
    refetchRoyaltyFee();
    refetchCreator();
    refetchMediaData();
  }, [refetchTokenURI, refetchOwner, refetchRoyaltyFee, refetchCreator, refetchMediaData]);

  return {
    ...contract,
    tokenId,
    tokenURI: tokenURI as string | undefined,
    owner: owner as Address | undefined,
    royaltyFee: royaltyFee as bigint | undefined,
    creator: creator as Address | undefined,
    mediaData: mediaData as readonly [bigint, Address] | undefined,
    mediaDetails,
    nftMediaItem,
    refetchAll,
  };
}
