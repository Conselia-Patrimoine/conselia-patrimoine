import { Star } from "lucide-react";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import SlideInOnScroll from "@/components/ui/SlideInOnScroll";
import { testimonials } from "@/content/home";

// Toutes les classes possibles doivent apparaître littéralement pour que
// Tailwind les génère.
const gridColsByCount: Record<number, string> = {
  1: "sm:grid-cols-1",
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-3",
};

/** Avis clients — avis Google réels et vérifiés (cf. content/home.ts). */
export default function Testimonials() {
  const gridCols = gridColsByCount[testimonials.length] ?? "sm:grid-cols-3";

  return (
    <Section tone="muted">
      <SectionHeading title="Ils nous font confiance" align="center" />

      <ul className={`mx-auto mt-12 grid max-w-3xl grid-cols-1 gap-6 ${gridCols}`}>
        {testimonials.map((t, i) => (
          <li key={i} className="h-full">
            <SlideInOnScroll
              from={i % 2 === 0 ? "left" : "right"}
              delay={(i % 3) * 100}
              className="h-full"
            >
              <div className="flex h-full flex-col rounded-2xl bg-paper p-8 shadow-sm ring-1 ring-stone-40">
                <div className="flex gap-0.5" aria-label={`${t.rating} étoiles sur 5`}>
                  {Array.from({ length: t.rating }).map((_, star) => (
                    <Star key={star} className="h-4 w-4 fill-gold-3 text-gold-3" />
                  ))}
                </div>
                <p className="mt-4 flex-1 font-display text-lg italic text-ink">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <p className="mt-4 text-sm font-medium">{t.name}</p>
                <p className="text-xs text-stone">Avis Google</p>
              </div>
            </SlideInOnScroll>
          </li>
        ))}
      </ul>
    </Section>
  );
}
