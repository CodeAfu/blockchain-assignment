"use client";

import React from "react";
import { Button } from "./shadcn-ui/button";
import Link from "next/link";
import { useWallet } from "@/contexts/wallet-provider";

export default function Wallet() {
  const { walletAddress, isMetaMaskInstalled, connectWallet, disconnectWallet } = useWallet();

  return (
    <div>
      {/* Conditionally Render Stuff */}
      {isMetaMaskInstalled ? (
        walletAddress ? (
          // This should be a Dropdown
          <div className="flex flex-row-reverse items-center justify-center gap-3">
            <Button onClick={disconnectWallet}>Disconnect</Button>
            <p className="text-sm">Connected to: {walletAddress}</p>
          </div>
        ) : (
          <Button onClick={connectWallet}>Connect Wallet</Button>
        )
      ) : (
        <div className="max-w-36 text-xs">
          <p>
            Please install{" "}
            <strong className="text-primary hover:underline">
              <Link
                href="https://chromewebstore.google.com/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn"
                target="_blank"
              >
                MetaMask
              </Link>
            </strong>{" "}
            to connect
          </p>
        </div>
      )}
    </div>
  );
}
