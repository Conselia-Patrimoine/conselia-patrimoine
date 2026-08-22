"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { mainNav } from "@/content/navigation";

/**
 * Menu mobile (burger) — panneau repliable sous le header, pour les écrans
 * < md. Fond assombri sous le panneau (ferme au clic), scroll de la page
 * verrouillé et fermeture à Échap tant qu'il est ouvert.
 */
export default function MobileNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-nav"
        aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        onClick={() => setOpen((v) => !v)}
        className="flex h-10 w-10 items-center justify-center rounded-full border border-stone-40 text-ink"
      >
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {open && (
        <>
          {/* Fond assombri sous le panneau — ferme le menu au clic. */}
          <button
            type="button"
            aria-label="Fermer le menu"
            tabIndex={-1}
            onClick={() => setOpen(false)}
            className="fixed inset-x-0 top-20 h-screen bg-charcoal/40"
          />
          <nav
            id="mobile-nav"
            className="absolute inset-x-0 top-20 border-b border-stone-40 bg-paper px-6 shadow-lg"
          >
            <ul className="flex flex-col divide-y divide-stone-40/60">
              {mainNav.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block py-4 text-sm font-semibold uppercase tracking-wide text-ink"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </>
      )}
    </div>
  );
}
