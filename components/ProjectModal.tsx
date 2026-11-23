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
        className="relative w-full max-w-4xl max-h-[90vh] bg-white border border-[#0A0A0A] text-[#0A0A0A] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E4E4DF] bg-white">
          <div className="text-[12px] uppercase tracking-wider text-[#6B6B66]">
            Case Study // {project.category}
          </div>
          <button
            onClick={onClose}
            aria-label="Close project modal"
            className="p-1.5 text-[#6B6B66] hover:text-[#0A0A0A] hover:bg-[#F5F5F2] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
          <div
            className="relative aspect-[16/9] w-full overflow-hidden bg-[#F5F5F2] border border-[#E4E4DF]"
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
              <div className="text-[12px] text-[#6B6B66]">
                Case {project.number} • Conceptual Case Study
              </div>

              <h2
                id="modal-project-title"
                className="font-heading text-[28px] sm:text-[34px] font-bold text-[#0A0A0A] uppercase leading-tight"
              >
                {project.title}
              </h2>

              <p className="text-[15px] sm:text-[16px] text-[#6B6B66] leading-relaxed">
                {project.fullDescription}
              </p>

              <div className="pt-4">
                <span className="text-[11px] uppercase tracking-wider text-[#6B6B66] block mb-2 font-medium">
                  Delivered Scope
                </span>
                <ul className="flex flex-wrap gap-2">
                  {project.deliverables.map((item) => (
                    <li
                      key={item}
                      className="px-3 py-1 bg-[#F5F5F2] border border-[#E4E4DF] text-[12px] text-[#0A0A0A]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="md:col-span-4 bg-[#F5F5F2] p-6 border border-[#E4E4DF] space-y-4 text-[12px]">
              <div>
                <span className="text-[#6B6B66] block mb-1">PROJECT TYPE</span>
                <span className="text-[#0A0A0A] font-medium">Conceptual Studio Exploration</span>
              </div>
              <div className="border-t border-[#E4E4DF] pt-3">
                <span className="text-[#6B6B66] block mb-1">DISCIPLINE</span>
                <span className="text-[#0A0A0A]">{project.category}</span>
              </div>
              <div className="border-t border-[#E4E4DF] pt-3">
                <span className="text-[#6B6B66] block mb-1">CLASSIFICATION</span>
                <span className="text-[#0A0A0A]">Original Conceptual Commission</span>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Bottom Bar */}
        <div className="px-6 py-4 bg-[#F5F5F2] border-t border-[#E4E4DF] flex flex-wrap items-center justify-between gap-4">
          <span className="text-[12px] text-[#6B6B66]">
            FF-ARCHIVE-{project.number}
          </span>
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-[12px] uppercase tracking-wider text-[#6B6B66] hover:text-[#0A0A0A] cursor-pointer"
            >
              Close
            </button>
            <Link
              href="#contact"
              onClick={onClose}
              className="btn-solid !h-[42px] !px-4 text-[13px]"
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
