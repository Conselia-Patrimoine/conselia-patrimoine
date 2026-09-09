import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import SlideInOnScroll from "@/components/ui/SlideInOnScroll";
import { tileThemes } from "@/lib/tileThemes";
import { kpis, expertiseSinceYear } from "@/content/home";

// Toutes les classes possibles doivent apparaître littéralement pour que
// Tailwind les génère — la grille s'adapte au nombre de chiffres réellement
// fournis (3 aujourd'hui, potentiellement 4 une fois "clients accompagnés"
// ou "zone d'intervention" confirmé par la cliente).
const gridColsByCount: Record<number, string> = {
  1: "sm:grid-cols-1",
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-3",
  4: "sm:grid-cols-4",
};

// Sélection dédiée (plutôt qu'un simple tileThemes[i]) pour garantir qu'au
// moins une tuile soit dorée (gold-2) — les 3 premiers thèmes du patchwork
// partagé n'en contiennent pas.
const kpiThemeIndexes = [0, 3, 2];

/**
 * Chiffres clés — mêmes tuiles patchwork et même animation d'apparition
 * (glissement latéral) que "Domaines d'expertise", pour un traitement cohérent.
 */
export default function KpiBand() {
  // "Années d'expertise" calculé depuis 2013 (master de Marine) : jamais figé,
  // se met à jour tout seul chaque année plutôt que d'être codé en dur.
  const yearsOfExpertise = new Date().getFullYear() - expertiseSinceYear;
  const displayedKpis = [
    ...kpis,
    { value: `${yearsOfExpertise}+`, label: "Années d'expertise" },
  ];

  const gridCols = gridColsByCount[displayedKpis.length] ?? "sm:grid-cols-3";

  return (
    <Section tone="default">
      <SectionHeading title="Chiffres clés" align="center" />

      <dl className={`mt-12 grid grid-cols-1 gap-4 ${gridCols}`}>
        {displayedKpis.map((kpi, i) => {
          const theme = tileThemes[kpiThemeIndexes[i % kpiThemeIndexes.length]];
          return (
            <SlideInOnScroll key={i} from={i % 2 === 0 ? "left" : "right"} delay={(i % 3) * 100}>
              <div
                className={`flex min-h-[220px] flex-col items-center justify-center gap-2 rounded-2xl p-8 text-center ${theme.bg} ${theme.text}`}
              >
                <dt className="font-display text-4xl font-medium">{kpi.value}</dt>
                <dd className={`text-sm font-medium uppercase tracking-wide ${theme.muted}`}>
                  {kpi.label}
                </dd>
              </div>
            </SlideInOnScroll>
          );
        })}
      </dl>
    </Section>
  );
}
