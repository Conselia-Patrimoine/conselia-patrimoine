import { Resend } from "resend";
import type { ContactFormValues } from "@/lib/contact-schema";

/**
 * Envoi de l'e-mail de contact via Resend (cf. CLAUDE.md section 16).
 * Variables d'environnement nécessaires (voir .env.example) :
 * - RESEND_API_KEY : clé API du compte Resend.
 * - CONTACT_TO_EMAIL : boîte mail du cabinet qui reçoit les demandes.
 * - CONTACT_FROM_EMAIL (optionnel) : adresse d'expédition. Tant que le
 *   domaine conseliapatrimoine.com n'est pas vérifié sur Resend, on utilise
 *   l'adresse de test "onboarding@resend.dev" fournie par Resend (elle ne
 *   peut envoyer qu'à l'adresse du compte Resend utilisé pour les tests) —
 *   à remplacer une fois le domaine vérifié.
 */
export async function sendContactEmail(values: ContactFormValues): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL || "Conselia Patrimoine <onboarding@resend.dev>";

  if (!apiKey) {
    throw new Error("RESEND_API_KEY n'est pas défini — voir .env.example.");
  }
  if (!to) {
    throw new Error("CONTACT_TO_EMAIL n'est pas défini — voir .env.example.");
  }

  const resend = new Resend(apiKey);
  const { name, email, phone, subject, message } = values;

  const { error } = await resend.emails.send({
    from,
    to,
    replyTo: email,
    subject: subject ? `[Site] ${subject}` : `[Site] Nouveau message de ${name}`,
    text: [
      `Nom : ${name}`,
      `E-mail : ${email}`,
      phone ? `Téléphone : ${phone}` : null,
      subject ? `Objet : ${subject}` : null,
      "",
      message,
    ]
      .filter(Boolean)
      .join("\n"),
  });

  if (error) {
    throw new Error(error.message);
  }
}
