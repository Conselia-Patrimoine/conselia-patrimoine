"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Fondu d'apparition simple dès que le contenu entre dans le viewport.
 * Désactivé pour "prefers-reduced-motion" via la règle CSS globale .fade-in
 * (cf. globals.css).
 */
export default function FadeIn({
  children,
  className = "",
}: {
  children: ReactNode;
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
      { threshold: 0.3 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`fade-in transition-opacity duration-700 ease-out ${
        visible ? "opacity-100" : "opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
}
