import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { headers } from "next/headers";
import Providers from "@/components/providers";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { config } from "@/lib/web3-config";
import { devLog } from "@/utils/logging";
import { cookieToInitialState } from "wagmi";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MediaVault",
  description:
    "Register and prove ownership of digital media with MediaVault — a decentralized platform for creators to store metadata and IPFS links on the Ethereum blockchain.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const initialState = cookieToInitialState(config, (await headers()).get("cookie"));
  devLog("Initial State: ", initialState);
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Providers initialState={initialState}>
          <Header />
          {children}
          <Footer />
          <Toaster
            position="top-center"
            toastOptions={{
              className: "text-sm shadow-md rounded-lg",
              duration: 5000,
            }}
          />
        </Providers>
      </body>
    </html>
  );
}
