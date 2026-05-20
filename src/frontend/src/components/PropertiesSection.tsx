import type { PropertyType } from "@/backend";
import { PropertyCard } from "@/components/PropertyCard";
import { PropertyModal } from "@/components/PropertyModal";
import { Skeleton } from "@/components/ui/skeleton";
import { useProperties } from "@/hooks/useProperties";
import type { Property } from "@/types";
import { useEffect, useRef, useState } from "react";

function PropertySkeletonCard() {
  return (
    <div className="flex flex-col overflow-hidden rounded-xl border border-white/8 bg-card">
      <Skeleton className="h-52 w-full rounded-none" />
      <div className="p-4 space-y-3">
        <Skeleton className="h-6 w-1/3" />
        <Skeleton className="h-5 w-4/5" />
        <Skeleton className="h-4 w-2/3" />
        <div className="flex gap-3 pt-1">
          <Skeleton className="h-4 w-16" />
          <Skeleton className="h-4 w-16" />
          <Skeleton className="h-4 w-20 ml-auto" />
        </div>
        <div className="flex gap-2 pt-1">
          <Skeleton className="h-6 w-20 rounded-full" />
          <Skeleton className="h-6 w-16 rounded-full" />
        </div>
        <Skeleton className="h-10 w-full mt-2 rounded-md" />
      </div>
    </div>
  );
}

export function PropertiesSection() {
  const { featuredProperties, isLoading } = useProperties();
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(
    null,
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [revealed, setRevealed] = useState(false);

  // Scroll reveal with IntersectionObserver
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setRevealed(true);
      },
      { threshold: 0.08 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const openModal = (property: Property) => {
    setSelectedProperty(property);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProperty(null), 300);
  };

  // Show sample properties when backend is loading or has no data
  const sampleProperties: Property[] = [
    {
      id: 1n,
      title: "Luxury 3BHK Apartment — Talwandi Heights",
      price: "₹85 Lakhs",
      location: "Talwandi, Kota",
      propertyType: { apartment: null } as unknown as PropertyType,
      bedrooms: 3n,
      bathrooms: 2n,
      areaSqft: 1450n,
      description:
        "A premium 3BHK apartment in the heart of Talwandi, offering modern amenities, excellent connectivity, and builder-backed quality construction. Ideal for families seeking a sophisticated urban lifestyle.",
      amenities: [
        "24/7 Security",
        "Power Backup",
        "Lift",
        "Covered Parking",
        "Gym",
        "Children Play Area",
      ],
      builderTag: "Nyati Builder",
      featured: true,
    },
    {
      id: 2n,
      title: "Premium Residential Plot — Rangbari Road",
      price: "₹42 Lakhs",
      location: "Rangbari Road, Kota",
      propertyType: { plot: null } as unknown as PropertyType,
      bedrooms: undefined,
      bathrooms: undefined,
      areaSqft: 1800n,
      description:
        "A prime residential plot on the rapidly developing Rangbari Road. Perfect for custom home construction with excellent road access, clear title, and verified documentation.",
      amenities: [
        "Clear Title",
        "Road Facing",
        "Water Connection",
        "Electricity Available",
      ],
      builderTag: "Nyati Builder",
      featured: true,
    },
    {
      id: 3n,
      title: "Modern 4BHK Villa — Vigyan Nagar",
      price: "₹1.25 Crore",
      location: "Vigyan Nagar, Kota",
      propertyType: { villa: null } as unknown as PropertyType,
      bedrooms: 4n,
      bathrooms: 3n,
      areaSqft: 2800n,
      description:
        "An exquisite independent villa in prestigious Vigyan Nagar. Crafted with premium materials, thoughtful architecture, and builder-certified construction quality for discerning families.",
      amenities: [
        "Private Garden",
        "Modular Kitchen",
        "Solar Panels",
        "Home Automation",
        "2-Car Garage",
        "Terrace",
      ],
      builderTag: "Nyati Builder",
      featured: true,
    },
    {
      id: 4n,
      title: "2BHK Ready-to-Move Apartment — Kunhari",
      price: "₹38 Lakhs",
      location: "Kunhari, Kota",
      propertyType: { apartment: null } as unknown as PropertyType,
      bedrooms: 2n,
      bathrooms: 2n,
      areaSqft: 950n,
      description:
        "A ready-to-move 2BHK apartment in the well-connected Kunhari locality. Great investment opportunity with strong rental demand and excellent future appreciation potential.",
      amenities: ["Ready Possession", "Gated Community", "CCTV", "Intercom"],
      builderTag: "Nyati Builder",
      featured: false,
    },
    {
      id: 5n,
      title: "Commercial Shop Space — Nayapura Market",
      price: "₹28 Lakhs",
      location: "Nayapura, Kota",
      propertyType: { commercial: null } as unknown as PropertyType,
      bedrooms: undefined,
      bathrooms: undefined,
      areaSqft: 320n,
      description:
        "A premium commercial shop unit in the bustling Nayapura market zone. High footfall area, ground floor, ideal for retail, showroom, or professional services setup.",
      amenities: [
        "Main Road Facing",
        "Ground Floor",
        "Storage Room",
        "High Footfall Area",
      ],
      builderTag: "Nyati Builder",
      featured: false,
    },
    {
      id: 6n,
      title: "Corner Plot with Approved Map — DC Road",
      price: "₹65 Lakhs",
      location: "DC Road, Kota",
      propertyType: { plot: null } as unknown as PropertyType,
      bedrooms: undefined,
      bathrooms: undefined,
      areaSqft: 2400n,
      description:
        "An exceptional corner plot on prestigious DC Road with an approved building map. Prime location, three-side open, excellent road access — perfect for constructing your dream home.",
      amenities: [
        "Corner Plot",
        "Approved Map",
        "Three Side Open",
        "JDA Approved",
        "North Facing",
      ],
      builderTag: "Nyati Builder",
      featured: true,
    },
    {
      id: 7n,
      title: "Sunflower Heights 3BHK — Talwandi",
      price: "₹85 Lakhs",
      location: "Talwandi, Kota",
      propertyType: { apartment: null } as unknown as PropertyType,
      bedrooms: 3n,
      bathrooms: 2n,
      areaSqft: 1450n,
      description:
        "Sunflower Heights is a thoughtfully designed 3BHK apartment complex in the prime Talwandi locality. Ready-to-move homes with modern fittings, quality construction, and excellent social infrastructure nearby — schools, hospitals, and markets all within 2 km.",
      amenities: [
        "Ready to Move",
        "Modular Kitchen",
        "24/7 Security",
        "Power Backup",
        "Covered Parking",
        "Rooftop Garden",
      ],
      builderTag: "Nyati Builder",
      featured: true,
    },
    {
      id: 8n,
      title: "Green Valley Luxury Villa — Rangbari Road",
      price: "₹1.2 Crore",
      location: "Rangbari Road, Kota",
      propertyType: { villa: null } as unknown as PropertyType,
      bedrooms: 4n,
      bathrooms: 3n,
      areaSqft: 2800n,
      description:
        "Green Valley Villa is an exclusive luxury residence on the fast-developing Rangbari Road corridor. This independent 4BHK villa features premium imported marble flooring, landscaped private garden, smart home automation, and builder-certified structural quality — crafted for Kota's most discerning homeowners.",
      amenities: [
        "Ready to Move",
        "Private Garden",
        "Smart Home",
        "2-Car Garage",
        "Solar Power",
        "Home Theater",
      ],
      builderTag: "Nyati Builder",
      featured: true,
    },
    {
      id: 9n,
      title: "Metro Plaza Commercial Unit — Nayapura",
      price: "₹45 Lakhs",
      location: "Nayapura, Kota",
      propertyType: { commercial: null } as unknown as PropertyType,
      bedrooms: undefined,
      bathrooms: undefined,
      areaSqft: 650n,
      description:
        "Metro Plaza offers a premium commercial unit in Nayapura's thriving business district. Ideal for showrooms, retail outlets, or professional offices. High footfall area with ample parking, excellent road visibility, and strong investment return potential with consistent rental demand.",
      amenities: [
        "Main Road Facing",
        "High Footfall",
        "Lift Access",
        "Ample Parking",
        "Power Backup",
        "CCTV Security",
      ],
      builderTag: "Nyati Builder",
      featured: false,
    },
    {
      id: 10n,
      title: "Silver Oak Builder Floor — Vigyan Nagar",
      price: "₹62 Lakhs",
      location: "Vigyan Nagar, Kota",
      propertyType: { builderFloor: null } as unknown as PropertyType,
      bedrooms: 2n,
      bathrooms: 2n,
      areaSqft: 1100n,
      description:
        "Silver Oak Builder Floor in prestigious Vigyan Nagar offers the best of independent living with apartment conveniences. A well-planned 2BHK first floor with private entrance, dedicated parking, and premium fittings — ideal for families seeking privacy and a premium address in Kota.",
      amenities: [
        "Private Entrance",
        "Independent Unit",
        "Premium Fittings",
        "Dedicated Parking",
        "Terrace Access",
        "Gated Society",
      ],
      builderTag: "Nyati Builder",
      featured: false,
    },
    {
      id: 11n,
      title: "Kunhari Prime Residential Plot",
      price: "₹28 Lakhs",
      location: "Kunhari, Kota",
      propertyType: { plot: null } as unknown as PropertyType,
      bedrooms: undefined,
      bathrooms: undefined,
      areaSqft: 600n,
      description:
        "A well-located residential plot in Kunhari, one of Kota's steadily growing localities. Clear JDA-approved title, excellent connectivity to the main city, and ideal for building your dream home or as a long-term investment in Kota's appreciating real estate market.",
      amenities: [
        "JDA Approved",
        "Clear Title",
        "Road Facing",
        "Water Connection",
        "Electricity Available",
        "Vastu Compliant",
      ],
      builderTag: "Nyati Builder",
      featured: false,
    },
    {
      id: 12n,
      title: "Lotus Enclave 2BHK — DCM",
      price: "₹48 Lakhs",
      location: "DCM, Kota",
      propertyType: { apartment: null } as unknown as PropertyType,
      bedrooms: 2n,
      bathrooms: 2n,
      areaSqft: 950n,
      description:
        "Lotus Enclave is a brand-new launch offering fresh 2BHK apartments in the well-connected DCM area of Kota. Early investors benefit from pre-launch pricing with guaranteed construction quality from Nyati Builder. Modern amenities, excellent rental potential, and a great entry point into Kota's property market.",
      amenities: [
        "New Launch",
        "Pre-Launch Pricing",
        "Modern Amenities",
        "Gated Community",
        "Children's Park",
        "Club House",
      ],
      builderTag: "Nyati Builder",
      featured: true,
    },
  ];

  const displayProperties =
    featuredProperties.length > 0 ? featuredProperties : sampleProperties;

  return (
    <>
      <section
        id="properties"
        ref={sectionRef}
        data-ocid="properties.section"
        className={`py-20 sm:py-28 bg-background transition-all duration-700 ${
          revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="text-center mb-12 sm:mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-body font-semibold uppercase tracking-widest">
              ✦ Handpicked Listings
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-primary-foreground">
              Featured Properties{" "}
              <span className="relative inline-block">
                in Kota
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-accent/0 via-accent to-accent/0 rounded-full" />
              </span>
            </h2>
            <p className="text-muted-foreground font-body text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Handpicked premium properties across Kota's most sought-after
              locations — verified, builder-backed, and ready for you.
            </p>
          </div>

          {/* Grid */}
          {isLoading ? (
            <div
              data-ocid="properties.loading_state"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {[1, 2, 3].map((i) => (
                <PropertySkeletonCard key={i} />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayProperties.map((property, index) => (
                <PropertyCard
                  key={String(property.id)}
                  property={property}
                  onOpenModal={openModal}
                  index={index}
                />
              ))}
            </div>
          )}

          {/* Bottom CTA */}
          <div className="mt-12 text-center">
            <a
              href="https://wa.me/7572905655?text=Hi, I want to explore more properties in Kota. Please share available listings."
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="properties.explore_more_button"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-lg bg-accent/10 hover:bg-accent text-accent hover:text-secondary border border-accent/30 hover:border-accent font-body font-semibold text-sm transition-all duration-200 group"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
              </svg>
              Explore More on WhatsApp
              <span className="group-hover:translate-x-1 transition-transform duration-200">
                →
              </span>
            </a>
          </div>
        </div>
      </section>

      <PropertyModal
        property={selectedProperty}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </>
  );
}
