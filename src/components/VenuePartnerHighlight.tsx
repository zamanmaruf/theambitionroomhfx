import Image from "next/image";
import { siteConfig } from "@/lib/siteConfig";

type VenuePartnerHighlightProps = {
  className?: string;
  /** Larger treatment for dedicated event pages */
  size?: "home" | "page";
};

export function VenuePartnerHighlight({
  className = "",
  size = "home",
}: VenuePartnerHighlightProps) {
  const { venue } = siteConfig.partners;
  const logoSize = size === "page" ? 112 : 88;

  return (
    <div
      className={`flex flex-col gap-5 border border-[var(--border)] bg-elevated/80 px-5 py-5 sm:flex-row sm:items-center sm:gap-6 sm:px-6 sm:py-6 ${className}`.trim()}
    >
      <div className="shrink-0">
        <Image
          src={venue.logoSrc}
          alt={`${venue.name} logo`}
          width={logoSize}
          height={logoSize}
          className="h-auto w-auto rounded-sm"
          style={{ width: logoSize, height: logoSize }}
        />
      </div>
      <div className="min-w-0">
        <p className="text-[0.65rem] tracking-[0.2em] text-gold uppercase">
          {venue.role}
        </p>
        <p className="mt-2 font-display text-xl tracking-wide text-ivory sm:text-2xl">
          {venue.name}
        </p>
        <p className="mt-2 text-sm leading-relaxed text-[color:var(--body)]">
          {venue.description}
        </p>
      </div>
    </div>
  );
}
