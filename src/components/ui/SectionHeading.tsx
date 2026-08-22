type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

/** En-tête de section réutilisable (kicker + titre + chapô optionnel). */
export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-2xl ${alignClass}`}>
      {eyebrow && (
        <p className="mb-2 text-sm font-medium uppercase tracking-wide text-gold-4">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl sm:text-4xl">{title}</h2>
      {description && (
        <p className="mt-4 text-base text-ink-soft">{description}</p>
      )}
    </div>
  );
}
