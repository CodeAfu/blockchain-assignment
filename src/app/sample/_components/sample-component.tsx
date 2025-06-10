"use client";

import { Button } from "@/components/shadcn-ui/button";
import { useMediaContract } from "@/contexts/media-context";
import { ethers } from "ethers";
import React, { useRef } from "react";

export default function SampleComponent() {
  const titleRef = useRef<HTMLInputElement | null>(null);
  const ipfsRef = useRef<HTMLInputElement | null>(null);
  const royaltyRef = useRef<HTMLInputElement | null>(null);

  const { contract } = useMediaContract();

  const registerMedia = async () => {
    const title = titleRef.current?.value;
    const ipfsHash = ipfsRef.current?.value;
    const royaltyInput = royaltyRef.current?.value;

    if (!title || !ipfsHash || !royaltyInput) {
      alert("Please fill all fields");
      return;
    }

    // const royaltyFee = ethers.parseEther(royaltyInput); // Converts from "0.01" -> wei

    try {
      const tx = await contract.registerMedia(title, ipfsHash, ethers.parseEther("0.01"));
      await tx.wait();
      alert("Media Registered");
    } catch (error) {
      console.error("Registration failed:", error);
      alert("Error registering media");
    }
  };

  return (
    <div className="bg-slate-400 flex flex-col w-fit gap-4 p-4 rounded-md">
      <form className="grid grid-cols-2 items-center gap-2">
        <label htmlFor="title">Title:</label>
        <input name="title" ref={titleRef} type="text" className="p-1" />
        <label htmlFor="title">IPFS Hash(??????????):</label>
        <input name="title" ref={ipfsRef} type="text" className="p-1" />
        <label htmlFor="title">Royalty Fee (This doesnt do anything):</label>
        <input name="title" ref={royaltyRef} type="number" className="p-1" />
      </form>
      Test Smart Contract
      <Button variant="secondary" onClick={registerMedia}>
        Register
      </Button>
    </div>
  );
}
