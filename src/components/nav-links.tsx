"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/utils/shadcn-utils";

interface NavItem {
  label: string;
  href: string;
}

interface NavLinksProps extends React.HTMLAttributes<HTMLDivElement> {
  navList: NavItem[];
}

export default function NavLinks({ navList, className, ...props }: NavLinksProps) {
  const pathname = usePathname();

  const isActiveLink = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    // Sort navLinks by length (longest first) to prioritize more specific routes
    const sortedLinks = [...navList].sort((a, b) => b.href.length - a.href.length);

    // Find the most specific matching route
    const matchingLink = sortedLinks.find(link => {
      if (link.href === "/") {
        return pathname === "/";
      }
      return pathname === link.href || pathname.startsWith(link.href + "/");
    });

    // Return true only if this href is the most specific match
    return matchingLink?.href === href;
  };

  return (
    <div className={cn("sm:flex hidden h-full items-center justify-center", className)} {...props}>
      {navList.map((item, index) => (
        <Link
          href={item.href}
          key={index}
          className={cn(
            "flex px-4 h-full text-md transition-colors duration-200 items-center justify-center",
            isActiveLink(item.href)
              ? "text-primary font-semibold border-b border-b-primary rounded-none"
              : "text-foreground hover:bg-primary/5"
          )}
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
}
