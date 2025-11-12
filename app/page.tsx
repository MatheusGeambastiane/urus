import type { Metadata } from "next"
import Script from "next/script"
import Navigation from "@/components/Navigation"
import Hero from "@/components/sections/Hero"
import Discount from "@/components/sections/Discount"
import About from "@/components/sections/About"
import Services from "@/components/sections/Services"
import Gallery from "@/components/sections/Gallery"
import SeoHighlights from "@/components/sections/SeoHighlights"
import Location from "@/components/sections/Location"
import Footer from "@/components/sections/Footer"
import WhatsAppButton from "@/components/WhatsAppButton"

export const metadata: Metadata = {
  title: "Prótese capilar em Salvador | URUS Barbearia",
  description:
    "URUS Barbearia é referência em prótese capilar e cortes masculinos na Cidade Baixa, em Salvador. Atendimento premium, sala exclusiva e especialistas reconhecidos na capital baiana.",
  keywords: [
    "prótese capilar em Salvador",
    "barbearia em Salvador",
    "melhor barbearia de Salvador",
    "barbearia Cidade Baixa",
    "prótese capilar masculina Salvador",
  ],
  alternates: { canonical: "https://urusbarbearia.com.br/" },
  openGraph: {
    title: "URUS Barbearia | Prótese capilar e barbearia em Salvador",
    description:
      "Clínica-barbearia com prótese capilar personalizada, cortes premium e terapias manuais em Salvador (BA).",
    url: "https://urusbarbearia.com.br/",
    type: "website",
    images: [
      {
        url: "https://urusbarbearia.com.br/barbearia_fachada.jpg",
        width: 1200,
        height: 630,
        alt: "Entrada da URUS Barbearia em Salvador",
      },
    ],
  },
}

export default function BarberiaLandingPage() {
  return (
    <>
      <Script src="https://www.googletagmanager.com/gtag/js?id=AW-17609739026" strategy="afterInteractive" />
      <Script id="gtag-init-home" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-17609739026');
        `}
      </Script>
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
        <Navigation />
        <Hero />
        <Discount />
        <About />
        <Gallery />
        <Services />
        <SeoHighlights />
        <Location />
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  )
}
