import HeroSection from "@/components/hero-section";
import MarketplacePreview from "@/components/marketplace-preview";
import TrustSection from "@/components/trust-section";

export default function Home() {
  return (
    <div>
      <main>
        <HeroSection />
        <MarketplacePreview />
        <TrustSection />
      </main>
    </div>
  );
}
