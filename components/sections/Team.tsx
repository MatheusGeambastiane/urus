import { useTranslations } from "next-intl"
import type { Translator } from "@/i18n/types"
import Image from "next/image"

const barbers = (t: Translator) => [
  {
    name: "Gustavo",
    role: t("Barbeiro_profissional_238"),
    image: "/gustavo_barbeiro_urus_barbearia_salvador.jpg",
    imageClassName: "object-cover",
  },
  {
    name: "Henrique",
    role: t("Barbeiro_profissional_238"),
    image: "/henrique_barbeiro_resizephoto.jpeg",
    imageClassName: "object-contain",
  },
  {
    name: "Janice",
    role: t("Massoterapeuta_239"),
    image: "/janice_gonçalves_massoterapeuta_urus_barbearia_salvador.jpg",
    imageClassName: "object-cover",
  },
]

export default function Team() {
  const t = useTranslations("site")

  return (
    <section id="equipe" className="bg-[#030304] py-20 text-[#EBEBEB] md:py-28">
      <div className="urus-container">
        <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="mt-4 font-display text-5xl font-bold leading-none md:text-7xl">
              {t("Maos_certas_para_cada_detalhe_240")}
            </h2>
          </div>
          <p className="max-w-md text-lg leading-8 text-[#EBEBEB]/70">
            {t(
              "Profissionais_para_corte_barba_terapias_e_cuidado_com_atendimento_241",
            )}
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {barbers(t).map((barber, index) => (
            <article
              key={barber.name}
              className="group rounded-lg border border-white/10 bg-white/[0.04] p-4"
            >
              <div className="relative h-[420px] overflow-hidden rounded-md bg-[#171717]">
                <Image
                  src={barber.image}
                  alt={barber.name}
                  fill
                  className={barber.imageClassName}
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
                <span className="absolute left-4 top-4 rounded-full bg-[#030304]/75 px-3 py-1 text-xs font-extrabold text-[#F2AD1D] backdrop-blur">
                  0{index + 1}
                </span>
              </div>
              <div className="flex items-end justify-between gap-4 pt-5">
                <div>
                  <h3 className="font-display text-4xl font-bold">
                    {barber.name}
                  </h3>
                  <p className="mt-1 text-sm font-bold uppercase tracking-[0.14em] text-[#EBEBEB]/50">
                    {barber.role}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
