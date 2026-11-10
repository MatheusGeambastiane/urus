import { localizeStructuredData } from "@/i18n/structured-data"
import { useTranslations, useLocale } from "next-intl"
import type { Translator } from "@/i18n/types"
import { getTranslations, getLocale } from "next-intl/server"
import { localizeMetadata } from "@/i18n/metadata"
import type { Metadata } from "next"
import { Link } from "@/i18n/navigation"

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
              price: "25",
              priceCurrency: "BRL",
              url: `${baseUrl}#quick-massage`,
              description: t("Sessoes_de_quick_massage_a_partir_de_R_25_146"),
            },
            {
              "@type": "Offer",
              name: "Kinesio Taping",
              price: "40",
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
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800 text-white">
      <Navigation />
      <main className="pt-32 pb-20">
        <section className="container mx-auto px-4 text-center max-w-4xl">
          <span className="inline-block rounded-full border border-blue-400/60 bg-blue-500/10 px-4 py-1 text-sm font-semibold tracking-wide text-blue-200">
            {content.quickMassage.priceHighlight} •{" "}
            {content.taping.priceHighlight}
          </span>
          <h1 className="mt-6 text-4xl font-bold leading-tight text-white md:text-5xl">
            {content.hero.title}
          </h1>
          <p className="mt-4 text-lg text-gray-200 md:text-xl">
            {content.hero.subtitle}
          </p>
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
              {t("Conhecer_os_beneficios_165")}
            </Link>
          </div>
        </section>

        <section
          id="beneficios"
          className="container mx-auto mt-20 grid gap-10 px-4 md:grid-cols-2"
        >
          <article className="rounded-2xl border border-white/10 bg-white/5 p-8 shadow-xl backdrop-blur">
            <h2 className="text-2xl font-semibold text-amber-300 md:text-3xl">
              {t("Por_que_apostar_na_quick_massage_166")}
            </h2>
            <p className="mt-4 text-gray-200">
              {t(
                "Pensada_para_quem_trabalha_em_escritorio_atende_clientes_ou_167",
              )}
            </p>
            <ul className="mt-6 space-y-4 text-left text-gray-100">
              {content.quickMassage.benefits.map((benefit) => (
                <li
                  key={benefit.title}
                  className="rounded-xl border border-white/10 bg-black/30 p-4"
                >
                  <h3 className="text-lg font-semibold text-white">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-300">
                    {benefit.description}
                  </p>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-2xl border border-blue-400/30 bg-blue-500/10 p-8 shadow-xl backdrop-blur">
            <h2 className="text-2xl font-semibold text-blue-200 md:text-3xl">
              {t("Taping_terapeutico_para_suporte_e_performance_168")}
            </h2>
            <p className="mt-4 text-gray-200">{content.taping.description}</p>
            <ul className="mt-6 space-y-4 text-left text-blue-100">
              {content.taping.benefits.map((benefit) => (
                <li
                  key={benefit.title}
                  className="rounded-xl border border-blue-400/30 bg-black/30 p-4"
                >
                  <h3 className="text-lg font-semibold text-white">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-sm text-blue-100/80">
                    {benefit.description}
                  </p>
                </li>
              ))}
            </ul>
          </article>
        </section>

        <section className="container mx-auto mt-20 px-4 text-gray-200">
          <h2 className="text-center text-3xl font-semibold text-white md:text-4xl">
            {t("Massoterapia_completa_na_Graca_Salvador_BA_169")}
          </h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {content.seoParagraphs.map((paragraph, index) => (
              <p
                key={index}
                className="rounded-2xl border border-white/10 bg-black/40 p-6 text-sm leading-relaxed md:text-base"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        <section id="taping" className="container mx-auto mt-20 px-4">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 p-10 text-white shadow-2xl">
            <h2 className="text-3xl font-semibold text-amber-300 md:text-4xl">
              {t("Como_funciona_o_nosso_protocolo_de_taping_170")}
            </h2>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="text-xl font-semibold text-white">
                  {t("Avaliacao_minuciosa_171")}
                </h3>
                <p className="mt-2 text-gray-200">
                  {t(
                    "Identificamos_padroes_posturais_dores_recorrentes_e_historico_esportivo_para_172",
                  )}
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">
                  {t("Aplicacao_personalizada_71")}
                </h3>
                <p className="mt-2 text-gray-200">
                  {t(
                    "Utilizamos_bandagens_originais_hipoalergenicas_e_resistentes_ao_suor_Cada_173",
                  )}
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">
                  {t("Acompanhamento_e_orientacoes_174")}
                </h3>
                <p className="mt-2 text-gray-200">
                  {t(
                    "Recomendamos_exercicios_complementares_alongamentos_e_novos_agendamentos_para_manutencao_175",
                  )}
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">
                  {t("Resultados_rapidos_176")}
                </h3>
                <p className="mt-2 text-gray-200">
                  {t(
                    "Muitos_clientes_relatam_alivio_imediato_nas_primeiras_24_horas_177",
                  )}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto mt-20 px-4">
          <div className="rounded-3xl border border-white/15 bg-white/5 p-10 text-white shadow-xl">
            <h2 className="text-3xl font-semibold text-white md:text-4xl">
              {t("Perguntas_frequentes_178")}
            </h2>
            <div className="mt-8 space-y-6">
              {content.faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="rounded-2xl border border-white/10 bg-black/40 p-6"
                >
                  <h3 className="text-lg font-semibold text-amber-200">
                    {faq.question}
                  </h3>
                  <p className="mt-2 text-sm text-gray-200">{faq.answer}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 flex flex-col items-start gap-4 rounded-2xl border border-blue-400/40 bg-blue-500/10 p-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-xl font-semibold text-blue-100">
                  {t("Pronto_para_cuidar_do_corpo_hoje_179")}
                </h3>
                <p className="mt-2 text-sm text-blue-100/80">
                  {t("Agende_sua_quick_massage_ou_sessao_de_taping_agora_180")}
                </p>
              </div>
              <Link
                href={content.hero.ctaHref}
                className="rounded-md bg-gradient-to-r from-amber-400 to-amber-500 px-6 py-3 text-base font-semibold text-black transition hover:from-amber-300 hover:to-amber-400"
              >
                {t("Falar_com_especialista_181")}
              </Link>
            </div>
          </div>
        </section>

        <section id="localizacao" className="container mx-auto mt-20 px-4">
          <div className="rounded-3xl border border-white/10 bg-black/40 p-8 text-white shadow-xl">
            <h2 className="text-3xl font-semibold text-white md:text-4xl">
              {t("Estamos_na_Graca_Salvador_182")}
            </h2>
            <p className="mt-3 text-gray-200">
              {t("Facil_acesso_pela_Avenida_Fernandes_da_Cunha_proximo_a_183")}
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
