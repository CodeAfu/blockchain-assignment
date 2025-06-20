import React from "react";
// import { Cuboid } from "lucide-react";
import Link from "next/link";
import { Button } from "./shadcn-ui/button";
import Wallet from "./wallet";
import { AppkitContextProvider } from "@/contexts/appkit-context";

const navLinks = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Register Media",
    href: "/media/register",
  },
  {
    label: "Sample",
    href: "/sample",
  },
  {
    label: "Test",
    href: "/test",
  },
];

export default function Header() {
  return (
    <nav className="flex items-center justify-center p-4 bg-slate-500/10 h-20">
      <div className="max-w-7xl w-full flex items-center justify-between">
        {/* Left */}
        <div className="flex gap-8 items-center">
          <Link href="/" className="">
            <div className="flex items-center space-x-4">
              {/* <Cuboid className="h-12 w-12" /> */}
              <h1 className="text-2xl font-semibold tracking-wider">
                <span className="relative">
                  <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-primary to-purple-950">
                    Media
                  </span>
                  <span>Vault</span>
                  <div className="absolute -bottom-0.5 left-0 w-20 h-0.5 bg-gradient-to-r from-primary to-purple-600 rounded-full"></div>
                </span>
              </h1>
            </div>
          </Link>

          {/* Navigation */}
          <div className="space-x-4">
            {navLinks.map((item, index) => (
              <Button key={index} variant="link" className="p-0 text-foreground text-md">
                <Link href={item.href}>{item.label}</Link>
              </Button>
            ))}
          </div>
        </div>

        {/* Right */}
        <AppkitContextProvider>
          <Wallet />
        </AppkitContextProvider>
      </div>
    </nav>
  );
}
