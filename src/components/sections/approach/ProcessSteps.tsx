import { processSteps } from "@/content/notre-approche";

/** Parcours en étapes numérotées avec connecteurs visuels (cf. CLAUDE.md section 9). */
export default function ProcessSteps() {
  return (
    <ol className="grid grid-cols-1 gap-0 sm:grid-cols-4">
      {processSteps.map((step, i) => (
        <li key={step.number} className="relative flex flex-col items-start gap-4 px-4 py-6">
          {/* Connecteur visuel entre les étapes */}
          {i < processSteps.length - 1 && (
            <span className="absolute right-0 top-9 hidden h-px w-full -translate-y-1/2 bg-stone-40 sm:block" />
          )}
          <span className="gold-foil relative flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold text-ink">
            {step.number}
          </span>
          <div>
            <h3 className="text-lg">{step.title}</h3>
            <p className="mt-2 text-sm text-ink-soft">{step.description}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
