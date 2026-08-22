import Section from "@/components/ui/Section";
import { hero } from "@/content/home";

/** Hero Accueil : accroche + sous-accroche + bannière (2 associés, création 2016). */
export default function Hero() {
  return (
    <Section tone="default" className="pt-20 sm:pt-28">
      <div className="max-w-3xl">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          {hero.headline}
        </h1>
        <p className="mt-6 text-lg text-gris-anthracite">{hero.subheadline}</p>
      </div>

      {/* TODO: bannière visuelle mettant en avant les 2 associés + création 2016 (visuels à sourcer) */}
      <div className="mt-12 flex h-64 items-center justify-center rounded-2xl border border-dashed border-gris-anthracite/30 text-sm text-gris-anthracite/60">
        Bannière associés — visuel à intégrer
      </div>
    </Section>
  );
}
