export type AnalyticsEvent =
  | "cta_request_invitation"
  | "cta_discover_room"
  | "outbound_social"
  | "application_page_view"
  | "application_started"
  | "application_submitted"
  | "application_duplicate"
  | "application_error";

export type CtaPlacement =
  | "nav"
  | "hero"
  | "event"
  | "final"
  | "how_it_works"
  | "mobile_nav";

type TrackPayload = {
  event: AnalyticsEvent;
  placement?: CtaPlacement;
  label?: string;
  href?: string;
  code?: string;
};

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export function track(payload: TrackPayload): void {
  if (typeof window === "undefined") return;

  const entry = {
    ...payload,
    timestamp: new Date().toISOString(),
  };

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(entry);

  if (process.env.NODE_ENV === "development") {
    console.info("[analytics]", entry);
  }
}

export function trackCta(placement: CtaPlacement): void {
  track({
    event: "cta_request_invitation",
    placement,
    href: "/apply",
  });
}
