import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Section } from "@/components/ui/Section";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Privacy | The Ambition Room",
  description:
    "How The Ambition Room collects and uses information from membership applications and website visitors.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main id="main" className="pt-20 sm:pt-24">
        <Section className="max-w-3xl pb-24 pt-12 sm:pt-16">
          <p className="eyebrow mb-5">Legal</p>
          <h1 className="font-display text-4xl text-ivory uppercase sm:text-5xl">
            Privacy
          </h1>
          <div className="mt-10 space-y-8 text-[1.02rem] leading-relaxed text-[color:var(--body)]">
            <p>
              The Ambition Room collects personal and professional information
              when you submit a membership application or contact us.
            </p>
            <div>
              <h2 className="font-display text-xl text-ivory">What we collect</h2>
              <p className="mt-3">
                Name, email, optional phone, LinkedIn profile, company, role, and
                the information you choose to share about your work and interest
                in the community.
              </p>
            </div>
            <div>
              <h2 className="font-display text-xl text-ivory">How we use it</h2>
              <p className="mt-3">
                To review membership applications and communicate with you about
                The Ambition Room. We do not sell your information.
              </p>
            </div>
            <div>
              <h2 className="font-display text-xl text-ivory">
                Event registration
              </h2>
              <p className="mt-3">
                Halifax #001 registration is completed through Eventbrite. Their
                privacy practices apply to information you provide on their
                platform.
              </p>
            </div>
            <div>
              <h2 className="font-display text-xl text-ivory">Contact</h2>
              <p className="mt-3">
                Questions about your information:{" "}
                <a
                  href={`mailto:${siteConfig.social.contactEmail}`}
                  className="text-gold hover:underline"
                >
                  {siteConfig.social.contactEmail}
                </a>
              </p>
            </div>
            <p className="pt-4 text-sm text-muted">
              <Link href="/" className="text-gold hover:underline">
                Return home
              </Link>
            </p>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
