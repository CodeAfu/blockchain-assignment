"use client";

import { Button } from "@/components/shadcn-ui/button";
import { useMediaContract } from "@/hooks/use-media-contract";
import { useAppKitAccount } from "@reown/appkit/react";
import { ethers } from "ethers";
import React, { useRef } from "react";

export default function SampleComponent() {
  const titleRef = useRef<HTMLInputElement | null>(null);
  const ipfsRef = useRef<HTMLInputElement | null>(null);
  const royaltyRef = useRef<HTMLInputElement | null>(null);
  const contract = useMediaContract();
  const { isConnected } = useAppKitAccount();

  const registerMedia = async () => {
    const title = titleRef.current?.value;
    const ipfsHash = ipfsRef.current?.value;
    const royaltyInput = royaltyRef.current?.value;

    if (!title || !ipfsHash || !royaltyInput) {
      alert("Please fill all fields");
      return;
    }

    const royaltyFee = ethers.parseEther(royaltyInput); // Converts from "0.01" -> wei

    try {
      if (!contract) return;
      await contract.registerMedia(title, ipfsHash, royaltyFee);
    } catch (error) {
      console.error("Registration failed:", error);
      alert("Error Registering Media. See console logs for more info");
    }
  };

  if (!isConnected)
    return (
      <div className="flex flex-col gap-4 items-center justify-center">
        <h2 className="font-semibold underline text-red-500">Please Connect to MetaMask</h2>
      </div>
    );

  return (
    <div className="flex flex-col items-center">
      <div className="bg-slate-400 flex flex-col w-fit gap-4 p-4 rounded-md">
        <form className="grid grid-cols-2 items-center gap-2">
          <label htmlFor="title">Title:</label>
          <input name="title" ref={titleRef} type="text" className="p-1" />
          <label htmlFor="title">IPFS Hash(??????????):</label>
          <input name="title" ref={ipfsRef} type="text" className="p-1" />
          <label htmlFor="title">Royalty Fee:</label>
          <input name="title" ref={royaltyRef} type="number" className="p-1" />
        </form>
        Test Smart Contract
        <Button variant="secondary" onClick={registerMedia}>
          Register
        </Button>
      </div>
    </div>
  );
}
