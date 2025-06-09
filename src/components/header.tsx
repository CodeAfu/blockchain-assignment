import React from "react";
import { Cuboid } from "lucide-react";
import Link from "next/link";
import { Button } from "./shadcn-ui/button";
import Wallet from "./wallet";
import { WalletProvider } from "@/contexts/wallet-context";

export default function Header() {
  return (
    <nav className="flex items-center justify-center p-4 bg-slate-700/10 h-20">
      <div className="max-w-7xl w-full flex items-center justify-between">
        {/* Left */}
        <div className="flex gap-8 items-center">
          <Link href="/" className="">
            <div className="flex items-center space-x-4">
              <Cuboid className="h-12 w-12" />
              <h1 className="text-lg font-semibold">Blockchain</h1>
            </div>
          </Link>
          <div className="space-x-4">
            <Button asChild variant="link" className="p-0 text-foreground">
              <Link href="/">Home</Link>
            </Button>
            <Button asChild variant="link" className="p-0 text-foreground">
              <Link href="/media">Register Media</Link>
            </Button>
            <Button asChild variant="link" className="p-0 text-foreground">
              <Link href="/sample">Sample</Link>
            </Button>
          </div>
        </div>
        {/* Right */}
        <WalletProvider>
          <Wallet />
        </WalletProvider>
      </div>
    </nav>
  );
}
