"use client";

import React from "react";
import SampleComponent from "./_components/sample-component";
import { MediaContractProvider } from "@/contexts/media-context";

export default function SamplePage() {
  return (
    <div>
      This is a sample page
      <MediaContractProvider>
        <SampleComponent />
      </MediaContractProvider>
    </div>
  );
}
