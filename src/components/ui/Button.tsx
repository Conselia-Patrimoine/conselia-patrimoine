import type { AnchorHTMLAttributes } from "react";
import Link from "next/link";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  variant?: "primary" | "secondary";
};

const variantClasses: Record<NonNullable<ButtonProps["variant"]>, string> = {
  // Doré réservé aux CTA, en accent — jamais en aplat de grande surface.
  primary:
    "bg-dore text-gris-fonce hover:bg-dore-clair",
  secondary:
    "border border-gris-anthracite text-gris-fonce hover:border-dore hover:text-dore",
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
