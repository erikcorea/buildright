"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { submitContactForm, type ContactFormState } from "@/app/contact/actions";
import { business } from "@/data/business";

const projectTypes = [
  "Whole-home renovation",
  "Kitchen remodel",
  "Bathroom remodel",
  "Basement finishing",
  "Deck or fence",
  "Doors or windows",
  "Electrical or plumbing fixtures",
  "General repair / other",
];

const initialState: ContactFormState = { status: "idle" };

export function ContactForm() {
  const [state, formAction] = useActionState(submitContactForm, initialState);

  return (
    <form action={formAction} className="space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Full name" htmlFor="name">
          <input
            id="name"
            name="name"
            type="text"
            required
            className="input"
            placeholder="Jane Smith"
          />
        </Field>
        <Field label="Phone number" htmlFor="phone">
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            className="input"
            placeholder="(312) 555-0123"
          />
        </Field>
      </div>

      <Field label="Email address" htmlFor="email">
        <input
          id="email"
          name="email"
          type="email"
          required
          className="input"
          placeholder="you@example.com"
        />
      </Field>

      <Field label="Project type" htmlFor="projectType">
        <select id="projectType" name="projectType" required className="input" defaultValue="">
          <option value="" disabled>
            Select a project type
          </option>
          {projectTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </Field>

      <Field label="Tell us about your project" htmlFor="message">
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="input resize-none"
          placeholder="Location, rough scope, timeline, whatever helps us understand the job."
        />
      </Field>

      <SubmitButton />

      {state.status === "success" && (
        <p className="rounded-md bg-brand-50 px-4 py-3 text-sm text-brand-900">
          {state.message}
        </p>
      )}
      {state.status === "error" && (
        <p className="rounded-md border border-accent-200 bg-accent-50 px-4 py-3 text-sm text-brand-900">
          {state.message} You can also reach us at{" "}
          <a href={business.phoneHref} className="font-semibold text-accent-600">
            {business.phone}
          </a>
          .
        </p>
      )}
    </form>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full rounded-md bg-accent-500 px-6 py-3 text-sm font-semibold text-brand-950 shadow-sm transition-colors hover:bg-accent-hover disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
    >
      {pending ? "Sending..." : "Request My Free Estimate"}
    </button>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-medium text-brand-900">
        {label}
      </label>
      {children}
    </div>
  );
}
