// Core business facts. Real values come from the owner's intake form
// (see /docs/business-info.md). Anything not yet confirmed is marked
// TODO and uses safe, non-misleading placeholder copy rather than an
// invented fact (no fabricated license numbers, address, or hours).

export const business = {
  name: "BuildRight Construction LLC",
  ownerName: "Jose Mendoza",
  ownerTitle: "Owner & General Contractor",
  phone: "708-822-8984",
  phoneHref: "tel:+17088228984",
  email: "brco.chi@gmail.com",
  emailHref: "mailto:brco.chi@gmail.com",
  tagline: "Built Right. The First Time.",
  shortDescription:
    "Locally owned general construction and remodeling company serving Chicago and the surrounding suburbs: kitchens, bathrooms, basements, decks, fences, and full home renovations.",
  yearsInBusiness: 9,
  foundedStory:
    "BuildRight Construction LLC is a locally owned general construction and remodeling company serving Chicago and the surrounding suburbs. Founded by Jose Mendoza after a 10-year career as an emergency room nurse, BuildRight was built on the same values that guided him in healthcare: attention to detail, clear communication, problem-solving, and genuine care for people.",
  experienceStory:
    "Jose's remodeling journey began in 2017 when he purchased his first property and became directly involved in renovating and repairing it. Through that experience, he learned the craft of remodeling, discovered how much he enjoyed transforming spaces, and developed a genuine passion for construction and design. Since then, he has continued expanding his hands-on experience through his own properties and professional projects for clients.",
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

  // TODO: confirm license number, insurance carrier, and bonding status
  // with the owner before publishing this site. Do not state
  // "licensed & insured" as fact until verified.
  credentialsConfirmed: false,

  // TODO: replace with the real Google Business Profile / review link
  // once the owner shares it.
  googleReviewUrl: "#",
} as const;
