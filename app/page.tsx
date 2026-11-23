import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white text-[#111111] flex flex-col font-sans">
      {/* HEADER */}
      <Header />

      <main id="main-content" className="flex-grow">
        {/* SECTION 01 — HERO */}
        <Hero />

        {/* SECTION 02 — SERVICES */}
        <Services />

        {/* SECTION 03 — PORTFOLIO */}
        <Portfolio />

        {/* SECTION 04 — CONTACT */}
        <Contact />
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
