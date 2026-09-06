import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

export function TheStandard() {
  return (
    <Section className="border-y border-[var(--border)] bg-surface py-24 sm:py-28 lg:py-32">
      <Reveal>
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow mb-6">The standard</p>
          <h2 className="font-display text-[clamp(2rem,4.5vw,3.15rem)] leading-[1.08] text-ivory">
            Access should mean something.
          </h2>
          <div className="gold-rule mx-auto my-8 max-w-[7rem]" />
          <div className="space-y-5 text-left text-[1.02rem] leading-relaxed text-[color:var(--body)] sm:text-center">
            <p>
              The Ambition Room is built for people who are serious about what
              they are building and thoughtful about how they show up.
            </p>
            <p>
              Membership is selective by design because the quality of the
              community depends on the people who contribute to it.
            </p>
            <p>
              The standard is not wealth, fame or title alone.
            </p>
            <p className="text-ivory/90">
              It is ambition, substance, intent and contribution.
            </p>
            <p className="pt-4 font-display text-xl text-ivory/85 sm:text-2xl">
              The goal is not to build the largest network.
              <br />
              It is to build a room worth entering.
            </p>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
