/**
 * Contenu "Mentions légales" — cf. CLAUDE.md section 11.
 * Mentions obligatoires CGP indépendant : identité, statut, RCP, ORIAS,
 * autorités de contrôle, hébergeur. Numéro ORIAS en attente (section 17).
 */

export type LegalSection = {
  heading: string;
  body: string;
};

export const legalSections: LegalSection[] = [
  { heading: "Éditeur du site", body: "TODO" },
  { heading: "Statut et immatriculation ORIAS", body: "TODO" },
  { heading: "Assurance responsabilité civile professionnelle", body: "TODO" },
  { heading: "Autorités de contrôle", body: "TODO" },
  { heading: "Hébergement", body: "TODO" },
];
