import type { Metadata } from "next";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { TestimonialCard } from "@/components/testimonial-card";
import { CTASection } from "@/components/cta-section";
import { sampleTestimonials } from "@/data/testimonials";
import { business } from "@/data/business";

export const metadata: Metadata = {
  title: "Reviews",
  description: `Customer feedback for ${business.name}, a Chicago general contractor and remodeling company.`,
};

export default function ReviewsPage() {
  return (
    <>
      <section className="bg-brand-950 py-20">
        <Container>
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-accent-400">
            Reviews
          </p>
          <h1 className="mt-2 max-w-2xl text-4xl font-bold tracking-tight text-white sm:text-5xl">
            What clients say
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-brand-100/80">
            We&apos;re still collecting our first published reviews. The cards below are placeholders
            that show how real testimonials will appear.
          </p>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <SectionHeading
            eyebrow="Sample layout"
            title="Real reviews coming soon"
            description="Every card below is marked “Sample” and does not represent a real customer. Have you worked with us? We'd love a real review to replace these."
          />
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {sampleTestimonials.map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>

          <div className="mx-auto mt-12 max-w-xl rounded-2xl border border-brand-100 bg-brand-50 p-8 text-center">
            <h3 className="text-lg font-semibold text-brand-950">Leave us a review</h3>
            <p className="mt-2 text-sm text-brand-900/85">
              Our Google Business Profile link will go here once it&apos;s set up.
            </p>
            <a
              href={business.googleReviewUrl}
              className="mt-5 inline-flex items-center justify-center rounded-md bg-accent-500 px-5 py-2.5 text-sm font-semibold text-white hover:bg-accent-600"
            >
              Leave a Google Review
            </a>
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
