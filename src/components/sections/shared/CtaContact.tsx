import Link from "next/link";
import Container from "@/components/ui/Container";

type CtaContactProps = {
  title?: string;
  description?: string;
};

/**
 * Call-to-action unique vers /contact — formulation douce, jamais de prise
 * de rendez-vous en ligne (cf. CLAUDE.md objectif n°2). Fond doré en
 * dégradé (gold-foil) — jamais un aplat uni, cf. charte graphique section 14.
 */
export default function CtaContact({ title = "TODO", description }: CtaContactProps) {
  return (
    <section className="gold-foil py-16 text-center sm:py-24">
      <Container>
        <h2 className="text-2xl text-ink sm:text-3xl">{title}</h2>
        {description && (
          <p className="mx-auto mt-4 max-w-xl text-ink-soft">{description}</p>
        )}
        <Link
          href="/contact"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-paper px-6 py-3 text-sm font-medium text-ink transition-colors hover:bg-charcoal hover:text-paper"
        >
          Nous contacter
        </Link>
      </Container>
    </section>
  );
}
