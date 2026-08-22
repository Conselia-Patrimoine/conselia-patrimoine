import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import LegalSections from "@/components/sections/shared/LegalSections";
import { privacySections } from "@/content/confidentialite";

// Page "Politique de confidentialité" — structure conforme à CLAUDE.md section 12.
export default function PolitiqueDeConfidentialitePage() {
  return (
    <Section>
      <SectionHeading title="Politique de confidentialité" />
      <LegalSections sections={privacySections} />
    </Section>
  );
}
