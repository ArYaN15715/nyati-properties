import { motion } from "motion/react";

const advantages = [
  {
    icon: "🏗️",
    title: "Expert Construction Knowledge",
    description:
      "We understand materials, construction timelines, and quality benchmarks. No more guessing if a property is worth its price.",
  },
  {
    icon: "🔍",
    title: "Transparent Property Evaluation",
    description:
      "Our builder expertise lets us assess properties objectively, giving you honest guidance you can trust.",
  },
  {
    icon: "📋",
    title: "Project Documentation Expertise",
    description:
      "From approvals to possession, we guide you through every document with builder-level clarity.",
  },
  {
    icon: "💰",
    title: "Investment Confidence",
    description:
      "Backed by construction knowledge, we identify undervalued properties and high-appreciation zones before they peak.",
  },
  {
    icon: "🤝",
    title: "End-to-End Support",
    description:
      "From site visit to possession, our team stays with you through every step of your property journey.",
  },
];

const stats = [
  { value: "50+", label: "Families Helped" },
  { value: "4.9★", label: "Google Rating" },
  { value: "10+", label: "Years Experience" },
  { value: "100+", label: "Properties Advised" },
];

export default function BuilderAdvantageSection() {
  return (
    <section
      id="projects"
      data-ocid="builder_advantage.section"
      className="relative py-24 overflow-hidden"
      style={{ background: "oklch(0.16 0.025 240)" }}
    >
      {/* Subtle architectural grid background */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(oklch(0.72 0.16 60) 1px, transparent 1px), linear-gradient(90deg, oklch(0.72 0.16 60) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      {/* Glow orb */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full opacity-10 pointer-events-none blur-3xl"
        style={{ background: "oklch(0.72 0.16 60)" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div
            className="inline-block mb-3 px-4 py-1.5 rounded-full border text-xs font-body font-semibold uppercase tracking-widest"
            style={{
              borderColor: "oklch(0.72 0.16 60 / 0.4)",
              color: "oklch(0.72 0.16 60)",
              background: "oklch(0.72 0.16 60 / 0.08)",
            }}
          >
            Builder Advantage
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-primary-foreground leading-tight mb-4"
            data-ocid="builder_advantage.heading"
          >
            Why Builder-Backed
            <br />
            <span style={{ color: "oklch(0.72 0.16 60)" }}>
              Property Guidance
            </span>{" "}
            Matters
          </h2>
          {/* Gold accent line */}
          <div
            className="mx-auto mb-5 h-1 w-20 rounded-full"
            style={{
              background:
                "linear-gradient(90deg, oklch(0.72 0.16 60), oklch(0.65 0.18 60 / 0.3))",
            }}
          />
          <p className="max-w-2xl mx-auto text-white/85 text-base sm:text-lg font-body leading-relaxed">
            Unlike typical property brokers, our builder background gives you an
            unfair advantage in understanding construction quality, pricing, and
            investment potential.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-14"
          data-ocid="builder_advantage.cards_list"
        >
          {advantages.map((adv, i) => (
            <motion.div
              key={adv.title}
              data-ocid={`builder_advantage.card.${i + 1}`}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              className="group relative rounded-xl p-6 border transition-all duration-300 cursor-default"
              style={{
                background: "oklch(0.20 0.022 240 / 0.7)",
                backdropFilter: "blur(20px)",
                borderColor: "oklch(0.72 0.16 60 / 0.08)",
              }}
              whileHover={{ scale: 1.02, y: -2 }}
            >
              {/* Hover gold border overlay */}
              <div
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ border: "1px solid oklch(0.72 0.16 60 / 0.45)" }}
              />
              <div className="flex items-start gap-4">
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center text-2xl"
                  style={{ background: "oklch(0.72 0.16 60 / 0.12)" }}
                >
                  {adv.icon}
                </div>
                <div className="min-w-0">
                  <h3
                    className="font-display font-semibold text-lg text-primary-foreground mb-2 group-hover:transition-colors"
                    style={{ color: "oklch(0.92 0.01 240)" }}
                  >
                    {adv.title}
                  </h3>
                  <p className="text-white/90 text-sm font-body leading-relaxed">
                    {adv.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}

          {/* 5th card spans full width on md+ */}
        </div>

        {/* Stats bar */}
        <motion.div
          data-ocid="builder_advantage.stats_bar"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="rounded-2xl border p-6 sm:p-8"
          style={{
            background: "oklch(0.72 0.16 60 / 0.06)",
            borderColor: "oklch(0.72 0.16 60 / 0.2)",
          }}
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                data-ocid={`builder_advantage.stat.${i + 1}`}
                className="text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
              >
                <div
                  className="text-3xl sm:text-4xl font-display font-bold mb-1"
                  style={{ color: "oklch(0.72 0.16 60)" }}
                >
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-body text-white/85 uppercase tracking-wide">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
