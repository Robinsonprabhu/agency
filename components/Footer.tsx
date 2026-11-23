"use client";

import React from "react";
import Link from "next/link";
import { ArrowUp, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { label: "Team", href: "#team" },
    { label: "Services", href: "#services" },
    { label: "Products", href: "#products" },
    { label: "Podcast", href: "#podcast" },
    { label: "Blog", href: "#blog" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-white text-[#111111] pt-20 pb-12 border-t border-[#E5E5E5]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Top Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-14 border-b border-[#E5E5E5] gap-8">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-[#666666] block mb-3">
              12 // Studio Footer
            </span>
            <div className="font-serif text-4xl sm:text-6xl font-normal tracking-[-0.02em] text-[#111111]">
              FORM &amp; FUNCTION
            </div>
          </div>

          <button
            onClick={scrollToTop}
            className="self-start md:self-end flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#666666] hover:text-[#111111] border border-[#E5E5E5] hover:border-[#111111] px-4 py-2.5 rounded-[2px] transition-colors cursor-pointer"
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Directory & Placeholder Company Coordinates */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 py-14 border-b border-[#E5E5E5] text-xs font-mono">
          {/* Navigation */}
          <div>
            <div className="text-[#999999] uppercase tracking-wider mb-4">
              Navigation
            </div>
            <ul className="space-y-2.5">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-[#666666] hover:text-[#111111] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Coordinates (Strict Placeholder Rule) */}
          <div>
            <div className="text-[#999999] uppercase tracking-wider mb-4">
              Company Coordinates
            </div>
            <div className="space-y-2 text-[#666666]">
              <div>Address: [PLACEHOLDER: Company address]</div>
              <div>Phone: [PLACEHOLDER: Phone number]</div>
              <div>Email: [PLACEHOLDER: Official email]</div>
              <div className="pt-2">
                <Link
                  href="#team"
                  className="text-[#111111] hover:underline"
                >
                  Jobs: [PLACEHOLDER: Career openings]
                </Link>
              </div>
            </div>
          </div>

          {/* Social Links & Icons (Placeholder) */}
          <div>
            <div className="text-[#999999] uppercase tracking-wider mb-4">
              Social Networks
            </div>
            <ul className="space-y-2.5">
              {["Platform 01", "Platform 02", "Platform 03", "Platform 04"].map((item) => (
                <li key={item}>
                  <a
                    href="#social"
                    className="inline-flex items-center gap-1 text-[#666666] hover:text-[#111111] transition-colors"
                  >
                    <span>[PLACEHOLDER: {item}]</span>
                    <ArrowUpRight className="w-3 h-3 text-[#999999]" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Information */}
          <div>
            <div className="text-[#999999] uppercase tracking-wider mb-4">
              Legal &amp; Policy
            </div>
            <ul className="space-y-2 text-[#666666]">
              <li>
                <Link href="#privacy" className="hover:text-[#111111] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#terms" className="hover:text-[#111111] transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#legal" className="hover:text-[#111111] transition-colors">
                  Legal Notice / Impressum
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#666666]">
          <div>
            © {new Date().getFullYear()} FORM &amp; FUNCTION Studio. All rights reserved.
          </div>
          <div>
            Independent Digital Agency Architecture • Next.js &amp; Tailwind CSS
          </div>
        </div>
      </div>
    </footer>
  );
}
