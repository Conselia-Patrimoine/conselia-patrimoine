import type { ReactNode } from "react";
import { Phone, Mail, MapPin, type LucideIcon } from "lucide-react";
import { siteConfig } from "@/content/site";

/**
 * Coordonnées du cabinet — téléphone, e-mail, adresse (cf. CLAUDE.md
 * section 10). Carte grise (bg-mist) pour équilibrer visuellement la carte
 * du formulaire à côté — même vocabulaire que les autres cartes du site
 * (icône dans un cercle ton sur ton).
 */
export default function ContactInfo() {
  const { phone, email, address } = siteConfig.contact;
  const telHref = `tel:${phone.replace(/\s+/g, "")}`;

  return (
    <div className="space-y-6 rounded-2xl bg-mist p-8">
      <InfoRow icon={Phone} label="Téléphone">
        <a href={telHref} className="hover:text-gold-4">
          {phone}
        </a>
      </InfoRow>
      <InfoRow icon={Mail} label="E-mail">
        <a href={`mailto:${email}`} className="hover:text-gold-4">
          {email}
        </a>
      </InfoRow>
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
