import type { MetadataRoute } from "next";
import { allPages } from "@/content/navigation";
import { siteConfig } from "@/content/site";

// sitemap.xml technique (SEO) — distinct de la page éditoriale "Plan de site".
export default function sitemap(): MetadataRoute.Sitemap {
  return allPages.map((page) => ({
    url: `${siteConfig.url}${page.href}`,
    lastModified: new Date(),
  }));
}
