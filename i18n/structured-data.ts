import { localizedUrl } from "./metadata"

// Keep schema text, language and page references aligned with the rendered locale.
export function localizeStructuredData(
  value: unknown,
  locale: string,
): unknown {
  if (Array.isArray(value))
    return value.map((item) => localizeStructuredData(item, locale))
  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value).map(([key, item]) => [
        key,
        key === "inLanguage" ? locale : localizeStructuredData(item, locale),
      ]),
    )
  }
  if (
    typeof value === "string" &&
    value.startsWith("https://urusbarbearia.com.br/")
  ) {
    const url = new URL(value)
    if (!url.pathname.split("/").pop()?.includes(".")) {
      return `${localizedUrl(locale, url.pathname)}${url.search}${url.hash}`
    }
  }
  return value
}
