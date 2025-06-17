"use client";

import React, { useEffect, useState } from "react";
import { ThemeProvider } from "./theme-provider";
import { WagmiContextProvider } from "@/contexts/web3-context";

interface ProvidersProps {
  children: React.ReactNode;
  cookies: string | null;
}

export default function Providers({ children, cookies }: Readonly<ProvidersProps>) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent theme flash by not rendering until mounted
  if (!mounted) {
    return <div style={{ visibility: "hidden" }}>{children}</div>;
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
      <WagmiContextProvider cookies={cookies}>{children}</WagmiContextProvider>
    </ThemeProvider>
  );
}
