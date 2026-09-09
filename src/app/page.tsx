import Hero from "@/components/sections/home/Hero";
import KpiBand from "@/components/sections/home/KpiBand";
import ExpertiseGrid from "@/components/sections/home/ExpertiseGrid";
import PhotoBanner from "@/components/sections/home/PhotoBanner";
import Testimonials from "@/components/sections/home/Testimonials";
import QuoteBanner from "@/components/sections/shared/QuoteBanner";
import CtaContact from "@/components/sections/shared/CtaContact";
import { ctaContact } from "@/content/home";

// Page Accueil — structure conforme à CLAUDE.md section 6.
export default function HomePage() {
  return (
    <>
      <Hero />
      <ExpertiseGrid />
      <QuoteBanner compact />
      <KpiBand />
      <PhotoBanner />
      <Testimonials />
      <CtaContact title={ctaContact.title} description={ctaContact.description} />
    </>
  );
}
