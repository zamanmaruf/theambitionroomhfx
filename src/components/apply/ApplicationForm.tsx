"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { useForm } from "react-hook-form";
import { ReserveEventButton } from "@/components/ui/Button";
import { track } from "@/lib/analytics";
import {
  applicationDefaultValues,
  applicationSchema,
  TEXT_MAX,
  type ApplicationFormValues,
  type ApplicationOutput,
} from "@/lib/applicationSchema";
import { siteConfig } from "@/lib/siteConfig";

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
  const [charCounts, setCharCounts] = useState({
    currentBuild: 0,
    whyJoin: 0,
    contribution: 0,
  });

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

  useEffect(() => {
    track({ event: "membership_page_view", placement: "membership_apply" });
  }, []);

  const markStarted = () => {
    if (startedRef.current) return;
    startedRef.current = true;
    track({ event: "membership_apply_start", placement: "membership_apply" });
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
        track({
          event: "membership_apply_duplicate",
          code: "duplicate",
        });
        setFormError(
          data.message ||
            "It looks like you've already submitted a membership application using this email.",
        );
        return;
      }

      if (!response.ok || !data.ok) {
        track({
          event: "membership_apply_error",
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
          data.message || "We couldn't submit your application. Please try again.",
        );
        return;
      }

      track({ event: "membership_apply_submit" });
      router.push(siteConfig.membership.successPath);
    } catch {
      track({ event: "membership_apply_error", code: "network" });
      setFormError(
        "We couldn't reach the server. Check your connection and try again.",
      );
    }
  });

  return (
    <div className="space-y-10">
      <aside className="border border-[var(--border)] bg-elevated px-5 py-5 text-sm leading-relaxed text-[color:var(--body)]">
        <p className="font-medium tracking-wide text-ivory">
          Looking for Halifax #001?
        </p>
        <p className="mt-2">
          Founding guest registration does not require a membership application.
        </p>
        <div className="mt-4">
          <ReserveEventButton
            placement="membership_apply"
            variant="outline"
            className="!min-h-10 !px-4 !py-2 !text-[0.625rem]"
          />
        </div>
      </aside>

      <form
        onSubmit={onSubmit}
        noValidate
        className="space-y-9"
        onFocus={markStarted}
      >
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

        <Field id="fullName" label="Full name" error={errors.fullName?.message}>
          <input
            id="fullName"
            type="text"
            autoComplete="name"
            placeholder="Your name"
            className="form-input"
            aria-invalid={Boolean(errors.fullName)}
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
            {...register("email")}
          />
        </Field>

        <Field
          id="phone"
          label="Phone number"
          optional
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
            {...register("role")}
          />
        </Field>

        <TextAreaField
          id="currentBuild"
          label="What are you currently building, leading or working on?"
          hint="It could be a company, career, project, idea, community, or something else you're serious about."
          placeholder="Tell us briefly what you're working on and where you're heading."
          error={errors.currentBuild?.message}
          count={charCounts.currentBuild}
          registerProps={register("currentBuild", {
            onChange: (e) =>
              setCharCounts((c) => ({
                ...c,
                currentBuild: e.target.value.length,
              })),
          })}
        />

        <TextAreaField
          id="whyJoin"
          label="Why are you interested in becoming part of The Ambition Room?"
          placeholder="Share what draws you to the community."
          error={errors.whyJoin?.message}
          count={charCounts.whyJoin}
          registerProps={register("whyJoin", {
            onChange: (e) =>
              setCharCounts((c) => ({
                ...c,
                whyJoin: e.target.value.length,
              })),
          })}
        />

        <TextAreaField
          id="contribution"
          label="What perspective, experience or contribution would you bring to the community?"
          placeholder="How would you strengthen the room for others?"
          error={errors.contribution?.message}
          count={charCounts.contribution}
          registerProps={register("contribution", {
            onChange: (e) =>
              setCharCounts((c) => ({
                ...c,
                contribution: e.target.value.length,
              })),
          })}
        />

        <Field
          id="referredBy"
          label="Were you referred by someone?"
          optional
          error={errors.referredBy?.message}
        >
          <input
            id="referredBy"
            type="text"
            placeholder="Name of the person who referred you"
            className="form-input"
            aria-invalid={Boolean(errors.referredBy)}
            {...register("referredBy")}
          />
        </Field>

        <div className="border-t border-[var(--border)] pt-8">
          <label className="flex cursor-pointer items-start gap-3">
            <input
              type="checkbox"
              className="form-checkbox mt-1"
              aria-invalid={Boolean(errors.acknowledgement)}
              {...register("acknowledgement")}
            />
            <span className="text-sm leading-relaxed text-muted">
              I understand that submitting an application does not guarantee
              membership in The Ambition Room.
            </span>
          </label>
          {errors.acknowledgement ? (
            <p className="form-error mt-2" role="alert">
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
            <span>
              {isSubmitting ? "Submitting..." : "Submit Application"}
            </span>
            {!isSubmitting ? (
              <span className="arrow" aria-hidden="true">
                →
              </span>
            ) : null}
          </button>
          <p className="mt-6 text-xs leading-relaxed text-muted">
            Your information is used only to review your membership application
            and communicate with you about The Ambition Room. See our{" "}
            <a href="/privacy" className="text-gold underline-offset-2 hover:underline">
              Privacy
            </a>{" "}
            page.
          </p>
        </div>
      </form>
    </div>
  );
}

function Field({
  id,
  label,
  error,
  optional,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  optional?: boolean;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="form-label">
        {label}
        {optional ? (
          <span className="ml-2 font-normal normal-case tracking-normal text-muted">
            Optional
          </span>
        ) : null}
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

function TextAreaField({
  id,
  label,
  hint,
  placeholder,
  error,
  count,
  registerProps,
}: {
  id: string;
  label: string;
  hint?: string;
  placeholder: string;
  error?: string;
  count: number;
  registerProps: ReturnType<ReturnType<typeof useForm>["register"]>;
}) {
  const remaining = TEXT_MAX - count;
  return (
    <div>
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      {hint ? <p className="form-hint">{hint}</p> : null}
      <textarea
        id={id}
        rows={4}
        maxLength={TEXT_MAX}
        placeholder={placeholder}
        className="form-input form-textarea"
        aria-invalid={Boolean(error)}
        {...registerProps}
      />
      <div className="mt-2 flex items-start justify-between gap-4">
        {error ? (
          <p className="form-error" role="alert">
            {error}
          </p>
        ) : (
          <span />
        )}
        <p
          className={`shrink-0 text-xs tracking-wide ${
            remaining < 40 ? "text-gold" : "text-muted"
          }`}
        >
          {count} / {TEXT_MAX}
        </p>
      </div>
    </div>
  );
}
