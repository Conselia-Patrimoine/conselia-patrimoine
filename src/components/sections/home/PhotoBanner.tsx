import Image from "next/image";
import ParallaxLayer from "@/components/ui/ParallaxLayer";

/**
 * Bannière photo pleine largeur avec effet parallax, entre les chiffres
 * clés et les avis clients — respiration visuelle dans la page.
 */
export default function PhotoBanner() {
  return (
    <section className="relative h-[45vh] min-h-[320px] overflow-hidden">
      <ParallaxLayer>
        <Image
          src="/images/immobilier.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
      </ParallaxLayer>
      {/* Même dégradé de marque que le hero, pour une cohérence visuelle entre les deux photos. */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgba(42,40,35,0.85) 0%, rgba(42,40,35,0.55) 35%, rgba(107,74,22,0.5) 70%, rgba(138,95,30,0.62) 100%)",
        }}
      />
    </section>
  );
}
