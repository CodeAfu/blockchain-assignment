"use client";

import React from "react";
import { Button } from "./shadcn-ui/button";
import { useAppKitContext } from "@/contexts/appkit-context";

export default function Wallet() {
  const { isConnected, address, balance, handleConnect, handleDisconnect } = useAppKitContext();

  return (
    <div>
      {isConnected ? (
        <div className="flex flex-row-reverse items-center justify-center gap-3">
          <Button onClick={handleDisconnect}>Disconnect</Button>
          <div className="flex flex-col tracking-tight text-sm items-end justify-end">
            <span className="text-gray-500 text-xs">{address}</span>
            <span>{balance.toLocaleString()} ETH</span>
          </div>
          {/* <appkit-account-button balance="show" /> */}
        </div>
      ) : (
        <Button onClick={handleConnect}>Connect</Button>
      )}
    </div>
  );
}
