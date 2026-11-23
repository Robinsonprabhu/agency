"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Check } from "lucide-react";

interface ClosingProps {
  onOpenContact?: (presetTopic?: string) => void;
}

const DISCIPLINES = [
  "Complete Digital Flagship",
  "Brand Identity & Art Direction",
  "Next.js Architecture & Performance",
  "Design Systems & Token Libraries",
];

export default function Closing({ onOpenContact }: ClosingProps) {
  const [selectedDiscipline, setSelectedDiscipline] = useState<string>(DISCIPLINES[0]);

  return (
    <section className="relative py-[120px] bg-[#F5F5F2] border-t border-[#E4E4DF] overflow-hidden">
      {/* Background: Bright architectural photo of a studio interior */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-[0.22]">
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1800&q=80"
          alt="Minimal sunlit design and architecture studio workspace"
          fill
          loading="lazy"
          className="object-cover object-center grayscale contrast-125"
        />
      </div>

      <div className="relative z-10 max-w-[1320px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12">
          <div className="space-y-6 max-w-3xl">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#0A0A0A]" />
              <span className="text-[12px] uppercase tracking-[0.08em] font-medium text-[#6B6B66] block">
                Initiate Project // Q2 &amp; Q3 Commissions
              </span>
            </div>

            <h2 className="headline-huge !text-[clamp(52px,8vw,110px)] !leading-[0.9] text-[#0A0A0A]">
              Have a project in mind?
            </h2>

            {/* Interactive Scope Preset Selector */}
            <div className="space-y-3 pt-4">
              <span className="text-[12px] uppercase tracking-wider text-[#6B6B66] block font-medium">
                Select your primary discipline requirement:
              </span>
              <div className="flex flex-wrap gap-2">
                {DISCIPLINES.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setSelectedDiscipline(item)}
                    className={`inline-flex items-center gap-2 px-3.5 py-2 text-[13px] font-medium border transition-all cursor-pointer ${
                      selectedDiscipline === item
                        ? "bg-[#0A0A0A] text-white border-[#0A0A0A]"
                        : "bg-white text-[#0A0A0A] border-[#E4E4DF] hover:border-[#0A0A0A]"
                    }`}
                  >
                    {selectedDiscipline === item && <Check className="w-3.5 h-3.5" />}
                    <span>{item}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="shrink-0 pt-4 lg:pt-0">
            <button
              onClick={() => onOpenContact?.(selectedDiscipline)}
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
