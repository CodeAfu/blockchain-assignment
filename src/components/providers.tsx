"use client";

import React, { useEffect } from "react";
import { State } from "wagmi";
import { devLog } from "@/utils/logging";
import { WagmiContextProvider } from "@/contexts/wagmi-context";

interface ProvidersProps {
  children: React.ReactNode;
  initialState: State | undefined;
}

export default function Providers({ children, initialState }: Readonly<ProvidersProps>) {
  useEffect(() => {
    devLog("Updated InitialState:", initialState);
  }, [initialState]);

  return <WagmiContextProvider initialState={initialState}>{children}</WagmiContextProvider>;
}
