"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="bg-white pt-16 pb-20 sm:pt-24 sm:pb-28 border-b border-[#E5E5E5]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Editorial Headline & Paragraph */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-end mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-8"
          >
            <h1 className="hero-heading text-[#111111]">
              We build digital experiences that move businesses forward.
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 flex flex-col justify-end space-y-6"
          >
            <p className="text-[16px] text-[#666666] leading-relaxed font-normal max-w-md">
              We combine strategy, design and technology to create meaningful digital experiences for ambitious brands.
            </p>

            <div className="pt-1">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2 text-[14px] font-medium bg-[#111111] text-white hover:bg-[#333333] px-6 py-3 rounded-[2px] transition-colors"
              >
                <span>Contact</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Quiet Editorial Composition */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="border border-[#E5E5E5] bg-[#F7F7F5]"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div
              className="lg:col-span-8 relative aspect-[16/9] md:aspect-[21/10] overflow-hidden bg-[#E5E5E5]"
              style={{ position: "relative" }}
            >
              <Image
                src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1600&q=80"
                alt="Selected digital editorial project showcase"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 66vw"
                className="object-cover"
              />
            </div>

            <div className="lg:col-span-4 p-8 sm:p-10 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-[#E5E5E5] bg-[#F7F7F5]">
              <div className="space-y-3">
                <span className="label-meta block">
                  Studio Focus
                </span>
                <h2 className="sub-heading text-[#111111]">
                  Intentional digital design &amp; engineering
                </h2>
                <p className="text-[15px] text-[#666666] leading-relaxed font-normal">
                  We shape websites, applications, and visual identities with structural discipline, high typographic fidelity, and enduring performance.
                </p>
              </div>

              <div className="pt-6 mt-8 border-t border-[#E5E5E5] flex items-center justify-between text-[12px] text-[#666666]">
                <span>Strategy • Design • Web</span>
                <span>Ref. 01</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
