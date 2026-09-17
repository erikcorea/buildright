import Link from "next/link";
import { Container } from "@/components/container";
import { PhoneIcon } from "@/components/icons";
import { business } from "@/data/business";

export function CTASection() {
  return (
    <section className="bg-brand-950">
      <Container className="flex flex-col items-center gap-6 py-16 text-center">
        <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Ready to start your project? Let&apos;s talk about it.
        </h2>
        <p className="max-w-xl text-white/90">
          Free consultations and estimates for most projects. Tell us what you&apos;re
          planning and we&apos;ll walk you through it.
        </p>
        <div className="flex flex-col items-center gap-3 sm:flex-row">
          <Link
            href="/contact"
            className="rounded-md bg-accent-500 px-6 py-3 text-sm font-semibold text-brand-950 shadow-sm transition-colors hover:bg-accent-hover"
          >
            Request a Free Estimate
          </Link>
          <a
            href={business.phoneHref}
            className="flex items-center gap-2 rounded-md border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            <PhoneIcon className="h-4 w-4" />
            {business.phone}
          </a>
        </div>
      </Container>
    </section>
  );
}
