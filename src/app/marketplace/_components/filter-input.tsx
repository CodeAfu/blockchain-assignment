"use client";

import { Input } from "@/components/shadcn-ui/input";
import * as React from "react";
import { Label } from "@/components/shadcn-ui/label";
import { cn } from "@/utils/shadcn-utils";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/shadcn-ui/button";
import { Search } from "lucide-react";

interface FilterInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  placeholder: string;
  label?: string;
}

const FilterInput = React.forwardRef<HTMLInputElement, FilterInputProps>(
  ({ name, label, placeholder, className, ...props }, ref) => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [value, setValue] = useState(searchParams.get("search") ?? "");

    const updateSearchParam = () => {
      const trimmed = value.trim();
      const params = new URLSearchParams(searchParams.toString());

      if (trimmed !== "") {
        params.set("search", trimmed);
      } else {
        params.delete("search");
      }

      router.push(`?${params.toString()}`);
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === "Enter") {
        updateSearchParam();
      }
    };

    const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
      event.target.select();
    };

    const handleBlur = () => {
      setValue(prev => prev.trim());
    };

    return (
      <div className={cn("flex gap-2 items-center", className)}>
        {label && <Label htmlFor={name}>{label}:</Label>}
        <Input
          id={name}
          ref={ref}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={e => setValue(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className={cn("w-full bg-white", className)}
          {...props}
        />
        <Button size="icon" variant="outline" onClick={updateSearchParam}>
          <Search className="w-4 h-4" />
        </Button>
      </div>
    );
  }
);

FilterInput.displayName = "FilterInput";

export default FilterInput;
