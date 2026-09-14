import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: SITE.url, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE.url}/faq`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE.url}/affiliate`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
  ];
}
