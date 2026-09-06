import type { Metadata } from "next";
import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { eventbriteUrl, siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Application Received | The Ambition Room",
  description: "Your membership application to The Ambition Room has been received.",
  robots: { index: false, follow: false },
};

export default function MembershipSuccessPage() {
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
          Thank you for your interest in The Ambition Room.
        </h1>

        <div className="gold-rule my-10 max-w-xs" />

        <div className="max-w-xl space-y-5 text-[1.02rem] leading-relaxed text-muted">
          <p>
            Membership applications are considered individually and submitting an
            application does not guarantee admission.
          </p>
          <p>
            If there is a strong fit, we&apos;ll be in touch with the next step.
          </p>
        </div>

        <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
          <Link href="/" className="btn-primary">
            Back to The Ambition Room
            <span className="arrow" aria-hidden="true">
              →
            </span>
          </Link>
          <a
            href={eventbriteUrl("apply_success")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            Reserve Halifax #001
          </a>
        </div>

        <p className="mt-16 font-display text-lg text-ivory/70">
          {siteConfig.brand.tagline}
        </p>
      </main>
    </div>
  );
}
