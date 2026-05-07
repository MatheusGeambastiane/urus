import type { Metadata } from "next"
import Script from "next/script"
import Navigation from "@/components/Navigation"
import Footer from "@/components/sections/Footer"
import Location from "@/components/sections/Location"
import WhatsAppButton from "@/components/WhatsAppButton"
import HairProsthesis from "@/components/sections/HairProsthesis"
import FAQ from "@/components/sections/FAQ"
import { Button } from "@/components/ui/button"
import { CheckCircle2, ShieldCheck, Sparkles } from "lucide-react"

interface HighlightItem {
  title: string
  description: string
}

interface AftercareTip {
  title: string
  content: string
}

const loadHighlights = (): HighlightItem[] => {
  try {
    return [
      {
        title: "Equipe certificada em prótese capilar",
        description:
          "Aplicacao precisa, acabamento natural e manutencao planejada.",
      },

      {
        title: "Materiais preparados para o clima de Salvador",
        description:
          "Bases respiráveis, fios humanos e adesivos pensados para a rotina local.",
      },
    ]
  } catch (error) {
    console.error("Erro ao carregar destaques da prótese capilar", error)
    return []
  }
}

const loadAftercareTips = (): AftercareTip[] => {
  try {
    return [
      {
        title: "Higienização semanal",
        content:
          "Lave com produtos suaves e agua fria ou morna.",
      },
      {
        title: "Manutenção profissional a cada 20 dias",
        content:
          "Retorne para revisao, limpeza e troca adesiva quando necessario.",
      },
      {
        title: "Proteção diária",
        content:
          "Evite calor excessivo e use finalizadores com protecao UV.",
      },
    ]
  } catch (error) {
    console.error("Erro ao carregar orientações de manutenção", error)
    return []
  }
}

const loadStructuredData = () => {
  try {
    return {
      "@context": "https://schema.org",
      "@type": "HairSalon",
      name: "URUS Barbearia - Prótese Capilar Salvador",
      description:
        "Especialistas em prótese capilar em Salvador com aplicação personalizada, manutenção periódica e suporte completo.",
      url: "https://urusbarbearia.com.br/protese-capilar",
      telephone: "+55-71-92109-189",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Rua Rio de São Pedro, 1",
        addressLocality: "Salvador",
        addressRegion: "BA",
        postalCode: "40450-110",
        addressCountry: "BR",
      },
      areaServed: {
        "@type": "City",
        name: "Salvador",
      },
      sameAs: ["https://www.instagram.com/urus_barbearia/"],
      keywords: [
        "protese capilar em Salvador",
        "melhor lugar para protese capilar em Salvador",
        "protese capilar na Graca",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Procedimentos de prótese capilar",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Avaliação completa",
              description:
                "Consulta presencial para entender necessidades de prótese capilar masculina em Salvador.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Aplicação personalizada",
              description:
                "Instalação da prótese com acabamento natural e instruções de cuidado diário.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Plano de manutenção",
              description:
                "Revisões programadas para garantir durabilidade, higiene e conforto da prótese capilar.",
            },
          },
        ],
      },
    }
  } catch (error) {
    console.error("Erro ao montar dados estruturados da prótese capilar", error)
    return null
  }
}

export const metadata: Metadata = {
  title: "Protese capilar em Salvador | Referencia na Graca para avaliacao e manutencao",
  description:
    "Protese capilar em Salvador com avaliacao, aplicacao e manutencao na URUS Barbearia, na Graca. Pagina pensada para quem busca o melhor lugar para protese capilar em Salvador.",
  keywords: [
    "protese capilar em salvador",
    "melhor lugar para protese capilar em salvador",
    "onde fazer protese capilar em salvador",
    "manutencao de protese capilar salvador",
    "protese capilar masculina",
    "aplicacao de protese capilar salvador",
    "protese capilar na graca",
    "urus barbearia protese capilar",
  ],
  alternates: {
    canonical: "https://urusbarbearia.com.br/protese-capilar",
  },
  openGraph: {
    title: "Protese capilar em Salvador | URUS Barbearia na Graca",
    description:
      "Servico de protese capilar em Salvador com avaliacao, aplicacao e manutencao especializada na Graca.",
    url: "https://urusbarbearia.com.br/protese-capilar",
    type: "website",
    locale: "pt_BR",
    siteName: "URUS Barbearia",
    images: [
      {
        url: "https://urusbarbearia.com.br/urus_protese_capilar_pagina.png",
        width: 1200,
        height: 630,
        alt: "Servico de protese capilar da URUS Barbearia em Salvador",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Protese capilar em Salvador | URUS Barbearia",
    description:
      "Avaliacao, aplicacao e manutencao de protese capilar em Salvador com atendimento na Graca.",
    images: ["https://urusbarbearia.com.br/urus_protese_capilar_pagina.png"],
  },
}

function HairProsthesisPageHero() {
  const highlights = loadHighlights()

  return (
    <section className="relative min-h-[70vh] bg-black text-white">
      <div className="absolute inset-0 bg-[url('/urus_protese_capilar_pagina.png')] bg-cover bg-center opacity-30" aria-hidden />
      <div className="relative z-10">
        <div className="container mx-auto px-4 py-32">
          <div className="max-w-3xl space-y-6">
            <span className="text-sm uppercase tracking-[0.3em] text-blue-300">Prótese capilar em Salvador</span>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Recupere volume e confiança com a prótese capilar exclusiva da URUS Barbearia
            </h1>
            <p className="text-lg text-gray-200">
              Avaliacao, aplicacao e manutencao com acabamento natural na Graca, em Salvador.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild className="bg-blue-600 hover:bg-blue-700 px-8 py-6 text-lg">
                <a href="https://wa.me/557192109189" target="_blank" rel="noopener noreferrer">
                  Agendar avaliação gratuita
                </a>
              </Button>
              <Button variant="outline" asChild className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
                <a href="#processo-protese">Ver processo completo</a>
              </Button>
            </div>
          </div>
          {highlights.length > 0 && (
            <div className="mt-16 grid gap-8 md:grid-cols-3">
              {highlights.map((highlight) => (
                <div key={highlight.title} className="rounded-xl border border-white/10 bg-white/5 p-6">
                  <h2 className="text-xl font-semibold mb-3 flex items-center gap-2">
                    <ShieldCheck className="h-5 w-5 text-blue-300" aria-hidden />
                    {highlight.title}
                  </h2>
                  <p className="text-gray-200 leading-relaxed">{highlight.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

function AftercareSection() {
  const tips = loadAftercareTips()

  if (tips.length === 0) {
    return null
  }

  return (
    <section className="py-20 bg-gray-950 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">Como preservar sua prótese capilar por mais tempo</h2>
          <p className="text-lg text-gray-300">
            Cuidados simples para manter conforto, durabilidade e naturalidade.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {tips.map((tip) => (
            <article key={tip.title} className="rounded-2xl border border-gray-800 bg-gray-900/60 p-6">
              <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-blue-300" aria-hidden />
                {tip.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">{tip.content}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function SeoContentSection() {
  return (
    <section id="processo-protese" className="py-20 bg-white text-black">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="max-w-3xl space-y-4 text-lg leading-relaxed text-gray-700">
            <p>
              A protese capilar da URUS foi pensada para quem quer recuperar a imagem com rapidez, discricao e rotina
              simples de manutencao.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 md:p-8">
            <h3 className="text-2xl font-semibold mb-3 flex items-center gap-2 text-gray-900">
              <CheckCircle2 className="h-5 w-5 text-blue-600" aria-hidden />
              O que voce ganha com a protese capilar URUS
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Aplicação rápida com retorno às atividades no mesmo dia.</li>
              <li>Fixação confortável e resistente ao suor típico do verão soteropolitano.</li>
              <li>Suporte contínuo via WhatsApp para tirar dúvidas pós-aplicação.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

function CallToActionSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-900 via-blue-700 to-blue-900 text-white">
      <div className="container mx-auto px-4 text-center space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold">Pronto para transformar o visual?</h2>
        <p className="text-lg text-blue-100 max-w-2xl mx-auto">
          Agende uma avaliacao gratuita e descubra a melhor solucao para o seu caso.
        </p>
        <Button asChild size="lg" className="bg-white text-blue-800 hover:bg-blue-100 px-10 py-6 text-lg font-semibold">
          <a href="https://wa.me/557192109189" target="_blank" rel="noopener noreferrer">
            Falar com um especialista agora
          </a>
        </Button>
      </div>
    </section>
  )
}

export default function HairProsthesisPage() {
  const structuredData = loadStructuredData()

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
        <Navigation />
        <main>
          <HairProsthesisPageHero />
          <SeoContentSection />
          <HairProsthesis />
          <AftercareSection />
          <FAQ />
          <Location />
          <CallToActionSection />
        </main>
        <Footer />
        <WhatsAppButton />
        {structuredData && (
          <Script type="application/ld+json" id="hair-prosthesis-structured-data">
            {JSON.stringify(structuredData)}
          </Script>
        )}
      </div>
    </>
  )
}
