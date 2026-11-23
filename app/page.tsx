"use client";

import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#FFFFFF] text-[#0A0A0A] flex flex-col font-body">
      {/* HEADER */}
      <Header onOpenContact={scrollToContact} />

      <main id="main-content" className="flex-grow">
        {/* 1. HERO */}
        <Hero onOpenContact={scrollToContact} />

        {/* 2. SERVICES */}
        <Services onSelectService={() => scrollToContact()} />

        {/* 3. PORTFOLIO */}
        <Portfolio />

        {/* 4. CONTACT */}
        <Contact />
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
