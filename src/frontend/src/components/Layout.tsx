import { cn } from "@/lib/utils";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

const NAV_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "Properties", href: "#properties" },
  { label: "Projects", href: "#projects" },
  { label: "Plots", href: "#plots" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

function scrollTo(href: string) {
  const id = href.replace("#", "");
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const topRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-ocid="navbar"
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "py-2 bg-secondary/90 backdrop-blur-xl border-b border-accent/10 shadow-lg"
          : "py-4 bg-secondary/60 backdrop-blur-md border-b border-white/5",
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <button
          type="button"
          data-ocid="navbar.logo_link"
          onClick={() => scrollTo("#hero")}
          className="flex items-center gap-2.5 group"
        >
          <div className="w-8 h-8 rounded-sm bg-accent flex items-center justify-center shadow-md">
            <span className="text-secondary font-display font-bold text-sm leading-none">
              N
            </span>
          </div>
          <span className="font-display text-primary-foreground text-base font-semibold tracking-wide group-hover:text-accent transition-colors duration-200">
            Nyati Properties
          </span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              data-ocid={`navbar.${link.label.toLowerCase()}_link`}
              onClick={(e) => {
                e.preventDefault();
                scrollTo(link.href);
                setMenuOpen(false);
              }}
              className="px-3.5 py-2 text-sm text-primary-foreground/75 hover:text-accent font-body font-medium transition-colors duration-200 rounded-md hover:bg-white/5"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <button
          type="button"
          data-ocid="navbar.book_consultation_button"
          onClick={() => scrollTo("#contact")}
          className="hidden md:flex items-center gap-2 px-4 py-2 bg-accent text-secondary rounded-md font-body font-semibold text-sm hover:bg-accent/90 transition-all duration-200 shadow-md hover:shadow-accent/20 hover:shadow-lg"
        >
          Book Consultation
        </button>

        {/* Mobile hamburger */}
        <button
          type="button"
          data-ocid="navbar.hamburger_button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 text-primary-foreground/80 hover:text-accent transition-colors"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          data-ocid="navbar.mobile_menu"
          className="md:hidden bg-secondary/95 backdrop-blur-xl border-t border-white/5 px-4 pb-4 pt-2"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              data-ocid={`navbar.mobile_${link.label.toLowerCase()}_link`}
              onClick={(e) => {
                e.preventDefault();
                scrollTo(link.href);
                setMenuOpen(false);
              }}
              className="block py-3 text-primary-foreground/80 hover:text-accent font-body font-medium border-b border-white/5 last:border-0 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <button
            type="button"
            data-ocid="navbar.mobile_book_button"
            onClick={() => {
              scrollTo("#contact");
              setMenuOpen(false);
            }}
            className="mt-3 flex items-center justify-center gap-2 w-full py-3 bg-accent text-secondary rounded-md font-semibold text-sm"
          >
            Book Consultation
          </button>
        </div>
      )}
      <div ref={topRef} />
    </header>
  );
}

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/7572905655"
      target="_blank"
      rel="noopener noreferrer"
      data-ocid="whatsapp.float_button"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-4 z-50 md:bottom-8 md:right-6 w-14 h-14 rounded-full shadow-xl flex items-center justify-center transition-transform duration-200 hover:scale-110 group"
      style={{ background: "#25D366" }}
    >
      <span className="sr-only">Chat on WhatsApp</span>
      <svg
        viewBox="0 0 24 24"
        fill="white"
        className="w-7 h-7"
        aria-hidden="true"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
      </svg>
    </a>
  );
}

export function StickyMobileCTA() {
  return (
    <div
      data-ocid="mobile.sticky_cta"
      className="fixed bottom-0 left-0 right-0 z-40 md:hidden"
    >
      <a
        href="https://wa.me/7572905655"
        target="_blank"
        rel="noopener noreferrer"
        data-ocid="mobile.sticky_whatsapp_link"
        className="flex items-center justify-center gap-3 w-full py-4 bg-accent text-secondary font-display font-bold text-base shadow-xl"
      >
        <Phone size={18} fill="currentColor" />
        Talk to Expert →
      </a>
    </div>
  );
}

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background font-body">
      <Navbar />
      <main className="pt-0">{children}</main>
    </div>
  );
}
