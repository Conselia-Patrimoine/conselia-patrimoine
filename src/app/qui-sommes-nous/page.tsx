import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import TeamMember from "@/components/sections/about/TeamMember";
import QuoteBanner from "@/components/sections/about/QuoteBanner";
import { teamMembers, sharedParagraph } from "@/content/qui-sommes-nous";

// Page "Qui sommes-nous" — structure conforme à CLAUDE.md section 7.
export default function QuiSommesNousPage() {
  return (
    <>
      <Section>
        <SectionHeading title="Qui sommes-nous" />

        <div className="mt-12 space-y-16">
          {teamMembers.map((member) => (
            <TeamMember key={member.firstName} {...member} />
          ))}
        </div>

        <p className="mt-16 max-w-2xl text-gris-anthracite">{sharedParagraph}</p>
      </Section>

      <QuoteBanner />
    </>
  );
}
