import type { ReactNode } from "react";
import Container from "./Container";

type SectionProps = {
  children: ReactNode;
  className?: string;
  /** Variante de fond : blanc cassé (défaut), gris clair, ou gris foncé (bandeau contrasté). */
  tone?: "default" | "muted" | "dark";
  id?: string;
};

const toneClasses: Record<NonNullable<SectionProps["tone"]>, string> = {
  default: "bg-blanc-casse text-gris-fonce",
  muted: "bg-gris-clair text-gris-fonce",
  dark: "bg-gris-fonce text-blanc-casse",
};

/** Bloc de section standard : gère le fond, l'espacement vertical et le conteneur. */
export default function Section({
  children,
  className = "",
  tone = "default",
  id,
}: SectionProps) {
  return (
    <section id={id} className={`py-16 sm:py-24 ${toneClasses[tone]} ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}
