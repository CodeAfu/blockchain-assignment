import {
  allowedContentTypes,
  MediaContentType,
} from "@/types/media";

export function percentToRFBP(percent: number) {
  return BigInt(Math.floor(percent * 100));
}

export function rfbpToPercent(rfbp: bigint) {
  return Number(rfbp) / 100;
}

export function tagsToList(tags: string) {
  return tags
    .trim()
    .split(" ")
    .map(item => item.replaceAll(",", "").replaceAll(".", ""));
}


export function isAllowedType(type: string): type is MediaContentType {
  return allowedContentTypes.includes(type as MediaContentType);
}
