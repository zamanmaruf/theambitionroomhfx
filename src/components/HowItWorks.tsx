import { InvitationButton } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

const steps = [
  {
    number: "01",
    title: "Request",
    body: "Submit a short application and tell us what you're working on.",
  },
  {
    number: "02",
    title: "Review",
    body: "Applications are reviewed to maintain a thoughtful mix of people in the room.",
  },
  {
    number: "03",
    title: "Enter",
    body: "Approved applicants receive private access to register for Halifax #001.",
  },
] as const;

export function HowItWorks() {
  return (
    <Section id="how-it-works" className="py-24 sm:py-28 lg:py-32">
      <Reveal>
        <div className="mb-14 max-w-xl sm:mb-16">
          <p className="eyebrow mb-5">How it works</p>
          <h2 className="font-display text-[clamp(2rem,4.5vw,3rem)] leading-[1.1] text-ivory">
            Three steps to the room.
          </h2>
        </div>
      </Reveal>

      <ol className="grid gap-10 md:grid-cols-3 md:gap-8">
        {steps.map((step, index) => (
          <Reveal key={step.number} delay={(index + 1) as 1 | 2 | 3} as="li">
            <div className="relative">
              <p className="font-display text-5xl text-gold/25 sm:text-6xl">
                {step.number}
              </p>
              <h3 className="mt-4 font-display text-2xl tracking-[0.08em] text-ivory uppercase">
                {step.title}
              </h3>
              <div className="my-5 h-px w-10 bg-gold/40" />
              <p className="max-w-xs text-[0.98rem] leading-relaxed text-muted">
                {step.body}
              </p>
            </div>
          </Reveal>
        ))}
      </ol>

      <Reveal delay={4}>
        <div className="mt-14 flex flex-col items-start gap-4 border-t border-[var(--border)] pt-10 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-md text-sm text-muted">
            Limited capacity. Application required.
          </p>
          <InvitationButton placement="how_it_works" variant="outline" />
        </div>
      </Reveal>
    </Section>
  );
}
