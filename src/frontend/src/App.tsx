import AboutSection from "@/components/AboutSection";
import BuilderAdvantageSection from "@/components/BuilderAdvantageSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Layout, { StickyMobileCTA, WhatsAppButton } from "@/components/Layout";
import LocalMarketSection from "@/components/LocalMarketSection";
import { PropertiesSection } from "@/components/PropertiesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";

// SectionPlaceholder removed

export default function App() {
  return (
    <Layout>
      <HeroSection />
      <PropertiesSection />
      <BuilderAdvantageSection />
      <LocalMarketSection />
      <TestimonialsSection />
      <WhyChooseUsSection />
      <AboutSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
      <StickyMobileCTA />
    </Layout>
  );
}
