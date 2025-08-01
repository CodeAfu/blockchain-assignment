import { Button } from "@/components/shadcn-ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuCheckboxItem,
} from "@/components/shadcn-ui/dropdown-menu";
import React, { startTransition } from "react";
import {
  FilterSearchParams,
  mediaTypeLabels,
  SortDateFilterOptions,
  sortDateLabels,
  sortDateOptions,
  SortPriceFilterOptions,
  sortPriceLabels,
  sortPriceOptions,
} from "../types";
import { useRouter, useSearchParams } from "next/navigation";
import { cn } from "@/utils/shadcn-utils";

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
  const mediaTypeOptions = ["audio", "image", "video"] as const;
  type MediaTypeFilter = (typeof mediaTypeOptions)[number];

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

  const displayText =
    mediaTypeSelected.length === 0 || mediaTypeSelected.length === mediaTypeOptions.length
      ? "All Media"
      : mediaTypeSelected
          .slice(0, 2)
          .map(t => mediaTypeLabels[t])
          .join(", ") + (mediaTypeSelected.length > 2 ? "..." : "");

  return (
    <div className={cn("flex gap-2", className)} {...props}>
      {/* Media Type Filter */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="text-xs px-2 py-1">
            {displayText}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
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
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Sort Price Filter */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="text-xs px-2 py-1">
            {sortPriceLabels[sortPriceParam]}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {sortPriceOptions.map(option => (
            <DropdownMenuItem key={option} onSelect={() => updateParam("sortPrice", option)}>
              {sortPriceLabels[option]}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Sort Date Filter */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="text-xs px-2 py-1">
            {sortDateLabels[sortDateParam]}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {sortDateOptions.map(option => (
            <DropdownMenuItem key={option} onSelect={() => updateParam("sortDate", option)}>
              {sortDateLabels[option]}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
