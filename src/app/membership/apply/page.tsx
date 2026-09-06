import type { Metadata } from "next";
import Link from "next/link";
import { ApplicationForm } from "@/components/apply/ApplicationForm";
import { Logo } from "@/components/ui/Logo";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Apply for Membership | The Ambition Room",
  description:
    "Apply for membership in The Ambition Room — a selective private community for entrepreneurs and ambitious professionals.",
  alternates: { canonical: "/membership/apply" },
};

export default function MembershipApplyPage() {
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
            href={siteConfig.membership.path}
            className="nav-link text-[0.68rem] tracking-[0.16em] uppercase"
          >
            ← Membership
          </Link>
        </div>
      </header>

      <main className="mx-auto w-full max-w-3xl px-5 pb-24 pt-12 sm:px-8 sm:pt-16">
        <p className="eyebrow mb-3">Membership</p>
        <p className="eyebrow !text-muted">Application · Considered individually</p>

        <div className="gold-rule my-8 max-w-xs" />

        <h1 className="font-display text-[clamp(2.25rem,7vw,3.75rem)] leading-[1.02] tracking-[0.04em] text-ivory uppercase">
          Apply for Membership
        </h1>

        <p className="mt-6 max-w-xl text-[1.02rem] leading-relaxed text-muted">
          Tell us a little about who you are and what you&apos;re building. Membership
          applications are considered individually and do not guarantee admission.
        </p>

        <p className="mt-4 text-sm text-ivory/80">
          Applications take approximately 3–5 minutes.
        </p>

        <div className="gold-rule my-12 max-w-xs" />

        <ApplicationForm />
      </main>
    </div>
  );
}
