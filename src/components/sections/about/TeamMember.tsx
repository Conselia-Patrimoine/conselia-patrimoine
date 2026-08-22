import type { TeamMember as TeamMemberType } from "@/content/qui-sommes-nous";

/** Portrait + parcours d'un associé. */
export default function TeamMember({ firstName, bio }: TeamMemberType) {
  return (
    <div className="grid grid-cols-1 items-start gap-8 sm:grid-cols-[200px_1fr]">
      {/* TODO: portrait retouché (cf. CLAUDE.md section 4) */}
      <div className="aspect-[3/4] w-full rounded-2xl border border-dashed border-stone-40" />
      <div>
        <h3 className="text-xl">{firstName}</h3>
        <p className="mt-3 text-ink-soft">{bio}</p>
      </div>
    </div>
  );
}
