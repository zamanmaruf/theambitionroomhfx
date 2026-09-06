export type AnalyticsEvent =
  | "halifax_registration_click"
  | "membership_apply_start"
  | "membership_apply_submit"
  | "membership_apply_duplicate"
  | "membership_apply_error"
  | "membership_page_view"
  | "founder_booking_click"
  | "partner_inquiry_click"
  | "outbound_social"
  | "cta_explore_membership"
  | "cta_discover_room";

export type CtaPlacement =
  | "nav"
  | "hero"
  | "event"
  | "event_page"
  | "final"
  | "mobile_nav"
  | "membership"
  | "membership_apply"
  | "founders"
  | "footer"
  | "faq"
  | "halifax_section"
  | "apply_success"
  | "partners";

type TrackPayload = {
  event: AnalyticsEvent;
  placement?: CtaPlacement;
  label?: string;
  href?: string;
  code?: string;
  founderId?: string;
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
