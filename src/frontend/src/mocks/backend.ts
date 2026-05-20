import type { backendInterface, Property, PropertyType } from "../backend";

const sampleProperties: Property[] = [
  {
    id: BigInt(1),
    title: "Emerald Heights Apartment",
    price: "₹65 Lakhs",
    location: "Talwandi, Kota",
    propertyType: "apartment" as unknown as PropertyType,
    bedrooms: BigInt(3),
    bathrooms: BigInt(2),
    areaSqft: BigInt(1450),
    description:
      "A premium 3BHK apartment in the heart of Talwandi with modern amenities and builder-backed quality construction. Ideal for families seeking comfort and convenience in Kota's most sought-after neighbourhood.",
    amenities: ["24/7 Security", "Lift", "Power Backup", "Car Parking", "Club House"],
    builderTag: "Nyati Builder",
    featured: true,
  },
  {
    id: BigInt(2),
    title: "Royal Enclave Villa",
    price: "₹1.2 Crore",
    location: "Rangbari Road, Kota",
    propertyType: "villa" as unknown as PropertyType,
    bedrooms: BigInt(4),
    bathrooms: BigInt(4),
    areaSqft: BigInt(2800),
    description:
      "An exquisite 4BHK villa on Rangbari Road combining luxury living with premium construction standards. Spacious interiors, landscaped garden, and exclusive amenities make this an unmatched residential investment.",
    amenities: ["Swimming Pool", "Garden", "Security", "3 Car Parking", "Modular Kitchen"],
    builderTag: "Nyati Builder",
    featured: true,
  },
  {
    id: BigInt(3),
    title: "Green Valley Plot",
    price: "₹28 Lakhs",
    location: "Vigyan Nagar, Kota",
    propertyType: "plot" as unknown as PropertyType,
    areaSqft: BigInt(1800),
    description:
      "A prime 200 sq.yd. residential plot in Vigyan Nagar — one of Kota's fastest growing areas. Corner plot with wide road access, perfect for building your dream home or as a long-term investment.",
    amenities: ["Corner Plot", "Near School", "Wide Road", "Water Connection"],
    builderTag: "Nyati Property's",
    featured: false,
  },
];

export const mockBackend: backendInterface = {
  getFeaturedProperties: async () => sampleProperties.filter((p) => p.featured),
  getProperties: async () => sampleProperties,
  getProperty: async (id) => sampleProperties.find((p) => p.id === id) ?? null,
  submitInquiry: async () => ({ __kind__: "ok", ok: BigInt(1) }),
};
