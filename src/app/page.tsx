import HeroSection from "@/components/hero-section";
import MarketplacePreview from "@/components/marketplace-preview";

export default function Home() {
  return (
    <div>
      <main>
        <HeroSection />
        <MarketplacePreview />
      </main>
      <footer className="">Footer</footer>
    </div>
  );
}
