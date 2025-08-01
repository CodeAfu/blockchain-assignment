"use client";

import React from "react";
import FilterInput from "./filter-input";
import { cn } from "@/utils/shadcn-utils";
import AdvancedFilters from "./advanced-filters";

export default function FilterPanel({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("max-w-7xl w-full mx-auto border p-4 rounded-md", className)} {...props}>
      <div className="flex justify-end items-center gap-4">
        <FilterInput className="flex-1" name="filter" placeholder="Search..." />
        <AdvancedFilters />
      </div>
    </div>
  );
}
