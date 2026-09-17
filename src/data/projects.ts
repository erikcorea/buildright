// Photos below are real completed BuildRight jobs. Scope/duration text is
// still a typical-case description rather than a per-job case study —
// replace with specific project write-ups (location, exact timeline, client
// notes) once the owner sends them — see /docs/business-info.md section 5.

export type ProjectImage = {
  src: string;
  alt: string;
};

export type SampleProject = {
  slug: string;
  title: string;
  category: string;
  scope: string;
  duration: string;
  icon: "home" | "wrench" | "layers" | "fence" | "door";
  images: ProjectImage[];
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
    images: [
      { src: "/images/projects/kitchen-remodel-1.png", alt: "Remodeled kitchen with white shaker cabinets, quartz counters, and stainless appliances" },
      { src: "/images/projects/kitchen-remodel-2.jpg", alt: "Kitchen remodel with white cabinets, tile backsplash, and stainless refrigerator" },
      { src: "/images/projects/kitchen-remodel-3.jpg", alt: "White kitchen remodel with island seating and black range hood" },
      { src: "/images/projects/kitchen-remodel-4.jpg", alt: "Kitchen island with gas range, hood vent, and quartz waterfall counter" },
    ],
  },
  {
    slug: "bathroom-remodel",
    title: "Bathroom Remodel",
    category: "Bathrooms",
    scope:
      "Shower conversion, tile work, new vanity and fixtures, and updated ventilation.",
    duration: "Typical timeline: 2–3 weeks",
    icon: "wrench",
    images: [
      { src: "/images/projects/bathroom-remodel-1.png", alt: "Modern bathroom remodel with marble tile shower and backlit LED mirror" },
      { src: "/images/projects/bathroom-remodel-2.jpg", alt: "Bathroom remodel with tiled tub-shower and wood-look vanity" },
      { src: "/images/projects/bathroom-remodel-3.jpg", alt: "Attic bathroom remodel with white vanity and marble floor tile" },
      { src: "/images/projects/bathroom-remodel-4.jpg", alt: "Powder room remodel with black ceiling and glass block window" },
      { src: "/images/projects/bathroom-remodel-5.jpg", alt: "Bathroom remodel with navy vanity, brass fixtures, and marble counter" },
      { src: "/images/projects/bathroom-remodel-6.jpg", alt: "Marble tile shower with gold fixtures from a bathroom remodel" },
      { src: "/images/projects/bathroom-remodel-7.jpg", alt: "Basement bathroom remodel with glass shower door and floating vanity" },
    ],
  },
  {
    slug: "basement-finish",
    title: "Basement Finishing",
    category: "Basements",
    scope:
      "Framing, insulation, drywall, flooring, and lighting to turn an unfinished basement into livable space.",
    duration: "Typical timeline: 4–6 weeks",
    icon: "layers",
    images: [
      { src: "/images/projects/basement-finish-1.png", alt: "Finished basement with navy board-and-batten accent wall" },
      { src: "/images/projects/basement-finish-2.jpg", alt: "Finished basement playroom with climbing wall and vinyl plank flooring" },
      { src: "/images/projects/basement-finish-3.jpg", alt: "Finished basement kids' area with rock wall and gymnastics rings" },
    ],
  },
  {
    slug: "deck-build",
    title: "Deck Construction",
    category: "Outdoor",
    scope:
      "New wood or composite deck build, including railings and stairs.",
    duration: "Typical timeline: 1–2 weeks",
    icon: "fence",
    images: [
      { src: "/images/projects/deck-build-1.jpg", alt: "Deck with black metal railing overlooking a patio and hot tub" },
    ],
  },
  {
    slug: "fence-install",
    title: "Fence Installation",
    category: "Outdoor",
    scope: "Wood or composite fence installation, including gates.",
    duration: "Typical timeline: 3–5 days",
    icon: "fence",
    images: [
      { src: "/images/projects/fence-install-1.jpg", alt: "Composite privacy fence installed along a backyard with artificial turf" },
      { src: "/images/projects/fence-install-2.jpg", alt: "Composite fence gate between two brick townhomes" },
      { src: "/images/projects/fence-install-3.jpg", alt: "Composite privacy fence and gate along a side walkway" },
      { src: "/images/projects/fence-install-4.jpg", alt: "Cedar wood fence gate with black hardware between two garages" },
      { src: "/images/projects/fence-install-5.jpg", alt: "Cedar wood fence gate installation, straight-on view" },
      { src: "/images/projects/fence-install-6.jpg", alt: "New cedar shadowbox fence enclosing a backyard" },
      { src: "/images/projects/fence-install-7.jpg", alt: "Cedar fence installation at sunset" },
    ],
  },
  {
    slug: "whole-home-renovation",
    title: "Whole-Home Renovation",
    category: "Full Renovations",
    scope:
      "Full property rehab — demolition, framing, flooring, kitchen and bathrooms, paint, and finish work.",
    duration: "Typical timeline: 8–16 weeks",
    icon: "home",
    images: [
      { src: "/images/projects/whole-home-renovation-1.png", alt: "Renovated living room with built-in electric fireplace and large front windows" },
      { src: "/images/projects/whole-home-renovation-2.png", alt: "Renovated living room with fireplace, refinished hardwood floors, and hallway" },
      { src: "/images/projects/whole-home-renovation-3.jpg", alt: "Renovated bedroom with refinished hardwood floors and fresh paint" },
      { src: "/images/projects/whole-home-renovation-4.jpg", alt: "Renovated living room with refinished hardwood floors and new lighting" },
    ],
  },
];

export const isProjectDataPlaceholder = true;
