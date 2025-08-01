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

export default function AdvancedFiltersMobile({
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

    if (isDefaultValue) {
      params.delete(key);
    } else {
      params.set(key, String(value));
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
    <div className={cn("md:hidden", className)} {...props}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="w-full text-medio">
            Filters
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
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
