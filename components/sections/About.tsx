import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function About() {
  const barbers = [
    { name: "Danilo", image: "/danilo_barbeiro_urus.jpeg" },
    { name: "Gustavo", image: "/gustavo_barbeiro_urus.jpeg" },
  ]

  return (
    <section id="sobre" className="py-20 bg-gradient-to-b from-gray-950 to-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Sobre a URUS Barbearia em Salvador
          </h2>
          <p className="text-lg text-ddcece leading-relaxed">
            Somos um estúdio-barbearia localizado na Cidade Baixa (Mares), eleito pelos clientes como referência em
            cortes masculinos, relaxamento e prótese capilar em Salvador. Unimos tradição e tecnologia para entregar
            resultados naturais e um atendimento consultivo.
          </p>
          <p className="text-lg text-ddcece leading-relaxed">
            Seja para uma transformação completa ou manutenção semanal, criamos experiências personalizadas com
            produtos premium, sala climatizada e profissionais certificados. Por isso, muitos clientes nos consideram a
            melhor barbearia de Salvador quando o assunto é cuidado masculino de alto padrão.
          </p>
        </div>
        <div className="max-w-4xl mx-auto mb-16 grid gap-4 md:grid-cols-2">
          {["Atendimento humanizado com hora marcada", "Materiais aprovados para prótese capilar no clima soteropolitano", "Equipe fixa de barbeiros especialistas", "Integração com massoterapia, quick massage e taping"].map((benefit) => (
            <div key={benefit} className="bg-gray-900/40 border border-gray-800 rounded-xl p-5 text-ddcece text-sm md:text-base">
              {benefit}
            </div>
          ))}
        </div>

        {/* Barbers Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-8 text-center">Nossa Equipe</h3>
          <div className="flex overflow-x-auto gap-6 pb-4 scrollbar-hide">
            {barbers.map((barber, index) => (
              <div key={index} className="flex-shrink-0 w-64">
                <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src={barber.image || "/placeholder.svg"}
                    alt={barber.name}
                    width={300}
                    height={300}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-4 text-center">
                    <h4 className="text-xl font-medium">{barber.name}</h4>
                    <p className="text-ddcece">Barbeiro Profissional</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-6 gap-2">
            <Button variant="outline" size="icon" className="rounded-full">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
