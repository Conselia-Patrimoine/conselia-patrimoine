import Image from "next/image";
import SlideInOnScroll from "@/components/ui/SlideInOnScroll";
import type { TeamMember as TeamMemberType } from "@/content/a-propos";

type TeamMemberProps = TeamMemberType & {
  /** Alterne le portrait gauche/droite selon la parité, comme sur l'Accueil. */
  reversed?: boolean;
};

/**
 * Portrait + parcours d'un associé.
 *
 * Le sens de l'alternance change à la fois l'ordre des enfants ET le sens
 * du gabarit de colonnes (220px_1fr / 1fr_220px) : réordonner seulement via
 * CSS `order` ne suffit pas — en CSS Grid, `order` déplace aussi l'élément
 * vers l'autre piste lors du placement automatique, donc la photo hériterait
 * de la largeur "1fr" au lieu de rester à 220px.
 */
export default function TeamMember({ firstName, bio, photo, reversed = false }: TeamMemberProps) {
  const portrait = photo ? (
    <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl ring-1 ring-stone-40">
      <Image src={photo} alt={firstName} fill sizes="220px" className="object-cover" />
    </div>
  ) : (
    // TODO: portrait à recevoir (cf. CLAUDE.md section 4)
    <div className="flex aspect-[3/4] w-full items-center justify-center rounded-2xl border border-dashed border-stone-40 text-center text-xs text-stone">
      Portrait à venir
    </div>
  );

  const details = (
    <div>
      <h3 className="text-xl">{firstName}</h3>
      <p className="mt-3 text-ink-soft">{bio}</p>
    </div>
  );

  return (
    <SlideInOnScroll from={reversed ? "right" : "left"}>
      <div
        className={`grid grid-cols-1 items-start gap-8 ${
          reversed ? "sm:grid-cols-[1fr_220px]" : "sm:grid-cols-[220px_1fr]"
        }`}
      >
        {reversed ? (
          <>
            {details}
            {portrait}
          </>
        ) : (
          <>
            {portrait}
            {details}
          </>
        )}
      </div>
    </SlideInOnScroll>
  );
}
