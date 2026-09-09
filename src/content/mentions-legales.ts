import { siteConfig } from "@/content/site";

/**
 * Contenu "Mentions légales" — cf. CLAUDE.md section 11.
 * Reprend les mentions actuellement en ligne sur conseliapatrimoine.com
 * (SIRET, ORIAS, RCP, hébergeur…) — à faire reconfirmer par la cliente
 * avant mise en ligne (informations réglementaires sensibles).
 */

export type LegalListItem = {
  label: string;
  text: string;
};

export type LegalSection = {
  heading: string;
  body?: string;
  paragraphs?: string[];
  list?: LegalListItem[];
  outro?: string;
};

const { legal, contact } = siteConfig;

export const legalSections: LegalSection[] = [
  {
    heading: "Éditeur du site",
    body: `${siteConfig.legalName}, ${legal.forme}, immatriculée au ${legal.rcs} (SIREN ${legal.siren}). Code APE ${legal.apeCode}. Siège social : ${contact.address.line1}, ${contact.address.postalCode} ${contact.address.city}. Directrice de la publication : Marine Henry.`,
  },
  {
    heading: "Activités",
    list: [
      {
        label: "Conseiller en investissement financier",
        text: `Conseiller en investissement financier enregistré au Registre unique des intermédiaires en assurance, banque et finance sous le numéro ${legal.orias} (www.orias.fr) en qualité d'adhérent de la Chambre nationale des conseils en gestion de patrimoine, association agréée par l'Autorité des marchés financiers.`,
      },
      {
        label: "Courtage en assurance",
        text: `Courtier d'assurance enregistré au Registre unique des intermédiaires en assurance, banque et finance sous le numéro ${legal.orias} (www.orias.fr).`,
      },
      {
        label: "Transactions immobilières",
        text: "Titulaire de la carte professionnelle n° CPI31012016000014281, délivrée par la CCI de TOULOUSE et permettant l'exercice de l'activité de transaction sur immeubles et fonds de commerce. Absence de garantie financière, non détention de fonds, effets ou valeurs pour compte de tiers.",
      },
    ],
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
  {
    heading: "Traitement des réclamations",
    paragraphs: [
      "En cas de litige ou de réclamation, les parties s'engagent à rechercher en premier lieu un arrangement amiable.",
      "Vous pouvez adresser une réclamation à votre conseiller habituel qui disposera de dix jours ouvrables pour en accuser réception, puis de deux mois, à compter de son envoi, pour y répondre.",
      "Vous pouvez en second lieu saisir gratuitement un médiateur de la consommation, deux mois après l'envoi d'une première réclamation écrite et au plus tard dans un délai d'un an :",
    ],
    list: [
      {
        label: "Pour le conseil en investissements financiers",
        text: "Le Médiateur de l'AMF, 17 place de la Bourse - 75082 Paris Cedex 02 ou www.amf-france.org/fr/le-mediateur.",
      },
      {
        label: "Pour les autres activités (médiateur recommandé par la CNCGP)",
        text: "Centre de Médiation et d'Arbitrage de Paris (CMAP), service médiation de la consommation, 39 avenue Franklin D. Roosevelt 75008 Paris ou www.cmap.fr/consommateurs.",
      },
    ],
    outro:
      "En cas d'échec de la médiation, le litige pourra être porté devant le tribunal compétent du territoire de l'État dans lequel le défendeur est domicilié.",
  },
];
