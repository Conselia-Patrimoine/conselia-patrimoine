"use client";

import { useState } from "react";
import Link from "next/link";
import { mainNav } from "@/content/navigation";

/** Menu mobile (burger) — repliable, pour les écrans < md. */
export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-label="Ouvrir le menu"
        onClick={() => setOpen((v) => !v)}
        className="flex h-10 w-10 items-center justify-center rounded-full border border-stone-40"
      >
        {/* TODO: icône burger / fermeture (Lucide ou Material Symbols, cf. CLAUDE.md section 14) */}
        <span className="sr-only">Menu</span>
        ☰
      </button>

      {open && (
        <nav className="absolute inset-x-0 top-20 border-b border-stone-40 bg-paper px-6 py-4">
          <ul className="flex flex-col gap-4">
            {mainNav.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-base font-medium text-ink"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}
