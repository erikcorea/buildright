import { QuoteIcon, StarIcon } from "@/components/icons";
import type { SampleTestimonial } from "@/data/testimonials";

export function TestimonialCard({ testimonial }: { testimonial: SampleTestimonial }) {
  return (
    <div className="flex flex-col rounded-xl border border-brand-100 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex gap-0.5 text-accent-500">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <StarIcon key={i} className="h-4 w-4" />
          ))}
        </div>
        <QuoteIcon className="h-6 w-6 text-brand-100" />
      </div>
      <p className="mt-4 text-sm leading-relaxed text-brand-900/80">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <div className="mt-5 flex items-center justify-between border-t border-brand-100 pt-4">
        <span className="text-sm font-semibold text-brand-950">{testimonial.project}</span>
        <span className="rounded-full bg-brand-50 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-brand-900/78">
          Sample
        </span>
      </div>
    </div>
  );
}
