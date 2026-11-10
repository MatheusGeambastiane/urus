"use client"

import { useTranslations, useLocale } from "next-intl"

import { Link } from "@/i18n/navigation"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowUpRight, BadgeCheck, Clock, Sparkles } from "lucide-react"
import { BOOKING_URL } from "@/lib/urls"

type ServiceItem = {
  title: string
  price: number
}

const formatCurrency = (value: number, locale: string) =>
  new Intl.NumberFormat(locale, {
    style: "currency",
    currency: "BRL",
  }).format(value)

export default function Services() {
  const t = useTranslations("site")

  const locale = useLocale()
  const serviceCategories = {
    cabelo: [
      { title: t("Corte_208"), price: 50 },
      { title: t("Luzes_209"), price: 120 },
      { title: t("Pe_de_cabelo_210"), price: 20 },
      { title: t("Platinado_211"), price: 120 },
      { title: t("Hidratacao_212"), price: 30 },
      { title: t("Progressiva_Desondulacao_213"), price: 110 },
      { title: t("Pigmentacao_214"), price: 30 },
      { title: t("Protese_capilar_215"), price: 1800 },
    ],
    barba: [
      { title: t("Barba_216"), price: 40 },
      { title: t("Barboterapia_217"), price: 70 },
      { title: t("Hidratacao_212"), price: 30 },
    ],
    outros: [
      { title: t("Sobrancelha_218"), price: 20 },
      { title: t("Quick_Massage_145"), price: 40 },
      { title: "Tapping", price: 60 },
    ],
    combos: [
      { title: t("Corte_barba_219"), price: 80 },
      { title: t("Corte_sobrancelha_220"), price: 65 },
      { title: t("Corte_barboterapia_221"), price: 120 },
      { title: t("Corte_barba_sobrancelha_222"), price: 100 },
      { title: t("Corte_barba_quickmassage_223"), price: 115 },
    ],
  }

  return (
    <section
      id="servicos"
      className="bg-[#030304] py-20 text-[#EBEBEB] md:py-28"
    >
      <div className="urus-container">
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
          <div>
            <h2 className="mt-4 font-display text-5xl font-bold leading-none md:text-7xl">
              {t("Escolha_o_ritual_A_gente_cuida_do_acabamento_224")}
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-[#EBEBEB]/70">
            {t("Cabelo_barba_proteses_capilares_e_terapias_de_bem_estar_225")}
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[280px_1fr]">
          <aside className="grid gap-4 lg:content-start">
            {[
              [
                Clock,
                t("Com_ou_sem_hora_marcada_226"),
                t("Agende_online_ou_seja_atendido_por_ordem_de_chegada_227"),
              ],
              [
                BadgeCheck,
                t("Equipe_especialista_228"),
                t("Tecnica_consistencia_e_cuidado_no_detalhe_229"),
              ],
              [
                Sparkles,
                t("Experiencia_completa_230"),
                t("Do_corte_a_massoterapia_sem_trocar_de_endereco_231"),
              ],
            ].map(([Icon, title, description]) => (
              <div
                key={String(title)}
                className="rounded-lg border border-white/10 bg-white/[0.04] p-5"
              >
                <Icon className="h-5 w-5 text-[#F2AD1D]" />
                <p className="mt-4 font-bold text-white">{String(title)}</p>
                <p className="mt-2 text-sm leading-6 text-[#EBEBEB]/60">
                  {String(description)}
                </p>
              </div>
            ))}
          </aside>

          <Tabs defaultValue="cabelo" className="w-full">
            <TabsList className="mb-6 grid h-auto grid-cols-2 gap-2 rounded-lg border border-white/10 bg-white/[0.04] p-2 md:grid-cols-4">
              <TabsTrigger
                value="cabelo"
                className="rounded-md px-4 py-3 text-xs font-extrabold uppercase tracking-[0.14em] text-[#EBEBEB]/70 data-[state=active]:bg-[#EBEBEB] data-[state=active]:text-[#030304]"
              >
                {t("Cabelo_232")}
              </TabsTrigger>
              <TabsTrigger
                value="barba"
                className="rounded-md px-4 py-3 text-xs font-extrabold uppercase tracking-[0.14em] text-[#EBEBEB]/70 data-[state=active]:bg-[#EBEBEB] data-[state=active]:text-[#030304]"
              >
                {t("Barba_216")}
              </TabsTrigger>
              <TabsTrigger
                value="outros"
                className="rounded-md px-4 py-3 text-xs font-extrabold uppercase tracking-[0.14em] text-[#EBEBEB]/70 data-[state=active]:bg-[#EBEBEB] data-[state=active]:text-[#030304]"
              >
                {t("Outros_233")}
              </TabsTrigger>
              <TabsTrigger
                value="combos"
                className="rounded-md px-4 py-3 text-xs font-extrabold uppercase tracking-[0.14em] text-[#EBEBEB]/70 data-[state=active]:bg-[#EBEBEB] data-[state=active]:text-[#030304]"
              >
                {t("Combos_234")}
              </TabsTrigger>
            </TabsList>

            {(["cabelo", "barba", "outros", "combos"] as const).map(
              (category) => (
                <TabsContent key={category} value={category}>
                  <div className="grid gap-3 md:grid-cols-2">
                    {serviceCategories[category].map((service: ServiceItem) => (
                      <Link
                        key={service.title}
                        href={BOOKING_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-between gap-5 rounded-lg border border-white/10 bg-[#101010] p-5 transition hover:border-[#F2AD1D]/60 hover:bg-[#151515]"
                      >
                        <div>
                          <h3 className="text-lg font-extrabold text-white">
                            {service.title}
                          </h3>
                          <p className="mt-1 text-xs font-bold uppercase tracking-[0.16em] text-[#EBEBEB]/45">
                            URUS Barbearia
                          </p>
                        </div>
                        <div className="flex items-center gap-3">
                          <p className="whitespace-nowrap font-display text-2xl font-bold text-[#F2AD1D]">
                            {formatCurrency(service.price, locale)}
                          </p>
                          <ArrowUpRight className="h-5 w-5 text-[#EBEBEB]/30 transition group-hover:text-[#F2AD1D]" />
                        </div>
                      </Link>
                    ))}
                  </div>
                </TabsContent>
              ),
            )}
          </Tabs>
        </div>
      </div>
    </section>
  )
}
