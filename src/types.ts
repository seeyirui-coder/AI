export interface Listing {
  id: number;
  price: string;
  title: string;
  meta: string;
  badge: string;
  badgeVariant: "light" | "dark";
  art: "a" | "b" | "c";
}

export interface Stat {
  value: string;
  label: string;
}

export interface Step {
  num: string;
  title: string;
  text: string;
}

export interface Quote {
  text: string;
  author: string;
}

export interface ContactItem {
  label: string;
  value: string;
  href?: string;
}

export type InterestOption =
  | "Buying a home"
  | "Selling a property"
  | "Rental search"
  | "Investment advice";

export interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  interest: InterestOption;
  message: string;
}
