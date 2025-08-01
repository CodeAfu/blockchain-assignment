// context/marketplace-context.tsx
"use client";

import { createContext, useContext, useState } from "react";

interface Filters {
  mediaType: "image" | "video" | "audio" | "all";
  sortBy: "priceLowHigh" | "priceHighLow" | "recent";
  searchQuery: string;
  tags: string[];
}

const defaultFilters: Filters = {
  mediaType: "all",
  sortBy: "recent",
  searchQuery: "",
  tags: [],
};

const MarketplaceContext = createContext<{
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
} | null>(null);

export const MarketplaceProvider = ({ children }: { children: React.ReactNode }) => {
  const [filters, setFilters] = useState<Filters>(defaultFilters);

  return (
    <MarketplaceContext.Provider value={{ filters, setFilters }}>
      {children}
    </MarketplaceContext.Provider>
  );
};

export const useMarketplace = () => {
  const ctx = useContext(MarketplaceContext);
  if (!ctx) throw new Error("useMarketplace must be used within a MarketplaceProvider");
  return ctx;
};
