import Section from "@/components/ui/Section";
import ObjectivesHero from "@/components/sections/objectives/ObjectivesHero";
import ObjectiveBlock from "@/components/sections/objectives/ObjectiveBlock";
import { objectiveBlocks } from "@/content/notre-expertise";

// Page "Notre expertise" (nommée "Vos objectifs" dans le brief d'origine,
// renommée en cours de projet) — structure conforme à CLAUDE.md section 8.
export default function NotreExpertisePage() {
  return (
    <>
      <ObjectivesHero />

      <Section>
        <div className="mx-auto flex max-w-3xl flex-col gap-6">
          {objectiveBlocks.map((block, i) => (
            <ObjectiveBlock key={i} {...block} index={i} />
          ))}
        </div>
      </Section>
    </>
  );
}
