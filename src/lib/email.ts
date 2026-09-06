import { Resend } from "resend";
import { siteConfig } from "@/lib/siteConfig";

export type MembershipApplicationPayload = {
  fullName: string;
  email: string;
  phone: string;
  linkedinUrl: string;
  company: string;
  role: string;
  currentBuild: string;
  whyJoin: string;
  contribution: string;
  referredBy: string;
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

export async function sendApplicationNotification(
  application: MembershipApplicationPayload,
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
      subject: `Membership Application — ${application.fullName}`,
      text: [
        `New membership application for ${siteConfig.brand.name}`,
        "",
        `Name: ${application.fullName}`,
        `Email: ${application.email}`,
        `Phone: ${application.phone || "—"}`,
        `LinkedIn: ${application.linkedinUrl}`,
        `Company: ${application.company}`,
        `Role: ${application.role}`,
        `Referred by: ${application.referredBy || "—"}`,
        "",
        "What they're building / working on:",
        application.currentBuild,
        "",
        "Why they're interested:",
        application.whyJoin,
        "",
        "What they would contribute:",
        application.contribution,
        "",
        "Status: pending",
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
      subject: "Membership Application Received — The Ambition Room",
      text: [
        `Hi ${firstName},`,
        "",
        `We've received your application for membership in ${siteConfig.brand.name}.`,
        "",
        "Membership applications are considered individually. Submitting an application does not guarantee admission.",
        "",
        "If there is a strong fit, we'll be in touch with the next step.",
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
