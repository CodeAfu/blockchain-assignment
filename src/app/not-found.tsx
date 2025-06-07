import React from "react";
import Link from "next/link";
import { Button } from "@/components/shadcn-ui/button";

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <div className="text-center space-y-6">
        <h1 className="text-6xl font-bold text-gray-100">404</h1>
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-gray-100">Page Not Found</h2>
          <p className="text-gray-500">
            Sorry, we couldn&apos;t find the page you&apos;re looking for.
          </p>
        </div>
        <Button asChild variant="outline">
          <Link href="/">Return Home</Link>
        </Button>
      </div>
    </div>
  );
}
