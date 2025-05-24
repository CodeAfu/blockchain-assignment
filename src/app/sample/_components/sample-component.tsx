import { Button } from "@/components/ui/button";
import React from "react";

export default function SampleComponent() {
  return (
    <div className="bg-red-800">
      This is a sample component. The app router ignores this file.
      <Button variant="destructive">Test</Button>
    </div>
  );
}
