import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { getVisibleFounders } from "@/lib/siteConfig";

export function FoundersTeaser() {
  const founders = getVisibleFounders();

  return (
    <Section
      id="founders"
      className="relative overflow-hidden border-y border-[var(--border)] bg-surface py-24 sm:py-28 lg:py-32"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(198,161,91,0.08)_0%,transparent_50%)]"
        aria-hidden="true"
      />

      <div className="relative">
        <Reveal>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-xl">
              <p className="eyebrow mb-5">The Founders</p>
              <h2 className="font-display text-[clamp(2.25rem,5vw,3.5rem)] leading-[1.08] text-ivory">
                The people behind the room.
              </h2>
              <p className="mt-6 max-w-md text-[1.05rem] leading-relaxed text-[color:var(--body)]">
                Built by co-founders who believe meaningful opportunities begin
                with the quality of the people around you.
              </p>
            </div>
            <Link href="/founders" className="btn-primary shrink-0 self-start lg:self-auto">
              Meet the Founders
              <span className="arrow" aria-hidden="true">
                →
              </span>
            </Link>
          </div>
        </Reveal>

        {founders.length > 0 ? (
          <ul className="mt-16 grid gap-10 sm:grid-cols-2 sm:gap-8 lg:mt-20 lg:gap-12">
            {founders.map((founder, index) => (
              <Reveal
                key={founder.id}
                delay={(Math.min(index + 1, 2) as 1 | 2)}
                as="li"
              >
                <Link
                  href="/founders"
                  className="group block focus-visible:outline-none"
                >
                  <div className="relative overflow-hidden border border-[var(--border)] bg-elevated transition-[border-color] duration-300 group-hover:border-[var(--border-strong)] group-focus-visible:border-[var(--border-strong)]">
                    {founder.headshotSrc ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={founder.headshotSrc}
                        alt={founder.name}
                        className="aspect-[4/5] w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                      />
                    ) : (
                      <div
                        className="flex aspect-[4/5] w-full items-end bg-elevated p-8"
                        aria-hidden="true"
                      >
                        <span className="font-display text-6xl tracking-wide text-gold/30">
                          {founder.name
                            .split(/\s+/)
                            .map((part) => part[0])
                            .join("")
                            .slice(0, 2)}
                        </span>
                      </div>
                    )}
                    <div
                      className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[rgba(8,8,8,0.55)] to-transparent"
                      aria-hidden="true"
                    />
                  </div>

                  <div className="mt-6">
                    <p className="font-display text-[1.65rem] leading-tight tracking-[0.02em] text-ivory transition-colors group-hover:text-gold sm:text-[1.85rem]">
                      {founder.name}
                    </p>
                    <p className="mt-3 text-[0.68rem] tracking-[0.18em] text-gold uppercase">
                      Co-Founder
                    </p>
                    {founder.secondaryFocus ? (
                      <p className="mt-2 text-sm text-muted">
                        {founder.secondaryFocus}
                      </p>
                    ) : null}
                  </div>
                </Link>
              </Reveal>
            ))}
          </ul>
        ) : null}
      </div>
    </Section>
  );
}
