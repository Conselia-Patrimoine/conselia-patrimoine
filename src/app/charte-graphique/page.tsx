import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import Feather from "@/components/ui/Feather";

export const metadata: Metadata = {
  title: "Charte graphique",
  robots: { index: false, follow: false },
};

type Swatch = {
  name: string;
  varName: string;
  hex: string;
  className: string; // bg utility
  textClassName: string; // contrasting text utility
};

const neutrals: Swatch[] = [
  { name: "Ink", varName: "--ink", hex: "#2A2823", className: "bg-ink", textClassName: "text-paper" },
  { name: "Ink soft", varName: "--ink-soft", hex: "#4A473F", className: "bg-ink-soft", textClassName: "text-paper" },
  { name: "Charcoal", varName: "--charcoal", hex: "#423F37", className: "bg-charcoal", textClassName: "text-paper" },
  { name: "Stone", varName: "--stone", hex: "#8D8576", className: "bg-stone", textClassName: "text-ink" },
  { name: "Stone 40", varName: "--stone-40", hex: "#C9C3B4", className: "bg-stone-40", textClassName: "text-ink" },
  { name: "Mist", varName: "--mist", hex: "#EDE8DC", className: "bg-mist", textClassName: "text-ink" },
  { name: "Paper", varName: "--paper", hex: "#FBF8F2", className: "bg-paper", textClassName: "text-ink" },
];

const golds: Swatch[] = [
  { name: "Gold 2", varName: "--gold-2", hex: "#D9A860", className: "bg-gold-2", textClassName: "text-ink" },
  { name: "Gold 3", varName: "--gold-3", hex: "#BD8A2E", className: "bg-gold-3", textClassName: "text-ink" },
  { name: "Gold 4", varName: "--gold-4", hex: "#8A5F1E", className: "bg-gold-4", textClassName: "text-paper" },
  { name: "Gold 5", varName: "--gold-5", hex: "#6B4A16", className: "bg-gold-5", textClassName: "text-paper" },
];

function SwatchCard({ swatch }: { swatch: Swatch }) {
  return (
    <div className="overflow-hidden rounded-2xl ring-1 ring-stone-40">
      <div className={`flex h-24 items-end p-4 ${swatch.className} ${swatch.textClassName}`}>
        <span className="text-sm font-medium">{swatch.name}</span>
      </div>
      <div className="space-y-0.5 bg-paper p-4">
        <p className="font-mono text-xs text-ink-soft">{swatch.hex}</p>
        <p className="font-mono text-xs text-stone">{swatch.varName}</p>
      </div>
    </div>
  );
}

/**
 * Page interne (non liée dans la navigation, `robots: noindex`) : vitrine de
 * la charte graphique pour validation cliente — palette doré/gris/anthracite
 * (jamais de noir ni blanc purs), typographie, boutons, dégradé doré. Reflète
 * les tokens réels de globals.css, pas une reconstitution approximative.
 */
export default function CharteGraphiquePage() {
  return (
    <>
      <Section tone="dark" className="pt-32">
        <span className="text-sm font-semibold uppercase tracking-widest text-gold-2">
          Document interne — non indexé, non lié depuis le site
        </span>
        <h1 className="mt-4 text-3xl text-paper sm:text-4xl">Charte graphique</h1>
        <p className="mt-4 max-w-xl text-paper/80">
          Doré et gris, exclusivement — un anthracite chaud à la place du noir pur, un blanc cassé
          à la place du blanc pur, et l&rsquo;or réservé aux accents. Cette page reprend les
          couleurs et polices réellement utilisées sur le site, pour validation.
        </p>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Couleurs"
          title="Neutres"
          description="Base du site : anthracite chaud pour le texte et les fonds sombres, gris clair pour les fonds de section, blanc cassé pour le fond principal. Jamais de noir ni de blanc purs."
        />
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {neutrals.map((swatch) => (
            <SwatchCard key={swatch.name} swatch={swatch} />
          ))}
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading
          eyebrow="Couleurs"
          title="Doré"
          description="Réservé aux accents rares : bordures, icônes, boutons d'action. Toujours en dégradé (« gold foil »), jamais en aplat uni sur une grande surface."
        />
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {golds.map((swatch) => (
            <SwatchCard key={swatch.name} swatch={swatch} />
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="gold-foil flex h-28 items-center justify-center rounded-2xl">
            <span className="text-sm font-medium text-ink">.gold-foil (fonds, CTA)</span>
          </div>
          <div className="flex h-28 items-center justify-center rounded-2xl bg-ink">
            <span className="gold-foil-text font-display text-2xl italic">Conselia Patrimoine</span>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Typographie" title="Polices" />
        <div className="mt-8 space-y-8">
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-gold-4">
              Manrope — corps de texte
            </p>
            <p className="mt-2 max-w-xl font-sans text-ink-soft">
              Nous construisons une allocation adaptée à votre profil de risque et à vos horizons
              de placement, en toute indépendance vis-à-vis des établissements financiers.
            </p>
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-gold-4">
              Plus Jakarta Sans — titres, logo, citations
            </p>
            <h3 className="mt-2 text-3xl">Un patrimoine construit avec sérénité</h3>
            <p className="mt-2 max-w-xl font-display text-lg italic text-ink-soft">
              &ldquo;Les paroles s&rsquo;envolent, les écrits restent.&rdquo;
            </p>
          </div>
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading eyebrow="Composants" title="Boutons & repère" />
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Button href="#" variant="primary">
            Nous contacter
          </Button>
          <Button href="#" variant="secondary">
            En savoir plus
          </Button>
          <Feather className="h-10 w-10" />
        </div>
      </Section>
    </>
  );
}
