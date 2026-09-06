import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import {
  MembershipApplyButton,
  ReserveEventButton,
} from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "The Ambition Room Membership | Apply to Join",
  description:
    "Membership in The Ambition Room is application-based and intentionally selective. Apply to join a private community for entrepreneurs and ambitious professionals.",
  alternates: { canonical: "/membership" },
};

const criteria = [
  { title: "Ambition", body: "Serious about what you are building or becoming." },
  { title: "Substance", body: "Thoughtful work, not empty performance." },
  { title: "Intent", body: "Curious about people, not only outcomes." },
  {
    title: "Contribution",
    body: "Able to strengthen the room for everyone already inside it.",
  },
] as const;

export default function MembershipPage() {
  return (
    <>
      <Navbar />
      <main id="main" className="pt-20 sm:pt-24">
        <Section className="pb-20 pt-12 sm:pb-28 sm:pt-16">
          <Reveal>
            <p className="eyebrow mb-5">Membership</p>
            <h1 className="max-w-3xl font-display text-[clamp(2.5rem,7vw,4.5rem)] leading-[1.02] tracking-[0.03em] text-ivory uppercase">
              The Room Beyond the Event.
            </h1>
            <p className="mt-8 max-w-2xl text-[1.08rem] leading-relaxed text-[color:var(--body)]">
              The Ambition Room is larger than any single gathering. Membership
              is for people who want to become part of the community itself —
              not simply attend one event.
            </p>
            <p className="mt-5 max-w-2xl text-[1.02rem] leading-relaxed text-muted">
              Membership is application-based and intentionally selective.
            </p>
            <div className="mt-10">
              <MembershipApplyButton placement="membership" />
            </div>
          </Reveal>
        </Section>

        <Section className="border-y border-[var(--border)] bg-surface py-20 sm:py-28">
          <Reveal>
            <h2 className="font-display text-[clamp(1.85rem,4vw,2.75rem)] text-ivory">
              What we look for
            </h2>
            <p className="mt-6 max-w-2xl text-[1.02rem] leading-relaxed text-[color:var(--body)]">
              We are interested in people who are actively building, leading,
              creating, improving or contributing — and who understand that the
              value of a community is created by what its members bring into it.
            </p>
            <ul className="mt-12 grid gap-8 sm:grid-cols-2">
              {criteria.map((item) => (
                <li key={item.title} className="border-l border-gold/30 pl-5">
                  <h3 className="font-display text-xl tracking-wide text-ivory uppercase">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[0.98rem] text-muted">{item.body}</p>
                </li>
              ))}
            </ul>
            <p className="mt-12 font-display text-xl text-ivory/85 sm:text-2xl">
              Membership should strengthen the room for everyone already inside
              it.
            </p>
          </Reveal>
        </Section>

        <Section className="py-20 sm:py-28">
          <Reveal>
            <h2 className="font-display text-[clamp(1.85rem,4vw,2.75rem)] text-ivory">
              How membership works
            </h2>
            <ol className="mt-10 grid gap-10 md:grid-cols-3">
              {[
                {
                  n: "01",
                  t: "Apply",
                  b: "Share who you are, what you're building, and why the room matters to you.",
                },
                {
                  n: "02",
                  t: "Consider",
                  b: "Applications are reviewed individually. Submitting does not guarantee admission.",
                },
                {
                  n: "03",
                  t: "Enter",
                  b: "If there is a strong fit, we'll be in touch with the next step.",
                },
              ].map((step) => (
                <li key={step.n}>
                  <p className="font-display text-4xl text-gold/25">{step.n}</p>
                  <h3 className="mt-3 font-display text-2xl tracking-wide text-ivory uppercase">
                    {step.t}
                  </h3>
                  <p className="mt-4 text-[0.98rem] leading-relaxed text-[color:var(--body)]">
                    {step.b}
                  </p>
                </li>
              ))}
            </ol>
            <div className="mt-14">
              <MembershipApplyButton placement="membership" />
            </div>
          </Reveal>
        </Section>

        <Section className="border-t border-[var(--border)] bg-elevated py-16 sm:py-20">
          <Reveal>
            <p className="eyebrow mb-4">Looking for Halifax #001?</p>
            <p className="max-w-xl text-[1.02rem] leading-relaxed text-[color:var(--body)]">
              Founding guest registration does not require a membership
              application. Attendance does not make you a member.
            </p>
            <div className="mt-8">
              <ReserveEventButton placement="membership" variant="outline">
                Reserve Halifax #001
              </ReserveEventButton>
            </div>
            <p className="mt-4 text-sm text-muted">
              {siteConfig.event.dateDisplay} · {siteConfig.event.venue}
            </p>
          </Reveal>
        </Section>
      </main>
      <Footer />
    </>
  );
}
