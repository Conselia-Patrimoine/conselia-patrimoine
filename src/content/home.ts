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
  description: string;
  icon: "payments" | "receipt_long" | "apartment" | "business_center" | "family_history" | "health_and_safety";
};

export type Testimonial = {
  name: string;
  quote: string;
  rating: number;
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
// validée). Chaque carte pointe vers /vos-objectifs (pas de fiche produit
// dédiée).
//
// ⚠️ Descriptions : CLAUDE.md section 6.3 précisait à l'origine "sans
// description sous chaque titre" (décision actée avec la cliente). Ce choix
// a été inversé en cours de route — phrases ci-dessous rédigées par mes
// soins (aucune ne figure dans content.md), à faire relire/valider par
// Marine avant mise en ligne, comme tout texte non explicitement fourni.
export const expertiseDomains: ExpertiseDomain[] = [
  {
    title: "Placements financiers",
    description: "Construire une épargne adaptée à votre profil et à vos objectifs de vie.",
    icon: "payments",
  },
  {
    title: "Défiscalisation",
    description: "Réduire votre pression fiscale par des dispositifs adaptés à votre situation.",
    icon: "receipt_long",
  },
  {
    title: "Immobilier",
    description: "Investir dans la pierre, en direct ou via des solutions collectives.",
    icon: "apartment",
  },
  {
    title: "Solutions Entreprises",
    description: "Accompagner les dirigeants dans la gestion de leur patrimoine professionnel.",
    icon: "business_center",
  },
  {
    title: "Transmission & Succession",
    description: "Anticiper la transmission de votre patrimoine à vos proches.",
    icon: "family_history",
  },
  {
    title: "Assurance vie",
    description: "Protéger vos proches et valoriser votre épargne sur le long terme.",
    icon: "health_and_safety",
  },
];

// Avis Google réels et vérifiés (5 étoiles), transcrits tels quels — y
// compris la coquille "patrinoime" du second avis, laissée volontairement
// pour rester fidèle au texte authentique du client.
export const testimonials: Testimonial[] = [
  {
    name: "Anne-Laure RdZ",
    rating: 5,
    quote:
      "Je connais Marine HENRY depuis des années maintenant car nos 2 professions sont complémentaires et j'apprécie grandement l'accompagnement qu'elle offre à ses clients. Elle est très pro, humaine, et sérieuse. je recommande l'ensemble de son cabinet qui est composé de personnes qui lui ressemblent.",
  },
  {
    name: "Thierry CARLES",
    rating: 5,
    quote:
      "Marine nous a accompagné pour établir un diagnostic de notre patrinoime et estimer toutes les options pour anticiper l'avenir avec sérénité. Du sérieux et de la compétence, bravo !",
  },
];

// CTA final (section 6.5) : titre repris de la démo validée. Sous-titre
// rédigé par mes soins (absent de content.md), à faire valider par la cliente.
export const ctaContact = {
  title: "Prenons le temps d'en parler",
  description: "Pour comprendre votre situation et voir comment nous pouvons vous accompagner.",
};
