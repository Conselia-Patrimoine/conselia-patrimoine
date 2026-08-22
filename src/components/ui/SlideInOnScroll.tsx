"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Fait glisser son contenu depuis le côté (gauche ou droite) dès qu'il
 * entre dans le viewport au scroll. Désactivé pour "prefers-reduced-motion"
 * via la règle CSS globale .slide-in-on-scroll (cf. globals.css).
 */
export default function SlideInOnScroll({
  children,
  from = "left",
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  from?: "left" | "right";
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const hidden = from === "left" ? "-translate-x-12" : "translate-x-12";

  return (
    <div
      ref={ref}
      className={`slide-in-on-scroll transition-all duration-700 ease-out ${
        visible ? "translate-x-0 opacity-100" : `${hidden} opacity-0`
      } ${className}`}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
    >
      {children}
    </div>
  );
}
