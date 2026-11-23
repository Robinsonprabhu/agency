"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
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
            <div className="label-meta mb-3">
              04 // Portfolio
            </div>
            <h2 className="section-heading text-[#111111]">
              Selected work.
            </h2>
            <p className="mt-3 text-[16px] text-[#666666] max-w-xl font-normal leading-relaxed">
              Explore a selection of digital concepts focused on thoughtful design, usability and modern technology.
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <Link
              href="#work"
              className="inline-flex items-center gap-1.5 text-[14px] font-medium text-[#111111] hover:text-[#666666] border-b border-[#111111] pb-0.5 transition-colors"
            >
              <span>Selected work</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Varied Image Proportions Layout */}
        <div className="space-y-16 lg:space-y-24">
          {/* Pair 1: Project 01 (Wide 7 cols) & Project 02 (Portrait 5 cols) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Project 01: Premium Fashion E-commerce */}
            {(() => {
              const project = PORTFOLIO_PROJECTS[0];
              return (
                <motion.article
                  key={project.number}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45 }}
                  className="lg:col-span-7 flex flex-col bg-white border border-[#E5E5E5] hover:border-[#111111] transition-colors duration-150"
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
                      className="object-cover transition-transform duration-500 ease-out hover:scale-[1.015]"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-2.5 py-1 bg-white text-[11px] uppercase tracking-wider text-[#111111] border border-[#E5E5E5]">
                        Conceptual Work
                      </span>
                    </div>
                  </div>

                  <div className="p-7 sm:p-9 flex flex-col justify-between flex-grow">
                    <div>
                      <div className="label-meta mb-1.5">
                        {project.category}
                      </div>
                      <h3 className="card-heading text-[#111111]">
                        {project.title}
                      </h3>
                      <p className="mt-2 text-[15px] text-[#666666] leading-relaxed">
                        {project.shortDescription}
                      </p>
                    </div>

                    <div className="pt-6 mt-6 border-t border-[#E5E5E5]">
                      <button
                        type="button"
                        onClick={() => setSelectedProject(project)}
                        className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[#111111] hover:text-[#666666] transition-colors cursor-pointer"
                      >
                        <span>Read case study</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </motion.article>
              );
            })()}

            {/* Project 02: Fintech Digital Experience */}
            {(() => {
              const project = PORTFOLIO_PROJECTS[1];
              return (
                <motion.article
                  key={project.number}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 0.08 }}
                  className="lg:col-span-5 flex flex-col bg-white border border-[#E5E5E5] hover:border-[#111111] transition-colors duration-150"
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
                      className="object-cover transition-transform duration-500 ease-out hover:scale-[1.015]"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-2.5 py-1 bg-white text-[11px] uppercase tracking-wider text-[#111111] border border-[#E5E5E5]">
                        Conceptual Work
                      </span>
                    </div>
                  </div>

                  <div className="p-7 sm:p-9 flex flex-col justify-between flex-grow">
                    <div>
                      <div className="label-meta mb-1.5">
                        {project.category}
                      </div>
                      <h3 className="card-heading text-[#111111]">
                        {project.title}
                      </h3>
                      <p className="mt-2 text-[15px] text-[#666666] leading-relaxed">
                        {project.shortDescription}
                      </p>
                    </div>

                    <div className="pt-6 mt-6 border-t border-[#E5E5E5]">
                      <button
                        type="button"
                        onClick={() => setSelectedProject(project)}
                        className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[#111111] hover:text-[#666666] transition-colors cursor-pointer"
                      >
                        <span>Read case study</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
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
                  key={project.number}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45 }}
                  className="lg:col-span-5 flex flex-col bg-white border border-[#E5E5E5] hover:border-[#111111] transition-colors duration-150"
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
                      className="object-cover transition-transform duration-500 ease-out hover:scale-[1.015]"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-2.5 py-1 bg-white text-[11px] uppercase tracking-wider text-[#111111] border border-[#E5E5E5]">
                        Conceptual Work
                      </span>
                    </div>
                  </div>

                  <div className="p-7 sm:p-9 flex flex-col justify-between flex-grow">
                    <div>
                      <div className="label-meta mb-1.5">
                        {project.category}
                      </div>
                      <h3 className="card-heading text-[#111111]">
                        {project.title}
                      </h3>
                      <p className="mt-2 text-[15px] text-[#666666] leading-relaxed">
                        {project.shortDescription}
                      </p>
                    </div>

                    <div className="pt-6 mt-6 border-t border-[#E5E5E5]">
                      <button
                        type="button"
                        onClick={() => setSelectedProject(project)}
                        className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[#111111] hover:text-[#666666] transition-colors cursor-pointer"
                      >
                        <span>Read case study</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
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
                  key={project.number}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 0.08 }}
                  className="lg:col-span-7 flex flex-col bg-white border border-[#E5E5E5] hover:border-[#111111] transition-colors duration-150"
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
                      className="object-cover transition-transform duration-500 ease-out hover:scale-[1.015]"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-2.5 py-1 bg-white text-[11px] uppercase tracking-wider text-[#111111] border border-[#E5E5E5]">
                        Conceptual Work
                      </span>
                    </div>
                  </div>

                  <div className="p-7 sm:p-9 flex flex-col justify-between flex-grow">
                    <div>
                      <div className="label-meta mb-1.5">
                        {project.category}
                      </div>
                      <h3 className="card-heading text-[#111111]">
                        {project.title}
                      </h3>
                      <p className="mt-2 text-[15px] text-[#666666] leading-relaxed">
                        {project.shortDescription}
                      </p>
                    </div>

                    <div className="pt-6 mt-6 border-t border-[#E5E5E5]">
                      <button
                        type="button"
                        onClick={() => setSelectedProject(project)}
                        className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[#111111] hover:text-[#666666] transition-colors cursor-pointer"
                      >
                        <span>Read case study</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </motion.article>
              );
            })()}
          </div>
        </div>

        {/* All case studies link */}
        <div className="mt-14 pt-8 border-t border-[#E5E5E5] flex justify-center">
          <Link
            href="#work"
            className="inline-flex items-center gap-2 text-[14px] font-medium bg-[#111111] text-white hover:bg-[#333333] px-7 py-3 rounded-[2px] transition-colors"
          >
            <span>All case studies</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Case Study Modal */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
}
