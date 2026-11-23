"use client";

import React, { useState } from "react";
import { ArrowUpRight, CheckCircle2, AlertCircle, RefreshCw } from "lucide-react";

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
    projectType: "Full digital platform",
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

      setTimeout(() => {
        setIsLoading(false);
        setIsSuccess(true);
        setSubmittedPayload({ ...formData });
      }, 500);
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      projectType: "Full digital platform",
      budget: "$25,000 - $50,000",
      message: "",
    });
    setErrors({});
    setTouched({});
    setIsSuccess(false);
    setSubmittedPayload(null);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-white border-b border-[#E5E5E5]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Headline and Direct Coordinates */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-[#666666] mb-4">
                05 // Initiate Dialogue
              </div>
              <h2 className="font-serif text-4xl sm:text-6xl font-normal leading-[1.08] tracking-[-0.02em] text-[#171717]">
                Have a good idea?{" "}
                <span className="italic font-normal">Let&apos;s build something great</span>.
              </h2>
            </div>

            <p className="text-[16px] text-[#666666] leading-relaxed font-normal">
              Whether you are preparing a multi-channel digital flagship or defining a new brand architecture, we partner with visionaries ready to lead their category.
            </p>

            <div className="pt-6 border-t border-[#E5E5E5] space-y-4 font-mono text-xs text-[#666666]">
              <div>
                <span className="text-[#999999] block mb-1">Direct Inquiries</span>
                <a
                  href="mailto:hello@formandfunction.agency"
                  className="font-sans text-base text-[#171717] hover:text-[#666666] transition-colors"
                >
                  hello@formandfunction.agency
                </a>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div>
                  <span className="text-[#999999] block mb-1">Zurich Studio</span>
                  <p className="text-[#171717]">Limmatstrasse 214, 8005</p>
                </div>
                <div>
                  <span className="text-[#999999] block mb-1">London Studio</span>
                  <p className="text-[#171717]">42 Redchurch St, E2 7DD</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Form Fields with Thin Borders */}
          <div className="lg:col-span-7">
            <div className="bg-[#F7F7F5] border border-[#E5E5E5] p-8 sm:p-12">
              {isSuccess && submittedPayload ? (
                <div className="space-y-6 py-4 animate-in fade-in duration-200">
                  <div className="w-10 h-10 bg-white border border-[#E5E5E5] text-[#171717] flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  </div>

                  <div>
                    <h3 className="font-serif text-2xl font-normal text-[#171717]">
                      Inquiry Validated
                    </h3>
                    <p className="mt-2 text-[15px] text-[#666666] leading-relaxed">
                      Thank you, <span className="font-medium text-[#171717]">{submittedPayload.name}</span>. Your inquiry payload has been validated client-side.
                    </p>
                  </div>

                  <div className="p-4 bg-white border border-[#E5E5E5] text-xs font-mono space-y-2">
                    <div className="text-[#999999] uppercase tracking-wider text-[10px] pb-2 border-b border-[#E5E5E5]">
                      Client Submission Verification
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#666666]">Email:</span>
                      <span className="text-[#171717]">{submittedPayload.email}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#666666]">Scope:</span>
                      <span className="text-[#171717]">{submittedPayload.projectType}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#666666]">Budget:</span>
                      <span className="text-[#171717]">{submittedPayload.budget}</span>
                    </div>
                  </div>

                  <div className="p-3 bg-white border border-[#E5E5E5] text-xs text-[#666666]">
                    <strong>Note:</strong> Client-side validation active. In accordance with system requirements, no simulated emails were dispatched without an active SMTP server.
                  </div>

                  <button
                    onClick={handleReset}
                    className="inline-flex items-center gap-2 text-xs font-medium bg-[#171717] text-white hover:bg-[#333333] px-5 py-2.5 rounded-[2px] transition-colors cursor-pointer"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>Submit another inquiry</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  <div className="border-b border-[#E5E5E5] pb-3 mb-4">
                    <h3 className="text-base font-medium text-[#171717]">
                      Project Inquiry
                    </h3>
                    <p className="text-xs text-[#666666] mt-1">
                      Fill out the fields below to begin a conversation.
                    </p>
                  </div>

                  {/* Name Input */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-mono uppercase tracking-wider text-[#171717] mb-2 font-normal"
                    >
                      Your name *
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
                      className={`w-full px-4 py-3 bg-white border text-sm text-[#171717] placeholder-[#999999] rounded-[2px] focus:outline-none transition-colors ${
                        touched.name && errors.name
                          ? "border-red-500"
                          : "border-[#E5E5E5] focus:border-[#171717]"
                      }`}
                    />
                    {touched.name && errors.name && (
                      <div className="mt-1.5 flex items-center gap-1.5 text-xs text-red-600">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.name}</span>
                      </div>
                    )}
                  </div>

                  {/* Email Input */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-mono uppercase tracking-wider text-[#171717] mb-2 font-normal"
                    >
                      Work email *
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
                      className={`w-full px-4 py-3 bg-white border text-sm text-[#171717] placeholder-[#999999] rounded-[2px] focus:outline-none transition-colors ${
                        touched.email && errors.email
                          ? "border-red-500"
                          : "border-[#E5E5E5] focus:border-[#171717]"
                      }`}
                    />
                    {touched.email && errors.email && (
                      <div className="mt-1.5 flex items-center gap-1.5 text-xs text-red-600">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.email}</span>
                      </div>
                    )}
                  </div>

                  {/* Selectors */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="projectType"
                        className="block text-xs font-mono uppercase tracking-wider text-[#171717] mb-2 font-normal"
                      >
                        Project scope
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white border border-[#E5E5E5] text-sm text-[#171717] rounded-[2px] focus:outline-none focus:border-[#171717]"
                      >
                        <option value="UI/UX design">UI/UX design</option>
                        <option value="Web development">Web development</option>
                        <option value="Brand identity">Brand identity</option>
                        <option value="Digital strategy">Digital strategy</option>
                        <option value="Full digital platform">Full digital platform</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="budget"
                        className="block text-xs font-mono uppercase tracking-wider text-[#171717] mb-2 font-normal"
                      >
                        Anticipated budget
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white border border-[#E5E5E5] text-sm text-[#171717] rounded-[2px] focus:outline-none focus:border-[#171717]"
                      >
                        <option value="$15,000 - $30,000">$15,000 - $30,000</option>
                        <option value="$30,000 - $60,000">$30,000 - $60,000</option>
                        <option value="$60,000 - $120,000">$60,000 - $120,000</option>
                        <option value="$120,000+">$120,000+</option>
                      </select>
                    </div>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-mono uppercase tracking-wider text-[#171717] mb-2 font-normal"
                    >
                      Project overview *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      onBlur={() => handleBlur("message")}
                      placeholder="Outline your timeline, goals, and any technical constraints..."
                      aria-required="true"
                      aria-invalid={touched.message && !!errors.message}
                      className={`w-full px-4 py-3 bg-white border text-sm text-[#171717] placeholder-[#999999] rounded-[2px] focus:outline-none transition-colors ${
                        touched.message && errors.message
                          ? "border-red-500"
                          : "border-[#E5E5E5] focus:border-[#171717]"
                      }`}
                    />
                    {touched.message && errors.message && (
                      <div className="mt-1.5 flex items-center gap-1.5 text-xs text-red-600">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.message}</span>
                      </div>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div>
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-sm font-medium bg-[#171717] text-white hover:bg-[#333333] px-7 py-3.5 rounded-[2px] transition-colors cursor-pointer disabled:opacity-50"
                    >
                      {isLoading ? (
                        <span>Validating...</span>
                      ) : (
                        <>
                          <span>Submit inquiry</span>
                          <ArrowUpRight className="w-4 h-4" />
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
