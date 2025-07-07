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
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Sobre Nós</h2>
          <p className="text-lg text-ddcece leading-relaxed">
            Bem-vindo à nossa barbearia, um espaço exclusivo no coração da cidade baixa, onde tradição e modernidade se
            encontram para oferecer uma experiência única de cuidado masculino. Nosso compromisso é proporcionar não
            apenas cortes impecáveis, mas momentos de relaxamento e transformação, em um ambiente sofisticado e
            acolhedor. Aqui, cada cliente é tratado com atenção personalizada, garantindo resultados que elevam a
            autoestima e o estilo.
          </p>
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

