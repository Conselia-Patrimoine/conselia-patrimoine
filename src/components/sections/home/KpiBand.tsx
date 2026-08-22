import Container from "@/components/ui/Container";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
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

/**
 * Bandeau de chiffres clés — plaque qui chevauche le bas du hero, façon
 * "trust bar" : séparateurs fins, ombre légère pour se détacher de la photo.
 * Invisible au chargement, apparaît en fondu dès qu'on la scrolle en vue.
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
    <div className="relative z-10 -mt-14 px-6 sm:-mt-16 sm:px-8">
      <Container className="px-0">
        <RevealOnScroll>
          <dl
            className={`glass-gold-solid grid grid-cols-1 divide-y divide-stone-40 rounded-2xl border border-stone-40 shadow-xl shadow-ink/5 sm:divide-x sm:divide-y-0 ${gridCols}`}
          >
            {displayedKpis.map((kpi, i) => (
              <div key={i} className="flex flex-col items-center gap-1 px-6 py-8 text-center">
                <dt className="font-display text-4xl font-medium text-ink">{kpi.value}</dt>
                <dd className="text-xs font-medium uppercase tracking-wide text-stone">
                  {kpi.label}
                </dd>
              </div>
            ))}
          </dl>
        </RevealOnScroll>
      </Container>
    </div>
  );
}
