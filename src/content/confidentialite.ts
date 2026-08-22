import { siteConfig } from "@/content/site";

/**
 * Contenu "Politique de confidentialité" — cf. CLAUDE.md section 12.
 * Rédaction standard RGPD adaptée au seul traitement du site (formulaire
 * de contact) — à faire relire par la cliente / un juriste avant mise en
 * ligne, ce n'est pas un texte contractuel validé.
 */

export type LegalSection = {
  heading: string;
  body: string;
};

export const privacySections: LegalSection[] = [
  {
    heading: "Données collectées",
    body: "Ce site collecte uniquement les données que vous transmettez volontairement via le formulaire de contact : nom, adresse e-mail, téléphone (facultatif), objet de la demande (facultatif) et message. Aucun cookie de suivi ni de traceur publicitaire n'est utilisé.",
  },
  {
    heading: "Finalité du traitement",
    body: "Ces données sont utilisées exclusivement pour répondre à votre demande de contact et échanger avec vous dans le cadre de la relation précontractuelle ou contractuelle avec le cabinet. Elles ne sont ni revendues ni transmises à des tiers à des fins commerciales.",
  },
  {
    heading: "Durée de conservation",
    body: "Les données transmises via le formulaire de contact sont conservées le temps nécessaire au traitement de votre demande, puis archivées conformément aux durées légales applicables si une relation contractuelle est établie.",
  },
  {
    heading: "Vos droits",
    body: `Conformément au RGPD, vous disposez d'un droit d'accès, de rectification, d'effacement et de limitation du traitement de vos données, ainsi que d'un droit d'opposition. Vous pouvez exercer ces droits en écrivant à ${siteConfig.contact.email}.`,
  },
  {
    heading: "Responsable de traitement",
    body: `Le responsable du traitement des données collectées sur ce site est ${siteConfig.legalName}, ${siteConfig.contact.address.line1}, ${siteConfig.contact.address.postalCode} ${siteConfig.contact.address.city} — ${siteConfig.contact.email}.`,
  },
];
