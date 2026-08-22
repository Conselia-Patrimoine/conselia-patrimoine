import Image from "next/image";
import Container from "@/components/ui/Container";
import ParallaxLayer from "@/components/ui/ParallaxLayer";
import { hero } from "@/content/home";

/**
 * Hero Accueil : photo pleine largeur (légère dérive parallax) + titre superposé.
 * Fichier : public/images/hero.avif. -mt-20 annule le pt-20 du <main>
 * (cf. layout.tsx) pour s'étendre sous le header translucide fixe.
 *
 * TODO: à remplacer par une photo des deux associés si/quand disponible
 * (cf. CLAUDE.md section 4) — cette image reste un bon filet de secours.
 */
export default function Hero() {
  return (
    <section
      className="relative -mt-20 flex min-h-screen items-end overflow-hidden"
      style={{ clipPath: "polygon(0 0, 100% 0, 100% 90%, 0 100%)" }}
    >
      <ParallaxLayer>
        <Image
          src="/images/hero.avif"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover grayscale"
        />
      </ParallaxLayer>
      {/* Dégradé de marque, bien visible sur toute la photo (charcoal → or). */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgba(42,40,35,0.85) 0%, rgba(42,40,35,0.55) 35%, rgba(110,85,24,0.5) 70%, rgba(139,107,61,0.62) 100%)",
        }}
      />

      <Container className="relative pb-20 pt-24 sm:pb-24">
        <div className="flex max-w-xl flex-col gap-5">
          <span className="text-sm font-semibold uppercase tracking-widest text-gold-2">
            Cabinet indépendant · depuis 2016
          </span>
          <h1 className="text-4xl text-paper sm:text-5xl">{hero.headline}</h1>
          <p className="text-lg text-paper/85">{hero.subheadline}</p>
        </div>
      </Container>
    </section>
  );
}
