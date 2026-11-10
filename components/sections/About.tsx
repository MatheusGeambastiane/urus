import { useTranslations } from "next-intl"
import Image from "next/image"

export default function About() {
  const t = useTranslations("site")

  return (
    <section id="sobre" className="bg-[#EBEBEB] py-20 text-[#030304] md:py-28">
      <div className="urus-container">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div className="relative">
            <div className="absolute -left-5 -top-5 h-full w-full border border-[#030304]/20" />
            <div className="relative h-[420px] overflow-hidden rounded-lg bg-[#d8d8d8] shadow-[0_24px_80px_rgba(3,3,4,0.18)] sm:h-[560px]">
              <Image
                src="/icaro_barba.png"
                alt={t("Atendimento_de_barba_na_URUS_Barbearia_199")}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            </div>
          </div>

          <div>
            <h2 className="mt-4 font-display text-5xl font-bold leading-none md:text-7xl">
              {t("Uma_barbearia_pensada_como_ritual_200")}
            </h2>
            <p className="mt-7 text-lg leading-8 text-[#030304]/70">
              {t("A_URUS_Barbearia_surge_para_oferecer_mais_que_servicos_201")}
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {[
            [
              t("Corte_masculino_202"),
              t("Acabamento_preciso_e_finalizacao_alinhada_ao_seu_estilo_203"),
            ],
            [
              t("Barba_e_barboterapia_204"),
              t("Ritual_completo_para_desenho_pele_e_relaxamento_205"),
            ],
            [
              t("Proteses_e_bem_estar_206"),
              t(
                "Solucoes_capilares_e_terapias_para_uma_experiencia_completa_207",
              ),
            ],
          ].map(([title, description]) => (
            <article
              key={title}
              className="rounded-lg border border-[#030304]/10 bg-[#030304] p-6 text-[#EBEBEB]"
            >
              <h3 className="font-display text-3xl font-bold">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-[#EBEBEB]/70">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
