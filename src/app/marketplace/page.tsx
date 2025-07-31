import React from "react";
import MarketView from "./_components/market-view";
import Filter from "./_components/filter";

export default function BrowsePage() {

  return (
    <main className="min-h-screen mt-8 flex flex-col gap-2">
      <Filter />
      <MarketView />
    </main>
  );
}
