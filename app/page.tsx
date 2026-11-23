import Header from "@/components/Header";
import Hero from "@/components/Hero";
import IntroTeam from "@/components/IntroTeam";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Products from "@/components/Products";
import Blog from "@/components/Blog";
import Podcast from "@/components/Podcast";
import Newsletter from "@/components/Newsletter";
import ClosingCTA from "@/components/ClosingCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white text-[#111111] flex flex-col font-sans">
      {/* 01. HEADER */}
      <Header />

      <main id="main-content" className="flex-grow">
        {/* 02. HERO */}
        <Hero />

        {/* 03. INTRODUCTION / TEAM */}
        <IntroTeam />

        {/* 04. SELECTED WORK */}
        <Portfolio />

        {/* 05. SERVICES */}
        <Services />

        {/* 06. TESTIMONIALS */}
        <Testimonials />

        {/* 07. PRODUCTS */}
        <Products />

        {/* 08. BLOG */}
        <Blog />

        {/* 09. PODCAST */}
        <Podcast />

        {/* 10. NEWSLETTER */}
        <Newsletter />

        {/* 11. CLOSING CTA */}
        <ClosingCTA />
      </main>

      {/* 12. FOOTER */}
      <Footer />
    </div>
  );
}
