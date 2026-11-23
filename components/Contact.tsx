"use client";

import React, { useState } from "react";
import { ArrowUpRight, Check } from "lucide-react";

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
      errs.message = "Please include your project details.";
    } else if (data.message.trim().length < 10) {
      errs.message = "Project details must be at least 10 characters.";
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
      }, 400);
    }
  };

  const handleReset = () => {
    setFormData({ name: "", email: "", message: "" });
    setErrors({});
    setTouched({});
    setIsSuccess(false);
  };

  return (
    <section id="contact" className="py-[120px] bg-[#F5F5F2] border-b border-[#E4E4DF]">
      <div className="max-w-[1320px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Headings & Intro */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-[12px] uppercase tracking-[0.08em] font-medium text-[#6B6B66] block">
              HAVE A PROJECT IN MIND?
            </span>
            <h2 className="section-title text-[#0A0A0A]">
              Let&apos;s create something meaningful.
            </h2>
            <p className="text-[17px] text-[#6B6B66] leading-relaxed max-w-md">
              Have an idea, a project or a challenge? We&apos;d love to hear about it. Tell us what you&apos;re thinking.
            </p>
            <div className="pt-8 border-t border-[#E4E4DF]">
              <p className="font-heading text-[22px] font-semibold text-[#0A0A0A] uppercase tracking-tight">
                Good ideas deserve thoughtful execution.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-12 border border-[#E4E4DF]">
            {isSuccess ? (
              <div className="py-12 text-center space-y-5 bg-[#F5F5F2] p-8 border border-[#E4E4DF]">
                <div className="w-12 h-12 mx-auto border border-[#0A0A0A] bg-white flex items-center justify-center text-[#0A0A0A]">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-[28px] uppercase text-[#0A0A0A]">
                  Thank you, {formData.name}
                </h3>
                <p className="text-[16px] text-[#6B6B66] max-w-md mx-auto">
                  Your project message has been logged. We will review your requirements and respond within one business day.
                </p>
                <div className="pt-4">
                  <button onClick={handleReset} className="btn-solid">
                    Send another inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-[13px] uppercase tracking-wider text-[#0A0A0A] font-semibold mb-2">
                    Your Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={() => handleBlur("name")}
                    placeholder="Jane Doe"
                    className={`w-full h-[52px] px-4 text-[16px] bg-[#F5F5F2] border transition-colors focus:outline-none ${
                      touched.name && errors.name
                        ? "border-red-600 focus:border-red-600"
                        : "border-[#E4E4DF] focus:border-[#0A0A0A]"
                    }`}
                  />
                  {touched.name && errors.name && (
                    <p className="text-[12px] text-red-600 mt-1.5">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-[13px] uppercase tracking-wider text-[#0A0A0A] font-semibold mb-2">
                    Your Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={() => handleBlur("email")}
                    placeholder="jane@company.com"
                    className={`w-full h-[52px] px-4 text-[16px] bg-[#F5F5F2] border transition-colors focus:outline-none ${
                      touched.email && errors.email
                        ? "border-red-600 focus:border-red-600"
                        : "border-[#E4E4DF] focus:border-[#0A0A0A]"
                    }`}
                  />
                  {touched.email && errors.email && (
                    <p className="text-[12px] text-red-600 mt-1.5">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-[13px] uppercase tracking-wider text-[#0A0A0A] font-semibold mb-2">
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={() => handleBlur("message")}
                    placeholder="Tell us about your brand goals, target timeline, and key requirements..."
                    className={`w-full p-4 text-[16px] bg-[#F5F5F2] border transition-colors focus:outline-none resize-none ${
                      touched.message && errors.message
                        ? "border-red-600 focus:border-red-600"
                        : "border-[#E4E4DF] focus:border-[#0A0A0A]"
                    }`}
                  />
                  {touched.message && errors.message && (
                    <p className="text-[12px] text-red-600 mt-1.5">{errors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="btn-solid w-full cursor-pointer disabled:opacity-50"
                >
                  <span>{isLoading ? "Validating..." : "Send Message"}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
