export type ServiceCategory = {
  slug: string;
  title: string;
  icon:
    | "home"
    | "wrench"
    | "layers"
    | "door"
    | "fence"
    | "zap"
    | "droplet"
    | "hammer";
  summary: string;
  items: string[];
  featured: boolean;
};

export const serviceCategories: ServiceCategory[] = [
  {
    slug: "full-renovations",
    title: "Whole-Home Renovations & Rebuilds",
    icon: "home",
    summary:
      "Full-house rehabs, rebuilds, and room conversions managed from planning through final walkthrough.",
    items: [
      "Whole-home renovations, rehabs, and rebuilds",
      "Room conversions and layout modifications",
      "Demolition and debris removal",
      "Trade coordination and project planning",
    ],
    featured: true,
  },
  {
    slug: "kitchens-bathrooms",
    title: "Kitchens & Bathrooms",
    icon: "wrench",
    summary:
      "Complete kitchen and bathroom remodels, from layout and finishes to fixtures and tile.",
    items: [
      "Kitchen remodeling",
      "Bathroom remodeling and shower conversions",
      "Tile showers, floors, walls, and backsplashes",
      "Custom built-ins, shelving, cabinets, and storage",
    ],
    featured: true,
  },
  {
    slug: "basements-garages",
    title: "Basements & Garages",
    icon: "layers",
    summary:
      "Turn unfinished basements and garages into livable, functional space.",
    items: [
      "Basement remodeling and finishing",
      "Garage remodeling and finishing",
      "Framing, insulation, drywall installation, and drywall repair",
      "Water-intrusion diagnostics and water-damage repairs",
    ],
    featured: true,
  },
  {
    slug: "interior-finishes",
    title: "Flooring & Interior Finishes",
    icon: "layers",
    summary:
      "Flooring, paint, trim, and finish carpentry that pull a room together.",
    items: [
      "Luxury vinyl plank, laminate, and tile flooring installation",
      "Carpet and existing-floor removal",
      "Interior and exterior painting",
      "Finish carpentry, trim, baseboards, and shoe molding",
    ],
    featured: false,
  },
  {
    slug: "doors-windows",
    title: "Doors & Windows",
    icon: "door",
    summary: "Installation and replacement for doors and windows of all types.",
    items: [
      "Interior, exterior, and storm-door installation",
      "Window installation and replacement",
    ],
    featured: false,
  },
  {
    slug: "outdoor-exterior",
    title: "Decks, Fences & Exterior",
    icon: "fence",
    summary:
      "Outdoor living spaces and exterior repairs built to hold up through Chicago weather.",
    items: [
      "Deck construction, resurfacing, and repair",
      "Wood and composite fence installation and repair",
      "Gates, railings, and exterior carpentry",
      "Flat-roof and exterior leak repairs",
    ],
    featured: true,
  },
  {
    slug: "electrical-plumbing",
    title: "Electrical & Plumbing Fixtures",
    icon: "zap",
    summary:
      "Minor electrical and plumbing work, coordinated with licensed trades when required.",
    items: [
      "Lighting and recessed-light installation",
      "Switches, dimmers, outlets, and minor electrical upgrades",
      "Toilets, vanities, faucets, and plumbing-fixture installation",
      "Minor plumbing repairs and water-line installations",
    ],
    featured: false,
  },
  {
    slug: "general-repairs",
    title: "General Repairs & Installs",
    icon: "hammer",
    summary:
      "Smaller jobs and installs: the everyday projects that keep a home running well.",
    items: [
      "Appliance, microwave, range hood, and water-filtration installs",
      "Playset and specialty-product assembly",
      "General home repairs and small improvement projects",
      "Design guidance, material selection, and color coordination",
    ],
    featured: false,
  },
];

export const mainServices = [
  "Whole-home renovations and rehabs",
  "Kitchen remodeling",
  "Bathroom remodeling",
  "Basement finishing",
  "Deck and fence construction",
];
