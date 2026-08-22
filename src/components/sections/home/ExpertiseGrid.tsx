import Link from "next/link";
import {
  Wallet,
  Receipt,
  Building2,
  Briefcase,
  Users,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { expertiseDomains, type ExpertiseDomain } from "@/content/home";

// Équivalents Lucide des icônes Material Symbols de la démo (cf. CLAUDE.md
// section 14 : "Lucide/Heroicons selon la stack retenue").
const icons: Record<ExpertiseDomain["icon"], LucideIcon> = {
  payments: Wallet,
  receipt_long: Receipt,
  apartment: Building2,
  business_center: Briefcase,
  family_history: Users,
  health_and_safety: ShieldCheck,
};

// Patchwork de tons puisés dans la palette existante (jamais de couleur
// hors charte) — alterné clair/foncé pour que ça se lise comme un damier,
// pas une grille plate d'une seule teinte.
const tileThemes = [
  { bg: "bg-ink", text: "text-paper", icon: "text-gold-2" },
  { bg: "bg-mist", text: "text-ink", icon: "text-gold-4" },
  { bg: "bg-charcoal", text: "text-paper", icon: "text-gold-1" },
  { bg: "bg-gold-1", text: "text-ink", icon: "text-charcoal" },
  { bg: "bg-gold-5", text: "text-paper", icon: "text-gold-1" },
  { bg: "bg-stone-40", text: "text-ink", icon: "text-gold-4" },
] as const;

/**
 * Domaines d'expertise — patchwork de tuiles colorées (nuances de la
 * charte), sans description (cf. CLAUDE.md 6.3). Chaque tuile renvoie vers
 * /vos-objectifs (pas de fiche produit dédiée).
 */
export default function ExpertiseGrid() {
  return (
    <Section tone="default">
      <SectionHeading title="Nos domaines d'expertise" align="center" />

      <ul className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {expertiseDomains.map((domain, i) => {
          const Icon = icons[domain.icon];
          const theme = tileThemes[i % tileThemes.length];
          return (
            <li key={domain.title}>
              <Link
                href="/vos-objectifs"
                className={`flex aspect-[4/3] flex-col items-center justify-center gap-4 rounded-2xl p-8 text-center transition-transform hover:-translate-y-1 ${theme.bg} ${theme.text}`}
              >
                <Icon className={`h-8 w-8 ${theme.icon}`} strokeWidth={1.5} aria-hidden="true" />
                <span className="font-medium">{domain.title}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
