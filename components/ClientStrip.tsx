"use client";

import React from "react";
import { FICTIONAL_CLIENTS } from "@/data/content";

export default function ClientStrip() {
  return (
    <section className="py-10 bg-white border-b border-[#E5E5E5]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="text-xs font-mono uppercase tracking-wider text-[#666666]">
            Selected Client Concepts
          </div>

          <div className="flex flex-wrap items-center gap-8 sm:gap-12 text-sm font-sans text-[#171717]/80">
            {FICTIONAL_CLIENTS.map((client) => (
              <span
                key={client.name}
                className="hover:text-[#171717] transition-colors cursor-default"
                title={`${client.name} — ${client.industry} (${client.location}) [Concept]`}
              >
                {client.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
