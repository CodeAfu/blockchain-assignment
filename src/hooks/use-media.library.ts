import { useCallback, useState } from "react";
import { useMediaContract } from "./use-media-contract";
import { NFTMediaItem } from "@/types/media";

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
