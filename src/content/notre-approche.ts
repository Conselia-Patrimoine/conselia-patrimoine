/**
 * Contenu de la page "Notre approche" — structure conforme à CLAUDE.md section 9.
 * Parcours en 4 étapes numérotées, visuellement liées (pas un simple bloc de texte).
 */

export type ProcessStep = {
  number: number;
  title: string;
  description: string;
};

export const chapo = "TODO";

export const processSteps: ProcessStep[] = [
  { number: 1, title: "TODO", description: "TODO" }, // Diagnostic patrimonial
  { number: 2, title: "TODO", description: "TODO" }, // Stratégie sur-mesure
  { number: 3, title: "TODO", description: "TODO" }, // Mise en œuvre
  { number: 4, title: "TODO", description: "TODO" }, // Suivi et ajustement
];

// À confirmer avec la cliente (cf. CLAUDE.md section 17) : le bloc "Notre expertise"
// (Q/R de src/content/vos-objectifs.ts) doit-il être dupliqué ici, ou rester
// uniquement sur /vos-objectifs pour éviter la redondance ?
