import { motion } from "motion/react";

const features = [
  {
    icon: "🏆",
    title: "Trusted Local Expertise",
    description:
      "Deep knowledge of Kota's neighborhoods, growth corridors, and property values built over years of experience.",
  },
  {
    icon: "✅",
    title: "Quality Property Assistance",
    description:
      "We curate only verified, high-quality properties that meet our strict standards for construction and documentation.",
  },
  {
    icon: "🔨",
    title: "Builder & Property Knowledge",
    description:
      "Our dual expertise as builders and consultants gives you insights most brokers simply cannot offer.",
  },
  {
    icon: "📄",
    title: "100% Transparent Deals",
    description:
      "Clear pricing, honest guidance, and complete documentation transparency. No hidden charges, no surprises.",
  },
  {
    icon: "⚡",
    title: "Quick Expert Response",
    description:
      "Fast, knowledgeable support whenever you need it. Our team is always available to answer your questions.",
  },
  {
    icon: "🏠",
    title: "Premium Residential Focus",
    description:
      "We specialize in premium residential properties — from family homes to investment plots — ensuring quality at every level.",
  },
];

export default function WhyChooseUsSection() {
  return (
    <section
      id="why-choose-us"
      data-ocid="why_choose_us.section"
      className="py-24 bg-muted/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div
            className="inline-block mb-3 px-4 py-1.5 rounded-full border text-xs font-body font-semibold uppercase tracking-widest"
            style={{
              borderColor: "oklch(0.72 0.16 60 / 0.35)",
              color: "oklch(0.52 0.16 60)",
              background: "oklch(0.72 0.16 60 / 0.06)",
            }}
          >
            Why Choose Us
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground leading-tight mb-4"
            data-ocid="why_choose_us.heading"
          >
            Why Families & Investors
            <br />
            <span style={{ color: "oklch(0.38 0.14 240)" }}>
              Choose Nyati Properties
            </span>
          </h2>
          <div
            className="mx-auto mb-5 h-1 w-20 rounded-full"
            style={{
              background:
                "linear-gradient(90deg, oklch(0.72 0.16 60), oklch(0.72 0.16 60 / 0.2))",
            }}
          />
          <p className="max-w-xl mx-auto text-muted-foreground text-base sm:text-lg font-body leading-relaxed">
            A proven track record built on trust, transparency, and deep
            property expertise across Kota's fastest-growing neighborhoods.
          </p>
        </motion.div>

        {/* Feature cards grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          data-ocid="why_choose_us.cards_list"
        >
          {features.map((feat, i) => (
            <motion.div
              key={feat.title}
              data-ocid={`why_choose_us.card.${i + 1}`}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
              className="group relative bg-card rounded-2xl p-6 border border-border transition-all duration-300 cursor-default hover:-translate-y-1"
              style={{
                boxShadow: "0 2px 16px oklch(0.38 0.14 240 / 0.06)",
              }}
            >
              {/* Gold glow border on hover */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  boxShadow:
                    "0 0 0 1.5px oklch(0.72 0.16 60 / 0.5), 0 8px 32px oklch(0.72 0.16 60 / 0.12)",
                }}
              />
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4 transition-transform duration-300 group-hover:scale-110"
                style={{
                  background: "oklch(0.72 0.16 60 / 0.10)",
                  border: "1px solid oklch(0.72 0.16 60 / 0.18)",
                }}
              >
                {feat.icon}
              </div>
              <h3 className="font-display font-semibold text-lg mb-2 transition-colors duration-200 text-foreground">
                {feat.title}
              </h3>
              <p className="text-muted-foreground text-sm font-body leading-relaxed">
                {feat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
