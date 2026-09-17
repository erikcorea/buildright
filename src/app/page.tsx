import Link from "next/link";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { ProjectCarousel } from "@/components/project-carousel";
import { HeroCarousel } from "@/components/hero-carousel";
import { TestimonialCard } from "@/components/testimonial-card";
import { CTASection } from "@/components/cta-section";
import { Stat } from "@/components/stat";
import {
  CheckCircleIcon,
  ChevronRightIcon,
  ClockIcon,
  HomeIcon,
  MapPinIcon,
  PhoneIcon,
  ShieldCheckIcon,
} from "@/components/icons";
import { business } from "@/data/business";
import { serviceCategories } from "@/data/services";
import { sampleProjects } from "@/data/projects";
import { sampleTestimonials } from "@/data/testimonials";

const heroCarouselImages = [
  "kitchen-remodel",
  "bathroom-remodel",
  "whole-home-renovation",
  "basement-finish",
  "fence-install",
]
  .map((slug) => sampleProjects.find((p) => p.slug === slug)?.images[0])
  .filter((image): image is NonNullable<typeof image> => Boolean(image));

const process = [
  {
    title: "Free consultation",
    description: "Call, text, or send the form. We'll talk through your project and goals.",
  },
  {
    title: "On-site estimate",
    description: "We walk the space with you and put together clear, honest pricing.",
  },
  {
    title: "Build it right",
    description: "Clear timelines, steady communication, and a clean job site the whole way.",
  },
  {
    title: "Final walkthrough",
    description: "We finish with you — not just for you — so the result is exactly right.",
  },
];

export default function Home() {
  const featuredServices = serviceCategories.filter((s) => s.featured);

  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-brand-950">
        <HeroCarousel images={heroCarouselImages} />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-l from-brand-950 via-brand-950/90 to-brand-950/35 sm:to-brand-950/25"
        />
        <Container className="relative py-24 sm:py-28 lg:py-32">
          <div className="max-w-xl lg:ml-auto">
            <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wide text-accent-400">
              Chicago &amp; the surrounding suburbs
            </p>
            <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
              {business.tagline}
            </h1>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-brand-100/80">
              {business.shortDescription}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-1 rounded-md bg-accent-500 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-accent-600"
              >
                Get a Free Estimate
                <ChevronRightIcon className="h-4 w-4" />
              </Link>
              <a
                href={business.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-md border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                <PhoneIcon className="h-4 w-4" />
                {business.phone}
              </a>
            </div>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-brand-100/80">
              <li className="flex items-center gap-2">
                <CheckCircleIcon className="h-4 w-4 text-accent-400" />
                {business.yearsInBusiness}+ years hands-on experience
              </li>
              <li className="flex items-center gap-2">
                <CheckCircleIcon className="h-4 w-4 text-accent-400" />
                Free estimates
              </li>
              <li className="flex items-center gap-2">
                <CheckCircleIcon className="h-4 w-4 text-accent-400" />
                Owner-led on every job
              </li>
            </ul>
          </div>
        </Container>
      </section>

      {/* Stats bar */}
      <section className="bg-brand-900">
        <Container className="grid grid-cols-2 gap-6 py-10 sm:grid-cols-4">
          <Stat value={`${business.yearsInBusiness}+`} label="Years of experience" />
          <Stat value="Free" label="Estimates on most projects" />
          <Stat value={`${business.travelRadiusMiles}mi`} label="Typical service radius" />
          <Stat value="1:1" label="Owner involved start to finish" />
        </Container>
      </section>

      {/* Services */}
      <section className="py-20">
        <Container>
          <SectionHeading
            eyebrow="What we do"
            title="Full-service remodeling & construction"
            description="From a single repair to a full-house rebuild, we scope, plan, and build the project to fit your space, timeline, and budget."
          />
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredServices.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-1 text-sm font-semibold text-accent-600 hover:text-accent-700"
            >
              View all services
              <ChevronRightIcon className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </section>

      {/* Why choose us */}
      <section className="bg-brand-50 py-20">
        <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Why BuildRight" title="Built right. Every time." />
            <p className="mt-5 text-base leading-relaxed text-brand-900/70">
              {business.differentiator}
            </p>
            <ul className="mt-6 space-y-4">
              <li className="flex gap-3">
                <ShieldCheckIcon className="h-5 w-5 shrink-0 text-accent-600" />
                <span className="text-sm text-brand-900/80">
                  Honest recommendations and transparent, structured pricing.
                </span>
              </li>
              <li className="flex gap-3">
                <ClockIcon className="h-5 w-5 shrink-0 text-accent-600" />
                <span className="text-sm text-brand-900/80">
                  Clear timelines and steady communication from start to finish.
                </span>
              </li>
              <li className="flex gap-3">
                <HomeIcon className="h-5 w-5 shrink-0 text-accent-600" />
                <span className="text-sm text-brand-900/80">
                  Personally involved from the first conversation through the final walkthrough.
                </span>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-brand-100 bg-white p-8 shadow-sm">
            <h3 className="text-lg font-semibold text-brand-950">How a project works</h3>
            <ol className="mt-6 space-y-6">
              {process.map((step, i) => (
                <li key={step.title} className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent-500 text-sm font-bold text-white">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-semibold text-brand-950">{step.title}</p>
                    <p className="mt-1 text-sm text-brand-900/70">{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </section>

      {/* Projects */}
      <section className="py-20">
        <Container>
          <SectionHeading
            eyebrow="Popular projects"
            title="The kind of work we love building"
            description="Photos from real completed jobs, showing the scope and typical timeline for our most-requested projects."
          />
          <div className="mt-10">
            <ProjectCarousel projects={sampleProjects} />
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/projects"
              className="inline-flex items-center gap-1 text-sm font-semibold text-accent-600 hover:text-accent-700"
            >
              See more project types
              <ChevronRightIcon className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="bg-brand-50 py-20">
        <Container>
          <SectionHeading
            eyebrow="Client feedback"
            title="What it's like to work with us"
            align="center"
          />
          <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-3">
            {sampleTestimonials.map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>
        </Container>
      </section>

      {/* Service area */}
      <section className="py-20">
        <Container className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Where we work" title="Proudly serving Chicagoland" />
            <p className="mt-5 text-base leading-relaxed text-brand-900/70">
              {business.serviceAreaNote}
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-accent-600 hover:text-accent-700"
            >
              Not sure if we cover your area? Ask us
              <ChevronRightIcon className="h-4 w-4" />
            </Link>
          </div>
          <div className="flex flex-wrap gap-3">
            {business.serviceAreaPrimary.map((city) => (
              <span
                key={city}
                className="flex items-center gap-2 rounded-full border border-brand-100 bg-white px-4 py-2 text-sm font-medium text-brand-900"
              >
                <MapPinIcon className="h-4 w-4 text-accent-500" />
                {city}
              </span>
            ))}
            <span className="flex items-center gap-2 rounded-full border border-dashed border-brand-100 px-4 py-2 text-sm font-medium text-brand-900/60">
              + surrounding suburbs
            </span>
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
