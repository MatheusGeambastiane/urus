import { useTranslations } from "next-intl"
import type { Translator } from "@/i18n/types"
import Script from "next/script"

const faqs = (t: Translator) => [
  {
    question: t("Onde_fica_a_URUS_Barbearia_na_Graca_260"),
    answer: t("A_URUS_Barbearia_fica_na_Rua_Rio_de_Sao_261"),
  },
  {
    question: t("Quais_servicos_encontro_na_URUS_Barbearia_em_Salvador_262"),
    answer: t(
      "A_unidade_oferece_corte_barba_combos_protese_capilar_massoterapia_263",
    ),
  },
  {
    question: t("O_atendimento_so_e_por_hora_marcada_264"),
    answer: t("Nao_O_atendimento_pode_ser_feito_tanto_por_hora_265"),
  },
  {
    question: t("Como_agendar_horario_na_barbearia_266"),
    answer: t("O_agendamento_pode_ser_feito_online_ou_pelo_WhatsApp_267"),
  },
]

export default function LocalSeoFaq() {
  const t = useTranslations("site")

  return (
    <section
      id="faq-local"
      className="bg-[#030304] py-20 text-[#EBEBEB] md:py-28"
    >
      <div className="urus-container">
        <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-end">
          <div>
            <h2 className="mt-4 font-display text-5xl font-bold leading-none md:text-7xl">
              {t("Antes_de_agendar_268")}
            </h2>
          </div>
          <p className="text-lg leading-8 text-[#EBEBEB]/70">
            {t("Este_bloco_ajuda_quem_pesquisa_por_barbearia_na_Graca_269")}
          </p>
        </div>

        <div className="mt-12 grid gap-3 md:grid-cols-2">
          {faqs(t).map((faq) => (
            <article
              key={faq.question}
              className="rounded-lg border border-white/10 bg-white/[0.04] p-6"
            >
              <h3 className="text-xl font-extrabold text-white">
                {faq.question}
              </h3>
              <p className="mt-4 leading-7 text-[#EBEBEB]/70">{faq.answer}</p>
            </article>
          ))}
        </div>
      </div>

      <Script
        id="home-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs(t).map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />
    </section>
  )
}
