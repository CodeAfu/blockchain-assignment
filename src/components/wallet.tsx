"use client";

import React, { useEffect, useState } from "react";
import { Button } from "./shadcn-ui/button";
import { MetaMaskInpageProvider } from "@metamask/providers";

declare global {
  interface Window {
    ethereum?: MetaMaskInpageProvider;
  }
}

export default function Wallet() {
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const [isMetaMaskInstalled, setIsMetaMaskInstalled] = useState<boolean | undefined>();

  const connectWallet = async () => {
    if (typeof window.ethereum === "undefined") {
      return;
    }
    try {
      const accounts: string[] = (await window.ethereum.request({
        method: "eth_requestAccounts",
      })) as string[];

      if (accounts === null || accounts === undefined) {
        console.error("No accounts found in MetaMask");
        return;
      }

      setWalletAddress(accounts[0]);
    } catch (err) {
      console.error("Error connecting to MetaMask:", err);
    }
  };

  useEffect(() => {
    setIsMetaMaskInstalled(typeof window.ethereum !== "undefined");
  }, []);

  return (
    <div>
      {/* Conditionally Render Stuff */}
      {isMetaMaskInstalled ? (
        walletAddress ? (
          // This should be a Dropdown
          <div className="flex flex-row-reverse items-center justify-center gap-3">
            <Button onClick={() => setWalletAddress(null)}>Disconnect</Button>
            <p className="text-sm">Connected to: {walletAddress}</p>
          </div>
        ) : (
          <Button onClick={connectWallet}>Connect Wallet</Button>
        )
      ) : (
        <div className="max-w-36 text-xs">
          <p>
            Please install <strong className="text-primary">MetaMask</strong> to connect to the app
          </p>
        </div>
      )}
    </div>
  );
}
