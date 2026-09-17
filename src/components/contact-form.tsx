"use client";

import { FormEvent, useState } from "react";
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

// No backend email service is wired up yet (see .env.example). This
// opens the visitor's email client with the message pre-filled so the
// form is functional today; swap this handler for a server action +
// email provider (e.g. Resend) once the owner sets that up.
export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = data.get("name");
    const phone = data.get("phone");
    const email = data.get("email");
    const projectType = data.get("projectType");
    const message = data.get("message");

    const body = [
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Email: ${email}`,
      `Project type: ${projectType}`,
      "",
      `${message}`,
    ].join("\n");

    const mailto = `${business.emailHref}?subject=${encodeURIComponent(
      `New estimate request from ${name}`,
    )}&body=${encodeURIComponent(body)}`;

    const link = document.createElement("a");
    link.href = mailto;
    link.click();
    setSubmitted(true);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
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
          placeholder="Location, rough scope, timeline — whatever helps us understand the job."
        />
      </Field>

      <button
        type="submit"
        className="w-full rounded-md bg-accent-500 px-6 py-3 text-sm font-semibold text-brand-950 shadow-sm transition-colors hover:bg-accent-600 sm:w-auto"
      >
        Request My Free Estimate
      </button>

      {submitted && (
        <p className="rounded-md bg-brand-50 px-4 py-3 text-sm text-brand-900">
          Opening your email app to send this to {business.email}. If nothing
          opened, email us directly or call {business.phone}.
        </p>
      )}
    </form>
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
