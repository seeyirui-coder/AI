import type { ContactItem, Listing, Quote, Stat, Step } from "../types";

export const NAV_ITEMS: { label: string; href: `#${string}` }[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const SECTION_IDS = ["home", "about", "contact"] as const;

export const HERO_STATS: Stat[] = [
  { value: "120+", label: "Homes sold" },
  { value: "$48M", label: "Closed volume" },
  { value: "98%", label: "Client satisfaction" },
];

export const LISTINGS: Listing[] = [
  {
    id: 1,
    price: "$540,000",
    title: "Willow Park Townhouse",
    meta: "88 Willow Lane · 3 bed · 2 bath · 1,640 sqft",
    badge: "New",
    badgeVariant: "light",
    art: "a",
  },
  {
    id: 2,
    price: "$892,000",
    title: "Harbour View Loft",
    meta: "7 Dock Street · 2 bed · 2 bath · 1,180 sqft",
    badge: "Open Sat",
    badgeVariant: "dark",
    art: "b",
  },
  {
    id: 3,
    price: "$410,000",
    title: "Cedar Grove Bungalow",
    meta: "5 Cedar Avenue · 3 bed · 1 bath · 1,020 sqft",
    badge: "Price cut",
    badgeVariant: "light",
    art: "c",
  },
];

export const STEPS: Step[] = [
  {
    num: "01",
    title: "Consult",
    text: "We map your budget, timeline and must-haves in a relaxed 30-minute call.",
  },
  {
    num: "02",
    title: "Search & tour",
    text: "You get a curated shortlist — no endless scrolling, just homes that fit.",
  },
  {
    num: "03",
    title: "Close",
    text: "I negotiate, coordinate inspections and keep the deal on schedule.",
  },
];

export const QUOTES: Quote[] = [
  {
    text: "“YR found us a place under budget and kept the whole process surprisingly stress-free.”",
    author: "Amara & Ben — first-time buyers",
  },
  {
    text: "“Listed Thursday, three offers by Sunday. The staging plan made all the difference.”",
    author: "Daniel K. — seller, Willow Park",
  },
  {
    text: "“Clear numbers at every step. I always knew exactly where the negotiation stood.”",
    author: "Priya S. — investor",
  },
];

export const CONTACT_ITEMS: ContactItem[] = [
  { label: "Email", value: "hello@yr-estate.com", href: "mailto:hello@yr-estate.com" },
  { label: "Phone", value: "+1 (555) 014-2200", href: "tel:+15550142" },
  { label: "Office", value: "210 Marine Ave, Suite 4" },
];
