"use client";

import React from "react";
import Image from "next/image";
import { X, ArrowUpRight } from "lucide-react";

interface CaseStudyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenContact?: () => void;
}

export default function CaseStudyModal({ isOpen, onClose, onOpenContact }: CaseStudyModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/50 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-[880px] bg-white border border-[#0A0A0A] p-6 sm:p-12 text-[#0A0A0A] my-auto">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-[#6B6B66] hover:text-[#0A0A0A] transition-colors"
          aria-label="Close case study dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-6">
          <div>
            <span className="text-[12px] uppercase tracking-[0.08em] font-medium text-[#6B6B66] block mb-2">
              Case Study Archive // Ref. 01
            </span>
            <h2 className="section-title !text-[clamp(32px,5vw,56px)] text-[#0A0A0A]">
              Vahlen Atelier — Luxury Goods Digital Flagship
            </h2>
          </div>

          <div
            className="relative aspect-[16/9] w-full overflow-hidden bg-[#F5F5F2] border border-[#E4E4DF]"
            style={{ position: "relative" }}
          >
            <Image
              src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1600&q=80"
              alt="Tailored apparel detail shot"
              fill
              sizes="880px"
              className="object-cover"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-4">
            <div className="md:col-span-8 space-y-4">
              <h3 className="text-[18px] font-semibold text-[#0A0A0A]">
                The Challenge &amp; Execution
              </h3>
              <p className="text-[16px] text-[#6B6B66] leading-relaxed">
                Vahlen Atelier required an uncompromising digital presence reflecting their heritage of bespoke tailoring. We engineered an ultra-fast, headless commerce flagship pairing high-fidelity garment textile views with restrained Swiss typography and instant page transitions.
              </p>
              <p className="text-[16px] text-[#6B6B66] leading-relaxed">
                Every interaction was engineered with zero lag, ensuring browsing felt as tactile and deliberate as physical atelier patronage.
              </p>
            </div>

            <div className="md:col-span-4 bg-[#F5F5F2] p-6 border border-[#E4E4DF] space-y-4 text-[14px]">
              <div>
                <span className="text-[11px] uppercase tracking-wider text-[#6B6B66] block">Client</span>
                <span className="font-medium text-[#0A0A0A]">Vahlen Atelier (Zürich)</span>
              </div>
              <div>
                <span className="text-[11px] uppercase tracking-wider text-[#6B6B66] block">Disciplines</span>
                <span className="text-[#0A0A0A]">Art Direction, UI/UX, Next.js</span>
              </div>
              <div>
                <span className="text-[11px] uppercase tracking-wider text-[#6B6B66] block">Performance</span>
                <span className="text-[#0A0A0A]">100/100 Lighthouse Speed Index</span>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-[#E4E4DF] flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-[13px] text-[#6B6B66]">Scope: Strategy • UI/UX • Web</span>
            <button
              onClick={() => {
                onClose();
                onOpenContact?.();
              }}
              className="btn-solid !h-[46px] !px-6 text-[14px] cursor-pointer"
            >
              <span>Commission Similar Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

