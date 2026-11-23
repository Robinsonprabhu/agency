"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import { SERVICES } from "@/data/content";

interface ServicesProps {
  onSelectService?: (service: { title: string }) => void;
}

export default function Services({ onSelectService }: ServicesProps) {
  return (
    <section className="py-[120px] bg-white border-b border-[#E4E4DF]" id="services">
      <div className="max-w-[1320px] mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-10 border-b border-[#0A0A0A] mb-14">
          <div className="space-y-3">
            <span className="text-[12px] uppercase tracking-[0.08em] font-medium text-[#6B6B66] block">
              WHAT WE DO
            </span>
            <h2 className="section-title text-[#0A0A0A]">
              Ideas into digital experiences.
            </h2>
          </div>
          <p className="max-w-[34ch] text-[16px] text-[#6B6B66] leading-relaxed">
            From the first idea to the final product, we bring design and technology together to create experiences that work.
          </p>
        </div>

        {/* 4 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              onClick={() => onSelectService?.({ title: service.title })}
              className="group relative flex flex-col justify-between p-8 bg-[#F5F5F2] border border-[#E4E4DF] hover:border-[#0A0A0A] transition-colors duration-300 cursor-pointer min-h-[320px]"
            >
              <div>
                <span className="text-[12px] font-mono text-[#6B6B66] tracking-wider block mb-6">
                  {service.number} //
                </span>
                <h3 className="font-heading text-[26px] sm:text-[28px] font-bold text-[#0A0A0A] uppercase leading-tight mb-4">
                  {service.title}
                </h3>
                <p className="text-[15px] text-[#6B6B66] leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="pt-8 mt-6 border-t border-[#E4E4DF] flex items-center justify-between text-[13px] text-[#0A0A0A] font-medium">
                <span className="group-hover:underline">Commission Discipline</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
