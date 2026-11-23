"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface ClosingProps {
  onOpenContact?: () => void;
}

export default function Closing({ onOpenContact }: ClosingProps) {
  return (
    <section className="relative py-[120px] bg-[#F5F5F2] border-t border-[#E4E4DF] overflow-hidden">
      {/* Background: Bright architectural photo of a studio interior at 10% opacity */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-10">
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1800&q=80"
          alt="Minimal sunlit design and architecture studio workspace"
          fill
          loading="lazy"
          className="object-cover object-center grayscale contrast-125"
        />
      </div>

      <div className="relative z-10 max-w-[1320px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
          <div className="space-y-4 max-w-3xl">
            <span className="text-[12px] uppercase tracking-[0.08em] font-medium text-[#6B6B66] block">
              Inquiries &amp; Commissions
            </span>
            <h2 className="headline-huge !text-[clamp(52px,8vw,110px)] !leading-[0.9] text-[#0A0A0A]">
              Have a project in mind?
            </h2>
          </div>

          <div className="shrink-0 pt-4 lg:pt-0">
            <button
              onClick={onOpenContact}
              className="btn-solid !h-[56px] !px-8 text-[16px] cursor-pointer"
            >
              <span>Start a conversation</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
