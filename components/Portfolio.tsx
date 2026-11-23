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
    <section id="work" className="py-24 sm:py-32 bg-white border-b border-[#E5E5E5]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20 pb-8 border-b border-[#E5E5E5]">
          <div>
            <div className="meta-label mb-3">
              03 // Portfolio
            </div>
            <h2 className="section-heading text-[#111111]">
              Selected work.
            </h2>
            <p className="mt-3 text-[16px] text-[#666666] max-w-xl font-normal leading-relaxed">
              Explore a selection of digital concepts focused on thoughtful design, usability and modern technology.
            </p>
          </div>
          <div className="mt-6 md:mt-0 font-mono text-[12px] text-[#666666]">
            [ Four Conceptual Case Studies ]
          </div>
        </div>

        {/* Editorial Image Grid with Mixed Proportions */}
        <div className="space-y-14 lg:space-y-20">
          {/* Pair 1: Project 01 (Wide 7 cols) & Project 02 (Portrait 5 cols) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Project 01: Premium Fashion E-commerce */}
            {(() => {
              const project = PORTFOLIO_PROJECTS[0];
              return (
                <motion.article
                  key={project.id}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45 }}
                  onClick={() => setSelectedProject(project)}
                  className="lg:col-span-7 group cursor-pointer flex flex-col bg-white border border-[#E5E5E5] hover:border-[#111111] transition-colors duration-300"
                >
                  <div
                    className="relative aspect-[16/10] w-full overflow-hidden bg-[#F7F7F5]"
                    style={{ position: "relative" }}
                  >
                    <Image
                      src={project.image}
                      alt={project.imageAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 58vw"
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-2.5 py-1 bg-white text-[11px] uppercase tracking-wider text-[#111111] border border-[#E5E5E5]">
                        Concept
                      </span>
                    </div>

                    <div className="absolute bottom-4 right-4 w-8 h-8 rounded-[2px] bg-white border border-[#E5E5E5] flex items-center justify-center text-[#111111] opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-sm">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="p-7 sm:p-9 flex flex-col justify-between flex-grow">
                    <div>
                      <div className="meta-label mb-1.5">
                        {project.category}
                      </div>
                      <h3 className="project-heading text-[#111111] transition-transform duration-300 group-hover:translate-x-1">
                        {project.title}
                      </h3>
                      <p className="mt-2 text-[15px] text-[#666666] leading-relaxed">
                        {project.shortDescription}
                      </p>
                    </div>

                    <div className="pt-6 mt-6 border-t border-[#E5E5E5] flex items-center justify-between text-[13px]">
                      <span className="text-[#666666]">{project.deliverables.join(" • ")}</span>
                      <span className="font-medium text-[#111111] flex items-center gap-1 group-hover:underline">
                        Read case study <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </motion.article>
              );
            })()}

            {/* Project 02: Fintech Digital Experience (Portrait 5 cols) */}
            {(() => {
              const project = PORTFOLIO_PROJECTS[1];
              return (
                <motion.article
                  key={project.id}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 0.08 }}
                  onClick={() => setSelectedProject(project)}
                  className="lg:col-span-5 group cursor-pointer flex flex-col bg-white border border-[#E5E5E5] hover:border-[#111111] transition-colors duration-300"
                >
                  <div
                    className="relative aspect-[4/5] w-full overflow-hidden bg-[#F7F7F5]"
                    style={{ position: "relative" }}
                  >
                    <Image
                      src={project.image}
                      alt={project.imageAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 42vw"
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-2.5 py-1 bg-white text-[11px] uppercase tracking-wider text-[#111111] border border-[#E5E5E5]">
                        Concept
                      </span>
                    </div>

                    <div className="absolute bottom-4 right-4 w-8 h-8 rounded-[2px] bg-white border border-[#E5E5E5] flex items-center justify-center text-[#111111] opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-sm">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="p-7 sm:p-9 flex flex-col justify-between flex-grow">
                    <div>
                      <div className="meta-label mb-1.5">
                        {project.category}
                      </div>
                      <h3 className="project-heading text-[#111111] transition-transform duration-300 group-hover:translate-x-1">
                        {project.title}
                      </h3>
                      <p className="mt-2 text-[15px] text-[#666666] leading-relaxed">
                        {project.shortDescription}
                      </p>
                    </div>

                    <div className="pt-6 mt-6 border-t border-[#E5E5E5] flex items-center justify-between text-[13px]">
                      <span className="text-[#666666]">{project.deliverables.slice(0, 2).join(" • ")}</span>
                      <span className="font-medium text-[#111111] flex items-center gap-1 group-hover:underline">
                        Read case study <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </motion.article>
              );
            })()}
          </div>

          {/* Pair 2: Project 03 (Landscape 5 cols) & Project 04 (Wide 7 cols) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Project 03: Hospitality Website */}
            {(() => {
              const project = PORTFOLIO_PROJECTS[2];
              return (
                <motion.article
                  key={project.id}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45 }}
                  onClick={() => setSelectedProject(project)}
                  className="lg:col-span-5 group cursor-pointer flex flex-col bg-white border border-[#E5E5E5] hover:border-[#111111] transition-colors duration-300"
                >
                  <div
                    className="relative aspect-[16/11] w-full overflow-hidden bg-[#F7F7F5]"
                    style={{ position: "relative" }}
                  >
                    <Image
                      src={project.image}
                      alt={project.imageAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 42vw"
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-2.5 py-1 bg-white text-[11px] uppercase tracking-wider text-[#111111] border border-[#E5E5E5]">
                        Concept
                      </span>
                    </div>

                    <div className="absolute bottom-4 right-4 w-8 h-8 rounded-[2px] bg-white border border-[#E5E5E5] flex items-center justify-center text-[#111111] opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-sm">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="p-7 sm:p-9 flex flex-col justify-between flex-grow">
                    <div>
                      <div className="meta-label mb-1.5">
                        {project.category}
                      </div>
                      <h3 className="project-heading text-[#111111] transition-transform duration-300 group-hover:translate-x-1">
                        {project.title}
                      </h3>
                      <p className="mt-2 text-[15px] text-[#666666] leading-relaxed">
                        {project.shortDescription}
                      </p>
                    </div>

                    <div className="pt-6 mt-6 border-t border-[#E5E5E5] flex items-center justify-between text-[13px]">
                      <span className="text-[#666666]">{project.deliverables.slice(0, 2).join(" • ")}</span>
                      <span className="font-medium text-[#111111] flex items-center gap-1 group-hover:underline">
                        Read case study <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </motion.article>
              );
            })()}

            {/* Project 04: Technology Startup Platform */}
            {(() => {
              const project = PORTFOLIO_PROJECTS[3];
              return (
                <motion.article
                  key={project.id}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 0.08 }}
                  onClick={() => setSelectedProject(project)}
                  className="lg:col-span-7 group cursor-pointer flex flex-col bg-white border border-[#E5E5E5] hover:border-[#111111] transition-colors duration-300"
                >
                  <div
                    className="relative aspect-[16/10] w-full overflow-hidden bg-[#F7F7F5]"
                    style={{ position: "relative" }}
                  >
                    <Image
                      src={project.image}
                      alt={project.imageAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 58vw"
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-2.5 py-1 bg-white text-[11px] uppercase tracking-wider text-[#111111] border border-[#E5E5E5]">
                        Concept
                      </span>
                    </div>

                    <div className="absolute bottom-4 right-4 w-8 h-8 rounded-[2px] bg-white border border-[#E5E5E5] flex items-center justify-center text-[#111111] opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-sm">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="p-7 sm:p-9 flex flex-col justify-between flex-grow">
                    <div>
                      <div className="meta-label mb-1.5">
                        {project.category}
                      </div>
                      <h3 className="project-heading text-[#111111] transition-transform duration-300 group-hover:translate-x-1">
                        {project.title}
                      </h3>
                      <p className="mt-2 text-[15px] text-[#666666] leading-relaxed">
                        {project.shortDescription}
                      </p>
                    </div>

                    <div className="pt-6 mt-6 border-t border-[#E5E5E5] flex items-center justify-between text-[13px]">
                      <span className="text-[#666666]">{project.deliverables.join(" • ")}</span>
                      <span className="font-medium text-[#111111] flex items-center gap-1 group-hover:underline">
                        Read case study <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </motion.article>
              );
            })()}
          </div>
        </div>

        {/* Modal Case Study Viewer */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
}
