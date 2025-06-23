"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Container from "./container";
import { getAccessLinkByCid, getFiles } from "@/app/actions";
import { getFileBaseName } from "@/lib/utils";
import { SkeletonCard } from "./skeleton-card";

interface NFTView {
  id: number;
  name: string;
  mediaType: "audio" | "video" | "image";
  mediaUrl: string;
  creator: string;
}

export default function MarketplacePreview() {
  const [nfts, setNfts] = useState<NFTView[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchFilesFromPinata = async () => {
      const f = await getFiles();
      if (!f.data) return;

      const fetchedNFTs: NFTView[] = await Promise.all(
        f.data.files.map(async (file, index) => {
          const getMediaType = (mime: string): NFTView["mediaType"] => {
            if (mime.startsWith("image/")) return "image";
            if (mime.startsWith("video/")) return "video";
            if (mime.startsWith("audio/")) return "audio";
            return "image"; // fallback
          };

          const accessLinkResult = await getAccessLinkByCid(file.cid);
          const accessLink = accessLinkResult.data;

          const name = file.name ? getFileBaseName(file.name) : "Untitled Media";

          return {
            id: index + 1,
            name: name,
            mediaType: getMediaType(file.mime_type),
            mediaUrl: accessLink || "",
            creator: file.keyvalues?.signer || "Unknown",
          };
        })
      );

      setNfts(fetchedNFTs);
      setIsLoading(false);
    };

    fetchFilesFromPinata();
  }, []);

  const renderMedia = (nft: NFTView) => {
    switch (nft.mediaType) {
      case "image":
        return (
          <div className="relative w-full h-48 rounded overflow-hidden">
            <Image src={nft.mediaUrl} alt={nft.name} fill className="object-cover" />
          </div>
        );
      case "video":
        return <video src={nft.mediaUrl} controls className="w-full h-48 rounded" />;
      case "audio":
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
            : nfts.map(nft => (
                <div key={nft.id} className="bg-white dark:bg-purple-950 rounded-xl shadow p-4">
                  {renderMedia(nft)}
                  <div className="mt-4">
                    <h3 className="text-xl font-semibold">{nft.name}</h3>
                    <p className="text-sm text-gray-500">Creator: {nft.creator}</p>
                  </div>
                </div>
              ))}
        </div>
      </Container>
    </section>
  );
}
