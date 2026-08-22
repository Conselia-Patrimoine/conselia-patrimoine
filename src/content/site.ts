/**
 * Identité du site — informations structurelles réutilisées un peu partout
 * (métadonnées, header, footer, mentions légales).
 *
 * ⚠️ Contenu à finaliser avec la cliente (voir CLAUDE.md section 17) :
 * adresse, téléphone, ORIAS. Ne pas mettre en ligne avant confirmation.
 */
export const siteConfig = {
  name: "Conselia Patrimoine",
  legalName: "TODO", // raison sociale exacte pour les mentions légales
  tagline: "TODO", // accroche courte utilisée en fallback meta description
  url: "https://www.conseliapatrimoine.com", // TODO: confirmer domaine définitif (IONOS)
  contact: {
    phone: "06 27 68 67 21", // à reconfirmer
    email: "mh@conseliapatrimoine.com",
    address: {
      // Divergence connue entre le site actuel et la démo, à clarifier avec Marine.
      line1: "18 chemin de traverse des monges",
      postalCode: "31190",
      city: "Auterive",
    },
  },
  social: {
    linkedin: "TODO", // seul réseau social conservé (cf. section 15)
  },
  orias: {
    number: "TODO", // numéro d'immatriculation ORIAS à demander à la cliente
  },
} as const;
