"use client";

import React from "react";
import Link from "next/link";
import { LayoutGrid, Code2, Compass, TrendingUp, ArrowRight } from "lucide-react";
import { SERVICES } from "@/data/content";

const iconMap: Record<string, React.ElementType> = {
  LayoutGrid,
  Code2,
  Compass,
  TrendingUp,
};

export default function Services() {
  return (
    <section id="services" className="py-24 sm:py-32 bg-[#F7F7F5] border-b border-[#E5E5E5]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20 pb-8 border-b border-[#E5E5E5]">
          <div>
            <div className="meta-label mb-3">
              02 // Capabilities
            </div>
            <h2 className="section-heading text-[#111111]">
              Services crafted for distinction.
            </h2>
            <p className="mt-3 text-[16px] text-[#666666] max-w-xl font-normal leading-relaxed">
              We turn bold concepts into useful, resilient digital experiences through strategic clarity, refined design, and modern engineering.
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 text-[14px] font-medium text-[#111111] hover:text-[#666666] border-b border-[#111111] pb-0.5 transition-colors"
            >
              <span>Commission a discipline</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Numbered Editorial List with Polished Hover Transitions */}
        <div className="divide-y divide-[#E5E5E5] border-y border-[#E5E5E5]">
          {SERVICES.map((service) => {
            const Icon = iconMap[service.icon] || LayoutGrid;

            return (
              <div
                key={service.id}
                className="group py-10 sm:py-14 px-4 sm:px-8 bg-transparent hover:bg-white transition-colors duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
                  {/* Number & Icon Detail */}
                  <div className="lg:col-span-2 flex items-center gap-4">
                    <span className="text-[13px] font-mono text-[#666666] pt-0.5">
                      {service.number} //
                    </span>
                    <div className="w-10 h-10 border border-[#E5E5E5] bg-white group-hover:border-[#111111] flex items-center justify-center text-[#111111] transition-colors duration-300">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Title */}
                  <div className="lg:col-span-4">
                    <h3 className="service-heading text-[#111111] transition-transform duration-300 group-hover:translate-x-1.5">
                      {service.title}
                    </h3>
                  </div>

                  {/* Description & Deliverables */}
                  <div className="lg:col-span-5 space-y-4">
                    <p className="text-[15px] text-[#666666] leading-relaxed">
                      {service.description}
                    </p>

                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 text-[13px] text-[#111111]/80">
                      {service.deliverables.map((item) => (
                        <li key={item} className="flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-[#111111]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Arrow Interaction */}
                  <div className="lg:col-span-1 flex lg:justify-end items-center pt-2 lg:pt-0">
                    <div className="text-[#111111] transition-transform duration-300 group-hover:translate-x-2">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
