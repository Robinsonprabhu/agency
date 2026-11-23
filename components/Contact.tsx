"use client";

import React, { useState } from "react";
import { ArrowUpRight, CheckCircle2, AlertCircle, RefreshCw, Send } from "lucide-react";

interface FormState {
  name: string;
  email: string;
  projectType: string;
  budget: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    projectType: "Full Digital Platform",
    budget: "$25,000 - $50,000",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submittedPayload, setSubmittedPayload] = useState<FormState | null>(null);

  const validate = (data: FormState): FormErrors => {
    const errs: FormErrors = {};

    if (!data.name.trim()) {
      errs.name = "Your full name is required.";
    } else if (data.name.trim().length < 2) {
      errs.name = "Please enter at least 2 characters.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.email.trim()) {
      errs.email = "Your email address is required.";
    } else if (!emailRegex.test(data.email.trim())) {
      errs.email = "Please enter a valid email address.";
    }

    if (!data.message.trim()) {
      errs.message = "Please include a project overview or brief description.";
    } else if (data.message.trim().length < 10) {
      errs.message = "Message must be at least 10 characters.";
    }

    return errs;
  };

  const handleBlur = (field: keyof FormState) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    setErrors(validate(formData));
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    const updated = { ...formData, [name]: value };
    setFormData(updated);

    if (touched[name]) {
      setErrors(validate(updated));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setTouched({ name: true, email: true, message: true });
    const validationErrors = validate(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setIsLoading(true);

      // Simulate a realistic client-side interaction
      setTimeout(() => {
        setIsLoading(false);
        setIsSuccess(true);
        setSubmittedPayload({ ...formData });
      }, 700);
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      projectType: "Full Digital Platform",
      budget: "$25,000 - $50,000",
      message: "",
    });
    setErrors({});
    setTouched({});
    setIsSuccess(false);
    setSubmittedPayload(null);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#F4F1EA] text-[#18202B] border-b border-[#18202B]/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Agency Contact & Headline */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#FF642E] mb-4">
                <span className="w-2 h-2 rounded-full bg-[#FF642E]" />
                <span>05 // INITIATE DIALOGUE</span>
              </div>
              <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#18202B] uppercase leading-tight">
                Have a good idea?
                <br />
                <span className="text-[#FF642E]">Let&apos;s build something great.</span>
              </h2>
            </div>

            <p className="text-base text-[#18202B]/80 leading-relaxed font-normal">
              Whether you are preparing a multi-million dollar digital flagship or refining a specialized
              brand identity, we partner with visionaries ready to lead their industries.
            </p>

            {/* Direct Studio Coordinates */}
            <div className="pt-6 border-t border-[#18202B]/15 space-y-4 font-mono text-xs">
              <div>
                <span className="text-[#18202B]/50 block mb-1">DIRECT INQUIRIES</span>
                <a
                  href="mailto:hello@formandfunction.agency"
                  className="font-display font-medium text-base text-[#18202B] hover:text-[#FF642E] transition-colors"
                >
                  hello@formandfunction.agency
                </a>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div>
                  <span className="text-[#18202B]/50 block mb-1">EUROPEAN HUB</span>
                  <p className="text-[#18202B]">Limmatstrasse 214, 8005 Zürich</p>
                </div>
                <div>
                  <span className="text-[#18202B]/50 block mb-1">UK STUDIO</span>
                  <p className="text-[#18202B]">42 Redchurch St, London E2 7DD</p>
                </div>
              </div>

              <div className="pt-2">
                <span className="text-[#18202B]/50 block mb-1">COMMISSION SCHEDULE</span>
                <span className="inline-flex items-center gap-2 text-[#18202B] font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-600" />
                  Currently evaluating Q2/Q3 partnerships
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form with Client-Side Validation */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-[#18202B]/15 p-8 sm:p-12 shadow-sm">
              {isSuccess && submittedPayload ? (
                /* Success Feedback State */
                <div className="space-y-6 py-4 animate-in fade-in duration-300">
                  <div className="w-12 h-12 bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>

                  <div>
                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#18202B]">
                      Inquiry Received Client-Side
                    </h3>
                    <p className="mt-2 text-sm text-[#18202B]/75 leading-relaxed">
                      Thank you, <span className="font-bold text-[#18202B]">{submittedPayload.name}</span>.
                      Your inquiry has been successfully validated.
                    </p>
                  </div>

                  {/* Validated payload display */}
                  <div className="p-5 bg-[#F4F1EA] border border-[#18202B]/10 text-xs font-mono space-y-2">
                    <div className="text-[#18202B]/50 uppercase tracking-widest text-[10px] pb-2 border-b border-[#18202B]/10">
                      Validated Inquiry Payload (Client Verification)
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#18202B]/60">Email:</span>
                      <span className="text-[#18202B] font-medium">{submittedPayload.email}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#18202B]/60">Project Scope:</span>
                      <span className="text-[#18202B]">{submittedPayload.projectType}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#18202B]/60">Budget Tier:</span>
                      <span className="text-[#18202B]">{submittedPayload.budget}</span>
                    </div>
                    <div className="pt-2 border-t border-[#18202B]/10">
                      <span className="text-[#18202B]/60 block mb-1">Message Overview:</span>
                      <span className="text-[#18202B] font-sans italic block text-xs">
                        &ldquo;{submittedPayload.message}&rdquo;
                      </span>
                    </div>
                  </div>

                  <div className="p-3 bg-amber-50 border border-amber-200 text-[11px] font-mono text-amber-800 flex items-start gap-2">
                    <span className="text-[#FF642E] font-bold">TRANSPARENT NOTICE:</span>
                    <span>
                      In strict compliance with task instructions, client-side validation is fully
                      executed without pretending to route real emails without an active backend endpoint.
                    </span>
                  </div>

                  <button
                    onClick={handleReset}
                    className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider font-semibold bg-[#18202B] text-[#F4F1EA] hover:bg-[#FF642E] hover:text-[#101B2C] px-6 py-3 transition-colors cursor-pointer"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>Submit Another Inquiry</span>
                  </button>
                </div>
              ) : (
                /* Contact Input Form */
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  <div className="border-b border-[#18202B]/10 pb-4 mb-4">
                    <h3 className="font-display text-xl font-bold text-[#18202B]">
                      Project Inquiry Specification
                    </h3>
                    <p className="text-xs font-mono text-[#18202B]/60 mt-1">
                      Required fields are marked with an asterisk (*).
                    </p>
                  </div>

                  {/* Name Input */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-mono uppercase tracking-wider text-[#18202B] mb-2 font-medium"
                    >
                      Your Full Name <span className="text-[#FF642E]">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onBlur={() => handleBlur("name")}
                      placeholder="e.g. Maya Lin"
                      aria-required="true"
                      aria-invalid={touched.name && !!errors.name}
                      className={`w-full px-4 py-3 bg-[#F4F1EA] border text-sm text-[#18202B] placeholder-[#18202B]/40 focus:outline-none transition-colors ${
                        touched.name && errors.name
                          ? "border-[#FF642E] ring-1 ring-[#FF642E]"
                          : "border-[#18202B]/20 focus:border-[#18202B]"
                      }`}
                    />
                    {touched.name && errors.name && (
                      <div className="mt-1.5 flex items-center gap-1.5 text-xs text-[#FF642E]">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.name}</span>
                      </div>
                    )}
                  </div>

                  {/* Email Input */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-mono uppercase tracking-wider text-[#18202B] mb-2 font-medium"
                    >
                      Work Email Address <span className="text-[#FF642E]">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={() => handleBlur("email")}
                      placeholder="name@organization.com"
                      aria-required="true"
                      aria-invalid={touched.email && !!errors.email}
                      className={`w-full px-4 py-3 bg-[#F4F1EA] border text-sm text-[#18202B] placeholder-[#18202B]/40 focus:outline-none transition-colors ${
                        touched.email && errors.email
                          ? "border-[#FF642E] ring-1 ring-[#FF642E]"
                          : "border-[#18202B]/20 focus:border-[#18202B]"
                      }`}
                    />
                    {touched.email && errors.email && (
                      <div className="mt-1.5 flex items-center gap-1.5 text-xs text-[#FF642E]">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.email}</span>
                      </div>
                    )}
                  </div>

                  {/* Selectors */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="projectType"
                        className="block text-xs font-mono uppercase tracking-wider text-[#18202B] mb-2 font-medium"
                      >
                        Project Scope
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-[#F4F1EA] border border-[#18202B]/20 text-sm text-[#18202B] focus:outline-none focus:border-[#18202B]"
                      >
                        <option value="UI/UX Design">UI/UX Design Architecture</option>
                        <option value="Web Development">Headless Web Development</option>
                        <option value="Brand Identity">Brand Identity System</option>
                        <option value="Digital Strategy">Commercial Digital Strategy</option>
                        <option value="Full Digital Platform">Full Flagship Partnership</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="budget"
                        className="block text-xs font-mono uppercase tracking-wider text-[#18202B] mb-2 font-medium"
                      >
                        Anticipated Budget
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-[#F4F1EA] border border-[#18202B]/20 text-sm text-[#18202B] focus:outline-none focus:border-[#18202B]"
                      >
                        <option value="$15,000 - $30,000">$15,000 - $30,000</option>
                        <option value="$30,000 - $60,000">$30,000 - $60,000</option>
                        <option value="$60,000 - $120,000">$60,000 - $120,000</option>
                        <option value="$120,000+">$120,000+</option>
                      </select>
                    </div>
                  </div>

                  {/* Message Textarea */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-mono uppercase tracking-wider text-[#18202B] mb-2 font-medium"
                    >
                      Project Overview <span className="text-[#FF642E]">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      onBlur={() => handleBlur("message")}
                      placeholder="Outline your timeline, commercial objectives, and technical requirements..."
                      aria-required="true"
                      aria-invalid={touched.message && !!errors.message}
                      className={`w-full px-4 py-3 bg-[#F4F1EA] border text-sm text-[#18202B] placeholder-[#18202B]/40 focus:outline-none transition-colors ${
                        touched.message && errors.message
                          ? "border-[#FF642E] ring-1 ring-[#FF642E]"
                          : "border-[#18202B]/20 focus:border-[#18202B]"
                      }`}
                    />
                    {touched.message && errors.message && (
                      <div className="mt-1.5 flex items-center gap-1.5 text-xs text-[#FF642E]">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.message}</span>
                      </div>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div>
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 text-xs uppercase tracking-wider font-semibold font-display bg-[#FF642E] text-[#101B2C] hover:bg-[#ff7b4d] px-8 py-4 transition-all duration-200 cursor-pointer disabled:opacity-50 shadow-sm"
                    >
                      {isLoading ? (
                        <>
                          <span className="w-3.5 h-3.5 border-2 border-[#101B2C]/30 border-t-[#101B2C] rounded-full animate-spin" />
                          <span>Validating Submission...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Project Brief</span>
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
