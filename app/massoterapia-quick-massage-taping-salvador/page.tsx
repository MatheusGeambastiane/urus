import type { Metadata } from "next"
import Link from "next/link"

import Navigation from "@/components/Navigation"
import Footer from "@/components/sections/Footer"
import Location from "@/components/sections/Location"
import WhatsAppButton from "@/components/WhatsAppButton"

type MassageLandingContent = {
  hero: {
    title: string
    subtitle: string
    description: string
    ctaLabel: string
    ctaHref: string
  }
  quickMassage: {
    priceHighlight: string
    benefits: Array<{ title: string; description: string }>
  }
  taping: {
    priceHighlight: string
    description: string
    benefits: Array<{ title: string; description: string }>
  }
  faqs: Array<{ question: string; answer: string }>
  seoParagraphs: string[]
  jsonLd: string
}

const fallbackContent: MassageLandingContent = {
  hero: {
    title: "Quick Massage e Kinesio Taping em Salvador",
    subtitle:
      "Atendimento rápido, alívio imediato e resultados duradouros com profissionais certificados na Graça.",
    description:
      "Na URUS Barbearia, unimos massoterapia express com taping terapêutico para cuidar da sua postura, dores musculares e stress no coração de Salvador.",
    ctaLabel: "Agendar avaliação pelo WhatsApp",
    ctaHref: "https://wa.me/557192109189?text=Quero%20agendar%20uma%20quick%20massage%20na%20URUS",
  },
  quickMassage: {
    priceHighlight: "Quick massage a partir de R$ 25",
    benefits: [
      {
        title: "Alívio imediato para quem vive na correria",
        description:
          "Sessões de 15 a 20 minutos para relaxar ombros, pescoço e lombar com técnicas de massoterapia reconhecidas.",
      },
      {
        title: "Benefícios comprovados",
        description:
          "Reduz a tensão muscular, melhora a circulação sanguínea, aumenta a disposição e auxilia no foco para continuar o dia.",
      },
      {
        title: "Para empresas e eventos",
        description:
          "Montamos estrutura de quick massage in company em Salvador para valorizar equipes e clientes.",
      },
    ],
  },
  taping: {
    priceHighlight: "Taping terapêutico a partir de R$ 40",
    description:
      "Aplicamos kinesio taping personalizado para atletas, profissionais de escritório e pessoas em reabilitação. O método auxilia no alinhamento corporal, previne lesões e acelera a recuperação.",
    benefits: [
      {
        title: "Correção postural e suporte muscular",
        description:
          "Bandagens estratégicas estabilizam músculos e articulações, melhorando o rendimento e reduzindo dores crônicas.",
      },
      {
        title: "Drenagem linfática e descompressão",
        description:
          "O taping estimula a circulação linfática, diminui edemas e melhora a oxigenação local.",
      },
      {
        title: "Suporte para quem treina ou trabalha em pé",
        description:
          "Ideal para lutadores, crossfitters, motociclistas de entrega, profissionais de saúde e pessoas que precisam de sustentação extra ao longo do expediente.",
      },
    ],
  },
  faqs: [
    {
      question: "Quanto tempo dura uma sessão de quick massage?",
      answer:
        "As sessões variam entre 15 e 25 minutos, conforme a necessidade. É o tempo ideal para relaxar sem comprometer sua agenda.",
    },
    {
      question: "O taping dói ou limita os movimentos?",
      answer:
        "Não. Utilizamos bandagens elásticas e hipoalergênicas que respeitam sua mobilidade natural enquanto oferecem suporte muscular.",
    },
    {
      question: "Preciso me preparar para a massagem ou taping?",
      answer:
        "Basta vestir roupas confortáveis. Nossa equipe orienta cada passo e monta o protocolo de forma personalizada.",
    },
  ],
  seoParagraphs: [
    "Buscando massoterapia em Salvador com atendimento de confiança? A URUS Barbearia reúne quick massage, massagem relaxante e taping terapêutico na Graça para você cuidar do corpo com praticidade.",
    "A quick massage é perfeita para quem precisa aliviar dores no pescoço, ombros e coluna rapidamente. Com técnicas de shiatsu e massoterapia, focamos nos principais pontos de tensão, devolvendo energia para o seu dia.",
    "O kinesio taping complementa o tratamento porque atua na estabilização muscular, corrige postura e acelera a recuperação de lesões esportivas.",
  ],
  jsonLd: "",
}

const createMassageLandingContent = (): MassageLandingContent => {
  try {
    const baseUrl = "https://urusbarbearia.com.br/massoterapia-quick-massage-taping-salvador"

    const jsonLd = JSON.stringify(
      {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Quick Massage e Kinesio Taping em Salvador",
        provider: {
          "@type": "HairSalon",
          name: "URUS Barbearia",
          url: "https://urusbarbearia.com.br/",
          telephone: "+55-71-9210-9189",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Rua Rio de São Pedro, 2",
            addressLocality: "Salvador",
            addressRegion: "BA",
            postalCode: "40445-000",
            addressCountry: "BR",
          },
        },
        areaServed: ["Salvador", "Bairro da Graça", "Graça", "Bonfim", "Ribeira"],
        offers: [
          {
            "@type": "Offer",
            name: "Quick Massage",
            price: "25",
            priceCurrency: "BRL",
            url: `${baseUrl}#quick-massage`,
            description: "Sessões de quick massage a partir de R$ 25 com massoterapeutas certificados em Salvador.",
          },
          {
            "@type": "Offer",
            name: "Kinesio Taping",
            price: "40",
            priceCurrency: "BRL",
            url: `${baseUrl}#taping`,
            description: "Aplicação de kinesio taping a partir de R$ 40 para correção postural e suporte muscular.",
          },
        ],
        serviceType: ["massoterapia", "quick massage", "kinesio taping"],
      },
      null,
      2,
    )

    return {
      ...fallbackContent,
      jsonLd,
      seoParagraphs: [
        ...fallbackContent.seoParagraphs,
        "Para quem pesquisa taping em Salvador ou precisa de massoterapia especializada, oferecemos avaliações personalizadas, orientações de autocuidado e planos de sessões contínuas para potencializar o bem-estar.",
      ],
    }
  } catch (error) {
    console.error("Não foi possível montar o conteúdo da landing de massoterapia", error)
    return fallbackContent
  }
}

export const metadata: Metadata = {
  title: "Quick Massage e Taping em Salvador | Massoterapia a partir de R$ 25 | URUS",
  description:
    "Quick massage e taping na URUS Barbearia na Graça, Salvador-BA. Atendimento na melhor barbearia de Salvador para quem busca barbearia na Barra e barbearia em Salvador.",
  keywords: [
    "quick massage salvador",
    "massoterapia salvador",
    "taping salvador",
    "kinesio taping graça",
    "massagem express salvador",
    "massagem para dor nas costas salvador",
    "massoterapia na graça",
    "barbearia na Graça",
    "melhor barbearia de Salvador",
    "barbearia na Barra",
    "barbearia em Salvador",
  ],
  alternates: {
    canonical: "https://urusbarbearia.com.br/massoterapia-quick-massage-taping-salvador",
  },
  openGraph: {
    type: "article",
    url: "https://urusbarbearia.com.br/massoterapia-quick-massage-taping-salvador",
    title: "Quick Massage e Taping em Salvador | URUS Barbearia",
    description:
      "Quick massage e taping na URUS Barbearia na Graça. Atendimento da melhor barbearia de Salvador para quem busca barbearia na Barra e barbearia em Salvador.",
    locale: "pt_BR",
    siteName: "URUS Barbearia",
    images: [
      {
        url: "/barbearia_fachada.jpg",
        width: 1200,
        height: 630,
        alt: "Espaço de massoterapia e taping da URUS Barbearia em Salvador",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Quick Massage e Taping em Salvador | URUS Barbearia",
    description: "Massoterapia na Graça, Salvador. Atendimento da melhor barbearia de Salvador e para quem busca barbearia na Barra.",
    images: ["/barbearia_fachada.jpg"],
  },
}

export default function QuickMassageTapingPage() {
  const content = createMassageLandingContent()

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800 text-white">
      <Navigation />
      <main className="pt-32 pb-20">
        <section className="container mx-auto px-4 text-center max-w-4xl">
          <span className="inline-block rounded-full border border-blue-400/60 bg-blue-500/10 px-4 py-1 text-sm font-semibold tracking-wide text-blue-200">
            {content.quickMassage.priceHighlight} • {content.taping.priceHighlight}
          </span>
          <h1 className="mt-6 text-4xl font-bold leading-tight text-white md:text-5xl">
            {content.hero.title}
          </h1>
          <p className="mt-4 text-lg text-gray-200 md:text-xl">{content.hero.subtitle}</p>
          <p className="mt-6 text-gray-300">{content.hero.description}</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href={content.hero.ctaHref}
              className="rounded-md bg-gradient-to-r from-blue-500 to-blue-700 px-8 py-3 text-base font-semibold text-white transition hover:from-blue-600 hover:to-blue-800"
            >
              {content.hero.ctaLabel}
            </Link>
            <Link
              href="#beneficios"
              className="rounded-md border border-white/40 px-8 py-3 text-base font-semibold text-white transition hover:border-white hover:text-amber-300"
            >
              Conhecer os benefícios
            </Link>
          </div>
        </section>

        <section id="beneficios" className="container mx-auto mt-20 grid gap-10 px-4 md:grid-cols-2">
          <article className="rounded-2xl border border-white/10 bg-white/5 p-8 shadow-xl backdrop-blur">
            <h2 className="text-2xl font-semibold text-amber-300 md:text-3xl">Por que apostar na quick massage?</h2>
            <p className="mt-4 text-gray-200">
              Pensada para quem trabalha em escritório, atende clientes ou passa muitas horas na rua, a quick massage traz alívio imediato
              sem interromper a rotina. Nossa equipe combina manobras de massoterapia relaxante e shiatsu para resultados expressivos.
            </p>
            <ul className="mt-6 space-y-4 text-left text-gray-100">
              {content.quickMassage.benefits.map((benefit) => (
                <li key={benefit.title} className="rounded-xl border border-white/10 bg-black/30 p-4">
                  <h3 className="text-lg font-semibold text-white">{benefit.title}</h3>
                  <p className="mt-2 text-sm text-gray-300">{benefit.description}</p>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-2xl border border-blue-400/30 bg-blue-500/10 p-8 shadow-xl backdrop-blur">
            <h2 className="text-2xl font-semibold text-blue-200 md:text-3xl">Taping terapêutico para suporte e performance</h2>
            <p className="mt-4 text-gray-200">{content.taping.description}</p>
            <ul className="mt-6 space-y-4 text-left text-blue-100">
              {content.taping.benefits.map((benefit) => (
                <li key={benefit.title} className="rounded-xl border border-blue-400/30 bg-black/30 p-4">
                  <h3 className="text-lg font-semibold text-white">{benefit.title}</h3>
                  <p className="mt-2 text-sm text-blue-100/80">{benefit.description}</p>
                </li>
              ))}
            </ul>
          </article>
        </section>

        <section className="container mx-auto mt-20 px-4 text-gray-200">
          <h2 className="text-center text-3xl font-semibold text-white md:text-4xl">
            Massoterapia completa na Graça, Salvador-BA
          </h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {content.seoParagraphs.map((paragraph, index) => (
              <p key={index} className="rounded-2xl border border-white/10 bg-black/40 p-6 text-sm leading-relaxed md:text-base">
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        <section id="taping" className="container mx-auto mt-20 px-4">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 p-10 text-white shadow-2xl">
            <h2 className="text-3xl font-semibold text-amber-300 md:text-4xl">Como funciona o nosso protocolo de taping?</h2>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="text-xl font-semibold text-white">Avaliação minuciosa</h3>
                <p className="mt-2 text-gray-200">
                  Identificamos padrões posturais, dores recorrentes e histórico esportivo para posicionar as bandagens de forma estratégica.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">Aplicação personalizada</h3>
                <p className="mt-2 text-gray-200">
                  Utilizamos bandagens originais, hipoalergênicas e resistentes ao suor. Cada aplicação respeita sua mobilidade e rotina.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">Acompanhamento e orientações</h3>
                <p className="mt-2 text-gray-200">
                  Recomendamos exercícios complementares, alongamentos e novos agendamentos para manutenção do suporte.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">Resultados rápidos</h3>
                <p className="mt-2 text-gray-200">
                  Muitos clientes relatam alívio imediato nas primeiras 24 horas, principalmente em dores lombares, joelhos e ombros.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto mt-20 px-4">
          <div className="rounded-3xl border border-white/15 bg-white/5 p-10 text-white shadow-xl">
            <h2 className="text-3xl font-semibold text-white md:text-4xl">Perguntas frequentes</h2>
            <div className="mt-8 space-y-6">
              {content.faqs.map((faq) => (
                <div key={faq.question} className="rounded-2xl border border-white/10 bg-black/40 p-6">
                  <h3 className="text-lg font-semibold text-amber-200">{faq.question}</h3>
                  <p className="mt-2 text-sm text-gray-200">{faq.answer}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 flex flex-col items-start gap-4 rounded-2xl border border-blue-400/40 bg-blue-500/10 p-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-xl font-semibold text-blue-100">Pronto para cuidar do corpo hoje?</h3>
                <p className="mt-2 text-sm text-blue-100/80">
                  Agende sua quick massage ou sessão de taping agora mesmo e tenha atendimento humanizado em Salvador.
                </p>
              </div>
              <Link
                href={content.hero.ctaHref}
                className="rounded-md bg-gradient-to-r from-amber-400 to-amber-500 px-6 py-3 text-base font-semibold text-black transition hover:from-amber-300 hover:to-amber-400"
              >
                Falar com especialista
              </Link>
            </div>
          </div>
        </section>

        <section id="localizacao" className="container mx-auto mt-20 px-4">
          <div className="rounded-3xl border border-white/10 bg-black/40 p-8 text-white shadow-xl">
            <h2 className="text-3xl font-semibold text-white md:text-4xl">Estamos na Graça, Salvador</h2>
            <p className="mt-3 text-gray-200">
              Fácil acesso pela Avenida Fernandes da Cunha, próximo à Baixa do Bonfim e à Ribeira. Entre em contato para combinar horários especiais ou atendimento in company.
            </p>
            <div className="mt-8">
              <Location />
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
      {content.jsonLd ? (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: content.jsonLd }} />
      ) : null}
    </div>
  )
}
