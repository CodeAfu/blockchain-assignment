"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Container from "./container";

interface NFT {
  id: number;
  name: string;
  mediaType: "audio" | "video" | "image";
  mediaUrl: string;
  creator: string;
}

const sampleNFTs: NFT[] = [
  {
    id: 1,
    name: "Cinematic Loop",
    mediaType: "video",
    mediaUrl: "https://ipfs.io/ipfs/QmVideoHash",
    creator: "0x123...456",
  },
  {
    id: 2,
    name: "Lofi Sketch",
    mediaType: "image",
    mediaUrl: "https://ipfs.io/ipfs/QmImageHash",
    creator: "0x789...abc",
  },
  {
    id: 3,
    name: "Ambient Drop",
    mediaType: "audio",
    mediaUrl: "https://ipfs.io/ipfs/QmAudioHash",
    creator: "0xabc...def",
  },
];

export default function MarketplacePreview() {
  const [nfts, setNfts] = useState<NFT[]>([]);

  useEffect(() => {
    // Replace with actual fetch from your contract or DB
    setNfts(sampleNFTs);
  }, []);

  const renderMedia = (nft: NFT) => {
    switch (nft.mediaType) {
      case "image":
        return (
          <img src={nft.mediaUrl} alt={nft.name} className="w-full h-48 object-cover rounded" />
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
    <section className="py-16 px-6 bg-gray-100">
      <Container>
        <h2 className="text-3xl font-bold text-center mb-10">Featured Media</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {nfts.map(nft => (
            <div key={nft.id} className="bg-white rounded-xl shadow p-4">
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
