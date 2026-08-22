/**
 * Contenu de la page Accueil — structure conforme à CLAUDE.md section 6.
 * Hero, KPI, domaines d'expertise, témoignages et CTA : contenu validé
 * (content.md + démo cliente https://demos-client-omega.vercel.app/demos/a7k9p2).
 */

export type Kpi = {
  value: string;
  label: string;
};

export type ExpertiseDomain = {
  title: string;
  icon: "payments" | "receipt_long" | "apartment" | "business_center" | "family_history" | "health_and_safety";
};

export type Testimonial = {
  name: string;
  quote: string;
};

export const hero = {
  headline: "Un patrimoine construit avec sérénité, indépendance et exigence.",
  subheadline:
    "Conselia Patrimoine, un cabinet en gestion de patrimoine au service de vos projets.",
};

// Les 2 chiffres confirmés par la cliente. Un 3e chiffre "clients
// accompagnés" ou "zone d'intervention" (cf. CLAUDE.md section 17) reste en
// attente d'un nombre réel — ne pas en inventer un tant qu'il n'est pas confirmé.
export const kpis: Kpi[] = [
  { value: "2016", label: "Année de création" },
  { value: "2", label: "Associés" },
];

// Marine obtient son master 2 ingénierie du patrimoine en 2013 (cf. Qui
// sommes-nous) — calculé plutôt que codé en dur pour ne jamais devenir faux.
export const expertiseSinceYear = 2013;

// Intitulés + icônes fixés par la cliente (section 6.3, repris de la démo
// validée) — pas de description sous chaque carte. Chaque carte pointe
// vers /vos-objectifs (pas de fiche produit dédiée).
export const expertiseDomains: ExpertiseDomain[] = [
  { title: "Placements financiers", icon: "payments" },
  { title: "Défiscalisation", icon: "receipt_long" },
  { title: "Immobilier", icon: "apartment" },
  { title: "Solutions Entreprises", icon: "business_center" },
  { title: "Transmission & Succession", icon: "family_history" },
  { title: "Assurance vie", icon: "health_and_safety" },
];

// 3 témoignages en dur (section 6.4), repris de la démo validée par la cliente.
export const testimonials: Testimonial[] = [
  {
    name: "Jean-Pierre M.",
    quote:
      "Marine a su vulgariser des concepts complexes et m'a aidé à structurer mes placements pour ma retraite avec beaucoup de pédagogie.",
  },
  {
    name: "Sophie L.",
    quote:
      "Un conseil indépendant qui change tout. J'apprécie particulièrement la réactivité de Marine et la personnalisation de ses solutions.",
  },
  {
    name: "Marc D.",
    quote:
      "Grâce au bilan patrimonial, nous avons pu optimiser notre fiscalité immobilière. Une expertise précieuse pour notre famille.",
  },
];

// CTA final (section 6.5), repris de la démo validée.
export const ctaContact = {
  title: "Prenons le temps d'en parler",
};
