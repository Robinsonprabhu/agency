"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    { label: "Work", href: "#work" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* Accessible skip link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#111111] focus:text-white focus:text-[13px] font-sans"
      >
        Skip to main content
      </a>

      <header className="sticky top-0 z-40 bg-white border-b border-[#E5E5E5]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 h-18 flex items-center justify-between">
          {/* Brand Wordmark */}
          <Link
            href="#"
            className="flex items-center text-[16px] font-medium tracking-tight text-[#111111] hover:text-[#666666] transition-colors"
            aria-label="FORM & FUNCTION Homepage"
          >
            <span>FORM &amp; FUNCTION</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 text-[14px]">
            <nav className="flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-[#666666] hover:text-[#111111] transition-colors py-1 relative group"
                >
                  <span>{link.label}</span>
                  <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#111111] transition-all duration-200 group-hover:w-full" />
                </Link>
              ))}
            </nav>

            <Link
              href="#contact"
              className="inline-flex items-center gap-1.5 text-[14px] font-medium bg-[#111111] text-white hover:bg-[#333333] px-5 py-2.5 rounded-[2px] transition-colors"
            >
              <span>Contact</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#111111] hover:text-[#666666] focus:outline-none"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 top-18 bg-white z-40 md:hidden flex flex-col justify-between px-6 py-8 border-t border-[#E5E5E5] overflow-y-auto">
            <nav className="flex flex-col space-y-5">
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
              <div className="pt-4">
                <Link
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="inline-flex items-center justify-center gap-2 w-full text-[14px] font-medium bg-[#111111] text-white hover:bg-[#333333] py-3.5 rounded-[2px] transition-colors"
                >
                  <span>Contact</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </nav>

            <div className="pt-8 border-t border-[#E5E5E5] text-[12px] text-[#666666] space-y-1">
              <div>hello@formandfunction.agency</div>
              <div>© 2026 FORM &amp; FUNCTION • All rights reserved.</div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
