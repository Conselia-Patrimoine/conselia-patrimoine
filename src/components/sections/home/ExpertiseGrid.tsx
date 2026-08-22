import Link from "next/link";
import { Wallet, Receipt, Building2, Briefcase, Users, ShieldCheck, type LucideIcon } from "lucide-react";
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

/**
 * Domaines d'expertise — cartes avec icône, sans description (cf. CLAUDE.md 6.3).
 * Chaque carte renvoie vers /vos-objectifs (pas de fiche produit dédiée).
 */
export default function ExpertiseGrid() {
  return (
    <Section tone="default">
      <SectionHeading title="Nos domaines d'expertise" align="center" />

      <ul className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {expertiseDomains.map((domain) => {
          const Icon = icons[domain.icon];
          return (
            <li key={domain.title}>
              <Link
                href="/vos-objectifs"
                className="flex h-full flex-col items-center gap-4 rounded-2xl border border-stone-40 p-8 text-center transition-colors hover:border-gold-3"
              >
                <span className="gold-foil flex h-12 w-12 items-center justify-center rounded-full text-ink">
                  <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
                </span>
                <span className="font-medium">{domain.title}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
