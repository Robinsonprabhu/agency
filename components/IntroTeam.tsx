"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function IntroTeam() {
  return (
    <section id="team" className="py-24 sm:py-32 bg-[#F7F7F5] border-b border-[#E5E5E5]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Intro Tag */}
        <div className="text-xs font-mono uppercase tracking-wider text-[#666666] mb-8">
          03 // Introduction &amp; Team
        </div>

        {/* Two-Column Editorial Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <h2 className="font-serif text-4xl sm:text-6xl font-normal leading-[1.08] tracking-[-0.02em] text-[#111111]">
              Good design isn&apos;t decoration.{" "}
              <span className="italic font-normal">It&apos;s direction</span>.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 space-y-6"
          >
            <p className="text-[16px] text-[#666666] leading-relaxed font-normal">
              FORM &amp; FUNCTION brings together strategic thinking, thoughtful design and modern engineering to create digital experiences with purpose.
            </p>

            <div>
              <Link
                href="#team"
                className="inline-flex items-center gap-2 text-sm font-medium bg-[#111111] text-white hover:bg-[#333333] px-6 py-3.5 rounded-[2px] transition-colors"
              >
                <span>Our team</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Team Photographs Composition & Square Fact Graphics */}
        <div className="space-y-12">
          {/* Space for three team photographs with [PLACEHOLDER] */}
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-[#666666] mb-4">
              Team Profiles
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((num) => (
                <div
                  key={num}
                  className="bg-white border border-[#E5E5E5] p-6 flex flex-col justify-between"
                >
                  <div
                    className="relative aspect-[4/5] w-full bg-[#F7F7F5] border border-dashed border-[#E5E5E5] flex items-center justify-center text-center p-6 mb-4"
                    style={{ position: "relative" }}
                  >
                    <span className="text-xs font-mono text-[#666666]">
                      [PLACEHOLDER: Team photograph 0{num}]
                    </span>
                  </div>

                  <div className="space-y-1 pt-2 border-t border-[#E5E5E5]">
                    <div className="text-sm font-medium text-[#111111]">
                      [PLACEHOLDER: Name]
                    </div>
                    <div className="text-xs font-mono text-[#666666]">
                      [PLACEHOLDER: Discipline / Role]
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Space for three square fact graphics with [PLACEHOLDER] */}
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-[#666666] mb-4">
              Studio Fact Graphics
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[1, 2, 3].map((num) => (
                <div
                  key={num}
                  className="bg-white border border-[#E5E5E5] aspect-square p-8 flex flex-col justify-between"
                >
                  <span className="font-mono text-xs text-[#666666]">
                    0{num} // Fact Graphic
                  </span>
                  <div className="text-center font-mono text-xs text-[#666666] py-4">
                    [PLACEHOLDER: Fact graphic 0{num}]
                  </div>
                  <span className="text-[11px] font-mono text-[#999999] uppercase tracking-wider">
                    Studio Metric Placeholder
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
