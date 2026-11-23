"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ARTICLES } from "@/data/content";

export default function Blog() {
  return (
    <section id="blog" className="py-24 sm:py-32 bg-white border-b border-[#E5E5E5]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20 pb-8 border-b border-[#E5E5E5]">
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-[#666666] mb-4">
              08 // Journal
            </div>
            <h2 className="font-serif text-4xl sm:text-6xl font-normal leading-[1.08] tracking-[-0.02em] text-[#111111]">
              Thoughts and perspectives.
            </h2>
            <p className="mt-3 text-[16px] text-[#666666] max-w-xl font-normal leading-relaxed">
              Ideas, observations and practical insights on design, technology and digital experiences.
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <Link
              href="#blog"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[#111111] hover:text-[#666666] border-b border-[#111111] pb-0.5 transition-colors"
            >
              <span>All articles</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Two Editorial Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {ARTICLES.map((article, i) => (
            <article
              key={article.id}
              className="bg-white border border-[#E5E5E5] flex flex-col justify-between"
            >
              {/* Featured Image Space with [PLACEHOLDER] */}
              <div
                className="relative aspect-[16/10] w-full bg-[#F7F7F5] border-b border-[#E5E5E5] flex items-center justify-center p-8 text-center"
                style={{ position: "relative" }}
              >
                <span className="text-xs font-mono text-[#666666]">
                  [PLACEHOLDER: Featured image 0{i + 1}]
                </span>
              </div>

              <div className="p-8 sm:p-10 flex flex-col justify-between flex-grow">
                <div>
                  <div className="text-xs font-mono text-[#666666] mb-2">
                    ARTICLE 0{i + 1}
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#111111] mb-3">
                    {article.title}
                  </h3>
                  <p className="text-[15px] text-[#666666] leading-relaxed">
                    {article.description}
                  </p>
                </div>

                <div className="pt-6 mt-8 border-t border-[#E5E5E5]">
                  <Link
                    href={article.linkHref}
                    className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#111111] hover:text-[#666666] transition-colors"
                  >
                    <span>{article.linkText}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
