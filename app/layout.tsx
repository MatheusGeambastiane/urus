import type { Metadata } from "next"
import Script from "next/script"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] })
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] })

export const metadata: Metadata = {
  // Title com foco local + principal serviço na frente
  title: {
    default: "Barbearia na Graça | Melhor Barbearia de Salvador | URUS",
    template: "%s | URUS Barbearia Salvador",
  },
  description:
    "URUS Barbearia na Graça, Salvador-BA. A melhor barbearia de Salvador para cortes, barba e prótese capilar, atendendo também quem busca barbearia na Barra e barbearia em Salvador.",
  // Keywords seguem pouco usadas pelo Google, mas úteis para outros motores
  keywords: [
    "prótese capilar em Salvador",
    "prótese capilar Salvador",
    "barbearia em Salvador",
    "melhor barbearia de Salvador",
    "massoterapia em Salvador",
    "massagem relaxante Salvador",
    "kinesio taping Salvador",
    "taping em Salvador",
    "barbearia Salvador",
    "barbearia na Graça",
    "barbearia na Barra",
    "barbearia em Salvador",
    "melhor barbearia de Salvador",
    "Urus Barbearia",
  ],
  authors: [{ name: "URUS Barbearia" }],
  creator: "URUS Barbearia",
  publisher: "URUS Barbearia",
  // Canonical e variações de idioma ajudam a evitar conteúdo duplicado
  alternates: {
    canonical: "https://urusbarbearia.com.br/",
    languages: {
      "pt-BR": "https://urusbarbearia.com.br/",
    },
  },
  formatDetection: { telephone: true, email: true, address: true },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://urusbarbearia.com.br/",
    title:
      "URUS Barbearia – Barbearia na Graça e melhor barbearia de Salvador",
    description:
      "Referência em cortes masculinos, barba e prótese capilar na Graça, Salvador-BA, com atendimento para quem busca barbearia na Barra e barbearia em Salvador.",
    siteName: "URUS Barbearia",
    images: [
      {
        url: "https://urusbarbearia.com.br/barbearia_fachada.jpg",
        width: 1200,
        height: 630,
        alt: "Fachada da URUS Barbearia na Graça, Salvador",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "URUS Barbearia – Barbearia na Graça e melhor barbearia de Salvador",
    description: "Barbearia em Salvador com foco na Graça e atendimento para clientes da Barra. Agende seu horário.",
    images: ["https://urusbarbearia.com.br/barbearia_fachada.jpg"],
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
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/apple-icon.png",
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
          src="https://www.googletagmanager.com/gtag/js?id=AW-17609739026"
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
gtag('config', 'AW-17609739026');
gtag('event', 'conversion', {'send_to': 'AW-17609739026/OYd9CI3rkeQbEJKW_cxB'});
            `.trim(),
          }}
        />
        {/* WebSite + SearchAction (para sitelinks) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "URUS Barbearia",
              url: "https://urusbarbearia.com.br/",
              potentialAction: {
                "@type": "SearchAction",
                target:
                  "https://urusbarbearia.com.br/busca?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
        {/* LocalBusiness / HairSalon com Services destacados */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HairSalon",
              name: "URUS Barbearia",
              image: "https://urusbarbearia.com.br/barbearia_fachada.jpg",
              url: "https://urusbarbearia.com.br/",
              telephone: "+55-71-9210-9189",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Rua Rio de São Pedro, 26",
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
              areaServed: [
                { "@type": "City", name: "Salvador" },
                "Bairro da Graça",
                "Graça",
                "Bonfim",
                "Ribeira",
                "Roma",
                "Calçada",
                "Brotas",
                "Barbalho",
                "Suburbana de Salvador",
                "Barra",
                "Ondina",
                "Graça",
                "Vitória",
                "Campo Grande",
                "Pituba",
                "Itaigara",
                "Caminho das Árvores",
                "Paralela",
                "Stella Maris",
                "Itapuã",
                "Lauro de Freitas",
                "Camaçari",
                "Simões Filho",
                "Feira de Santana",

              ],
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
                  closes: "18:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Saturday",
                  opens: "09:00",
                  closes: "16:00",
                },
              ],
              priceRange: "$$",
              sameAs: ["https://www.instagram.com/urus_barbearia"],
              makesOffer: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Prótese Capilar em Salvador",
                    serviceType: "Capillary Hair Prosthesis",
                    areaServed: "Salvador",
                    provider: { "@type": "HairSalon", name: "URUS Barbearia" },
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
                    provider: { "@type": "HairSalon", name: "URUS Barbearia" },
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
                    provider: { "@type": "HairSalon", name: "URUS Barbearia" },
                  },
                  availability: "https://schema.org/InStock",
                },
              ],
            }),
          }}
        />
        {/* FAQPage específico às buscas-alvo (sem promessas médicas) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Quanto tempo dura uma prótese capilar?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "A durabilidade varia conforme manutenção e rotina. Em média, recomenda-se manutenção periódica para melhor fixação, conforto e aspecto natural.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Como funciona a massoterapia na URUS Barbearia?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Oferecemos massagens relaxantes e terapêuticas focadas em bem-estar. A sessão é personalizada conforme a necessidade do cliente.",
                  },
                },
                {
                  "@type": "Question",
                  name: "O que é kinesio taping (taping)?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "É a aplicação de bandagens elásticas para suporte muscular e conforto. A aplicação é feita por profissional capacitado e ajustada ao objetivo de cada cliente.",
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}
