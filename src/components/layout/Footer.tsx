import Link from "next/link";
import Container from "@/components/ui/Container";
import Feather from "@/components/ui/Feather";
import { legalNav } from "@/content/navigation";
import { siteConfig } from "@/content/site";

/** Pied de page : identité, coordonnées, liens légaux, LinkedIn (cf. CLAUDE.md section 15). */
export default function Footer() {
  return (
    <footer className="border-t border-stone/20 bg-charcoal text-paper">
      <Container className="grid gap-10 py-10 sm:grid-cols-3">
        <div>
          <div className="flex items-center gap-2.5">
            <Feather className="h-7 w-7" />
            <p className="font-display text-lg font-medium">{siteConfig.name}</p>
          </div>
          <address className="mt-3 space-y-1 text-sm not-italic text-paper/70">
            <p>{siteConfig.contact.address.line1}</p>
            <p>
              {siteConfig.contact.address.postalCode} {siteConfig.contact.address.city}
            </p>
          </address>
        </div>

        <div>
          <p className="text-sm font-medium uppercase tracking-wide text-gold-2">
            Contact
          </p>
          <ul className="mt-3 space-y-1 text-sm text-paper/70">
            <li>{siteConfig.contact.phone}</li>
            <li>{siteConfig.contact.email}</li>
          </ul>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium uppercase tracking-wide text-gold-2">
              Informations légales
            </p>
            {/* Uniquement LinkedIn — pas d'icônes génériques (cf. CLAUDE.md section 15) */}
            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Conselia Patrimoine"
              className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-paper/20 text-paper transition-colors hover:border-gold-2 hover:text-gold-2"
            >
              {/* lucide-react n'a pas d'icônes de marque — glyphe LinkedIn dessiné à la main */}
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05c.53-1 1.83-2.1 3.77-2.1 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.7c0-1.36-.02-3.1-1.9-3.1-1.9 0-2.2 1.48-2.2 3v5.8h-4V9Z" />
              </svg>
            </a>
          </div>
          <ul className="mt-3 space-y-1 text-sm">
            {legalNav.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-paper/70 hover:text-gold-2">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
