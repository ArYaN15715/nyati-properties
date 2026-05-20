import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, MessageCircle, TrendingUp } from "lucide-react";
import { useEffect, useRef } from "react";

const WHATSAPP_NUMBER = "7572905655";

const LOCATIONS = [
  {
    name: "Talwandi",
    description:
      "Premium residential zone. Our primary location. Top choice for families seeking quality housing with excellent connectivity and established amenities.",
    priceRange: "₹55–80L for apartments",
    tag: "Our Home Base",
    tagColor: "emerald" as const,
  },
  {
    name: "Rangbari Road",
    description:
      "Fast-growing corridor with high appreciation potential. New developments and infrastructure upgrades make it popular with savvy investors.",
    priceRange: "₹40–120L range",
    tag: "High Appreciation",
    tagColor: "gold" as const,
  },
  {
    name: "Kunhari",
    description:
      "Affordable premium plots — ideal for building your dream home. Government approvals in place with good long-term appreciation.",
    priceRange: "₹15–35L for plots",
    tag: "Best for Plots",
    tagColor: "gold" as const,
  },
  {
    name: "Vigyan Nagar",
    description:
      "Established education hub near Kota's top coaching institutes. High rental demand and steady appreciation — perfect for investors.",
    priceRange: "₹45–75L",
    tag: "Investor Favourite",
    tagColor: "gold" as const,
  },
  {
    name: "Nayapura",
    description:
      "Upcoming residential hotspot with new infrastructure, green surroundings, and planned development. Best time to invest.",
    priceRange: "₹25–60L range",
    tag: "Upcoming Zone",
    tagColor: "emerald" as const,
  },
];

export default function LocalMarketSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    for (const el of cardRefs.current) {
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  const handleWhatsApp = () => {
    const msg = encodeURIComponent(
      "Hello Nyati Properties! I'm looking for properties in Kota. Can you guide me?",
    );
    window.open(`https://wa.me/91${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
  };

  return (
    <section
      id="plots"
      className="relative overflow-hidden py-20 md:py-28"
      style={{
        background:
          "linear-gradient(160deg, oklch(0.96 0.005 240) 0%, oklch(0.92 0.01 240) 50%, oklch(0.16 0.02 240 / 0.06) 100%)",
      }}
    >
      {/* decorative grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(oklch(0.38 0.14 240) 1px, transparent 1px), linear-gradient(90deg, oklch(0.38 0.14 240) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          ref={sectionRef}
          className="mb-14 text-center opacity-0 translate-y-6 transition-all duration-700 ease-out"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[oklch(0.65_0.18_60/0.4)] bg-[oklch(0.65_0.18_60/0.12)] px-4 py-1.5">
            <TrendingUp className="h-4 w-4 text-[oklch(0.60_0.18_60)]" />
            <span className="text-sm font-medium text-[oklch(0.60_0.18_60)] font-body">
              Kota Market Expertise
            </span>
          </div>
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
            Deep Understanding of{" "}
            <span className="text-[oklch(0.60_0.18_60)]">Kota's Growing</span>{" "}
            Property Market
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground font-body">
            We've built relationships and expertise across every major
            residential corridor in Kota
          </p>
        </div>

        {/* Location Cards Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {LOCATIONS.map((loc, i) => (
            <div
              key={loc.name}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
              data-ocid={`market.area.item.${i + 1}`}
              className="location-card group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card p-6 opacity-0 translate-y-8 transition-all duration-700 ease-out shadow-sm hover:shadow-lg cursor-default"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* gold border glow on hover */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-2xl border-2 border-transparent transition-all duration-300 group-hover:border-[oklch(0.65_0.18_60/0.6)] group-hover:shadow-[0_0_24px_oklch(0.65_0.18_60/0.18)]"
              />

              <div className="mb-3 flex items-start justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[oklch(0.38_0.14_240/0.1)] text-[oklch(0.38_0.14_240)]">
                    <MapPin className="h-4 w-4" />
                  </span>
                  <h3 className="font-display text-xl font-semibold text-foreground">
                    {loc.name}
                  </h3>
                </div>
                <Badge
                  className={
                    loc.tagColor === "emerald"
                      ? "bg-[oklch(0.55_0.16_155/0.15)] text-[oklch(0.42_0.16_155)] border-[oklch(0.55_0.16_155/0.3)] text-xs shrink-0"
                      : "bg-[oklch(0.65_0.18_60/0.15)] text-[oklch(0.50_0.18_60)] border-[oklch(0.65_0.18_60/0.3)] text-xs shrink-0"
                  }
                  variant="outline"
                >
                  {loc.tag}
                </Badge>
              </div>

              <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground font-body">
                {loc.description}
              </p>

              <div className="mb-4 flex items-center gap-2 rounded-lg bg-[oklch(0.65_0.18_60/0.08)] px-3 py-2">
                <span className="text-xs font-semibold text-[oklch(0.50_0.18_60)] font-body">
                  Avg:
                </span>
                <span className="text-sm font-bold text-[oklch(0.50_0.18_60)] font-display">
                  {loc.priceRange}
                </span>
              </div>

              <Button
                asChild
                variant="outline"
                size="sm"
                data-ocid={`market.view_properties.${i + 1}`}
                className="w-full border-[oklch(0.65_0.18_60/0.4)] text-[oklch(0.50_0.18_60)] hover:bg-[oklch(0.65_0.18_60/0.1)] hover:border-[oklch(0.65_0.18_60/0.7)] transition-colors duration-200 font-body"
              >
                <a href="#properties">View Properties</a>
              </Button>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 flex flex-col items-center gap-4 rounded-2xl border border-[oklch(0.65_0.18_60/0.2)] bg-[oklch(0.38_0.14_240/0.04)] px-6 py-10 text-center backdrop-blur-sm">
          <p className="font-display text-xl font-semibold text-foreground sm:text-2xl">
            Looking for a specific area?{" "}
            <span className="text-[oklch(0.60_0.18_60)]">
              Our experts know every corner of Kota.
            </span>
          </p>
          <p className="max-w-lg text-sm text-muted-foreground font-body">
            From Talwandi to Nayapura — we have on-ground relationships and
            builder connections across every major zone in the city.
          </p>
          <Button
            onClick={handleWhatsApp}
            data-ocid="market.whatsapp_cta"
            size="lg"
            className="mt-2 gap-2 bg-[oklch(0.40_0.16_155)] text-white hover:bg-[oklch(0.36_0.16_155)] shadow-md transition-all duration-200 font-body"
          >
            <MessageCircle className="h-5 w-5" />
            Talk to a Local Expert on WhatsApp
          </Button>
        </div>
      </div>

      <style>{`
        .animate-in { opacity: 1 !important; transform: translate(0) !important; }
      `}</style>
    </section>
  );
}
