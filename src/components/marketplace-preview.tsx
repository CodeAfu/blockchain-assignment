"use client";

import { useEffect, useState, useCallback, useMemo } from "react";
import dynamic from "next/dynamic";
import { SkeletonCard } from "./skeleton-card";
import { getAllMediaWithURI } from "@/actions/db-actions";
import { $Enums, FileType } from "@prisma/client";
import NextImage from "./next-image";

// Lazy load heavy components
const LazyVideo = dynamic(
  () =>
    Promise.resolve(({ src, className }: { src: string; className: string }) => (
      <video src={src} controls className={className} preload="metadata" />
    )),
  { ssr: false }
);

const LazyAudio = dynamic(
  () =>
    Promise.resolve(({ src, className }: { src: string; className: string }) => (
      <audio controls src={src} className={className} preload="metadata" />
    )),
  { ssr: false }
);

interface MediaItem {
  id: number;
  title: string;
  description: string;
  mediaType: $Enums.FileType | null;
  mediaUrl: string;
  creator: string;
}

export default function MarketplacePreview() {
  const [nfts, setNfts] = useState<MediaItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Memoize the media rendering function
  const renderMedia = useCallback((nft: MediaItem) => {
    switch (nft.mediaType) {
      case FileType.IMAGE:
        return (
          <div className="relative w-full h-48 rounded overflow-hidden">
            <NextImage src={nft.mediaUrl} alt={nft.title} />
          </div>
        );
      case FileType.VIDEO:
        return <LazyVideo src={nft.mediaUrl} className="w-full h-48 rounded" />;
      case FileType.AUDIO:
        return (
          <div className="flex flex-col items-center justify-center h-48 bg-gray-800 rounded">
            🎵
            <LazyAudio src={nft.mediaUrl} className="mt-2" />
          </div>
        );
      default:
        return (
          <div className="h-48 bg-gray-200 rounded flex items-center justify-center">
            <span className="text-gray-500">Media not available</span>
          </div>
        );
    }
  }, []);

  // Optimize data fetching
  const fetchFromDb = useCallback(async () => {
    try {
      setIsLoading(true);
      const queryResult = await getAllMediaWithURI(3);

      // Process data more efficiently
      const fetchData = queryResult
        .map(item => ({
          id: item.tokenId,
          title: item.title,
          description: item.description || "",
          mediaType: item.fileType,
          mediaUrl: item.tempAccessUri,
          creator: item.creatorAddress,
        }))
        .filter(item => item.mediaUrl); // Filter out items without media URLs

      setNfts(fetchData);
    } catch (error) {
      console.error("Failed to fetch media:", error);
      setNfts([]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchFromDb();
  }, [fetchFromDb]);

  // Memoize the grid items to prevent unnecessary re-renders
  const nftGrid = useMemo(
    () =>
      nfts.map(nft => (
        <div
          key={nft.id}
          className="bg-white dark:bg-purple-950 rounded-xl shadow p-4 hover:shadow-lg transition-shadow"
        >
          {renderMedia(nft)}
          <div className="mt-4">
            <h3 className="text-xl font-semibold truncate" title={nft.title}>
              {nft.title}
            </h3>
            <p className="text-sm text-gray-500 truncate" title={nft.creator}>
              Creator: {nft.creator}
            </p>
          </div>
        </div>
      )),
    [nfts, renderMedia]
  );

  return (
    <section className="py-16 px-6 bg-background/10">
      <h2 className="text-3xl font-bold text-center mb-10">Featured Media</h2>
      {isLoading ? (
        <div className="flex justify-center items-center w-full min-h-[300px] gap-8">
          <div className="block sm:hidden">
            <SkeletonCard />
          </div>

          <div className="hidden sm:flex gap-8">
            <SkeletonCard />
            <SkeletonCard />
          </div>
        </div>
      ) : (
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {nftGrid}
        </div>
      )}
    </section>
  );
}
