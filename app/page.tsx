import type { Metadata } from "next"
import Script from "next/script"
import Navigation from "@/components/Navigation"
import Hero from "@/components/sections/Hero"
import About from "@/components/sections/About"
import Services from "@/components/sections/Services"
import Team from "@/components/sections/Team"
import Location from "@/components/sections/Location"
import Footer from "@/components/sections/Footer"
import WhatsAppButton from "@/components/WhatsAppButton"

export const metadata: Metadata = {
  title: "Barbearia na Graça | Melhor Barbearia de Salvador | URUS",
  description:
    "URUS Barbearia na Graça, Salvador. A melhor barbearia de Salvador para corte, barba e prótese capilar, com atendimento para quem busca barbearia na Barra e barbearia em Salvador.",
  keywords: [
    "barbearia na Graça",
    "melhor barbearia de Salvador",
    "barbearia na Barra",
    "barbearia em Salvador",
    "barbearia Salvador",
  ],
  alternates: { canonical: "https://urusbarbearia.com.br/" },
  openGraph: {
    title: "URUS Barbearia | Barbearia na Graça e melhor barbearia de Salvador",
    description:
      "Barbearia em Salvador com foco na Graça, cortes premium, barba e prótese capilar. Atendimento para quem busca barbearia na Barra.",
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
        <About />
        <Services />
        <Team />
        <Location />
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  )
}
