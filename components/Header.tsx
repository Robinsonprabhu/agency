"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";

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
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#E5E5E5]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 h-20 flex items-center justify-between">
        {/* Brand Wordmark */}
        <Link
          href="#"
          className="group flex items-baseline gap-2"
          aria-label="FORM & FUNCTION Homepage"
        >
          <span className="font-sans font-medium text-lg tracking-tight text-[#171717]">
            FORM &amp; FUNCTION
          </span>
          <span className="text-[11px] font-sans text-[#666666] hidden sm:inline">
            Studio
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-9 text-[15px] font-normal text-[#666666]">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="hover:text-[#171717] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Action Button: Refined Black CTA */}
        <div className="hidden md:flex items-center space-x-6">
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-medium bg-[#171717] text-white hover:bg-[#333333] px-5 py-2.5 rounded-[2px] transition-colors"
          >
            <span>Let&apos;s talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#171717] hover:text-[#666666] focus:outline-none"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-20 bg-white z-40 md:hidden flex flex-col justify-between px-6 py-10 border-t border-[#E5E5E5] overflow-y-auto">
          <nav className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-serif text-[#171717] hover:text-[#666666] transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4">
              <Link
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex items-center justify-center gap-2 w-full text-sm font-medium bg-[#171717] text-white hover:bg-[#333333] py-3.5 rounded-[2px] transition-colors"
              >
                <span>Let&apos;s talk</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </nav>

          <div className="pt-8 border-t border-[#E5E5E5] text-xs font-mono text-[#666666] space-y-2">
            <div>hello@formandfunction.agency</div>
            <div>London • Zurich • Tokyo</div>
            <div className="text-[#999999] pt-2">© 2026 FORM &amp; FUNCTION</div>
          </div>
        </div>
      )}
    </header>
  );
}
