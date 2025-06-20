import Container from "@/components/container";
import WalletInfo from "@/components/wallet-info";
import { AppkitContextProvider } from "@/contexts/appkit-context";
import React from "react";

export default function Test() {
  return (
    <div>
      <Container className="mt-8">
        <h1>Just a page for testing stuff</h1>
        <div className="flex flex-col">
          <AppkitContextProvider>
            <WalletInfo className="self-end" />
          </AppkitContextProvider>
        </div>
      </Container>
    </div>
  );
}
