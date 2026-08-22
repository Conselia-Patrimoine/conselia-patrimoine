import Link from "next/link";
import SlideInOnScroll from "@/components/ui/SlideInOnScroll";
import type { ObjectiveBlock as ObjectiveBlockType } from "@/content/vos-objectifs";

type ObjectiveBlockProps = ObjectiveBlockType & {
  index: number;
  isLast?: boolean;
};

/**
 * Bloc question/réponse numéroté, relié au suivant par un filet vertical —
 * même vocabulaire que les étapes numérotées de "Notre approche", en
 * version verticale. Pas de visuel d'illustration (aucun fourni pour ces
 * 7 questions) : plutôt qu'un placeholder vide répété 7 fois, la mise en
 * page s'appuie sur la numérotation.
 */
export default function ObjectiveBlock({ question, answer, index, isLast = false }: ObjectiveBlockProps) {
  return (
    <SlideInOnScroll from={index % 2 === 0 ? "left" : "right"}>
      <div className="flex gap-6">
        <div className="flex flex-col items-center">
          <span className="gold-foil flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-sm font-semibold text-ink">
            {String(index + 1).padStart(2, "0")}
          </span>
          {!isLast && <span className="mt-2 w-px flex-1 bg-stone-40" />}
        </div>
        <div className="pb-12">
          <h3 className="text-xl">{question}</h3>
          <p className="mt-3 text-ink-soft">{answer}</p>
          <Link
            href="/contact"
            className="mt-4 inline-block text-sm font-medium text-gold-4 hover:underline"
          >
            En parler avec nous →
          </Link>
        </div>
      </div>
    </SlideInOnScroll>
  );
}
