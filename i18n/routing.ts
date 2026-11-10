import { defineRouting } from "next-intl/routing"

export const routing = defineRouting({
  locales: ["pt-BR", "en", "es", "fr"],
  defaultLocale: "pt-BR",
  localePrefix: "as-needed",
  // The unprefixed site always remains Brazilian Portuguese.
  localeDetection: false,
})

export type Locale = (typeof routing.locales)[number]
