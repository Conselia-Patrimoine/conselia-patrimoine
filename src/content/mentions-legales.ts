import { siteConfig } from "@/content/site";

/**
 * Contenu "Mentions légales" — cf. CLAUDE.md section 11.
 * Reprend les mentions actuellement en ligne sur conseliapatrimoine.com
 * (SIRET, ORIAS, RCP, hébergeur…) — à faire reconfirmer par la cliente
 * avant mise en ligne (informations réglementaires sensibles).
 */

export type LegalSection = {
  heading: string;
  body: string;
};

const { legal, contact } = siteConfig;

export const legalSections: LegalSection[] = [
  {
    heading: "Éditeur du site",
    body: `${siteConfig.legalName}, ${legal.forme}, immatriculée au ${legal.rcs} (SIREN ${legal.siren}). Code APE ${legal.apeCode}. Siège social : ${contact.address.line1}, ${contact.address.postalCode} ${contact.address.city}. Directrice de la publication : Marine Henry.`,
  },
  {
    heading: "Statut et immatriculation ORIAS",
    body: `${siteConfig.legalName} est enregistré à l'ORIAS (orias.fr) sous le numéro ${legal.orias}, en qualité de ${legal.qualifications.join(" et de ")}. ${legal.carteProfessionnelle}.`,
  },
  {
    heading: "Assurance responsabilité civile professionnelle",
    body: `Assurance RCP souscrite auprès de ${legal.rcp.assureur}, ${legal.rcp.adresse} — police n° ${legal.rcp.police}.`,
  },
  {
    heading: "Autorités de contrôle",
    body: `L'activité de conseil en gestion de patrimoine est encadrée par : ${legal.autoritesControle.join(", ")}. ${legal.cnil}.`,
  },
  {
    heading: "Hébergement",
    body: `${legal.hebergeur.nom}, ${legal.hebergeur.adresse}.`,
  },
];
