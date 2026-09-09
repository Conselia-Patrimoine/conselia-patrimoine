type FeatherProps = {
  className?: string;
  /** "gold" (défaut, logo) ou "ink" (vexille en noir, cf. citation Accueil). */
  fill?: "gold" | "ink";
};

/**
 * Plume du logo — symbole de l'écrit repris du cabinet actuel
 * (« les paroles s'envolent, les écrits restent », cf. CLAUDE.md section 3/7).
 * Couleurs figées (marque à identité unique), pas de variante sombre/claire.
 */
export default function Feather({ className = "h-8 w-8", fill = "gold" }: FeatherProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      <defs>
        <linearGradient id="feather-gold" x1="18" y1="2" x2="46" y2="58" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#D9A860" />
          <stop offset="45%" stopColor="#BD8A2E" />
          <stop offset="100%" stopColor="#8A5F1E" />
        </linearGradient>
      </defs>
      <path
        d="M34 4C44 6 50 16 46 29C43 40 35 49 27 58C25 49 27 38 21 29C16 19 21 8 34 4Z"
        fill={fill === "gold" ? "url(#feather-gold)" : "#2A2823"}
      />
      {/* Hampe : dépasse volontairement du vexille, comme une plume d'oie taillée en bec de plume */}
      <path
        d="M35 3C32 18 29 34 26 48C24 54 21 58 18 62"
        stroke={fill === "gold" ? "#2A2823" : "#D9A860"}
        strokeWidth="2.1"
        strokeLinecap="round"
        opacity="0.85"
      />
      <path
        d="M33 16L42 20M33 26L41 31"
        stroke={fill === "gold" ? "#2A2823" : "#D9A860"}
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.4"
      />
    </svg>
  );
}
