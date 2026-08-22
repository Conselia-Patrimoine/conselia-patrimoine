"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "loading" | "success" | "error";

/**
 * Formulaire de contact : nom, e-mail, téléphone, objet, message.
 * Pas de prise de rendez-vous en ligne (cf. CLAUDE.md section 10).
 */
export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");

    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("request failed");
      setStatus("success");
      event.currentTarget.reset();
    } catch {
      setStatus("error");
    }
  }

  // Carte grise constante (mist), même en cas de succès — évite un saut de
  // mise en page et fait écho à la carte de ContactInfo à côté.
  return (
    <div className="rounded-2xl bg-mist p-6 sm:p-8">
      {status === "success" ? (
        // TODO: message de confirmation définitif (cf. CLAUDE.md section 16)
        <p className="text-ink">
          Votre message a bien été envoyé. Nous vous répondrons rapidement.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <Field label="Nom" name="name" required />
            <Field label="E-mail" name="email" type="email" required />
            <Field label="Téléphone" name="phone" type="tel" />
            <Field label="Objet de la demande" name="subject" />
          </div>

          <label className="block">
            <span className="text-sm font-medium">Message</span>
            <textarea
              name="message"
              required
              rows={5}
              className="mt-1 w-full rounded-xl border border-stone-40 bg-paper p-3 text-sm focus:border-gold-3 focus:outline-none"
            />
          </label>

          <button
            type="submit"
            disabled={status === "loading"}
            className="btn-gold inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium text-ink disabled:opacity-60"
          >
            {status === "loading" ? "Envoi…" : "Envoyer"}
          </button>

          {status === "error" && (
            <p className="text-sm text-red-600">
              Une erreur est survenue, merci de réessayer.
            </p>
          )}
        </form>
      )}
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-sm font-medium">{label}</span>
      <input
        type={type}
        name={name}
        required={required}
        className="mt-1 w-full rounded-xl border border-stone-40 bg-paper p-3 text-sm focus:border-gold-3 focus:outline-none"
      />
    </label>
  );
}
