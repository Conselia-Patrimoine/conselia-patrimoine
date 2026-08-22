/**
 * Patchwork de tons puisés dans la palette existante (jamais de couleur hors
 * charte) — alterné clair/foncé pour lire comme un damier, pas une grille
 * plate d'une seule teinte. Partagé entre les tuiles "Domaines d'expertise"
 * et "Chiffres clés" pour un traitement visuel cohérent.
 *
 * "desc"/"label" restent des tokens pleins (jamais une opacité sur "ink" :
 * le mélange oklab de Tailwind vire à l'orange sur fond clair, cf. commit
 * sur ink-soft) — "text.../70" reste sûr sur fond sombre en revanche.
 */
export const tileThemes = [
  { bg: "bg-ink", text: "text-paper", muted: "text-paper/70", icon: "text-gold-2" },
  { bg: "bg-mist", text: "text-ink", muted: "text-ink-soft", icon: "text-gold-4" },
  { bg: "bg-charcoal", text: "text-paper", muted: "text-paper/70", icon: "text-gold-1" },
  { bg: "bg-gold-1", text: "text-ink", muted: "text-ink-soft", icon: "text-charcoal" },
  { bg: "bg-gold-5", text: "text-paper", muted: "text-paper/70", icon: "text-gold-1" },
  { bg: "bg-stone-40", text: "text-ink", muted: "text-ink-soft", icon: "text-gold-4" },
] as const;
