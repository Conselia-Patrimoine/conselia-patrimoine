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
import SlideInOnScroll from "@/components/ui/SlideInOnScroll";
import { tileThemes } from "@/lib/tileThemes";
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

/**
 * Domaines d'expertise — patchwork de tuiles colorées (nuances de la
 * charte), avec une courte définition sous chaque titre. Chaque tuile
 * renvoie vers /notre-expertise (pas de fiche produit dédiée).
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
              <SlideInOnScroll
                from={i % 2 === 0 ? "left" : "right"}
                delay={(i % 3) * 100}
              >
                <Link
                  href="/notre-expertise"
                  className={`flex min-h-[220px] flex-col items-center justify-center gap-3 rounded-2xl p-8 text-center transition-transform hover:-translate-y-1 ${theme.bg} ${theme.text}`}
                >
                  <Icon className={`h-7 w-7 ${theme.icon}`} strokeWidth={1.5} aria-hidden="true" />
                  <span className="font-medium">{domain.title}</span>
                  <p className={`text-sm leading-snug ${theme.muted}`}>{domain.description}</p>
                </Link>
              </SlideInOnScroll>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
