"use client";

import React from "react";
import { cn } from "@/utils/shadcn-utils";
import { useAppKitContext } from "@/contexts/appkit-context";

const WalletInfo = ({ className, ...props }: React.ComponentProps<"div">) => {
  const { address, balance } = useAppKitContext();

  return (
    <div
      className={cn("max-w-xl h-fit", className)}
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
