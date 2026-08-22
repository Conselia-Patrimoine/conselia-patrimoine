import Image from "next/image";
import Link from "next/link";
import Feather from "@/components/ui/Feather";
import SlideInOnScroll from "@/components/ui/SlideInOnScroll";
import type { ObjectiveBlock as ObjectiveBlockType } from "@/content/vos-objectifs";

type ObjectiveBlockProps = ObjectiveBlockType & {
  index: number;
};

/**
 * Carte question/réponse large : photo d'un côté, texte de l'autre,
 * alternée. Le sens change à la fois l'ordre des enfants ET le sens du
 * gabarit de colonnes (cf. TeamMember.tsx : `order` seul déplacerait aussi
 * la piste de grille occupée par la photo, pas seulement sa position).
 */
export default function ObjectiveBlock({ question, answer, image, index }: ObjectiveBlockProps) {
  const reversed = index % 2 === 1;

  const photo = image ? (
    <div className="relative aspect-[4/3] w-full overflow-hidden sm:aspect-auto sm:h-full">
      <Image
        src={image}
        alt=""
        fill
        sizes="(min-width: 640px) 320px, 100vw"
        className="object-cover grayscale"
      />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgba(42,40,35,0.35) 0%, rgba(42,40,35,0.05) 45%, rgba(107,74,22,0.25) 100%)",
        }}
      />
    </div>
  ) : (
    // TODO: image à recevoir (cf. CLAUDE.md section 4)
    <div className="flex aspect-[4/3] w-full flex-col items-center justify-center gap-3 bg-mist sm:aspect-auto sm:h-full">
      <Feather className="h-9 w-9 opacity-70" />
      <span className="text-xs text-stone">Image à venir</span>
    </div>
  );

  const details = (
    <div className="flex flex-col gap-3 p-6 sm:p-8">
      <h3 className="text-xl">{question}</h3>
      <p className="text-ink-soft">{answer}</p>
      <Link href="/contact" className="text-sm font-medium text-gold-4 hover:underline">
        En parler avec nous →
      </Link>
    </div>
  );

  return (
    <SlideInOnScroll from={reversed ? "right" : "left"}>
      <div
        className={`grid grid-cols-1 overflow-hidden rounded-2xl bg-paper ring-1 ring-stone-40 shadow-sm ${
          reversed ? "sm:grid-cols-[1fr_320px]" : "sm:grid-cols-[320px_1fr]"
        }`}
      >
        {reversed ? (
          <>
            {details}
            {photo}
          </>
        ) : (
          <>
            {photo}
            {details}
          </>
        )}
      </div>
    </SlideInOnScroll>
  );
}
