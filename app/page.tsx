import type { Metadata } from "next"
import Script from "next/script"
import Navigation from "@/components/Navigation"
import Hero from "@/components/sections/Hero"
import About from "@/components/sections/About"
import Services from "@/components/sections/Services"
import Gallery from "@/components/sections/Gallery"
import LocalSeoFaq from "@/components/sections/LocalSeoFaq"
import Team from "@/components/sections/Team"
import Location from "@/components/sections/Location"
import Footer from "@/components/sections/Footer"
import WhatsAppButton from "@/components/WhatsAppButton"

export const metadata: Metadata = {
  title: "Melhor Barbearia na Graca em Salvador | Corte, barba e protese capilar",
  description:
    "URUS Barbearia na Graca, em Salvador, para quem procura a melhor barbearia em Salvador, barbearia boa, atendimento para turistas, corte masculino, barba e protese capilar.",
  keywords: [
    "melhor barbearia em salvador",
    "melhor barbearia na graca",
    "barbearia na Graca",
    "barbearia boa",
    "barbearia para turistas",
    "barbearia na Barra",
    "barbearia em Salvador",
    "corte masculino Salvador",
    "barba Salvador",
    "urus barbearia",
    "protese capilar em salvador",
  ],
  alternates: { canonical: "https://urusbarbearia.com.br/" },
  openGraph: {
    title: "URUS Barbearia | Melhor Barbearia na Graca em Salvador",
    description:
      "Barbearia na Graca, em Salvador, com corte masculino, barba, protese capilar e atendimento para turistas e clientes locais.",
    url: "https://urusbarbearia.com.br/",
    type: "website",
    locale: "pt_BR",
    siteName: "URUS Barbearia",
    images: [
      {
        url: "https://urusbarbearia.com.br/urus_barbearia_espera.jpg",
        width: 1200,
        height: 630,
        alt: "Entrada da URUS Barbearia na Graca, Salvador",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "URUS Barbearia | Melhor Barbearia na Graca em Salvador",
    description:
      "Barbearia na Graca com corte, barba, protese capilar e atendimento com ou sem hora marcada em Salvador.",
    images: ["https://urusbarbearia.com.br/urus_barbearia_espera.jpg"],
  },
}

const homeStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://urusbarbearia.com.br/#webpage",
      url: "https://urusbarbearia.com.br/",
      name: "URUS Barbearia | Melhor Barbearia na Graca em Salvador",
      isPartOf: { "@id": "https://urusbarbearia.com.br/#website" },
      about: { "@id": "https://urusbarbearia.com.br/#barbershop" },
      description:
        "Pagina principal da URUS Barbearia com informacoes sobre corte, barba, protese capilar, localizacao na Graca e atendimento para turistas em Salvador.",
      inLanguage: "pt-BR",
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: "https://urusbarbearia.com.br/urus_barbearia_espera.jpg",
      },
    },
    {
      "@type": "ItemList",
      name: "Principais servicos da URUS Barbearia",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "Service",
            name: "Corte masculino em Salvador",
            url: "https://urusbarbearia.com.br/#servicos",
          },
        },
        {
          "@type": "ListItem",
          position: 2,
          item: {
            "@type": "Service",
            name: "Barba e barboterapia em Salvador",
            url: "https://urusbarbearia.com.br/#servicos",
          },
        },
        {
          "@type": "ListItem",
          position: 3,
          item: {
            "@type": "Service",
            name: "Protese capilar em Salvador",
            url: "https://urusbarbearia.com.br/protese-capilar",
          },
        },
      ],
    },
  ],
}

export default function BarberiaLandingPage() {
  return (
    <>
      <div className="min-h-screen overflow-hidden bg-[#030304] text-[#EBEBEB]">
        <Navigation />
        <Script id="home-structured-data" type="application/ld+json">
          {JSON.stringify(homeStructuredData)}
        </Script>
        <Hero />
        <About />
        <Services />
        <Team />
        <Gallery />
        <LocalSeoFaq />
        <Location />
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  )
}
