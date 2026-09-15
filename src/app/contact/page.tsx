import type { Metadata } from "next";
import { Container } from "@/components/container";
import { ContactForm } from "@/components/contact-form";
import { ClockIcon, MailIcon, MapPinIcon, PhoneIcon } from "@/components/icons";
import { business } from "@/data/business";

export const metadata: Metadata = {
  title: "Contact",
  description: `Request a free estimate from ${business.name}. Call, text, email, or send the form — we typically respond fast.`,
};

export default function ContactPage() {
  return (
    <section className="py-20">
      <Container className="grid grid-cols-1 gap-12 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-accent-600">
            Contact
          </p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-brand-950">
            Let&apos;s talk about your project
          </h1>
          <p className="mt-4 text-base leading-relaxed text-brand-900/70">
            {business.estimateNote}
          </p>

          <div className="mt-8 space-y-5">
            <a
              href={business.phoneHref}
              className="flex items-center gap-3 rounded-xl border border-brand-100 bg-white p-4 hover:border-accent-200"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-50 text-accent-600">
                <PhoneIcon className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-brand-900/50">
                  Call or text
                </p>
                <p className="text-sm font-semibold text-brand-950">{business.phone}</p>
              </div>
            </a>

            <a
              href={business.emailHref}
              className="flex items-center gap-3 rounded-xl border border-brand-100 bg-white p-4 hover:border-accent-200"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-50 text-accent-600">
                <MailIcon className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-brand-900/50">
                  Email
                </p>
                <p className="text-sm font-semibold text-brand-950">{business.email}</p>
              </div>
            </a>

            <div className="flex items-center gap-3 rounded-xl border border-brand-100 bg-white p-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-50 text-accent-600">
                <MapPinIcon className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-brand-900/50">
                  Service area
                </p>
                <p className="text-sm font-semibold text-brand-950">
                  Chicago &amp; suburbs — ~{business.travelRadiusMiles} mile radius
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-xl border border-brand-100 bg-white p-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-50 text-accent-600">
                <ClockIcon className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-brand-900/50">
                  Hours
                </p>
                {business.hours.map((h) => (
                  <p key={h.days} className="text-sm text-brand-900">
                    <span className="font-semibold text-brand-950">{h.days}:</span> {h.time}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-3">
          <div className="rounded-2xl border border-brand-100 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-lg font-semibold text-brand-950">Request a free estimate</h2>
            <p className="mt-1 text-sm text-brand-900/70">
              Tell us about the project and we&apos;ll get back to you to schedule a visit.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
