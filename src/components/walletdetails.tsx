"use client";
import React, { useEffect, useState } from "react";
import { ethers } from "ethers";

const WalletInfo = () => {
  const [walletAddress, setWalletAddress] = useState("");
  const [balance, setBalance] = useState("");

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = (await window.ethereum.request({
          method: "eth_requestAccounts",
        })) as string[];
        setWalletAddress(accounts[0]);
        getBalance(accounts[0]);
      } catch (err) {
        console.error("User rejected request:", err);
      }
    } else {
      alert("MetaMask is not installed. Please install it to use this feature.");
    }
  };

  const getBalance = async address => {
    if (typeof window.ethereum === "undefined") {
      return;
    }
    const provider = new ethers.BrowserProvider(window.ethereum);
    const balance = await provider.getBalance(address);
    const ether = ethers.utils.formatEther(balance);
    setBalance(ether);
  };

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.request({ method: "eth_accounts" }).then(accounts => {
        if (accounts.length > 0) {
          setWalletAddress(accounts[0]);
          getBalance(accounts[0]);
        }
      });
    }
  }, []);

  return (
    <div style={{ padding: "1rem", border: "1px solid #ccc", borderRadius: "8px" }}>
      <h3>Wallet Info</h3>
      {walletAddress ? (
        <>
          <p>
            <strong>Address:</strong> {walletAddress}
          </p>
          <p>
            <strong>Balance:</strong> {balance} ETH
          </p>
        </>
      ) : (
        <button onClick={connectWallet}>Connect MetaMask</button>
      )}
    </div>
  );
};

export default WalletInfo;
