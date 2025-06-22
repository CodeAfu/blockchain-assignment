// src/hooks/useMediaContract.ts
import {
  useWriteContract,
  useReadContract,
  useWaitForTransactionReceipt,
  useWatchContractEvent,
} from "wagmi";
import { MEDIA_CONTRACT_ABI, MEDIA_CONTRACT_ADDRESS } from "@/lib/consts";
import { Address, Hash, decodeEventLog } from "viem";
import { useState, useCallback, useEffect } from "react";
import { MediaAccessedEvent, MediaItem, MediaRegisteredEvent } from "@/types/media";

export function useMediaContract() {
  const [lastTxHash, setLastTxHash] = useState<Hash>();
  const [pendingTx, setPendingTx] = useState<string | null>(null);

  const {
    writeContract,
    data: writeData,
    isPending: isWritePending,
    error: writeError,
  } = useWriteContract();

  // Wait for transaction confirmation
  const {
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

  // Clear pending state when transaction is confirmed or fails
  useEffect(() => {
    if (isConfirmed || txError) {
      setPendingTx(null);
    }
  }, [isConfirmed, txError]);

  // WRITE FUNCTIONS
  const registerMedia = useCallback(
    (title: string, ipfsHash: string, royaltyFee: bigint) => {
      setPendingTx("registerMedia");
      writeContract({
        address: MEDIA_CONTRACT_ADDRESS as Address,
        abi: MEDIA_CONTRACT_ABI,
        functionName: "registerMedia",
        args: [title, ipfsHash, royaltyFee],
      });
    },
    [writeContract]
  );

  const accessMedia = useCallback(
    (mediaId: Hash, paymentAmount: bigint) => {
      setPendingTx("accessMedia");
      writeContract({
        address: MEDIA_CONTRACT_ADDRESS as Address,
        abi: MEDIA_CONTRACT_ABI,
        functionName: "accessMedia",
        args: [mediaId],
        value: paymentAmount,
      });
    },
    [writeContract]
  );

  // READ FUNCTIONS
  const useGetMedia = (mediaId: Hash | undefined) => {
    return useReadContract({
      address: MEDIA_CONTRACT_ADDRESS as Address,
      abi: MEDIA_CONTRACT_ABI,
      functionName: "getMedia",
      args: mediaId ? [mediaId] : undefined,
      query: {
        enabled: !!mediaId,
      },
    });
  };

  const useGetAllMediaIds = () => {
    return useReadContract({
      address: MEDIA_CONTRACT_ADDRESS as Address,
      abi: MEDIA_CONTRACT_ABI,
      functionName: "getAllMediaIds",
    });
  };

  const useGetMediaByOwner = (owner: Address | undefined) => {
    return useReadContract({
      address: MEDIA_CONTRACT_ADDRESS as Address,
      abi: MEDIA_CONTRACT_ABI,
      functionName: "getMediaByOwner",
      args: owner ? [owner] : undefined,
      query: {
        enabled: !!owner,
      },
    });
  };

  const useGetRoyaltyFee = (mediaId: Hash | undefined) => {
    return useReadContract({
      address: MEDIA_CONTRACT_ADDRESS as Address,
      abi: MEDIA_CONTRACT_ABI,
      functionName: "getRoyaltyFee",
      args: mediaId ? [mediaId] : undefined,
      query: {
        enabled: !!mediaId,
      },
    });
  };

  // EVENT WATCHERS
  const useWatchMediaRegistered = (onEvent: (event: MediaRegisteredEvent) => void) => {
    useWatchContractEvent({
      address: MEDIA_CONTRACT_ADDRESS as Address,
      abi: MEDIA_CONTRACT_ABI,
      eventName: "MediaRegistered",
      onLogs: logs => {
        logs.forEach(log => {
          try {
            const decoded = decodeEventLog({
              abi: MEDIA_CONTRACT_ABI,
              data: log.data,
              topics: log.topics,
            });

            const [mediaId, owner, title, ipfsHash, royaltyFee] = decoded.args as [
              Hash,
              Address,
              string,
              string,
              bigint,
            ];

            if (mediaId && owner && title && ipfsHash && royaltyFee !== undefined) {
              onEvent({ mediaId, owner, title, ipfsHash, royaltyFee });
            }
          } catch (error) {
            console.error("Failed to decode MediaRegistered event:", error);
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

            const [mediaId, user, amountPaid] = decoded.args as [Hash, Address, bigint];

            if (mediaId && user && amountPaid !== undefined) {
              onEvent({ mediaId, user, amountPaid });
            }
          } catch (error) {
            console.error("Failed to decode MediaAccessed event:", error);
          }
        });
      },
    });
  };

  // UTILITY FUNCTIONS
  const formatMediaItem = (
    rawData: readonly [string, Address, string, bigint, bigint] | undefined
  ): MediaItem | null => {
    if (!rawData || rawData.length < 5) return null;

    return {
      title: rawData[0],
      owner: rawData[1],
      ipfsHash: rawData[2],
      timestamp: rawData[3],
      royaltyFee: rawData[4],
    };
  };

  const generateMediaId = (title: string, ipfsHash: string, owner: Address): string => {
    // This is a utility to help predict the media ID before registration
    // Note: This is an approximation - the actual ID is generated by the contract
    return `${title}-${ipfsHash}-${owner}`.toLowerCase();
  };

  // Contract state and utilities
  const contract = {
    // Write functions
    registerMedia,
    accessMedia,

    // Read hooks
    useGetMedia,
    useGetAllMediaIds,
    useGetMediaByOwner,
    useGetRoyaltyFee,

    // Event watchers
    useWatchMediaRegistered,
    useWatchMediaAccessed,

    // Utilities
    formatMediaItem,
    generateMediaId,

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
  };

  return contract;
}

// Additional hook for easier media management
export function useMediaLibrary() {
  const contract = useMediaContract();
  const { data: allMediaIds, refetch: refetchAllMedia } = contract.useGetAllMediaIds();
  const [mediaCache, setMediaCache] = useState<Map<Hash, MediaItem>>(new Map());

  // Fetch multiple media items
  const fetchMediaItems = useCallback(
    async (mediaIds: Hash[]) => {
      const items: MediaItem[] = [];

      for (const mediaId of mediaIds) {
        if (mediaCache.has(mediaId)) {
          const cachedItem = mediaCache.get(mediaId);
          if (cachedItem) items.push(cachedItem);
        }
        // Note: In a real implementation, you'd want to batch these calls
        // or use a different pattern to avoid making too many individual calls
      }

      return items;
    },
    [mediaCache]
  );

  // Clear cache when new media is registered
  contract.useWatchMediaRegistered(() => {
    setMediaCache(new Map());
    refetchAllMedia();
  });

  return {
    ...contract,
    allMediaIds: allMediaIds as Hash[] | undefined,
    mediaCache,
    fetchMediaItems,
    refetchAllMedia,
  };
}

// Hook for managing user's own media
export function useUserMedia(userAddress: Address | undefined) {
  const contract = useMediaContract();
  const { data: userMediaIds, refetch: refetchUserMedia } =
    contract.useGetMediaByOwner(userAddress);

  // Refresh user media when they register new media
  contract.useWatchMediaRegistered(event => {
    if (event.owner === userAddress) {
      refetchUserMedia();
    }
  });

  return {
    ...contract,
    userMediaIds: userMediaIds as Hash[] | undefined,
    refetchUserMedia,
  };
}
