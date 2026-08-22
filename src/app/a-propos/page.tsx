import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import TeamMember from "@/components/sections/about/TeamMember";
import QuoteBanner from "@/components/sections/shared/QuoteBanner";
import FadeIn from "@/components/ui/FadeIn";
import { teamMembers, sharedParagraph } from "@/content/a-propos";

// Page "À propos" (nommée "Qui sommes-nous" dans le brief d'origine,
// renommée en cours de projet) — structure conforme à CLAUDE.md section 7.
export default function AProposPage() {
  return (
    <>
      <Section>
        <SectionHeading title="À propos" />

        <div className="mt-12 space-y-16">
          {teamMembers.map((member, i) => (
            <TeamMember key={member.firstName} {...member} reversed={i % 2 === 1} />
          ))}
        </div>

        <FadeIn>
          <p className="mt-16 max-w-2xl text-ink-soft">{sharedParagraph}</p>
        </FadeIn>
      </Section>

      <QuoteBanner />
    </>
  );
}
