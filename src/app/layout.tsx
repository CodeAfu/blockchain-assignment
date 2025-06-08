import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/components/providers";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MediaVault",
  description: "Register and prove ownership of digital media with MediaVault — a decentralized platform for creators to store metadata and IPFS links on the Ethereum blockchain.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Providers>
        <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
