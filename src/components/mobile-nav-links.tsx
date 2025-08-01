"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/shadcn-ui/sheet";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/utils/shadcn-utils";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/shadcn-ui/button";
import { useAppKitContext } from "@/contexts/appkit-context";
import { Separator } from "./shadcn-ui/separator";

interface NavItem {
  label: string;
  href: string;
}

interface MobileNavLinksProps extends React.HTMLAttributes<HTMLDivElement> {
  navList: NavItem[];
}

export default function MobileNavLinks({ navList, className, ...props }: MobileNavLinksProps) {
  const pathname = usePathname();
  const { isConnected, address, balance, handleConnect, handleDisconnect } = useAppKitContext();

  const isActiveLink = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <div className={cn("sm:hidden", className)} {...props}>
      <Sheet>
        <SheetTrigger className="p-2">
          <div className="border-2 border-primary p-0.5 rounded-sm">
            <Menu className="h-6 w-6 stroke-primary" />
          </div>
        </SheetTrigger>

        <SheetContent side="right" className="w-[260px]">
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
          </SheetHeader>

          <div className="mt-4 space-y-6">
            <Separator />

            <nav className="space-y-4">
              {navList.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.href}
                  className={cn(
                    "block px-4 py-2 rounded-md text-base transition-colors",
                    isActiveLink(item.href)
                      ? "text-primary font-semibold bg-primary/10"
                      : "text-foreground hover:bg-primary/5"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <Separator />

            <div className="flex flex-col items-start gap-2 px-4">
              {isConnected ? (
                <>
                  <div className="w-full text-sm text-gray-500 break-all leading-tighter tracking-tighter text-right">
                    {address}
                  </div>
                  <div className="w-full font-medium text-sm tracking-tighter text-right">
                    {balance.toLocaleString()} ETH
                  </div>
                  <Button onClick={handleDisconnect} className="w-full">
                    Disconnect
                  </Button>
                </>
              ) : (
                <Button onClick={handleConnect} className="w-full">
                  Connect Wallet
                </Button>
              )}
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
