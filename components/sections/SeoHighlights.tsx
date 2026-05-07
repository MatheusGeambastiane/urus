import { Award, MapPin, ShieldCheck } from "lucide-react"

const highlights = [
  {
    title: "Barbearia na Graca com estrutura completa",
    description:
      "A URUS une corte, barba, protese capilar e bem-estar em uma barbearia na Graça pensada para quem busca praticidade e atendimento de alto nivel em Salvador.",
    icon: ShieldCheck,
  },
  {
    title: "Barbearia em Salvador com equipe especializada",
    description:
      "Nossa equipe atende com tecnica, consistencia e cuidado personalizado, reforcando a URUS como referencia para quem procura barbearia em Salvador.",
    icon: Award,
  },
  {
    title: "Barbearia perto da Barra e da Vitoria",
    description:
      "A localizacao na Graca facilita o acesso de quem procura barbearia na Barra, na Vitoria, no Campo Grande e em outros bairros centrais de Salvador.",
    icon: MapPin,
  },
]

export default function SeoHighlights() {
  return (
    <section id="porque-urus" className="py-20 bg-gradient-to-b from-gray-950 to-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <p className="text-sm uppercase tracking-[0.3em] text-blue-300">Barbearia na Graça em Salvador</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Destaques da URUS para quem busca barbearia na Graça, barbearia na Barra e barbearia em Salvador
          </h2>
          <p className="text-lg text-gray-200">
            Reforcamos localizacao, servicos e especialidades que ajudam a URUS a ser encontrada por quem procura uma
            barbearia bem localizada e completa em Salvador.
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

        {/* <div className="grid gap-6 md:grid-cols-2 mt-12" itemScope itemType="https://schema.org/Review">
          {socialProof.map(({ title, content }) => (
            <blockquote key={title} className="bg-black/40 border border-white/5 rounded-2xl p-6">
              <p className="text-sm uppercase tracking-[0.3em] text-blue-200 mb-2">{title}</p>
              <p className="text-gray-100 leading-relaxed" itemProp="reviewBody">
                {content}
              </p>
            </blockquote>
          ))}
        </div> */}
      </div>
    </section>
  )
}
