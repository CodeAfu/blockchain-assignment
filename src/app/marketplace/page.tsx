import React from "react";
import { devLog } from "@/utils/logging";
import { FilterSearchParams } from "./types";
import MarketplaceLayout from "./_components/marketplace-layout";

interface MarketplacePageProps {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}

export default async function MarketplacePage({ searchParams }: MarketplacePageProps) {
  const { mediaType, sortPrice, sortDate, minPrice, maxPrice, search } =
    (await searchParams) as FilterSearchParams;

  const searchObj = {
    mediaType,
    sortPrice,
    sortDate,
    minPrice,
    maxPrice,
    search,
  };

  devLog(searchObj);

  return (
    <main className="min-h-screen mt-8 px-4 flex flex-col gap-2">
      <MarketplaceLayout searchObj={searchObj} />
    </main>
  );
}
