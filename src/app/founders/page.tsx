import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import {
  FounderBookingLink,
  FounderSocialLinks,
} from "@/components/founders/FounderActions";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import {
  getVisibleFounders,
  type FounderProfile,
} from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Founders | The Ambition Room",
  description:
    "The people behind The Ambition Room — Md Maruf Uzzaman and Pree Dhawan, Co-Founders building a private community around meaningful relationships.",
  alternates: { canonical: "/founders" },
};

function FounderPortrait({ founder }: { founder: FounderProfile }) {
  if (founder.headshotSrc) {
    return (
      <div className="overflow-hidden border border-[var(--border-strong)] bg-surface">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={founder.headshotSrc}
          alt={founder.name}
          className="aspect-[4/5] w-full object-cover object-top"
        />
      </div>
    );
  }

  return (
    <div
      className="flex aspect-[4/5] w-full flex-col justify-end border border-[var(--border-strong)] bg-surface p-8"
      aria-hidden="true"
    >
      <span className="font-display text-6xl tracking-wide text-gold/30 sm:text-7xl">
        {founder.name
          .split(/\s+/)
          .map((part) => part[0])
          .join("")
          .slice(0, 2)}
      </span>
    </div>
  );
}

function FounderProfileBlock({
  founder,
  reverse = false,
}: {
  founder: FounderProfile;
  reverse?: boolean;
}) {
  const paragraphs = founder.bio
    .split(/\n\n+/)
    .map((p) => p.trim())
    .filter(Boolean);

  return (
    <article className="grid items-start gap-10 border-b border-[var(--border)] py-16 last:border-b-0 last:pb-0 sm:py-20 lg:grid-cols-12 lg:gap-14">
      <div
        className={`lg:col-span-5 ${reverse ? "lg:order-2" : "lg:order-1"}`}
      >
        <FounderPortrait founder={founder} />
      </div>

      <div
        className={`lg:col-span-7 lg:pt-2 ${reverse ? "lg:order-1" : "lg:order-2"}`}
      >
        <h2 className="font-display text-[clamp(2.25rem,5vw,3.5rem)] leading-[1.05] tracking-[0.02em] text-ivory">
          {founder.name}
        </h2>
        {founder.legalName && founder.legalName !== founder.name ? (
          <p className="mt-2 text-sm text-muted">{founder.legalName}</p>
        ) : null}

        <p className="mt-5 text-[0.7rem] tracking-[0.18em] text-gold uppercase">
          {founder.role}
        </p>
        {founder.secondaryFocus ? (
          <p className="mt-3 text-[0.8rem] tracking-[0.12em] text-muted uppercase">
            {founder.secondaryFocus}
          </p>
        ) : null}

        <div className="gold-rule my-8 max-w-[5rem]" />

        <div className="max-w-xl space-y-5 text-[1.05rem] leading-[1.7] text-[color:var(--body)]">
          {paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
        </div>

        {founder.disclosure ? (
          <p className="mt-8 max-w-xl text-xs leading-relaxed text-muted">
            {founder.disclosure}
          </p>
        ) : null}

        <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <FounderSocialLinks founder={founder} />
          <FounderBookingLink founder={founder} />
        </div>
      </div>
    </article>
  );
}

export default function FoundersPage() {
  const founders = getVisibleFounders();

  return (
    <>
      <Navbar />
      <main id="main" className="pt-20 sm:pt-24">
        <Section className="relative overflow-hidden pb-10 pt-14 sm:pb-14 sm:pt-20">
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_0%,rgba(198,161,91,0.1)_0%,transparent_45%)]"
            aria-hidden="true"
          />
          <Reveal>
            <div className="relative">
              <p className="eyebrow mb-5">The Founders</p>
              <h1 className="max-w-3xl font-display text-[clamp(2.5rem,7vw,4.25rem)] leading-[1.02] text-ivory">
                The people behind the room.
              </h1>
              <div className="gold-rule my-8 max-w-[6rem]" />
              <p className="max-w-2xl text-[1.08rem] leading-relaxed text-[color:var(--body)]">
                The Ambition Room was built around a simple conviction: meaningful
                opportunities often begin with the quality of the people around
                you.
              </p>
            </div>
          </Reveal>
        </Section>

        <Section className="border-y border-[var(--border)] bg-elevated pb-10 pt-6 sm:pb-14">
          <ul>
            {founders.map((founder, index) => (
              <Reveal key={founder.id} delay={(Math.min(index + 1, 2) as 1 | 2)}>
                <li>
                  <FounderProfileBlock
                    founder={founder}
                    reverse={index % 2 === 1}
                  />
                </li>
              </Reveal>
            ))}
          </ul>
        </Section>

        <Section className="py-20 sm:py-28">
          <Reveal>
            <p className="eyebrow mb-5">Private advisory</p>
            <h2 className="font-display text-[clamp(1.85rem,4vw,2.75rem)] text-ivory">
              Work with the founders
            </h2>
            <p className="mt-6 max-w-2xl text-[1.02rem] leading-relaxed text-[color:var(--body)]">
              Outside their work building The Ambition Room, the founders
              maintain their own professional practices and may selectively work
              with individuals and organizations.
            </p>
            <p className="mt-5 max-w-2xl text-sm text-muted">
              Professional services offered by the founders are independent of
              Ambition Room membership and event registration.
            </p>

            <ul className="mt-12 grid gap-8 border-t border-[var(--border)] pt-10 sm:grid-cols-2">
              {founders.map((founder) => (
                <li key={`advisory-${founder.id}`}>
                  <p className="font-display text-2xl text-ivory">
                    {founder.name}
                  </p>
                  {founder.privateWorkLabel ? (
                    <p className="mt-3 text-[0.7rem] tracking-[0.14em] text-gold uppercase">
                      {founder.privateWorkLabel}
                    </p>
                  ) : founder.secondaryFocus ? (
                    <p className="mt-3 text-[0.7rem] tracking-[0.14em] text-gold uppercase">
                      {founder.secondaryFocus}
                    </p>
                  ) : null}
                  <div className="mt-6">
                    <FounderBookingLink founder={founder} />
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </Section>
      </main>
      <Footer />
    </>
  );
}
