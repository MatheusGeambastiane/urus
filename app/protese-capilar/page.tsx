import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import Script from "next/script"
import {
  ArrowRight,
  Check,
  Clock3,
  Droplets,
  Scissors,
  ShieldCheck,
  Sparkles,
} from "lucide-react"

import Navigation from "@/components/Navigation"
import Footer from "@/components/sections/Footer"
import WhatsAppButton from "@/components/WhatsAppButton"
import { Button } from "@/components/ui/button"
import { HAIR_PROSTHESIS_BOOKING_URL } from "@/lib/urls"

const price = "R$ 1.800"

const benefits = [
  "Linha frontal natural",
  "Aplicação personalizada",
  "Orientação de cuidados",
]

const steps = [
  {
    number: "01",
    title: "Avaliação",
    text: "Entendemos sua rotina, área e resultado desejado.",
  },
  {
    number: "02",
    title: "Aplicação",
    text: "Ajuste, corte e acabamento feitos para o seu rosto.",
  },
  {
    number: "03",
    title: "Manutenção",
    text: "Retornos programados para limpeza e nova fixação.",
  },
]

const faqs = [
  {
    question: "Quanto tempo dura a aplicação?",
    answer: "A aplicação completa leva cerca de 2h30.",
  },
  {
    question: "Posso praticar esporte e ir à praia?",
    answer: "Sim. A equipe orienta os cuidados ideais para suor, praia e piscina.",
  },
  {
    question: "Quando devo fazer manutenção?",
    answer: "Em geral, a cada 15 dias, conforme sua rotina e fixação.",
  },
]

export const metadata: Metadata = {
  title: "Prótese capilar em Salvador | Aplicação na URUS",
  description:
    "Prótese capilar em Salvador a partir de R$ 1.800. Aplicação personalizada, acabamento natural e manutenção especializada na URUS Barbearia.",
  keywords: [
    "prótese capilar em Salvador",
    "aplicação de prótese capilar",
    "prótese capilar masculina",
    "manutenção de prótese capilar Salvador",
  ],
  alternates: {
    canonical: "https://urusbarbearia.com.br/protese-capilar",
  },
  openGraph: {
    title: "Prótese capilar em Salvador | URUS Barbearia",
    description: "Aplicação personalizada com acabamento natural a partir de R$ 1.800.",
    url: "https://urusbarbearia.com.br/protese-capilar",
    type: "website",
    locale: "pt_BR",
    siteName: "URUS Barbearia",
    images: [
      {
        url: "https://urusbarbearia.com.br/urus_protese_capilar_pagina.png",
        width: 1536,
        height: 1024,
        alt: "Prótese capilar com acabamento natural na URUS Barbearia",
      },
    ],
  },
}

function BookingButton({ label = "Agendar aplicação" }: { label?: string }) {
  return (
    <Button
      asChild
      className="h-14 rounded-full bg-[#F2AD1D] px-7 text-sm font-extrabold text-[#080706] shadow-[0_18px_50px_rgba(242,173,29,0.2)] transition hover:bg-[#ffc34a]"
    >
      <Link href={HAIR_PROSTHESIS_BOOKING_URL} target="_blank" rel="noopener noreferrer">
        {label}
        <ArrowRight className="h-4 w-4" />
      </Link>
    </Button>
  )
}

function Hero() {
  return (
    <section className="relative min-h-[760px] overflow-hidden bg-[#030304] pt-24 text-[#EBEBEB] lg:min-h-screen">
      <Image
        src="/urus_protese_capilar_pagina.png"
        alt="Homem com prótese capilar de acabamento natural"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[66%_center] opacity-75 lg:object-center"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#030304_2%,rgba(3,3,4,0.96)_32%,rgba(3,3,4,0.28)_66%,rgba(3,3,4,0.18)),linear-gradient(0deg,#030304_0%,transparent_42%)]" />
      <div className="absolute left-[8%] top-[18%] hidden h-40 w-px bg-gradient-to-b from-[#F2AD1D] to-transparent lg:block" />

      <div className="urus-container relative flex min-h-[680px] items-end pb-12 pt-20 sm:items-center sm:pb-20 lg:min-h-[calc(100vh-6rem)]">
        <div className="max-w-xl">
          <p className="mb-5 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.28em] text-[#F2AD1D]">
            <span className="h-px w-8 bg-[#F2AD1D]" />
            Prótese capilar · Salvador
          </p>
          <h1 className="font-display text-[clamp(3.2rem,7.5vw,6.8rem)] font-semibold leading-[0.84] tracking-[-0.035em] text-white">
            Seu cabelo.
            <span className="block italic text-[#F2AD1D]">Seu estilo.</span>
          </h1>
          <p className="mt-6 max-w-md text-base leading-7 text-[#EBEBEB]/72 sm:text-lg">
            Aplicação personalizada, discreta e com acabamento natural.
          </p>

          <div className="mt-8 flex flex-col gap-5 border-l border-white/15 pl-5 sm:flex-row sm:items-center sm:border-l-0 sm:pl-0">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/45">A partir de</p>
              <p className="mt-1 font-display text-4xl font-semibold text-white">{price}</p>
            </div>
            <BookingButton />
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-xs font-semibold text-white/62">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex items-center gap-2">
                <Check className="h-3.5 w-3.5 text-[#F2AD1D]" />
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

function ProofStrip() {
  return (
    <section className="border-y border-white/10 bg-[#0a0a0b] text-[#EBEBEB]">
      <div className="urus-container grid grid-cols-3 divide-x divide-white/10 py-6">
        {[
          [Clock3, "2h30", "Aplicação"],
          [ShieldCheck, "Natural", "Acabamento"],
          [Droplets, "15 dias", "Manutenção"],
        ].map(([Icon, value, label]) => (
          <div key={String(label)} className="flex flex-col items-center px-2 text-center sm:flex-row sm:justify-center sm:gap-3">
            <Icon className="mb-2 h-5 w-5 text-[#F2AD1D] sm:mb-0" />
            <div>
              <strong className="block text-sm font-extrabold text-white sm:text-base">{String(value)}</strong>
              <span className="text-[10px] uppercase tracking-[0.14em] text-white/40">{String(label)}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function Process() {
  return (
    <section className="bg-[#030304] py-20 text-[#EBEBEB] md:py-28">
      <div className="urus-container">
        <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#F2AD1D]">Como funciona</p>
            <h2 className="mt-4 max-w-md font-display text-5xl font-semibold leading-[0.95] text-white md:text-6xl">
              Três etapas. Um resultado só seu.
            </h2>
          </div>

          <ol className="divide-y divide-white/10 border-y border-white/10">
            {steps.map((step) => (
              <li key={step.number} className="group grid gap-3 py-7 sm:grid-cols-[64px_1fr] sm:items-start md:py-9">
                <span className="font-display text-3xl font-semibold text-[#F2AD1D]/55 transition group-hover:text-[#F2AD1D]">
                  {step.number}
                </span>
                <div>
                  <h3 className="text-xl font-extrabold text-white md:text-2xl">{step.title}</h3>
                  <p className="mt-2 max-w-lg text-sm leading-6 text-white/52 md:text-base">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}

function PricePanel() {
  return (
    <section className="bg-[#EBEBEB] py-16 text-[#09090a] md:py-24">
      <div className="urus-container overflow-hidden rounded-[2rem] bg-[#111112] text-white shadow-[0_30px_90px_rgba(0,0,0,0.18)]">
        <div className="grid lg:grid-cols-[1fr_0.75fr]">
          <div className="p-7 sm:p-10 lg:p-14">
            <Sparkles className="h-6 w-6 text-[#F2AD1D]" />
            <h2 className="mt-6 max-w-xl font-display text-4xl font-semibold leading-none sm:text-5xl">
              Pronto para mudar o visual?
            </h2>
            <p className="mt-4 max-w-md text-sm leading-6 text-white/55">
              Escolha agora a melhor data para sua aplicação.
            </p>
            <div className="mt-8">
              <BookingButton label="Escolher data e horário" />
            </div>
          </div>
          <div className="relative flex min-h-64 flex-col justify-end overflow-hidden bg-[#F2AD1D] p-8 text-[#080706] sm:p-10 lg:p-12">
            <Scissors className="absolute -right-8 -top-8 h-48 w-48 rotate-[-18deg] opacity-10" />
            <p className="text-[10px] font-extrabold uppercase tracking-[0.22em] opacity-60">Aplicação completa</p>
            <strong className="mt-2 font-display text-6xl font-semibold leading-none sm:text-7xl">{price}</strong>
            <p className="mt-4 max-w-xs text-sm font-semibold opacity-65">Avaliação, adaptação, corte e acabamento.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function Questions() {
  return (
    <section className="bg-[#030304] py-20 text-[#EBEBEB]">
      <div className="urus-container grid gap-10 lg:grid-cols-[0.65fr_1.35fr]">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#F2AD1D]">Dúvidas rápidas</p>
          <h2 className="mt-4 font-display text-4xl font-semibold text-white">Antes de agendar</h2>
        </div>
        <div className="divide-y divide-white/10 border-y border-white/10">
          {faqs.map((faq) => (
            <details key={faq.question} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-white marker:hidden">
                {faq.question}
                <span className="text-2xl font-light text-[#F2AD1D] transition group-open:rotate-45">+</span>
              </summary>
              <p className="max-w-xl pb-2 pt-3 text-sm leading-6 text-white/52">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function HairProsthesisPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Aplicação de prótese capilar",
    description: "Aplicação personalizada de prótese capilar com acabamento natural na URUS Barbearia.",
    provider: {
      "@type": "HairSalon",
      name: "URUS Barbearia",
      telephone: "+55-71-99210-9189",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Rua Rio de São Pedro, 1",
        addressLocality: "Salvador",
        addressRegion: "BA",
        addressCountry: "BR",
      },
    },
    offers: {
      "@type": "Offer",
      price: "1800.00",
      priceCurrency: "BRL",
      url: HAIR_PROSTHESIS_BOOKING_URL,
      availability: "https://schema.org/InStock",
    },
  }

  return (
    <div className="min-h-screen bg-[#030304]">
      <Navigation />
      <main>
        <Hero />
        <ProofStrip />
        <Process />
        <PricePanel />
        <Questions />
      </main>
      <Footer />
      <WhatsAppButton />
      <Script type="application/ld+json" id="hair-prosthesis-structured-data">
        {JSON.stringify(structuredData)}
      </Script>
    </div>
  )
}
