import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import ObjectiveBlock from "@/components/sections/objectives/ObjectiveBlock";
import { objectiveBlocks } from "@/content/vos-objectifs";

// Page "Vos objectifs" — structure conforme à CLAUDE.md section 8.
export default function VosObjectifsPage() {
  return (
    <Section>
      <SectionHeading title="Vos objectifs" align="center" />

      <div className="mt-16 space-y-20">
        {objectiveBlocks.map((block, i) => (
          <ObjectiveBlock key={i} {...block} reversed={i % 2 === 1} />
        ))}
      </div>
    </Section>
  );
}
