import { PropertyType } from "@/backend";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { Property } from "@/types";
import { Bath, Bed, Eye, MapPin, Maximize2 } from "lucide-react";

const TYPE_LABELS: Record<string, string> = {
  apartment: "Apartment",
  plot: "Plot",
  villa: "Villa",
  commercial: "Commercial",
};

const TYPE_COLORS: Record<string, string> = {
  apartment: "bg-primary/20 text-primary border-primary/30",
  plot: "bg-chart-5/20 text-chart-5 border-chart-5/30",
  villa: "bg-chart-1/20 text-chart-1 border-chart-1/30",
  commercial: "bg-muted/20 text-muted-foreground border-border",
};

function getTypeKey(pt: PropertyType): string {
  if (pt === PropertyType.apartment) return "apartment";
  if (pt === PropertyType.plot) return "plot";
  if (pt === PropertyType.villa) return "villa";
  if (pt === PropertyType.commercial) return "commercial";
  return "apartment";
}

interface PropertyCardProps {
  property: Property;
  onOpenModal: (p: Property) => void;
  index: number;
}

export function PropertyCard({
  property,
  onOpenModal,
  index,
}: PropertyCardProps) {
  const typeKey = getTypeKey(property.propertyType);
  const typeLabel = TYPE_LABELS[typeKey] ?? "Property";
  const typeColor = TYPE_COLORS[typeKey] ?? TYPE_COLORS.apartment;
  const visibleAmenities = property.amenities.slice(0, 3);
  const extraAmenities = property.amenities.length - 3;

  return (
    <Card
      data-ocid={`properties.item.${index + 1}`}
      onClick={() => onOpenModal(property)}
      className="group relative flex flex-col overflow-hidden bg-card border border-white/8 rounded-xl cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/20 hover:border-accent/30"
    >
      {/* Image area */}
      <div className="relative h-52 overflow-hidden bg-gradient-to-br from-primary/30 via-secondary to-secondary/80 flex-shrink-0">
        <img
          src="/assets/generated/property-hero.dim_800x500.jpg"
          alt={property.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-80"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 to-transparent" />

        {/* Builder tag badge */}
        <div className="absolute top-3 left-3">
          <span className="inline-flex items-center px-2.5 py-1 rounded-sm text-xs font-body font-semibold bg-accent text-secondary shadow-md">
            🏗 {property.builderTag}
          </span>
        </div>

        {/* Featured badge */}
        {property.featured && (
          <div className="absolute top-3 right-3">
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-sm text-xs font-body font-semibold bg-chart-1 text-secondary shadow-md">
              ✦ Featured
            </span>
          </div>
        )}

        {/* Property type */}
        <div className="absolute bottom-3 left-3">
          <span
            className={`inline-flex items-center px-2.5 py-1 rounded-sm text-xs font-body font-semibold border backdrop-blur-sm ${typeColor}`}
          >
            {typeLabel}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-4 gap-3">
        {/* Price */}
        <div className="text-accent font-display font-bold text-xl leading-tight">
          {property.price}
        </div>

        {/* Title */}
        <h3 className="text-primary-foreground font-display font-semibold text-base leading-snug line-clamp-2">
          {property.title}
        </h3>

        {/* Location */}
        <div className="flex items-center gap-1.5 text-muted-foreground text-sm font-body">
          <MapPin size={13} className="text-accent flex-shrink-0" />
          <span className="truncate">{property.location}</span>
        </div>

        {/* Specs row */}
        <div className="flex items-center gap-4 text-sm text-muted-foreground font-body border-t border-white/8 pt-3">
          {property.bedrooms !== undefined && property.bedrooms !== null && (
            <span className="flex items-center gap-1">
              <Bed size={13} className="text-accent" />
              {String(property.bedrooms)} BHK
            </span>
          )}
          {property.bathrooms !== undefined && property.bathrooms !== null && (
            <span className="flex items-center gap-1">
              <Bath size={13} className="text-accent" />
              {String(property.bathrooms)}
            </span>
          )}
          <span className="flex items-center gap-1 ml-auto">
            <Maximize2 size={12} className="text-accent" />
            {String(property.areaSqft)} sqft
          </span>
        </div>

        {/* Amenities */}
        {visibleAmenities.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {visibleAmenities.map((a) => (
              <span
                key={a}
                className="px-2 py-0.5 rounded-full text-xs font-body bg-muted/60 text-muted-foreground border border-white/5"
              >
                {a}
              </span>
            ))}
            {extraAmenities > 0 && (
              <span className="px-2 py-0.5 rounded-full text-xs font-body bg-accent/10 text-accent border border-accent/20">
                +{extraAmenities} more
              </span>
            )}
          </div>
        )}

        {/* CTA */}
        <Button
          type="button"
          data-ocid={`properties.view_details_button.${index + 1}`}
          onClick={(e) => {
            e.stopPropagation();
            onOpenModal(property);
          }}
          className="mt-auto w-full bg-accent/10 hover:bg-accent text-accent hover:text-secondary border border-accent/30 hover:border-accent font-body font-semibold transition-all duration-200 group-hover:bg-accent group-hover:text-secondary"
          variant="outline"
        >
          <Eye size={15} className="mr-2" />
          View Details
        </Button>
      </div>
    </Card>
  );
}
