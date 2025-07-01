import { useCallback } from "react";
import { useMediaContract } from "./use-media-contract";
import { Address } from "viem";

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
