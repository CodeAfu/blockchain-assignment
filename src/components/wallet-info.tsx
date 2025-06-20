"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { useAppKitAccount, useAppKitBalance } from "@reown/appkit/react";

const WalletInfo = ({ className, ...props }: React.ComponentProps<"div">) => {
  const { address, isConnected } = useAppKitAccount();
  const { fetchBalance } = useAppKitBalance();
  const [balance, setBalance] = useState<number | undefined>(undefined);

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

  return (
    <div
      className={cn("max-w-xl", className)}
      style={{ padding: "1rem", border: "1px solid #ccc", borderRadius: "8px" }}
      {...props}
    >
      <h3>Wallet Info</h3>
      {address ? (
        <>
          <p>
            <strong>Address:</strong> {address}
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
