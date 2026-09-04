import { DiscoverButton, InvitationButton } from "@/components/ui/Button";
import { siteConfig } from "@/lib/siteConfig";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-[5.5rem] pb-20 sm:pt-24 sm:pb-24"
      aria-labelledby="hero-heading"
    >
      <div className="hero-glow" aria-hidden="true" />
      <div className="hero-geometry" aria-hidden="true" />
      <div className="hero-frame" aria-hidden="true">
        <span className="hero-corner hero-corner-tl" />
        <span className="hero-corner hero-corner-tr" />
        <span className="hero-corner hero-corner-bl" />
        <span className="hero-corner hero-corner-br" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow mb-5 sm:mb-6">{siteConfig.event.eyebrow}</p>

          <h1
            id="hero-heading"
            className="font-display text-[clamp(2.85rem,11.5vw,6.5rem)] leading-[0.9] tracking-[0.06em] text-ivory"
          >
            <span className="block font-medium uppercase">The Ambition</span>
            <span className="mt-1 block font-medium uppercase sm:mt-2">
              Room
            </span>
          </h1>

          <div className="gold-rule mx-auto my-6 max-w-[9rem] sm:my-7" />

          <p className="font-display text-[1.15rem] leading-snug tracking-[0.01em] text-ivory/88 sm:text-[1.35rem] md:text-[1.5rem]">
            {siteConfig.brand.tagline}
          </p>

          <p className="mx-auto mt-5 max-w-lg text-[0.98rem] leading-relaxed text-[color:var(--body)] sm:mt-6 sm:text-[1.05rem]">
            {siteConfig.brand.description}
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:mt-9 sm:flex-row sm:gap-7">
            <InvitationButton placement="hero" />
            <DiscoverButton />
          </div>

          <p className="mt-5 text-[0.68rem] tracking-[0.16em] text-muted uppercase sm:mt-6">
            Limited capacity · Application required
          </p>
        </div>
      </div>
    </section>
  );
}
