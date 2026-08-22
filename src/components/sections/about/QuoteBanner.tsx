import Section from "@/components/ui/Section";
import { quoteBanner } from "@/content/qui-sommes-nous";

/** Bandeau citation plein fond (plume du logo) — cf. CLAUDE.md section 7. */
export default function QuoteBanner() {
  return (
    <Section tone="dark" className="text-center">
      <blockquote className="mx-auto max-w-2xl font-serif text-xl italic sm:text-2xl">
        &ldquo;{quoteBanner.text}&rdquo;
      </blockquote>
      <p className="mt-6 text-sm text-dore">{quoteBanner.author}</p>
    </Section>
  );
}
