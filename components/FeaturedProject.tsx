"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface FeaturedProjectProps {
  onSelectProject?: () => void;
}

const GALLERY_VIEWS = [
  {
    id: "overview",
    label: "01 Atelier View",
    src: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1600&q=80",
    alt: "Tailored garments on minimalist wooden rail in natural atelier lighting",
  },
  {
    id: "macro",
    label: "02 Textile Macro",
    src: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1600&q=80",
    alt: "Macro architectural garment fabric texture and weave detail",
  },
  {
    id: "system",
    label: "03 Digital System",
    src: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1600&q=80",
    alt: "Swiss minimal typography and layout grid system",
  },
];

const DELIVERABLES = [
  "Bespoke Art Direction",
  "Headless Commerce",
  "Design Systems",
  "Sub-second Micro-interactions",
];

export default function FeaturedProject({ onSelectProject }: FeaturedProjectProps) {
  const [activeView, setActiveView] = useState(0);

  return (
    <section id="work" className="py-[120px] bg-white border-t border-[#E4E4DF]">
      <div className="max-w-[1320px] mx-auto px-6">
        {/* Section Lead & Index Tag */}
        <div className="flex items-center justify-between text-[13px] uppercase tracking-wider text-[#6B6B66] font-medium mb-8">
          <span>01 // Selected Work</span>
          <span>Archive Ref. 01 — 2026</span>
        </div>

        {/* Wide Bordered Block Split 1.6fr / 1fr */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] border border-[#E4E4DF] bg-white">
          {/* Left: Edge to edge photograph with interactive view controls */}
          <div className="relative min-h-[420px] sm:min-h-[520px] lg:min-h-[640px] w-full overflow-hidden bg-[#F5F5F2] flex flex-col justify-between">
            <div className="absolute inset-0 z-0">
              <Image
                src={GALLERY_VIEWS[activeView].src}
                alt={GALLERY_VIEWS[activeView].alt}
                fill
                loading="lazy"
                sizes="(max-width: 1024px) 100vw, 62vw"
                className="object-cover object-center saturate-[0.85] transition-all duration-500"
              />
            </div>

            {/* Interactive perspective pills on top of image */}
            <div className="relative z-10 p-5 flex flex-wrap gap-2">
              {GALLERY_VIEWS.map((view, idx) => (
                <button
                  key={view.id}
                  onClick={() => setActiveView(idx)}
                  className={`px-3 py-1.5 text-[11px] font-semibold tracking-wider uppercase border transition-all cursor-pointer ${
                    activeView === idx
                      ? "bg-[#0A0A0A] text-white border-[#0A0A0A]"
                      : "bg-white/90 text-[#0A0A0A] border-[#E4E4DF] hover:bg-white"
                  }`}
                >
                  {view.label}
                </button>
              ))}
            </div>

            {/* Visual Indicator Pill at bottom left */}
            <div className="relative z-10 p-5">
              <span className="inline-block px-3 py-1 bg-white/95 text-[11px] font-medium uppercase tracking-wider text-[#0A0A0A] border border-[#E4E4DF]">
                Swiss Horology &amp; Atelier Fashion
              </span>
            </div>
          </div>

          {/* Right: Soft Panel #F5F5F2 */}
          <div className="bg-[#F5F5F2] p-8 sm:p-12 lg:p-14 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-[#E4E4DF]">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-[12px] uppercase tracking-[0.08em] font-medium text-[#6B6B66]">
                  Featured Archive
                </span>
                <span className="text-[11px] font-mono text-[#0A0A0A] bg-white border border-[#E4E4DF] px-2 py-0.5">
                  COMMISSION 01
                </span>
              </div>

              <h2 className="row-title text-[#0A0A0A]">
                Vahlen Atelier — Luxury goods digital flagship
              </h2>

              <p className="text-[16px] sm:text-[17px] text-[#6B6B66] leading-relaxed font-normal">
                An editorial e-commerce exploration combining restrained typography, macro textile photography, and frictionless micro-interactions.
              </p>

              {/* Curated Disciplines Tags */}
              <div className="space-y-2 pt-2">
                <span className="text-[11px] uppercase tracking-wider text-[#6B6B66] font-medium block">
                  Delivered Disciplines:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {DELIVERABLES.map((item) => (
                    <span
                      key={item}
                      className="px-2.5 py-1 text-[12px] bg-white text-[#0A0A0A] border border-[#E4E4DF]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={onSelectProject}
                  className="btn-outlined cursor-pointer"
                >
                  <span>View project</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Bottom Metadata Below Hairline */}
            <div className="pt-8 mt-12 border-t border-[#E4E4DF] flex items-center justify-between text-[13px] text-[#6B6B66]">
              <span>Scope: Strategy • UI/UX • Web</span>
              <span className="font-medium text-[#0A0A0A]">Ref. 01</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
