"use client";

import { ethers } from "ethers";
import { MEDIA_CONTRACT_ABI, MEDIA_CONTRACT_ADDRESS } from "@/lib/consts";

export async function useMediaContract() {
  if (typeof window.ethereum === "undefined") {
    throw new Error("MetaMask not detected.");
  }

  const provider = new ethers.BrowserProvider(window.ethereum as unknown as ethers.Eip1193Provider);
  const signer = await provider.getSigner();

  return new ethers.Contract(MEDIA_CONTRACT_ADDRESS, MEDIA_CONTRACT_ABI, signer);
}
