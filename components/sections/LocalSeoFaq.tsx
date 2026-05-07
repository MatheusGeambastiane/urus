import Script from "next/script"

const faqs = [
  {
    question: "Onde fica a URUS Barbearia na Graca?",
    answer:
      "A URUS Barbearia fica na Rua Rio de Sao Pedro, 1, no bairro da Graca, em Salvador. O acesso e pratico para quem vem da Barra, Vitoria, Campo Grande e regiao central.",
  },
  {
    question: "Quais servicos encontro na URUS Barbearia em Salvador?",
    answer:
      "A unidade oferece corte masculino, barba, combos, protese capilar e servicos de bem-estar. O foco e atender com horario marcado e estrutura reservada.",
  },
  {
    question: "A URUS atende quem procura barbearia perto da Barra?",
    answer:
      "Sim. A localizacao na Graca facilita o atendimento de clientes que moram ou circulam pela Barra, Vitoria, Ondina e bairros proximos.",
  },
  {
    question: "Como agendar horario na barbearia?",
    answer:
      "O agendamento pode ser feito online ou pelo WhatsApp da URUS Barbearia, o que ajuda a reduzir espera e organizar melhor o atendimento.",
  },
]

export default function LocalSeoFaq() {
  return (
    <section id="faq-local" className="bg-white py-20 text-black">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-amber-700">Barbearia na Graca em Salvador</p>
          <h2 className="text-3xl font-bold md:text-4xl">Perguntas frequentes sobre a URUS Barbearia</h2>
          <p className="mt-4 text-lg leading-relaxed text-gray-700">
            Este bloco ajuda quem pesquisa por barbearia na Graca, barbearia em Salvador ou uma barbearia perto da
            Barra a entender rapidamente localizacao, servicos e agendamento.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl gap-4">
          {faqs.map((faq) => (
            <article key={faq.question} className="rounded-2xl border border-gray-200 bg-gray-50 p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900">{faq.question}</h3>
              <p className="mt-3 leading-relaxed text-gray-700">{faq.answer}</p>
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
