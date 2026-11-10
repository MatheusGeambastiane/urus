import type { MetadataRoute } from "next"
import { routing } from "@/i18n/routing"
import { languageAlternates, localizedUrl } from "@/i18n/metadata"

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { path: "/", priority: 1, changeFrequency: "weekly" as const },
    {
      path: "/protese-capilar",
      priority: 0.9,
      changeFrequency: "weekly" as const,
    },
    {
      path: "/massoterapia-quick-massage-taping-salvador",
      priority: 0.8,
      changeFrequency: "monthly" as const,
    },
  ]
  return pages.flatMap(({ path, ...page }) =>
    routing.locales.map((locale) => ({
      ...page,
      url: localizedUrl(locale, path),
      alternates: { languages: languageAlternates(path) },
    })),
  )
}
