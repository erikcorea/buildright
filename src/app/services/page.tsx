import type { Metadata } from "next";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { CTASection } from "@/components/cta-section";
import { CheckCircleIcon } from "@/components/icons";
import { business } from "@/data/business";
import { serviceCategories } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Full-service general contracting in Chicago — kitchens, bathrooms, basements, decks, fences, flooring, and whole-home renovations.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-brand-950 py-20">
        <Container>
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-accent-400">
            Services
          </p>
          <h1 className="mt-2 max-w-2xl text-4xl font-bold tracking-tight text-white sm:text-5xl">
            One contractor for nearly any project
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-brand-100/80">
            From a single repair to a full-house rebuild, we scope, plan, and build the project to
            fit your space, timeline, and budget. Specialized electrical, plumbing, and other
            regulated work is coordinated with qualified professionals when required.
          </p>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <SectionHeading eyebrow="What we offer" title="Browse by category" />
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {serviceCategories.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-brand-50 py-20">
        <Container className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div className="rounded-2xl border border-brand-100 bg-white p-8">
            <h3 className="text-lg font-semibold text-brand-950">Our main specialties</h3>
            <p className="mt-2 text-sm text-brand-900/70">
              While we accept smaller jobs, these are the projects we handle most and know best.
            </p>
            <ul className="mt-5 space-y-3">
              {[
                "Whole-home renovations and rehabs",
                "Kitchen remodeling",
                "Bathroom remodeling",
                "Basement finishing",
                "Deck and fence construction",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm text-brand-900">
                  <CheckCircleIcon className="h-4 w-4 text-accent-600" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-brand-100 bg-white p-8">
            <h3 className="text-lg font-semibold text-brand-950">Estimates &amp; payment</h3>
            <p className="mt-4 text-sm leading-relaxed text-brand-900/70">{business.estimateNote}</p>
            <p className="mt-4 text-sm leading-relaxed text-brand-900/70">{business.financingNote}</p>
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
