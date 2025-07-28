import { MethodType } from "@/types/api";

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