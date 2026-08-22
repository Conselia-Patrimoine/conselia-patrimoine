import Link from "next/link";
import Container from "@/components/ui/Container";
import Feather from "@/components/ui/Feather";
import { legalNav } from "@/content/navigation";
import { siteConfig } from "@/content/site";

/** Pied de page : identité, coordonnées, liens légaux, LinkedIn (cf. CLAUDE.md section 15). */
export default function Footer() {
  return (
    <footer className="border-t border-stone/20 bg-charcoal text-paper">
      <Container className="grid gap-10 py-12 sm:grid-cols-3">
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
          <p className="text-sm font-medium uppercase tracking-wide text-gold-2">
            Informations légales
          </p>
          <ul className="mt-3 space-y-1 text-sm">
            {legalNav.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-paper/70 hover:text-gold-2">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Uniquement LinkedIn — pas d'icônes génériques (cf. CLAUDE.md section 15) */}
          <a
            href={siteConfig.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Conselia Patrimoine"
            className="mt-4 inline-flex h-9 w-9 items-center justify-center rounded-full border border-paper/20 hover:border-gold-2 hover:text-gold-2"
          >
            {/* TODO: icône LinkedIn (Lucide/Heroicons, cf. CLAUDE.md section 14) */}
            in
          </a>
        </div>
      </Container>

      <div className="border-t border-paper/10 py-4 text-center text-xs text-paper/50">
        © {new Date().getFullYear()} {siteConfig.name}
      </div>
    </footer>
  );
}
