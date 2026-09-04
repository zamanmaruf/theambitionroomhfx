"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { useForm } from "react-hook-form";
import { track } from "@/lib/analytics";
import {
  applicationDefaultValues,
  applicationSchema,
  CURRENT_BUILD_MAX,
  type ApplicationFormValues,
  type ApplicationOutput,
} from "@/lib/applicationSchema";

type ApiResponse = {
  ok: boolean;
  code?: string;
  message?: string;
  fieldErrors?: Record<string, string[]>;
};

export function ApplicationForm() {
  const router = useRouter();
  const startedRef = useRef(false);
  const [formError, setFormError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<ApplicationFormValues, unknown, ApplicationOutput>({
    resolver: zodResolver(applicationSchema),
    defaultValues: applicationDefaultValues,
    mode: "onBlur",
  });

  const [charCount, setCharCount] = useState(0);
  const remaining = CURRENT_BUILD_MAX - charCount;

  useEffect(() => {
    track({ event: "application_page_view" });
  }, []);

  const markStarted = () => {
    if (startedRef.current) return;
    startedRef.current = true;
    track({ event: "application_started" });
  };

  const onSubmit = handleSubmit(async (values) => {
    setFormError(null);

    try {
      const response = await fetch("/api/applications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = (await response.json()) as ApiResponse;

      if (response.status === 409 || data.code === "duplicate") {
        track({ event: "application_duplicate", code: "duplicate" });
        setFormError(
          data.message ||
            "It looks like you've already submitted an application using this email. We'll be in touch once it's been reviewed.",
        );
        return;
      }

      if (!response.ok || !data.ok) {
        track({
          event: "application_error",
          code: data.code || String(response.status),
        });

        if (data.fieldErrors) {
          for (const [field, messages] of Object.entries(data.fieldErrors)) {
            setError(field as keyof ApplicationFormValues, {
              type: "server",
              message: messages[0],
            });
          }
        }

        setFormError(
          data.message || "Something went wrong. Please try again shortly.",
        );
        return;
      }

      track({ event: "application_submitted" });
      router.push("/apply/success");
    } catch {
      track({ event: "application_error", code: "network" });
      setFormError(
        "We couldn't reach the server. Check your connection and try again.",
      );
    }
  });

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="space-y-9"
      onFocus={markStarted}
    >
      {/* Honeypot */}
      <div className="hp-field" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...register("website")}
        />
      </div>

      <Field
        id="fullName"
        label="Full name"
        error={errors.fullName?.message}
      >
        <input
          id="fullName"
          type="text"
          autoComplete="name"
          placeholder="Your name"
          className="form-input"
          aria-invalid={Boolean(errors.fullName)}
          aria-describedby={errors.fullName ? "fullName-error" : undefined}
          {...register("fullName")}
        />
      </Field>

      <Field
        id="email"
        label="Email address"
        error={errors.email?.message}
      >
        <input
          id="email"
          type="email"
          autoComplete="email"
          inputMode="email"
          placeholder="you@example.com"
          className="form-input"
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "email-error" : undefined}
          {...register("email")}
        />
      </Field>

      <Field
        id="phone"
        label="Phone number"
        error={errors.phone?.message}
      >
        <input
          id="phone"
          type="tel"
          autoComplete="tel"
          inputMode="tel"
          placeholder="+1 (902) 555-0123"
          className="form-input"
          aria-invalid={Boolean(errors.phone)}
          aria-describedby={errors.phone ? "phone-error" : undefined}
          {...register("phone")}
        />
      </Field>

      <Field
        id="linkedinUrl"
        label="LinkedIn profile"
        error={errors.linkedinUrl?.message}
      >
        <input
          id="linkedinUrl"
          type="text"
          autoComplete="url"
          placeholder="linkedin.com/in/yourname"
          className="form-input"
          aria-invalid={Boolean(errors.linkedinUrl)}
          aria-describedby={
            errors.linkedinUrl ? "linkedinUrl-error" : undefined
          }
          {...register("linkedinUrl")}
        />
      </Field>

      <Field
        id="company"
        label="Company / Organization"
        error={errors.company?.message}
      >
        <input
          id="company"
          type="text"
          autoComplete="organization"
          placeholder="Where are you currently building or working?"
          className="form-input"
          aria-invalid={Boolean(errors.company)}
          aria-describedby={errors.company ? "company-error" : undefined}
          {...register("company")}
        />
      </Field>

      <Field id="role" label="Your role" error={errors.role?.message}>
        <input
          id="role"
          type="text"
          autoComplete="organization-title"
          placeholder="Founder, Product Manager, Consultant, Engineer..."
          className="form-input"
          aria-invalid={Boolean(errors.role)}
          aria-describedby={errors.role ? "role-error" : undefined}
          {...register("role")}
        />
      </Field>

      <div>
        <label htmlFor="currentBuild" className="form-label">
          What are you currently building or working on?
        </label>
        <p id="currentBuild-hint" className="form-hint">
          It could be a company, career, project, idea, community, or something
          else you&apos;re serious about.
        </p>
        <textarea
          id="currentBuild"
          rows={5}
          maxLength={CURRENT_BUILD_MAX}
          placeholder="Tell us briefly what you're working on and where you're heading."
          className="form-input form-textarea"
          aria-invalid={Boolean(errors.currentBuild)}
          aria-describedby={
            errors.currentBuild
              ? "currentBuild-hint currentBuild-error currentBuild-count"
              : "currentBuild-hint currentBuild-count"
          }
          {...register("currentBuild", {
            onChange: (event) => {
              setCharCount(event.target.value.length);
            },
          })}
        />
        <div className="mt-2 flex items-start justify-between gap-4">
          {errors.currentBuild ? (
            <p id="currentBuild-error" className="form-error" role="alert">
              {errors.currentBuild.message}
            </p>
          ) : (
            <span />
          )}
          <p
            id="currentBuild-count"
            className={`shrink-0 text-xs tracking-wide ${
              remaining < 40 ? "text-gold" : "text-muted"
            }`}
          >
            {charCount} / {CURRENT_BUILD_MAX}
          </p>
        </div>
      </div>

      <div className="border-t border-[var(--border)] pt-8">
        <label className="flex cursor-pointer items-start gap-3">
          <input
            type="checkbox"
            className="form-checkbox mt-1"
            aria-invalid={Boolean(errors.acknowledgement)}
            aria-describedby={
              errors.acknowledgement ? "acknowledgement-error" : undefined
            }
            {...register("acknowledgement")}
          />
          <span className="text-sm leading-relaxed text-muted">
            I understand that submitting an application does not guarantee an
            invitation to The Ambition Room.
          </span>
        </label>
        {errors.acknowledgement ? (
          <p id="acknowledgement-error" className="form-error mt-2" role="alert">
            {errors.acknowledgement.message}
          </p>
        ) : null}
      </div>

      {formError ? (
        <div
          className="border border-[var(--border-strong)] bg-elevated px-4 py-3 text-sm leading-relaxed text-ivory"
          role="alert"
        >
          {formError}
        </div>
      ) : null}

      <div>
        <button
          type="submit"
          className="btn-primary w-full sm:w-auto"
          disabled={isSubmitting}
          aria-busy={isSubmitting}
        >
          <span>{isSubmitting ? "Submitting..." : "Submit Application"}</span>
          {!isSubmitting ? (
            <span className="arrow" aria-hidden="true">
              →
            </span>
          ) : null}
        </button>
        <p className="mt-6 text-xs leading-relaxed text-muted">
          Your information is used only to review your application and
          communicate with you about The Ambition Room.
        </p>
      </div>
    </form>
  );
}

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      {children}
      {error ? (
        <p id={`${id}-error`} className="form-error" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
