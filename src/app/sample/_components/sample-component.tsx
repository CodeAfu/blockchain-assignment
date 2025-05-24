import { Button } from "@/components/ui/button";
import React from "react";

export default function SampleComponent() {
  return (
    <div className="bg-red-800 flex flex-col w-fit gap-4 p-4 rounded-md">
      This is a sample component. The app router ignores this file.
      <Button variant="outline">Test</Button>
    </div>
  );
}
