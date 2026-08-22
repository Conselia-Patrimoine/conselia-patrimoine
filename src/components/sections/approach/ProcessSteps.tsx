import SlideInOnScroll from "@/components/ui/SlideInOnScroll";
import { processSteps } from "@/content/notre-approche";

/**
 * Parcours en 4 étapes numérotées, reliées par un filet vertical — même
 * vocabulaire visuel que les blocs de "Vos objectifs" (cercle doré numéroté
 * + connecteur), pour une cohérence entre les deux pages. Cf. CLAUDE.md
 * section 9 : demande explicite de la cliente pour un rendu "en mode
 * séquencé", pas un simple bloc de texte.
 */
export default function ProcessSteps() {
  return (
    <div>
      {processSteps.map((step, i) => {
        const isLast = i === processSteps.length - 1;
        return (
          <SlideInOnScroll key={step.number} from={i % 2 === 0 ? "left" : "right"}>
            <div className="flex gap-6">
              <div className="flex flex-col items-center">
                <span className="gold-foil flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-sm font-semibold text-ink">
                  {String(step.number).padStart(2, "0")}
                </span>
                {!isLast && <span className="mt-2 w-px flex-1 bg-stone-40" />}
              </div>
              <div className="pb-12">
                <h3 className="text-xl">{step.title}</h3>
                <p className="mt-3 text-ink-soft">{step.description}</p>
              </div>
            </div>
          </SlideInOnScroll>
        );
      })}
    </div>
  );
}
