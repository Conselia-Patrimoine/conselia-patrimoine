"use client";

import { useEffect, useRef, type ReactNode } from "react";

const FACTOR = 0.3; // vitesse relative de l'image par rapport au scroll
const MAX_OFFSET = 140; // px — doit rester ≤ à la marge (BUFFER) ci-dessous
const BUFFER = 160; // px de débordement haut/bas pour ne jamais découvrir de bord

/**
 * Fait dériver son contenu (une image plein cadre) plus lentement que le
 * scroll de la page, pour un effet de profondeur discret sur le hero.
 * Désactivé si l'utilisateur préfère les animations réduites.
 */
export default function ParallaxLayer({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let ticking = false;

    function update() {
      const offset = Math.min(window.scrollY * FACTOR, MAX_OFFSET);
      if (ref.current) {
        ref.current.style.transform = `translate3d(0, ${offset}px, 0)`;
      }
      ticking = false;
    }

    function onScroll() {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(update);
      }
    }

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
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
