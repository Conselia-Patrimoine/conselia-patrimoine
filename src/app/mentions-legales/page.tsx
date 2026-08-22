import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import LegalSections from "@/components/sections/shared/LegalSections";
import { legalSections } from "@/content/mentions-legales";

// Page "Mentions légales" — structure conforme à CLAUDE.md section 11.
export default function MentionsLegalesPage() {
  return (
    <Section>
      <SectionHeading title="Mentions légales" />
      <LegalSections sections={legalSections} />
    </Section>
  );
}
