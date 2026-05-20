import { Button } from "@/components/ui/button";
import {
  BadgeCheck,
  ChevronLeft,
  ChevronRight,
  Quote,
  Star,
} from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

const TESTIMONIALS = [
  {
    name: "Ramesh Kumar Sharma",
    location: "Talwandi, Kota",
    stars: 5,
    review:
      "Nyati Properties helped us find our dream home in Talwandi within our budget. Their builder knowledge really showed — they pointed out quality details we would have missed. Very professional team.",
    initials: "RS",
  },
  {
    name: "Priya & Suresh Agarwal",
    location: "Rangbari Road",
    stars: 5,
    review:
      "We were confused between so many properties, but the team at Nyati guided us with complete transparency. No pressure, just honest advice. We're very happy with our new apartment.",
    initials: "PA",
  },
  {
    name: "Vikram Singh",
    location: "Vigyan Nagar, Kota",
    stars: 5,
    review:
      "As an investor, I trust Nyati Properties completely. They have deep knowledge of Kota's property market and identified a high-appreciation zone for my plot investment. Excellent!",
    initials: "VS",
  },
  {
    name: "Sunita Devi Mehta",
    location: "Kunhari, Kota",
    stars: 5,
    review:
      "First time buying property and Nyati made it stress-free. They explained every document clearly, handled everything professionally, and we got exactly what we needed. Highly recommended!",
    initials: "SM",
  },
  {
    name: "Anand Tiwari",
    location: "Nayapura, Kota",
    stars: 5,
    review:
      "The builder background of Nyati Properties is their superpower. They know quality construction from bad. They saved us from a problematic property and found us a much better one. Thank you!",
    initials: "AT",
  },
];

function StarRow({ count, name }: { count: number; name: string }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star
          key={`star-${i}-${name}`}
          className="h-4 w-4 fill-[oklch(0.72_0.16_60)] text-[oklch(0.72_0.16_60)]"
        />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const total = TESTIMONIALS.length;

  const goNext = useCallback(() => {
    setActive((prev) => (prev + 1) % total);
  }, [total]);

  const goPrev = useCallback(() => {
    setActive((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Auto-scroll every 4s, pause on hover
  useEffect(() => {
    if (!isHovered) {
      intervalRef.current = setInterval(goNext, 4000);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isHovered, goNext]);

  // Scroll-reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) e.target.classList.add("reveal-in");
        }
      },
      { threshold: 0.1 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const prev = (active - 1 + total) % total;
  const next = (active + 1) % total;

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden py-20 md:py-28"
      style={{
        background:
          "linear-gradient(145deg, oklch(0.14 0.02 240) 0%, oklch(0.18 0.025 240) 50%, oklch(0.12 0.015 240) 100%)",
      }}
    >
      {/* decorative gradient blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-[-120px] top-[-80px] h-[400px] w-[400px] rounded-full opacity-[0.07]"
        style={{
          background:
            "radial-gradient(circle, oklch(0.65 0.18 60) 0%, transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[-100px] right-[-100px] h-[350px] w-[350px] rounded-full opacity-[0.06]"
        style={{
          background:
            "radial-gradient(circle, oklch(0.55 0.16 155) 0%, transparent 70%)",
        }}
      />

      <div
        ref={sectionRef}
        className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 opacity-0 translate-y-8 transition-all duration-700 ease-out"
      >
        {/* Google Rating Showcase */}
        <div className="mb-14 flex flex-col items-center gap-4 text-center">
          <div className="flex flex-col items-center gap-3 rounded-2xl border border-[oklch(0.65_0.18_60/0.25)] bg-[oklch(0.65_0.18_60/0.07)] px-8 py-6 backdrop-blur-md">
            <div className="flex items-end gap-3">
              <span
                data-ocid="testimonials.rating_score"
                className="font-display text-7xl font-bold leading-none text-[oklch(0.72_0.16_60)]"
              >
                4.9
              </span>
              <div className="mb-2 flex flex-col gap-1">
                <div className="flex gap-1">
                  {(["1", "2", "3", "4", "5"] as const).map((n) => (
                    <Star
                      key={`google-rating-star-${n}`}
                      className="h-6 w-6 fill-[oklch(0.72_0.16_60)] text-[oklch(0.72_0.16_60)]"
                    />
                  ))}
                </div>
                <span className="text-sm text-white/80 font-body">
                  Based on Google Reviews
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-[oklch(0.55_0.16_155/0.4)] bg-[oklch(0.55_0.16_155/0.12)] px-3 py-1">
              <BadgeCheck className="h-4 w-4 text-[oklch(0.55_0.16_155)]" />
              <span className="text-xs font-semibold text-[oklch(0.55_0.16_155)] font-body">
                Verified Ratings
              </span>
            </div>
          </div>

          <h2 className="font-display text-3xl font-bold text-[oklch(0.94_0.008_240)] sm:text-4xl md:text-5xl">
            What Our Clients Say About{" "}
            <span className="text-[oklch(0.72_0.16_60)]">Nyati Properties</span>
          </h2>
        </div>

        {/* Carousel */}
        <div
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          data-ocid="testimonials.carousel"
        >
          {/* Prev/Next arrows */}
          <Button
            type="button"
            variant="outline"
            size="icon"
            onClick={goPrev}
            data-ocid="testimonials.prev_button"
            aria-label="Previous testimonial"
            className="absolute left-0 top-1/2 z-10 -translate-y-1/2 -translate-x-4 hidden sm:flex border-[oklch(0.65_0.18_60/0.35)] bg-[oklch(0.65_0.18_60/0.1)] text-[oklch(0.72_0.16_60)] hover:bg-[oklch(0.65_0.18_60/0.2)] hover:border-[oklch(0.65_0.18_60/0.6)] transition-all duration-200"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button
            type="button"
            variant="outline"
            size="icon"
            onClick={goNext}
            data-ocid="testimonials.next_button"
            aria-label="Next testimonial"
            className="absolute right-0 top-1/2 z-10 -translate-y-1/2 translate-x-4 hidden sm:flex border-[oklch(0.65_0.18_60/0.35)] bg-[oklch(0.65_0.18_60/0.1)] text-[oklch(0.72_0.16_60)] hover:bg-[oklch(0.65_0.18_60/0.2)] hover:border-[oklch(0.65_0.18_60/0.6)] transition-all duration-200"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>

          {/* Cards track */}
          <div className="mx-auto max-w-4xl">
            {/* Desktop: 3-card view, center is active */}
            <div className="hidden sm:flex items-center gap-4 justify-center">
              {/* prev card (dimmed) */}
              <div className="w-72 shrink-0 opacity-50 scale-95 transition-all duration-500">
                <TestimonialCard t={TESTIMONIALS[prev]} />
              </div>
              {/* active card */}
              <div className="w-80 shrink-0 opacity-100 scale-100 transition-all duration-500">
                <TestimonialCard t={TESTIMONIALS[active]} active />
              </div>
              {/* next card (dimmed) */}
              <div className="w-72 shrink-0 opacity-50 scale-95 transition-all duration-500">
                <TestimonialCard t={TESTIMONIALS[next]} />
              </div>
            </div>

            {/* Mobile: single card */}
            <div className="flex sm:hidden justify-center">
              <div className="w-full max-w-sm transition-all duration-500">
                <TestimonialCard t={TESTIMONIALS[active]} active />
              </div>
            </div>

            {/* Mobile nav buttons */}
            <div className="flex sm:hidden justify-center gap-4 mt-4">
              <Button
                type="button"
                variant="outline"
                size="icon"
                onClick={goPrev}
                aria-label="Previous"
                data-ocid="testimonials.prev_button_mobile"
                className="border-[oklch(0.65_0.18_60/0.35)] bg-[oklch(0.65_0.18_60/0.1)] text-[oklch(0.72_0.16_60)]"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                type="button"
                variant="outline"
                size="icon"
                onClick={goNext}
                aria-label="Next"
                data-ocid="testimonials.next_button_mobile"
                className="border-[oklch(0.65_0.18_60/0.35)] bg-[oklch(0.65_0.18_60/0.1)] text-[oklch(0.72_0.16_60)]"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Dot navigation */}
          <div
            className="mt-8 flex justify-center gap-2"
            role="tablist"
            aria-label="Testimonial navigation"
          >
            {TESTIMONIALS.map((t, i) => (
              <button
                key={t.name}
                type="button"
                role="tab"
                aria-selected={i === active}
                aria-label={`Go to testimonial ${i + 1}`}
                data-ocid={`testimonials.dot.${i + 1}`}
                onClick={() => setActive(i)}
                className={`h-2 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[oklch(0.65_0.18_60)] ${
                  i === active
                    ? "w-8 bg-[oklch(0.65_0.18_60)]"
                    : "w-2 bg-[oklch(0.65_0.18_60/0.3)] hover:bg-[oklch(0.65_0.18_60/0.6)]"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .reveal-in { opacity: 1 !important; transform: translateY(0) !important; }
      `}</style>
    </section>
  );
}

function TestimonialCard({
  t,
  active,
}: {
  t: (typeof TESTIMONIALS)[number];
  active?: boolean;
}) {
  return (
    <div
      data-ocid="testimonials.card"
      className={`relative flex flex-col gap-4 rounded-2xl border p-6 backdrop-blur-md transition-all duration-300 ${
        active
          ? "border-[oklch(0.65_0.18_60/0.5)] bg-[oklch(0.20_0.025_240/0.85)] shadow-[0_0_32px_oklch(0.65_0.18_60/0.15)]"
          : "border-[oklch(0.65_0.18_60/0.15)] bg-[oklch(0.17_0.02_240/0.6)]"
      }`}
    >
      <Quote className="h-6 w-6 text-[oklch(0.65_0.18_60/0.5)]" aria-hidden />
      <p className="text-sm leading-relaxed text-white/95 font-body min-h-[80px]">
        &ldquo;{t.review}&rdquo;
      </p>
      <StarRow count={t.stars} name={t.name} />
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[oklch(0.30_0.04_240)] text-sm font-bold text-[oklch(0.72_0.16_60)] font-display shrink-0">
          {t.initials}
        </div>
        <div>
          <p className="text-sm font-semibold text-white font-display">
            {t.name}
          </p>
          <p className="text-xs text-white/70 font-body">{t.location}</p>
        </div>
      </div>
    </div>
  );
}
