"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

interface HeroProps {
  onOpenContact?: () => void;
}

export default function Hero({ onOpenContact }: HeroProps) {
  return (
    <section className="relative pt-[120px] pb-[96px] sm:pb-[120px] overflow-hidden bg-white border-b border-[#E4E4DF]">
      {/* Background Image: soft daylight on plaster wall with window shadow */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
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
        {/* Sub-label */}
        <div className="text-[#6B6B66] text-[13px] uppercase tracking-wider font-medium mb-8">
          FORM &amp; FUNCTION // Digital Design &amp; Development Studio
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          {/* Left: Description */}
          <div className="lg:col-span-7">
            <p className="text-[20px] sm:text-[24px] leading-[1.35] text-[#0A0A0A] font-normal max-w-[34ch]">
              We combine creativity, design and technology to build meaningful digital experiences for modern businesses.
            </p>
          </div>

          {/* Right: Two Action Buttons */}
          <div className="lg:col-span-5 flex flex-col sm:flex-row items-stretch sm:items-center lg:justify-end gap-3 pt-2">
            <Link href="#work" className="btn-solid">
              <span>Explore Our Work</span>
              <ArrowDownRight className="w-4 h-4" />
            </Link>

            <button
              type="button"
              onClick={onOpenContact}
              className="btn-outlined cursor-pointer"
            >
              <span>Let&apos;s Talk</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
