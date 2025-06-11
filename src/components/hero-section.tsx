import Link from "next/link";
import React from "react";

export default function HeroSection() {
  return (
    <div className="w-full bg-gradient-to-r from-pink-600 to-primary dark:from-purple-900 dark:to-primary text-gray-100 py-20 px-6 text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-6">
        Empowering Creators. Protecting Digital Media.
      </h1>
      <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
        Mint your original images, audio, and video as NFTs. Secure ownership, earn royalties, and
        take control of your content — all on the blockchain.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          href="/media/register"
          className="bg-purple-50 text-black font-semibold px-6 py-3 rounded-2xl hover:bg-gray-200 transition"
        >
          Upload Your Media
        </Link>
        <Link
          href="/media/browse"
          className="bg-transparent border border-white text-white font-semibold px-6 py-3 rounded-2xl hover:bg-white hover:text-black transition"
        >
          Browse Marketplace
        </Link>
      </div>
    </div>
  );
}
