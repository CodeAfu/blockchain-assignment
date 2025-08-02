"use client";

import React from "react";
import FilterInput from "./filter-input";
import { cn } from "@/utils/shadcn-utils";
import AdvancedFilters from "./advanced-filters";

export default function FilterPanel({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "relative max-w-7xl w-full mx-auto border p-4 rounded-md bg-white/10 backdrop-blur-md shadow-md overflow-hidden",
        className
      )}
      {...props}
    >
      <div className="absolute inset-0 -z-10 bg-[url('/assets/bg/diagonal-lines.svg')] bg-repeat bg-[length:5px_5px] opacity-10" />
      <div className="flex justify-end items-center gap-2">
        <FilterInput className="flex-1" name="filter" placeholder="Search..." />
        <AdvancedFilters />
      </div>
    </div>
  );
}
