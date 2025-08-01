export const mediaTypeOptions = ["audio", "image", "video"] as const;
export type MediaTypeFilter = (typeof mediaTypeOptions)[number];

export const sortPriceOptions = ["asc", "desc", "none"] as const;
export type SortPriceFilterOptions = (typeof sortPriceOptions)[number];

export const sortDateOptions = ["newest", "oldest"] as const;
export type SortDateFilterOptions = (typeof sortDateOptions)[number];

export interface FilterSearchParams {
  mediaType?: string;
  sortPrice?: SortPriceFilterOptions;
  sortDate?: SortDateFilterOptions;
  minPrice?: string;
  maxPrice?: string;
  search?: string;
}

export const mediaTypeLabels: Record<MediaTypeFilter, string> = {
  image: "Images",
  audio: "Audio",
  video: "Videos",
};

export const sortPriceLabels: Record<SortPriceFilterOptions, string> = {
  asc: "Ascending",
  desc: "Descending ",
  none: "None",
};

export const sortDateLabels: Record<SortDateFilterOptions, string> = {
  newest: "Newest",
  oldest: "Oldest",
};
