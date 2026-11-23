import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ClientStrip from "@/components/ClientStrip";
import About from "@/components/About";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#101B2C] text-[#F4F1EA] flex flex-col font-sans">
      {/* 4. Refined Navigation Bar */}
      <Header />

      <main id="main-content" className="flex-grow">
        {/* 5. Hero Section */}
        <Hero />

        {/* 6. Client Trust Section (Fictional Partner Strip) */}
        <ClientStrip />

        {/* 7. About Section (Light Section Background: #F4F1EA with Dark Text: #18202B) */}
        <About />

        {/* 8. Services Section (What we bring to the table - 4 Services) */}
        <Services />

        {/* 9. Selected Work / Portfolio (Selected work. Real impact - 4 Projects) */}
        <Portfolio />

        {/* 10. Contact Section (Light Section Background: #F4F1EA with Dark Text: #18202B) */}
        <Contact />
      </main>

      {/* 11. Footer */}
      <Footer />
    </div>
  );
}
