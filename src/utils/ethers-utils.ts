import { ethers } from "ethers";

export function toWei(etherAmount: number | string): bigint {
  return BigInt(ethers.parseEther(etherAmount.toString()).toString());
}

export function fromWei(weiAmount: bigint | string): string {
  return ethers.formatEther(weiAmount.toString());
}
