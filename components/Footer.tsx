"use client";

import React from "react";
import Link from "next/link";
import { ArrowUp, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { label: "Work", href: "#work" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { label: "Awwwards", href: "https://awwwards.com" },
    { label: "Readymag", href: "https://readymag.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "GitHub", href: "https://github.com" },
    { label: "X / Twitter", href: "https://x.com" },
  ];

  return (
    <footer className="bg-white text-[#171717] pt-20 pb-12 border-t border-[#E5E5E5]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Top Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-14 border-b border-[#E5E5E5] gap-8">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-[#666666] block mb-3">
              Independent Digital Studio
            </span>
            <div className="font-serif text-4xl sm:text-6xl font-normal tracking-[-0.02em] text-[#171717]">
              FORM &amp; FUNCTION
            </div>
          </div>

          <button
            onClick={scrollToTop}
            className="self-start md:self-end flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#666666] hover:text-[#171717] border border-[#E5E5E5] hover:border-[#171717] px-4 py-2.5 rounded-[2px] transition-colors cursor-pointer"
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Directory Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 py-14 border-b border-[#E5E5E5] text-xs font-mono">
          {/* Navigation */}
          <div>
            <div className="text-[#999999] uppercase tracking-wider mb-4">
              Directory
            </div>
            <ul className="space-y-2.5">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-[#666666] hover:text-[#171717] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Capabilities */}
          <div>
            <div className="text-[#999999] uppercase tracking-wider mb-4">
              Capabilities
            </div>
            <ul className="space-y-2.5 text-[#666666]">
              <li>UI/UX Design</li>
              <li>Web Development</li>
              <li>Brand Identity</li>
              <li>Digital Strategy</li>
            </ul>
          </div>

          {/* External Archives */}
          <div>
            <div className="text-[#999999] uppercase tracking-wider mb-4">
              Networks
            </div>
            <ul className="space-y-2.5">
              {socialLinks.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[#666666] hover:text-[#171717] transition-colors"
                  >
                    <span>{social.label}</span>
                    <ArrowUpRight className="w-3 h-3 text-[#999999]" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Studio Locations */}
          <div>
            <div className="text-[#999999] uppercase tracking-wider mb-4">
              Studio Locations
            </div>
            <div className="space-y-2 text-[#666666]">
              <div>Zurich: Limmatstrasse 214</div>
              <div>London: 42 Redchurch St</div>
              <div>Tokyo: Minami-Aoyama 5</div>
              <div className="pt-2 text-[#171717]">
                hello@formandfunction.agency
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#666666]">
          <div>
            © {new Date().getFullYear()} FORM &amp; FUNCTION Studio Ltd. All rights reserved.
          </div>
          <div>
            Minimal white editorial architecture • Built with Next.js &amp; Tailwind CSS
          </div>
        </div>
      </div>
    </footer>
  );
}
