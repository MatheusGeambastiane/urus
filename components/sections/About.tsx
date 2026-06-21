import Image from "next/image"

export default function About() {
  return (
    <section id="sobre" className="bg-[#EBEBEB] py-20 text-[#030304] md:py-28">
      <div className="urus-container">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div className="relative">
            <div className="absolute -left-5 -top-5 h-full w-full border border-[#030304]/20" />
            <div className="relative h-[420px] overflow-hidden rounded-lg bg-[#d8d8d8] shadow-[0_24px_80px_rgba(3,3,4,0.18)] sm:h-[560px]">
              <Image
                src="/icaro_barba.png"
                alt="Atendimento de barba na URUS Barbearia"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            </div>
          </div>

          <div>
            <h2 className="mt-4 font-display text-5xl font-bold leading-none md:text-7xl">
              Uma barbearia pensada como ritual.
            </h2>
            <p className="mt-7 text-lg leading-8 text-[#030304]/70">
              A URUS Barbearia surge para oferecer mais que serviços de barbearia em Salvador.
              Localizada na Graça, combina técnica, conforto e bem-estar para quem busca qualidade,
              estilo e praticidade em um só lugar, com atendimento por agendamento ou por ordem de chegada.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {[
            ["Corte masculino", "Acabamento preciso e finalizacao alinhada ao seu estilo."],
            ["Barba e barboterapia", "Ritual completo para desenho, pele e relaxamento."],
            ["Proteses e bem-estar", "Solucoes capilares e terapias para uma experiencia completa."],
          ].map(([title, description]) => (
            <article key={title} className="rounded-lg border border-[#030304]/10 bg-[#030304] p-6 text-[#EBEBEB]">
              <h3 className="font-display text-3xl font-bold">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-[#EBEBEB]/70">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
