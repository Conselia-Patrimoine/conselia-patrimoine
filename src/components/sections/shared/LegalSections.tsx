import type { LegalSection } from "@/content/mentions-legales";

/** Liste de blocs titre/texte — réutilisé par les pages légales (mentions, RGPD). */
export default function LegalSections({ sections }: { sections: LegalSection[] }) {
  return (
    <div className="mt-12 space-y-10">
      {sections.map((section) => (
        <div key={section.heading}>
          <h2 className="text-lg">{section.heading}</h2>
          <p className="mt-2 text-ink-soft">{section.body}</p>
        </div>
      ))}
    </div>
  );
}
