import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { siteConfig } from "@/lib/siteConfig";

export function Audience() {
  return (
    <Section className="py-24 sm:py-28 lg:py-32">
      <Reveal>
        <div className="mb-12 flex flex-col gap-4 sm:mb-16 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow mb-5">Who&apos;s in the room</p>
            <h2 className="font-display text-[clamp(2rem,4.5vw,3rem)] leading-[1.1] text-ivory">
              Different backgrounds.
              <br />
              Shared ambition.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted sm:text-right">
            Categories reflect the kinds of people the room is built for — not a
            guarantee of who will attend any single event.
          </p>
        </div>
      </Reveal>

      <Reveal delay={1}>
        <ul className="grid grid-cols-1 gap-px border border-[var(--border)] bg-[var(--border)] sm:grid-cols-2 lg:grid-cols-5">
          {siteConfig.audience.map((label) => (
            <li
              key={label}
              className="flex min-h-[5.5rem] items-center bg-bg px-5 py-6 transition-colors duration-300 hover:bg-elevated"
            >
              <span className="font-display text-xl tracking-wide text-ivory sm:text-[1.35rem]">
                {label}
              </span>
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
