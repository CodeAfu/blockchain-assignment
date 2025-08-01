import React from "react";
import FilterPanel from "./_components/filter-panel";
import MarketplaceGrid from "./_components/marketplace-grid";
import { FilterSearchParams } from "./types";

interface MarketplacePageProps {
  searchParams?: FilterSearchParams;
}

export default function MarketplacePage({ searchParams }: MarketplacePageProps) {
  const mediaType = searchParams?.mediaType ?? "all";
  const sortPrice = searchParams?.sortPrice ?? "none";
  const sortDate = searchParams?.sortDate ?? "newest";
  const minPrice = searchParams?.minPrice ?? "0";
  const maxPrice = searchParams?.maxPrice ?? "10000";
  const search = searchParams?.search ?? "";

  return (
    <main className="min-h-screen mt-8 px-4 flex flex-col gap-2">
      <FilterPanel />
      <MarketplaceGrid />
    </main>
  );
}
