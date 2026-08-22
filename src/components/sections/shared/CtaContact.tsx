import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

type CtaContactProps = {
  title?: string;
  description?: string;
  tone?: "default" | "muted" | "dark";
};

/**
 * Call-to-action unique vers /contact — formulation douce, jamais de prise
 * de rendez-vous en ligne (cf. CLAUDE.md objectif n°2). Réutilisé en fin
 * d'Accueil, et en lien discret sur "Vos objectifs".
 */
export default function CtaContact({
  title = "TODO",
  description,
  tone = "dark",
}: CtaContactProps) {
  return (
    <Section tone={tone} className="text-center">
      <h2 className="text-2xl sm:text-3xl">{title}</h2>
      {description && (
        <p className="mx-auto mt-4 max-w-xl text-paper/70">{description}</p>
      )}
      <Button href="/contact" className="mt-8">
        Nous contacter
      </Button>
    </Section>
  );
}
