import React from "react";
import FilterPanel from "./_components/filter-panel";
import MarketplaceGrid from "./_components/marketplace-grid";
import { devLog } from "@/utils/logging";
import { FilterSearchParams } from "./types";

interface MarketplacePageProps {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}

export default async function MarketplacePage({ searchParams }: MarketplacePageProps) {
  const { mediaType, sortPrice, sortDate, minPrice, maxPrice, search } =
    (await searchParams) as FilterSearchParams;

  devLog({
    mediaType,
    sortPrice,
    sortDate,
    minPrice,
    maxPrice,
    search,
  });

  return (
    <main className="min-h-screen mt-8 px-4 flex flex-col gap-2">
      <FilterPanel />
      <MarketplaceGrid />
    </main>
  );
}
