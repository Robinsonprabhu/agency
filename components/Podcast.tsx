"use client";

import React, { useState } from "react";
import { Play, Pause } from "lucide-react";
import { PODCAST_EPISODES } from "@/data/content";

export default function Podcast() {
  const [playingId, setPlayingId] = useState<string | null>(null);

  const togglePlay = (id: string) => {
    setPlayingId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="podcast" className="py-24 sm:py-32 bg-[#F7F7F5] border-b border-[#E5E5E5]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="mb-16 md:mb-20 pb-8 border-b border-[#E5E5E5]">
          <div className="text-xs font-mono uppercase tracking-wider text-[#666666] mb-4">
            PODCAST
          </div>
          <h2 className="font-serif text-4xl sm:text-6xl font-normal leading-[1.08] tracking-[-0.02em] text-[#111111]">
            Conversations around design and technology.
          </h2>
        </div>

        {/* Two Episode Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PODCAST_EPISODES.map((ep, i) => {
            const isPlaying = playingId === ep.id;
            return (
              <div
                key={ep.id}
                className="bg-white border border-[#E5E5E5] p-8 sm:p-10 flex flex-col justify-between"
              >
                <div>
                  {/* Thumbnail Space */}
                  <div
                    className="relative aspect-[16/9] w-full bg-[#F7F7F5] border border-dashed border-[#E5E5E5] flex items-center justify-center p-6 mb-6 text-center"
                    style={{ position: "relative" }}
                  >
                    <span className="text-xs font-mono text-[#666666]">
                      [PLACEHOLDER: Thumbnail 0{i + 1}]
                    </span>
                  </div>

                  <div className="flex items-center gap-3 text-xs font-mono text-[#666666] mb-2">
                    <span>{ep.date}</span>
                    <span>•</span>
                    <span>{ep.duration}</span>
                  </div>

                  <h3 className="font-serif text-2xl font-normal text-[#111111] leading-snug">
                    {ep.title}
                  </h3>
                </div>

                <div className="pt-6 mt-8 border-t border-[#E5E5E5] flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => togglePlay(ep.id)}
                    className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider bg-[#111111] text-white hover:bg-[#333333] px-4 py-2.5 rounded-[2px] transition-colors cursor-pointer"
                    aria-label={isPlaying ? `Pause ${ep.title}` : `Play preview of ${ep.title}`}
                  >
                    {isPlaying ? (
                      <>
                        <Pause className="w-3.5 h-3.5" />
                        <span>Pause Preview</span>
                      </>
                    ) : (
                      <>
                        <Play className="w-3.5 h-3.5" />
                        <span>Play Preview</span>
                      </>
                    )}
                  </button>

                  <span className="text-[11px] font-mono text-[#666666]">
                    Audio Demo Control
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
