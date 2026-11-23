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
    <div className="relative min-h-screen bg-white text-[#171717] flex flex-col font-sans">
      <Header />
      <main id="main-content" className="flex-grow">
        <Hero />
        <ClientStrip />
        <About />
        <Services />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
