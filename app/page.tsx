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
  const [isCaseStudyOpen, setIsCaseStudyOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#FFFFFF] text-[#0A0A0A] flex flex-col font-body">
      {/* STICKY HEADER */}
      <Header onOpenContact={() => setIsContactOpen(true)} />

      <main id="main-content" className="flex-grow">
        {/* HERO SECTION */}
        <Hero onOpenContact={() => setIsContactOpen(true)} />

        {/* FEATURED PROJECT SECTION */}
        <FeaturedProject onSelectProject={() => setIsCaseStudyOpen(true)} />

        {/* SERVICES SECTION */}
        <Services onSelectService={() => setIsContactOpen(true)} />

        {/* CLOSING SECTION */}
        <Closing onOpenContact={() => setIsContactOpen(true)} />
      </main>

      {/* FOOTER */}
      <Footer />

      {/* INTERACTIVE MODALS */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
      <CaseStudyModal
        isOpen={isCaseStudyOpen}
        onClose={() => setIsCaseStudyOpen(false)}
        onOpenContact={() => setIsContactOpen(true)}
      />
    </div>
  );
}
