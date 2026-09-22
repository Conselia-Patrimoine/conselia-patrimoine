import Section from "@/components/ui/Section";
import AboutHero from "@/components/sections/about/AboutHero";
import TeamMember from "@/components/sections/about/TeamMember";
import QuoteBanner from "@/components/sections/shared/QuoteBanner";
import { teamMembers } from "@/content/a-propos";

// Page "À propos" (nommée "Qui sommes-nous" dans le brief d'origine,
// renommée en cours de projet) — structure conforme à CLAUDE.md section 7.
export default function AProposPage() {
  return (
    <>
      <AboutHero />

      <Section>
        <div className="mx-auto flex max-w-3xl flex-col gap-6">
          {teamMembers.map((member, i) => (
            <TeamMember key={member.firstName} {...member} reversed={i % 2 === 1} />
          ))}
        </div>
      </Section>

      <QuoteBanner />
    </>
  );
}
