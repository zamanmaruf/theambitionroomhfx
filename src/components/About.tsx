import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

export function About() {
  return (
    <Section id="about" className="py-24 sm:py-28 lg:py-32">
      <Reveal>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="eyebrow mb-6">Why we exist</p>
            <h2 className="font-display text-[clamp(2rem,5vw,3.25rem)] leading-[1.08] tracking-tight text-ivory">
              Networking doesn&apos;t need more people.
              <span className="mt-3 block text-gold">
                It needs the right people.
              </span>
            </h2>
          </div>

          <div className="space-y-6 text-[1.02rem] leading-relaxed text-[color:var(--body)] lg:col-span-6 lg:col-start-7 lg:pt-10">
            <p>
              Traditional networking often rewards volume — more introductions,
              more contacts, more noise.
            </p>
            <p>
              The Ambition Room is built around something different.
            </p>
            <p className="text-ivory/90">
              Fewer assumptions.
              <br />
              Better conversations.
              <br />
              People worth speaking to again.
            </p>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
