"use client";

import React, { useState } from "react";
import Link from "next/link";
import { LayoutGrid, Code2, Compass, TrendingUp, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { SERVICES } from "@/data/content";

const iconMap: Record<string, React.ElementType> = {
  LayoutGrid,
  Code2,
  Compass,
  TrendingUp,
};

export default function Services() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section id="services" className="py-24 sm:py-32 bg-[#101B2C] border-b border-[#18263A]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20 pb-8 border-b border-[#18263A]">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-[#FF642E] mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FF642E]" />
              03 // CAPABILITIES &amp; PRACTICES
            </div>
            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F4F1EA] uppercase">
              What we bring to the table<span className="text-[#FF642E]">.</span>
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm sm:text-base text-[#A6AFBB] max-w-md leading-relaxed">
            We partner with organizations to build enduring digital capabilities through unified
            strategy, design, and engineering teams.
          </p>
        </div>

        {/* Structured Editorial List Layout (Alternative to generic cards) */}
        <div className="divide-y divide-[#18263A] border-y border-[#18263A]">
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.icon] || LayoutGrid;
            const isHovered = hoveredIdx === index;

            return (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                onMouseEnter={() => setHoveredIdx(index)}
                onMouseLeave={() => setHoveredIdx(null)}
                className={`group py-10 sm:py-14 transition-all duration-300 ${
                  isHovered ? "bg-[#18263A]/40 px-6 sm:px-8" : "bg-transparent px-2 sm:px-4"
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
                  {/* Number & Icon */}
                  <div className="lg:col-span-2 flex items-center gap-4">
                    <span className="font-mono text-lg text-[#FF642E] font-medium">
                      {service.number}
                    </span>
                    <div className="w-10 h-10 rounded-none bg-[#18263A] border border-white/10 flex items-center justify-center text-[#F4F1EA] group-hover:border-[#FF642E] group-hover:text-[#FF642E] transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <div className="lg:col-span-4 space-y-2">
                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#F4F1EA] tracking-tight group-hover:text-[#FF642E] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs font-mono uppercase tracking-wider text-[#A6AFBB]">
                      {service.tagline}
                    </p>
                  </div>

                  {/* Description & Deliverables */}
                  <div className="lg:col-span-5 space-y-4">
                    <p className="text-sm sm:text-base text-[#A6AFBB] leading-relaxed">
                      {service.description}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {service.deliverables.map((item) => (
                        <span
                          key={item}
                          className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#18263A] text-xs font-mono text-[#F4F1EA]/80 border border-white/5"
                        >
                          <CheckCircle2 className="w-3 h-3 text-[#FF642E]" />
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Link */}
                  <div className="lg:col-span-1 flex lg:justify-end items-center pt-2 lg:pt-0">
                    <Link
                      href="#contact"
                      className="inline-flex items-center gap-1 text-xs font-mono uppercase tracking-wider text-[#A6AFBB] group-hover:text-[#FF642E] transition-colors"
                      aria-label={`Inquire about ${service.title}`}
                    >
                      <ArrowUpRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Engagement Philosophy Callout */}
        <div className="mt-16 p-8 bg-[#18263A] border border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1">
            <span className="text-xs font-mono uppercase tracking-widest text-[#FF642E]">
              ENGAGEMENT COMMITMENT
            </span>
            <p className="text-sm sm:text-base text-[#F4F1EA] font-normal">
              Direct access to senior partners. No intermediary layers, account managers, or junior handoffs.
            </p>
          </div>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 text-xs font-display uppercase tracking-wider font-semibold bg-[#FF642E] text-[#101B2C] hover:bg-[#ff7b4d] px-6 py-3 transition-colors shrink-0"
          >
            <span>Commission a brief</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
