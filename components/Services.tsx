"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, Plus, Minus } from "lucide-react";

interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  deliverables: string[];
  timeline: string;
}

const SERVICES: ServiceItem[] = [
  {
    id: "strategy",
    number: "01",
    title: "Strategy",
    description: "Brand positioning, digital architectures, and market discovery for ambitious companies.",
    deliverables: [
      "Competitive Landscape & Market Positioning",
      "Brand Narrative & Editorial Tonality",
      "Information Architecture & User Journeys",
      "Technical Feasibility & Stack Selection",
    ],
    timeline: "2–4 Weeks",
  },
  {
    id: "ui-ux",
    number: "02",
    title: "UI / UX design",
    description: "Art direction, cohesive design systems, and tactile human-centered user experiences.",
    deliverables: [
      "Art Direction & Visual Language",
      "Component Design Systems & Tokens",
      "High-Fidelity Interactive Prototypes",
      "Tactile Micro-interactions & Motion Spec",
    ],
    timeline: "4–6 Weeks",
  },
  {
    id: "web-dev",
    number: "03",
    title: "Web development",
    description: "Performant frontend engineering, headless CMS integrations, and resilient bespoke code.",
    deliverables: [
      "Next.js 16 App Router & React 19 Architecture",
      "Headless CMS Integrations (Sanity, Strapi)",
      "Zero-Lag Page Transitions & Dynamic Caching",
      "SEO, Core Web Vitals & Accessibility (AA)",
    ],
    timeline: "4–8 Weeks",
  },
];

interface ServicesProps {
  onSelectService?: (service: ServiceItem) => void;
}

export default function Services({ onSelectService }: ServicesProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setExpandedId(expandedId === id ? null : id);
  };

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
          <span className="text-[12px] uppercase tracking-wider text-[#6B6B66] font-medium hidden sm:inline-block">
            Disciplines &amp; Practices
          </span>
        </div>

        {/* 3 Full-Width Rows Under a 1px Black Top Rule */}
        <div className="border-t border-[#0A0A0A] divide-y divide-[#E4E4DF]">
          {SERVICES.map((service) => {
            const isExpanded = expandedId === service.id;

            return (
              <div
                key={service.id}
                onClick={() => onSelectService?.(service)}
                className="group relative cursor-pointer py-10 sm:py-14 px-6 -mx-6 sm:px-8 sm:-mx-8 border-b border-[#E4E4DF] transition-all duration-300 hover:translate-x-[20px] hover:bg-[#F5F5F2]"
              >
                <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 md:gap-8">
                  {/* Number & Big Condensed Uppercase Title */}
                  <div className="md:w-5/12 flex items-baseline gap-4">
                    <span className="text-[12px] font-mono text-[#6B6B66] tracking-wider">
                      {service.number} //
                    </span>
                    <h3 className="row-title text-[#0A0A0A]">
                      {service.title}
                    </h3>
                  </div>

                  {/* Gray One-Line Description */}
                  <p className="text-[16px] sm:text-[17px] text-[#6B6B66] font-normal leading-relaxed md:w-5/12">
                    {service.description}
                  </p>

                  {/* Actions on the Right */}
                  <div className="flex items-center justify-end gap-4 md:w-2/12 pt-2 md:pt-0">
                    <button
                      type="button"
                      onClick={(e) => toggleExpand(service.id, e)}
                      className="text-[12px] uppercase tracking-wider text-[#6B6B66] hover:text-[#0A0A0A] flex items-center gap-1 border-b border-transparent hover:border-[#0A0A0A] pb-0.5"
                    >
                      <span>{isExpanded ? "Close" : "Scope"}</span>
                      {isExpanded ? <Minus className="w-3 h-3" /> : <Plus className="w-3 h-3" />}
                    </button>
                    <div className="text-[#0A0A0A] transition-transform duration-300 group-hover:translate-x-2">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                {/* Expandable Deliverables Accordion Drawer */}
                {isExpanded && (
                  <div
                    onClick={(e) => e.stopPropagation()}
                    className="mt-8 pt-8 border-t border-[#E4E4DF] grid grid-cols-1 md:grid-cols-12 gap-6 bg-white p-6 border"
                  >
                    <div className="md:col-span-8 space-y-3">
                      <span className="text-[11px] uppercase tracking-wider text-[#6B6B66] font-medium block">
                        Detailed Deliverables &amp; Artifacts
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[14px] text-[#0A0A0A]">
                        {service.deliverables.map((item) => (
                          <div key={item} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-[#0A0A0A]" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="md:col-span-4 border-t md:border-t-0 md:border-l border-[#E4E4DF] md:pl-6 flex flex-col justify-between space-y-4">
                      <div>
                        <span className="text-[11px] uppercase tracking-wider text-[#6B6B66] block">
                          Typical Engagement Cadence
                        </span>
                        <span className="text-[15px] font-semibold text-[#0A0A0A]">
                          {service.timeline}
                        </span>
                      </div>

                      <button
                        onClick={() => onSelectService?.(service)}
                        className="btn-solid !h-[40px] !px-4 text-[13px] self-start"
                      >
                        <span>Commission {service.title}</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
