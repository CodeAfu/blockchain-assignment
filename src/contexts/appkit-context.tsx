"use client";

import { useAppKit, useAppKitAccount, useAppKitBalance, useDisconnect } from "@reown/appkit/react";
import { createContext, useContext, useEffect, useState } from "react";

interface AppKitConextProps {
  address: string | undefined;
  isConnected: boolean;
  balance: number;
  handleConnect: () => void;
  handleDisconnect: () => void;
}

const AppKitContext = createContext<AppKitConextProps | undefined>(undefined);

export function AppkitContextProvider({ children }: { children: React.ReactNode }) {
  const { open } = useAppKit();
  const { address, isConnected } = useAppKitAccount();
  const { fetchBalance } = useAppKitBalance();
  const [balance, setBalance] = useState<number>(0);
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
        return;
      }

      const balanceInEth = parseFloat(result.data.balance);
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
    <AppKitContext.Provider
      value={{ address, isConnected, balance, handleConnect, handleDisconnect }}
    >
      {children}
    </AppKitContext.Provider>
  );
}

export function useAppKitContext() {
  const context = useContext(AppKitContext);
  if (!context) {
    throw new Error("useAppKitContext must be used within a AppKitContext Provider.");
  }
  return context;
}
