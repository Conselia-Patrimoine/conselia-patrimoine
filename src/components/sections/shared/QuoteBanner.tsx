import Section from "@/components/ui/Section";
import { quoteBanner } from "@/content/qui-sommes-nous";

/**
 * Bandeau citation plein fond (plume du logo) — cf. CLAUDE.md section 7.
 * Réutilisé sur l'Accueil : c'est la pièce de contenu la plus distinctive
 * du site, elle ancre la page dans l'identité du cabinet plutôt que dans
 * un discours finance générique.
 */
export default function QuoteBanner() {
  return (
    <Section tone="dark" className="text-center">
      <blockquote className="mx-auto max-w-2xl font-display text-xl italic sm:text-2xl">
        &ldquo;{quoteBanner.text}&rdquo;
      </blockquote>
      <p className="mt-6 text-sm text-gold-2">{quoteBanner.author}</p>
    </Section>
  );
}
