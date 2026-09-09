import Image from "next/image";
import Container from "@/components/ui/Container";
import ParallaxLayer from "@/components/ui/ParallaxLayer";
import { sharedParagraph } from "@/content/a-propos";

/**
 * Hero de la page "À propos" — même traitement photo que l'Accueil (niveaux
 * de gris + dégradé de marque + parallax), mais plus court : page
 * secondaire, pas besoin de 100vh.
 */
export default function AboutHero() {
  return (
    <section className="relative -mt-20 flex h-[60vh] min-h-[420px] items-end overflow-hidden">
      <ParallaxLayer>
        <Image
          src="/images/apropos.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover grayscale"
        />
      </ParallaxLayer>
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgba(42,40,35,0.85) 0%, rgba(42,40,35,0.55) 35%, rgba(107,74,22,0.5) 70%, rgba(138,95,30,0.62) 100%)",
        }}
      />

      <Container className="relative pb-16 pt-24 sm:pb-20">
        <div className="flex max-w-xl flex-col gap-5">
          <span className="text-sm font-semibold uppercase tracking-widest text-gold-2">
            Le cabinet
          </span>
          <h1 className="text-3xl text-paper sm:text-4xl">Qui sommes-nous</h1>
          <p className="text-lg text-paper/85">{sharedParagraph}</p>
        </div>
      </Container>
    </section>
  );
}
