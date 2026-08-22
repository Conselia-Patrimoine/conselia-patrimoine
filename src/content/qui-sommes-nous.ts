/**
 * Contenu de la page "Qui sommes-nous" — structure conforme à CLAUDE.md section 7.
 * ⚠️ Le texte définitif (déjà validé par la cliente) reste à intégrer ici.
 */

export type TeamMember = {
  firstName: string;
  bio: string;
  photo?: string; // chemin vers /public/images/equipe/*, à obtenir
};

export const teamMembers: TeamMember[] = [
  { firstName: "Marine", bio: "TODO" },
  { firstName: "Lionel", bio: "TODO" },
];

export const sharedParagraph = "TODO"; // paragraphe commun (section 7)

export const quoteBanner = {
  text: "TODO", // citation de la plume
  author: "TODO", // "Marine Henry, Gérante de Conselia Patrimoine"
};
