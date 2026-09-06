import { NextResponse } from "next/server";
import {
  applicationSchema,
  normalizeLinkedInUrl,
} from "@/lib/applicationSchema";
import {
  isEmailConfigured,
  sendApplicationConfirmation,
  sendApplicationNotification,
} from "@/lib/email";
import { checkRateLimit } from "@/lib/rateLimit";

export const runtime = "nodejs";

type FieldErrors = Record<string, string[]>;

const recentEmails = new Map<string, number>();
const DUPLICATE_WINDOW_MS = 24 * 60 * 60 * 1000;

function getClientKey(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0]?.trim() || "unknown";
  }
  return request.headers.get("x-real-ip") || "unknown";
}

function fieldErrorsFromZod(
  issues: { path: PropertyKey[]; message: string }[],
): FieldErrors {
  const errors: FieldErrors = {};
  for (const issue of issues) {
    const key = String(issue.path[0] ?? "form");
    if (!errors[key]) errors[key] = [];
    errors[key].push(issue.message);
  }
  return errors;
}

function hasRecentDuplicate(email: string): boolean {
  const now = Date.now();
  for (const [key, seenAt] of recentEmails) {
    if (now - seenAt > DUPLICATE_WINDOW_MS) {
      recentEmails.delete(key);
    }
  }
  const previous = recentEmails.get(email);
  return Boolean(previous && now - previous < DUPLICATE_WINDOW_MS);
}

function rememberEmail(email: string): void {
  recentEmails.set(email, Date.now());
}

export async function POST(request: Request) {
  const rate = checkRateLimit(`apply:${getClientKey(request)}`);
  if (!rate.allowed) {
    return NextResponse.json(
      {
        ok: false,
        code: "rate_limited",
        message: "Too many attempts. Please wait a few minutes and try again.",
      },
      {
        status: 429,
        headers: { "Retry-After": String(rate.retryAfterSeconds) },
      },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      {
        ok: false,
        code: "invalid_json",
        message: "Something went wrong. Please try again.",
      },
      { status: 400 },
    );
  }

  if (
    typeof body === "object" &&
    body !== null &&
    "website" in body &&
    typeof (body as { website?: unknown }).website === "string" &&
    (body as { website: string }).website.length > 0
  ) {
    return NextResponse.json({ ok: true, code: "received" }, { status: 200 });
  }

  const parsed = applicationSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      {
        ok: false,
        code: "validation_error",
        message: "Please check the highlighted fields.",
        fieldErrors: fieldErrorsFromZod(parsed.error.issues),
      },
      { status: 400 },
    );
  }

  if (!isEmailConfigured()) {
    return NextResponse.json(
      {
        ok: false,
        code: "not_configured",
        message:
          "Applications are temporarily unavailable. Please try again later.",
      },
      { status: 503 },
    );
  }

  const data = parsed.data;
  const linkedinUrl = normalizeLinkedInUrl(data.linkedinUrl);

  if (hasRecentDuplicate(data.email)) {
    return NextResponse.json(
      {
        ok: false,
        code: "duplicate",
        message:
          "It looks like you've already submitted a membership application using this email. We'll be in touch if there's a next step.",
      },
      { status: 409 },
    );
  }

  const notification = await sendApplicationNotification({
    fullName: data.fullName,
    email: data.email,
    phone: data.phone || "",
    linkedinUrl,
    company: data.company,
    role: data.role,
    currentBuild: data.currentBuild,
    whyJoin: data.whyJoin,
    contribution: data.contribution,
    referredBy: data.referredBy || "",
  });

  if (!notification.sent) {
    return NextResponse.json(
      {
        ok: false,
        code: "server_error",
        message: "We couldn't submit your application. Please try again.",
      },
      { status: 500 },
    );
  }

  rememberEmail(data.email);

  void sendApplicationConfirmation({
    to: data.email,
    fullName: data.fullName,
  });

  return NextResponse.json({ ok: true, code: "created" }, { status: 201 });
}
