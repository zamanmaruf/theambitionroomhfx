import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/lib/siteConfig";

/** Slim sponsor bridge between hero and manifesto — not a card. */
export function VenueSponsorBand() {
  const { venue } = siteConfig.partners;

  return (
    <section
      aria-label={`${venue.role}: ${venue.name}`}
      className="relative border-y border-[var(--border)] py-12 sm:py-14"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(198,161,91,0.06)_0%,transparent_60%)]"
        aria-hidden="true"
      />
      <Reveal>
        <div className="relative mx-auto flex max-w-md flex-col items-center px-5 text-center sm:px-8">
          <p className="text-[0.65rem] tracking-[0.22em] text-gold uppercase">
            {venue.role}
          </p>
          <div className="mt-5 overflow-hidden rounded-full border border-[var(--border-strong)] shadow-[0_0_0_1px_rgba(198,161,91,0.08)]">
            <Image
              src={venue.logoSrc}
              alt={`${venue.name} logo`}
              width={112}
              height={112}
              className="h-24 w-24 object-cover sm:h-28 sm:w-28"
              priority
            />
          </div>
          <p className="mt-5 font-display text-xl tracking-[0.04em] text-ivory sm:text-2xl">
            {venue.name}
          </p>
          <p className="mt-2 text-sm text-muted">Hosting Halifax #001</p>
        </div>
      </Reveal>
    </section>
  );
}
