// Core business facts. Real values come from the owner's intake form
// and his own "About the Owner" bio (see /docs/business-info.md).
// Anything not yet confirmed is marked TODO and uses safe,
// non-misleading placeholder copy rather than an invented fact (still
// no fabricated license number, address, or hours).

export const business = {
  name: "BuildRight Construction LLC",
  ownerName: "Jose Mendoza",
  ownerTitle: "Owner & Licensed General Contractor",
  phone: "708-822-8984",
  phoneHref: "tel:+17088228984",
  email: "brco.chi@gmail.com",
  emailHref: "mailto:brco.chi@gmail.com",
  tagline: "Built Right. The First Time.",
  shortDescription:
    "Locally owned, licensed and insured general construction and remodeling company serving Chicago and the surrounding suburbs: kitchens, bathrooms, basements, decks, fences, and full home renovations.",
  yearsInBusiness: 9,
  foundedStory:
    "BuildRight Construction LLC is a locally owned, licensed and insured general construction and remodeling company serving Chicago and the surrounding suburbs. Founded by Jose Mendoza after nearly 10 years working as a Registered Nurse in the Emergency Room, BuildRight was built on the same values that guided him in healthcare: attention to detail, responsibility, clear communication, and staying calm under pressure.",
  experienceStory:
    "Jose's journey into construction began in 2017, when he purchased his first property and became involved in remodeling and improving it. What started as a personal project quickly became a passion. Over the years, he continued gaining hands-on experience with renovations, repairs, and property improvements while developing a strong appreciation for quality craftsmanship and thoughtful design. As his experience grew, he became a licensed General Contractor and founded BuildRight Construction.",
  differentiator:
    "What makes us different is right in our name: BuildRight. We take pride in doing things correctly, paying attention to the details, and never cutting corners. To us, quality construction also means honest recommendations, clear communication, dependable service, and respecting each client's home. Our goal is to deliver work we would be proud to have in our own homes, built right the first time.",
  partnerStory:
    "We want customers to know that we are more than just a construction company. We are a partner throughout the entire project. We help clients evaluate their options, select materials, choose colors and finishes, and develop ideas that fit their space, needs, and budget. We believe remodeling should be a collaborative and transparent experience, and we remain personally involved from the initial conversation through the final walkthrough.",
  customers:
    "We primarily work with homeowners, landlords, and real estate investors throughout Chicago and the surrounding suburbs. Our projects range from smaller repairs and home improvements to complete renovations and full-house rebuilds.",

  // TODO: confirm real hours with the owner. Placeholder only.
  hours: [
    { days: "Monday – Friday", time: "7:00 AM – 6:00 PM" },
    { days: "Saturday", time: "8:00 AM – 2:00 PM" },
    { days: "Sunday", time: "Closed, emergency calls welcome" },
  ],
  hoursConfirmed: false,

  serviceAreaPrimary: [
    "Chicago",
    "Cicero",
    "Oak Park",
    "Skokie",
    "Morton Grove",
    "Bolingbrook",
  ],
  serviceAreaNote:
    "We serve Chicago and the surrounding Chicagoland suburbs, including the western, northern, northwestern, and southwestern suburbs. Projects outside our primary area may be considered depending on size and scope.",
  travelRadiusMiles: 40,

  freeEstimates: true,
  estimateNote:
    "We offer free initial consultations and estimates for most projects. Services requiring extensive diagnostic work, detailed planning, or specialized inspections may involve a fee, which we'll always discuss with you in advance.",
  financingNote:
    "We don't currently offer formal financing, but we provide structured payment schedules based on the size and progress of your project.",
  estimateContactMethods: ["Phone", "Text", "Email", "Website form"],

  // Owner confirmed (2026-09-27, his own "About the Owner" bio) that
  // he is a licensed General Contractor and BuildRight is licensed and
  // insured. No license number, insurance carrier, or bonding status
  // was given though, so don't state those specifics, only what he
  // actually said.
  licensedAndInsured: true,
  credentialsConfirmed: true,

  // TODO: replace with the real Google Business Profile / review link
  // once the owner shares it.
  googleReviewUrl: "#",
} as const;
