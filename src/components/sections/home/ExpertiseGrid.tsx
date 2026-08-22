import Link from "next/link";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { expertiseDomains } from "@/content/home";

/**
 * Domaines d'expertise — cartes avec icône, sans description (cf. CLAUDE.md 6.3).
 * Chaque carte renvoie vers /vos-objectifs (pas de fiche produit dédiée).
 */
export default function ExpertiseGrid() {
  return (
    <Section tone="default">
      <SectionHeading title="Nos domaines d'expertise" align="center" />

      <ul className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {expertiseDomains.map((domain) => (
          <li key={domain.title}>
            <Link
              href="/vos-objectifs"
              className="flex h-full flex-col items-center gap-4 rounded-2xl border border-gris-clair p-8 text-center transition-colors hover:border-dore"
            >
              {/* TODO: icône Material Symbols / Lucide (cf. CLAUDE.md section 14) */}
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gris-clair text-dore">
                •
              </span>
              <span className="font-medium">{domain.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  );
}
