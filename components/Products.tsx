"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PRODUCTS } from "@/data/content";

export default function Products() {
  return (
    <section id="products" className="py-24 sm:py-32 bg-[#F7F7F5] border-b border-[#E5E5E5]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20 pb-8 border-b border-[#E5E5E5]">
          <div>
            <div className="label-meta mb-3">
              07 // Products
            </div>
            <h2 className="section-heading text-[#111111]">
              Things we&apos;re building.
            </h2>
          </div>
          <div className="mt-6 md:mt-0">
            <Link
              href="#products"
              className="inline-flex items-center gap-1.5 text-[14px] font-medium text-[#111111] hover:text-[#666666] border-b border-[#111111] pb-0.5 transition-colors"
            >
              <span>All products</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Three Editorial Product Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PRODUCTS.map((product, i) => (
            <div
              key={product.id}
              className="bg-white border border-[#E5E5E5] p-8 sm:p-10 flex flex-col justify-between"
            >
              <div>
                <span className="text-[12px] text-[#666666] block mb-3 font-mono">
                  0{i + 1} //
                </span>
                <h3 className="card-heading text-[#111111] mb-2.5">
                  {product.title}
                </h3>
                <p className="text-[15px] text-[#666666] leading-relaxed">
                  {product.description}
                </p>
              </div>

              <div className="pt-6 mt-8 border-t border-[#E5E5E5]">
                <Link
                  href={product.linkHref}
                  className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[#111111] hover:text-[#666666] transition-colors"
                >
                  <span>{product.linkText}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
