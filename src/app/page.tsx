import Hero from "@/components/sections/home/Hero";
import KpiBand from "@/components/sections/home/KpiBand";
import ExpertiseGrid from "@/components/sections/home/ExpertiseGrid";
import Testimonials from "@/components/sections/home/Testimonials";
import QuoteBanner from "@/components/sections/shared/QuoteBanner";
import CtaContact from "@/components/sections/shared/CtaContact";
import { ctaContact } from "@/content/home";

// Page Accueil — structure conforme à CLAUDE.md section 6.
export default function HomePage() {
  return (
    <>
      <Hero />
      <KpiBand />
      <QuoteBanner />
      <ExpertiseGrid />
      <Testimonials />
      <CtaContact title={ctaContact.title} />
    </>
  );
}
