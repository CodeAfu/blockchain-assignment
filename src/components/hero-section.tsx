import Link from "next/link";
import React from "react";

export default function HeroSection() {
  return (
    <div className="relative w-full flex items-center justify-center">
      {/* <div className="absolute inset-0 -z-10 text-muted bg-[url('/assets/bg/dots-bg.svg')] bg-cover opacity-10" /> */}

      <div className="max-w-4xl mx-auto px-6 py-20 text-center">
        {/* Badge */}
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8">
          <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
          Blockchain-Powered Media Protection
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
          Own Your
          <br />
          <span className="text-primary">Digital Legacy</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
          Transform your creative work into protected NFTs.
          <br className="hidden md:block" />
          Secure ownership, automate royalties, build your empire.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Link
            href="/media/upload"
            className="group relative bg-primary text-primary-foreground font-semibold px-8 py-4 rounded-xl hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <span className="relative z-10">Start Creating</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>

          <Link
            href="/marketplace"
            className="group bg-background border-2 border-border text-foreground font-semibold px-8 py-4 rounded-xl hover:bg-accent hover:border-accent-foreground/20 transition-all duration-300"
          >
            <span>Explore Marketplace</span>
            <span className="inline-block ml-2 transform group-hover:translate-x-1 transition-transform duration-300">
              →
            </span>
          </Link>
        </div>

        {/* Stats/Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="p-6 rounded-2xl bg-card border border-border hover:shadow-lg transition-shadow duration-300">
            <div className="text-3xl font-bold text-primary mb-2">100%</div>
            <div className="text-sm text-muted-foreground">Ownership Control</div>
          </div>

          <div className="p-6 rounded-2xl bg-card border border-border hover:shadow-lg transition-shadow duration-300">
            <div className="text-3xl font-bold text-primary mb-2">∞</div>
            <div className="text-sm text-muted-foreground">Perpetual Royalties</div>
          </div>

          <div className="p-6 rounded-2xl bg-card border border-border hover:shadow-lg transition-shadow duration-300">
            <div className="text-3xl font-bold text-primary mb-2">⚡</div>
            <div className="text-sm text-muted-foreground">Instant Protection</div>
          </div>
        </div>
      </div>
    </div>
  );
}
