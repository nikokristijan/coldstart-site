// Central place for every external link, price and business constant used
// across the site. Nothing here is invented — these are the live Whop
// checkout links and prices already in production for Cold Start.

export const CHECKOUT = {
  coldStart: "https://whop.com/checkout/plan_pRNLYc1lMyvNd",
  starterKit: "https://whop.com/checkout/plan_fEh3AGsrGbseE",
  aiPack: "https://whop.com/checkout/plan_RdBhO66V1ghYu",
  affiliateApply: "https://whop.com/cold-start-33b7/affiliates",
  whopCommunity: "https://whop.com/cold-start-33b7/",
} as const;

export const PRICE = {
  coldStartMonthly: 3.99,
  coldStartWasMonthly: 4.99,
  starterKitMonthly: 1.99,
  aiPackMonthly: 2.99,
} as const;

export const CTA = {
  primary: "Get Cold Start",
  primaryWithPrice: `Get Cold Start – $${PRICE.coldStartMonthly}/mo`,
} as const;

export const SITE = {
  name: "Cold Start",
  url: "https://www.getcoldstart.online",
  description:
    "Cold email scripts, DM templates, and a 30-day outreach system for freelancers who want clients without spending on ads.",
} as const;

// The real, itemized contents of Cold Start — used to build the value stack
// on the pricing section. Every line corresponds to something that actually
// ships inside the course today (see the "What's Actually Inside" section
// content). Values are conservative, credible estimates of what each piece
// would cost as a standalone resource — not inflated "ebook math."
export const VALUE_STACK = [
  {
    label: "Core Program",
    detail: "11 modules — cold email, DM & in-person outreach, start to finish",
    value: 47,
    bonus: false,
  },
  {
    label: "Script Vault",
    detail: "20+ ready-to-send scripts for every stage of a conversation",
    value: 39,
    bonus: false,
  },
  {
    label: "30-Day Action Plan",
    detail: "Day-by-day outreach plan — exactly what to send, and when",
    value: 29,
    bonus: false,
  },
  {
    label: "Objection-Handling Library",
    detail: "Scripts for every common “no,” including the pricing objection",
    value: 19,
    bonus: false,
  },
  {
    label: "Outreach Tracker & Checklists",
    detail: "Ready-made tracking sheet — no CRM or paid tools required",
    value: 19,
    bonus: false,
  },
  {
    label: "Zero-Proof Offer Framework",
    detail: "How to package your offer and land a first client with no portfolio or testimonials",
    value: 19,
    bonus: true,
  },
] as const;

export const VALUE_STACK_TOTAL = VALUE_STACK.reduce((sum, item) => sum + item.value, 0);
