import Link from "next/link";
import type { ObjectiveBlock as ObjectiveBlockType } from "@/content/vos-objectifs";

type ObjectiveBlockProps = ObjectiveBlockType & {
  /** Alterne le visuel gauche/droite selon la parité (cf. site d'inspiration, section 8). */
  reversed?: boolean;
};

export default function ObjectiveBlock({
  question,
  answer,
  reversed = false,
}: ObjectiveBlockProps) {
  return (
    <div
      className={`grid grid-cols-1 items-center gap-8 sm:grid-cols-2 ${
        reversed ? "sm:[&>*:first-child]:order-2" : ""
      }`}
    >
      {/* TODO: visuel d'illustration (cf. CLAUDE.md section 4) */}
      <div className="aspect-video w-full rounded-2xl border border-dashed border-gris-anthracite/30" />

      <div>
        <h3 className="text-xl font-semibold">{question}</h3>
        <p className="mt-3 text-gris-anthracite">{answer}</p>
        <Link
          href="/contact"
          className="mt-4 inline-block text-sm font-medium text-dore hover:underline"
        >
          En parler avec nous →
        </Link>
      </div>
    </div>
  );
}
