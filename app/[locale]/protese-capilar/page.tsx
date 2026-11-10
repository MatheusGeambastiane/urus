import { useTranslations } from "next-intl"
import type { Translator } from "@/i18n/types"
import { getTranslations, getLocale } from "next-intl/server"
import { localizeMetadata } from "@/i18n/metadata"
import type { Metadata } from "next"
import Image from "next/image"
import { Link } from "@/i18n/navigation"
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

const price = (t: Translator) => t("R_1_800_69")

const benefits = (t: Translator) => [
  t("Linha_frontal_natural_70"),
  t("Aplicacao_personalizada_71"),
  t("Orientacao_de_cuidados_72"),
]

const steps = (t: Translator) => [
  {
    number: "01",
    title: t("Avaliacao_73"),
    text: t("Entendemos_sua_rotina_area_e_resultado_desejado_74"),
  },
  {
    number: "02",
    title: t("Aplicacao_75"),
    text: t("Ajuste_corte_e_acabamento_feitos_para_o_seu_rosto_76"),
  },
  {
    number: "03",
    title: t("Manutencao_77"),
    text: t("Retornos_programados_para_limpeza_e_nova_fixacao_78"),
  },
]

const faqs = (t: Translator) => [
  {
    question: t("Quanto_tempo_dura_a_aplicacao_79"),
    answer: t("A_aplicacao_completa_leva_cerca_de_2h30_80"),
  },
  {
    question: t("Posso_praticar_esporte_e_ir_a_praia_81"),
    answer: t("Sim_A_equipe_orienta_os_cuidados_ideais_para_suor_82"),
  },
  {
    question: t("Quando_devo_fazer_manutencao_83"),
    answer: t("Em_geral_a_cada_15_dias_conforme_sua_rotina_84"),
  },
]

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("site")
  const locale = await getLocale()
  return localizeMetadata(
    {
      title: t("Protese_capilar_em_Salvador_Aplicacao_na_URUS_85"),
      description: t("Protese_capilar_em_Salvador_a_partir_de_R_1_86"),
      keywords: [
        t("protese_capilar_em_Salvador_87"),
        t("aplicacao_de_protese_capilar_88"),
        t("protese_capilar_masculina_89"),
        t("manutencao_de_protese_capilar_Salvador_90"),
      ],
      alternates: {
        canonical: "https://urusbarbearia.com.br/protese-capilar",
      },
      openGraph: {
        title: t("Protese_capilar_em_Salvador_URUS_Barbearia_91"),
        description: t(
          "Aplicacao_personalizada_com_acabamento_natural_a_partir_de_R_92",
        ),
        url: "https://urusbarbearia.com.br/protese-capilar",
        type: "website",
        locale: "pt_BR",
        siteName: "URUS Barbearia",
        images: [
          {
            url: "https://urusbarbearia.com.br/urus_protese_capilar_pagina.png",
            width: 1536,
            height: 1024,
            alt: t(
              "Protese_capilar_com_acabamento_natural_na_URUS_Barbearia_93",
            ),
          },
        ],
      },
    },
    locale,
    "/protese-capilar",
  )
}

function BookingButton({ label }: { label?: string }) {
  const t = useTranslations("site")

  return (
    <Button
      asChild
      className="h-14 rounded-full bg-[#F2AD1D] px-7 text-sm font-extrabold text-[#080706] shadow-[0_18px_50px_rgba(242,173,29,0.2)] transition hover:bg-[#ffc34a]"
    >
      <Link
        href={HAIR_PROSTHESIS_BOOKING_URL}
        target="_blank"
        rel="noopener noreferrer"
      >
        {label ?? t("Agendar_aplicacao_94")}
        <ArrowRight className="h-4 w-4" />
      </Link>
    </Button>
  )
}

function Hero() {
  const t = useTranslations("site")

  return (
    <section className="relative min-h-[760px] overflow-hidden bg-[#030304] pt-24 text-[#EBEBEB] lg:min-h-screen">
      <Image
        src="/urus_protese_capilar_pagina.png"
        alt={t("Homem_com_protese_capilar_de_acabamento_natural_95")}
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
            {t("Protese_capilar_Salvador_96")}
          </p>
          <h1 className="font-display text-[clamp(3.2rem,7.5vw,6.8rem)] font-semibold leading-[0.84] tracking-[-0.035em] text-white">
            {t("Seu_cabelo_97")}
            <span className="block italic text-[#F2AD1D]">
              {t("Seu_estilo_98")}
            </span>
          </h1>
          <p className="mt-6 max-w-md text-base leading-7 text-[#EBEBEB]/72 sm:text-lg">
            {t("Aplicacao_personalizada_discreta_e_com_acabamento_natural_99")}
          </p>

          <div className="mt-8 flex flex-col gap-5 border-l border-white/15 pl-5 sm:flex-row sm:items-center sm:border-l-0 sm:pl-0">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/45">
                {t("A_partir_de_100")}
              </p>
              <p className="mt-1 font-display text-4xl font-semibold text-white">
                {price(t)}
              </p>
            </div>
            <BookingButton />
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-xs font-semibold text-white/62">
            {benefits(t).map((benefit) => (
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
  const t = useTranslations("site")

  return (
    <section className="border-y border-white/10 bg-[#0a0a0b] text-[#EBEBEB]">
      <div className="urus-container grid grid-cols-3 divide-x divide-white/10 py-6">
        {[
          [Clock3, "2h30", t("Aplicacao_75")],
          [ShieldCheck, t("Natural_101"), t("Acabamento_102")],
          [Droplets, t("15_dias_103"), t("Manutencao_77")],
        ].map(([Icon, value, label]) => (
          <div
            key={String(label)}
            className="flex flex-col items-center px-2 text-center sm:flex-row sm:justify-center sm:gap-3"
          >
            <Icon className="mb-2 h-5 w-5 text-[#F2AD1D] sm:mb-0" />
            <div>
              <strong className="block text-sm font-extrabold text-white sm:text-base">
                {String(value)}
              </strong>
              <span className="text-[10px] uppercase tracking-[0.14em] text-white/40">
                {String(label)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function Process() {
  const t = useTranslations("site")

  return (
    <section className="bg-[#030304] py-20 text-[#EBEBEB] md:py-28">
      <div className="urus-container">
        <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#F2AD1D]">
              {t("Como_funciona_104")}
            </p>
            <h2 className="mt-4 max-w-md font-display text-5xl font-semibold leading-[0.95] text-white md:text-6xl">
              {t("Tres_etapas_Um_resultado_so_seu_105")}
            </h2>
          </div>

          <ol className="divide-y divide-white/10 border-y border-white/10">
            {steps(t).map((step) => (
              <li
                key={step.number}
                className="group grid gap-3 py-7 sm:grid-cols-[64px_1fr] sm:items-start md:py-9"
              >
                <span className="font-display text-3xl font-semibold text-[#F2AD1D]/55 transition group-hover:text-[#F2AD1D]">
                  {step.number}
                </span>
                <div>
                  <h3 className="text-xl font-extrabold text-white md:text-2xl">
                    {step.title}
                  </h3>
                  <p className="mt-2 max-w-lg text-sm leading-6 text-white/52 md:text-base">
                    {step.text}
                  </p>
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
  const t = useTranslations("site")

  return (
    <section className="bg-[#EBEBEB] py-16 text-[#09090a] md:py-24">
      <div className="urus-container overflow-hidden rounded-[2rem] bg-[#111112] text-white shadow-[0_30px_90px_rgba(0,0,0,0.18)]">
        <div className="grid lg:grid-cols-[1fr_0.75fr]">
          <div className="p-7 sm:p-10 lg:p-14">
            <Sparkles className="h-6 w-6 text-[#F2AD1D]" />
            <h2 className="mt-6 max-w-xl font-display text-4xl font-semibold leading-none sm:text-5xl">
              {t("Pronto_para_mudar_o_visual_106")}
            </h2>
            <p className="mt-4 max-w-md text-sm leading-6 text-white/55">
              {t("Escolha_agora_a_melhor_data_para_sua_aplicacao_107")}
            </p>
            <div className="mt-8">
              <BookingButton label={t("Escolher_data_e_horario_108")} />
            </div>
          </div>
          <div className="relative flex min-h-64 flex-col justify-end overflow-hidden bg-[#F2AD1D] p-8 text-[#080706] sm:p-10 lg:p-12">
            <Scissors className="absolute -right-8 -top-8 h-48 w-48 rotate-[-18deg] opacity-10" />
            <p className="text-[10px] font-extrabold uppercase tracking-[0.22em] opacity-60">
              {t("Aplicacao_completa_109")}
            </p>
            <strong className="mt-2 font-display text-6xl font-semibold leading-none sm:text-7xl">
              {price(t)}
            </strong>
            <p className="mt-4 max-w-xs text-sm font-semibold opacity-65">
              {t("Avaliacao_adaptacao_corte_e_acabamento_110")}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function Questions() {
  const t = useTranslations("site")

  return (
    <section className="bg-[#030304] py-20 text-[#EBEBEB]">
      <div className="urus-container grid gap-10 lg:grid-cols-[0.65fr_1.35fr]">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#F2AD1D]">
            {t("Duvidas_rapidas_111")}
          </p>
          <h2 className="mt-4 font-display text-4xl font-semibold text-white">
            {t("Antes_de_agendar_112")}
          </h2>
        </div>
        <div className="divide-y divide-white/10 border-y border-white/10">
          {faqs(t).map((faq) => (
            <details key={faq.question} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-white marker:hidden">
                {faq.question}
                <span className="text-2xl font-light text-[#F2AD1D] transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="max-w-xl pb-2 pt-3 text-sm leading-6 text-white/52">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function HairProsthesisPage() {
  const t = useTranslations("site")

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: t("Aplicacao_de_protese_capilar_113"),
    description: t(
      "Aplicacao_personalizada_de_protese_capilar_com_acabamento_natural_na_114",
    ),
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
