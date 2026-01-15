"use client"
import { useMemo } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

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
    <section id="servicos" className="py-20 bg-[#030304]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-8 space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-[#EBEBEB]">Melhor barbearia de Salvador</p>
          <h2 className="text-3xl md:text-4xl font-bold">Serviços da URUS Barbearia em Salvador</h2>
          <p className="text-lg text-[#EBEBEB]/80">
            Aplicamos prótese capilar, cuidamos da sua barba e oferecemos terapias de bem-estar no mesmo endereço,
            garantindo praticidade para quem busca uma barbearia completa na capital baiana.
          </p>
        </div>

        <div className="flex justify-center mb-10">
          <Tabs defaultValue="cabelo" className="w-full max-w-5xl">
            <TabsList className="mx-auto mb-10 flex w-full max-w-3xl flex-wrap justify-center gap-3 rounded-full bg-[#EBEBEB] p-2">
              <TabsTrigger
                value="cabelo"
                className="rounded-full px-6 py-2 text-sm font-semibold uppercase tracking-wide text-[#030304] data-[state=active]:bg-[#030304] data-[state=active]:text-[#EBEBEB]"
              >
                Cabelo
              </TabsTrigger>
              <TabsTrigger
                value="barba"
                className="rounded-full px-6 py-2 text-sm font-semibold uppercase tracking-wide text-[#030304] data-[state=active]:bg-[#030304] data-[state=active]:text-[#EBEBEB]"
              >
                Barba
              </TabsTrigger>
              <TabsTrigger
                value="outros"
                className="rounded-full px-6 py-2 text-sm font-semibold uppercase tracking-wide text-[#030304] data-[state=active]:bg-[#030304] data-[state=active]:text-[#EBEBEB]"
              >
                Outros serviços
              </TabsTrigger>
              <TabsTrigger
                value="combos"
                className="rounded-full px-6 py-2 text-sm font-semibold uppercase tracking-wide text-[#030304] data-[state=active]:bg-[#030304] data-[state=active]:text-[#EBEBEB]"
              >
                Combos
              </TabsTrigger>
            </TabsList>

            {(["cabelo", "barba", "outros", "combos"] as const).map((category) => (
              <TabsContent key={category} value={category}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {serviceCategories[category].map((service: ServiceItem) => (
                    <Card
                      key={service.title}
                      className="bg-[#EBEBEB] border-transparent hover:shadow-xl transition overflow-hidden h-full"
                    >
                      <CardContent className="p-6 flex flex-col items-center text-center h-full">
                        <h3 className="text-xl mb-6 text-[#030304] font-semibold">{service.title}</h3>
                        <Badge className="bg-[#030304] hover:bg-black text-[#EBEBEB] text-lg py-1.5 px-4">
                          {formatCurrency(service.price)}
                        </Badge>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        {/* <div className="text-center mt-12 max-w-2xl mx-auto">
          <div className="bg-blue-900/20 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3 text-blue-300">Por que escolher nossos serviços?</h3>
            <p className="text-ddcece">
              Todos os serviços incluem finalização com produtos de alta qualidade e são realizados por profissionais
              experientes. Nossos combos foram criados para oferecer a melhor relação custo-benefício, garantindo
              economia sem abrir mão da qualidade.
            </p>
          </div>
        </div> */}
      </div>
    </section>
  )
}
