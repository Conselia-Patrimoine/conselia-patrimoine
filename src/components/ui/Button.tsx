import type { AnchorHTMLAttributes } from "react";
import Link from "next/link";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  variant?: "primary" | "secondary";
};

const variantClasses: Record<NonNullable<ButtonProps["variant"]>, string> = {
  // Doré réservé aux CTA, en dégradé foil (cf. globals.css .btn-gold) — jamais en aplat plat.
  primary: "btn-gold text-ink",
  secondary: "border border-stone-40 text-ink hover:border-gold-3 hover:text-gold-4",
};

/** CTA unique et discret (cf. CLAUDE.md : jamais de conversion forcée). */
export default function Button({
  href,
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-colors ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}
