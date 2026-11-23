"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowDownRight, ArrowUpRight, Globe2 } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#101B2C] border-b border-[#18263A]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Editorial Indicator Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#18263A] pb-4 mb-12 text-xs font-mono tracking-wider text-[#A6AFBB]">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#FF642E] animate-pulse" />
            <span className="text-[#F4F1EA] font-semibold">FORM &amp; FUNCTION</span>
            <span className="text-white/20">/</span>
            <span>STRATEGY • DESIGN • TECHNOLOGY</span>
          </div>

          <div className="hidden sm:flex items-center gap-6 text-[11px]">
            <span className="flex items-center gap-1.5">
              <Globe2 className="w-3.5 h-3.5 text-[#FF642E]" />
              ZÜRICH • LONDON • TOKYO
            </span>
            <span className="text-white/20">•</span>
            <span>OPEN FOR SELECT COMMISSIONS</span>
          </div>
        </div>

        {/* Bold Asymmetric Layout: Oversized Editorial Headline & Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-end mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-8"
          >
            <span className="text-xs font-mono uppercase tracking-widest text-[#FF642E] block mb-4">
              [ 01 // INTERNATIONAL DIGITAL STUDIO ]
            </span>
            <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-[5rem] xl:text-[5.5rem] font-bold tracking-tight text-[#F4F1EA] uppercase leading-[0.98] text-balance">
              We build digital experiences that move{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4F1EA] via-[#F4F1EA] to-[#A6AFBB]">
                businesses
              </span>{" "}
              forward<span className="text-[#FF642E]">.</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 flex flex-col justify-end space-y-8"
          >
            <p className="text-base sm:text-lg text-[#A6AFBB] leading-relaxed font-normal">
              We combine strategy, design and technology to create meaningful digital experiences for
              ambitious brands.
            </p>

            {/* Two Action CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2.5 text-xs uppercase tracking-wider font-semibold font-display bg-[#FF642E] text-[#101B2C] hover:bg-[#ff7b4d] px-6 py-4 transition-all duration-200 shadow-md group"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>

              <Link
                href="#work"
                className="inline-flex items-center justify-center gap-2.5 text-xs uppercase tracking-wider font-semibold font-display bg-[#18263A] text-[#F4F1EA] border border-white/10 hover:border-[#FF642E] hover:text-[#FF642E] px-6 py-4 transition-all duration-200 group"
              >
                <span>Explore Our Work</span>
                <ArrowDownRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Distinctive Asymmetric Visual Canvas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative grid grid-cols-1 lg:grid-cols-12 gap-px bg-[#18263A] border border-[#18263A]"
        >
          {/* Main Visual Image (Vahlen Atelier Highlight) */}
          <div
            className="lg:col-span-8 relative aspect-[16/9] md:aspect-[21/10] overflow-hidden group bg-[#101B2C]"
            style={{ position: "relative" }}
          >
            <Image
              src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1600&q=80"
              alt="Vahlen Atelier Minimalist Architectural Visual"
              fill
              priority
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 66vw"
            />
            {/* Subtle atmospheric gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#101B2C]/90 via-[#101B2C]/20 to-transparent" />

            {/* Bottom-left project metadata badge */}
            <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-end justify-between gap-4">
              <div className="bg-[#101B2C]/90 backdrop-blur-md border border-white/10 px-4 py-3">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#FF642E] block">
                  FEATURED WORKROOM ARCHIVE
                </span>
                <span className="font-display font-medium text-sm sm:text-base text-[#F4F1EA]">
                  Vahlen Atelier — Luxury Goods Digital Flagship
                </span>
              </div>
              <span className="hidden sm:inline-block font-mono text-xs text-[#A6AFBB] bg-[#101B2C]/80 px-3 py-1.5 border border-white/10">
                CASE FF-01/26
              </span>
            </div>
          </div>

          {/* Asymmetric Side Panel with Agency Convictions */}
          <div className="lg:col-span-4 p-8 sm:p-10 flex flex-col justify-between bg-[#18263A]">
            <div className="space-y-5">
              <div className="text-xs font-mono uppercase tracking-widest text-[#FF642E]">
                CORE DISCIPLINE
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-light text-[#F4F1EA] tracking-tight leading-snug">
                Precision engineering meets editorial distinction.
              </h3>
              <p className="text-sm text-[#A6AFBB] leading-relaxed">
                We believe digital products shouldn&apos;t just look contemporary today—they must remain
                structurally resilient, performant, and commercially impactful for years to come.
              </p>
            </div>

            <div className="pt-8 border-t border-white/10 mt-8 space-y-3 font-mono text-xs">
              <div className="flex justify-between text-[#A6AFBB]">
                <span>ARCHITECTURE:</span>
                <span className="text-[#F4F1EA]">Headless / Next.js</span>
              </div>
              <div className="flex justify-between text-[#A6AFBB]">
                <span>PHILOSOPHY:</span>
                <span className="text-[#F4F1EA]">Purposeful Restraint</span>
              </div>
              <div className="flex justify-between text-[#A6AFBB]">
                <span>COLLABORATION:</span>
                <span className="text-[#FF642E]">Direct Partner Access</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
