"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState<"EN" | "DE">("EN");

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: "Team", href: "#team" },
    { label: "Services", href: "#services" },
    { label: "Products", href: "#products" },
    { label: "Podcast", href: "#podcast" },
    { label: "Blog", href: "#blog" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* Accessible skip link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#111111] focus:text-white focus:text-[13px]"
      >
        Skip to main content
      </a>

      <header className="sticky top-0 z-40 bg-white border-b border-[#E5E5E5]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 h-18 flex items-center justify-between">
          {/* Wordmark */}
          <Link
            href="#"
            className="flex items-center text-[16px] font-medium tracking-tight text-[#111111] hover:text-[#666666] transition-colors"
            aria-label="FORM & FUNCTION Homepage"
          >
            <span>FORM &amp; FUNCTION</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8 text-[14px] text-[#111111]">
            <nav className="flex items-center space-x-7">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-[#666666] hover:text-[#111111] transition-colors py-1 relative group"
                >
                  <span>{link.label}</span>
                  <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#111111] transition-all duration-150 group-hover:w-full" />
                </Link>
              ))}
            </nav>

            {/* Language Switch */}
            <div className="flex items-center gap-1.5 pl-6 border-l border-[#E5E5E5] text-[12px]">
              <button
                type="button"
                onClick={() => setLanguage("EN")}
                className={`px-1 py-0.5 transition-colors cursor-pointer ${
                  language === "EN" ? "text-[#111111] font-medium underline underline-offset-4" : "text-[#666666] hover:text-[#111111]"
                }`}
                aria-label="Switch to English"
              >
                EN
              </button>
              <span className="text-[#E5E5E5]">/</span>
              <button
                type="button"
                onClick={() => setLanguage("DE")}
                className={`px-1 py-0.5 transition-colors cursor-pointer ${
                  language === "DE" ? "text-[#111111] font-medium underline underline-offset-4" : "text-[#666666] hover:text-[#111111]"
                }`}
                aria-label="Switch to German"
              >
                DE
              </button>
            </div>
          </div>

          {/* Mobile Hamburger */}
          <div className="flex items-center gap-4 lg:hidden">
            <button
              type="button"
              onClick={() => setLanguage(language === "EN" ? "DE" : "EN")}
              className="text-[12px] text-[#666666] hover:text-[#111111] px-1 py-0.5 cursor-pointer font-medium"
            >
              {language}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#111111] hover:text-[#666666] focus:outline-none"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 top-18 bg-white z-40 lg:hidden flex flex-col justify-between px-6 py-8 border-t border-[#E5E5E5] overflow-y-auto">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-[20px] font-normal text-[#111111] hover:text-[#666666] transition-colors py-1"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="pt-8 border-t border-[#E5E5E5] space-y-3">
              <div className="flex items-center gap-2 text-[13px] text-[#666666]">
                <span>Language:</span>
                <button
                  type="button"
                  onClick={() => setLanguage("EN")}
                  className={`px-1 font-medium ${language === "EN" ? "text-[#111111] underline" : "text-[#666666]"}`}
                >
                  EN
                </button>
                <span>/</span>
                <button
                  type="button"
                  onClick={() => setLanguage("DE")}
                  className={`px-1 font-medium ${language === "DE" ? "text-[#111111] underline" : "text-[#666666]"}`}
                >
                  DE
                </button>
              </div>
              <div className="text-[12px] text-[#666666]">
                FORM &amp; FUNCTION • Independent Digital Studio
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
