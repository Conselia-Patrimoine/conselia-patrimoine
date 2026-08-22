/**
 * Contenu de la page "Vos objectifs" — structure conforme à CLAUDE.md section 8.
 * 7 blocs question/réponse (déjà rédigés dans le brief), alternant avec un visuel.
 */

export type ObjectiveBlock = {
  question: string;
  answer: string;
};

export const objectiveBlocks: ObjectiveBlock[] = [
  { question: "TODO", answer: "TODO" }, // Faire fructifier mon épargne
  { question: "TODO", answer: "TODO" }, // Investir dans l'immobilier
  { question: "TODO", answer: "TODO" }, // Réduire ma pression fiscale
  { question: "TODO", answer: "TODO" }, // Arrêt de travail / invalidité
  { question: "TODO", answer: "TODO" }, // Niveau de vie à la retraite
  { question: "TODO", answer: "TODO" }, // Protéger mes proches / transmission
  { question: "TODO", answer: "TODO" }, // Proches protégés en cas de coup dur
];
