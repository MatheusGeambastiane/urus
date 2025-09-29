import Link from "next/link"
import { useMemo } from "react"
import { CheckCircle2, Sparkles, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Step {
  title: string
  description: string
}

interface Benefit {
  title: string
  detail: string
}

const loadSteps = (): Step[] => {
  try {
    return [
      {
        title: "Avaliação completa em Salvador",
        description:
          "Entendemos suas necessidades, analisamos couro cabeludo e estilo de vida para definir a melhor prótese capilar.",
      },
      {
        title: "Aplicação precisa e confortável",
        description:
          "Instalação segura com técnicas atualizadas, acabamento natural e instruções de cuidado para manter o visual impecável.",
      },
      {
        title: "Manutenção planejada",
        description:
          "Agendamos retornos periódicos na URUS Barbearia para higienização, ajustes e troca adesiva quando necessário.",
      },
    ]
  } catch (error) {
    console.error("Erro ao carregar etapas da prótese capilar", error)
    return []
  }
}

const loadBenefits = (): Benefit[] => {
  try {
    return [
      {
        title: "Materiais premium",
        detail:
          "Utilizamos próteses com base ultrafina, fios 100% humanos e adesivos hipoalergênicos indicados para o clima de Salvador.",
      },
      {
        title: "Resultado invisível",
        detail:
          "Acabamentos com linha frontal realista, densidade equilibrada e personalização de tonalidade para combinar com sua pele.",
      },
      {
        title: "Suporte especializado",
        detail:
          "Equipe certificada disponível para tirar dúvidas, enviar lembretes de manutenção e orientar sobre produtos específicos.",
      },
    ]
  } catch (error) {
    console.error("Erro ao carregar benefícios da prótese capilar", error)
    return []
  }
}

export default function HairProsthesis() {
  const steps = useMemo(() => loadSteps(), [])
  const benefits = useMemo(() => loadBenefits(), [])

  return (
    <section id="protese-capilar" className="py-20 bg-gradient-to-b from-black via-gray-900 to-black text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-14">
          <p className="uppercase tracking-widest text-blue-400 text-sm font-semibold mb-3">Prótese Capilar em Salvador</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Processo completo para conquistar cabelos naturais com segurança e privacidade
          </h2>
          <p className="text-lg text-gray-300">
            A URUS Barbearia oferece atendimento exclusivo para homens e mulheres que buscam prótese capilar em Salvador,
            com sala reservada, análise criteriosa e manutenção programada que prolonga a durabilidade da prótese.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          <div className="space-y-6 bg-gray-900/60 border border-gray-800 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <ShieldCheck className="w-6 h-6 text-blue-300" aria-hidden />
              <h3 className="text-2xl font-semibold">Etapas da aplicação</h3>
            </div>
            <ul className="space-y-5 text-left">
              {steps.map((step, index) => (
                <li key={step.title} className="flex items-start gap-4">
                  <span className="text-blue-400 font-semibold text-lg">{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <p className="text-xl font-semibold mb-1">{step.title}</p>
                    <p className="text-gray-300 leading-relaxed">{step.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6 bg-gray-900/60 border border-gray-800 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <Sparkles className="w-6 h-6 text-blue-300" aria-hidden />
              <h3 className="text-2xl font-semibold">Por que escolher a URUS Barbearia?</h3>
            </div>
            <ul className="space-y-5 text-left">
              {benefits.map((benefit) => (
                <li key={benefit.title} className="flex items-start gap-4">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 mt-1" aria-hidden />
                  <div>
                    <p className="text-xl font-semibold mb-1">{benefit.title}</p>
                    <p className="text-gray-300 leading-relaxed">{benefit.detail}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="bg-blue-900/20 border border-blue-800 rounded-xl p-6">
              <p className="text-gray-200 mb-4">
                Estamos a 5 minutos do Terminal Marítimo do Bonfim, com estacionamento fácil e acesso rápido para toda
                Salvador. Entre em contato e descubra como nossa prótese capilar pode transformar a sua rotina.
              </p>
              <Link href="https://wa.me/557192109189" target="_blank" rel="noopener noreferrer">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-4" aria-label="Solicitar orçamento de prótese capilar em Salvador">
                  Solicitar orçamento agora
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
