"use client";

import { Button } from "@/components/shadcn-ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/shadcn-ui/dropdown-menu";
import React, { startTransition } from "react";
import {
  FilterSearchParams,
  MediaTypeFilter,
  mediaTypeLabels,
  mediaTypeOptions,
  SortDateFilterOptions,
  sortDateLabels,
  sortDateOptions,
  SortPriceFilterOptions,
  sortPriceLabels,
  sortPriceOptions,
} from "../types";
import { useRouter, useSearchParams } from "next/navigation";
import { cn } from "@/utils/shadcn-utils";
import { Input } from "@/components/shadcn-ui/input";
import { SlidersHorizontal } from "lucide-react";

export default function AdvancedFilters({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const updateParam = <K extends keyof FilterSearchParams>(
    key: K,
    value: FilterSearchParams[K]
  ) => {
    const params = new URLSearchParams(searchParams.toString());

    const isDefaultValue =
      (key === "mediaType" && value === "all") ||
      (key === "sortPrice" && value === "none") ||
      value === undefined ||
      value === "";

    // Do not include if value is default
    if (isDefaultValue) {
      params.delete(key);
    } else {
      const numValue = Number(value);
      const currentMin = Number(searchParams.get("minPrice"));

      // Skip setting invalid price values
      if ((key === "minPrice" || key === "maxPrice") && numValue < 0) {
        params.delete(key);
      } else if (key === "maxPrice" && !isNaN(currentMin) && numValue <= currentMin) {
        params.delete(key);
      } else {
        params.set(key, String(value));
      }
    }

    startTransition(() => {
      router.push(`?${params.toString()}`);
    });
  };

  // --- Media type logic for checkboxes ---
  const mediaTypeParamRaw = searchParams.get("mediaType");
  const mediaTypeSelected: MediaTypeFilter[] = mediaTypeParamRaw
    ? (mediaTypeParamRaw.split(",").filter(Boolean) as MediaTypeFilter[])
    : [];

  const updateMediaType = (type: MediaTypeFilter) => {
    let updated: MediaTypeFilter[];

    if (mediaTypeSelected.includes(type)) {
      updated = mediaTypeSelected.filter(t => t !== type);
    } else {
      updated = [...mediaTypeSelected, type];
    }

    const params = new URLSearchParams(searchParams.toString());
    if (updated.length === 0 || updated.length === mediaTypeOptions.length) {
      params.delete("mediaType");
    } else {
      params.set("mediaType", updated.join(","));
    }

    startTransition(() => {
      router.push(`?${params.toString()}`);
    });
  };

  const sortDateParam = (searchParams.get("sortDate") ?? "newest") as SortDateFilterOptions;
  const sortPriceParam = (searchParams.get("sortPrice") ?? "none") as SortPriceFilterOptions;

  return (
    <div className={cn(className)} {...props}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size={"icon"} className="px-2">
            <SlidersHorizontal />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[220px]">
          {/* Media Type */}
          <DropdownMenuLabel>MEDIA TYPE</DropdownMenuLabel>
          {mediaTypeOptions.map(type => (
            <DropdownMenuCheckboxItem
              key={type}
              checked={mediaTypeSelected.length === 0 || mediaTypeSelected.includes(type)}
              onCheckedChange={() => updateMediaType(type)}
              className="capitalize"
            >
              {mediaTypeLabels[type]}
            </DropdownMenuCheckboxItem>
          ))}

          <DropdownMenuSeparator />

          {/* Sort Price */}
          <DropdownMenuLabel>PRICE</DropdownMenuLabel>
          {sortPriceOptions.map(option => (
            <DropdownMenuCheckboxItem
              key={option}
              checked={sortPriceParam === option}
              onCheckedChange={() => updateParam("sortPrice", option)}
            >
              {sortPriceLabels[option]}
            </DropdownMenuCheckboxItem>
          ))}

          <DropdownMenuSeparator />

          {/* Sort Date */}
          <DropdownMenuLabel>DATE</DropdownMenuLabel>
          {sortDateOptions.map(option => (
            <DropdownMenuCheckboxItem
              key={option}
              checked={sortDateParam === option}
              onCheckedChange={() => updateParam("sortDate", option)}
            >
              {sortDateLabels[option]}
            </DropdownMenuCheckboxItem>
          ))}

          <DropdownMenuSeparator />

          {/* Min/Max Price Inputs */}
          <DropdownMenuLabel>SET PRICE RANGE</DropdownMenuLabel>
          <div className="px-2 py-1 space-y-2">
            <Input
              type="number"
              placeholder="Min Price"
              className="h-8"
              step={0.05}
              defaultValue={searchParams.get("minPrice") ?? ""}
              onBlur={e => updateParam("minPrice", e.target.value)}
            />
            <Input
              type="number"
              placeholder="Max Price"
              className="h-8"
              step={0.05}
              defaultValue={searchParams.get("maxPrice") ?? ""}
              onBlur={e => updateParam("maxPrice", e.target.value)}
            />
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
