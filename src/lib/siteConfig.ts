export type RegistrationStatus = "registration_open" | "waitlist" | "closed";

export type FounderProfile = {
  id: string;
  name: string;
  /** Optional legal / full name shown subtly when different from display name */
  legalName: string;
  role: string;
  /** Secondary focus line under title */
  secondaryFocus: string;
  bio: string;
  linkedinUrl: string;
  instagramUrl: string;
  bookingUrl: string;
  bookingCtaLabel: string;
  headshotSrc: string;
  /** Optional private work label for advisory section */
  privateWorkLabel: string;
  /** Compliance disclosure — empty means hide */
  disclosure: string;
  showAdvisoryCta: boolean;
};

const marufBio = `Maruf is Co-Founder of The Ambition Room and CEO of Finacly AI Inc. He is one of the people shaping the strategy, brand, growth, and experience behind The Ambition Room's development.

He started building The Ambition Room around a simple belief: the quality of the people around you can fundamentally change the opportunities, ideas, and relationships available to you.

His work on the brand spans digital experience, audience growth, partnerships, sponsorship development, community building, and the design of experiences intended to bring ambitious people together in a more intentional way.

Through The Ambition Room, Maruf is focused on building more than a series of events. The long-term ambition is to create a trusted community where access means something, relationships have depth, and the people inside the room make the room valuable.`;

const preeBio = `Pree Dhawan is Co-Founder of The Ambition Room, where she brings a relationship-first perspective to building a community around ambitious people, meaningful conversations, and genuine connection.

Her professional background spans technology, business development, client relationships, and financial services. Before moving further into financial advisory work, Pree held customer-facing and business-development roles across organizations including Splunk, Planswell, and Admiral Insurance.

Outside of The Ambition Room, her work and writing explore financial well-being, personal growth, spirituality, and the experiences that shape how people build their lives. She is currently developing her voice as a writer alongside her professional work.`;

export const siteConfig = {
  brand: {
    name: "The Ambition Room",
    shortName: "Ambition Room",
    monogram: "AR",
    tagline: "Right People. One Room. Endless Possibilities.",
    description:
      "The Ambition Room is a private community and curated gathering for entrepreneurs and ambitious professionals who believe the right room can change what happens next.",
    positioning:
      "A private community and curated gathering for entrepreneurs and ambitious professionals.",
  },
  event: {
    slug: "halifax-001",
    edition: "Halifax #001",
    foundingLabel: "The Founding Room",
    city: "Halifax",
    region: "Nova Scotia",
    country: "Canada",
    postalCode: "B3J 1H5",
    dateISO: "2026-10-01",
    dateDisplay: "October 1, 2026",
    dayDisplay: "Thursday, October 1, 2026",
    timeStart: "7:00 PM",
    timeEnd: "10:00 PM",
    timeDisplay: "7:00 PM – 10:00 PM",
    timezone: "America/Halifax",
    capacity: 100,
    capacityDisplay:
      "A deliberately limited room of approximately 100 attendees.",
    venue: "Besharam Bar and Grill",
    venuePartnerLabel: "Venue Partner",
    addressLine1: "5680 Spring Garden Rd",
    addressDisplay: "5680 Spring Garden Rd, Halifax, Nova Scotia B3J 1H5",
    complimentary: true,
    registrationStatus: "registration_open" as RegistrationStatus,
    eventbriteUrl:
      "https://www.eventbrite.ca/e/the-ambition-room-halifax-001-tickets-1999870249752",
    path: "/#halifax-001",
    eyebrow: "Halifax · Founding 2026",
  },
  membership: {
    path: "/membership",
    applyPath: "/membership/apply",
    successPath: "/membership/apply/success",
  },
  applicationsInbox:
    process.env.APPLICATIONS_NOTIFY_EMAIL?.trim() ||
    "theambitionroomhfx@gmail.com",
  social: {
    linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL?.trim() || "",
    instagram:
      process.env.NEXT_PUBLIC_INSTAGRAM_URL?.trim() ||
      "https://www.instagram.com/theambitionroomhfx/",
    instagramHandle: "@theambitionroomhfx",
    contactEmail:
      process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() ||
      "theambitionroomhfx@gmail.com",
  },
  seo: {
    title:
      "The Ambition Room | Private Community for Entrepreneurs & Ambitious Professionals",
    description:
      "The Ambition Room is a private community and curated gathering for entrepreneurs and ambitious professionals. Right People. One Room. Endless Possibilities.",
  },
  nav: [
    { label: "The Room", href: "/" },
    { label: "Membership", href: "/membership" },
    { label: "Founders", href: "/founders" },
  ] as const,
  footerNav: [
    { label: "The Room", href: "/" },
    { label: "Membership", href: "/membership" },
    { label: "Founders", href: "/founders" },
    { label: "Contact", href: "mailto:theambitionroomhfx@gmail.com" },
    { label: "Privacy", href: "/privacy" },
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
    "Law",
    "Accounting",
    "Professional Services",
    "Creators",
    "Builders",
    "Ambitious Professionals",
  ] as const,
  founders: [
    {
      id: "maruf",
      name: process.env.NEXT_PUBLIC_MARUF_DISPLAY_NAME?.trim() || "Md Maruf Uzzaman",
      legalName: process.env.NEXT_PUBLIC_MARUF_LEGAL_NAME?.trim() || "",
      role: "Co-Founder, The Ambition Room",
      secondaryFocus: "CEO, Finacly AI Inc. · Brand · Growth · Partnerships",
      bio: process.env.NEXT_PUBLIC_MARUF_BIO?.trim() || marufBio,
      linkedinUrl:
        process.env.NEXT_PUBLIC_MARUF_LINKEDIN?.trim() ||
        "https://www.linkedin.com/in/md-maruf-uzzaman-675b84143",
      instagramUrl: process.env.NEXT_PUBLIC_MARUF_INSTAGRAM?.trim() || "",
      bookingUrl: process.env.NEXT_PUBLIC_MARUF_BOOKING_URL?.trim() || "",
      bookingCtaLabel: "Book a Strategy Conversation",
      headshotSrc:
        process.env.NEXT_PUBLIC_MARUF_HEADSHOT?.trim() ||
        "/founders/maruf-uzzaman.png",
      privateWorkLabel: "CEO, Finacly AI Inc. · Brand · Growth · Community",
      disclosure: "",
      showAdvisoryCta: true,
    },
    {
      id: "pree-dhawan",
      name: "Pree Dhawan",
      legalName: "Amanpreet Dhawan",
      role: "Co-Founder, The Ambition Room",
      secondaryFocus: "Financial Advisor · Writer",
      bio: process.env.NEXT_PUBLIC_PREE_BIO?.trim() || preeBio,
      linkedinUrl: process.env.NEXT_PUBLIC_PREE_LINKEDIN?.trim() || "",
      instagramUrl:
        process.env.NEXT_PUBLIC_PREE_INSTAGRAM?.trim() ||
        "https://www.instagram.com/celestrapree_/",
      bookingUrl: process.env.NEXT_PUBLIC_PREE_BOOKING_URL?.trim() || "",
      bookingCtaLabel: "Schedule a Conversation",
      headshotSrc:
        process.env.NEXT_PUBLIC_PREE_HEADSHOT?.trim() ||
        "/founders/pree-dhawan.jpg",
      privateWorkLabel: "",
      /** Only publish once compliance-approved wording is supplied */
      disclosure: process.env.PREE_FINANCIAL_DISCLOSURE?.trim() || "",
      showAdvisoryCta: true,
    },
  ] satisfies FounderProfile[],
  partners: {
    venue: {
      name: "Besharam Bar and Grill",
      role: "Venue Partner",
      description: "Hosting the founding edition of The Ambition Room.",
      logoSrc: "/partners/besharam.png",
    },
    inquiryEmail:
      process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() ||
      "theambitionroomhfx@gmail.com",
  },
  url: process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://theambitionroom.com",
} as const;

export type SiteConfig = typeof siteConfig;

export function getVenueDisplay(): string {
  return siteConfig.event.venue;
}

export function eventbriteUrl(utmContent: string): string {
  const url = new URL(siteConfig.event.eventbriteUrl);
  url.searchParams.set("utm_source", "website");
  url.searchParams.set("utm_medium", "owned");
  url.searchParams.set("utm_campaign", "halifax001");
  url.searchParams.set("utm_content", utmContent);
  return url.toString();
}

export function getVisibleFounders(): FounderProfile[] {
  return [...siteConfig.founders].filter((f) => Boolean(f.name.trim()));
}

export function getRegistrationCtaLabel(): string {
  switch (siteConfig.event.registrationStatus) {
    case "waitlist":
      return "Join the Waitlist";
    case "closed":
      return "Registration Closed";
    default:
      return "Reserve Your Place";
  }
}

export function isRegistrationOpen(): boolean {
  return siteConfig.event.registrationStatus === "registration_open";
}

export function isWaitlist(): boolean {
  return siteConfig.event.registrationStatus === "waitlist";
}
