"use client";

import { Logo } from "@/components/ui/Logo";
import { Section } from "@/components/ui/Section";
import { track } from "@/lib/analytics";
import { siteConfig } from "@/lib/siteConfig";

export function Footer() {
  const { linkedin, instagram, contactEmail } = siteConfig.social;
  const hasSocial = Boolean(linkedin || instagram || contactEmail);

  return (
    <Section
      as="footer"
      className="border-t border-[var(--border)] pb-10 pt-14"
      containerClassName="space-y-10"
    >
      <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <div className="flex items-center gap-3">
            <Logo variant="mark" size={36} />
            <p className="font-display text-[0.95rem] tracking-[0.14em] text-ivory uppercase">
              {siteConfig.brand.name}
            </p>
          </div>
          <p className="mt-4 text-sm text-muted">
            {siteConfig.event.city}, {siteConfig.event.region}
          </p>
          <p className="mt-6 max-w-xs font-display text-base text-ivory/75">
            {siteConfig.brand.tagline}
          </p>
        </div>

        {hasSocial ? (
          <ul className="flex flex-wrap gap-6 text-[0.7rem] tracking-[0.16em] uppercase">
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
                  Instagram
                </a>
              </li>
            ) : null}
            {contactEmail ? (
              <li>
                <a
                  href={`mailto:${contactEmail}`}
                  className="nav-link text-muted"
                  onClick={() =>
                    track({
                      event: "outbound_social",
                      label: "contact",
                      href: `mailto:${contactEmail}`,
                    })
                  }
                >
                  Contact
                </a>
              </li>
            ) : null}
          </ul>
        ) : (
          <p className="text-[0.7rem] tracking-[0.14em] text-muted uppercase">
            Social channels coming soon
          </p>
        )}
      </div>

      <div className="flex flex-col gap-3 border-t border-[var(--border)] pt-8 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 {siteConfig.brand.name}. All rights reserved.</p>
        <p className="tracking-[0.08em]">{siteConfig.brand.tagline}</p>
      </div>
    </Section>
  );
}
