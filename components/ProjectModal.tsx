"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, ArrowUpRight, CheckCircle2 } from "lucide-react";
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
      aria-labelledby="modal-case-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-[#101B2C]/85 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] bg-[#101B2C] border border-[#18263A] text-[#F4F1EA] shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#18263A] bg-[#18263A]/50">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#FF642E]" />
            <span className="text-xs font-mono uppercase tracking-wider text-[#A6AFBB]">
              ARCHIVE // {project.category}
            </span>
          </div>
          <button
            onClick={onClose}
            aria-label="Close project modal"
            className="p-1.5 text-[#A6AFBB] hover:text-[#F4F1EA] hover:bg-[#18263A] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
          <div
            className="relative aspect-[16/9] w-full overflow-hidden bg-[#18263A] border border-white/10"
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
            <div className="md:col-span-8 space-y-4">
              <div className="flex items-center gap-3 font-mono text-xs text-[#FF642E]">
                <span>CASE {project.number}</span>
                <span>•</span>
                <span>CONCEPTUAL CASE STUDY</span>
              </div>

              <h2
                id="modal-case-title"
                className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-[#F4F1EA]"
              >
                {project.title}
              </h2>

              <p className="text-sm sm:text-base text-[#A6AFBB] leading-relaxed">
                {project.description}
              </p>

              <div className="pt-4">
                <span className="text-xs font-mono uppercase tracking-widest text-[#A6AFBB] block mb-3">
                  Delivered Competencies
                </span>
                <div className="flex flex-wrap gap-2">
                  {project.deliverables.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#18263A] text-xs font-mono text-[#F4F1EA]"
                    >
                      <CheckCircle2 className="w-3 h-3 text-[#FF642E]" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="md:col-span-4 bg-[#18263A] p-6 border border-white/10 space-y-4 text-xs font-mono">
              <div>
                <span className="text-[#A6AFBB] block mb-1">CLIENT ARCHIVE</span>
                <span className="text-[#F4F1EA] font-medium">{project.client}</span>
              </div>
              <div className="border-t border-white/10 pt-3">
                <span className="text-[#A6AFBB] block mb-1">DISCIPLINE</span>
                <span className="text-[#F4F1EA]">{project.category}</span>
              </div>
              <div className="border-t border-white/10 pt-3">
                <span className="text-[#A6AFBB] block mb-1">CLASSIFICATION</span>
                <span className="text-[#FF642E]">Original Studio Commission</span>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Bottom Bar */}
        <div className="px-6 py-4 bg-[#18263A]/40 border-t border-[#18263A] flex flex-wrap items-center justify-between gap-4">
          <span className="text-xs font-mono text-[#A6AFBB]">
            CONFIDENTIAL ARCHIVE RECORD
          </span>
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-mono uppercase tracking-wider text-[#A6AFBB] hover:text-[#F4F1EA]"
            >
              Close
            </button>
            <Link
              href="#contact"
              onClick={onClose}
              className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold font-display bg-[#FF642E] text-[#101B2C] hover:bg-[#ff7b4d] px-5 py-2.5 transition-colors"
            >
              <span>Commission Similar Project</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
