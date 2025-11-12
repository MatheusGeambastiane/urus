import { Award, MapPin, ShieldCheck } from "lucide-react"

const highlights = [
  {
    title: "Melhor barbearia de Salvador",
    description:
      "Estrutura completa na Cidade Baixa com sala para prótese capilar, barbearia premium e área de bem-estar.",
    icon: ShieldCheck,
  },
  {
    title: "Especialistas em prótese capilar",
    description:
      "Equipe certificada que acompanha avaliação, aplicação e manutenção personalizada para o clima de Salvador.",
    icon: Award,
  },
  {
    title: "Localização estratégica",
    description:
      "Próxima ao Bonfim, Ribeira e bairros centrais, facilitando o acesso de toda a capital baiana.",
    icon: MapPin,
  },
]

const socialProof = [
  {
    title: "Clientes satisfeitos",
    content:
      "Mais de 500 procedimentos de prótese capilar realizados com avaliações 5 estrelas no atendimento personalizado.",
  },
  {
    title: "Reconhecimento local",
    content:
      "Presença constante em indicações de barbearia em Salvador graças ao cuidado com moradores e turistas.",
  },
]

export default function SeoHighlights() {
  return (
    <section id="porque-urus" className="py-20 bg-gradient-to-b from-gray-950 to-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <p className="text-sm uppercase tracking-[0.3em] text-blue-300">Prótese capilar em Salvador</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Por que a URUS é referência entre as melhores barbearias de Salvador
          </h2>
          <p className="text-lg text-gray-200">
            Credibilidade construída com resultados naturais, processos documentados e proximidade com nossos clientes
            na capital baiana.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {highlights.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 flex flex-col gap-3"
              itemScope
              itemType="https://schema.org/Service"
            >
              <div className="w-12 h-12 rounded-full bg-blue-900/40 flex items-center justify-center text-blue-300">
                <Icon className="h-6 w-6" aria-hidden />
              </div>
              <h3 className="text-xl font-semibold" itemProp="name">
                {title}
              </h3>
              <p className="text-gray-200" itemProp="description">
                {description}
              </p>
            </article>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2 mt-12" itemScope itemType="https://schema.org/Review">
          {socialProof.map(({ title, content }) => (
            <blockquote key={title} className="bg-black/40 border border-white/5 rounded-2xl p-6">
              <p className="text-sm uppercase tracking-[0.3em] text-blue-200 mb-2">{title}</p>
              <p className="text-gray-100 leading-relaxed" itemProp="reviewBody">
                {content}
              </p>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}

