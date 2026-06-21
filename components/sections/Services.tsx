"use client"
import { useMemo } from "react"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowUpRight, BadgeCheck, Clock, Sparkles } from "lucide-react"

type ServiceItem = {
  title: string
  price: number
}

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value)

export default function Services() {
  const bookingHref = "https://agenda.urusbarbearia.com.br/"
  const serviceCategories = useMemo(
    () => ({
      cabelo: [
        { title: "Corte", price: 50 },
        { title: "Luzes", price: 120 },
        { title: "Pé de cabelo", price: 20 },
        { title: "Platinado", price: 120 },
        { title: "Hidratação", price: 30 },
        { title: "Progressiva/ Desondulação", price: 110 },
        { title: "Pigmentação", price: 30 },
        { title: "Prótese capilar", price: 1800 },
      ],
      barba: [
        { title: "Barba", price: 40 },
        { title: "Barboterapia", price: 70 },
        { title: "Hidratação", price: 30 },
      ],
      outros: [
        { title: "Sobrancelha", price: 20 },
        { title: "Quick Massage", price: 40 },
        { title: "Tapping", price: 60 },
      ],
      combos: [
        { title: "Corte + barba", price: 80 },
        { title: "Corte + sobrancelha", price: 65 },
        { title: "Corte + barboterapia", price: 120 },
        { title: "Corte + barba + sobrancelha", price: 100 },
        { title: "Corte + barba + quickmassage", price: 115 },
      ],
    }),
    [],
  )

  return (
    <section id="servicos" className="bg-[#030304] py-20 text-[#EBEBEB] md:py-28">
      <div className="urus-container">
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
          <div>
            <h2 className="mt-4 font-display text-5xl font-bold leading-none md:text-7xl">
              Escolha o ritual. A gente cuida do acabamento.
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-[#EBEBEB]/70">
            Cabelo, barba, proteses capilares e terapias de bem-estar no mesmo endereco,
            com precos claros e agenda online para reduzir espera.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[280px_1fr]">
          <aside className="grid gap-4 lg:content-start">
            {[
              [Clock, "Com ou sem hora marcada", "Agende online ou seja atendido por ordem de chegada."],
              [BadgeCheck, "Equipe especialista", "Tecnica, consistencia e cuidado no detalhe."],
              [Sparkles, "Experiencia completa", "Do corte a massoterapia sem trocar de endereco."],
            ].map(([Icon, title, description]) => (
              <div key={String(title)} className="rounded-lg border border-white/10 bg-white/[0.04] p-5">
                <Icon className="h-5 w-5 text-[#F2AD1D]" />
                <p className="mt-4 font-bold text-white">{String(title)}</p>
                <p className="mt-2 text-sm leading-6 text-[#EBEBEB]/60">{String(description)}</p>
              </div>
            ))}
          </aside>

          <Tabs defaultValue="cabelo" className="w-full">
            <TabsList className="mb-6 grid h-auto grid-cols-2 gap-2 rounded-lg border border-white/10 bg-white/[0.04] p-2 md:grid-cols-4">
              <TabsTrigger
                value="cabelo"
                className="rounded-md px-4 py-3 text-xs font-extrabold uppercase tracking-[0.14em] text-[#EBEBEB]/70 data-[state=active]:bg-[#EBEBEB] data-[state=active]:text-[#030304]"
              >
                Cabelo
              </TabsTrigger>
              <TabsTrigger
                value="barba"
                className="rounded-md px-4 py-3 text-xs font-extrabold uppercase tracking-[0.14em] text-[#EBEBEB]/70 data-[state=active]:bg-[#EBEBEB] data-[state=active]:text-[#030304]"
              >
                Barba
              </TabsTrigger>
              <TabsTrigger
                value="outros"
                className="rounded-md px-4 py-3 text-xs font-extrabold uppercase tracking-[0.14em] text-[#EBEBEB]/70 data-[state=active]:bg-[#EBEBEB] data-[state=active]:text-[#030304]"
              >
                Outros
              </TabsTrigger>
              <TabsTrigger
                value="combos"
                className="rounded-md px-4 py-3 text-xs font-extrabold uppercase tracking-[0.14em] text-[#EBEBEB]/70 data-[state=active]:bg-[#EBEBEB] data-[state=active]:text-[#030304]"
              >
                Combos
              </TabsTrigger>
            </TabsList>

            {(["cabelo", "barba", "outros", "combos"] as const).map((category) => (
              <TabsContent key={category} value={category}>
                <div className="grid gap-3 md:grid-cols-2">
                  {serviceCategories[category].map((service: ServiceItem) => (
                    <Link
                      key={service.title}
                      href={bookingHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between gap-5 rounded-lg border border-white/10 bg-[#101010] p-5 transition hover:border-[#F2AD1D]/60 hover:bg-[#151515]"
                    >
                      <div>
                        <h3 className="text-lg font-extrabold text-white">{service.title}</h3>
                        <p className="mt-1 text-xs font-bold uppercase tracking-[0.16em] text-[#EBEBEB]/45">
                          URUS Barbearia
                        </p>
                      </div>
                      <div className="flex items-center gap-3">
                        <p className="whitespace-nowrap font-display text-2xl font-bold text-[#F2AD1D]">
                          {formatCurrency(service.price)}
                        </p>
                        <ArrowUpRight className="h-5 w-5 text-[#EBEBEB]/30 transition group-hover:text-[#F2AD1D]" />
                      </div>
                    </Link>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  )
}
