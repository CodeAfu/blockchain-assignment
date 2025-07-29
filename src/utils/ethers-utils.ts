import { ethers } from "ethers";

export function toWei(etherAmount: number | string): bigint {
  return BigInt(ethers.parseEther(etherAmount.toString()).toString());
}

export function fromWei(weiAmount: bigint | string): string {
  return ethers.formatEther(weiAmount.toString());
}

export function parsePriceInWei(value: unknown): bigint {
  if (typeof value === "bigint") return value;

  if (typeof value === "string") {
    return BigInt(value);
  }

  if (typeof value === "object" && value !== null && isBigIntSerializedObject(value)) {
    return BigInt(value.value);
  }

  throw new Error("Invalid priceInWei value: " + JSON.stringify(value));
}

function isBigIntSerializedObject(obj: unknown): obj is { $type: "BigInt"; value: string } {
  return (
    typeof obj === "object" &&
    obj !== null &&
    "$type" in obj &&
    "value" in obj &&
    (obj as Record<string, unknown>)["$type"] === "BigInt" &&
    typeof (obj as Record<string, unknown>)["value"] === "string"
  );
}
