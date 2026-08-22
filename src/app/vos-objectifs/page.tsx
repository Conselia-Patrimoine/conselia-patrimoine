import Section from "@/components/ui/Section";
import ObjectivesHero from "@/components/sections/objectives/ObjectivesHero";
import ObjectiveBlock from "@/components/sections/objectives/ObjectiveBlock";
import { objectiveBlocks } from "@/content/vos-objectifs";

// Page "Vos objectifs" — structure conforme à CLAUDE.md section 8.
export default function VosObjectifsPage() {
  return (
    <>
      <ObjectivesHero />

      <Section>
        <div className="mx-auto max-w-2xl">
          {objectiveBlocks.map((block, i) => (
            <ObjectiveBlock
              key={i}
              {...block}
              index={i}
              isLast={i === objectiveBlocks.length - 1}
            />
          ))}
        </div>
      </Section>
    </>
  );
}
