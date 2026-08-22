/**
 * Contenu de la page "Qui sommes-nous" — structure conforme à CLAUDE.md
 * section 7. Texte validé par la cliente (content.md / CLAUDE.md).
 */

export type TeamMember = {
  firstName: string;
  bio: string;
  photo?: string; // chemin vers /public/images/equipe/*, à obtenir
};

export const teamMembers: TeamMember[] = [
  {
    firstName: "Marine",
    bio: "Après des études dans le notariat, Marine HENRY se spécialise dans l'ingénierie patrimoniale et obtient en 2013 son master 2 ingénierie du patrimoine à la faculté de Toulouse. À l'issue de trois années dans un cabinet en gestion de patrimoine en tant que conseil, elle a souhaité exercer son métier de manière indépendante et mettre son expertise au service de ses clients.",
  },
  {
    firstName: "Lionel",
    bio: "Après une première carrière dans le secteur du commerce, Lionel TOUCHET a opéré une reconversion professionnelle vers la gestion de patrimoine. Titulaire du Certificat en Gestion de Patrimoine, il a rejoint le cabinet en 2021, apportant à ses clients une approche à la fois technique et centrée sur l'humain, forgée par son parcours atypique.",
  },
];

export const sharedParagraph =
  "Si nos parcours diffèrent, nous partageons la même exigence d'accompagnement : ensemble, nous allions expertise technique et écoute pour construire des solutions patrimoniales adaptées à chaque situation de nos clients.";

export const quoteBanner = {
  text: "La plume symbolise l'écrit, instrument essentiel de transmission et de conservation de l'information. En droit, l'écrit constitue une preuve parfaite, non soumise à l'appréciation du juge. Comme le veut l'expression, les paroles s'envolent, les écrits restent.",
  author: "Marine Henry, Gérante de Conselia Patrimoine",
};
