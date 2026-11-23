"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface FeaturedProjectProps {
  onSelectProject?: () => void;
}

export default function FeaturedProject({ onSelectProject }: FeaturedProjectProps) {
  return (
    <section id="work" className="py-[120px] bg-white border-t border-[#E4E4DF]">
      <div className="max-w-[1320px] mx-auto px-6">
        {/* Section Lead Indicator */}
        <div className="text-[#6B6B66] text-[15px] font-normal mb-8">
          Selected work
        </div>

        {/* Wide Bordered Block Split 1.6fr / 1fr */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] border border-[#E4E4DF] bg-white">
          {/* Left: Edge to edge photograph of garments on wooden rail in natural light */}
          <div
            className="relative min-h-[380px] sm:min-h-[480px] lg:min-h-[620px] w-full overflow-hidden bg-[#F5F5F2]"
            style={{ position: "relative" }}
          >
            <Image
              src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1600&q=80"
              alt="Editorial presentation of tailored garments on a minimalist wooden rail"
              fill
              loading="lazy"
              sizes="(max-width: 1024px) 100vw, 62vw"
              className="object-cover object-center saturate-[0.85]"
            />
          </div>

          {/* Right: Soft Panel #F5F5F2 */}
          <div className="bg-[#F5F5F2] p-8 sm:p-12 lg:p-14 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-[#E4E4DF]">
            <div className="space-y-6">
              <span className="text-[12px] uppercase tracking-[0.08em] font-medium text-[#6B6B66] block">
                Featured archive
              </span>

              <h2 className="row-title text-[#0A0A0A]">
                Vahlen Atelier — Luxury goods digital flagship
              </h2>

              <p className="text-[16px] sm:text-[17px] text-[#6B6B66] leading-relaxed font-normal">
                An editorial e-commerce exploration combining restrained typography, macro textile photography, and frictionless micro-interactions.
              </p>

              <div className="pt-2">
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

