"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="bg-white pt-16 pb-20 sm:pt-24 sm:pb-28 border-b border-[#E5E5E5]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Subtle Brand Tagline */}
        <div className="meta-label mb-8">
          FORM &amp; FUNCTION // Creative Studio
        </div>

        {/* Large Left-Aligned Headline & Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-end mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-8"
          >
            <h1 className="hero-heading text-[#111111]">
              Digital experiences, made with purpose.
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 flex flex-col justify-end space-y-6"
          >
            <p className="text-[16px] text-[#666666] leading-relaxed font-normal max-w-md">
              We combine strategy, design and technology to create meaningful digital experiences for ambitious brands.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <Link
                href="#work"
                className="inline-flex items-center justify-center gap-2 text-[14px] font-medium bg-[#111111] text-white hover:bg-[#333333] px-6 py-3.5 rounded-[2px] transition-colors group"
              >
                <span>Explore Our Work</span>
                <ArrowDownRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
              </Link>

              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2 text-[14px] font-medium bg-white text-[#111111] border border-[#111111] hover:bg-[#F7F7F5] px-6 py-3.5 rounded-[2px] transition-colors"
              >
                <span>Contact</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Asymmetric Visual Composition */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
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
                <span className="meta-label block">
                  Featured Archive
                </span>
                <h2 className="project-heading text-[#111111]">
                  Vahlen Atelier — Luxury Goods Digital Flagship
                </h2>
                <p className="text-[15px] text-[#666666] leading-relaxed font-normal">
                  An editorial e-commerce exploration combining restrained typography, macro textile photography, and frictionless micro-interactions.
                </p>
              </div>

              <div className="pt-6 mt-8 border-t border-[#E5E5E5] flex items-center justify-between text-[12px] text-[#666666]">
                <span>Scope: Strategy • UI/UX • Web</span>
                <span>Ref. 01</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
