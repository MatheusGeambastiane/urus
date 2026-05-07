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
          "Analise do couro cabeludo, rotina e objetivo estetico.",
      },
      {
        title: "Aplicação precisa e confortável",
        description:
          "Instalacao segura com acabamento natural e orientacoes essenciais.",
      },
      {
        title: "Manutenção planejada",
        description:
          "Retornos programados para limpeza, ajuste e troca adesiva.",
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
          "Base ultrafina, fios humanos e adesivos adequados ao clima local.",
      },
      {
        title: "Resultado invisível",
        detail:
          "Linha frontal realista e personalizacao para um visual natural.",
      },
      {
        title: "Suporte especializado",
        detail:
          "Orientacao clara para cuidados e manutencao da protese.",
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
            Processo claro, discreto e alinhado a identidade da URUS
          </h2>
          <p className="text-lg text-gray-300">
            Atendimento reservado com avaliacao, aplicacao e manutencao no mesmo lugar.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          <div className="space-y-6 bg-gray-900/60 border border-gray-800 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <ShieldCheck className="w-6 h-6 text-blue-300" aria-hidden />
              <h3 className="text-2xl font-semibold">Etapas</h3>
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
              <h3 className="text-2xl font-semibold">Diferenciais URUS</h3>
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
                Fale com a equipe e receba orientacao direta sobre avaliacao, valores e manutencao.
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
