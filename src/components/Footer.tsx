"use client";

import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { Section } from "@/components/ui/Section";
import { track } from "@/lib/analytics";
import { siteConfig } from "@/lib/siteConfig";

export function Footer() {
  const { linkedin, instagram, contactEmail, instagramHandle } =
    siteConfig.social;

  return (
    <Section
      as="footer"
      className="border-t border-[var(--border)] pb-10 pt-14"
      containerClassName="space-y-10"
    >
      <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <div className="flex items-center gap-3">
            <Logo variant="mark" size={36} />
            <p className="font-display text-[0.95rem] tracking-[0.14em] text-ivory uppercase">
              {siteConfig.brand.name}
            </p>
          </div>
          <p className="mt-5 max-w-xs font-display text-lg leading-snug text-ivory/80">
            Right People.
            <br />
            One Room.
            <br />
            Endless Possibilities.
          </p>
          <p className="mt-5 text-sm text-muted">
            {siteConfig.event.city}, {siteConfig.event.region}
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          <ul className="space-y-3 text-[0.7rem] tracking-[0.16em] uppercase">
            {siteConfig.footerNav.map((item) => (
              <li key={item.href}>
                {item.href.startsWith("mailto:") ? (
                  <a href={item.href} className="nav-link text-muted">
                    {item.label}
                  </a>
                ) : (
                  <Link href={item.href} className="nav-link text-muted">
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          <ul className="space-y-3 text-[0.7rem] tracking-[0.16em] uppercase">
            {instagram ? (
              <li>
                <a
                  href={instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link text-muted"
                  onClick={() =>
                    track({
                      event: "outbound_social",
                      label: "instagram",
                      href: instagram,
                    })
                  }
                >
                  Instagram {instagramHandle}
                </a>
              </li>
            ) : null}
            {linkedin ? (
              <li>
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link text-muted"
                  onClick={() =>
                    track({
                      event: "outbound_social",
                      label: "linkedin",
                      href: linkedin,
                    })
                  }
                >
                  LinkedIn
                </a>
              </li>
            ) : null}
            {contactEmail ? (
              <li>
                <a
                  href={`mailto:${contactEmail}`}
                  className="nav-link text-muted normal-case tracking-normal"
                  onClick={() =>
                    track({
                      event: "outbound_social",
                      label: "contact",
                      href: `mailto:${contactEmail}`,
                    })
                  }
                >
                  {contactEmail}
                </a>
              </li>
            ) : null}
          </ul>
        </div>
      </div>

      <div className="flex flex-col gap-3 border-t border-[var(--border)] pt-8 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 {siteConfig.brand.name}. All rights reserved.</p>
        <p className="tracking-[0.08em]">{siteConfig.brand.tagline}</p>
      </div>
    </Section>
  );
}
