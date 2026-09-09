import Section from "@/components/ui/Section";
import ApproachHero from "@/components/sections/approach/ApproachHero";
import ProcessSteps from "@/components/sections/approach/ProcessSteps";
import ValuesGrid from "@/components/sections/approach/ValuesGrid";

// Page "Notre approche" — structure conforme à CLAUDE.md section 9.
export default function NotreApprochePage() {
  return (
    <>
      <ApproachHero />

      <Section>
        <div className="mx-auto max-w-2xl">
          <ProcessSteps />
        </div>
      </Section>

      <ValuesGrid />

      {/* TODO: décider si le bloc "Notre expertise" (Q/R) est repris ici (cf. content/notre-approche.ts) */}
    </>
  );
}
