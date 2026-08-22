import Link from "next/link";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { allPages } from "@/content/navigation";

// Page "Plan de site" — structure conforme à CLAUDE.md section 13.
export default function PlanDeSitePage() {
  return (
    <Section>
      <SectionHeading title="Plan de site" />

      <ul className="mt-12 space-y-3">
        {allPages.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="text-ink hover:text-gold-4">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  );
}
