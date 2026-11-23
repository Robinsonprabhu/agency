"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface HeaderProps {
  onOpenContact?: () => void;
}

export default function Header({ onOpenContact }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full h-[80px] bg-white/94 backdrop-blur-sm border-b border-[#E4E4DF]">
      <div className="max-w-[1320px] mx-auto px-6 h-full flex items-center justify-between">
        {/* Left: Logo + Est. 2019 */}
        <Link href="/" className="flex items-baseline gap-3 group">
          <span className="font-heading text-[30px] font-bold tracking-tight text-[#0A0A0A] leading-none">
            FORM &amp; FUNCTION
          </span>
          <span className="text-[13px] font-normal text-[#6B6B66] tracking-normal select-none">
            Est. 2019
          </span>
        </Link>

        {/* Right: Navigation Links + Contact Button */}
        <div className="flex items-center gap-8">
          <nav className="hidden md:flex items-center gap-7 text-[15px]">
            <Link
              href="#work"
              className="text-[#6B6B66] hover:text-[#0A0A0A] transition-colors duration-150"
            >
              Work
            </Link>
            <Link
              href="#services"
              className="text-[#6B6B66] hover:text-[#0A0A0A] transition-colors duration-150"
            >
              Services
            </Link>
            <button
              onClick={onOpenContact}
              className="text-[#6B6B66] hover:text-[#0A0A0A] transition-colors duration-150 cursor-pointer"
            >
              Contact
            </button>
          </nav>

          {/* Solid Black Contact Button with Up-Right Arrow Icon */}
          <button
            onClick={onOpenContact}
            className="btn-solid !h-[44px] !px-5 text-[14px]"
            aria-label="Contact Form and Function"
          >
            <span>Contact</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </header>
  );
}
