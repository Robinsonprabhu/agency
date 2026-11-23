"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { PORTFOLIO_PROJECTS } from "@/data/content";
import { ProjectItem } from "@/types";
import ProjectModal from "@/components/ProjectModal";

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <section id="work" className="py-[120px] bg-white border-b border-[#E4E4DF]">
      <div className="max-w-[1320px] mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-10 border-b border-[#0A0A0A] mb-14">
          <div className="space-y-3">
            <span className="text-[12px] uppercase tracking-[0.08em] font-medium text-[#6B6B66] block">
              SELECTED WORK
            </span>
            <h2 className="section-title text-[#0A0A0A]">
              A closer look at what we create.
            </h2>
          </div>
          <p className="max-w-[34ch] text-[16px] text-[#6B6B66] leading-relaxed">
            A collection of digital concepts exploring design, technology and user experience.
          </p>
        </div>

        {/* 4 Projects Grid: Alternating Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {PORTFOLIO_PROJECTS.map((project) => (
            <article
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer flex flex-col bg-white border border-[#E4E4DF] hover:border-[#0A0A0A] transition-colors duration-300"
            >
              {/* Project Image */}
              <div
                className="relative aspect-[16/10] w-full overflow-hidden bg-[#F5F5F2]"
                style={{ position: "relative" }}
              >
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-2.5 py-1 bg-white text-[11px] uppercase tracking-wider text-[#0A0A0A] border border-[#E4E4DF]">
                    Conceptual
                  </span>
                </div>
                <div className="absolute bottom-4 right-4 w-9 h-9 bg-white border border-[#0A0A0A] flex items-center justify-center text-[#0A0A0A] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              {/* Project Details */}
              <div className="p-8 sm:p-9 flex flex-col justify-between flex-grow bg-[#F5F5F2]">
                <div>
                  <div className="text-[12px] uppercase tracking-wider text-[#6B6B66] font-medium mb-2">
                    {project.category}
                  </div>
                  <h3 className="font-heading text-[28px] sm:text-[32px] font-bold text-[#0A0A0A] uppercase leading-tight mb-3">
                    {project.title}
                  </h3>
                  <p className="text-[15px] sm:text-[16px] text-[#6B6B66] leading-relaxed">
                    {project.shortDescription}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#E4E4DF] flex items-center justify-between text-[13px] font-medium text-[#0A0A0A]">
                  <span>Explore Case Study</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Conceptual Note */}
        <div className="pt-10 mt-10 border-t border-[#E4E4DF] text-center">
          <p className="text-[13px] text-[#6B6B66] italic">
            *Note: These are conceptual portfolio projects, not completed client work.*
          </p>
        </div>
      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
