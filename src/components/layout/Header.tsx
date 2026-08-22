import Link from "next/link";
import Container from "@/components/ui/Container";
import Feather from "@/components/ui/Feather";
import MobileNav from "@/components/layout/MobileNav";
import { mainNav } from "@/content/navigation";
import { siteConfig } from "@/content/site";

/**
 * En-tête du site : logo (plume + nom) + navigation principale (desktop) / menu (mobile).
 * Fixe, fond semi-transparent "verre dépoli" — flotte par-dessus le hero de
 * l'Accueil (cf. layout.tsx : main a un padding-top compensé par le -mt-20
 * du Hero) et reste identique, au-dessus d'un fond plein, sur les autres pages.
 */
export default function Header() {
  return (
    <header className="glass-gold fixed inset-x-0 top-0 z-50 border-b border-stone-40/60 backdrop-blur-md">
      <Container className="flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <Feather className="h-8 w-8" />
          <span className="font-display text-lg font-medium tracking-tight">
            {siteConfig.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {mainNav.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs font-semibold uppercase tracking-wide text-ink-soft transition-colors hover:text-gold-4"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <MobileNav />
      </Container>
    </header>
  );
}
