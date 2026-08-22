type FeatherProps = {
  className?: string;
};

/**
 * Plume du logo — symbole de l'écrit repris du cabinet actuel
 * (« les paroles s'envolent, les écrits restent », cf. CLAUDE.md section 3/7),
 * remplie du dégradé doré de la charte. Couleurs figées (marque à identité
 * unique), pas de variante sombre/claire.
 */
export default function Feather({ className = "h-8 w-8" }: FeatherProps) {
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
          <stop offset="0%" stopColor="#F6E7AC" />
          <stop offset="30%" stopColor="#E0BE6B" />
          <stop offset="60%" stopColor="#C9A227" />
          <stop offset="100%" stopColor="#93701F" />
        </linearGradient>
      </defs>
      <path
        d="M34 4C44 6 50 16 46 29C43 40 35 49 27 58C25 49 27 38 21 29C16 19 21 8 34 4Z"
        fill="url(#feather-gold)"
      />
      {/* Hampe : dépasse volontairement du vexille, comme une plume d'oie taillée en bec de plume */}
      <path
        d="M35 3C32 18 29 34 26 48C24 54 21 58 18 62"
        stroke="#2A2823"
        strokeWidth="2.1"
        strokeLinecap="round"
        opacity="0.85"
      />
      <path
        d="M33 16L42 20M33 26L41 31"
        stroke="#2A2823"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.4"
      />
    </svg>
  );
}
