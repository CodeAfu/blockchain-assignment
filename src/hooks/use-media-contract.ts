// src/hooks/useMediaContract.ts
import {
  useWriteContract,
  useReadContract,
  useWaitForTransactionReceipt,
  useWatchContractEvent,
} from "wagmi";
import { waitForTransactionReceipt } from "wagmi/actions";
import { MEDIA_CONTRACT_ABI, MEDIA_CONTRACT_ADDRESS } from "@/lib/consts";
import { Address, Hash, decodeEventLog, parseEther } from "viem";
import { useState, useCallback, useEffect } from "react";
import {
  MediaMintedEvent,
  MediaAccessedEvent,
  MediaListedEvent,
  MediaSoldEvent,
  MediaDetails,
  NFTMediaItem,
  SaleInfo,
} from "@/types/media";
import { devLog } from "@/utils/logging";
import { config } from "@/lib/web3-config";

export function useMediaContract() {
  const [lastTxHash, setLastTxHash] = useState<Hash>();
  const [pendingTx, setPendingTx] = useState<string | null>(null);
  const [mintedTokenId, setMintedTokenId] = useState<number>();

  const {
    writeContract,
    writeContractAsync,
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
    devLog("Decode useEffect triggered.");
    if (receipt?.logs && isConfirmed) {
      devLog("Receipt Logs found and confirmed.");
      for (const log of receipt.logs) {
        devLog("Receipt Log:", log);
        try {
          const parsed = decodeEventLog({
            abi: MEDIA_CONTRACT_ABI,
            eventName: "MediaMinted",
            topics: log.topics,
            data: log.data,
          });

          if (parsed.args && parsed.eventName === "MediaMinted") {
            devLog("MediaMinted Event Found.");
            const tokenId = (parsed.args as unknown as { tokenId: bigint }).tokenId;
            setMintedTokenId(Number(tokenId));
            devLog("Minted Token ID:", tokenId);
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

  // READ FUNCTIONS FOR PLATFORM SETTINGS
  const useMintingFee = () => {
    return useReadContract({
      address: MEDIA_CONTRACT_ADDRESS as Address,
      abi: MEDIA_CONTRACT_ABI,
      functionName: "mintingFee",
    });
  };

  const usePlatformRoyalty = () => {
    return useReadContract({
      address: MEDIA_CONTRACT_ADDRESS as Address,
      abi: MEDIA_CONTRACT_ABI,
      functionName: "platformRoyalty",
    });
  };

  // WRITE FUNCTIONS
  const mintNFT = useCallback(
    (
      recipient: Address,
      metadataURI: string,
      creatorRoyaltyBps: bigint,
      initialSalePrice: bigint,
      mintingFee: bigint
    ) => {
      setPendingTx("mintNFT");
      writeContract({
        address: MEDIA_CONTRACT_ADDRESS as Address,
        abi: MEDIA_CONTRACT_ABI,
        functionName: "mintNFT",
        args: [recipient, metadataURI, creatorRoyaltyBps, initialSalePrice],
        value: mintingFee,
      });
    },
    [writeContract]
  );

  const mintNFTAsync = useCallback(
    async (
      recipient: Address,
      metadataURI: string,
      creatorRoyaltyBps: bigint,
      initialSalePrice: bigint,
      mintingFee: bigint
    ): Promise<{ tokenId: number; txHash: Hash }> => {
      setPendingTx("mintNFT");

      try {
        // Write the contract transaction
        const txHash = await writeContractAsync({
          address: MEDIA_CONTRACT_ADDRESS as Address,
          abi: MEDIA_CONTRACT_ABI,
          functionName: "mintNFT",
          args: [recipient, metadataURI, creatorRoyaltyBps, initialSalePrice],
          value: mintingFee,
        });

        console.log("Transaction hash:", txHash);
        console.log("Contract address:", MEDIA_CONTRACT_ADDRESS);

        // Wait for transaction to be confirmed
        const receipt = await waitForTransactionReceipt(config, {
          hash: txHash,
          confirmations: 1, // Wait for at least 1 confirmation
        });

        console.log("Transaction receipt:", receipt);
        console.log("Receipt status:", receipt.status);
        console.log("Receipt logs count:", receipt.logs.length);

        if (receipt.status !== "success") {
          throw new Error("Transaction failed");
        }

        // Debug: Print all logs with their addresses
        receipt.logs.forEach((log, index) => {
          console.log(`Log ${index}:`, {
            address: log.address,
            topics: log.topics,
            data: log.data,
            isFromOurContract: log.address.toLowerCase() === MEDIA_CONTRACT_ADDRESS.toLowerCase(),
          });
        });

        // Extract tokenId from logs - try multiple approaches
        for (const log of receipt.logs) {
          // Check if this log is from our contract
          if (log.address.toLowerCase() !== MEDIA_CONTRACT_ADDRESS.toLowerCase()) {
            console.log("Skipping log from different contract:", log.address);
            continue;
          }

          try {
            // Approach 1: Decode without specifying eventName
            const parsed = decodeEventLog({
              abi: MEDIA_CONTRACT_ABI,
              topics: log.topics,
              data: log.data,
            });

            console.log("Decoded log (approach 1):", parsed);

            if (parsed.eventName === "MediaMinted") {
              const args = parsed.args as unknown as { tokenId: bigint };
              console.log("MediaMinted event args:", args);

              // Try to extract tokenId - should be the first argument
              let tokenId: number;

              if (args && typeof args.tokenId !== "undefined") {
                tokenId = Number(args.tokenId);
              } else {
                console.error("Could not find tokenId in MediaMinted args:", args);
                continue;
              }

              console.log("Successfully extracted tokenId:", tokenId);
              setMintedTokenId(tokenId);
              setPendingTx(null);
              return { tokenId, txHash };
            }
          } catch (decodeError) {
            console.log("Approach 1 failed for log:", decodeError);
          }

          try {
            // Approach 2: Try to decode specifically as MediaMinted event
            const parsed = decodeEventLog({
              abi: MEDIA_CONTRACT_ABI,
              eventName: "MediaMinted",
              topics: log.topics,
              data: log.data,
            });

            console.log("Decoded log (approach 2):", parsed);

            const args = parsed.args as unknown as { tokenId: bigint };
            const tokenId = Number(args.tokenId);

            console.log("Successfully extracted tokenId (approach 2):", tokenId);
            setMintedTokenId(tokenId);
            setPendingTx(null);
            return { tokenId, txHash };
          } catch (decodeError) {
            console.log("Approach 2 failed for log:", decodeError);
          }

          try {
            // Approach 3: Manual parsing of topics (tokenId should be in topics[1] since it's indexed)
            if (log.topics.length >= 2) {
              // MediaMinted event signature should be topics[0]
              // tokenId (indexed) should be topics[1]
              // creator (indexed) should be topics[2]

              const tokenIdHex = log.topics[1];
              if (tokenIdHex) {
                const tokenId = parseInt(tokenIdHex, 16);
                console.log("Manually extracted tokenId from topics:", tokenId);
                setMintedTokenId(tokenId);
                setPendingTx(null);
                return { tokenId, txHash };
              }
            }
          } catch (manualError) {
            console.log("Manual parsing failed:", manualError);
          }
        }

        // If we get here, we couldn't find the MediaMinted event
        console.error("MediaMinted event not found in any logs");
        console.error("Transaction was successful but no MediaMinted event detected");

        // Let's try waiting a bit longer and checking again
        console.log("Waiting 2 seconds and trying to get events via contract call...");
        await new Promise(resolve => setTimeout(resolve, 2000));

        // As a last resort, try to get the return value from the contract call
        // Since your mintNFT function returns the tokenId
        throw new Error(
          "Failed to extract tokenId from transaction logs - no MediaMinted event found"
        );
      } catch (error) {
        setPendingTx(null);
        console.error("mintNFTAsync error:", error);
        throw error;
      }
    },
    [writeContractAsync]
  );

  const listForSale = useCallback(
    (tokenId: bigint, price: bigint) => {
      setPendingTx("listForSale");
      writeContract({
        address: MEDIA_CONTRACT_ADDRESS as Address,
        abi: MEDIA_CONTRACT_ABI,
        functionName: "listForSale",
        args: [tokenId, price],
      });
    },
    [writeContract]
  );

  const unlistFromSale = useCallback(
    (tokenId: bigint) => {
      setPendingTx("unlistFromSale");
      writeContract({
        address: MEDIA_CONTRACT_ADDRESS as Address,
        abi: MEDIA_CONTRACT_ABI,
        functionName: "unlistFromSale",
        args: [tokenId],
      });
    },
    [writeContract]
  );

  const buyNFT = useCallback(
    (tokenId: bigint, paymentAmount: bigint) => {
      setPendingTx("buyNFT");
      writeContract({
        address: MEDIA_CONTRACT_ADDRESS as Address,
        abi: MEDIA_CONTRACT_ABI,
        functionName: "buyNFT",
        args: [tokenId],
        value: paymentAmount,
      });
    },
    [writeContract]
  );

  const accessMedia = useCallback(
    (tokenId: bigint, paymentAmount: bigint = parseEther("0.0001")) => {
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

  // NEW: Get complete sale information for an NFT
  const useSaleInfo = (tokenId: bigint | undefined) => {
    return useReadContract({
      address: MEDIA_CONTRACT_ADDRESS as Address,
      abi: MEDIA_CONTRACT_ABI,
      functionName: "getSaleInfo",
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

            const [tokenId, creator, metadataURI, creatorRoyalty, initialPrice] = decoded.args as [
              bigint,
              Address,
              string,
              bigint,
              bigint,
            ];

            if (tokenId !== undefined && creator && metadataURI && creatorRoyalty !== undefined) {
              onEvent({ tokenId, creator, metadataURI, creatorRoyalty, initialPrice });
            }
          } catch (error) {
            console.error("Failed to decode MediaMinted event:", error);
          }
        });
      },
    });
  };

  const useWatchMediaListed = (onEvent: (event: MediaListedEvent) => void) => {
    useWatchContractEvent({
      address: MEDIA_CONTRACT_ADDRESS as Address,
      abi: MEDIA_CONTRACT_ABI,
      eventName: "MediaListed",
      onLogs: logs => {
        logs.forEach(log => {
          try {
            const decoded = decodeEventLog({
              abi: MEDIA_CONTRACT_ABI,
              data: log.data,
              topics: log.topics,
            });

            const [tokenId, seller, price] = decoded.args as [bigint, Address, bigint];

            if (tokenId !== undefined && seller && price !== undefined) {
              onEvent({ tokenId, seller, price });
            }
          } catch (error) {
            console.error("Failed to decode MediaListed event:", error);
          }
        });
      },
    });
  };

  const useWatchMediaSold = (onEvent: (event: MediaSoldEvent) => void) => {
    useWatchContractEvent({
      address: MEDIA_CONTRACT_ADDRESS as Address,
      abi: MEDIA_CONTRACT_ABI,
      eventName: "MediaSold",
      onLogs: logs => {
        logs.forEach(log => {
          try {
            const decoded = decodeEventLog({
              abi: MEDIA_CONTRACT_ABI,
              data: log.data,
              topics: log.topics,
            });

            const [tokenId, seller, buyer, price, creatorRoyalty, platformFee] = decoded.args as [
              bigint,
              Address,
              Address,
              bigint,
              bigint,
              bigint,
            ];

            if (tokenId !== undefined && seller && buyer && price !== undefined) {
              onEvent({ tokenId, seller, buyer, price, creatorRoyalty, platformFee });
            }
          } catch (error) {
            console.error("Failed to decode MediaSold event:", error);
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
    rawData: readonly [bigint, Address, bigint, boolean] | undefined
  ): MediaDetails | null => {
    if (!rawData || rawData.length < 4) return null;

    return {
      creatorRoyalty: rawData[0],
      creator: rawData[1],
      salePrice: rawData[2],
      isForSale: rawData[3],
    };
  };

  const formatSaleInfo = (
    rawData: readonly [boolean, bigint, Address, Address, bigint] | undefined
  ): SaleInfo | null => {
    if (!rawData || rawData.length < 5) return null;

    return {
      isForSale: rawData[0],
      price: rawData[1],
      owner: rawData[2],
      creator: rawData[3],
      creatorRoyalty: rawData[4],
    };
  };

  const formatNFTMediaItem = (
    tokenId: bigint,
    tokenURI: string | undefined,
    owner: Address | undefined,
    mediaDetails: MediaDetails | null,
    saleInfo: SaleInfo | null
  ): NFTMediaItem | null => {
    if (!tokenURI || !owner || !mediaDetails) return null;

    return {
      tokenId,
      tokenURI,
      owner,
      creator: mediaDetails.creator,
      creatorRoyalty: mediaDetails.creatorRoyalty,
      salePrice: saleInfo?.price || mediaDetails.salePrice,
      isForSale: saleInfo?.isForSale || mediaDetails.isForSale,
    };
  };

  // Helper functions for frontend integration
  const convertPercentToBasisPoints = (percent: number): bigint => {
    return BigInt(Math.floor(percent * 100));
  };

  const convertBasisPointsToPercent = (basisPoints: bigint): number => {
    return Number(basisPoints) / 100;
  };

  // Contract state and utilities
  const contract = {
    // Write functions
    mintNFT,
    mintNFTAsync,
    listForSale,
    unlistFromSale,
    buyNFT,
    accessMedia,

    // Read hooks
    useTokenURI,
    useOwnerOf,
    useBalanceOf,
    useSaleInfo,
    useTokenCount,
    useMediaData,
    useMintingFee,
    usePlatformRoyalty,

    // Event watchers
    useWatchMediaMinted,
    useWatchMediaListed,
    useWatchMediaSold,
    useWatchMediaAccessed,

    // Utilities
    formatMediaDetails,
    formatSaleInfo,
    formatNFTMediaItem,
    convertPercentToBasisPoints,
    convertBasisPointsToPercent,

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

// Hook for managing NFT marketplace
export function useMarketplace() {
  const contract = useMediaContract();
  const { data: tokenCount, refetch: refetchTokenCount } = contract.useTokenCount();
  const [marketplaceCache, setMarketplaceCache] = useState<Map<bigint, NFTMediaItem>>(new Map());

  // Generate array of token IDs based on token count
  const generateTokenIds = useCallback((count: bigint): bigint[] => {
    const ids: bigint[] = [];
    for (let i = BigInt(0); i < count; i++) {
      ids.push(i);
    }
    return ids;
  }, []);

  const tokenIds = tokenCount ? generateTokenIds(tokenCount as bigint) : [];

  // Fetch items currently for sale
  const fetchForSaleItems = useCallback(async (): Promise<NFTMediaItem[]> => {
    const forSaleItems: NFTMediaItem[] = [];

    // In a production app, you'd want to implement this more efficiently
    // possibly by maintaining an index of for-sale items or using events

    return forSaleItems;
  }, []);

  // Clear cache when marketplace changes
  contract.useWatchMediaListed(() => {
    setMarketplaceCache(new Map());
    refetchTokenCount();
  });

  contract.useWatchMediaSold(() => {
    setMarketplaceCache(new Map());
    refetchTokenCount();
  });

  return {
    ...contract,
    tokenCount: tokenCount as bigint | undefined,
    tokenIds,
    marketplaceCache,
    fetchForSaleItems,
    refetchTokenCount,
  };
}

// Hook for managing user's owned NFTs
export function useUserMedia(userAddress: Address | undefined) {
  const contract = useMediaContract();
  const { data: userBalance, refetch: refetchUserBalance } = contract.useBalanceOf(userAddress);

  // Refresh user media when they mint new NFTs or buy/sell
  contract.useWatchMediaMinted(event => {
    if (event.creator === userAddress) {
      refetchUserBalance();
    }
  });

  contract.useWatchMediaSold(event => {
    if (event.seller === userAddress || event.buyer === userAddress) {
      refetchUserBalance();
    }
  });

  return {
    ...contract,
    userBalance: userBalance as bigint | undefined,
    refetchUserBalance,
  };
}

// Hook for individual NFT management with marketplace data
export function useNFTMedia(tokenId: bigint | undefined) {
  const contract = useMediaContract();

  const { data: tokenURI, refetch: refetchTokenURI } = contract.useTokenURI(tokenId);
  const { data: owner, refetch: refetchOwner } = contract.useOwnerOf(tokenId);
  const { data: mediaData, refetch: refetchMediaData } = contract.useMediaData(tokenId);
  const { data: saleInfo, refetch: refetchSaleInfo } = contract.useSaleInfo(tokenId);

  const mediaDetails = contract.formatMediaDetails(
    mediaData as readonly [bigint, Address, bigint, boolean] | undefined
  );

  const formattedSaleInfo = contract.formatSaleInfo(
    saleInfo as readonly [boolean, bigint, Address, Address, bigint] | undefined
  );

  const nftMediaItem = contract.formatNFTMediaItem(
    tokenId || BigInt(0),
    tokenURI as string | undefined,
    owner as Address | undefined,
    mediaDetails,
    formattedSaleInfo
  );

  const refetchAll = useCallback(() => {
    refetchTokenURI();
    refetchOwner();
    refetchMediaData();
    refetchSaleInfo();
  }, [refetchTokenURI, refetchOwner, refetchMediaData, refetchSaleInfo]);

  // Refresh data when NFT is listed/unlisted/sold
  contract.useWatchMediaListed(event => {
    if (event.tokenId === tokenId) {
      refetchSaleInfo();
    }
  });

  contract.useWatchMediaSold(event => {
    if (event.tokenId === tokenId) {
      refetchAll();
    }
  });

  return {
    ...contract,
    tokenId,
    tokenURI: tokenURI as string | undefined,
    owner: owner as Address | undefined,
    mediaData: mediaData as readonly [bigint, Address, bigint, boolean] | undefined,
    saleInfo: saleInfo as readonly [boolean, bigint, Address, Address, bigint] | undefined,
    mediaDetails,
    formattedSaleInfo,
    nftMediaItem,
    refetchAll,
  };
}
