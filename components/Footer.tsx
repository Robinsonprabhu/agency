"use client";

import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0A0A0A] text-white pt-16 pb-12 border-t border-[#0A0A0A]">
      <div className="max-w-[1320px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-16 border-b border-white/10">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <h3 className="font-heading text-[32px] font-bold uppercase tracking-tight text-white leading-none">
              FORM &amp; FUNCTION
            </h3>
            <p className="text-[15px] font-medium text-white/90">
              Digital Design &amp; Development Studio.
            </p>
            <p className="text-[14px] text-white/60 leading-relaxed max-w-sm">
              Designing with purpose. Building with function.
            </p>
          </div>

          {/* Contact & Location */}
          <div className="md:col-span-4 space-y-4 text-[14px]">
            <div>
              <span className="text-[11px] uppercase tracking-wider text-white/40 block mb-1 font-mono">
                Email
              </span>
              <a
                href="mailto:hello@formandfunction.studio"
                className="text-white hover:text-white/70 transition-colors"
              >
                hello@formandfunction.studio
              </a>
            </div>
            <div>
              <span className="text-[11px] uppercase tracking-wider text-white/40 block mb-1 font-mono">
                Location
              </span>
              <span className="text-white">
                London &amp; Zürich
              </span>
            </div>
          </div>

          {/* Social Links */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-[11px] uppercase tracking-wider text-white/40 block mb-2 font-mono">
              Social Links
            </span>
            <ul className="space-y-2 text-[14px]">
              <li>
                <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors">
                  Twitter / X ↗
                </Link>
              </li>
              <li>
                <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors">
                  LinkedIn ↗
                </Link>
              </li>
              <li>
                <Link href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors">
                  GitHub ↗
                </Link>
              </li>
              <li>
                <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors">
                  Instagram ↗
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[13px] text-white/50">
          <div>
            © 2026 FORM &amp; FUNCTION. All rights reserved.
          </div>
          <div>
            Independent Digital Studio
          </div>
        </div>
      </div>
    </footer>
  );
}
