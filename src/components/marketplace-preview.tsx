"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Container from "./container";
import { SkeletonCard } from "./skeleton-card";
import { getAllMediaWithURI } from "@/actions/db-actions";
import { $Enums, FileType } from "@prisma/client";

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

  useEffect(() => {
    const fetchFromDb = async () => {
      setIsLoading(true);
      const queryResult = await getAllMediaWithURI(3);

      const fetchData = await Promise.all(
        queryResult.map(async item => {
          const returnItem: MediaItem = {
            id: item.tokenId,
            title: item.title,
            description: item.description || "",
            mediaType: item.fileType,
            mediaUrl: item.tempAccessUri,
            creator: item.creatorAddress,
          };

          return returnItem;
        })
      );

      setNfts(fetchData.filter((item): item is MediaItem => item !== undefined));
      setIsLoading(false);
    };

    fetchFromDb();
  }, []);

  const renderMedia = (nft: MediaItem) => {
    switch (nft.mediaType) {
      case FileType.IMAGE:
        return (
          <div className="relative w-full h-48 rounded overflow-hidden">
            <Image src={nft.mediaUrl} alt={nft.title} fill className="object-cover" />
          </div>
        );
      case FileType.VIDEO:
        return <video src={nft.mediaUrl} controls className="w-full h-48 rounded" />;
      case FileType.AUDIO:
        return (
          <div className="flex flex-col items-center justify-center h-48 bg-gray-800 rounded">
            🎵
            <audio controls src={nft.mediaUrl} className="mt-2" />
          </div>
        );
      default:
        return <div className="h-48 bg-gray-200 rounded" />;
    }
  };

  return (
    <section className="py-16 px-6 bg-background/10">
      <Container>
        <h2 className="text-3xl font-bold text-center mb-10">Featured Media</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {isLoading
            ? [...Array(3)].map((_, i) => <SkeletonCard key={i} />)
            : nfts &&
              nfts.map(nft => (
                <div key={nft.id} className="bg-white dark:bg-purple-950 rounded-xl shadow p-4">
                  {renderMedia(nft)}
                  <div className="mt-4">
                    <h3 className="text-xl font-semibold">{nft.title}</h3>
                    <p className="text-sm text-gray-500">Creator: {nft.creator}</p>
                  </div>
                </div>
              ))}
        </div>
      </Container>
    </section>
  );
}
