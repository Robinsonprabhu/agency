"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedProject from "@/components/FeaturedProject";
import Services from "@/components/Services";
import Closing from "@/components/Closing";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import CaseStudyModal from "@/components/CaseStudyModal";

export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [contactTopic, setContactTopic] = useState<string | undefined>(undefined);
  const [isCaseStudyOpen, setIsCaseStudyOpen] = useState(false);

  const openContactWithTopic = (topic?: string) => {
    setContactTopic(topic);
    setIsContactOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-[#FFFFFF] text-[#0A0A0A] flex flex-col font-body">
      {/* STICKY HEADER */}
      <Header onOpenContact={() => openContactWithTopic(undefined)} />

      <main id="main-content" className="flex-grow">
        {/* HERO SECTION */}
        <Hero onOpenContact={() => openContactWithTopic("General Inquiries")} />

        {/* FEATURED PROJECT SECTION */}
        <FeaturedProject onSelectProject={() => setIsCaseStudyOpen(true)} />

        {/* SERVICES SECTION */}
        <Services onSelectService={(service) => openContactWithTopic(service.title)} />

        {/* CLOSING SECTION */}
        <Closing onOpenContact={(topic) => openContactWithTopic(topic)} />
      </main>

      {/* FOOTER */}
      <Footer />

      {/* INTERACTIVE MODALS */}
      <ContactModal
        isOpen={isContactOpen}
        presetTopic={contactTopic}
        onClose={() => {
          setIsContactOpen(false);
          setContactTopic(undefined);
        }}
      />
      <CaseStudyModal
        isOpen={isCaseStudyOpen}
        onClose={() => setIsCaseStudyOpen(false)}
        onOpenContact={() => openContactWithTopic("Vahlen Atelier Flagship Scope")}
      />
    </div>
  );
}
