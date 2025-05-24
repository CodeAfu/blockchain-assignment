"use client";

import React from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { getQueryClient } from "@/lib/get-query-client";

interface QueryProviderProps {
  children: React.ReactNode;
}

export default function Providers({ children }: Readonly<QueryProviderProps>) {
  const queryClient = getQueryClient();

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
