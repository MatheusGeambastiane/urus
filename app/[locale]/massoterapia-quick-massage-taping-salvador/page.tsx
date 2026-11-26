import { localizeStructuredData } from "@/i18n/structured-data"
import { useTranslations, useLocale } from "next-intl"
import type { Translator } from "@/i18n/types"
import { getTranslations, getLocale } from "next-intl/server"
import { localizeMetadata } from "@/i18n/metadata"
import type { Metadata } from "next"
import Image from "next/image"
import { Link } from "@/i18n/navigation"
import { ArrowRight, Check, Clock3, MapPin, MessageCircle } from "lucide-react"

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

const fallbackContent = (t: Translator) => ({
  hero: {
    title: t("Quick_Massage_e_Kinesio_Taping_em_Salvador_115"),
    subtitle: t(
      "Atendimento_rapido_alivio_imediato_e_resultados_duradouros_com_profissionais_116",
    ),
    description: t(
      "Na_URUS_Barbearia_unimos_massoterapia_express_com_taping_terapeutico_117",
    ),
    ctaLabel: t("Agendar_avaliacao_pelo_WhatsApp_118"),
    ctaHref: `https://wa.me/5571992109189?text=${encodeURIComponent(t("whatsappMassage"))}`,
  },
  quickMassage: {
    priceHighlight: t("Quick_massage_a_partir_de_R_25_119"),
    benefits: [
      {
        title: t("Alivio_imediato_para_quem_vive_na_correria_120"),
        description: t("Sessoes_de_15_a_20_minutos_para_relaxar_ombros_121"),
      },
      {
        title: t("Beneficios_comprovados_122"),
        description: t(
          "Reduz_a_tensao_muscular_melhora_a_circulacao_sanguinea_aumenta_123",
        ),
      },
      {
        title: t("Para_empresas_e_eventos_124"),
        description: t(
          "Montamos_estrutura_de_quick_massage_in_company_em_Salvador_125",
        ),
      },
    ],
  },
  taping: {
    priceHighlight: t("Taping_terapeutico_a_partir_de_R_40_126"),
    description: t(
      "Aplicamos_kinesio_taping_personalizado_para_atletas_profissionais_de_escritorio_127",
    ),
    benefits: [
      {
        title: t("Correcao_postural_e_suporte_muscular_128"),
        description: t(
          "Bandagens_estrategicas_estabilizam_musculos_e_articulacoes_melhorando_o_rendimento_129",
        ),
      },
      {
        title: t("Drenagem_linfatica_e_descompressao_130"),
        description: t(
          "O_taping_estimula_a_circulacao_linfatica_diminui_edemas_e_131",
        ),
      },
      {
        title: t("Suporte_para_quem_treina_ou_trabalha_em_pe_132"),
        description: t(
          "Ideal_para_lutadores_crossfitters_motociclistas_de_entrega_profissionais_de_133",
        ),
      },
    ],
  },
  faqs: [
    {
      question: t("Quanto_tempo_dura_uma_sessao_de_quick_massage_134"),
      answer: t("As_sessoes_variam_entre_15_e_25_minutos_conforme_135"),
    },
    {
      question: t("O_taping_doi_ou_limita_os_movimentos_136"),
      answer: t(
        "Nao_Utilizamos_bandagens_elasticas_e_hipoalergenicas_que_respeitam_sua_137",
      ),
    },
    {
      question: t("Preciso_me_preparar_para_a_massagem_ou_taping_138"),
      answer: t(
        "Basta_vestir_roupas_confortaveis_Nossa_equipe_orienta_cada_passo_139",
      ),
    },
  ],
  seoParagraphs: [
    t("Buscando_massoterapia_em_Salvador_com_atendimento_de_confianca_A_140"),
    t("A_quick_massage_e_perfeita_para_quem_precisa_aliviar_141"),
    t("O_kinesio_taping_complementa_o_tratamento_porque_atua_na_142"),
  ],
  jsonLd: "",
})

const createMassageLandingContent =
  (t: Translator) => (): MassageLandingContent => {
    try {
      const baseUrl =
        "https://urusbarbearia.com.br/massoterapia-quick-massage-taping-salvador"

      const jsonLd = JSON.stringify(
        {
          "@context": "https://schema.org",
          "@type": "Service",
          name: t("Quick_Massage_e_Kinesio_Taping_em_Salvador_115"),
          provider: {
            "@type": "HairSalon",
            name: "URUS Barbearia",
            url: "https://urusbarbearia.com.br/",
            telephone: "+55-71-9210-9189",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Rua Rio de São Pedro, 1",
              addressLocality: "Salvador",
              addressRegion: "BA",
              postalCode: "40445-000",
              addressCountry: "BR",
            },
          },
          areaServed: [
            "Salvador",
            t("Bairro_da_Graca_143"),
            "Graça",
            "Barra",
            "Vitoria",
            "Campo Grande",
            "Ondina",
            "Pituba",
          ],
          offers: [
            {
              "@type": "Offer",
              name: t("Quick_Massage_145"),
              price: "40",
              priceCurrency: "BRL",
              url: `${baseUrl}#quick-massage`,
              description: t("Sessoes_de_quick_massage_a_partir_de_R_25_146"),
            },
            {
              "@type": "Offer",
              name: "Kinesio Taping",
              price: "60",
              priceCurrency: "BRL",
              url: `${baseUrl}#taping`,
              description: t(
                "Aplicacao_de_kinesio_taping_a_partir_de_R_40_147",
              ),
            },
          ],
          serviceType: [
            t("massoterapia_31"),
            t("quick_massage_148"),
            "kinesio taping",
          ],
        },
        null,
        2,
      )

      return {
        ...fallbackContent(t),
        jsonLd,
        seoParagraphs: [
          ...fallbackContent(t).seoParagraphs,
          t("Para_quem_pesquisa_taping_em_Salvador_ou_precisa_de_150"),
        ],
      }
    } catch (error) {
      console.error(
        "Não foi possível montar o conteúdo da landing de massoterapia",
        error,
      )
      return fallbackContent(t)
    }
  }

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("site")
  const locale = await getLocale()
  return localizeMetadata(
    {
      title: t("Quick_Massage_e_Taping_em_Salvador_Massoterapia_a_partir_152"),
      description: t(
        "Quick_massage_e_taping_em_Salvador_com_atendimento_na_153",
      ),
      keywords: [
        t("quick_massage_salvador_154"),
        t("massoterapia_salvador_155"),
        t("taping_salvador_156"),
        t("kinesio_taping_graca_157"),
        t("massagem_express_salvador_158"),
        t("massagem_para_dor_nas_costas_salvador_159"),
        t("massoterapia_na_graca_160"),
      ],
      alternates: {
        canonical:
          "https://urusbarbearia.com.br/massoterapia-quick-massage-taping-salvador",
      },
      openGraph: {
        type: "article",
        url: "https://urusbarbearia.com.br/massoterapia-quick-massage-taping-salvador",
        title: t("Quick_Massage_e_Taping_em_Salvador_URUS_Barbearia_161"),
        description: t(
          "Quick_massage_e_taping_com_atendimento_na_Graca_em_162",
        ),
        locale: "pt_BR",
        siteName: "URUS Barbearia",
        images: [
          {
            url: "/urus_barbearia_espera.jpg",
            width: 1200,
            height: 630,
            alt: t("Espaco_de_massoterapia_e_taping_da_URUS_Barbearia_em_163"),
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: t("Quick_Massage_e_Taping_em_Salvador_URUS_Barbearia_161"),
        description: t(
          "Massoterapia_na_Graca_em_Salvador_com_quick_massage_e_164",
        ),
        images: ["/urus_barbearia_espera.jpg"],
      },
    },
    locale,
    "/massoterapia-quick-massage-taping-salvador",
  )
}

export default function QuickMassageTapingPage() {
  const t = useTranslations("site")
  const locale = useLocale()

  const content = createMassageLandingContent(t)()

  return (
    <div className="min-h-screen bg-[#030304] text-[#EBEBEB]">
      <Navigation />
      <main>
        <section className="relative overflow-hidden pb-20 pt-32 md:pb-28 md:pt-40">
          <div className="absolute left-0 top-24 h-80 w-80 rounded-full bg-[#F2AD1D]/10 blur-3xl" />
          <div className="urus-container relative grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="max-w-3xl">
              <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#F2AD1D]">
                {t("Massoterapia_completa_na_Graca_Salvador_BA_169")}
              </p>
              <h1 className="mt-5 font-display text-[clamp(3rem,7vw,6.5rem)] font-bold leading-[0.88]">
                {content.hero.title}
              </h1>
              <p className="mt-7 max-w-xl text-lg leading-8 text-[#EBEBEB]/70">
                {content.hero.description}
              </p>

              <div className="mt-8 grid max-w-xl gap-3 sm:grid-cols-2">
                {[content.quickMassage.priceHighlight, content.taping.priceHighlight].map(
                  (price) => (
                    <div
                      key={price}
                      className="rounded-lg border border-white/10 bg-white/[0.04] px-5 py-4 font-extrabold text-white"
                    >
                      {price}
                    </div>
                  ),
                )}
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href={content.hero.ctaHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-[#EBEBEB] px-7 font-extrabold text-[#030304] transition hover:bg-white"
                >
                  <MessageCircle className="h-4 w-4" />
                  {content.hero.ctaLabel}
                </Link>
                <Link
                  href="#localizacao"
                  className="inline-flex h-14 items-center justify-center gap-2 rounded-full border border-white/20 px-7 font-bold transition hover:border-[#F2AD1D] hover:text-[#F2AD1D]"
                >
                  <MapPin className="h-4 w-4" />
                  Rua Rio de São Pedro, 1
                </Link>
              </div>
            </div>

            <div className="relative min-h-[460px] overflow-hidden rounded-lg border border-white/10 bg-[#171717] md:min-h-[620px]">
              <Image
                src="/janice_gonçalves_massoterapeuta_urus_barbearia_salvador.jpg"
                alt={t("Massoterapeuta_239")}
                fill
                priority
                className="object-cover grayscale"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/60 to-transparent p-7 pt-28">
                <p className="font-display text-3xl font-bold text-white">
                  Janice Gonçalves
                </p>
                <p className="mt-1 text-sm font-bold uppercase tracking-[0.16em] text-[#F2AD1D]">
                  {t("Massoterapeuta_239")}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="beneficios" className="bg-[#EBEBEB] py-20 text-[#030304] md:py-28">
          <div className="urus-container">
            <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-end">
              <h2 className="font-display text-5xl font-bold leading-none md:text-7xl">
                {t("Escolha_seu_cuidado_151")}
              </h2>
              <p className="max-w-xl text-lg leading-8 text-[#030304]/65">
                {content.hero.subtitle}
              </p>
            </div>

            <div className="mt-12 grid gap-5 lg:grid-cols-2">
              {[
                {
                  id: "quick-massage",
                  title: t("Quick_Massage_145"),
                  price: content.quickMassage.priceHighlight,
                  description: t(
                    "Pensada_para_quem_trabalha_em_escritorio_atende_clientes_ou_167",
                  ),
                  benefits: content.quickMassage.benefits,
                },
                {
                  id: "taping",
                  title: t("Taping_terapeutico_para_suporte_e_performance_168"),
                  price: content.taping.priceHighlight,
                  description: content.taping.description,
                  benefits: content.taping.benefits,
                },
              ].map((service) => (
                <article
                  id={service.id}
                  key={service.id}
                  className="flex flex-col rounded-lg bg-[#030304] p-7 text-[#EBEBEB] md:p-9"
                >
                  <div className="flex items-start justify-between gap-5">
                    <h3 className="font-display text-3xl font-bold leading-tight md:text-4xl">
                      {service.title}
                    </h3>
                    <span className="whitespace-nowrap text-sm font-extrabold text-[#F2AD1D]">
                      {service.price}
                    </span>
                  </div>
                  <p className="mt-5 leading-7 text-[#EBEBEB]/65">
                    {service.description}
                  </p>
                  <ul className="mt-7 grid gap-3 border-t border-white/10 pt-6">
                    {service.benefits.map((benefit) => (
                      <li key={benefit.title} className="flex items-center gap-3 font-bold">
                        <Check className="h-4 w-4 flex-none text-[#F2AD1D]" />
                        {benefit.title}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={content.hero.ctaHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-flex items-center gap-2 font-extrabold text-[#F2AD1D] transition hover:text-white"
                  >
                    {t("Agendar_190")}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="urus-container grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#F2AD1D]">
                {t("Duvidas_rapidas_111")}
              </p>
              <h2 className="mt-4 font-display text-5xl font-bold leading-none md:text-6xl">
                {t("Perguntas_frequentes_178")}
              </h2>
              <div className="mt-8 flex items-center gap-3 text-[#EBEBEB]/65">
                <Clock3 className="h-5 w-5 text-[#F2AD1D]" />
                {t("As_sessoes_variam_entre_15_e_25_minutos_conforme_135")}
              </div>
            </div>
            <div className="divide-y divide-white/10 border-y border-white/10">
              {content.faqs.map((faq) => (
                <details key={faq.question} className="group py-6">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-lg font-extrabold text-white">
                    {faq.question}
                    <span className="text-2xl font-light text-[#F2AD1D] transition group-open:rotate-45">+</span>
                  </summary>
                  <p className="max-w-2xl pt-4 leading-7 text-[#EBEBEB]/65">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <Location />
      </main>
      <Footer />
      <WhatsAppButton />
      {content.jsonLd ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              localizeStructuredData(JSON.parse(content.jsonLd), locale),
            ),
          }}
        />
      ) : null}
    </div>
  )
}
