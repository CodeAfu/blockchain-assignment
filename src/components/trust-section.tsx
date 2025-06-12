import React from "react";

export default function TrustSection() {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Why Creators & Collectors Trust Us</h2>
        <p className="text-gray-600 mb-10">
          Protecting ownership. Ensuring fair royalties. Empowering the media community.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-2">On-Chain Ownership</h3>
            <p className="text-sm text-gray-600">
              NFTs ensure immutable proof of media rights for every creator.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Decentralized Storage</h3>
            <p className="text-sm text-gray-600">
              Media is stored securely on IPFS — always accessible and censorship-resistant.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Fair Royalty Enforcement</h3>
            <p className="text-sm text-gray-600">
              Smart contracts handle royalty splits automatically and transparently.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Open Source Contracts</h3>
            <p className="text-sm text-gray-600">
              All contract code is public, audit-friendly, and community-reviewed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
