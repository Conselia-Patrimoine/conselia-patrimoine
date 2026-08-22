import { siteConfig } from "@/content/site";

/** Coordonnées du cabinet — téléphone, e-mail, adresse (cf. CLAUDE.md section 10). */
export default function ContactInfo() {
  const { phone, email, address } = siteConfig.contact;

  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm font-medium uppercase tracking-wide text-dore">
          Téléphone
        </p>
        <p className="mt-1">{phone}</p>
      </div>
      <div>
        <p className="text-sm font-medium uppercase tracking-wide text-dore">
          E-mail
        </p>
        <p className="mt-1">{email}</p>
      </div>
      <div>
        <p className="text-sm font-medium uppercase tracking-wide text-dore">
          Adresse
        </p>
        <address className="mt-1 not-italic">
          {address.line1}
          <br />
          {address.postalCode} {address.city}
        </address>
      </div>
    </div>
  );
}
