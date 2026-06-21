import { Award, CalendarCheck, ShieldCheck } from "lucide-react"

const highlights = [
  {
    title: "Estrutura completa",
    description:
      "A URUS une corte, barba, protese capilar e bem-estar em uma barbearia na Graça pensada para quem busca praticidade e atendimento de alto nivel em Salvador.",
    icon: ShieldCheck,
  },
  {
    title: "Equipe especializada",
    description:
      "Nossa equipe atende com tecnica, consistencia e cuidado personalizado, reforcando a URUS como referencia para quem procura barbearia em Salvador.",
    icon: Award,
  },
  {
    title: "Atendimento flexivel",
    description:
      "Voce pode agendar online para reservar seu horario ou chegar direto e ser atendido por ordem de chegada, conforme disponibilidade.",
    icon: CalendarCheck,
  },
]

export default function SeoHighlights() {
  return (
    <section id="porque-urus" className="bg-[#EBEBEB] py-20 text-[#030304] md:py-28">
      <div className="urus-container">
        <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-end">
          <div>
            <h2 className="mt-4 font-display text-5xl font-bold leading-none md:text-7xl">
              Estrutura completa. Atendimento sem pressa.
            </h2>
          </div>
          <p className="text-lg leading-8 text-[#030304]/70">
            A URUS combina serviços, especialidades e atendimento flexível para quem procura uma
            barbearia completa em Salvador.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {highlights.map(({ icon: Icon, title, description }, index) => (
            <article
              key={title}
              className="rounded-lg border border-[#030304]/10 bg-white/60 p-6"
              itemScope
              itemType="https://schema.org/Service"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#030304] text-[#F2AD1D]">
                  <Icon className="h-6 w-6" aria-hidden />
                </div>
                <span className="font-display text-4xl font-bold text-[#030304]/20">0{index + 1}</span>
              </div>
              <h3 className="mt-6 text-xl font-extrabold leading-7" itemProp="name">
                {title}
              </h3>
              <p className="mt-4 text-sm leading-6 text-[#030304]/65" itemProp="description">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
