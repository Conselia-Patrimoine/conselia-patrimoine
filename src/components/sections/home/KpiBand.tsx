import Section from "@/components/ui/Section";
import { kpis } from "@/content/home";

/** Bandeau de chiffres clés (année de création, associés, clients accompagnés…). */
export default function KpiBand() {
  return (
    <Section tone="muted">
      <dl className="grid grid-cols-1 gap-8 sm:grid-cols-3">
        {kpis.map((kpi, i) => (
          <div key={i} className="text-center sm:text-left">
            <dt className="gold-foil-text text-3xl font-semibold">{kpi.value}</dt>
            <dd className="mt-1 text-sm text-stone">{kpi.label}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
