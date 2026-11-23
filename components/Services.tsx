"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SERVICES } from "@/data/content";

export default function Services() {
  return (
    <section id="services" className="py-24 sm:py-32 bg-[#F7F7F5] border-b border-[#E5E5E5]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20 pb-8 border-b border-[#E5E5E5]">
          <div>
            <div className="label-meta mb-3">
              05 // Services
            </div>
            <h2 className="section-heading text-[#111111]">
              What we do.
            </h2>
            <p className="mt-3 text-[16px] text-[#666666] max-w-xl font-normal leading-relaxed">
              We turn ideas into useful digital experiences through strategy, design and development.
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <Link
              href="#services"
              className="inline-flex items-center gap-1.5 text-[14px] font-medium text-[#111111] hover:text-[#666666] border-b border-[#111111] pb-0.5 transition-colors"
            >
              <span>Our services</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Six Service Tiles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#E5E5E5] border border-[#E5E5E5]">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-white p-8 sm:p-10 flex flex-col justify-between hover:bg-[#F7F7F5] transition-colors duration-150 group"
            >
              <div>
                <span className="text-[12px] text-[#666666] block mb-3 font-mono">
                  {service.number} //
                </span>
                <h3 className="card-heading text-[#111111] mb-2.5">
                  {service.title}
                </h3>
                <p className="text-[15px] text-[#666666] leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="pt-6 mt-8 border-t border-[#E5E5E5]">
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[#111111] hover:text-[#666666] transition-colors"
                >
                  <span>{service.linkText}</span>
                  <ArrowUpRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
