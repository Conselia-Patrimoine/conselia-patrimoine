import Link from "next/link";
import Container from "@/components/ui/Container";
import Feather from "@/components/ui/Feather";
import MobileNav from "@/components/layout/MobileNav";
import { mainNav } from "@/content/navigation";
import { siteConfig } from "@/content/site";

/** En-tête du site : logo (plume + nom) + navigation principale (desktop) / menu (mobile). */
export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-stone-40 bg-paper/95 backdrop-blur">
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
              className="text-sm font-medium text-ink-soft transition-colors hover:text-gold-4"
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
