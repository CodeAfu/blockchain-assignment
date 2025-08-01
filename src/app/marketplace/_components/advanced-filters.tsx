import { Button } from "@/components/shadcn-ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/shadcn-ui/dropdown-menu";
import React, { startTransition } from "react";
import {
  FilterSearchParams,
  MediaTypeFilter,
  mediaTypeOptions,
  SortDateFilterOptions,
  sortDateOptions,
  SortPriceFilterOptions,
  sortPriceOptions,
} from "../types";
import { useRouter, useSearchParams } from "next/navigation";

const mediaTypeLabels: Record<MediaTypeFilter, string> = {
  all: "All Media",
  image: "Images",
  audio: "Audio Files",
  video: "Videos",
};

const sortPriceLabels: Record<SortPriceFilterOptions, string> = {
  asc: "Ascending",
  desc: "Descending ",
  none: "None",
};

const sortDateLabels: Record<SortDateFilterOptions, string> = {
  newest: "Newest",
  oldest: "Oldest",
};

export default function AdvancedFilters() {
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
    <div className="flex gap-2">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="text-xs px-2 py-1">
            {mediaTypeLabels[mediaTypeParam]}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {mediaTypeOptions.map(type => (
            <DropdownMenuItem key={type} onSelect={() => updateParam("mediaType", type)}>
              {mediaTypeLabels[type]}
            </DropdownMenuItem>
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
