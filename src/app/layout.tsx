import type { Metadata } from "next";
import { Manrope, Plus_Jakarta_Sans } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { siteConfig } from "@/content/site";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

// Sans-serif moderne pour les titres, le logo et les citations — plus
// chaleureux/rond qu'un grotesque froid type Inter, mais sans empattements.
const displayFont = Plus_Jakarta_Sans({
  variable: "--font-display-face",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

// TODO: affiner les métadonnées (titre/description par page via `export const metadata`
// dans chaque route), ajouter OpenGraph + favicon une fois la charte graphique finalisée.
export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.tagline,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${manrope.variable} ${displayFont.variable} h-full overflow-x-hidden antialiased`}
    >
      <body className="flex min-h-full flex-col overflow-x-hidden bg-paper text-ink font-sans">
        <Header />
        {/* pt-20 compense le header fixe (h-20) ; le Hero de l'Accueil l'annule
            avec -mt-20 pour s'étendre sous le header translucide. */}
        <main className="flex-1 pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
