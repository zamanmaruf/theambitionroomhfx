import { InvitationButton } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { siteConfig } from "@/lib/siteConfig";

export function FinalCTA() {
  return (
    <Section className="relative overflow-hidden py-28 sm:py-32 lg:py-40">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(198,161,91,0.1)_0%,transparent_55%)]"
        aria-hidden="true"
      />
      <Reveal>
        <div className="relative mx-auto max-w-3xl text-center">
          <h2 className="font-display text-[clamp(2.4rem,7vw,4.5rem)] leading-[1.02] tracking-[0.02em] text-ivory uppercase">
            Who will you meet
            <span className="mt-2 block">in the room?</span>
          </h2>

          <div className="gold-rule mx-auto my-10 max-w-xs" />

          <p className="font-display text-xl text-ivory/90 sm:text-2xl">
            {siteConfig.brand.tagline}
          </p>

          <div className="mt-12 flex justify-center">
            <InvitationButton placement="final" />
          </div>

          <p className="mt-8 text-[0.7rem] tracking-[0.16em] text-muted uppercase">
            {siteConfig.brand.name} · {siteConfig.event.edition} ·{" "}
            {siteConfig.event.dateDisplay}
          </p>
        </div>
      </Reveal>
    </Section>
  );
}
