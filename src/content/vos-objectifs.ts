/**
 * Contenu de la page "Vos objectifs" — structure conforme à CLAUDE.md
 * section 8. 7 blocs question/réponse, texte validé par la cliente
 * (content.md / CLAUDE.md).
 */

export type ObjectiveBlock = {
  question: string;
  answer: string;
};

// Titre du bloc Q/R dans content.md, repris ici pour le hero.
export const hero = {
  headline: "Vos objectifs",
  subheadline:
    "Des questions que vous vous posez, des réponses que nous construisons avec vous.",
};

export const objectiveBlocks: ObjectiveBlock[] = [
  {
    question: "Comment faire fructifier mon épargne sans prendre de risques inconsidérés ?",
    answer:
      "Assurance-vie, PER, comptes-titres : nous construisons une allocation adaptée à votre profil de risque et à vos horizons de placement, en toute indépendance vis-à-vis des établissements financiers.",
  },
  {
    question: "Faut-il investir dans l'immobilier, et sous quelle forme ?",
    answer:
      "Investissement locatif, SCPI, démembrement : nous vous aidons à choisir les solutions immobilières cohérentes avec vos objectifs de revenus complémentaires ou d'optimisation fiscale.",
  },
  {
    question: "Comment réduire ma pression fiscale ?",
    answer:
      "Nous identifions les dispositifs adaptés à votre situation (réduction, déduction, arbitrage entre enveloppes) pour alléger votre fiscalité sans compromettre vos objectifs patrimoniaux.",
  },
  {
    question: "Suis-je suffisamment couvert en cas d'arrêt de travail ou d'invalidité ?",
    answer:
      "Pour les professions libérales et chefs d'entreprise, nous analysons vos droits, vos régimes obligatoires, et calculons les indemnités réellement perçues afin de vous proposer un contrat de prévoyance sur-mesure selon vos besoins.",
  },
  {
    question: "Quel sera mon niveau de vie à la retraite ?",
    answer:
      "Nous évaluons vos droits acquis et construisons une stratégie d'épargne progressive pour anticiper et compenser l'écart de revenus au moment du départ.",
  },
  {
    question: "Comment protéger mes proches et transmettre dans les meilleures conditions ?",
    answer:
      "Donations, démembrement, assurance-vie : nous anticipons la transmission de votre patrimoine pour limiter les droits de succession et respecter vos volontés.",
  },
  {
    question: "Mes proches seraient-ils protégés en cas de coup dur ?",
    answer:
      "Prévoyance, régime matrimonial, clauses bénéficiaires : nous vérifions que votre entourage est structurellement protégé face aux aléas de la vie.",
  },
];
