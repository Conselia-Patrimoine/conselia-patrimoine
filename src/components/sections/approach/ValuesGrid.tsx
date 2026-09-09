import {
  GraduationCap,
  HeartHandshake,
  Ruler,
  ShieldCheck,
  Lightbulb,
  type LucideIcon,
} from "lucide-react";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import SlideInOnScroll from "@/components/ui/SlideInOnScroll";
import { tileThemes } from "@/lib/tileThemes";
import { cabinetValues, type CabinetValue } from "@/content/notre-approche";

const icons: Record<CabinetValue["icon"], LucideIcon> = {
  expertise: GraduationCap,
  proximite: HeartHandshake,
  "sur-mesure": Ruler,
  rigueur: ShieldCheck,
  innovation: Lightbulb,
};

/**
 * Valeurs du cabinet — même traitement en tuiles que "Nos domaines
 * d'expertise" (Accueil), pour une cohérence visuelle entre pages.
 */
export default function ValuesGrid() {
  return (
    <Section tone="default">
      <SectionHeading title="Nos valeurs" align="center" />

      <ul className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {cabinetValues.map((value, i) => {
          const Icon = icons[value.icon];
          const theme = tileThemes[i % tileThemes.length];
          return (
            <li key={value.title} className="flex">
              <SlideInOnScroll
                from={i % 2 === 0 ? "left" : "right"}
                delay={(i % 3) * 100}
                className="w-full"
              >
                <div
                  className={`flex h-full min-h-[200px] flex-col items-center justify-center gap-3 rounded-2xl p-6 text-center ${theme.bg} ${theme.text}`}
                >
                  <Icon className={`h-7 w-7 ${theme.icon}`} strokeWidth={1.5} aria-hidden="true" />
                  <span className="font-medium">{value.title}</span>
                  <p className={`text-sm leading-snug ${theme.muted}`}>{value.description}</p>
                </div>
              </SlideInOnScroll>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
