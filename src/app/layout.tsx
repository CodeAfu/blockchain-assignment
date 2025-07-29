import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { headers } from "next/headers";
import Providers from "@/components/providers";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { config } from "@/lib/web3-config";
import { devLog } from "@/utils/logging";

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
  const cookies = await headers().then(h => h.get("cookies"));

  devLog("Network config:", config);
  devLog("Current chain ID:", await config.getClient().chain);

  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Providers cookies={cookies}>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
