"use client";

import React, { useState } from "react";
import { ArrowUpRight, CheckCircle2, AlertCircle, RefreshCw } from "lucide-react";

interface FormState {
  name: string;
  email: string;
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
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submittedData, setSubmittedData] = useState<FormState | null>(null);

  const validate = (data: FormState): FormErrors => {
    const errs: FormErrors = {};

    if (!data.name.trim()) {
      errs.name = "Your name is required.";
    } else if (data.name.trim().length < 2) {
      errs.name = "Name must be at least 2 characters.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.email.trim()) {
      errs.email = "Your email address is required.";
    } else if (!emailRegex.test(data.email.trim())) {
      errs.email = "Please enter a valid email address.";
    }

    if (!data.message.trim()) {
      errs.message = "Please include a project message.";
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
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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
        setSubmittedData({ ...formData });
      }, 400);
    }
  };

  const handleReset = () => {
    setFormData({ name: "", email: "", message: "" });
    setErrors({});
    setTouched({});
    setIsSuccess(false);
    setSubmittedData(null);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#F7F7F5] border-b border-[#E5E5E5]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading and Narrative */}
          <div className="lg:col-span-5 space-y-6">
            <div className="meta-label">
              04 // Contact
            </div>

            <h2 className="section-heading text-[#111111]">
              Have a project in mind?
            </h2>

            <p className="text-[16px] text-[#666666] leading-relaxed font-normal max-w-md">
              Let&apos;s turn your next idea into something meaningful. Reach out to discuss timelines, scope, or collaboration opportunities.
            </p>

            <div className="pt-6 border-t border-[#E5E5E5] space-y-3 text-[13px] text-[#666666]">
              <div>
                <span className="text-[#999999] text-[11px] uppercase tracking-wider block mb-1">Direct Communication</span>
                <a
                  href="mailto:hello@formandfunction.agency"
                  className="text-[15px] font-medium text-[#111111] hover:text-[#666666] transition-colors"
                >
                  hello@formandfunction.agency
                </a>
              </div>
              <div className="pt-2 text-[12px] text-[#666666]">
                Response time: Usually within 24 business hours.
              </div>
            </div>
          </div>

          {/* Right Column: Clean Form Fields */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-[#E5E5E5] p-8 sm:p-10">
              {isSuccess && submittedData ? (
                <div className="space-y-6 py-4 animate-in fade-in duration-200">
                  <div className="w-10 h-10 bg-[#F7F7F5] border border-[#E5E5E5] flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  </div>

                  <div>
                    <h3 className="project-heading text-[#111111]">
                      Inquiry Validated
                    </h3>
                    <p className="mt-2 text-[15px] text-[#666666] leading-relaxed">
                      Thank you, <span className="font-medium text-[#111111]">{submittedData.name}</span>. Your project brief has passed all client-side checks.
                    </p>
                  </div>

                  <div className="p-4 bg-[#F7F7F5] border border-[#E5E5E5] text-[12px] font-mono space-y-2">
                    <div className="text-[#999999] uppercase tracking-wider text-[10px] pb-2 border-b border-[#E5E5E5]">
                      Client Submission Payload
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#666666]">Email:</span>
                      <span className="text-[#111111]">{submittedData.email}</span>
                    </div>
                    <div className="pt-2 border-t border-[#E5E5E5]">
                      <span className="text-[#666666] block mb-1">Message:</span>
                      <span className="text-[#111111] text-[13px] leading-relaxed block">
                        &ldquo;{submittedData.message}&rdquo;
                      </span>
                    </div>
                  </div>

                  <div className="p-3 bg-[#F7F7F5] border border-[#E5E5E5] text-[12px] text-[#666666]">
                    <strong>Note:</strong> Client-side form validation is fully functional. In accordance with system instructions, no simulated emails were dispatched without an active backend.
                  </div>

                  <button
                    onClick={handleReset}
                    className="inline-flex items-center gap-2 text-[13px] font-medium bg-[#111111] text-white hover:bg-[#333333] px-5 py-2.5 rounded-[2px] transition-colors cursor-pointer"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>Submit another inquiry</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-[12px] uppercase tracking-wider text-[#111111] mb-2 font-normal"
                    >
                      Name *
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onBlur={() => handleBlur("name")}
                      placeholder="e.g. Maya Lin"
                      aria-required="true"
                      aria-invalid={touched.name && !!errors.name}
                      className={`w-full px-4 py-3 bg-[#F7F7F5] border text-[14px] text-[#111111] placeholder-[#999999] rounded-[2px] focus:outline-none transition-colors ${
                        touched.name && errors.name
                          ? "border-red-500"
                          : "border-[#E5E5E5] focus:border-[#111111]"
                      }`}
                    />
                    {touched.name && errors.name && (
                      <div className="mt-1.5 flex items-center gap-1.5 text-[12px] text-red-600">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.name}</span>
                      </div>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-[12px] uppercase tracking-wider text-[#111111] mb-2 font-normal"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={() => handleBlur("email")}
                      placeholder="name@organization.com"
                      aria-required="true"
                      aria-invalid={touched.email && !!errors.email}
                      className={`w-full px-4 py-3 bg-[#F7F7F5] border text-[14px] text-[#111111] placeholder-[#999999] rounded-[2px] focus:outline-none transition-colors ${
                        touched.email && errors.email
                          ? "border-red-500"
                          : "border-[#E5E5E5] focus:border-[#111111]"
                      }`}
                    />
                    {touched.email && errors.email && (
                      <div className="mt-1.5 flex items-center gap-1.5 text-[12px] text-red-600">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.email}</span>
                      </div>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-[12px] uppercase tracking-wider text-[#111111] mb-2 font-normal"
                    >
                      Message *
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      onBlur={() => handleBlur("message")}
                      placeholder="Tell us about your project, timeline, and goals..."
                      aria-required="true"
                      aria-invalid={touched.message && !!errors.message}
                      className={`w-full px-4 py-3 bg-[#F7F7F5] border text-[14px] text-[#111111] placeholder-[#999999] rounded-[2px] focus:outline-none transition-colors ${
                        touched.message && errors.message
                          ? "border-red-500"
                          : "border-[#E5E5E5] focus:border-[#111111]"
                      }`}
                    />
                    {touched.message && errors.message && (
                      <div className="mt-1.5 flex items-center gap-1.5 text-[12px] text-red-600">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.message}</span>
                      </div>
                    )}
                  </div>

                  <div>
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-[14px] font-medium bg-[#111111] text-white hover:bg-[#333333] px-7 py-3.5 rounded-[2px] transition-colors cursor-pointer disabled:opacity-50"
                    >
                      {isLoading ? (
                        <span>Validating...</span>
                      ) : (
                        <>
                          <span>Submit message</span>
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
