import type { Metadata } from "next";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { CTASection } from "@/components/cta-section";
import { CheckCircleIcon } from "@/components/icons";
import { business } from "@/data/business";

export const metadata: Metadata = {
  title: "About Us",
  description: `Meet ${business.ownerName}, owner of ${business.name}, and learn the story behind our Chicago remodeling and construction company.`,
};

const values = [
  {
    title: "Attention to detail",
    description: "The same precision and follow-through that mattered in the ER carries directly into how we build.",
  },
  {
    title: "Responsibility",
    description: "We hold ourselves accountable for every job we take on, from first call to final walkthrough.",
  },
  {
    title: "Clear communication",
    description: "You'll always know what's happening, what's next, and what it costs.",
  },
  {
    title: "Staying calm under pressure",
    description: "Older homes and tricky spaces come with surprises. We plan for them and work through them with you.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-brand-950 py-20">
        <Container>
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-accent-400">
            About us
          </p>
          <h1 className="mt-2 max-w-2xl text-4xl font-bold tracking-tight text-white sm:text-5xl">
            From the ER to the job site: built on the same values
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/90">{business.foundedStory}</p>
        </Container>
      </section>

      <section className="py-20">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <SectionHeading eyebrow="Our story" title="Nine years of hands-on experience" />
            <p className="mt-5 text-base leading-relaxed text-brand-900/85">
              {business.experienceStory}
            </p>
            <p className="mt-5 text-base leading-relaxed text-brand-900/85">{business.partnerStory}</p>
            <p className="mt-5 text-base leading-relaxed text-brand-900/85">{business.customers}</p>
          </div>

          <aside className="rounded-2xl border border-brand-100 bg-brand-50 p-7">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-brand-900/78">
              {business.ownerTitle}
            </h3>
            <p className="mt-2 text-2xl font-bold text-brand-950">{business.ownerName}</p>
            <p className="mt-4 text-sm leading-relaxed text-brand-900/85">
              Founder of {business.name} and a licensed General Contractor, with{" "}
              {business.yearsInBusiness}+ years of hands-on remodeling and construction
              experience. Before that, nearly 10 years as a Registered Nurse in the Emergency
              Room.
            </p>
            <p className="mt-3 flex items-center gap-2 text-sm font-semibold text-brand-950">
              <CheckCircleIcon className="h-4 w-4 shrink-0 text-accent-600" />
              Licensed &amp; insured
            </p>
            <div className="mt-6 space-y-2 border-t border-brand-100 pt-5 text-sm">
              <a href={business.phoneHref} className="block font-medium text-brand-900 hover:text-accent-600">
                {business.phone}
              </a>
              <a href={business.emailHref} className="block font-medium text-brand-900 hover:text-accent-600">
                {business.email}
              </a>
            </div>
          </aside>
        </Container>
      </section>

      <section className="bg-brand-50 py-20">
        <Container>
          <SectionHeading eyebrow="What guides us" title="Values carried over from healthcare" align="center" />
          <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2">
            {values.map((value) => (
              <div key={value.title} className="flex gap-4 rounded-xl border border-brand-100 bg-white p-6">
                <CheckCircleIcon className="h-6 w-6 shrink-0 text-accent-600" />
                <div>
                  <p className="font-semibold text-brand-950">{value.title}</p>
                  <p className="mt-1 text-sm text-brand-900/85">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container className="rounded-2xl bg-brand-900 p-10 sm:p-14">
          <div className="mx-auto max-w-2xl text-center">
            <CheckCircleIcon className="mx-auto h-10 w-10 text-accent-400" />
            <p className="mt-4 text-lg italic leading-relaxed text-white">
              &ldquo;For me, BuildRight is about more than construction. It&apos;s about building
              a company homeowners can trust with their homes, their investment, and their
              vision.&rdquo;
            </p>
            <p className="mt-4 text-sm font-semibold text-white/90">
              {business.ownerName}, {business.ownerTitle}
            </p>
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
