/**
 * Contenu de la page "Notre approche" — structure conforme à CLAUDE.md
 * section 9. Texte validé par la cliente (content.md / CLAUDE.md).
 */

export type ProcessStep = {
  number: number;
  title: string;
  description: string;
};

export type CabinetValue = {
  title: string;
  description: string;
  icon: "expertise" | "proximite" | "sur-mesure" | "rigueur" | "innovation";
};

export const chapo =
  "Une gestion de patrimoine efficace ne se limite pas au conseil produit. Nous construisons une relation de confiance durable, fondée sur une méthode structurée en plusieurs étapes.";

export const processSteps: ProcessStep[] = [
  {
    number: 1,
    title: "Diagnostic patrimonial",
    description:
      "Lors du premier entretien que nous appelons \"rendez-vous découverte\", qui est gratuit, nous prenons le temps de comprendre votre situation familiale, professionnelle, fiscale et financière, et d'identifier vos priorités ainsi que vos objectifs de vie à court, moyen et long terme.",
  },
  {
    number: 2,
    title: "Une stratégie sur-mesure",
    description:
      "À partir de ce diagnostic, nous élaborons une stratégie patrimoniale personnalisée, cohérente avec votre profil de risque, vos horizons de placement et vos priorités.",
  },
  {
    number: 3,
    title: "Mise en œuvre",
    description:
      "Après une sélection rigoureuse de nos différents partenaires, nous vous proposons les solutions les plus adaptées parmi l'ensemble du marché, dans votre seul intérêt.",
  },
  {
    number: 4,
    title: "Suivi et ajustement dans le temps",
    description:
      "Votre situation évolue, votre stratégie doit s'adapter. Nous assurons un accompagnement régulier et ajustons nos recommandations au fil du temps.",
  },
];

export const cabinetValues: CabinetValue[] = [
  {
    title: "Expertise",
    description:
      "Une maîtrise technique actualisée en continu, au service de décisions patrimoniales éclairées.",
    icon: "expertise",
  },
  {
    title: "Proximité",
    description:
      "Une relation de confiance durable, à l'écoute de votre situation et de vos priorités.",
    icon: "proximite",
  },
  {
    title: "Sur-mesure",
    description:
      "Des recommandations construites pour votre situation, jamais des solutions standardisées.",
    icon: "sur-mesure",
  },
  {
    title: "Rigueur",
    description:
      "Une sélection exigeante des partenaires et des solutions, dans votre seul intérêt.",
    icon: "rigueur",
  },
  {
    title: "Innovation",
    description:
      "Une veille constante sur les dispositifs du marché pour vous faire bénéficier des meilleures options.",
    icon: "innovation",
  },
];

// À confirmer avec la cliente (cf. CLAUDE.md section 17) : le bloc "Notre expertise"
// (Q/R de src/content/notre-expertise.ts, page nommée "Vos objectifs" dans le
// brief d'origine) doit-il être dupliqué ici, ou rester uniquement sur
// /notre-expertise pour éviter la redondance ?
