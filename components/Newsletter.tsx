"use client";

import React, { useState } from "react";
import { CheckCircle2, AlertCircle } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email.trim()) {
      setError("Please enter your email address.");
      return;
    }
    if (!emailRegex.test(email.trim())) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("");
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 350);
  };

  return (
    <section className="py-24 sm:py-32 bg-white border-b border-[#E5E5E5]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-2xl">
          {/* Section Label */}
          <div className="label-meta mb-3">
            STAY IN THE LOOP
          </div>

          <h2 className="section-heading text-[#111111] mb-3">
            Good ideas, delivered occasionally.
          </h2>

          <p className="text-[16px] text-[#666666] leading-relaxed font-normal mb-8">
            Updates and insights on design, technology and digital experiences.
          </p>

          {isSuccess ? (
            <div className="p-6 bg-[#F7F7F5] border border-[#E5E5E5] space-y-2">
              <div className="flex items-center gap-2 text-[14px] font-medium text-[#111111]">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Subscription Placeholder Confirmed</span>
              </div>
              <p className="text-[13px] text-[#666666] leading-relaxed">
                Thank you. Frontend validation verified for <strong>{email}</strong>. (No simulated emails sent without an active newsletter API endpoint).
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (error) setError("");
                  }}
                  placeholder="Enter your email address"
                  aria-label="Email address for newsletter"
                  aria-invalid={!!error}
                  className={`flex-grow px-4 py-3 bg-white border text-[14px] text-[#111111] placeholder-[#999999] rounded-[2px] focus:outline-none transition-colors ${
                    error ? "border-red-500" : "border-[#E5E5E5] focus:border-[#111111]"
                  }`}
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center text-[14px] font-medium bg-[#111111] text-white hover:bg-[#333333] px-6 py-3 rounded-[2px] transition-colors cursor-pointer disabled:opacity-50 shrink-0"
                >
                  {isSubmitting ? "Subscribing..." : "Subscribe"}
                </button>
              </div>

              {error && (
                <div className="flex items-center gap-1.5 text-[12px] text-red-600">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{error}</span>
                </div>
              )}

              <p className="text-[12px] text-[#666666]">
                Privacy policy: No spam. You can unsubscribe at any time.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
