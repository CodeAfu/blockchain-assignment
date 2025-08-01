// Media type options
export const mediaTypeOptions = ["image", "audio", "video", "all"] as const;
export type MediaTypeFilter = (typeof mediaTypeOptions)[number];

// Sort by price options
export const sortPriceOptions = ["asc", "desc", "none"] as const;
export type SortPriceFilterOptions = (typeof sortPriceOptions)[number];

// Sort by date options
export const sortDateOptions = ["newest", "oldest"] as const;
export type SortDateFilterOptions = (typeof sortDateOptions)[number];

export interface FilterSearchParams {
  mediaType?: MediaTypeFilter;
  sortPrice?: SortPriceFilterOptions;
  sortDate?: SortDateFilterOptions;
  minPrice?: string;
  maxPrice?: string;
  search?: string;
}
