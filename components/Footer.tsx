"use client";

import React from "react";
import Link from "next/link";
import { ArrowUp, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { label: "Home", href: "#" },
    { label: "Services", href: "#services" },
    { label: "Work", href: "#work" },
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
    <footer className="bg-[#101B2C] text-[#F4F1EA] pt-20 pb-12 border-t border-[#18263A]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Top Callout */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-16 border-b border-[#18263A] gap-8">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#FF642E] block mb-3">
              [ DIRECT DIGITAL COLLABORATION ]
            </span>
            <div className="font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#F4F1EA]">
              FORM &amp; FUNCTION<span className="text-[#FF642E]">.</span>
            </div>
          </div>

          <button
            onClick={scrollToTop}
            className="self-start md:self-end flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#A6AFBB] hover:text-[#FF642E] border border-white/10 hover:border-[#FF642E] px-4 py-3 transition-colors cursor-pointer"
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Directory Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 py-16 border-b border-[#18263A] text-xs font-mono">
          {/* Navigation */}
          <div>
            <div className="text-[#A6AFBB] uppercase tracking-widest mb-4">
              DIRECTORY
            </div>
            <ul className="space-y-3">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-[#F4F1EA] hover:text-[#FF642E] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Practices */}
          <div>
            <div className="text-[#A6AFBB] uppercase tracking-widest mb-4">
              CAPABILITIES
            </div>
            <ul className="space-y-3 text-[#F4F1EA]/80">
              <li>01. UI/UX Design</li>
              <li>02. Web Development</li>
              <li>03. Brand Identity</li>
              <li>04. Digital Strategy</li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <div className="text-[#A6AFBB] uppercase tracking-widest mb-4">
              ARCHIVES &amp; NETWORK
            </div>
            <ul className="space-y-3">
              {socialLinks.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[#F4F1EA] hover:text-[#FF642E] transition-colors"
                  >
                    <span>{social.label}</span>
                    <ArrowUpRight className="w-3 h-3 text-[#A6AFBB]" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Studio Locations */}
          <div>
            <div className="text-[#A6AFBB] uppercase tracking-widest mb-4">
              STUDIO HUBS
            </div>
            <div className="space-y-2 text-[#F4F1EA]/80 leading-relaxed">
              <div>Zürich: Limmatstrasse 214</div>
              <div>London: 42 Redchurch St</div>
              <div>Tokyo: Minami-Aoyama 5</div>
              <div className="pt-2 text-[#A6AFBB]">
                Inquiries: hello@formandfunction.agency
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#A6AFBB]">
          <div>
            © {new Date().getFullYear()} FORM &amp; FUNCTION Digital Agency Ltd. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>Primary: Deep Navy #101B2C</span>
            <span>•</span>
            <span className="text-[#FF642E]">Accent: Electric Orange #FF642E</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
