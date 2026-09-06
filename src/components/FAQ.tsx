import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { eventbriteUrl, siteConfig } from "@/lib/siteConfig";

const faqs = [
  {
    q: "What is The Ambition Room?",
    a: "The Ambition Room is a private community and curated gathering for entrepreneurs and ambitious professionals, built around meaningful relationships and the quality of the people inside the room.",
  },
  {
    q: "Is membership application-based?",
    a: "Yes. Membership in The Ambition Room is selective and requires an application.",
  },
  {
    q: "Do I need to apply to attend Halifax #001?",
    a: "No. Halifax #001 is a founding guest event and does not require a membership application. A limited number of complimentary registrations are available.",
  },
  {
    q: "Does attending Halifax #001 make me a member?",
    a: "No. Event attendance and membership are separate. Attending Halifax #001 does not automatically confer or guarantee membership.",
  },
  {
    q: "Is Halifax #001 a sales or pitching event?",
    a: "No. Business relationships may naturally develop from the room, but the philosophy is connection before selling.",
  },
  {
    q: "What should I expect?",
    a: "Thoughtful introductions, open conversation and an intentionally designed environment centered on the people attending rather than presentations.",
  },
] as const;

export function FAQ() {
  return (
    <Section className="py-24 sm:py-28 lg:py-32">
      <Reveal>
        <div className="mb-14 max-w-xl">
          <p className="eyebrow mb-5">FAQ</p>
          <h2 className="font-display text-[clamp(2rem,4.5vw,3rem)] leading-[1.1] text-ivory">
            Clear answers. No confusion.
          </h2>
        </div>
      </Reveal>

      <div className="mx-auto max-w-3xl divide-y divide-[var(--border)] border-y border-[var(--border)]">
        {faqs.map((item, index) => (
          <Reveal key={item.q} delay={Math.min(index + 1, 4) as 1 | 2 | 3 | 4}>
            <details className="group py-6">
              <summary className="cursor-pointer list-none font-display text-xl text-ivory marker:content-none [&::-webkit-details-marker]:hidden">
                <span className="flex items-start justify-between gap-4">
                  {item.q}
                  <span
                    className="mt-1 text-gold transition-transform group-open:rotate-45"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </span>
              </summary>
              <p className="mt-4 max-w-2xl text-[0.98rem] leading-relaxed text-[color:var(--body)]">
                {item.a}
              </p>
            </details>
          </Reveal>
        ))}
      </div>

      <p className="mt-10 text-sm text-muted">
        Still deciding?{" "}
        <Link href={siteConfig.membership.path} className="text-gold hover:underline">
          Explore membership
        </Link>{" "}
        or{" "}
        <a
          href={eventbriteUrl("faq")}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gold hover:underline"
        >
          see Halifax #001
        </a>
        .
      </p>
    </Section>
  );
}
