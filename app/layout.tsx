import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Barbearia URUS - A melhor barbearia da Cidade Baixa em Salvador",
  description:
    "URUS Barbearia em Salvador oferece cortes modernos, barba, design de sobrancelha e mais. Localizada na Cidade Baixa, Mares. Agende seu horário!",
  keywords:
    "barbearia salvador, barbearia cidade baixa, barbearia mares, urus barbearia, corte masculino salvador, barba salvador, melhor barbearia salvador",
  authors: [{ name: "URUS Barbearia" }],
  creator: "URUS Barbearia",
  publisher: "URUS Barbearia",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://urusbarbearia.com.br",
    title: "URUS Barbearia | Melhor Experiência em Barbearia em Salvador",
    description:
      "Venha conhecer a URUS Barbearia em Salvador. Cortes modernos, ambiente exclusivo e profissionais qualificados na Cidade Baixa, Mares.",
    siteName: "URUS Barbearia",
    images: [
      {
        url: "/barbearia_fachada.jpg",
        width: 1200,
        height: 630,
        alt: "URUS Barbearia em Salvador",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "URUS Barbearia | Salvador",
    description:
      "A melhor barbearia da Cidade Baixa em Salvador. Cortes modernos, ambiente exclusivo e profissionais qualificados.",
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
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HairSalon",
              name: "URUS Barbearia",
              image: "https://urusbarbearia.com.br/barbearia_fachada.jpg",
              url: "https://urusbarbearia.com.br",
              telephone: "+5571992997191",
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
                latitude: -12.940947800000002,
                longitude: -38.5005144,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
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
            }),
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  )
}

