"use client";

import { useEffect, useRef, type ReactNode } from "react";

const RISE = 32; // px de décalage vertical au départ, se résorbe avec le scroll

/**
 * Fait apparaître son contenu progressivement PENDANT le scroll (opacité et
 * décalage vertical suivent en continu la position de l'élément), pas d'un
 * coup une fois un seuil franchi. Strictement invisible au chargement — la
 * progression part de la position réelle de l'élément au montage (et non
 * d'un repère fixe dans le viewport), donc 0% garanti tant qu'on n'a pas
 * scrollé, même si l'élément chevauche déjà partiellement l'écran au départ
 * (cas de la plaque KPI, qui remonte sur le bas du hero).
 * Désactivé pour "prefers-reduced-motion" via la règle CSS globale
 * .reveal-on-scroll (cf. globals.css) : l'élément reste alors visible en
 * permanence, sans dépendre du JS ni du scroll.
 */
export default function RevealOnScroll({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const el = ref.current;
    if (!el) return;

    // Position au montage = repère "0%", quel que soit le chevauchement initial.
    const initialTop = el.getBoundingClientRect().top;
    let ticking = false;

    function update() {
      ticking = false;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      // 100% une fois que le haut de l'élément a atteint 40% de la hauteur du viewport.
      const end = viewportHeight * 0.4;
      const distance = Math.max(1, initialTop - end);
      const progress = Math.min(1, Math.max(0, (initialTop - rect.top) / distance));

      el.style.opacity = String(progress);
      el.style.transform = `translate3d(0, ${(1 - progress) * RISE}px, 0)`;
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
      className={`reveal-on-scroll ${className}`}
      style={{ opacity: 0, willChange: "opacity, transform" }}
    >
      {children}
    </div>
  );
}
