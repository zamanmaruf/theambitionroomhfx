import { z } from "zod";

export const CURRENT_BUILD_MAX = 750;

const linkedinPattern =
  /^(https?:\/\/)?(www\.)?linkedin\.com\/(in|pub|company)\/[A-Za-z0-9\-_%+/]+\/?$/i;

function normalizeWhitespace(value: string): string {
  return value.trim().replace(/\s+/g, " ");
}

export const applicationSchema = z.object({
  fullName: z
    .string()
    .transform(normalizeWhitespace)
    .pipe(
      z
        .string()
        .min(2, "Please enter your name.")
        .max(120, "Please keep your name under 120 characters."),
    ),
  email: z
    .string()
    .transform((v) => v.trim().toLowerCase())
    .pipe(z.email("Enter a valid email address.")),
  phone: z
    .string()
    .transform(normalizeWhitespace)
    .pipe(
      z
        .string()
        .min(7, "Please enter a valid phone number.")
        .max(30, "Please enter a valid phone number.")
        .refine((value) => {
          const digits = value.replace(/\D/g, "");
          return digits.length >= 7 && digits.length <= 15;
        }, "Please enter a valid phone number."),
    ),
  linkedinUrl: z
    .string()
    .transform((v) => v.trim())
    .pipe(
      z
        .string()
        .min(1, "Please add your LinkedIn profile.")
        .max(250, "That LinkedIn URL looks too long.")
        .refine((value) => {
          const withProtocol = value.startsWith("http")
            ? value
            : `https://${value}`;
          try {
            const url = new URL(withProtocol);
            return (
              linkedinPattern.test(value) ||
              (url.hostname.replace(/^www\./, "") === "linkedin.com" &&
                /\/(in|pub|company)\//i.test(url.pathname))
            );
          } catch {
            return false;
          }
        }, "Enter a valid LinkedIn profile URL."),
    ),
  company: z
    .string()
    .transform(normalizeWhitespace)
    .pipe(
      z
        .string()
        .min(1, "Please share your company or organization.")
        .max(160, "Please keep this under 160 characters."),
    ),
  role: z
    .string()
    .transform(normalizeWhitespace)
    .pipe(
      z
        .string()
        .min(1, "Please share your role.")
        .max(120, "Please keep your role under 120 characters."),
    ),
  currentBuild: z
    .string()
    .transform((v) => v.trim())
    .pipe(
      z
        .string()
        .min(20, "Tell us briefly what you're currently working on.")
        .max(
          CURRENT_BUILD_MAX,
          `Please keep this under ${CURRENT_BUILD_MAX} characters.`,
        ),
    ),
  acknowledgement: z
    .boolean()
    .refine(
      (value) => value === true,
      "Please confirm you understand that applying does not guarantee an invitation.",
    ),
  /** Honeypot — must remain empty */
  website: z.string().max(0, "Invalid submission."),
});

export type ApplicationOutput = z.output<typeof applicationSchema>;
export type ApplicationFormValues = z.input<typeof applicationSchema>;

export const applicationDefaultValues: ApplicationFormValues = {
  fullName: "",
  email: "",
  phone: "",
  linkedinUrl: "",
  company: "",
  role: "",
  currentBuild: "",
  acknowledgement: false,
  website: "",
};

export function normalizeLinkedInUrl(value: string): string {
  const trimmed = value.trim();
  if (!trimmed) return trimmed;
  return trimmed.startsWith("http") ? trimmed : `https://${trimmed}`;
}
