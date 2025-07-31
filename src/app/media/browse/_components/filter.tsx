import Container from "@/components/container";
import React from "react";
import FilterInput from "./filter-input";

export default function Filter() {
  return (
    <Container>
      <div className="max-w-full border p-4 rounded-md">
        <div className="flex gap-4">
          <FilterInput name="filter" label="Filter" />          
        </div>
      </div>
    </Container>
  );
}
