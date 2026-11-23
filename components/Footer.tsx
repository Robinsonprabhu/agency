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
    { label: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { label: "Awwwards", href: "https://awwwards.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "GitHub", href: "https://github.com" },
    { label: "X / Twitter", href: "https://x.com" },
  ];

  return (
    <footer className="bg-white text-[#111111] pt-20 pb-12 border-t border-[#E5E5E5]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Top Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-12 border-b border-[#E5E5E5] gap-8">
          <div>
            <div className="meta-label block mb-2">
              Studio Archive
            </div>
            <div className="text-[clamp(1.75rem,3vw,2.5rem)] font-medium tracking-tight text-[#111111]">
              FORM &amp; FUNCTION
            </div>
          </div>

          <button
            onClick={scrollToTop}
            className="self-start md:self-end flex items-center gap-2 text-[12px] uppercase tracking-wider text-[#666666] hover:text-[#111111] border border-[#E5E5E5] hover:border-[#111111] px-4 py-2.5 rounded-[2px] transition-colors cursor-pointer"
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Directory & Social Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 py-12 border-b border-[#E5E5E5] text-[13px]">
          {/* Navigation */}
          <div>
            <div className="text-[#999999] text-[11px] uppercase tracking-wider mb-4">
              Navigation
            </div>
            <ul className="space-y-2">
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

          {/* Core Services */}
          <div>
            <div className="text-[#999999] text-[11px] uppercase tracking-wider mb-4">
              Capabilities
            </div>
            <ul className="space-y-2 text-[#666666]">
              <li>UI/UX Design</li>
              <li>Web Development</li>
              <li>Brand Identity</li>
              <li>Digital Strategy</li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <div className="text-[#999999] text-[11px] uppercase tracking-wider mb-4">
              Networks
            </div>
            <ul className="space-y-2">
              {socialLinks.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[#666666] hover:text-[#111111] transition-colors"
                  >
                    <span>{social.label}</span>
                    <ArrowUpRight className="w-3 h-3 text-[#999999]" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <div className="text-[#999999] text-[11px] uppercase tracking-wider mb-4">
              Inquiries
            </div>
            <div className="space-y-2 text-[#666666]">
              <a
                href="mailto:hello@formandfunction.agency"
                className="text-[#111111] hover:underline block"
              >
                hello@formandfunction.agency
              </a>
              <div>Zürich • London • Tokyo</div>
            </div>
          </div>
        </div>

        {/* Bottom Attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[12px] text-[#666666]">
          <div>
            © {new Date().getFullYear()} FORM &amp; FUNCTION Studio Ltd. All rights reserved.
          </div>
          <div>
            Designed with IBM Plex Sans • Built with Next.js &amp; Tailwind CSS
          </div>
        </div>
      </div>
    </footer>
  );
}
