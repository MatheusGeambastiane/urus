import Image from "next/image"
import Link from "next/link"
import { CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  const highlights = [
    {
      title: "Prótese capilar em Salvador",
      description: "Aplicação discreta em sala exclusiva e materiais preparados para o clima da capital.",
    },
    {
      title: "Barbearia premiada na Cidade Baixa",
      description: "Equipe fixa de especialistas em cortes masculinos, barba e terapias manuais.",
    },
    {
      title: "Atendimento rápido pelo WhatsApp",
      description: "Agende avaliação ou manutenção e receba orientações dos nossos profissionais.",
    },
  ]

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/70 z-10"></div>
        <Image
          src="/barbearia_fachada.jpg"
          alt="Fachada da URUS Barbearia em Salvador"
          fill
          className="object-cover object-center"
          priority
        />
      </div>
      <div className="container mx-auto px-4 z-20">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.3em] text-blue-200 mb-3">Salvador • Bahia</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Prótese capilar em Salvador e a melhor barbearia da Cidade Baixa
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-6">
            A URUS Barbearia combina tecnologia em prótese capilar, cortes masculinos premium e massoterapia para quem
            procura uma barbearia em Salvador com padrão de clínica. Sala reservada, atendimento consultivo e
            especialistas preparados para te ajudar a recuperar confiança com naturalidade.
          </p>
          <Link href="https://wa.me/557192109189" target="_blank" rel="noopener noreferrer">
            <Button className="bg-gradient-to-r from-blue-500 to-blue-700 text-white border-0 px-8 py-6 text-lg hover:opacity-90 transition">
              Agende agora
            </Button>
          </Link>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {highlights.map((item) => (
              <div key={item.title} className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-blue-400 flex-shrink-0" aria-hidden />
                <div>
                  <p className="font-semibold text-white">{item.title}</p>
                  <p className="text-sm text-gray-200">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
