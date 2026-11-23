"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { SERVICES } from "@/data/content";

export default function Services() {
  return (
    <section id="services" className="py-24 sm:py-32 bg-white border-b border-[#E5E5E5]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20 pb-8 border-b border-[#E5E5E5]">
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-[#666666] mb-4">
              03 // Capabilities
            </div>
            <h2 className="font-serif text-4xl sm:text-6xl font-normal leading-[1.08] tracking-[-0.02em] text-[#171717]">
              What we bring to the <span className="italic font-normal">table</span>.
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-[15px] text-[#666666] max-w-md leading-relaxed font-normal">
            We partner with organizations to build enduring digital capabilities through unified strategy, design, and engineering teams.
          </p>
        </div>

        {/* Clean Editorial Numbered List (No rounded cards or unnecessary decorative icons) */}
        <div className="divide-y divide-[#E5E5E5] border-y border-[#E5E5E5]">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="group py-10 sm:py-14 hover:bg-[#F7F7F5] transition-colors duration-200 px-4 sm:px-6"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
                {/* Number */}
                <div className="lg:col-span-2 font-mono text-xs text-[#666666] pt-1">
                  {service.number} // 04
                </div>

                {/* Title & Tagline */}
                <div className="lg:col-span-4 space-y-2">
                  <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#171717]">
                    {service.title}
                  </h3>
                  <p className="text-xs font-sans text-[#666666]">
                    {service.tagline}
                  </p>
                </div>

                {/* Description & Deliverables */}
                <div className="lg:col-span-5 space-y-4">
                  <p className="text-[15px] text-[#666666] leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 text-xs text-[#171717]/80">
                    {service.deliverables.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-[#171717]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Inquire Link */}
                <div className="lg:col-span-1 flex lg:justify-end items-center pt-2 lg:pt-0">
                  <Link
                    href="#contact"
                    className="inline-flex items-center gap-1 text-xs font-mono uppercase tracking-wider text-[#666666] group-hover:text-[#171717] transition-colors"
                    aria-label={`Inquire about ${service.title}`}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Simple Commitment Note */}
        <div className="mt-14 p-6 sm:p-8 bg-[#F7F7F5] border border-[#E5E5E5] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1">
            <span className="text-xs font-mono uppercase tracking-wider text-[#666666]">
              Direct Engagement Model
            </span>
            <p className="text-[15px] text-[#171717]">
              Every client works directly with senior studio partners. No account managers, junior handoffs, or agency bureaucracy.
            </p>
          </div>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-medium bg-[#171717] text-white hover:bg-[#333333] px-5 py-2.5 rounded-[2px] transition-colors shrink-0"
          >
            <span>Commission a brief</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
