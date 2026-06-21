import Script from "next/script"

const faqs = [
  {
    question: "Onde fica a URUS Barbearia na Graca?",
    answer:
      "A URUS Barbearia fica na Rua Rio de Sao Pedro, 1, no bairro da Graca, em Salvador. Em frente à academia Bluefit",
  },
  {
    question: "Quais servicos encontro na URUS Barbearia em Salvador?",
    answer:
      "A unidade oferece corte, barba, combos, protese capilar, massoterapia, quick massage e taping, alem de servicos de bem-estar.",
  },
  {
    question: "O atendimento só é por hora marcada?",
    answer:
      "Não. O atendimento pode ser feito tanto por hora marcada quanto por ordem de chegada, conforme a disponibilidade da equipe.",
  },
  {
    question: "Como agendar horario na barbearia?",
    answer:
      "O agendamento pode ser feito online ou pelo WhatsApp da URUS Barbearia no numero (71) 99210-9189.",
  },
]

export default function LocalSeoFaq() {
  return (
    <section id="faq-local" className="bg-[#030304] py-20 text-[#EBEBEB] md:py-28">
      <div className="urus-container">
        <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-end">
          <div>
            <h2 className="mt-4 font-display text-5xl font-bold leading-none md:text-7xl">
              Antes de agendar.
            </h2>
          </div>
          <p className="text-lg leading-8 text-[#EBEBEB]/70">
            Este bloco ajuda quem pesquisa por barbearia na Graca ou barbearia em Salvador
            a entender rapidamente localizacao, servicos e agendamento.
          </p>
        </div>

        <div className="mt-12 grid gap-3 md:grid-cols-2">
          {faqs.map((faq) => (
            <article key={faq.question} className="rounded-lg border border-white/10 bg-white/[0.04] p-6">
              <h3 className="text-xl font-extrabold text-white">{faq.question}</h3>
              <p className="mt-4 leading-7 text-[#EBEBEB]/70">{faq.answer}</p>
            </article>
          ))}
        </div>
      </div>

      <Script
        id="home-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />
    </section>
  )
}
