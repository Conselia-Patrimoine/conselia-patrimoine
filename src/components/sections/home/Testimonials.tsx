import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { testimonials } from "@/content/home";

/** Avis clients — contenu en dur, pas de service d'avis externe (cf. CLAUDE.md 6.4). */
export default function Testimonials() {
  return (
    <Section tone="muted">
      <SectionHeading title="Ils nous font confiance" align="center" />

      <ul className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
        {testimonials.map((t, i) => (
          <li
            key={i}
            className="rounded-2xl bg-blanc-casse p-8 shadow-sm ring-1 ring-gris-clair"
          >
            <p className="font-serif text-lg italic text-gris-anthracite">
              &ldquo;{t.quote}&rdquo;
            </p>
            <p className="mt-4 text-sm font-medium">{t.name}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
