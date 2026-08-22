/**
 * Arborescence du site — voir CLAUDE.md section 5.
 * Source unique de vérité pour le header, le footer et la page "Plan de site".
 */
export type NavLink = {
  label: string;
  href: string;
};

// Navigation principale (header)
export const mainNav: NavLink[] = [
  { label: "Accueil", href: "/" },
  { label: "À propos", href: "/a-propos" },
  { label: "Notre expertise", href: "/notre-expertise" },
  { label: "Notre approche", href: "/notre-approche" },
  { label: "Contact", href: "/contact" },
];

// Liens légaux (footer)
export const legalNav: NavLink[] = [
  { label: "Mentions légales", href: "/mentions-legales" },
  { label: "Politique de confidentialité", href: "/politique-de-confidentialite" },
  { label: "Plan de site", href: "/plan-de-site" },
];

// Ensemble des pages du site, pour la page "Plan de site"
export const allPages: NavLink[] = [...mainNav, ...legalNav];
