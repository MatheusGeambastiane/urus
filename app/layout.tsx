import type { Metadata } from "next"
import Script from "next/script"
import { Cormorant_Garamond, Manrope } from "next/font/google"
import { Suspense } from "react"
import GoogleAnalytics from "@/components/GoogleAnalytics"
import "./globals.css"

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
const localNeighborhoods = ["Graca", "Barra", "Vitoria", "Campo Grande", "Ondina", "Rio Vermelho"]

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Melhor Barbearia na Graca em Salvador | URUS Barbearia",
    template: "%s | URUS Barbearia Salvador",
  },
  description:
    "URUS Barbearia na Graca, em Salvador: referencia para quem busca a melhor barbearia em Salvador, corte masculino, barba, protese capilar, atendimento para turistas e servicos com ou sem hora marcada.",
  keywords: [
    "barbearia na Graca",
    "melhor barbearia em Salvador",
    "melhor barbearia na Graca",
    "barbearia Salvador",
    "barbearia em Salvador",
    "barbearia boa",
    "barbearia para turistas",
    "barbearia na Barra",
    "corte masculino Salvador",
    "barba Salvador",
    "protese capilar Salvador",
    "melhor lugar para protese capilar em Salvador",
    "massoterapia Salvador",
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
    title: "URUS Barbearia | Melhor Barbearia na Graca em Salvador",
    description:
      "Barbearia na Graca com corte masculino, barba, protese capilar e atendimento com ou sem hora marcada para moradores, profissionais e turistas em Salvador.",
    siteName,
    images: [
      {
        url: `${siteUrl}/urus_barbearia_espera.jpg`,
        width: 1200,
        height: 630,
        alt: "Fachada da URUS Barbearia na Graca, Salvador",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "URUS Barbearia | Melhor Barbearia na Graca em Salvador",
    description:
      "Barbearia na Graca, em Salvador, com corte, barba, protese capilar e atendimento para turistas e clientes locais.",
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
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
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
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": `${siteUrl}/#website`,
              name: siteName,
              alternateName: "Urus Barbearia Salvador",
              url: `${siteUrl}/`,
              inLanguage: "pt-BR",
              description:
                "Barbearia na Graca, em Salvador, focada em corte masculino, barba, protese capilar, massoterapia e atendimento com ou sem hora marcada.",
              publisher: {
                "@type": "Organization",
                name: siteName,
                url: `${siteUrl}/`,
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HairSalon",
              "@id": `${siteUrl}/#barbershop`,
              name: siteName,
              alternateName: "Urus Barbearia Salvador",
              slogan: "Barbearia na Graca em Salvador com atendimento premium e flexivel",
              description:
                "Barbearia na Graca, em Salvador, para quem busca corte masculino, barba, protese capilar, massoterapia, bem-estar e atendimento com ou sem hora marcada.",
              image: [`${siteUrl}/urus_barbearia_espera.jpg`],
              url: `${siteUrl}/`,
              hasMap: "https://www.google.com/maps/place/Urus+Barbearia+-+Salvador/",
              telephone: "+55-71-99210-9189",
              priceRange: "$$",
              sameAs: socialLinks,
              areaServed: [{ "@type": "City", name: "Salvador" }, ...localNeighborhoods],
              knowsAbout: [
                "barbearia na Graca",
                "melhor barbearia em Salvador",
                "barbearia para turistas em Salvador",
                "corte masculino",
                "barba",
                "protese capilar em Salvador",
                "massoterapia",
              ],
              amenityFeature: [
                {
                  "@type": "LocationFeatureSpecification",
                  name: "Atendimento com ou sem hora marcada",
                  value: true,
                },
                {
                  "@type": "LocationFeatureSpecification",
                  name: "Atendimento por agendamento ou ordem de chegada",
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
                    name: "Corte masculino e barba em Salvador",
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
                    name: "Protese capilar em Salvador",
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
                    name: "Massoterapia em Salvador",
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
                    name: "Kinesio Taping (Taping) em Salvador",
                    serviceType: "Kinesio Taping",
                    areaServed: "Salvador",
                    provider: { "@id": `${siteUrl}/#barbershop` },
                  },
                  availability: "https://schema.org/InStock",
                },
              ],
            }),
          }}
        />
      </head>
      <body className={`${display.variable} ${body.variable} antialiased`}>
        <Suspense fallback={null}>
          <GoogleAnalytics />
        </Suspense>
        {children}
      </body>
    </html>
  )
}
