// PLACEHOLDER CONTENT — no real project photos or case studies were
// provided yet. These entries describe typical scopes of work so the
// Projects page has real structure to build against. Replace every
// entry here with real jobs (photos, location, timeline) once the
// owner sends them — see /docs/business-info.md section 5.

export type SampleProject = {
  slug: string;
  title: string;
  category: string;
  scope: string;
  duration: string;
  icon: "home" | "wrench" | "layers" | "fence" | "door";
};

export const sampleProjects: SampleProject[] = [
  {
    slug: "kitchen-remodel",
    title: "Kitchen Remodel",
    category: "Kitchens",
    scope:
      "Full gut kitchen remodel — new cabinets, quartz countertops, tile backsplash, and updated lighting.",
    duration: "Typical timeline: 3–5 weeks",
    icon: "wrench",
  },
  {
    slug: "bathroom-remodel",
    title: "Bathroom Remodel",
    category: "Bathrooms",
    scope:
      "Shower conversion, tile work, new vanity and fixtures, and updated ventilation.",
    duration: "Typical timeline: 2–3 weeks",
    icon: "wrench",
  },
  {
    slug: "basement-finish",
    title: "Basement Finishing",
    category: "Basements",
    scope:
      "Framing, insulation, drywall, flooring, and lighting to turn an unfinished basement into livable space.",
    duration: "Typical timeline: 4–6 weeks",
    icon: "layers",
  },
  {
    slug: "deck-build",
    title: "Deck Construction",
    category: "Outdoor",
    scope:
      "New wood or composite deck build, including railings and stairs.",
    duration: "Typical timeline: 1–2 weeks",
    icon: "fence",
  },
  {
    slug: "fence-install",
    title: "Fence Installation",
    category: "Outdoor",
    scope: "Wood or composite fence installation, including gates.",
    duration: "Typical timeline: 3–5 days",
    icon: "fence",
  },
  {
    slug: "whole-home-renovation",
    title: "Whole-Home Renovation",
    category: "Full Renovations",
    scope:
      "Full property rehab — demolition, framing, flooring, kitchen and bathrooms, paint, and finish work.",
    duration: "Typical timeline: 8–16 weeks",
    icon: "home",
  },
];

export const isProjectDataPlaceholder = true;
