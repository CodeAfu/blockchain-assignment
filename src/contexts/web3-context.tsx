"use client";

import { wagmiAdapter, projectId, config } from "@/lib/web3-config";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createAppKit } from "@reown/appkit/react";
import React, { type ReactNode } from "react";
import { cookieToInitialState, WagmiProvider, } from "wagmi";
import { networks } from "@/lib/web3-config";
import { devLog } from "@/utils/logging";

// Set up queryClient
const queryClient = new QueryClient();

if (!projectId) {
  throw new Error("Project ID is not defined");
}

// Set up metadata
const metadata = {
  name: "MediaVault",
  description:
    "Register and prove ownership of digital media with MediaVault — a decentralized platform for creators to store metadata and IPFS links on the Ethereum blockchain.",
  url: process.env.NEXT_PUBLIC_WEB_URI || "http://localhost:3000",
  icons: ["https://avatars.githubusercontent.com/u/179229932"],
};

// Create the modal
createAppKit({
  adapters: [wagmiAdapter],
  projectId,
  networks: networks,
  defaultNetwork: networks[0],
  metadata: metadata,
  features: {
    analytics: true,
  },
});

export function WagmiContextProvider({
  children,
  cookies,
}: {
  children: ReactNode;
  cookies: string | null;
}) {
  const initialState = cookieToInitialState(config, cookies);
  devLog("Initial State:", initialState);

  return (
    <WagmiProvider config={config} initialState={initialState}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  );
}
