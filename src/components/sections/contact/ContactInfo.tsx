import type { ReactNode } from "react";
import { Phone, Mail, MapPin, User, type LucideIcon } from "lucide-react";
import { siteConfig } from "@/content/site";
import { teamMembers } from "@/content/a-propos";

// Noms complets (teamMembers ne stocke que le prénom) — même correspondance
// que le footer.
const teamContacts = [
  { name: "Marine Henry", firstName: "Marine" },
  { name: "Lionel Touchet", firstName: "Lionel" },
]
  .map(({ name, firstName }) => ({
    name,
    ...teamMembers.find((member) => member.firstName === firstName),
  }))
  .filter((person) => person.phone || person.email);

/**
 * Coordonnées du cabinet — téléphone/e-mail de chaque associé, adresse
 * commune (cf. CLAUDE.md section 10). Carte grise (bg-mist) pour équilibrer
 * visuellement la carte du formulaire à côté — même vocabulaire que les
 * autres cartes du site (icône dans un cercle ton sur ton).
 */
export default function ContactInfo() {
  const { address } = siteConfig.contact;

  return (
    <div className="space-y-6 rounded-2xl bg-mist p-8">
      {teamContacts.map((person) => (
        <InfoRow key={person.name} icon={User} label={person.name}>
          <div className="space-y-1">
            {person.phone && (
              <a
                href={`tel:${person.phone.replace(/\s+/g, "")}`}
                className="flex items-center gap-2 hover:text-gold-4"
              >
                <Phone className="h-3.5 w-3.5 shrink-0" strokeWidth={1.75} aria-hidden="true" />
                {person.phone}
              </a>
            )}
            {person.email && (
              <a href={`mailto:${person.email}`} className="flex items-center gap-2 hover:text-gold-4">
                <Mail className="h-3.5 w-3.5 shrink-0" strokeWidth={1.75} aria-hidden="true" />
                {person.email}
              </a>
            )}
          </div>
        </InfoRow>
      ))}
      <InfoRow icon={MapPin} label="Adresse">
        <address className="not-italic">
          {address.line1}
          <br />
          {address.postalCode} {address.city}
        </address>
      </InfoRow>
    </div>
  );
}

function InfoRow({
  icon: Icon,
  label,
  children,
}: {
  icon: LucideIcon;
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="flex gap-4">
      <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-paper text-gold-4 ring-1 ring-stone-40">
        <Icon className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
      </span>
      <div>
        <p className="text-sm font-medium uppercase tracking-wide text-gold-4">{label}</p>
        <div className="mt-1 text-ink">{children}</div>
      </div>
    </div>
  );
}
