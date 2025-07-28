import { allowedContentTypes, MediaContentType, NFTData } from "@/types/media";
import { getFileType } from "./file-utils";

export function convertPercentToBasisPoints(percent: number) {
  return BigInt(Math.floor(percent * 100));
}

export function convertBasisPointsToPercent(rfbp: bigint) {
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

export function patchNFTFileData(file: File, nft: NFTData) {
  nft.fileType = getFileType(file.type);
  nft.fileSize = BigInt(file.size);
}
