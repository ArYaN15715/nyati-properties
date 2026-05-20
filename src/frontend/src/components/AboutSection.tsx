import { Building2, FileText, HandshakeIcon, MapPin } from "lucide-react";
import { motion } from "motion/react";

const STATS = [
  { value: "50+", label: "Families Helped" },
  { value: "10+", label: "Years Experience" },
  { value: "4.9★", label: "Google Rating" },
];

const ACHIEVEMENT_CARDS = [
  {
    icon: Building2,
    emoji: "🏗️",
    title: "Builder Expertise",
    desc: "Deep construction knowledge to assess quality and value",
  },
  {
    icon: FileText,
    emoji: "📋",
    title: "Legal Documentation Support",
    desc: "Complete guidance through every legal and paperwork step",
  },
  {
    icon: MapPin,
    emoji: "🗺️",
    title: "Deep Kota Market Knowledge",
    desc: "Hyper-local insight across all prime residential zones",
  },
  {
    icon: HandshakeIcon,
    emoji: "🤝",
    title: "Post-Sale Support",
    desc: "Our relationship continues long after the deal is done",
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      data-ocid="about.section"
      className="py-24 bg-background relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/3 rounded-bl-full" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-accent/4 rounded-tr-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* LEFT: Text content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/30 bg-accent/10 mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span className="text-accent text-xs font-body font-semibold uppercase tracking-widest">
                About Nyati Properties
              </span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-4xl font-bold text-foreground leading-tight mb-6">
              Builder-Backed Property Guidance{" "}
              <span className="text-accent">You Can Trust</span>
            </h2>

            <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
              <p>
                Nyati Property's and Builder is more than a real estate agency —
                we are a builder-backed property consultancy committed to
                helping families and investors in Kota find the right property
                with complete confidence.
              </p>
              <p>
                Our background in construction gives us a unique advantage: we
                understand properties at a technical level that most agents
                simply cannot. From evaluating construction quality to
                understanding legal documentation, we guide you through every
                step with clarity and transparency.
              </p>
              <p>
                Located in the heart of Talwandi, Kota, we've helped over 50
                families find their ideal homes and investments. Our approach is
                simple: honest advice, quality properties, and support that
                doesn't end after the deal is done.
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 mt-8 mb-8">
              {STATS.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-display text-2xl font-bold text-accent">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground font-body mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a
              href="https://wa.me/7572905655"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="about.talk_to_experts_button"
              className="inline-flex items-center gap-2.5 px-6 py-3 bg-accent text-secondary font-body font-bold text-sm rounded-md hover:bg-accent/90 transition-all duration-200 shadow-lg hover:shadow-accent/25 hover:shadow-xl"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
              </svg>
              Talk to Our Experts
            </a>
          </motion.div>

          {/* RIGHT: Achievement cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {ACHIEVEMENT_CARDS.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 + 0.2 }}
                data-ocid={`about.achievement_card.${i + 1}`}
                className="relative rounded-xl p-5 border border-white/10 bg-secondary/80 backdrop-blur-sm hover:border-accent/30 hover:bg-secondary/90 transition-all duration-300 group"
              >
                {/* Subtle glow on hover */}
                <div className="absolute inset-0 rounded-xl bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative">
                  <div className="text-3xl mb-3">{card.emoji}</div>
                  <h3 className="font-display text-sm font-bold text-primary-foreground mb-1.5">
                    {card.title}
                  </h3>
                  <p className="text-xs text-primary-foreground/55 font-body leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
