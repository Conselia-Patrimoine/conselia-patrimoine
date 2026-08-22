import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import ProcessSteps from "@/components/sections/approach/ProcessSteps";
import { chapo } from "@/content/notre-approche";

// Page "Notre approche" — structure conforme à CLAUDE.md section 9.
export default function NotreApprochePage() {
  return (
    <Section>
      <SectionHeading title="Notre approche" description={chapo} />

      <div className="mt-16">
        <ProcessSteps />
      </div>

      {/* TODO: décider si le bloc "Notre expertise" (Q/R) est repris ici (cf. content/notre-approche.ts) */}
    </Section>
  );
}
