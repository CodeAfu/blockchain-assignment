import React from "react";
import { Cuboid } from "lucide-react";
import Link from "next/link";
import { Button } from "./shadcn-ui/button";

export default function Header() {
  return (
    <nav className="flex items-center justify-center p-4 bg-gray-700/10 h-20 text-white">
      <div className="max-w-7xl w-full flex items-center justify-between">
        {/* Left */}
        <div className="flex gap-16 items-center">
          <Link href="/" className="">
            <div className="flex items-center space-x-4">
              <Cuboid className="h-12 w-12" />
              <h1 className="text-lg font-semibold">Blockchain</h1>
            </div>
          </Link>
          <div className="space-x-4">
            <Button asChild variant="link" className="p-0 text-white">
              <Link href="/">Home</Link>
            </Button>
            <Button asChild variant="link" className="p-0 text-white">
              <Link href="/sample">Sample</Link>
            </Button>
          </div>
        </div>
        {/* Right */}
        <div></div>
      </div>
    </nav>
  );
}
