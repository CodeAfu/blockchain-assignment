"use client";

import { Button } from "@/components/shadcn-ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
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

  const sortDateParam = (searchParams.get("sortDate") ?? "newest") as SortDateFilterOptions;
  const sortPriceParam = (searchParams.get("sortPrice") ?? "none") as SortPriceFilterOptions;
  const mediaTypeParam = (searchParams.get("mediaType") ?? "all") as MediaTypeFilter;

  return (
    <div className={cn("md:hidden", className)} {...props}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="w-full text-medio">
            Filters
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[200px]">
          <DropdownMenuLabel>MEDIA TYPE</DropdownMenuLabel>
          {mediaTypeOptions.map(type => (
            <DropdownMenuItem
              key={type}
              onSelect={() => updateParam("mediaType", type)}
              className={type === mediaTypeParam ? "font-semibold" : ""}
            >
              {mediaTypeLabels[type]}
            </DropdownMenuItem>
          ))}

          <DropdownMenuSeparator />

          <DropdownMenuLabel>SORT PRICE</DropdownMenuLabel>
          {sortPriceOptions.map(option => (
            <DropdownMenuItem
              key={option}
              onSelect={() => updateParam("sortPrice", option)}
              className={option === sortPriceParam ? "font-semibold" : ""}
            >
              {sortPriceLabels[option]}
            </DropdownMenuItem>
          ))}

          <DropdownMenuSeparator />

          <DropdownMenuLabel>SORT DATE</DropdownMenuLabel>
          {sortDateOptions.map(option => (
            <DropdownMenuItem
              key={option}
              onSelect={() => updateParam("sortDate", option)}
              className={option === sortDateParam ? "font-semibold" : ""}
            >
              {sortDateLabels[option]}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
