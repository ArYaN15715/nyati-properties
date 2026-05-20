import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Shield } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const TRUST_INDICATORS = [
  "4.9 Rated Property Service",
  "Builder-Backed Expertise",
  "Transparent Property Guidance",
  "Premium Residential Solutions",
];

function FloatingPropertyCard({
  title,
  price,
  type,
  delay,
  className = "",
}: {
  title: string;
  price: string;
  type: string;
  delay: string;
  className?: string;
}) {
  return (
    <div
      className={`relative rounded-xl border border-amber-400/25 p-4 shadow-2xl animate-float ${className}`}
      style={{
        background: "rgba(15, 27, 50, 0.72)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        animationDelay: delay,
      }}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <p className="text-white/90 font-display font-semibold text-sm leading-snug truncate">
            {title}
          </p>
          <p className="text-amber-400 font-display font-bold text-lg mt-0.5">
            {price}
          </p>
          <span
            className="inline-block mt-1.5 px-2 py-0.5 rounded-full text-xs font-body font-medium"
            style={{
              background: "rgba(255,255,255,0.08)",
              color: "rgba(255,255,255,0.65)",
            }}
          >
            {type}
          </span>
        </div>
        <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-amber-400/15 flex items-center justify-center">
          <Shield className="w-4 h-4 text-amber-400" />
        </div>
      </div>
      {/* Verified dot */}
      <div className="absolute -top-1.5 -right-1.5 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-[#0b1628] shadow-lg" />
    </div>
  );
}

function StatsCard() {
  return (
    <div
      className="relative rounded-xl border border-amber-400/20 px-5 py-3.5 shadow-2xl animate-float"
      style={{
        background: "rgba(15, 27, 50, 0.80)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        animationDelay: "0.8s",
      }}
    >
      <div className="flex items-center gap-5">
        <div className="text-center">
          <p className="text-amber-400 font-display font-bold text-xl leading-none">
            50+
          </p>
          <p className="text-white/60 font-body text-xs mt-0.5">
            Families Served
          </p>
        </div>
        <div className="w-px h-8 bg-white/10" />
        <div className="text-center">
          <p className="text-amber-400 font-display font-bold text-xl leading-none">
            4.9★
          </p>
          <p className="text-white/60 font-body text-xs mt-0.5">
            Google Rating
          </p>
        </div>
        <div className="w-px h-8 bg-white/10" />
        <div className="text-center">
          <p className="text-amber-400 font-display font-bold text-xl leading-none">
            10+
          </p>
          <p className="text-white/60 font-body text-xs mt-0.5">Years Local</p>
        </div>
      </div>
    </div>
  );
}

export default function HeroSection() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Slight delay for cinematic entrance on load
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  function handleExplore() {
    document
      .getElementById("properties")
      ?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section
      ref={sectionRef}
      id="hero"
      data-ocid="hero.section"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, #0b1628 0%, #0f2040 50%, #091525 100%)",
      }}
    >
      {/* Architectural grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Ambient glow blobs */}
      <div
        className="absolute top-1/4 left-1/3 w-[600px] h-[600px] rounded-full pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(circle, rgba(245,158,11,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-32 md:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-screen">
          {/* LEFT — Content */}
          <div
            className={`relative z-10 transition-all duration-1000 ease-out ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* Trust Badge */}
            <div className="flex items-center gap-2 mb-6">
              <span
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-body font-semibold tracking-wide border"
                style={{
                  background: "rgba(16,185,129,0.12)",
                  borderColor: "rgba(16,185,129,0.3)",
                  color: "#34d399",
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Kota's Most Trusted Builder
              </span>
            </div>

            {/* Headline */}
            <h1
              className="font-display font-bold text-white leading-tight mb-5"
              style={{ fontSize: "clamp(2.4rem, 4.5vw, 3.5rem)" }}
            >
              Trusted Property &amp;{" "}
              <span
                className="relative"
                style={{
                  background:
                    "linear-gradient(135deg, #f59e0b, #fbbf24, #d97706)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Builder Solutions
              </span>{" "}
              in Kota
            </h1>

            {/* Subheadline */}
            <p
              className="font-body text-white/85 leading-relaxed mb-8"
              style={{
                fontSize: "clamp(1rem, 1.8vw, 1.15rem)",
                maxWidth: "520px",
              }}
            >
              Helping families and investors discover quality homes, plots, and
              real estate opportunities with trusted local expertise and
              builder-backed confidence.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 mb-10">
              <Button
                type="button"
                size="lg"
                onClick={handleExplore}
                data-ocid="hero.explore_properties_button"
                className="font-body font-bold text-sm px-6 h-12 shadow-lg transition-all duration-200 hover:scale-[1.03] hover:shadow-amber-500/25 hover:shadow-xl"
                style={{
                  background: "linear-gradient(135deg, #f59e0b, #d97706)",
                  color: "#0b1628",
                  border: "none",
                }}
              >
                Explore Properties
              </Button>
              <a
                href="https://wa.me/7572905655"
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="hero.whatsapp_button"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="font-body font-bold text-sm px-6 h-12 transition-all duration-200 hover:scale-[1.03]"
                  style={{
                    borderColor: "rgba(245,158,11,0.5)",
                    color: "#f59e0b",
                    background: "rgba(245,158,11,0.06)",
                  }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4 mr-2"
                    aria-hidden="true"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                  </svg>
                  Talk on WhatsApp
                </Button>
              </a>
            </div>

            {/* Trust Indicators */}
            <div
              className={`grid grid-cols-1 sm:grid-cols-2 gap-2.5 transition-all duration-1000 delay-300 ease-out ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              {TRUST_INDICATORS.map((item) => (
                <div key={item} className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span className="text-white/90 font-body text-sm">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Visual panel */}
          <div
            className={`relative hidden lg:flex flex-col items-center justify-center transition-all duration-1200 delay-200 ease-out ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            {/* Background property image */}
            <div
              className="relative w-full max-w-lg rounded-2xl overflow-hidden shadow-2xl"
              style={{ aspectRatio: "4/3" }}
            >
              <img
                src="/assets/generated/hero-property.dim_800x600.jpg"
                alt="Premium residential property in Kota"
                className="w-full h-full object-cover"
                loading="eager"
              />
              {/* Gradient overlay on image */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(11,22,40,0.15) 0%, rgba(11,22,40,0.50) 100%)",
                }}
              />

              {/* Verified badge overlay */}
              <div
                className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-amber-400/30 shadow-lg"
                style={{
                  background: "rgba(11,22,40,0.85)",
                  backdropFilter: "blur(8px)",
                }}
              >
                <Shield className="w-3.5 h-3.5 text-amber-400" />
                <span className="text-amber-400 font-body font-semibold text-xs">
                  Verified Builder
                </span>
              </div>
            </div>

            {/* Floating Card 1 — top-left of image area */}
            <div className="absolute -left-6 top-12 w-56">
              <FloatingPropertyCard
                title="Emerald Heights, Talwandi"
                price="₹65 Lakhs"
                type="3BHK Apartment"
                delay="0s"
              />
            </div>

            {/* Floating Card 2 — bottom-right */}
            <div className="absolute -right-4 bottom-20 w-60">
              <FloatingPropertyCard
                title="Royal Enclave Villa, Rangbari Rd"
                price="₹1.2 Cr"
                type="4BHK Villa"
                delay="0.4s"
              />
            </div>

            {/* Stats Card — bottom-left */}
            <div className="absolute -left-2 -bottom-4">
              <StatsCard />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile floating cards — shown below headline on small screens */}
      <div
        className={`absolute bottom-20 left-0 right-0 px-4 flex gap-3 overflow-x-auto lg:hidden pb-2 transition-all duration-1000 delay-500 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex-shrink-0 w-52">
          <FloatingPropertyCard
            title="Emerald Heights, Talwandi"
            price="₹65 Lakhs"
            type="3BHK"
            delay="0.2s"
          />
        </div>
        <div className="flex-shrink-0 w-52">
          <FloatingPropertyCard
            title="Royal Enclave Villa"
            price="₹1.2 Cr"
            type="4BHK"
            delay="0.5s"
          />
        </div>
      </div>

      {/* Bottom wave divider */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
          style={{ height: "60px" }}
          role="img"
          aria-label="Decorative wave divider"
        >
          <path
            d="M0 80 C360 20 1080 60 1440 10 L1440 80 Z"
            fill="oklch(0.98 0.004 240)"
          />
        </svg>
      </div>
    </section>
  );
}
