// SAMPLE CONTENT. No real customer reviews were provided yet.
// These are placeholders so the Reviews page has real layout to work
// with, and are labeled "Sample" in the UI (see TestimonialCard) so
// nothing here is ever presented as a genuine customer quote. Replace
// with real testimonials once the owner shares them. See
// /docs/business-info.md section 6.

export type SampleTestimonial = {
  id: string;
  quote: string;
  project: string;
  rating: number;
};

export const sampleTestimonials: SampleTestimonial[] = [
  {
    id: "t1",
    quote:
      "Example of the kind of feedback we aim for: clear communication, on-time work, and a clean job site from start to finish.",
    project: "Kitchen remodel",
    rating: 5,
  },
  {
    id: "t2",
    quote:
      "Placeholder review: replace with a real customer quote about responsiveness, quality, or attention to detail.",
    project: "Basement finishing",
    rating: 5,
  },
  {
    id: "t3",
    quote:
      "Placeholder review: replace with a real customer quote about the estimate process or final walkthrough.",
    project: "Deck construction",
    rating: 5,
  },
];

export const isTestimonialDataPlaceholder = true;
