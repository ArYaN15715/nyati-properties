import { Clock, ExternalLink, MapPin, Phone } from "lucide-react";
import { motion } from "motion/react";
import { SiFacebook, SiInstagram } from "react-icons/si";

const QUICK_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "Properties", href: "#properties" },
  { label: "Projects", href: "#projects" },
  { label: "Plots", href: "#plots" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const SERVICE_AREAS = [
  "Talwandi",
  "Rangbari Road",
  "Kunhari",
  "Vigyan Nagar",
  "Nayapura",
];

function scrollTo(href: string) {
  const id = href.replace("#", "");
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export default function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";
  const caffeineLink = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`;

  return (
    <footer
      data-ocid="footer.section"
      className="bg-secondary border-t border-white/8"
    >
      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1: Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="sm:col-span-2 lg:col-span-1"
          >
            <button
              type="button"
              onClick={() => scrollTo("#hero")}
              data-ocid="footer.logo_link"
              className="inline-flex items-center gap-2.5 mb-4 group"
            >
              <div className="w-9 h-9 rounded-sm bg-accent flex items-center justify-center shadow-md">
                <span className="text-secondary font-display font-bold text-sm">
                  N
                </span>
              </div>
              <div>
                <div className="font-display text-base font-bold text-white group-hover:text-accent transition-colors">
                  Nyati Properties
                </div>
                <div className="text-white/70 text-xs font-body">
                  &amp; Builder
                </div>
              </div>
            </button>
            <p className="text-accent text-xs font-body font-semibold mb-3 tracking-wide uppercase">
              Trusted Property &amp; Builder Solutions Across Kota
            </p>
            <p className="text-white/80 text-sm font-body leading-relaxed mb-5">
              Builder-backed property consultancy helping families and investors
              find quality homes and plots in Kota with full transparency.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="footer.facebook_link"
                aria-label="Facebook"
                className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-white/70 hover:text-accent hover:border-accent/30 transition-all duration-200"
              >
                <SiFacebook size={15} />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="footer.instagram_link"
                aria-label="Instagram"
                className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-white/70 hover:text-accent hover:border-accent/30 transition-all duration-200"
              >
                <SiInstagram size={15} />
              </a>
            </div>
          </motion.div>

          {/* Col 2: Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-display text-sm font-bold text-white mb-5 tracking-wide uppercase">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <button
                    type="button"
                    onClick={() => scrollTo(link.href)}
                    data-ocid={`footer.${link.label.toLowerCase()}_link`}
                    className="flex items-center gap-2 text-sm text-white/80 hover:text-accent font-body transition-colors duration-200 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-accent/40 group-hover:bg-accent transition-colors" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Col 3: Service Areas */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-display text-sm font-bold text-white mb-5 tracking-wide uppercase">
              Service Areas
            </h4>
            <ul className="space-y-2.5">
              {SERVICE_AREAS.map((area) => (
                <li key={area}>
                  <button
                    type="button"
                    onClick={() => scrollTo("#properties")}
                    data-ocid={`footer.area_${area.toLowerCase().replace(/\s+/g, "_")}_link`}
                    className="flex items-center gap-2 text-sm text-white/80 hover:text-accent font-body transition-colors duration-200 group"
                  >
                    <MapPin className="w-3 h-3 text-accent/50 group-hover:text-accent transition-colors shrink-0" />
                    {area}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Col 4: Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="font-display text-sm font-bold text-white mb-5 tracking-wide uppercase">
              Contact Info
            </h4>
            <div className="space-y-3 mb-5">
              <a
                href="tel:7572905655"
                data-ocid="footer.phone_link"
                className="flex items-center gap-3 text-sm text-white/85 hover:text-accent font-body transition-colors group"
              >
                <Phone className="w-4 h-4 text-accent/60 group-hover:text-accent shrink-0" />
                7572905655
              </a>
              <div className="flex items-start gap-3 text-sm text-white/80 font-body">
                <MapPin className="w-4 h-4 text-accent/60 shrink-0 mt-0.5" />
                <span>
                  Talwandi, Kota,
                  <br />
                  Rajasthan 324005
                </span>
              </div>
              <div className="flex items-center gap-3 text-sm text-white/80 font-body">
                <Clock className="w-4 h-4 text-accent/60 shrink-0" />
                Mon–Sat: 9 AM – 7 PM
              </div>
            </div>

            {/* Google Maps card */}
            <a
              href="https://maps.google.com/?q=Talwandi+Kota+Rajasthan"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="footer.maps_link"
              className="flex items-center gap-2.5 w-full px-4 py-3 rounded-lg border border-white/15 bg-white/5 hover:border-accent/30 hover:bg-white/10 text-sm text-white/80 hover:text-accent font-body font-medium transition-all duration-200 mb-3"
            >
              <MapPin className="w-4 h-4 shrink-0" />
              View on Google Maps
              <ExternalLink className="w-3 h-3 ml-auto" />
            </a>

            <a
              href="https://wa.me/7572905655"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="footer.whatsapp_button"
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg font-body font-bold text-xs text-white transition-all duration-200 hover:opacity-90"
              style={{ background: "#25D366" }}
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-3.5 h-3.5"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
              </svg>
              WhatsApp Us
            </a>
          </motion.div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/6 bg-secondary/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/70 text-xs font-body text-center sm:text-left">
            &copy; {year} Nyati Property's and Builder. All rights reserved.
          </p>
          <p className="text-white/65 text-xs font-body text-center">
            Trusted Property &amp; Builder Solutions Across Kota
          </p>
          <p className="text-white/60 text-xs font-body">
            <a
              href={caffeineLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              Built with love using caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
