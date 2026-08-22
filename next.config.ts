import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  // Évite l'auto-détection ambiguë de racine (un package-lock.json existe
  // plus haut dans l'arborescence utilisateur, hors de ce dépôt).
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
