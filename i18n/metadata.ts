import type { Metadata } from "next"
import { routing } from "./routing"

const baseUrl = "https://urusbarbearia.com.br"
const socialLocales: Record<string, string> = {
  "pt-BR": "pt_BR",
  en: "en_US",
  es: "es_ES",
  fr: "fr_FR",
}

export function localizedUrl(locale: string, path = "/") {
  return `${baseUrl}${locale === routing.defaultLocale ? "" : `/${locale}`}${path === "/" && locale !== routing.defaultLocale ? "" : path}`
}

export function languageAlternates(path: string) {
  return Object.fromEntries([
    ...routing.locales.map((locale) => [locale, localizedUrl(locale, path)]),
    ["x-default", localizedUrl(routing.defaultLocale, path)],
  ])
}

export function localizeMetadata(
  metadata: Metadata,
  locale: string,
  path: string,
): Metadata {
  const url = localizedUrl(locale, path)
  return {
    ...metadata,
    alternates: { canonical: url, languages: languageAlternates(path) },
    openGraph: {
      ...metadata.openGraph,
      url,
      locale: socialLocales[locale],
      alternateLocale: routing.locales
        .filter((value) => value !== locale)
        .map((value) => socialLocales[value]),
    },
  }
}
