"use client";

import React, { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { TESTIMONIALS } from "@/data/content";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section className="py-24 sm:py-32 bg-white border-b border-[#E5E5E5]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-16 pb-6 border-b border-[#E5E5E5]">
          <div className="label-meta">
            06 // Testimonials
          </div>

          {/* Slider Controls */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Previous testimonial"
              className="p-2 border border-[#E5E5E5] text-[#111111] hover:bg-[#F7F7F5] rounded-[2px] transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
            </button>
            <span className="text-[12px] font-mono text-[#666666] px-2">
              0{currentIndex + 1} / 0{TESTIMONIALS.length}
            </span>
            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next testimonial"
              className="p-2 border border-[#E5E5E5] text-[#111111] hover:bg-[#F7F7F5] rounded-[2px] transition-colors cursor-pointer"
            >
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Testimonial Slide */}
        <div
          role="region"
          aria-live="polite"
          aria-label="Customer testimonial slider"
          className="border border-[#E5E5E5] bg-[#F7F7F5] p-8 sm:p-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Portrait Photograph Space */}
            <div className="lg:col-span-4">
              <div
                className="relative aspect-[4/5] w-full max-w-[240px] bg-white border border-dashed border-[#E5E5E5] flex items-center justify-center text-center p-6"
                style={{ position: "relative" }}
              >
                <span className="text-[12px] text-[#666666]">
                  [PLACEHOLDER: Portrait photograph]
                </span>
              </div>
            </div>

            {/* Testimonial Quote & Metadata */}
            <div className="lg:col-span-8 space-y-6">
              <blockquote className="text-[clamp(1.2rem,1.8vw,1.5rem)] font-normal text-[#111111] leading-relaxed">
                &ldquo;{current.quote}&rdquo;
              </blockquote>

              <div className="pt-6 border-t border-[#E5E5E5] space-y-0.5">
                <div className="font-medium text-[15px] text-[#111111]">
                  {current.author}
                </div>
                <div className="text-[12px] text-[#666666]">
                  {current.role} • {current.company}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
