import { cn } from "@/lib/utils";
import React from "react";

export default function Container({ children, className, ...props }: React.ComponentProps<"div">) {
  return (
    <div className={cn("max-w-7xl mx-auto", className)} {...props}>
      {children}
    </div>
  );
}
