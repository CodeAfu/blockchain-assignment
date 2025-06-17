"use client";

import React, { useEffect, useState } from "react";
import { Button } from "./shadcn-ui/button";
import { useAppKit, useAppKitAccount, useAppKitBalance, useDisconnect } from "@reown/appkit/react";

export default function Wallet() {
  const { open } = useAppKit();
  const { address, isConnected } = useAppKitAccount();
  const { fetchBalance } = useAppKitBalance();
  const [balance, setBalance] = useState<number | undefined>(undefined);
  const { disconnect } = useDisconnect();

  useEffect(() => {
    if (!isConnected) return;

    const getBalance = async () => {
      const result = await fetchBalance();

      if (result.isError) {
        console.error("Error while fetching Wallet Balance: ", result.error);
        return;
      }

      if (!result.data) {
        console.error("Wallet balance not found");
      }

      const balanceInEth = result.data ? Number(result.data.balance) / 1e18 : 0;
      setBalance(parseFloat(balanceInEth.toFixed(4)));
    };

    getBalance();
  }, [isConnected, fetchBalance]);

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
          <div className="flex flex-col tracking-tight text-sm items-end justify-end">
            <span className="text-gray-500 text-xs">{address}</span>
            <span>{balance} ETH</span>
          </div>
          {/* <appkit-account-button balance="show" /> */}
        </div>
      ) : (
        <Button onClick={handleConnect}>Connect</Button>
      )}
    </div>
  );
}
