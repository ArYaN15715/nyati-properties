import type { PropertyType } from "@/backend";
export type { PropertyType };

export interface Property {
  id: bigint;
  title: string;
  price: string;
  location: string;
  propertyType: PropertyType;
  bedrooms?: bigint;
  bathrooms?: bigint;
  areaSqft: bigint;
  description: string;
  amenities: string[];
  builderTag: string;
  featured: boolean;
}

export interface InquiryFormData {
  name: string;
  phone: string;
  propertyInterest: string;
  message: string;
  propertyId: bigint | null;
}

export type SectionId =
  | "hero"
  | "properties"
  | "projects"
  | "plots"
  | "about"
  | "contact";

export interface NavLink {
  label: string;
  href: string;
  id: SectionId;
}
