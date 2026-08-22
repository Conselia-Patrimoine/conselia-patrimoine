import Hero from "@/components/sections/home/Hero";
import KpiBand from "@/components/sections/home/KpiBand";
import ExpertiseGrid from "@/components/sections/home/ExpertiseGrid";
import Testimonials from "@/components/sections/home/Testimonials";
import CtaContact from "@/components/sections/shared/CtaContact";

// Page Accueil — structure conforme à CLAUDE.md section 6.
export default function HomePage() {
  return (
    <>
      <Hero />
      <KpiBand />
      <ExpertiseGrid />
      <Testimonials />
      <CtaContact />
    </>
  );
}
