"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface ServiceItem {
  id: string;
  title: string;
  description: string;
}

const SERVICES: ServiceItem[] = [
  {
    id: "strategy",
    title: "Strategy",
    description: "Brand positioning, digital architectures, and market discovery for ambitious companies.",
  },
  {
    id: "ui-ux",
    title: "UI / UX design",
    description: "Art direction, cohesive design systems, and tactile human-centered user experiences.",
  },
  {
    id: "web-dev",
    title: "Web development",
    description: "Performant frontend engineering, headless CMS integrations, and resilient bespoke code.",
  },
];

interface ServicesProps {
  onSelectService?: (service: ServiceItem) => void;
}

export default function Services({ onSelectService }: ServicesProps) {
  return (
    <section id="services" className="relative py-[120px] bg-white border-t border-[#E4E4DF] overflow-hidden">
      {/* Background Texture: Light fixed background texture, shown on the right half */}
      <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full pointer-events-none z-0 opacity-[0.18]">
        <Image
          src="https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=1200&q=80"
          alt="Subtle natural linen texture background"
          fill
          loading="lazy"
          className="object-cover object-right"
        />
      </div>

      <div className="relative z-10 max-w-[1320px] mx-auto px-6">
        {/* Heading "What we do" with a short gray line on the right */}
        <div className="flex items-center gap-8 mb-14 sm:mb-16">
          <h2 className="section-title text-[#0A0A0A] shrink-0">
            What we do
          </h2>
          <div className="flex-grow h-[1px] bg-[#E4E4DF]" />
        </div>

        {/* 3 Full-Width Rows Under a 1px Black Top Rule */}
        <div className="border-t border-[#0A0A0A] divide-y divide-[#E4E4DF]">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              onClick={() => onSelectService?.(service)}
              className="group relative cursor-pointer py-10 sm:py-14 px-6 -mx-6 sm:px-8 sm:-mx-8 border-b border-[#E4E4DF] transition-all duration-300 hover:translate-x-[20px] hover:bg-[#F5F5F2]"
            >
              <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 md:gap-8">
                {/* Big Condensed Uppercase Title */}
                <h3 className="row-title text-[#0A0A0A] md:w-1/3">
                  {service.title}
                </h3>

                {/* Gray One-Line Description */}
                <p className="text-[16px] sm:text-[17px] text-[#6B6B66] font-normal leading-relaxed md:w-1/2">
                  {service.description}
                </p>

                {/* Arrow on the Right */}
                <div className="flex justify-end items-center md:w-1/12 pt-2 md:pt-0">
                  <ArrowRight className="w-5 h-5 text-[#0A0A0A] transition-transform duration-300 group-hover:translate-x-2" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
