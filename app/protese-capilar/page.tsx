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
          "Nossos especialistas foram treinados com marcas internacionais para garantir acabamento imperceptível e manutenção planejada em Salvador.",
      },

      {
        title: "Materiais preparados para o clima de Salvador",
        description:
          "Utilizamos próteses capilares com base respirável, fios 100% humanos e adesivos hipoalergênicos que resistem à umidade e ao calor da capital baiana.",
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
          "Lave sua prótese capilar com xampus suaves e finalize com condicionador específico para fios humanos, sempre com água fria ou morna.",
      },
      {
        title: "Manutenção profissional a cada 20 dias",
        content:
          "Retorne à URUS Barbearia para revisão de fixação, limpeza profunda e troca de adesivos, mantendo conforto e aparência natural.",
      },
      {
        title: "Proteção diária",
        content:
          "Evite fontes de calor direto como chapinhas e secadores quentes; utilize leave-ins com filtro UV para proteger a prótese capilar em Salvador.",
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
        streetAddress: "Rua Rio de São Pedro, 26",
        addressLocality: "Salvador",
        addressRegion: "BA",
        postalCode: "40450-110",
        addressCountry: "BR",
      },
      areaServed: {
        "@type": "City",
        name: "Salvador",
      },
      sameAs: [
        "https://www.instagram.com/urus_barbearia/",
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
  title: "Prótese capilar em Salvador | Barbearia na Graça | URUS",
  description:
    "Prótese capilar em Salvador na URUS Barbearia na Graça. Atendimento da melhor barbearia de Salvador para quem busca barbearia na Barra e barbearia em Salvador.",
  keywords: [
    "prótese capilar em salvador",
    "manutenção de prótese capilar salvador",
    "prótese capilar masculina",
    "prótese capilar em lauro de freitas ",
    "barbearia prótese capilar salvador",
    "barbearia na Graça",
    "melhor barbearia de Salvador",
    "barbearia na Barra",
    "barbearia em Salvador",
  ],
  alternates: {
    canonical: "https://urusbarbearia.com.br/protese-capilar",
  },
  openGraph: {
    title: "Prótese capilar em Salvador | Barbearia na Graça | URUS",
    description:
      "Prótese capilar em Salvador na URUS Barbearia na Graça. Melhor barbearia de Salvador para quem busca barbearia na Barra e barbearia em Salvador.",
    url: "https://urusbarbearia.com.br/protese-capilar",
    type: "website",
    locale: "pt_BR",
    siteName: "URUS Barbearia",
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
              Nossa barbearia na Graça oferece avaliação completa, aplicação segura e manutenção periódica para quem
              busca prótese capilar masculina na capital baiana.
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
            Reunimos orientações essenciais para manter a prótese capilar sempre natural, confortável e alinhada ao clima de Salvador.
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
  const paragraphs = [
    "A prótese capilar é a alternativa mais rápida para quem deseja recuperar a autoestima sem intervenções cirúrgicas. Na URUS Barbearia, realizamos uma avaliação detalhada para identificar densidade, formato da linha frontal e rotina de cuidados do cliente, indicando a base e o método de fixação mais adequados.",
    "Atendemos homens e mulheres que buscam prótese capilar em Salvador para tratar calvície parcial ou total. O procedimento é personalizado, com próteses importadas que podem ser recortadas no próprio couro cabeludo para garantir acabamento perfeito.",
    "Além da aplicação, oferecemos treinamento sobre manutenção domiciliar, cronograma de retorno e recomendações de produtos aprovados pelos nossos especialistas. Assim, você tem segurança de que o investimento terá alta durabilidade e conforto.",
  ]

  return (
    <section id="processo-protese" className="py-20 bg-white text-black">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-6 text-lg leading-relaxed text-gray-700">
          {paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
            <h3 className="text-2xl font-semibold mb-3 flex items-center gap-2 text-gray-900">
              <CheckCircle2 className="h-5 w-5 text-blue-600" aria-hidden />
              Benefícios imediatos da prótese capilar URUS
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
          Agende uma avaliação gratuita e descubra como nossa prótese capilar em Salvador pode devolver volume, densidade e naturalidade ao seu cabelo.
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
