import { Scissors, Palette, Pencil, Wind, Droplets, Sparkles } from "lucide-react"
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card"

export default function Services() {
  const services = [
    {
      title: "Corte de Cabelo",
      description: "Cortes modernos e clássicos realizados com técnicas precisas.",
      icon: <Scissors className="w-10 h-10" />,
    },
    {
      title: "Coloração",
      description: "Mudança de visual com as melhores técnicas e produtos de qualidade.",
      icon: <Palette className="w-10 h-10" />,
    },
    {
      title: "Design de Sobrancelha",
      description: "Modelagem que valoriza e harmoniza o seu rosto.",
      icon: <Pencil className="w-10 h-10" />,
    },
    {
      title: "Escova",
      description: "Finalização perfeita para complementar o seu visual.",
      icon: <Wind className="w-10 h-10" />,
    },
    {
      title: "Hidratação",
      description: "Tratamentos que devolvem a saúde e o brilho dos seus cabelos.",
      icon: <Droplets className="w-10 h-10" />,
    },
    {
      title: "Progressiva",
      description: "Alisamento que proporciona cabelos lisos e bem cuidados.",
      icon: <Sparkles className="w-10 h-10" />,
    },
  ]

  return (
    <section id="servicos" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Nossos Serviços</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 hover:shadow-xl transition"
            >
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="mb-4 text-amber-500">{service.icon}</div>
                <CardTitle className="text-xl mb-2 text-white">{service.title}</CardTitle>
                <CardDescription className="text-ddcece">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

