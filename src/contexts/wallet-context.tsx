"use client";
import { useContext, useEffect, useState, createContext, useCallback } from "react";

interface WalletContextProps {
  walletAddress: string | null;
  isMetaMaskInstalled: boolean;
  isConnecting: boolean;
  isConnected: boolean;
  chainId: string | null;
  error: string | null;
  connectWallet: () => Promise<void>;
  disconnectWallet: () => void;
  switchToMainnet: () => Promise<void>;
  clearError: () => void;
}

const WalletContext = createContext<WalletContextProps | undefined>(undefined);

export function WalletProvider({ children }: { children: React.ReactNode }) {
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const [isMetaMaskInstalled, setIsMetaMaskInstalled] = useState<boolean>(false);
  const [isConnecting, setIsConnecting] = useState<boolean>(false);
  const [chainId, setChainId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const isConnected = walletAddress !== null;

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  const connectWallet = useCallback(async () => {
    if (!window.ethereum) {
      setError("MetaMask is not installed. Please install MetaMask to continue.");
      return;
    }

    setIsConnecting(true);
    setError(null);

    try {
      // Request account access
      const accounts = (await window.ethereum.request({
        method: "eth_requestAccounts",
      })) as string[];

      if (accounts?.length > 0) {
        setWalletAddress(accounts[0]);

        // Get current chain ID
        const currentChainId = (await window.ethereum.request({
          method: "eth_chainId",
        })) as string;
        setChainId(currentChainId);

        // Store connection state in localStorage
        localStorage.setItem("walletConnected", "true");
        localStorage.setItem("walletAddress", accounts[0]);
      }
    } catch (err) {
      console.error("Error connecting to MetaMask:", err);
      setError("Failed to connect to MetaMask. Please try again.");
    } finally {
      setIsConnecting(false);
    }
  }, []);

  const disconnectWallet = useCallback(() => {
    setWalletAddress(null);
    setChainId(null);
    setError(null);

    // Clear localStorage
    localStorage.removeItem("walletConnected");
    localStorage.removeItem("walletAddress");

    console.log("Wallet disconnected successfully");
  }, []);

  const switchToMainnet = useCallback(async () => {
    if (!window.ethereum) return;

    try {
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: "0x1" }], // Mainnet
      });
    } catch (err) {
      console.error("Error switching to mainnet:", err);
      setError("Failed to switch to mainnet. Please try manually.");
    }
  }, []);

  // Check for existing connections on mount
  useEffect(() => {
    const checkConnection = async () => {
      if (typeof window === "undefined") return;

      if (!window.ethereum) {
        setIsMetaMaskInstalled(false);
        return;
      }

      setIsMetaMaskInstalled(true);

      try {
        // Check if user was previously connected
        const wasConnected = localStorage.getItem("walletConnected") === "true";

        if (wasConnected) {
          // Check if still connected to MetaMask
          const accounts = (await window.ethereum.request({
            method: "eth_accounts",
          })) as string[];

          if (accounts?.length > 0) {
            setWalletAddress(accounts[0]);

            // Get current chain ID
            const currentChainId = (await window.ethereum.request({
              method: "eth_chainId",
            })) as string;
            setChainId(currentChainId);

            // Update localStorage with current address
            localStorage.setItem("walletAddress", accounts[0]);
          } else {
            // User disconnected from MetaMask directly, clean up
            localStorage.removeItem("walletConnected");
            localStorage.removeItem("walletAddress");
          }
        }
      } catch (err) {
        console.error("Error checking existing connection:", err);
        // Clear localStorage on error
        localStorage.removeItem("walletConnected");
        localStorage.removeItem("walletAddress");
      }
    };

    checkConnection();
  }, []);

  // Set up event listeners
  useEffect(() => {
    if (typeof window === "undefined" || !window.ethereum) return;

    const handleAccountsChanged = (accounts: string[]) => {
      console.log("Accounts changed:", accounts);

      if (accounts.length > 0) {
        // Account changed but still connected
        const wasConnected = localStorage.getItem("walletConnected") === "true";
        if (wasConnected) {
          setWalletAddress(accounts[0]);
          localStorage.setItem("walletAddress", accounts[0]);
          setError(null);
        }
      } else {
        // User disconnected all accounts from MetaMask
        setWalletAddress(null);
        setChainId(null);
        localStorage.removeItem("walletConnected");
        localStorage.removeItem("walletAddress");
        console.log("All accounts disconnected from MetaMask");
      }
    };

    const handleChainChanged = (newChainId: string) => {
      console.log("Chain changed:", newChainId);
      setChainId(newChainId);

      // Optional: You might not want to reload the page
      // Consider updating your app state instead
      // window.location.reload();
    };

    const handleConnect = (connectInfo: { chainId: string }) => {
      console.log("MetaMask connected:", connectInfo);
      setChainId(connectInfo.chainId);
    };

    const handleDisconnect = (error: { code: number; message: string }) => {
      console.log("MetaMask disconnected:", error);
      // This only fires on actual MetaMask disconnection (network issues)
      setWalletAddress(null);
      setChainId(null);
      localStorage.removeItem("walletConnected");
      localStorage.removeItem("walletAddress");
    };

    // Add event listeners with proper typing
    window.ethereum.on("accountsChanged", handleAccountsChanged as (...args: unknown[]) => void);
    window.ethereum.on("chainChanged", handleChainChanged as (...args: unknown[]) => void);
    window.ethereum.on("connect", handleConnect as (...args: unknown[]) => void);
    window.ethereum.on("disconnect", handleDisconnect as (...args: unknown[]) => void);

    // Cleanup function
    return () => {
      if (window.ethereum) {
        window.ethereum.removeListener(
          "accountsChanged",
          handleAccountsChanged as (...args: unknown[]) => void
        );
        window.ethereum.removeListener(
          "chainChanged",
          handleChainChanged as (...args: unknown[]) => void
        );
        window.ethereum.removeListener("connect", handleConnect as (...args: unknown[]) => void);
        window.ethereum.removeListener(
          "disconnect",
          handleDisconnect as (...args: unknown[]) => void
        );
      }
    };
  }, []);

  return (
    <WalletContext.Provider
      value={{
        walletAddress,
        isMetaMaskInstalled,
        isConnecting,
        isConnected,
        chainId,
        error,
        connectWallet,
        disconnectWallet,
        switchToMainnet,
        clearError,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
}

export function useWallet() {
  const context = useContext(WalletContext);
  if (!context) {
    throw new Error("useWallet must be used within a WalletProvider");
  }
  return context;
}
