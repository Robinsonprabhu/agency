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
    <section id="work" className="py-24 sm:py-32 bg-[#F7F7F5] border-b border-[#E5E5E5]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20 pb-8 border-b border-[#E5E5E5]">
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-[#666666] mb-4">
              04 // Selected Work
            </div>
            <h2 className="font-serif text-4xl sm:text-6xl font-normal leading-[1.08] tracking-[-0.02em] text-[#171717]">
              Selected work. <span className="italic font-normal">Real impact</span>.
            </h2>
          </div>
          <div className="mt-4 md:mt-0 font-mono text-xs text-[#666666]">
            Four conceptual case studies • Click to expand
          </div>
        </div>

        {/* Carefully Composed Asymmetric Image Grid */}
        <div className="space-y-14 lg:space-y-20">
          {/* Row 1: Pair 1 (Vahlen Atelier: Wide 7 cols + Strata Capital: Tall 5 cols) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Project 01: Vahlen Atelier */}
            {(() => {
              const project = PORTFOLIO_PROJECTS[0];
              return (
                <motion.article
                  key={project.number}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  onClick={() => setSelectedProject(project)}
                  className="lg:col-span-7 group cursor-pointer flex flex-col bg-white border border-[#E5E5E5] hover:border-[#171717] transition-colors duration-200"
                >
                  <div
                    className="relative aspect-[16/10] w-full overflow-hidden bg-[#E5E5E5]"
                    style={{ position: "relative" }}
                  >
                    <Image
                      src={project.image}
                      alt={project.imageAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 58vw"
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-2.5 py-1 bg-white/95 text-[11px] font-mono uppercase tracking-wider text-[#171717] border border-[#E5E5E5]">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-7 sm:p-9 flex flex-col justify-between flex-grow">
                    <div>
                      <div className="text-xs font-mono text-[#666666] mb-1">
                        {project.client}
                      </div>
                      <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#171717] group-hover:text-[#666666] transition-colors">
                        {project.title}
                      </h3>
                      <p className="mt-3 text-[15px] text-[#666666] leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <div className="pt-6 mt-6 border-t border-[#E5E5E5] flex items-center justify-between text-xs font-mono text-[#666666]">
                      <span>{project.deliverables.join(" • ")}</span>
                      <span className="text-[#171717] font-medium flex items-center gap-1">
                        View case study <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </motion.article>
              );
            })()}

            {/* Project 02: Strata Capital (Tall Portrait Composition) */}
            {(() => {
              const project = PORTFOLIO_PROJECTS[1];
              return (
                <motion.article
                  key={project.number}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  onClick={() => setSelectedProject(project)}
                  className="lg:col-span-5 group cursor-pointer flex flex-col bg-white border border-[#E5E5E5] hover:border-[#171717] transition-colors duration-200"
                >
                  <div
                    className="relative aspect-[4/5] w-full overflow-hidden bg-[#E5E5E5]"
                    style={{ position: "relative" }}
                  >
                    <Image
                      src={project.image}
                      alt={project.imageAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 42vw"
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-2.5 py-1 bg-white/95 text-[11px] font-mono uppercase tracking-wider text-[#171717] border border-[#E5E5E5]">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-7 sm:p-9 flex flex-col justify-between flex-grow">
                    <div>
                      <div className="text-xs font-mono text-[#666666] mb-1">
                        {project.client}
                      </div>
                      <h3 className="font-serif text-2xl font-normal text-[#171717] group-hover:text-[#666666] transition-colors">
                        {project.title}
                      </h3>
                      <p className="mt-3 text-[15px] text-[#666666] leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <div className="pt-6 mt-6 border-t border-[#E5E5E5] flex items-center justify-between text-xs font-mono text-[#666666]">
                      <span>{project.deliverables.slice(0, 2).join(" • ")}</span>
                      <span className="text-[#171717] font-medium flex items-center gap-1">
                        View case study <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </motion.article>
              );
            })()}
          </div>

          {/* Row 2: Inverted Asymmetric Pair (Kinetic Haven: 5 cols + Synapse Quantum: 7 cols) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Project 03: Kinetic Haven */}
            {(() => {
              const project = PORTFOLIO_PROJECTS[2];
              return (
                <motion.article
                  key={project.number}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  onClick={() => setSelectedProject(project)}
                  className="lg:col-span-5 group cursor-pointer flex flex-col bg-white border border-[#E5E5E5] hover:border-[#171717] transition-colors duration-200"
                >
                  <div
                    className="relative aspect-[16/11] w-full overflow-hidden bg-[#E5E5E5]"
                    style={{ position: "relative" }}
                  >
                    <Image
                      src={project.image}
                      alt={project.imageAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 42vw"
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-2.5 py-1 bg-white/95 text-[11px] font-mono uppercase tracking-wider text-[#171717] border border-[#E5E5E5]">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-7 sm:p-9 flex flex-col justify-between flex-grow">
                    <div>
                      <div className="text-xs font-mono text-[#666666] mb-1">
                        {project.client}
                      </div>
                      <h3 className="font-serif text-2xl font-normal text-[#171717] group-hover:text-[#666666] transition-colors">
                        {project.title}
                      </h3>
                      <p className="mt-3 text-[15px] text-[#666666] leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <div className="pt-6 mt-6 border-t border-[#E5E5E5] flex items-center justify-between text-xs font-mono text-[#666666]">
                      <span>{project.deliverables.slice(0, 2).join(" • ")}</span>
                      <span className="text-[#171717] font-medium flex items-center gap-1">
                        View case study <ArrowUpRight className="w-3.5 h-3.5" />
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
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  onClick={() => setSelectedProject(project)}
                  className="lg:col-span-7 group cursor-pointer flex flex-col bg-white border border-[#E5E5E5] hover:border-[#171717] transition-colors duration-200"
                >
                  <div
                    className="relative aspect-[16/10] w-full overflow-hidden bg-[#E5E5E5]"
                    style={{ position: "relative" }}
                  >
                    <Image
                      src={project.image}
                      alt={project.imageAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 58vw"
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-2.5 py-1 bg-white/95 text-[11px] font-mono uppercase tracking-wider text-[#171717] border border-[#E5E5E5]">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-7 sm:p-9 flex flex-col justify-between flex-grow">
                    <div>
                      <div className="text-xs font-mono text-[#666666] mb-1">
                        {project.client}
                      </div>
                      <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#171717] group-hover:text-[#666666] transition-colors">
                        {project.title}
                      </h3>
                      <p className="mt-3 text-[15px] text-[#666666] leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <div className="pt-6 mt-6 border-t border-[#E5E5E5] flex items-center justify-between text-xs font-mono text-[#666666]">
                      <span>{project.deliverables.join(" • ")}</span>
                      <span className="text-[#171717] font-medium flex items-center gap-1">
                        View case study <ArrowUpRight className="w-3.5 h-3.5" />
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
