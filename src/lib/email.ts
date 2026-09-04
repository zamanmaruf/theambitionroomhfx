import { Resend } from "resend";
import { siteConfig } from "@/lib/siteConfig";

export type ApplicationNotificationPayload = {
  fullName: string;
  email: string;
  phone: string;
  linkedinUrl: string;
  company: string;
  role: string;
  currentBuild: string;
};

function getResendClient(): { resend: Resend; from: string } | null {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  const from = process.env.RESEND_FROM_EMAIL?.trim();
  if (!apiKey || !from) return null;
  return { resend: new Resend(apiKey), from };
}

export function isEmailConfigured(): boolean {
  return getResendClient() !== null;
}

/** Notify the Ambition Room inbox with the full application. */
export async function sendApplicationNotification(
  application: ApplicationNotificationPayload,
): Promise<{ sent: boolean; reason?: string }> {
  const client = getResendClient();
  if (!client) {
    return { sent: false, reason: "not_configured" };
  }

  const { resend, from } = client;
  const inbox = siteConfig.applicationsInbox;

  try {
    const { error } = await resend.emails.send({
      from,
      to: inbox,
      replyTo: application.email,
      subject: `New Application — ${application.fullName} · ${siteConfig.event.edition}`,
      text: [
        `New application for ${siteConfig.brand.name} — ${siteConfig.event.edition}`,
        "",
        `Name: ${application.fullName}`,
        `Email: ${application.email}`,
        `Phone: ${application.phone}`,
        `LinkedIn: ${application.linkedinUrl}`,
        `Company: ${application.company}`,
        `Role: ${application.role}`,
        "",
        "What they're building:",
        application.currentBuild,
        "",
        "Reply to this email to respond directly to the applicant.",
      ].join("\n"),
    });

    if (error) {
      return { sent: false, reason: "provider_error" };
    }

    return { sent: true };
  } catch {
    return { sent: false, reason: "provider_error" };
  }
}

/** Optional confirmation to the applicant. */
export async function sendApplicationConfirmation(options: {
  to: string;
  fullName: string;
}): Promise<{ sent: boolean; reason?: string }> {
  const client = getResendClient();
  if (!client) {
    return { sent: false, reason: "not_configured" };
  }

  const { resend, from } = client;
  const firstName = options.fullName.split(/\s+/)[0] || "there";

  try {
    const { error } = await resend.emails.send({
      from,
      to: options.to,
      subject: "Application Received — The Ambition Room",
      text: [
        `Hi ${firstName},`,
        "",
        `We've received your request to join ${siteConfig.brand.name} — ${siteConfig.event.edition} on October 1.`,
        "",
        "Every application is reviewed individually to help us create a thoughtful mix of entrepreneurs and ambitious professionals.",
        "",
        "If approved, you'll receive private registration access by email.",
        "",
        siteConfig.brand.tagline,
        "",
        siteConfig.brand.name,
      ].join("\n"),
    });

    if (error) {
      return { sent: false, reason: "provider_error" };
    }

    return { sent: true };
  } catch {
    return { sent: false, reason: "provider_error" };
  }
}
