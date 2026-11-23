"use client";

import React, { useState } from "react";
import { X, ArrowUpRight, Check } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  presetTopic?: string;
}

export default function ContactModal({ isOpen, onClose, presetTopic }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: presetTopic ? `We would like to commission FORM & FUNCTION for: ${presetTopic}. ` : "",
  });

  React.useEffect(() => {
    if (presetTopic) {
      setFormData((prev) => ({
        ...prev,
        message: `We would like to commission FORM & FUNCTION for: ${presetTopic}. `,
      }));
    }
  }, [presetTopic]);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = "Name is required.";
    if (!formData.email.trim()) {
      errs.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Valid email is required.";
    }
    if (!formData.message.trim()) {
      errs.message = "Message is required.";
    } else if (formData.message.trim().length < 10) {
      errs.message = "Message must be at least 10 characters.";
    }
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setIsSubmitted(true);
    }
  };

  const handleReset = () => {
    setFormData({ name: "", email: "", message: "" });
    setErrors({});
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/40 backdrop-blur-xs">
      <div className="relative w-full max-w-[620px] bg-white border border-[#0A0A0A] p-8 sm:p-12 text-[#0A0A0A]">
        {/* Close Button */}
        <button
          onClick={handleReset}
          className="absolute top-6 right-6 p-2 text-[#6B6B66] hover:text-[#0A0A0A] transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-8">
          <span className="text-[12px] uppercase tracking-[0.08em] font-medium text-[#6B6B66] block mb-2">
            Initiate Engagement
          </span>
          <h2 className="row-title text-[#0A0A0A]">
            Start a conversation
          </h2>
          <p className="mt-2 text-[15px] text-[#6B6B66]">
            Tell us about your brand, project timeline, and key requirements.
          </p>
        </div>

        {isSubmitted ? (
          <div className="py-8 text-center space-y-4 bg-[#F5F5F2] p-8 border border-[#E4E4DF]">
            <div className="w-10 h-10 mx-auto border border-[#0A0A0A] flex items-center justify-center text-[#0A0A0A]">
              <Check className="w-5 h-5" />
            </div>
            <h3 className="font-heading text-[24px] uppercase text-[#0A0A0A]">
              Message Received
            </h3>
            <p className="text-[15px] text-[#6B6B66] max-w-sm mx-auto">
              Thank you, {formData.name}. We have logged your inquiry and our partners will reply within one business day.
            </p>
            <button onClick={handleReset} className="btn-solid !h-[44px] !px-6 text-[14px] mt-4">
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-[13px] uppercase tracking-wider text-[#6B6B66] mb-2 font-medium">
                Your Name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Charlotte Lin"
                className="w-full h-[50px] px-4 text-[15px] bg-[#F5F5F2] border border-[#E4E4DF] focus:border-[#0A0A0A] focus:outline-none transition-colors"
              />
              {errors.name && <p className="text-[12px] text-red-600 mt-1">{errors.name}</p>}
            </div>

            <div>
              <label className="block text-[13px] uppercase tracking-wider text-[#6B6B66] mb-2 font-medium">
                Email Address
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="charlotte@atelier.com"
                className="w-full h-[50px] px-4 text-[15px] bg-[#F5F5F2] border border-[#E4E4DF] focus:border-[#0A0A0A] focus:outline-none transition-colors"
              />
              {errors.email && <p className="text-[12px] text-red-600 mt-1">{errors.email}</p>}
            </div>

            <div>
              <label className="block text-[13px] uppercase tracking-wider text-[#6B6B66] mb-2 font-medium">
                Project Scope &amp; Details
              </label>
              <textarea
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Provide context regarding your brand identity, product scope, and ideal launch dates..."
                className="w-full p-4 text-[15px] bg-[#F5F5F2] border border-[#E4E4DF] focus:border-[#0A0A0A] focus:outline-none transition-colors resize-none"
              />
              {errors.message && <p className="text-[12px] text-red-600 mt-1">{errors.message}</p>}
            </div>

            <button type="submit" className="btn-solid w-full cursor-pointer">
              <span>Send Message</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

