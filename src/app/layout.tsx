import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Instrument_Sans } from "next/font/google";
import { siteConfig } from "@/lib/siteConfig";
import "./globals.css";

const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const sans = Instrument_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: siteConfig.seo.title,
  description: siteConfig.seo.description,
  applicationName: siteConfig.brand.name,
  keywords: [
    "The Ambition Room",
    "Halifax networking",
    "entrepreneur networking Halifax",
    "professional community Halifax",
    "Halifax #001",
    "curated networking event",
  ],
  authors: [{ name: siteConfig.brand.name }],
  creator: siteConfig.brand.name,
  publisher: siteConfig.brand.name,
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: siteConfig.url,
    siteName: siteConfig.brand.name,
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
  },
  category: "Networking",
};

export const viewport: Viewport = {
  themeColor: "#080808",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

function EventJsonLd() {
  const startDate = `${siteConfig.event.dateISO}T19:00:00-03:00`;
  const endDate = `${siteConfig.event.dateISO}T22:00:00-03:00`;

  const data = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: `${siteConfig.brand.name} — ${siteConfig.event.edition}`,
    description: siteConfig.seo.description,
    startDate,
    endDate,
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    image: [`${siteConfig.url}/opengraph-image`],
    organizer: {
      "@type": "Organization",
      name: siteConfig.brand.name,
      url: siteConfig.url,
    },
    location: {
      "@type": "Place",
      name: `${siteConfig.event.city}, ${siteConfig.event.region}`,
      address: {
        "@type": "PostalAddress",
        addressLocality: siteConfig.event.city,
        addressRegion: siteConfig.event.region,
        addressCountry: "CA",
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${sans.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-bg font-sans text-ivory">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-gold focus:px-4 focus:py-2 focus:text-bg"
        >
          Skip to content
        </a>
        <div className="grain" aria-hidden="true" />
        {children}
        <EventJsonLd />
      </body>
    </html>
  );
}
