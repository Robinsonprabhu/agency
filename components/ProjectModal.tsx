"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, ArrowUpRight } from "lucide-react";
import { ProjectItem } from "@/types";

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] bg-white border border-[#E5E5E5] text-[#111111] shadow-lg flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E5E5E5] bg-white">
          <div className="text-[12px] uppercase tracking-wider text-[#666666]">
            Case Archive // {project.category}
          </div>
          <button
            onClick={onClose}
            aria-label="Close project modal"
            className="p-1.5 text-[#666666] hover:text-[#111111] hover:bg-[#F7F7F5] transition-colors rounded-[2px] cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
          <div
            className="relative aspect-[16/9] w-full overflow-hidden bg-[#F7F7F5] border border-[#E5E5E5]"
            style={{ position: "relative" }}
          >
            <Image
              src={project.image}
              alt={project.imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 896px"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-2">
            <div className="md:col-span-8 space-y-3">
              <div className="text-[12px] text-[#666666]">
                Case {project.number} • Conceptual Case Study
              </div>

              <h2
                id="modal-project-title"
                className="sub-heading font-medium text-[#111111]"
              >
                {project.title}
              </h2>

              <p className="text-[15px] text-[#666666] leading-relaxed">
                {project.fullDescription}
              </p>

              <div className="pt-4">
                <span className="text-[11px] uppercase tracking-wider text-[#666666] block mb-2 font-medium">
                  Delivered Scope
                </span>
                <ul className="flex flex-wrap gap-2">
                  {project.deliverables.map((item) => (
                    <li
                      key={item}
                      className="px-3 py-1 bg-[#F7F7F5] border border-[#E5E5E5] text-[12px] text-[#111111]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="md:col-span-4 bg-[#F7F7F5] p-6 border border-[#E5E5E5] space-y-4 text-[12px]">
              <div>
                <span className="text-[#666666] block mb-1">CLIENT CONTEXT</span>
                <span className="text-[#111111] font-medium">Conceptual Studio Exploration</span>
              </div>
              <div className="border-t border-[#E5E5E5] pt-3">
                <span className="text-[#666666] block mb-1">DISCIPLINE</span>
                <span className="text-[#111111]">{project.category}</span>
              </div>
              <div className="border-t border-[#E5E5E5] pt-3">
                <span className="text-[#666666] block mb-1">CLASSIFICATION</span>
                <span className="text-[#111111]">Original Conceptual Work</span>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Bottom Bar */}
        <div className="px-6 py-4 bg-[#F7F7F5] border-t border-[#E5E5E5] flex flex-wrap items-center justify-between gap-4">
          <span className="text-[12px] text-[#666666]">
            FF-ARCHIVE-{project.number}
          </span>
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-[12px] uppercase tracking-wider text-[#666666] hover:text-[#111111] cursor-pointer"
            >
              Close
            </button>
            <Link
              href="#contact"
              onClick={onClose}
              className="inline-flex items-center gap-2 text-[13px] font-medium bg-[#111111] text-white hover:bg-[#333333] px-4 py-2 rounded-[2px] transition-colors"
            >
              <span>Discuss similar project</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
