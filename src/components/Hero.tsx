import Image from "next/image";
import {
  ExploreMembershipButton,
  ReserveEventButton,
} from "@/components/ui/Button";
import { siteConfig } from "@/lib/siteConfig";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-[5.5rem] pb-16 sm:pt-24 sm:pb-20"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src="/hero-room.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,8,8,0.72)_0%,rgba(8,8,8,0.55)_38%,rgba(8,8,8,0.78)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(8,8,8,0.15)_0%,rgba(8,8,8,0.55)_70%)]" />
      </div>

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
            className="font-display text-[clamp(2.85rem,11.5vw,6.5rem)] leading-[0.9] tracking-[0.06em] text-ivory drop-shadow-[0_2px_24px_rgba(0,0,0,0.45)]"
          >
            <span className="block font-medium uppercase">The Ambition</span>
            <span className="mt-1 block font-medium uppercase sm:mt-2">
              Room
            </span>
          </h1>

          <div className="gold-rule mx-auto my-6 max-w-[9rem] sm:my-7" />

          <p className="font-display text-[1.15rem] leading-snug tracking-[0.01em] text-ivory/92 sm:text-[1.35rem] md:text-[1.5rem]">
            {siteConfig.brand.tagline}
          </p>

          <p className="mx-auto mt-5 max-w-lg text-[0.98rem] leading-relaxed text-[color:var(--body)] sm:mt-6 sm:text-[1.05rem]">
            {siteConfig.brand.description}
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:mt-9 sm:flex-row sm:gap-7">
            <ReserveEventButton placement="hero">
              Reserve Halifax #001
            </ReserveEventButton>
            <ExploreMembershipButton />
          </div>

          <p className="mt-5 text-[0.68rem] tracking-[0.16em] text-muted uppercase sm:mt-6">
            Halifax #001 · Complimentary guest registration · Limited capacity
          </p>
        </div>
      </div>
    </section>
  );
}
