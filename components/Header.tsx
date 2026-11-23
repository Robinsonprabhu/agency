"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    { label: "Home", href: "#" },
    { label: "Services", href: "#services" },
    { label: "Work", href: "#work" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#101B2C]/95 backdrop-blur-md border-b border-[#18263A] py-3.5"
          : "bg-transparent border-b border-white/10 py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Left: FORM & FUNCTION Wordmark */}
        <Link
          href="#"
          className="group flex items-center gap-3 tracking-tight"
          aria-label="FORM & FUNCTION Homepage"
        >
          <span className="font-display font-bold text-lg sm:text-xl tracking-tight text-[#F4F1EA] group-hover:text-[#FF642E] transition-colors">
            FORM &amp; FUNCTION
          </span>
          <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-[#FF642E]" />
          <span className="hidden md:inline-block text-[11px] uppercase tracking-widest text-[#A6AFBB] font-mono">
            Digital Agency
          </span>
        </Link>

        {/* Right Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[#A6AFBB] hover:text-[#F4F1EA] transition-colors relative py-1 group"
            >
              <span>{link.label}</span>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#FF642E] transition-all duration-200 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Prominent Let's Talk CTA with Electric Orange Styling */}
        <div className="hidden md:flex items-center">
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold font-display bg-[#FF642E] text-[#101B2C] hover:bg-[#ff7b4d] px-5 py-2.5 transition-all duration-200 shadow-sm"
          >
            <span>Let&apos;s Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#F4F1EA] hover:text-[#FF642E] focus:outline-none focus:ring-1 focus:ring-[#FF642E]"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Responsive Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[60px] bg-[#101B2C] z-40 md:hidden flex flex-col justify-between px-6 py-8 border-t border-[#18263A] overflow-y-auto">
          <div className="space-y-6">
            <div className="text-xs font-mono uppercase tracking-widest text-[#A6AFBB] pb-3 border-b border-[#18263A]">
              Navigation
            </div>
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link, idx) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between text-2xl font-display font-light text-[#F4F1EA] hover:text-[#FF642E] transition-colors py-1"
                >
                  <span>{link.label}</span>
                  <span className="font-mono text-xs text-[#A6AFBB]">0{idx + 1}</span>
                </Link>
              ))}
            </nav>

            <div className="pt-6">
              <Link
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 text-sm uppercase tracking-wider font-semibold font-display bg-[#FF642E] text-[#101B2C] hover:bg-[#ff7b4d] py-3.5 transition-colors"
              >
                <span>Let&apos;s Talk</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="pt-8 border-t border-[#18263A] text-xs font-mono text-[#A6AFBB] space-y-2">
            <div>hello@formandfunction.agency</div>
            <div>London • Zurich • Tokyo</div>
            <div className="text-neutral-500 pt-2">© 2026 FORM &amp; FUNCTION</div>
          </div>
        </div>
      )}
    </header>
  );
}
