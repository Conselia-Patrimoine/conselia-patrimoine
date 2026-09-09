import Container from "@/components/ui/Container";
import Feather from "@/components/ui/Feather";
import FadeIn from "@/components/ui/FadeIn";
import { quoteBanner } from "@/content/a-propos";

/**
 * Bandeau citation plein fond (plume du logo) — cf. CLAUDE.md section 7.
 * Réutilisé sur l'Accueil : c'est la pièce de contenu la plus distinctive
 * du site, elle ancre la page dans l'identité du cabinet plutôt que dans
 * un discours finance générique. Sur l'Accueil, en version plus discrète
 * (`compact`) : c'est un rappel, la mise en avant complète reste sur "À propos".
 *
 * Fond doré en dégradé (gold-foil) — jamais un aplat uni, cf. charte
 * graphique section 14, même pour ce moment volontairement doré.
 */
export default function QuoteBanner({ compact = false }: { compact?: boolean }) {
  return (
    <section className={`gold-foil text-center ${compact ? "py-10 sm:py-14" : "py-16 sm:py-24"}`}>
      <Container>
        <FadeIn>
          <Feather className={`mx-auto mb-6 ${compact ? "h-10 w-10" : "h-14 w-14"}`} fill="ink" />
          <blockquote
            className={`mx-auto max-w-2xl font-display italic text-ink ${
              compact ? "text-base sm:text-lg" : "text-xl sm:text-2xl"
            }`}
          >
            &ldquo;{quoteBanner.text}&rdquo;
          </blockquote>
          <p className="mt-6 text-sm font-medium text-ink-soft">{quoteBanner.author}</p>
        </FadeIn>
      </Container>
    </section>
  );
}
