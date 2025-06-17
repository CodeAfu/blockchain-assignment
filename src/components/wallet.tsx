"use client";

import React from "react";
import { Button } from "./shadcn-ui/button";
import { useAppKit, useAppKitAccount, useDisconnect } from "@reown/appkit/react";

export default function Wallet() {
  const { open } = useAppKit();
  const { address, isConnected } = useAppKitAccount();
  const { disconnect } = useDisconnect();

  const handleConnect = () => {
    open({
      view: "Connect",
      namespace: "eip155",
    });
  };

  const handleDisconnect = async () => {
    await disconnect();
  };

  return (
    <div>
      {isConnected ? (
        <div className="flex flex-row-reverse items-center justify-center gap-3">
          <Button onClick={handleDisconnect}>Disconnect</Button>
          <p className="text-sm">Connected to: {address}</p>
        </div>
      ) : (
        <Button onClick={handleConnect}>Connect</Button>
      )}
    </div>
  );
}
