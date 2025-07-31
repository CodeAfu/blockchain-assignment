import { cn } from "@/utils/shadcn-utils";
import React from "react";

export default function Container({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("max-w-7xl px-4 mx-auto w-full", className)} {...props}>
      {children}
    </div>
  );
}
