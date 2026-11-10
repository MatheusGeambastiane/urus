import { localizeStructuredData } from "@/i18n/structured-data"
import { hasLocale, NextIntlClientProvider } from "next-intl"
import { notFound } from "next/navigation"
import { routing } from "@/i18n/routing"
import { getTranslations, getLocale, setRequestLocale } from "next-intl/server"
import { localizeMetadata } from "@/i18n/metadata"
import type { Metadata } from "next"
import Script from "next/script"
import { Cormorant_Garamond, Manrope } from "next/font/google"
import { Suspense } from "react"
import GoogleAnalytics from "@/components/GoogleAnalytics"
import "../globals.css"

const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
})
const body = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
})
const siteUrl = "https://urusbarbearia.com.br"
const siteName = "URUS Barbearia"
const socialLinks = ["https://www.instagram.com/urus_barbearia"]
const localNeighborhoods = [
  "Graca",
  "Barra",
  "Vitoria",
  "Campo Grande",
  "Ondina",
  "Rio Vermelho",
]

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("site")
  const locale = await getLocale()
  return localizeMetadata(
    {
      metadataBase: new URL(siteUrl),
      title: {
        default: t("Melhor_Barbearia_na_Graca_em_Salvador_URUS_Barbearia_3"),
        template: "%s | URUS Barbearia Salvador",
      },
      description: t(
        "URUS_Barbearia_na_Graca_em_Salvador_referencia_para_quem_5",
      ),
      keywords: [
        t("barbearia_na_Graca_6"),
        t("melhor_barbearia_em_Salvador_7"),
        t("melhor_barbearia_na_Graca_8"),
        t("barbearia_Salvador_9"),
        t("barbearia_em_Salvador_10"),
        t("barbearia_boa_11"),
        t("barbearia_para_turistas_12"),
        t("barbearia_na_Barra_13"),
        t("corte_masculino_Salvador_14"),
        t("barba_Salvador_15"),
        t("protese_capilar_Salvador_16"),
        t("melhor_lugar_para_protese_capilar_em_Salvador_17"),
        t("massoterapia_Salvador_18"),
        "Urus Barbearia",
      ],
      authors: [{ name: siteName }],
      creator: siteName,
      publisher: siteName,
      category: "Barbearia",
      alternates: {
        canonical: `${siteUrl}/`,
        languages: {
          "pt-BR": `${siteUrl}/`,
        },
      },
      formatDetection: { telephone: true, email: true, address: true },
      other: {
        "geo.region": "BR-BA",
        "geo.placename": "Salvador",
        "geo.position": "-12.9409478;-38.5005144",
        ICBM: "-12.9409478, -38.5005144",
      },
      openGraph: {
        type: "website",
        locale: "pt_BR",
        url: `${siteUrl}/`,
        title: t("URUS_Barbearia_Melhor_Barbearia_na_Graca_em_Salvador_20"),
        description: t(
          "Barbearia_na_Graca_com_corte_masculino_barba_protese_capilar_21",
        ),
        siteName,
        images: [
          {
            url: `${siteUrl}/urus_barbearia_espera.jpg`,
            width: 1200,
            height: 630,
            alt: t("Fachada_da_URUS_Barbearia_na_Graca_Salvador_22"),
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: t("URUS_Barbearia_Melhor_Barbearia_na_Graca_em_Salvador_20"),
        description: t(
          "Barbearia_na_Graca_em_Salvador_com_corte_barba_protese_23",
        ),
        images: [`${siteUrl}/urus_barbearia_espera.jpg`],
      },
      robots: {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          "max-image-preview": "large",
          "max-snippet": -1,
          "max-video-preview": -1,
        },
      },
      icons: {
        icon: [{ url: "/urus_logo.png", type: "image/png" }],
        shortcut: "/urus_logo.png",
      },
      verification: {
        google: "Rixc5KbTrthQg64vBdD3pPL1oSpXa1y9muclKzNLQY8",
      },
    },
    locale,
    "/",
  )
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!hasLocale(routing.locales, locale)) notFound()
  setRequestLocale(locale)
  const t = await getTranslations("site")

  return (
    <html lang={locale}>
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-DE75F7CWHD"
          strategy="afterInteractive"
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-DE75F7CWHD');
gtag('config', 'AW-17609739026');
            `.trim(),
          }}
        />
        {/* WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              localizeStructuredData(
                {
                  "@context": "https://schema.org",
                  "@type": "WebSite",
                  "@id": `${siteUrl}/#website`,
                  name: siteName,
                  alternateName: "Urus Barbearia Salvador",
                  url: `${siteUrl}/`,
                  inLanguage: locale,
                  description: t(
                    "Barbearia_na_Graca_em_Salvador_focada_em_corte_masculino_25",
                  ),
                  publisher: {
                    "@type": "Organization",
                    name: siteName,
                    url: `${siteUrl}/`,
                  },
                },
                locale,
              ),
            ),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              localizeStructuredData(
                {
                  "@context": "https://schema.org",
                  "@type": "HairSalon",
                  "@id": `${siteUrl}/#barbershop`,
                  name: siteName,
                  alternateName: "Urus Barbearia Salvador",
                  slogan: t(
                    "Barbearia_na_Graca_em_Salvador_com_atendimento_premium_e_26",
                  ),
                  description: t(
                    "Barbearia_na_Graca_em_Salvador_para_quem_busca_corte_27",
                  ),
                  image: [`${siteUrl}/urus_barbearia_espera.jpg`],
                  url: `${siteUrl}/`,
                  hasMap:
                    "https://www.google.com/maps/place/Urus+Barbearia+-+Salvador/",
                  telephone: "+55-71-99210-9189",
                  priceRange: "$$",
                  sameAs: socialLinks,
                  areaServed: [
                    { "@type": "City", name: "Salvador" },
                    ...localNeighborhoods,
                  ],
                  knowsAbout: [
                    t("barbearia_na_Graca_6"),
                    t("melhor_barbearia_em_Salvador_7"),
                    t("barbearia_para_turistas_em_Salvador_28"),
                    t("corte_masculino_29"),
                    "barba",
                    t("protese_capilar_em_Salvador_30"),
                    t("massoterapia_31"),
                  ],
                  amenityFeature: [
                    {
                      "@type": "LocationFeatureSpecification",
                      name: t("Atendimento_com_ou_sem_hora_marcada_32"),
                      value: true,
                    },
                    {
                      "@type": "LocationFeatureSpecification",
                      name: t(
                        "Atendimento_por_agendamento_ou_ordem_de_chegada_33",
                      ),
                      value: true,
                    },
                  ],
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: "Rua Rio de São Pedro, 1",
                    addressLocality: "Salvador",
                    addressRegion: "BA",
                    postalCode: "40445-000",
                    addressCountry: "BR",
                  },
                  geo: {
                    "@type": "GeoCoordinates",
                    latitude: -12.9409478,
                    longitude: -38.5005144,
                  },
                  openingHoursSpecification: [
                    {
                      "@type": "OpeningHoursSpecification",
                      dayOfWeek: [
                        "Monday",
                        "Tuesday",
                        "Wednesday",
                        "Thursday",
                        "Friday",
                      ],
                      opens: "09:00",
                      closes: "20:00",
                    },
                    {
                      "@type": "OpeningHoursSpecification",
                      dayOfWeek: "Saturday",
                      opens: "09:00",
                      closes: "18:00",
                    },
                  ],
                  makesOffer: [
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: t("Corte_masculino_e_barba_em_Salvador_35"),
                        serviceType: "Barbershop",
                        areaServed: "Salvador",
                        provider: { "@id": `${siteUrl}/#barbershop` },
                      },
                      availability: "https://schema.org/InStock",
                    },
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: t("Protese_capilar_em_Salvador_36"),
                        serviceType: "Capillary Hair Prosthesis",
                        areaServed: "Salvador",
                        provider: { "@id": `${siteUrl}/#barbershop` },
                      },
                      availability: "https://schema.org/InStock",
                    },
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: t("Massoterapia_em_Salvador_38"),
                        serviceType: "Massage Therapy",
                        areaServed: "Salvador",
                        provider: { "@id": `${siteUrl}/#barbershop` },
                      },
                      availability: "https://schema.org/InStock",
                    },
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: t("Kinesio_Taping_Taping_em_Salvador_40"),
                        serviceType: "Kinesio Taping",
                        areaServed: "Salvador",
                        provider: { "@id": `${siteUrl}/#barbershop` },
                      },
                      availability: "https://schema.org/InStock",
                    },
                  ],
                },
                locale,
              ),
            ),
          }}
        />
      </head>
      <body className={`${display.variable} ${body.variable} antialiased`}>
        <Suspense fallback={null}>
          <GoogleAnalytics />
        </Suspense>
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  )
}
