import { siteConfig } from "@/content/site";

/**
 * Contenu de la page "À propos" — structure conforme à CLAUDE.md section 7
 * (page encore nommée "Qui sommes-nous" dans le brief d'origine, renommée
 * en cours de projet). Texte validé par la cliente (content.md / CLAUDE.md).
 */

export type TeamMember = {
  firstName: string;
  role: string;
  bio: string;
  photo?: string; // chemin vers /public/images/*
  phone?: string;
  email?: string;
};

export const teamMembers: TeamMember[] = [
  {
    firstName: "Marine",
    // "Gérante" : repris de l'attribution de la citation ci-dessous.
    role: "Gérante",
    bio: "Après des études dans le notariat, Marine HENRY se spécialise dans l'ingénierie patrimoniale et obtient en 2013 son master 2 ingénierie du patrimoine à la faculté de Toulouse. À l'issue de trois années dans un cabinet en gestion de patrimoine en tant que conseil, elle a souhaité exercer son métier de manière indépendante et mettre son expertise au service de ses clients.",
    photo: "/images/marine.jpg",
    phone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
  },
  {
    firstName: "Lionel",
    // "Associé" : cf. CLAUDE.md, "les deux associés" — aucun intitulé plus précis fourni.
    role: "Associé",
    bio: "Après une première carrière dans le secteur du commerce, Lionel TOUCHET a opéré une reconversion professionnelle vers la gestion de patrimoine. Titulaire du Certificat en Gestion de Patrimoine, il a rejoint le cabinet en 2021, apportant à ses clients une approche à la fois technique et centrée sur l'humain, forgée par son parcours atypique.",
    photo: "/images/lionel.jpg",
    phone: "06 21 31 27 56",
    email: "lt@conseliapatrimoine.com",
  },
];

export const sharedParagraph =
  "Conselia Patrimoine, c'est Marine Henry et Lionel Touchet. Si nos parcours diffèrent, nous partageons la même exigence d'accompagnement : ensemble, nous allions expertise technique et écoute pour construire des solutions patrimoniales adaptées à chaque situation de nos clients.";

export const quoteBanner = {
  text: "La plume symbolise l'écrit, instrument essentiel de transmission et de conservation de l'information. En droit, l'écrit constitue une preuve parfaite, non soumise à l'appréciation du juge. Comme le veut l'expression, les paroles s'envolent, les écrits restent.",
  author: "Marine Henry, Gérante de Conselia Patrimoine",
};
