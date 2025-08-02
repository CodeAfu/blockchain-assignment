"use client";

import React from "react";
import FilterPanel from "./filter-panel";
import MarketplaceGrid from "./marketplace-grid";
import { FilterSearchParams } from "../types";
import { devLog } from "@/utils/logging";

interface MarketplaceLayoutProps {
  searchObj: FilterSearchParams;
}

export default function MarketplaceLayout({ searchObj }: MarketplaceLayoutProps) {
  devLog(searchObj);
  return (
    <React.Fragment>
      <div className="space-y-4">
        <FilterPanel />
        <MarketplaceGrid />
      </div>
    </React.Fragment>
  );
}
