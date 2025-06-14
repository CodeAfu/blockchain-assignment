"use client";

import React, { useEffect, useState } from "react";
import { ethers, formatEther } from "ethers";
import { cn } from "@/lib/utils";

const WalletInfo = ({ className, ...props }: React.ComponentProps<"div">) => {
  const [walletAddress, setWalletAddress] = useState("");
  const [balance, setBalance] = useState("");

  // const connectWallet = async () => {
  //   if (window.ethereum) {
  //     try {
  //       const accounts = (await window.ethereum.request({
  //         method: "eth_requestAccounts",
  //       })) as string[];
  //       setWalletAddress(accounts[0]);
  //       getBalance(accounts[0]);
  //     } catch (err) {
  //       console.error("User rejected request:", err);
  //     }
  //   } else {
  //     alert("MetaMask is not installed. Please install it to use this feature.");
  //   }
  // };

  const getBalance = async (address: string) => {
    if (typeof window.ethereum === "undefined") {
      return;
    }

    const provider = new ethers.BrowserProvider(window.ethereum);
    const balance = await provider.getBalance(address);
    const ether = formatEther(balance);
    setBalance(ether);
  };

  useEffect(() => {
    const getAccounts = async () => {
      if (typeof window.ethereum === "undefined") {
        return;
      }

      const accounts = (await window.ethereum.request({
        method: "eth_accounts",
      })) as string[];

      if (accounts.length > 0) {
        setWalletAddress(accounts[0]);
        getBalance(accounts[0]);
      }
    };

    getAccounts();
  }, []);

  return (
    <div
      className={cn("max-w-xl", className)}
      style={{ padding: "1rem", border: "1px solid #ccc", borderRadius: "8px" }}
      {...props}
    >
      <h3>Wallet Info</h3>
      {walletAddress ? (
        <>
          <p>
            <strong>Address:</strong> {walletAddress}
          </p>
          <p>
            <strong>Balance:</strong> {balance ?? 0} ETH
          </p>
        </>
      ) : (
        <p>Please connect to MetaMask</p>
      )}
    </div>
  );
};

export default WalletInfo;
