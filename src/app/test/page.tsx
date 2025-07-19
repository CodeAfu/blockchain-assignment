import Container from "@/components/container";
import WalletInfo from "@/components/wallet-info";
import { AppkitContextProvider } from "@/contexts/appkit-context";
import React from "react";
import IPFSTest from "./_components.tsx/ipfs-test";

export default function Test() {
  return (
    <div>
      <Container className="mt-8 min-h-[80vh]">
        <h1>Just a page for testing stuff</h1>
        <div className="flex flex-col mt-4">
          <div className="flex justify-between">
            <IPFSTest />
            <AppkitContextProvider>
              <WalletInfo />
            </AppkitContextProvider>
          </div>
        </div>
      </Container>
    </div>
  );
}
