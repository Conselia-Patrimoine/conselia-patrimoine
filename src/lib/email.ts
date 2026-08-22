import type { ContactFormValues } from "@/lib/contact-schema";

/**
 * Envoi de l'e-mail de contact.
 *
 * TODO: brancher un service réel (Resend recommandé, ou Formspree en repli),
 * cf. CLAUDE.md section 16. Nécessite RESEND_API_KEY + CONTACT_TO_EMAIL en
 * variables d'environnement (voir .env.example).
 */
export async function sendContactEmail(values: ContactFormValues): Promise<void> {
  const to = process.env.CONTACT_TO_EMAIL;

  if (!to) {
    throw new Error(
      "CONTACT_TO_EMAIL n'est pas défini — voir .env.example.",
    );
  }

  // TODO: remplacer par l'appel réel (ex. Resend `emails.send`).
  console.log("[contact] e-mail à envoyer à", to, values);
}
