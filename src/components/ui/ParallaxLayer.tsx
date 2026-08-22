"use client";

import { useEffect, useRef, type ReactNode } from "react";

const FACTOR = 0.3; // vitesse relative de l'image par rapport au scroll
const MAX_OFFSET = 140; // px — doit rester ≤ à la marge (BUFFER) ci-dessous
const BUFFER = 160; // px de débordement haut/bas pour ne jamais découvrir de bord

/**
 * Fait dériver son contenu (une image plein cadre) plus lentement que le
 * scroll de la page, pour un effet de profondeur discret. Le décalage est
 * calculé à partir de la position de la SECTION PARENTE à l'écran (0 quand
 * elle est centrée dans le viewport), pas de window.scrollY — sinon la
 * plage de décalage est déjà épuisée avant même que la section apparaisse
 * pour toute section qui n'est pas tout en haut de la page.
 * Désactivé si l'utilisateur préfère les animations réduites.
 */
export default function ParallaxLayer({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const maybeContainer = ref.current?.parentElement;
    if (!maybeContainer) return;
    // Réaffecté avec un type explicite : le contrôle de flux de TS ne
    // persiste pas la restriction "non nul" d'une const externe à travers
    // une déclaration de fonction imbriquée (function update() plus bas).
    const container: HTMLElement = maybeContainer;

    let ticking = false;

    function update() {
      ticking = false;
      const el = ref.current;
      if (!el) return;
      const rect = container.getBoundingClientRect();
      const viewportCenter = window.innerHeight / 2;
      const sectionCenter = rect.top + rect.height / 2;
      const offset = Math.max(
        -MAX_OFFSET,
        Math.min(MAX_OFFSET, (viewportCenter - sectionCenter) * FACTOR),
      );
      el.style.transform = `translate3d(0, ${offset}px, 0)`;
    }

    function onScroll() {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(update);
      }
    }

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="absolute inset-x-0 will-change-transform"
      style={{ top: -BUFFER, bottom: -BUFFER }}
    >
      {children}
    </div>
  );
}
