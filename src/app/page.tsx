import { About } from "@/components/About";
import { Audience } from "@/components/Audience";
import { EventSection } from "@/components/EventSection";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Navbar } from "@/components/Navbar";
import { Principles } from "@/components/Principles";
import { ValuePillars } from "@/components/ValuePillars";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <ValuePillars />
        <Audience />
        <EventSection />
        <HowItWorks />
        <Principles />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
