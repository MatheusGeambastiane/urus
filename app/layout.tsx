import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] })
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] })

export const metadata: Metadata = {
  // Title com foco local + principal serviço na frente
  title:
    "Prótese Capilar em Salvador | Massoterapia e Kinesio Taping – URUS Barbearia",
  description:
    "URUS Barbearia na Cidade Baixa (Mares), Salvador-BA. Especialistas em prótese capilar, massoterapia (relaxante e terapêutica) e kinesio taping. Profissionais qualificados, agendamento fácil e atendimento de alto padrão.",
  // Keywords seguem pouco usadas pelo Google, mas úteis para outros motores
  keywords: [
    "prótese capilar em Salvador",
    "prótese capilar Salvador",
    "massoterapia em Salvador",
    "massagem relaxante Salvador",
    "kinesio taping Salvador",
    "taping em Salvador",
    "barbearia Salvador",
    "barbearia Cidade Baixa",
    "barbearia Mares",
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
      "URUS Barbearia – Prótese Capilar, Massoterapia e Kinesio Taping em Salvador",
    description:
      "Especialistas em prótese capilar, massoterapia e kinesio taping na Cidade Baixa (Mares), Salvador-BA.",
    siteName: "URUS Barbearia",
    images: [
      {
        url: "/barbearia_fachada.jpg",
        width: 1200,
        height: 630,
        alt: "Fachada da URUS Barbearia na Cidade Baixa, Salvador",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "URUS Barbearia – Prótese Capilar, Massoterapia e Kinesio Taping em Salvador",
    description:
      "Atendimento especializado em Salvador-BA. Agende seu horário.",
    images: ["/barbearia_fachada.jpg"],
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
                streetAddress: "Avenida Conselheiro Zacarias, 7",
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
                "Cidade Baixa",
                "Mares",
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
              sameAs: [
                // adicione seus perfis reais:
                // "https://www.google.com/maps?cid=SEU_CID",
                // "https://www.instagram.com/seu_perfil",
                // "https://www.facebook.com/seu_perfil",
              ],
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
