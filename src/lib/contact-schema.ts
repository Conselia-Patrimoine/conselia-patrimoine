import { z } from "zod";

/**
 * Schéma du formulaire de contact — partagé entre le formulaire (client)
 * et la route API (serveur), cf. CLAUDE.md section 10.
 */
export const contactSchema = z.object({
  name: z.string().min(1, "Le nom est requis"),
  email: z.string().email("Adresse e-mail invalide"),
  phone: z.string().optional(),
  subject: z.string().optional(), // objet de la demande
  message: z.string().min(1, "Le message est requis"),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
