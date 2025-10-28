"use client";

import { scrollToSection } from "@/lib/utils";
import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-snow-gray bg-snow-white py-8">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row md:px-6">
        <p className="text-center text-sm text-slate-600 md:text-left">
          © {new Date().getFullYear()} {siteConfig.name} · {siteConfig.location}
        </p>
        <button
          onClick={() => scrollToSection("quote")}
          className="text-sm font-medium text-snow-navy transition-colors hover:text-snow-ice focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-snow-ice"
        >
          Become a Seasonal Client
        </button>
      </div>
    </footer>
  );
}


