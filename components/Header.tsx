"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface HeaderProps {
  onOpenContact?: () => void;
}

export default function Header({ onOpenContact }: HeaderProps) {
  const [timeStr, setTimeStr] = useState<string>("12:00 CET");

  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const time = now.toLocaleTimeString("en-GB", {
          timeZone: "Europe/Zurich",
          hour: "2-digit",
          minute: "2-digit",
        });
        setTimeStr(`${time} CET`);
      } catch {
        setTimeStr("12:00 CET");
      }
    };
    updateTime();
    const interval = setInterval(updateTime, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-[#E4E4DF]">
      <div className="max-w-[1320px] mx-auto px-6">
        <div className="h-[76px] grid grid-cols-12 items-center">
          {/* Column 1 (Left): Brand Identity & Studio Specifier */}
          <div className="col-span-7 sm:col-span-5 lg:col-span-4 flex items-center gap-3.5 pr-4">
            <Link href="/" className="group flex items-baseline gap-2.5">
              <span className="font-heading text-[26px] sm:text-[28px] font-bold tracking-tight text-[#0A0A0A] leading-none uppercase">
                FORM &amp; FUNCTION
              </span>
              <span className="text-[11px] uppercase tracking-wider text-[#6B6B66] font-medium hidden sm:inline-block border-l border-[#E4E4DF] pl-2.5">
                EST. 2019
              </span>
            </Link>
          </div>

          {/* Column 2 (Center): Studio Coordinates & Availability Dispatch (Desktop only) */}
          <div className="hidden lg:flex col-span-4 items-center justify-center border-x border-[#E4E4DF] h-full px-6 text-[12px] text-[#6B6B66] tracking-wide">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5 font-medium text-[#0A0A0A]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0A0A0A] animate-pulse" />
                AVAILABLE FOR Q2/Q3
              </span>
              <span className="text-[#E4E4DF]">/</span>
              <span>ZÜRICH {timeStr}</span>
            </div>
          </div>

          {/* Column 3 (Right): Numbered Editorial Index & Tactile Inquire Action */}
          <div className="col-span-5 sm:col-span-7 lg:col-span-4 flex items-center justify-end h-full pl-4">
            {/* Numbered Nav Links */}
            <nav className="hidden sm:flex items-center gap-6 text-[13px] tracking-wider uppercase font-medium mr-6">
              <Link
                href="#work"
                className="group flex items-center gap-1 text-[#6B6B66] hover:text-[#0A0A0A] transition-colors"
              >
                <span className="text-[10px] text-[#6B6B66]/60 group-hover:text-[#0A0A0A]">01</span>
                <span>Work</span>
              </Link>

              <Link
                href="#services"
                className="group flex items-center gap-1 text-[#6B6B66] hover:text-[#0A0A0A] transition-colors"
              >
                <span className="text-[10px] text-[#6B6B66]/60 group-hover:text-[#0A0A0A]">02</span>
                <span>Services</span>
              </Link>
            </nav>

            {/* Inquire Action Button with Inversion */}
            <button
              onClick={onOpenContact}
              className="group relative inline-flex items-center justify-center gap-2 h-[44px] px-5 bg-[#0A0A0A] text-white hover:bg-white hover:text-[#0A0A0A] border border-[#0A0A0A] text-[13px] font-semibold tracking-wider uppercase transition-all duration-200 cursor-pointer"
            >
              <span>Inquire</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
