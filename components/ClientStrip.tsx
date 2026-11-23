"use client";

import React from "react";
import { FICTIONAL_CLIENTS } from "@/data/content";

export default function ClientStrip() {
  return (
    <section className="py-10 bg-[#101B2C] border-b border-[#18263A]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#A6AFBB] whitespace-nowrap">
            <span className="w-1.5 h-1.5 bg-[#FF642E] rounded-full" />
            <span>PARTNER CONCEPTS // SELECTED ARCHIVES:</span>
          </div>

          {/* Fictional partner brand list */}
          <div className="flex flex-wrap items-center gap-6 sm:gap-10 text-xs sm:text-sm font-display tracking-widest uppercase text-[#F4F1EA]/70">
            {FICTIONAL_CLIENTS.map((client) => (
              <span
                key={client.name}
                className="hover:text-[#FF642E] transition-colors cursor-default"
                title={`${client.name} — ${client.industry} (${client.location}) [Fictional Concept]`}
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
