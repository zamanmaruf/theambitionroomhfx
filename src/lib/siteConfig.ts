export const siteConfig = {
  brand: {
    name: "The Ambition Room",
    shortName: "Ambition Room",
    monogram: "AR",
    tagline: "Right People. One Room. Endless Possibilities.",
    description:
      "A curated gathering for entrepreneurs and ambitious professionals who believe the right conversation can change what happens next.",
  },
  event: {
    edition: "Halifax #001",
    foundingLabel: "The Founding Room",
    city: "Halifax",
    region: "Nova Scotia",
    country: "Canada",
    dateISO: "2026-10-01",
    dateDisplay: "October 1, 2026",
    dateShort: "October 1, 2026",
    timeStart: "7:00 PM",
    timeEnd: "10:00 PM",
    timeDisplay: "7:00 PM – 10:00 PM",
    timezone: "America/Halifax",
    capacity: 100,
    capacityDisplay:
      "A deliberately limited room of approximately 100 attendees.",
    /** Set when confirmed. null → "Venue to be announced" */
    venue: null as string | null,
    eyebrow: "Halifax #001 · October 1, 2026",
  },
  applyPath: "/apply",
  /** Inbox that receives every new application */
  applicationsInbox:
    process.env.APPLICATIONS_NOTIFY_EMAIL?.trim() ||
    "theambitionroomhfx@gmail.com",
  social: {
    linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL?.trim() || "",
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL?.trim() || "",
    contactEmail:
      process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() ||
      "theambitionroomhfx@gmail.com",
  },
  seo: {
    title:
      "The Ambition Room | Halifax Entrepreneur & Professional Networking",
    description:
      "The Ambition Room is a curated gathering for entrepreneurs and ambitious professionals in Halifax. Request an invitation to Halifax #001 on October 1, 2026.",
  },
  nav: [
    { label: "About", href: "#about" },
    { label: "The Room", href: "#the-room" },
    { label: "Halifax #001", href: "#halifax-001" },
    { label: "How It Works", href: "#how-it-works" },
  ] as const,
  audience: [
    "Entrepreneurs",
    "Founders",
    "Business Owners",
    "Executives",
    "Operators",
    "Technology & Product",
    "Sales & Growth",
    "Finance & Investment",
    "Professional Services",
    "Creators",
  ] as const,
  url: process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://theambitionroom.com",
} as const;

export type SiteConfig = typeof siteConfig;

export function getVenueDisplay(): string {
  return siteConfig.event.venue ?? "Venue to be announced";
}
