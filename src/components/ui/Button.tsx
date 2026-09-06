"use client";

import { track, type CtaPlacement } from "@/lib/analytics";
import {
  eventbriteUrl,
  getRegistrationCtaLabel,
  isRegistrationOpen,
  isWaitlist,
  siteConfig,
} from "@/lib/siteConfig";
import type { ReactNode } from "react";

type Variant = "primary" | "outline" | "secondary";

function buttonClass(variant: Variant): string {
  if (variant === "primary") return "btn-primary";
  if (variant === "outline") return "btn-outline";
  return "btn-secondary";
}

type ReserveEventButtonProps = {
  placement: CtaPlacement;
  variant?: Variant;
  className?: string;
  children?: ReactNode;
  showArrow?: boolean;
  /** Shorter nav label */
  short?: boolean;
};

export function ReserveEventButton({
  placement,
  variant = "primary",
  className = "",
  children,
  showArrow = true,
  short = false,
}: ReserveEventButtonProps) {
  const closed = !isRegistrationOpen() && !isWaitlist();
  const label =
    children ??
    (short ? "Reserve #001" : getRegistrationCtaLabel());

  if (closed) {
    return (
      <button
        type="button"
        disabled
        className={`${buttonClass(variant)} ${className}`.trim()}
        aria-label="Registration closed for Halifax #001"
      >
        <span>Registration Closed</span>
      </button>
    );
  }

  const href = eventbriteUrl(placement);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${buttonClass(variant)} ${className}`.trim()}
      onClick={() =>
        track({
          event: "halifax_registration_click",
          placement,
          href,
          label: String(label),
        })
      }
    >
      <span>{label}</span>
      {showArrow && variant !== "secondary" ? (
        <span className="arrow" aria-hidden="true">
          →
        </span>
      ) : null}
    </a>
  );
}

type MembershipApplyButtonProps = {
  placement: CtaPlacement;
  variant?: Variant;
  className?: string;
  children?: ReactNode;
  showArrow?: boolean;
};

export function MembershipApplyButton({
  placement,
  variant = "primary",
  className = "",
  children = "Apply for Membership",
  showArrow = true,
}: MembershipApplyButtonProps) {
  return (
    <a
      href={siteConfig.membership.applyPath}
      className={`${buttonClass(variant)} ${className}`.trim()}
      onClick={() =>
        track({
          event: "membership_apply_start",
          placement,
          href: siteConfig.membership.applyPath,
        })
      }
    >
      <span>{children}</span>
      {showArrow && variant !== "secondary" ? (
        <span className="arrow" aria-hidden="true">
          →
        </span>
      ) : null}
    </a>
  );
}

type ExploreMembershipButtonProps = {
  className?: string;
  children?: ReactNode;
};

export function ExploreMembershipButton({
  className = "",
  children = "Explore Membership",
}: ExploreMembershipButtonProps) {
  return (
    <a
      href={siteConfig.membership.path}
      className={`btn-secondary ${className}`.trim()}
      onClick={() =>
        track({
          event: "cta_explore_membership",
          placement: "hero",
          href: siteConfig.membership.path,
        })
      }
    >
      {children}
      <span aria-hidden="true">→</span>
    </a>
  );
}
