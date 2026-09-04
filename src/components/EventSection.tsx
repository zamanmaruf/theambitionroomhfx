import { InvitationButton } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { getVenueDisplay, siteConfig } from "@/lib/siteConfig";

const details = [
  { label: "Date", value: siteConfig.event.dateDisplay },
  { label: "Time", value: siteConfig.event.timeDisplay },
  { label: "Location", value: `${siteConfig.event.city}, ${siteConfig.event.region}` },
  { label: "Venue", value: getVenueDisplay() },
] as const;

export function EventSection() {
  return (
    <Section
      id="halifax-001"
      className="border-y border-[var(--border)] bg-elevated py-24 sm:py-28 lg:py-32"
    >
      <Reveal>
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-6">
            <p className="eyebrow mb-5">{siteConfig.event.foundingLabel}</p>
            <h2 className="font-display text-[clamp(2.75rem,8vw,5rem)] leading-[0.95] tracking-[0.04em] text-ivory uppercase">
              {siteConfig.event.edition}
            </h2>
            <p className="mt-8 max-w-md text-[1.02rem] leading-relaxed text-muted">
              The inaugural gathering of The Ambition Room — a carefully shaped
              evening for people who take their work, and each other, seriously.
            </p>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-ivory/80">
              {siteConfig.event.capacityDisplay}
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
              <InvitationButton placement="event" />
              <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted">
                Applications are reviewed individually to help preserve the
                quality and intention of the room.
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
