"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Compass, Code2, Layers, Target } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  const pillars = [
    {
      icon: Target,
      title: "Strategic Thinking",
      desc: "Every design decision stems from deep organizational clarity. We challenge assumptions, clarify market positioning, and define tangible digital objectives before creating visual assets.",
    },
    {
      icon: Compass,
      title: "Thoughtful Design",
      desc: "Distinction without clutter. We build cohesive visual languages, meticulous typographic systems, and intuitive user experiences that elevate brands without unnecessary ornamentation.",
    },
    {
      icon: Code2,
      title: "Modern Engineering",
      desc: "Clean, resilient codebases engineered for zero friction. Headless React and Next.js architectures optimized for speed, enterprise security, and long-term maintainability.",
    },
    {
      icon: Layers,
      title: "Business-Focused Digital Experiences",
      desc: "A digital flagship must drive commercial momentum. We design conversion pathways and interactive platforms that turn casual visitors into loyal brand advocates.",
    },
  ];

  return (
    <section id="about" className="py-24 sm:py-32 bg-[#F4F1EA] text-[#18202B] border-b border-[#18202B]/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Index Marker */}
        <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-[#FF642E] mb-6">
          <span className="w-2 h-2 rounded-full bg-[#FF642E]" />
          <span>02 // AGENCY MANIFESTO</span>
        </div>

        {/* Asymmetric Two-Column Header & Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start mb-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#18202B] uppercase leading-[1.05] text-balance">
              Good design isn&apos;t decoration<span className="text-[#FF642E]">.</span>
              <br />
              It&apos;s direction<span className="text-[#FF642E]">.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 space-y-6 text-base sm:text-lg text-[#18202B]/80 font-normal leading-relaxed"
          >
            <p>
              In a digital landscape crowded with disposable templates and algorithmic sameness, true
              authority requires deliberate conviction. At FORM &amp; FUNCTION, we strip away excess to
              reveal the core truth of your business.
            </p>
            <p className="text-sm sm:text-base text-[#18202B]/70">
              We operate as senior design and technology partners, working closely alongside leadership
              teams to craft custom digital experiences that stand the test of time.
            </p>

            <div className="pt-2">
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider font-semibold text-[#18202B] hover:text-[#FF642E] transition-colors border-b-2 border-[#18202B] hover:border-[#FF642E] pb-1"
              >
                <span>Discover our collaboration model</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Asymmetric Visual Composition & Four Core Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Asymmetric Editorial Visual */}
          <div className="lg:col-span-5 relative" style={{ position: "relative" }}>
            <div
              className="relative aspect-[4/5] w-full overflow-hidden bg-[#18202B]/10 border border-[#18202B]/20"
              style={{ position: "relative" }}
            >
              <Image
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
                alt="Architectural studio space demonstrating structural design rigor"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-[#18202B]/10 pointer-events-none" />
            </div>

            <div className="mt-4 flex items-center justify-between text-xs font-mono text-[#18202B]/60">
              <span>STUDIO SPACE &amp; ARCHITECTURAL INSPIRATION</span>
              <span>FIGURE 02.A</span>
            </div>
          </div>

          {/* Right: The Four Disciplines of Form & Function */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {pillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="p-6 bg-white/70 border border-[#18202B]/15 hover:border-[#FF642E] transition-colors flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 flex items-center justify-center bg-[#18202B] text-[#F4F1EA] mb-6">
                      <Icon className="w-5 h-5 text-[#FF642E]" />
                    </div>
                    <span className="font-mono text-xs text-[#FF642E] uppercase tracking-wider block mb-2">
                      PILLAR 0{i + 1}
                    </span>
                    <h3 className="font-display text-xl font-bold text-[#18202B] tracking-tight mb-3">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#18202B]/75 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
