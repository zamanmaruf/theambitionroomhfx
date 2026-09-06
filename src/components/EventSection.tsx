import { ReserveEventButton } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { VenuePartnerHighlight } from "@/components/VenuePartnerHighlight";
import { siteConfig } from "@/lib/siteConfig";

const details = [
  { label: "Date", value: siteConfig.event.dateDisplay },
  { label: "Time", value: siteConfig.event.timeDisplay },
  { label: "Venue", value: siteConfig.event.venue },
  {
    label: "Location",
    value: `${siteConfig.event.city}, ${siteConfig.event.region}`,
  },
] as const;

export function EventSection() {
  return (
    <Section id="halifax-001" className="py-24 sm:py-28 lg:py-32">
      <Reveal>
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-6">
            <p className="eyebrow mb-5">{siteConfig.event.foundingLabel}</p>
            <h2 className="font-display text-[clamp(2.75rem,8vw,5rem)] leading-[0.95] tracking-[0.04em] text-ivory uppercase">
              {siteConfig.event.edition}
            </h2>
            <p className="mt-8 max-w-md text-[1.02rem] leading-relaxed text-[color:var(--body)]">
              One room. A deliberately limited group. An evening designed around
              conversations worth continuing.
            </p>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-ivory/80">
              Complimentary founding guest registration.
              <br />
              Approximately 100 places.
            </p>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-muted">
              For this founding event, a membership application is not required.
              Registration does not constitute membership in The Ambition Room.
            </p>
          </div>

          <div className="lg:col-span-5 lg:col-start-8">
            <dl className="space-y-0 border-t border-[var(--border)]">
              {details.map((item) => (
                <div
                  key={item.label}
                  className="grid grid-cols-[7rem_1fr] gap-4 border-b border-[var(--border)] py-5 sm:grid-cols-[8.5rem_1fr]"
                >
                  <dt className="text-[0.68rem] tracking-[0.18em] text-gold-muted uppercase">
                    {item.label}
                  </dt>
                  <dd className="text-[0.98rem] text-ivory">{item.value}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-10">
              <ReserveEventButton placement="halifax_section" />
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal delay={2}>
        <div className="mt-14 border-t border-[var(--border)] pt-10 sm:mt-16 sm:pt-12">
          <VenuePartnerHighlight />
        </div>
      </Reveal>
    </Section>
  );
}
