import { cn } from "@/lib/utils";
import React from "react";

export default function Container({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("max-w-7xl mx-auto w-full", className)} {...props}>
      {children}
    </div>
  );
}
