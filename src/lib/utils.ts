import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import {
  allowedContentTypes,
  MediaContentType,
  audioTypes,
  imageTypes,
  videoTypes,
} from "@/types/media";
import { Result } from "@/types/result";
import { MethodType } from "@/types/api";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function tryCatch<T, E = Error>(promise: Promise<T>): Promise<Result<T, E>> {
  try {
    const data = await promise;
    return { data, error: null };
  } catch (error) {
    return { data: null, error: error as E };
  }
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

export function getFileTypeCategory(type: string): "image" | "audio" | "video" | null {
  if (!isAllowedType(type)) return null;

  if (imageTypes.includes(type as (typeof imageTypes)[number])) return "image";
  if (audioTypes.includes(type as (typeof audioTypes)[number])) return "audio";
  if (videoTypes.includes(type as (typeof videoTypes)[number])) return "video";

  return null;
}

// Helper function to determine file type
export function getFileType(mimeType: string): "IMAGE" | "VIDEO" | "AUDIO" | undefined {
  if (mimeType.startsWith("image/")) return "IMAGE";
  if (mimeType.startsWith("video/")) return "VIDEO";
  if (mimeType.startsWith("audio/")) return "AUDIO";
  return;
}

export function getOptions<T = string>(
  methodType: MethodType,
  contentType: "multipart/form-data" | "application/json",
  body?: T
) {
  return {
    method: methodType,
    headers: {
      Authorization: `Bearer ${process.env.PINATA_JWT}`,
      "Content-Type": contentType,
    },
    body: body,
  };
}

export function devLog(...args: unknown[]) {
  if (process.env.NODE_ENV === "development") {
    console.log(...args);
  }
}

export function getFileBaseName(filename: string): string {
  const lastDotIndex = filename.lastIndexOf(".");
  return lastDotIndex !== -1 ? filename.slice(0, lastDotIndex) : filename;
}
