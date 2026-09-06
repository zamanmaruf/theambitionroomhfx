import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

const pillars = [
  {
    number: "01",
    title: "Curated",
    body: "Membership grows deliberately. We protect the quality of the community rather than optimizing for the largest possible number of people.",
  },
  {
    number: "02",
    title: "Connected",
    body: "The environment is designed to make real conversations easier. Less performance. Less pitching. More curiosity.",
  },
  {
    number: "03",
    title: "Ambitious",
    body: "The common denominator is not title or status. It is the seriousness with which people approach what they are building, pursuing or contributing.",
  },
] as const;

export function ValuePillars() {
  return (
    <Section
      id="the-room"
      className="py-24 sm:py-28 lg:py-32"
    >
      <Reveal>
        <div className="mb-14 max-w-2xl sm:mb-16">
          <p className="eyebrow mb-5">The promise</p>
          <h2 className="font-display text-[clamp(2rem,4.5vw,3rem)] leading-[1.1] text-ivory">
            Access to a thoughtfully curated community — not guaranteed
            outcomes.
          </h2>
        </div>
      </Reveal>

      <div className="grid gap-0 md:grid-cols-3">
        {pillars.map((pillar, index) => (
          <Reveal key={pillar.number} delay={(index + 1) as 1 | 2 | 3}>
            <article
              className={`border-t border-[var(--border)] py-10 md:border-t-0 md:border-l md:px-8 md:py-2 ${
                index === 0 ? "md:border-l-0 md:pl-0" : ""
              } ${index === 2 ? "md:pr-0" : ""}`}
            >
              <p className="mb-6 font-sans text-xs tracking-[0.2em] text-gold-muted">
                {pillar.number}
              </p>
              <h3 className="font-display text-3xl tracking-wide text-ivory uppercase sm:text-[2rem]">
                {pillar.title}
              </h3>
              <div className="my-6 h-px w-12 bg-gold/50" />
              <p className="max-w-sm text-[0.98rem] leading-relaxed text-[color:var(--body)]">
                {pillar.body}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
