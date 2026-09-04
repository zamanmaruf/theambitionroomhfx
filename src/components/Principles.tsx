import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

const principles = [
  {
    title: "Be intentional",
    body: "Come with curiosity and purpose.",
  },
  {
    title: "Connect before you sell",
    body: "Build the relationship before asking for something.",
  },
  {
    title: "Respect the room",
    body: "The quality of the experience belongs to everyone inside it.",
  },
] as const;

export function Principles() {
  return (
    <Section className="border-y border-[var(--border)] bg-surface py-24 sm:py-28 lg:py-32">
      <Reveal>
        <div className="mb-14 max-w-2xl sm:mb-16">
          <p className="eyebrow mb-5">Community principles</p>
          <h2 className="font-display text-[clamp(2rem,4.5vw,3.15rem)] leading-[1.08] text-ivory">
            The room works because everyone contributes to it.
          </h2>
        </div>
      </Reveal>

      <div className="grid gap-8 md:grid-cols-3 md:gap-10">
        {principles.map((item, index) => (
          <Reveal key={item.title} delay={(index + 1) as 1 | 2 | 3}>
            <article className="border-l border-gold/30 pl-6">
              <h3 className="font-display text-xl tracking-[0.06em] text-ivory uppercase sm:text-2xl">
                {item.title}
              </h3>
              <p className="mt-4 text-[0.98rem] leading-relaxed text-muted">
                {item.body}
              </p>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={4}>
        <p className="mt-16 max-w-2xl font-display text-xl leading-snug text-ivory/85 sm:text-2xl">
          The best person in the room is often the person who helps two other
          people meet.
        </p>
      </Reveal>
    </Section>
  );
}
