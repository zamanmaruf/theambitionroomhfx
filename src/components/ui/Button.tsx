"use client";

import { track, trackCta, type CtaPlacement } from "@/lib/analytics";
import type { ReactNode } from "react";

type Variant = "primary" | "outline" | "secondary";

type InvitationButtonProps = {
  placement: CtaPlacement;
  variant?: Variant;
  className?: string;
  children?: ReactNode;
  showArrow?: boolean;
};

export function InvitationButton({
  placement,
  variant = "primary",
  className = "",
  children = "Request an Invitation",
  showArrow = true,
}: InvitationButtonProps) {
  const baseClass =
    variant === "primary"
      ? "btn-primary"
      : variant === "outline"
        ? "btn-outline"
        : "btn-secondary";

  return (
    <a
      href="/apply"
      className={`${baseClass} ${className}`.trim()}
      onClick={() => trackCta(placement)}
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

type DiscoverButtonProps = {
  href?: string;
  className?: string;
};

export function DiscoverButton({
  href = "#about",
  className = "",
}: DiscoverButtonProps) {
  return (
    <a
      href={href}
      className={`btn-secondary ${className}`.trim()}
      onClick={() =>
        track({ event: "cta_discover_room", placement: "hero", href })
      }
    >
      Discover the Room
      <span aria-hidden="true">↓</span>
    </a>
  );
}
