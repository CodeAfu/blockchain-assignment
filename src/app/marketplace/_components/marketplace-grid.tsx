// components/MarketplaceGrid.tsx
"use client";

import React from "react";
import { cn } from "@/utils/shadcn-utils";
import { MarketplaceCard } from "./marketplace-card";

export default function MarketplaceGrid({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const dummyData = Array.from({ length: 8 }, (_, i) => ({
    title: `Item #${i + 1}`,
    description: "Details about this item.",
    imageUrl: i % 2 === 0 ? "/placeholder.svg" : undefined,
  }));

  return (
    <div
      className={cn(
        "relative max-w-7xl mx-auto w-full z-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6 rounded-md shadow-md bg-white/5 backdrop-blur-md",
        className
      )}
      {...props}
    >
      {/* <div className="absolute inset-0 -z-10 text-muted bg-[url('/assets/bg/dots-bg.svg')] bg-cover opacity-30" /> */}
      <div className="absolute inset-0 -z-10 bg-[url('/assets/bg/diagonal-lines.svg')] bg-repeat bg-[length:5px_5px] opacity-10" />

      {dummyData.map((item, i) => (
        <MarketplaceCard
          key={i}
          title={item.title}
          description={item.description}
          imageUrl={item.imageUrl}
        />
      ))}
    </div>
  );
}
