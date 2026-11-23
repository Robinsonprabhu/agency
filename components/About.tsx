"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  const principles = [
    {
      title: "Strategic thinking",
      description:
        "Every design decision originates from business clarity. We clarify market positioning, user intent, and core objectives before designing interfaces.",
    },
    {
      title: "Thoughtful design",
      description:
        "Restraint creates longevity. We develop typographic hierarchies, consistent visual systems, and clear layouts that elevate brands without unnecessary decoration.",
    },
    {
      title: "Modern engineering",
      description:
        "Clean, resilient codebases engineered for speed. Headless React and Next.js platforms optimized for accessibility, maintainability, and rapid load times.",
    },
    {
      title: "Business-focused experiences",
      description:
        "A digital product must create measurable value. We build intuitive journeys and conversion pathways that turn visitors into enduring brand advocates.",
    },
  ];

  return (
    <section id="about" className="py-24 sm:py-32 bg-[#F7F7F5] border-b border-[#E5E5E5]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Intro Label */}
        <div className="text-xs font-mono uppercase tracking-wider text-[#666666] mb-8">
          02 // Studio Philosophy
        </div>

        {/* Asymmetric Two-Column Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start mb-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <h2 className="font-serif text-4xl sm:text-6xl font-normal leading-[1.08] tracking-[-0.02em] text-[#171717]">
              Good design isn&apos;t decoration.{" "}
              <span className="italic font-normal">It&apos;s direction</span>.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 space-y-6 text-[16px] text-[#666666] leading-relaxed font-normal"
          >
            <p>
              In an industry often distracted by superficial trends and template automation, lasting distinction requires deliberate conviction. At FORM &amp; FUNCTION, we strip away excess to reveal the structural foundation of your organization.
            </p>
            <p>
              We operate as senior design and technology partners, collaborating directly with ambitious leadership teams to build digital flagships that perform reliably over years, not months.
            </p>

            <div className="pt-2">
              <Link
                href="#contact"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-[#171717] hover:text-[#666666] border-b border-[#171717] pb-0.5 transition-colors"
              >
                <span>Learn about our collaboration process</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Asymmetric Content Composition: Architectural Photo & Principles Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Architectural Image */}
          <div className="lg:col-span-5 relative" style={{ position: "relative" }}>
            <div
              className="relative aspect-[4/5] w-full overflow-hidden bg-white border border-[#E5E5E5]"
              style={{ position: "relative" }}
            >
              <Image
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
                alt="Studio architectural workspace"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
            <div className="mt-3 text-xs font-mono text-[#666666]">
              Architectural workspace &amp; material research
            </div>
          </div>

          {/* Four Concrete Principles (Clean editorial list, no bubbly cards) */}
          <div className="lg:col-span-7 divide-y divide-[#E5E5E5] border-y border-[#E5E5E5]">
            {principles.map((item, i) => (
              <div key={item.title} className="py-6 sm:py-8 grid grid-cols-1 sm:grid-cols-12 gap-4">
                <div className="sm:col-span-4 font-mono text-xs text-[#666666] pt-1">
                  0{i + 1} //
                </div>
                <div className="sm:col-span-8 space-y-2">
                  <h3 className="text-lg font-medium text-[#171717]">
                    {item.title}
                  </h3>
                  <p className="text-[15px] text-[#666666] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
