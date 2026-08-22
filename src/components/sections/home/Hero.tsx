import Image from "next/image";
import Container from "@/components/ui/Container";
import ParallaxLayer from "@/components/ui/ParallaxLayer";
import Button from "@/components/ui/Button";
import { hero } from "@/content/home";

/**
 * Hero Accueil : photo pleine largeur (légère dérive parallax) + titre superposé.
 * Fichier : public/images/hero.png. -mt-20 annule le pt-20 du <main>
 * (cf. layout.tsx) pour s'étendre sous le header translucide fixe.
 *
 * TODO: à remplacer par une photo des deux associés si/quand disponible
 * (cf. CLAUDE.md section 4) — cette image reste un bon filet de secours.
 */
export default function Hero() {
  return (
    <section className="relative -mt-20 flex min-h-screen items-end overflow-hidden">
      <ParallaxLayer>
        <Image
          src="/images/hero.png"
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
            "linear-gradient(135deg, rgba(42,40,35,0.85) 0%, rgba(42,40,35,0.55) 35%, rgba(107,74,22,0.5) 70%, rgba(138,95,30,0.62) 100%)",
        }}
      />

      <Container className="relative pb-20 pt-24 sm:pb-24">
        <div className="flex max-w-xl flex-col gap-5">
          <span className="text-sm font-semibold uppercase tracking-widest text-gold-2">
            Cabinet indépendant · depuis 2016
          </span>
          <h1 className="text-3xl text-paper sm:text-4xl">{hero.headline}</h1>
          <p className="text-lg text-paper/85">{hero.subheadline}</p>
          <Button href="/contact" className="mt-2 self-start">
            Nous contacter
          </Button>
        </div>
      </Container>
    </section>
  );
}
