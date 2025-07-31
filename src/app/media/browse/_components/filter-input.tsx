import { Input } from "@/components/shadcn-ui/input";
import * as React from "react";
import { Label } from "@/components/shadcn-ui/label"; // assuming you use the Label component too
import { cn } from "@/utils/shadcn-utils"; // if you use the cn() helper for className merging

interface FilterInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

const FilterInput = React.forwardRef<HTMLInputElement, FilterInputProps>(
  ({ name, label, className, ...props }, ref) => {
    return (
      <div className="flex gap-2 items-center">
        <Label htmlFor={name}>{label}:</Label>
        <Input id={name} name={name} ref={ref} className={cn(className)} {...props} />
      </div>
    );
  }
);

FilterInput.displayName = "FilterInput";

export default FilterInput;
