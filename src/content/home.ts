/**
 * Contenu de la page Accueil — structure conforme à CLAUDE.md section 6.
 * ⚠️ Placeholders "TODO" : le texte définitif n'a pas encore été intégré.
 */

export type Kpi = {
  value: string;
  label: string;
};

export type ExpertiseDomain = {
  title: string;
  icon: string; // nom d'icône (Material Symbols / Lucide, à définir)
};

export type Testimonial = {
  name: string;
  quote: string;
};

export const hero = {
  headline: "TODO", // Accroche : "Un patrimoine construit avec sérénité, indépendance et exigence."
  subheadline: "TODO", // Sous-accroche cabinet
};

export const kpis: Kpi[] = [
  { value: "TODO", label: "TODO" }, // ex. année de création 2016
  { value: "TODO", label: "TODO" }, // ex. nombre d'associés
  { value: "TODO", label: "TODO" }, // ex. clients accompagnés / zone d'intervention
];

// Intitulés fixés par la cliente (section 6.3) — pas de description sous chaque carte.
// Chaque carte pointe vers /vos-objectifs (pas de fiche produit dédiée).
export const expertiseDomains: ExpertiseDomain[] = [
  { title: "Placements financiers", icon: "TODO" },
  { title: "Défiscalisation", icon: "TODO" },
  { title: "Immobilier", icon: "TODO" },
  { title: "Solutions Entreprises", icon: "TODO" },
  { title: "Transmission & Succession", icon: "TODO" },
  { title: "Assurance vie", icon: "TODO" },
];

// 3 témoignages en dur (section 6.4) : Jean-Pierre M., Sophie L., Marc D.
export const testimonials: Testimonial[] = [
  { name: "TODO", quote: "TODO" },
  { name: "TODO", quote: "TODO" },
  { name: "TODO", quote: "TODO" },
];
