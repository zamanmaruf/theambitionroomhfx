import type { Metadata } from "next";
import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Application Received | The Ambition Room",
  description: "Your application to The Ambition Room has been received.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ApplySuccessPage() {
  return (
    <div className="relative flex min-h-[100svh] flex-col">
      <header className="border-b border-[var(--border)]">
        <div className="mx-auto flex h-16 max-w-3xl items-center px-5 sm:h-[4.25rem] sm:px-8">
          <Link
            href="/"
            className="group flex items-center gap-2.5 text-ivory sm:gap-3"
            aria-label="The Ambition Room home"
          >
            <Logo variant="mark" size={32} priority />
            <span className="font-display text-[0.85rem] tracking-[0.14em] uppercase sm:text-[0.95rem]">
              The Ambition Room
            </span>
          </Link>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col justify-center px-5 py-16 sm:px-8 sm:py-24">
        <p className="eyebrow mb-8">Application received</p>

        <h1 className="font-display text-[clamp(2.2rem,6.5vw,3.6rem)] leading-[1.05] tracking-[0.03em] text-ivory uppercase">
          You&apos;ve requested a place in the room.
        </h1>

        <div className="gold-rule my-10 max-w-xs" />

        <div className="max-w-xl space-y-5 text-[1.02rem] leading-relaxed text-muted">
          <p>
            Thank you for your interest in {siteConfig.brand.name} —{" "}
            {siteConfig.event.edition}.
          </p>
          <p>
            We review every application individually to help maintain the
            quality and intention of the room. If your application is approved,
            you&apos;ll receive private registration access by email.
          </p>
        </div>

        <dl className="mt-12 space-y-0 border-t border-[var(--border)]">
          <div className="grid grid-cols-[7rem_1fr] gap-4 border-b border-[var(--border)] py-5 sm:grid-cols-[8.5rem_1fr]">
            <dt className="text-[0.68rem] tracking-[0.18em] text-gold-muted uppercase">
              Date
            </dt>
            <dd className="text-ivory">{siteConfig.event.dateDisplay}</dd>
          </div>
          <div className="grid grid-cols-[7rem_1fr] gap-4 border-b border-[var(--border)] py-5 sm:grid-cols-[8.5rem_1fr]">
            <dt className="text-[0.68rem] tracking-[0.18em] text-gold-muted uppercase">
              Location
            </dt>
            <dd className="text-ivory">
              {siteConfig.event.city}, {siteConfig.event.region}
            </dd>
          </div>
        </dl>

        <p className="mt-10 text-sm text-ivory/80">Keep an eye on your inbox.</p>

        <div className="mt-12">
          <Link href="/" className="btn-primary">
            Back to The Ambition Room
            <span className="arrow" aria-hidden="true">
              →
            </span>
          </Link>
        </div>

        <p className="mt-16 font-display text-lg text-ivory/70">
          {siteConfig.brand.tagline}
        </p>
      </main>
    </div>
  );
}
