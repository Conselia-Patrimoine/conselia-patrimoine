import type { LegalSection } from "@/content/mentions-legales";

/** Liste de blocs titre/texte — réutilisé par les pages légales (mentions, RGPD). */
export default function LegalSections({ sections }: { sections: LegalSection[] }) {
  return (
    <div className="mt-12 space-y-10">
      {sections.map((section) => (
        <div key={section.heading}>
          <h2 className="text-lg">{section.heading}</h2>

          {section.body && <p className="mt-2 text-ink-soft">{section.body}</p>}

          {section.paragraphs?.map((paragraph) => (
            <p key={paragraph} className="mt-2 text-ink-soft">
              {paragraph}
            </p>
          ))}

          {section.list && (
            <ul className="mt-2 space-y-3">
              {section.list.map((item) => (
                <li key={item.label} className="text-ink-soft">
                  <span className="font-semibold text-ink">{item.label} : </span>
                  {item.text}
                </li>
              ))}
            </ul>
          )}

          {section.outro && <p className="mt-2 text-ink-soft">{section.outro}</p>}
        </div>
      ))}
    </div>
  );
}
