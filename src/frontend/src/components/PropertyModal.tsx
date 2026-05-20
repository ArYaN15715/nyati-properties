import { createActor } from "@/backend";
import { PropertyType } from "@/backend";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import type { Property } from "@/types";
import { useActor } from "@caffeineai/core-infrastructure";
import { useMutation } from "@tanstack/react-query";
import { Bath, Bed, CheckCircle2, MapPin, Maximize2, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";

const TYPE_LABELS: Record<string, string> = {
  apartment: "Apartment",
  plot: "Plot",
  villa: "Villa",
  commercial: "Commercial",
};

function getTypeKey(pt: PropertyType): string {
  if (pt === PropertyType.apartment) return "apartment";
  if (pt === PropertyType.plot) return "plot";
  if (pt === PropertyType.villa) return "villa";
  if (pt === PropertyType.commercial) return "commercial";
  return "apartment";
}

interface InquiryFields {
  name: string;
  phone: string;
  message: string;
}

interface PropertyModalProps {
  property: Property | null;
  isOpen: boolean;
  onClose: () => void;
}

export function PropertyModal({
  property,
  isOpen,
  onClose,
}: PropertyModalProps) {
  const { actor } = useActor(createActor);
  const overlayRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [form, setForm] = useState<InquiryFields>({
    name: "",
    phone: "",
    message: property
      ? `I'm interested in ${property.title} at ${property.price}.`
      : "",
  });

  // Sync message when property changes
  useEffect(() => {
    if (property) {
      setForm((f) => ({
        ...f,
        message: `I'm interested in ${property.title} at ${property.price}.`,
      }));
    }
  }, [property]);

  // Animate in/out
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      requestAnimationFrame(() => setVisible(true));
    } else {
      setVisible(false);
      const t = setTimeout(() => {
        document.body.style.overflow = "";
      }, 300);
      return () => clearTimeout(t);
    }
    return undefined;
  }, [isOpen]);

  // Escape key
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  const mutation = useMutation({
    mutationFn: async (fields: InquiryFields) => {
      if (!actor || !property) throw new Error("Not ready");
      const result = await actor.submitInquiry(
        fields.name,
        fields.phone,
        property.title,
        fields.message,
        property.id,
      );
      if (result.__kind__ === "err") throw new Error(result.err);
      return result;
    },
    onSuccess: (_, fields) => {
      if (!property) return;
      const waText = encodeURIComponent(
        `Hi, I'm interested in ${property.title} at ${property.price}. My name is ${fields.name} and phone is ${fields.phone}.`,
      );
      window.open(`https://wa.me/7572905655?text=${waText}`, "_blank");
      toast.success("Inquiry submitted! Connecting you on WhatsApp…");
      setForm({ name: "", phone: "", message: "" });
      onClose();
    },
    onError: () => {
      toast.error("Could not submit inquiry. Please try again.");
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) {
      toast.error("Please fill in your name and phone number.");
      return;
    }
    mutation.mutate(form);
  };

  if (!property || !isOpen) return null;

  const typeKey = getTypeKey(property.propertyType);
  const typeLabel = TYPE_LABELS[typeKey] ?? "Property";

  return (
    <div
      ref={overlayRef}
      data-ocid="property.dialog"
      onClick={(e) => {
        if (e.target === overlayRef.current) onClose();
      }}
      className={`fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 transition-all duration-300 ${
        visible
          ? "bg-secondary/80 backdrop-blur-md"
          : "bg-transparent backdrop-blur-none"
      }`}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") onClose();
      }}
      role="presentation"
    >
      <div
        className={`relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-card border border-white/10 rounded-2xl shadow-2xl transition-all duration-300 ${
          visible ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
      >
        {/* Close button */}
        <button
          type="button"
          data-ocid="property.close_button"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 backdrop-blur-sm text-white/70 hover:text-accent hover:bg-black/70 transition-all duration-200"
          aria-label="Close modal"
        >
          <X size={18} />
        </button>

        {/* Hero image */}
        <div className="relative h-56 sm:h-72 overflow-hidden rounded-t-2xl">
          <img
            src="/assets/generated/property-hero.dim_800x500.jpg"
            alt={property.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />

          {/* Badges */}
          <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
            <span className="px-2.5 py-1 rounded-sm text-xs font-body font-semibold bg-black/60 backdrop-blur-sm text-white border border-white/15">
              {typeLabel}
            </span>
            <span className="px-2.5 py-1 rounded-sm text-xs font-body font-semibold bg-accent text-secondary">
              🏗 {property.builderTag}
            </span>
            {property.featured && (
              <span className="px-2.5 py-1 rounded-sm text-xs font-body font-semibold bg-chart-1 text-secondary">
                ✦ Featured
              </span>
            )}
          </div>
        </div>

        {/* Body */}
        <div className="p-5 sm:p-7 space-y-6">
          {/* Price + Title */}
          <div className="space-y-1.5">
            <div className="text-accent font-display font-bold text-2xl sm:text-3xl">
              {property.price}
            </div>
            <h2 className="text-white font-display font-bold text-xl sm:text-2xl leading-snug">
              {property.title}
            </h2>
            <div className="flex items-center gap-2 text-white/80 text-sm font-body">
              <MapPin size={14} className="text-accent flex-shrink-0" />
              {property.location}
            </div>
          </div>

          {/* Description */}
          <p className="text-white/85 font-body text-sm leading-relaxed">
            {property.description}
          </p>

          {/* Specs */}
          <div className="grid grid-cols-3 gap-3">
            {property.bedrooms !== undefined && property.bedrooms !== null && (
              <div className="flex flex-col items-center gap-1.5 p-3 rounded-xl bg-muted/40 border border-white/5">
                <Bed size={18} className="text-accent" />
                <span className="text-white font-display font-bold text-lg">
                  {String(property.bedrooms)}
                </span>
                <span className="text-white/80 text-xs font-body">
                  Bedrooms
                </span>
              </div>
            )}
            {property.bathrooms !== undefined &&
              property.bathrooms !== null && (
                <div className="flex flex-col items-center gap-1.5 p-3 rounded-xl bg-muted/40 border border-white/5">
                  <Bath size={18} className="text-accent" />
                  <span className="text-white font-display font-bold text-lg">
                    {String(property.bathrooms)}
                  </span>
                  <span className="text-white/80 text-xs font-body">
                    Bathrooms
                  </span>
                </div>
              )}
            <div className="flex flex-col items-center gap-1.5 p-3 rounded-xl bg-muted/40 border border-white/5">
              <Maximize2 size={18} className="text-accent" />
              <span className="text-primary-foreground font-display font-bold text-base">
                {String(property.areaSqft)}
              </span>
              <span className="text-muted-foreground text-xs font-body">
                sqft
              </span>
            </div>
          </div>

          {/* Amenities */}
          {property.amenities.length > 0 && (
            <div>
              <h4 className="text-white/90 font-display font-semibold text-sm mb-3 uppercase tracking-widest">
                Amenities
              </h4>
              <div className="grid grid-cols-2 gap-2">
                {property.amenities.map((a) => (
                  <div
                    key={a}
                    className="flex items-center gap-2 text-sm text-white/85 font-body"
                  >
                    <CheckCircle2
                      size={13}
                      className="text-chart-1 flex-shrink-0"
                    />
                    {a}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Inquiry Form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-4 border-t border-white/8 pt-6"
          >
            <h4 className="text-white font-display font-semibold text-base">
              Send a Quick Inquiry
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label
                  htmlFor="modal-name"
                  className="text-white/75 text-xs font-body"
                >
                  Your Name *
                </Label>
                <Input
                  id="modal-name"
                  data-ocid="property.inquiry_name_input"
                  placeholder="Rahul Sharma"
                  value={form.name}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, name: e.target.value }))
                  }
                  required
                  className="bg-white/8 border-white/15 text-white placeholder:text-white/40 focus:border-accent/50 font-body"
                />
              </div>
              <div className="space-y-1.5">
                <Label
                  htmlFor="modal-phone"
                  className="text-white/75 text-xs font-body"
                >
                  Phone Number *
                </Label>
                <Input
                  id="modal-phone"
                  data-ocid="property.inquiry_phone_input"
                  placeholder="+91 98765 43210"
                  value={form.phone}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, phone: e.target.value }))
                  }
                  required
                  className="bg-white/8 border-white/15 text-white placeholder:text-white/40 focus:border-accent/50 font-body"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <Label
                htmlFor="modal-message"
                className="text-muted-foreground text-xs font-body"
              >
                Message (optional)
              </Label>
              <Textarea
                id="modal-message"
                data-ocid="property.inquiry_message_textarea"
                rows={3}
                value={form.message}
                onChange={(e) =>
                  setForm((f) => ({ ...f, message: e.target.value }))
                }
                className="bg-white/8 border-white/15 text-white placeholder:text-white/40 focus:border-accent/50 font-body resize-none"
              />
            </div>

            <Button
              type="submit"
              data-ocid="property.inquiry_submit_button"
              disabled={mutation.isPending}
              className="w-full bg-accent hover:bg-accent/90 text-secondary font-display font-bold text-base py-6 shadow-lg shadow-accent/20 hover:shadow-accent/30 transition-all duration-200"
            >
              {mutation.isPending ? (
                "Sending…"
              ) : (
                <>
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5 mr-2"
                    aria-hidden="true"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                  </svg>
                  Send Inquiry via WhatsApp
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
