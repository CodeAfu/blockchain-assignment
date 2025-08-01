import React from "react";
import Link from "next/link";
import Wallet from "./wallet";
import { AppkitContextProvider } from "@/contexts/appkit-context";
import NavLinks from "./nav-links";


export default function Header() {
  return (
    <nav className="flex items-center justify-center px-4 bg-slate-500/10 h-20">
      <div className="w-full h-full flex items-center justify-between">
        {/* Left */}
        <div className="flex h-full gap-8 items-center">
          <Link href="/" className="">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-semibold tracking-wider">
                <span className="relative">
                  <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-primary to-blue-950">
                    Media
                  </span>
                  <span>Vault</span>
                  <div className="absolute -bottom-0.5 left-0 w-20 h-0.5 bg-gradient-to-r from-primary to-blue-950 rounded-full"></div>
                </span>
              </h1>
            </div>
          </Link>

          <NavLinks />
        </div>

        {/* Right */}
        <AppkitContextProvider>
          <Wallet />
        </AppkitContextProvider>
      </div>
    </nav>
  );
}
