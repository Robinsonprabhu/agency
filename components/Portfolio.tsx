"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { PORTFOLIO_PROJECTS } from "@/data/content";
import { ProjectItem } from "@/types";
import ProjectModal from "@/components/ProjectModal";

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <section id="work" className="py-24 sm:py-32 bg-[#101B2C] border-b border-[#18263A]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20 pb-8 border-b border-[#18263A]">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-[#FF642E] mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FF642E]" />
              04 // PORTFOLIO ARCHIVES
            </div>
            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F4F1EA] uppercase">
              Selected work<span className="text-[#FF642E]">.</span> Real impact
              <span className="text-[#FF642E]">.</span>
            </h2>
          </div>
          <div className="mt-4 md:mt-0 font-mono text-xs text-[#A6AFBB] flex flex-col items-start md:items-end gap-1">
            <span>[ 04 CONCEPTUAL COMMISSIONS ]</span>
            <span className="text-[#FF642E]">CLICK TO EXPLORE CASE STUDY</span>
          </div>
        </div>

        {/* Bold Asymmetric Project Layout */}
        <div className="space-y-16 lg:space-y-24">
          {/* Row 1: Pair 1 (Vahlen Atelier: Wide Landscape 7 cols + Strata Capital: Tall Portrait 5 cols) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Project 01: Vahlen Atelier */}
            {(() => {
              const project = PORTFOLIO_PROJECTS[0];
              return (
                <motion.article
                  key={project.number}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  onClick={() => setSelectedProject(project)}
                  className="lg:col-span-7 group cursor-pointer flex flex-col bg-[#18263A] border border-white/10 hover:border-[#FF642E] transition-all duration-300"
                >
                  <div
                    className="relative aspect-[16/10] w-full overflow-hidden bg-[#101B2C]"
                    style={{ position: "relative" }}
                  >
                    <Image
                      src={project.image}
                      alt={project.imageAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 58vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#101B2C]/80 via-transparent to-transparent pointer-events-none" />

                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                      <span className="px-3 py-1 bg-[#101B2C]/90 text-[10px] font-mono uppercase tracking-widest text-[#FF642E] border border-white/10">
                        {project.category}
                      </span>
                      <span className="px-2.5 py-1 bg-[#FF642E] text-[#101B2C] text-xs font-mono font-bold">
                        {project.number}
                      </span>
                    </div>

                    <div className="absolute bottom-4 right-4 w-9 h-9 rounded-full bg-[#FF642E] text-[#101B2C] flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="p-8 flex flex-col justify-between flex-grow">
                    <div>
                      <div className="text-xs font-mono uppercase tracking-wider text-[#A6AFBB] mb-2 flex items-center gap-2">
                        <span>{project.client}</span>
                        <span className="text-[#FF642E]">•</span>
                        <span>CONCEPT</span>
                      </div>
                      <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#F4F1EA] tracking-tight group-hover:text-[#FF642E] transition-colors">
                        {project.title}
                      </h3>
                      <p className="mt-3 text-sm text-[#A6AFBB] leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between font-mono text-xs text-[#A6AFBB]">
                      <span>{project.deliverables.join(" • ")}</span>
                      <span className="text-[#FF642E] font-medium group-hover:underline">
                        Explore Case →
                      </span>
                    </div>
                  </div>
                </motion.article>
              );
            })()}

            {/* Project 02: Strata Capital (Tall Vertical Portrait Composition) */}
            {(() => {
              const project = PORTFOLIO_PROJECTS[1];
              return (
                <motion.article
                  key={project.number}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.15 }}
                  onClick={() => setSelectedProject(project)}
                  className="lg:col-span-5 group cursor-pointer flex flex-col bg-[#18263A] border border-white/10 hover:border-[#FF642E] transition-all duration-300"
                >
                  <div
                    className="relative aspect-[4/5] w-full overflow-hidden bg-[#101B2C]"
                    style={{ position: "relative" }}
                  >
                    <Image
                      src={project.image}
                      alt={project.imageAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 42vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#101B2C]/80 via-transparent to-transparent pointer-events-none" />

                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                      <span className="px-3 py-1 bg-[#101B2C]/90 text-[10px] font-mono uppercase tracking-widest text-[#FF642E] border border-white/10">
                        {project.category}
                      </span>
                      <span className="px-2.5 py-1 bg-[#FF642E] text-[#101B2C] text-xs font-mono font-bold">
                        {project.number}
                      </span>
                    </div>

                    <div className="absolute bottom-4 right-4 w-9 h-9 rounded-full bg-[#FF642E] text-[#101B2C] flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="p-8 flex flex-col justify-between flex-grow">
                    <div>
                      <div className="text-xs font-mono uppercase tracking-wider text-[#A6AFBB] mb-2 flex items-center gap-2">
                        <span>{project.client}</span>
                        <span className="text-[#FF642E]">•</span>
                        <span>CONCEPT</span>
                      </div>
                      <h3 className="font-display text-2xl font-bold text-[#F4F1EA] tracking-tight group-hover:text-[#FF642E] transition-colors">
                        {project.title}
                      </h3>
                      <p className="mt-3 text-sm text-[#A6AFBB] leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between font-mono text-xs text-[#A6AFBB]">
                      <span>{project.deliverables.slice(0, 2).join(" • ")}</span>
                      <span className="text-[#FF642E] font-medium group-hover:underline">
                        Explore Case →
                      </span>
                    </div>
                  </div>
                </motion.article>
              );
            })()}
          </div>

          {/* Row 2: Inverted Asymmetric Pair (Kinetic Haven: 5 cols + Synapse Quantum: Wide 7 cols) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Project 03: Kinetic Haven */}
            {(() => {
              const project = PORTFOLIO_PROJECTS[2];
              return (
                <motion.article
                  key={project.number}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  onClick={() => setSelectedProject(project)}
                  className="lg:col-span-5 group cursor-pointer flex flex-col bg-[#18263A] border border-white/10 hover:border-[#FF642E] transition-all duration-300"
                >
                  <div
                    className="relative aspect-[16/11] w-full overflow-hidden bg-[#101B2C]"
                    style={{ position: "relative" }}
                  >
                    <Image
                      src={project.image}
                      alt={project.imageAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 42vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#101B2C]/80 via-transparent to-transparent pointer-events-none" />

                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                      <span className="px-3 py-1 bg-[#101B2C]/90 text-[10px] font-mono uppercase tracking-widest text-[#FF642E] border border-white/10">
                        {project.category}
                      </span>
                      <span className="px-2.5 py-1 bg-[#FF642E] text-[#101B2C] text-xs font-mono font-bold">
                        {project.number}
                      </span>
                    </div>

                    <div className="absolute bottom-4 right-4 w-9 h-9 rounded-full bg-[#FF642E] text-[#101B2C] flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="p-8 flex flex-col justify-between flex-grow">
                    <div>
                      <div className="text-xs font-mono uppercase tracking-wider text-[#A6AFBB] mb-2 flex items-center gap-2">
                        <span>{project.client}</span>
                        <span className="text-[#FF642E]">•</span>
                        <span>CONCEPT</span>
                      </div>
                      <h3 className="font-display text-2xl font-bold text-[#F4F1EA] tracking-tight group-hover:text-[#FF642E] transition-colors">
                        {project.title}
                      </h3>
                      <p className="mt-3 text-sm text-[#A6AFBB] leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between font-mono text-xs text-[#A6AFBB]">
                      <span>{project.deliverables.slice(0, 2).join(" • ")}</span>
                      <span className="text-[#FF642E] font-medium group-hover:underline">
                        Explore Case →
                      </span>
                    </div>
                  </div>
                </motion.article>
              );
            })()}

            {/* Project 04: Synapse Quantum (Wide 7 cols) */}
            {(() => {
              const project = PORTFOLIO_PROJECTS[3];
              return (
                <motion.article
                  key={project.number}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.15 }}
                  onClick={() => setSelectedProject(project)}
                  className="lg:col-span-7 group cursor-pointer flex flex-col bg-[#18263A] border border-white/10 hover:border-[#FF642E] transition-all duration-300"
                >
                  <div
                    className="relative aspect-[16/10] w-full overflow-hidden bg-[#101B2C]"
                    style={{ position: "relative" }}
                  >
                    <Image
                      src={project.image}
                      alt={project.imageAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 58vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#101B2C]/80 via-transparent to-transparent pointer-events-none" />

                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                      <span className="px-3 py-1 bg-[#101B2C]/90 text-[10px] font-mono uppercase tracking-widest text-[#FF642E] border border-white/10">
                        {project.category}
                      </span>
                      <span className="px-2.5 py-1 bg-[#FF642E] text-[#101B2C] text-xs font-mono font-bold">
                        {project.number}
                      </span>
                    </div>

                    <div className="absolute bottom-4 right-4 w-9 h-9 rounded-full bg-[#FF642E] text-[#101B2C] flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="p-8 flex flex-col justify-between flex-grow">
                    <div>
                      <div className="text-xs font-mono uppercase tracking-wider text-[#A6AFBB] mb-2 flex items-center gap-2">
                        <span>{project.client}</span>
                        <span className="text-[#FF642E]">•</span>
                        <span>CONCEPT</span>
                      </div>
                      <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#F4F1EA] tracking-tight group-hover:text-[#FF642E] transition-colors">
                        {project.title}
                      </h3>
                      <p className="mt-3 text-sm text-[#A6AFBB] leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between font-mono text-xs text-[#A6AFBB]">
                      <span>{project.deliverables.join(" • ")}</span>
                      <span className="text-[#FF642E] font-medium group-hover:underline">
                        Explore Case →
                      </span>
                    </div>
                  </div>
                </motion.article>
              );
            })()}
          </div>
        </div>

        {/* Project Modal */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
}
