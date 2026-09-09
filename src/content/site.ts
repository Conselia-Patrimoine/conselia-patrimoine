/**
 * Identité du site — informations structurelles réutilisées un peu partout
 * (métadonnées, header, footer, mentions légales).
 *
 * legal.* : repris des mentions légales actuellement en ligne sur
 * conseliapatrimoine.com — à faire reconfirmer par la cliente avant mise
 * en ligne (informations réglementaires sensibles, cf. CLAUDE.md section 17).
 * social.linkedin : trouvé par recherche (profil "Marine Henry - cabinet
 * CONSELIA PATRIMOINE"), à faire confirmer par la cliente également.
 */
export const siteConfig = {
  name: "Conselia Patrimoine",
  legalName: "Conselia Patrimoine",
  tagline:
    "Un patrimoine construit avec sérénité, indépendance et exigence.",
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
    linkedin: "https://fr.linkedin.com/in/marine-henry-1ab57284",
  },
  legal: {
    forme: "SARL au capital de 10 000 €",
    rcs: "RCS Toulouse 822 308 524",
    siren: "822 308 524",
    apeCode: "7022Z — Conseil pour les affaires et autres conseils de gestion",
    orias: "16005640",
    qualifications: [
      "Conseiller en investissements financiers (CIF), adhérent à la Chambre Nationale des Conseillers en Gestion de Patrimoine",
      "Courtier en assurance",
    ],
    carteProfessionnelle: "Carte professionnelle transactions immobilières CPI 3101 2016 000 014 281, délivrée par la CCI de Toulouse",
    rcp: {
      assureur: "MMA IARD Assurances Mutuelles / MMA IARD",
      adresse: "14 boulevard Marie et Alexandre Oyon, 72030 Le Mans Cedex 9",
      police: "118.263.166",
    },
    autoritesControle: ["AMF", "ACPR", "ORIAS"],
    cnil: "Déclaration CNIL n°2003574 v0 du 28/11/2016",
    // Hébergement Vercel (le nom de domaine reste chez IONOS, en registrar
    // uniquement) — adresse à reconfirmer sur vercel.com/legal avant mise en
    // ligne, susceptible de changer.
    hebergeur: {
      nom: "Vercel Inc.",
      adresse: "340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis",
    },
  },
} as const;
