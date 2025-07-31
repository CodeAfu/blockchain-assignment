"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/utils/shadcn-utils";

const navLinks = [
  {
    label: "Home",
    href: "/",
  },
{
    label: "Marketplace",
    href: "/marketplace",
  },
  {
    label: "Media",
    href: "/media",
  },
  {
    label: "Upload",
    href: "/media/upload",
  },
  {
    label: "Test",
    href: "/test",
  },
];

export default function NavLinks() {
  const pathname = usePathname();

  const isActiveLink = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    // Sort navLinks by length (longest first) to prioritize more specific routes
    const sortedLinks = [...navLinks].sort((a, b) => b.href.length - a.href.length);

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
    <div className="h-full flex items-center justify-center">
      {navLinks.map((item, index) => (
        <Link
          href={item.href}
          key={index}
          className={cn(
            "px-4 h-full text-md relative transition-colors duration-200 flex items-center justify-center",
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
