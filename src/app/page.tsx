import { About } from "@/components/About";
import { Audience } from "@/components/Audience";
import { EventSection } from "@/components/EventSection";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { FoundersTeaser } from "@/components/FoundersTeaser";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Principles } from "@/components/Principles";
import { TheStandard } from "@/components/TheStandard";
import { ValuePillars } from "@/components/ValuePillars";
import { VenueSponsorBand } from "@/components/VenueSponsorBand";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <VenueSponsorBand />
        <About />
        <TheStandard />
        <ValuePillars />
        <Audience />
        <EventSection />
        <FoundersTeaser />
        <Principles />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
