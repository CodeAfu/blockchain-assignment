import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 pb-32 mt-8">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-8 text-sm">
        {/* Branding */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-2">MediaRights</h3>
          <p className="text-gray-400">Empowering creators with ownership and fair rewards.</p>
          <p className="mt-4 text-xs text-gray-500">
            © {new Date().getFullYear()} MediaRights. All rights reserved.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-white font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1">
            <li>
              <Link href="#" className="hover:underline">
                Marketplace
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Upload Media
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Whitepaper
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h4 className="text-white font-semibold mb-2">Connect With Us</h4>
          <ul className="space-y-1">
            <li>
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Twitter
              </Link>
            </li>
            <li>
              <Link
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                GitHub
              </Link>
            </li>
            <li>
              <Link href="mailto:team@mediarights.xyz" className="hover:underline">
                team@mediarights.xyz
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
