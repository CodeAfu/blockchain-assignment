"use client";

import { useAppKitAccount } from "@reown/appkit/react";
import React, { useRef } from "react";

export default function SampleComponent() {
  const titleRef = useRef<HTMLInputElement | null>(null);
  const ipfsRef = useRef<HTMLInputElement | null>(null);
  const royaltyRef = useRef<HTMLInputElement | null>(null);
  const { isConnected } = useAppKitAccount();

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
      </div>
    </div>
  );
}
