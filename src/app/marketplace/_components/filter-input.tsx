"use client";

import { Input } from "@/components/shadcn-ui/input";
import * as React from "react";
import { Label } from "@/components/shadcn-ui/label";
import { cn } from "@/utils/shadcn-utils";

interface FilterInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  placeholder: string;
  label?: string;
}

const FilterInput = React.forwardRef<HTMLInputElement, FilterInputProps>(


  ({ name, label, placeholder, className, ...props }, ref) => {
    return (
      <div className={cn("flex gap-2 items-center", className)}>
        {label && <Label htmlFor={name}>{label}:</Label>}
        <Input
          id={name}
          ref={ref}
          name={name}
          placeholder={placeholder}
          className={cn("w-full", className)}
          {...props}
        />
      </div>
    );
  }
);

FilterInput.displayName = "FilterInput";

export default FilterInput;
