"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./brand";
import { Button } from "./ui/button";
import { scrollToSection } from "@/lib/utils";
import { siteConfig } from "@/lib/site";

const navItems = [
  { label: "Services", href: "services" },
  { label: "Areas", href: "areas" },
  { label: "Gallery", href: "gallery" },
  { label: "Get a Quote", href: "quote" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    scrollToSection(href);
    setIsOpen(false);
  };

  return (
    <>
      {/* Skip to content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-2xl focus:bg-snow-ice focus:px-4 focus:py-2 focus:text-snow-navy"
      >
        Skip to content
      </a>

      <header
        className={`fixed top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-snow-white/95 shadow-md backdrop-blur-sm"
            : "bg-transparent"
        }`}
      >
        <nav className="container mx-auto flex items-center justify-between px-4 py-4 md:px-6">
          <button
            onClick={() => handleNavClick("hero")}
            className="flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-snow-ice focus-visible:ring-offset-2"
            aria-label={`Go to ${siteConfig.name} home`}
          >
            <Logo className="h-10 w-10" />
            <span className="hidden font-bebas text-xl uppercase tracking-wide text-snow-navy sm:inline">
              {siteConfig.name}
            </span>
          </button>

          {/* Desktop nav */}
          <ul className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <li key={item.href}>
                <button
                  onClick={() => handleNavClick(item.href)}
                  className="text-sm font-medium text-snow-navy transition-colors hover:text-snow-ice focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-snow-ice focus-visible:ring-offset-2"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </nav>

        {/* Mobile drawer */}
        {isOpen && (
          <div className="border-t border-snow-gray bg-snow-white md:hidden">
            <ul className="container mx-auto flex flex-col px-4 py-6">
              {navItems.map((item) => (
                <li key={item.href}>
                  <button
                    onClick={() => handleNavClick(item.href)}
                    className="w-full py-3 text-left text-base font-medium text-snow-navy transition-colors hover:text-snow-ice focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-snow-ice"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>
    </>
  );
}


