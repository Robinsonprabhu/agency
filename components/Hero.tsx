"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

interface HeroProps {
  onOpenContact?: () => void;
}

const METRICS = [
  { label: "Studio Practice", value: "Est. 2019", detail: "Zürich & London" },
  { label: "Recognition", value: "34 Accolades", detail: "Awwwards, FWA, D&AD" },
  { label: "Engineering", value: "99.8% Speed", detail: "Sub-second Page Loads" },
  { label: "Philosophy", value: "Zero Templates", detail: "Bespoke Architectures" },
];

export default function Hero({ onOpenContact }: HeroProps) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const offset = Math.min(20, window.scrollY * 0.05);
      setScrollY(offset);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative pt-[112px] sm:pt-[130px] pb-[88px] sm:pb-[110px] overflow-hidden bg-white">
      {/* Background Image: soft daylight on plaster wall with window shadow */}
      <div
        className="absolute inset-0 pointer-events-none z-0 overflow-hidden"
        style={{
          transform: `translate3d(0, ${scrollY}px, 0)`,
          willChange: "transform",
        }}
      >
        <Image
          src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=2000&q=80"
          alt="Architectural plaster wall with soft daylight and window shadows"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center contrast-[1.08] saturate-[0.9]"
        />
        <div className="absolute inset-0 bg-white/60" />
      </div>

      <div className="relative z-10 max-w-[1320px] mx-auto px-6">
        {/* Top Tag & Studio Dispatch */}
        <div className="flex items-center justify-between text-[#6B6B66] text-[13px] uppercase tracking-wider font-medium mb-8">
          <span>Creative Studio // Independent Digital Architecture</span>
          <span className="hidden sm:inline-block">Vol. IV // Edition 2026</span>
        </div>

        {/* Huge 3-line Uppercase Headline with Clipped Mask Slide-Up Animation */}
        <h1 className="headline-huge text-[#0A0A0A]">
          <span className="headline-mask">
            <span className="inline-block animate-line-1">
              DIGITAL EXPERIENCES,
            </span>
          </span>
          <span className="headline-mask">
            <span className="inline-block animate-line-2">
              MADE WITH
            </span>
          </span>
          <span className="headline-mask">
            <span className="inline-block animate-line-3">
              PURPOSE.
            </span>
          </span>
        </h1>

        {/* 1px Black Rule */}
        <div className="w-full border-b border-[#0A0A0A] mt-10 mb-12 sm:mt-14 sm:mb-14" />

        {/* Two Columns Under the Rule */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start mb-16 sm:mb-20">
          {/* Left Column: 26px paragraph, max 30 characters wide */}
          <div className="lg:col-span-7">
            <p className="text-[22px] sm:text-[26px] leading-[1.3] text-[#0A0A0A] font-normal max-w-[30ch]">
              We combine strategy, design and technology to create meaningful digital experiences for ambitious brands.
            </p>
          </div>

          {/* Right Column: Two buttons side by side (stack on mobile) */}
          <div className="lg:col-span-5 flex flex-col sm:flex-row items-stretch sm:items-center lg:justify-end gap-3 pt-2">
            <Link href="#work" className="btn-solid">
              <span>Explore our work</span>
              <ArrowDownRight className="w-4 h-4" />
            </Link>

            <button
              onClick={onOpenContact}
              className="btn-outlined cursor-pointer"
            >
              <span>Contact</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Architectural Studio Metrics Ledger */}
        <div className="border-t border-[#E4E4DF] pt-8 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {METRICS.map((metric, idx) => (
            <div key={metric.label} className="space-y-1">
              <span className="text-[11px] uppercase tracking-wider text-[#6B6B66] block">
                [ 0{idx + 1} ] {metric.label}
              </span>
              <div className="font-heading text-[22px] sm:text-[26px] font-bold text-[#0A0A0A] uppercase leading-tight">
                {metric.value}
              </div>
              <span className="text-[13px] text-[#6B6B66] block">
                {metric.detail}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
