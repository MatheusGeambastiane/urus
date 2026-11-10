import assert from "node:assert/strict"
import { readFile } from "node:fs/promises"
import { createTranslator } from "next-intl"

const locales = ["pt-BR", "en", "es", "fr"]
const catalogs = await Promise.all(
  locales.map(async (locale) =>
    JSON.parse(
      await readFile(
        new URL(`../messages/${locale}.json`, import.meta.url),
        "utf8",
      ),
    ),
  ),
)
const keys = Object.keys(catalogs[0].site).sort()
for (const [index, locale] of locales.entries()) {
  assert.deepEqual(
    Object.keys(catalogs[index].site).sort(),
    keys,
    `Incomplete catalog: ${locale}`,
  )
  const t = createTranslator({
    locale,
    messages: catalogs[index],
    onError: (error) => {
      throw error
    },
  })
  for (const key of keys)
    assert.ok(t(`site.${key}`).trim(), `Empty message: ${locale}.${key}`)
}
console.log(
  `Catalogs: ${keys.length} messages validated in all four languages.`,
)

// Run against a production server: BASE_URL=http://localhost:3100 npm run test:i18n
if (process.env.BASE_URL) {
  const base = process.env.BASE_URL
  const paths = [
    "",
    "/protese-capilar",
    "/massoterapia-quick-massage-taping-salvador",
    "/promocao",
  ]
  for (const locale of locales) {
    const prefix = locale === "pt-BR" ? "" : `/${locale}`
    for (const path of paths) {
      const route = `${prefix}${path}` || "/"
      const response = await fetch(`${base}${route}`)
      assert.equal(response.status, 200, route)
      const html = await response.text()
      assert.ok(
        html.includes(`<html lang="${locale}"`),
        `Wrong document language: ${route}`,
      )
      const canonical = `https://urusbarbearia.com.br${route === "/" ? "" : route}`
      assert.ok(
        html.includes(`rel="canonical" href="${canonical}"`),
        `Wrong canonical: ${route}`,
      )
      for (const language of [...locales, "x-default"]) {
        assert.ok(
          html.includes(`hrefLang="${language}"`),
          `Missing hreflang ${language}: ${route}`,
        )
      }
      assert.ok(
        !html.includes("MISSING_MESSAGE"),
        `Missing translation: ${route}`,
      )
      if (path === "/promocao")
        assert.ok(html.includes("noindex"), "Promotion must remain noindex")
    }
  }
  const defaultResponse = await fetch(`${base}/`, {
    headers: { "accept-language": "fr", cookie: "NEXT_LOCALE=es" },
    redirect: "manual",
  })
  assert.equal(
    defaultResponse.status,
    200,
    "Default locale must not redirect based on browser or cookie",
  )
  assert.ok((await defaultResponse.text()).includes('<html lang="pt-BR"'))
  assert.equal((await fetch(`${base}/de`)).status, 404)
  const sitemap = await (await fetch(`${base}/sitemap.xml`)).text()
  assert.equal((sitemap.match(/<loc>/g) || []).length, 12)
  assert.ok(
    !sitemap.includes("/promocao"),
    "Noindex promotion must not enter sitemap",
  )
  console.log(
    "Routes: all 16 pages, metadata, default locale, invalid locale and sitemap passed.",
  )
}
