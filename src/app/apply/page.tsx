import type { Metadata } from "next";
import Link from "next/link";
import { ApplicationForm } from "@/components/apply/ApplicationForm";
import { Logo } from "@/components/ui/Logo";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Request an Invitation | The Ambition Room",
  description:
    "Request an invitation to The Ambition Room — a curated gathering for entrepreneurs and ambitious professionals in Halifax.",
  alternates: {
    canonical: "/apply",
  },
  openGraph: {
    title: "Request an Invitation | The Ambition Room",
    description:
      "Request an invitation to The Ambition Room — a curated gathering for entrepreneurs and ambitious professionals in Halifax.",
    url: `${siteConfig.url}/apply`,
  },
};

export default function ApplyPage() {
  return (
    <div className="relative min-h-[100svh]">
      <header className="border-b border-[var(--border)]">
        <div className="mx-auto flex h-16 max-w-3xl items-center justify-between px-5 sm:h-[4.25rem] sm:px-8">
          <Link
            href="/"
            className="group flex items-center gap-2.5 text-ivory sm:gap-3"
            aria-label="Back to The Ambition Room home"
          >
            <Logo variant="mark" size={32} priority />
            <span className="font-display text-[0.85rem] tracking-[0.14em] uppercase sm:text-[0.95rem]">
              The Ambition Room
            </span>
          </Link>
          <Link
            href="/"
            className="nav-link text-[0.68rem] tracking-[0.16em] uppercase"
          >
            ← Back
          </Link>
        </div>
      </header>

      <main className="mx-auto w-full max-w-3xl px-5 pb-24 pt-12 sm:px-8 sm:pt-16">
        <p className="eyebrow mb-3">Application · {siteConfig.event.edition}</p>
        <p className="eyebrow !text-muted">{siteConfig.event.eyebrow}</p>

        <div className="gold-rule my-8 max-w-xs" />

        <h1 className="font-display text-[clamp(2.25rem,7vw,3.75rem)] leading-[1.02] tracking-[0.04em] text-ivory uppercase">
          Request an Invitation
        </h1>

        <p className="mt-6 max-w-xl text-[1.02rem] leading-relaxed text-muted">
          The Ambition Room is intentionally curated. Tell us a little about who
          you are and what you&apos;re building so we can create a room worth
          being in.
        </p>

        <p className="mt-5 text-sm text-ivory/80">
          Applications take approximately 2 minutes.
        </p>
        <p className="mt-2 text-sm text-muted">
          Every application is reviewed individually.
        </p>

        <div className="gold-rule my-12 max-w-xs" />

        <ApplicationForm />
      </main>
    </div>
  );
}
