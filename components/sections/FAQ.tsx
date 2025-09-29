import { useMemo } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

interface FAQItem {
  question: string
  answer: string
}

const loadFaq = (): FAQItem[] => {
  try {
    return [
      {
        question: "Qual o valor médio da prótese capilar em Salvador?",
        answer:
          "O investimento inicial na URUS Barbearia começa em R$ 1.800,00, incluindo análise, aplicação completa e orientações para os primeiros cuidados. Os valores podem variar conforme o tamanho da área e o tipo de prótese.",
      },
      {
        question: "Com que frequência preciso fazer manutenção?",
        answer:
          "Recomendamos retornos a cada 20 ou 30 dias para manutenção da prótese capilar, garantindo fixação segura, conforto e aparência natural. Nossos barbeiros cuidam de toda a higienização e ajuste adesivo.",
      },
      {
        question: "A prótese capilar permite praticar esportes e ir à praia?",
        answer:
          "Sim. Trabalhamos com adesivos resistentes ao clima de Salvador e orientamos sobre produtos indicados para atividades físicas, praia ou piscina, mantendo a prótese protegida sem comprometer o visual.",
      },
    ]
  } catch (error) {
    console.error("Erro ao carregar perguntas frequentes", error)
    return []
  }
}

export default function FAQ() {
  const faqItems = useMemo(() => loadFaq(), [])

  if (faqItems.length === 0) {
    return null
  }

  return (
    <section id="duvidas" className="py-20 bg-gray-950 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Dúvidas sobre prótese capilar em Salvador</h2>
          <p className="text-lg text-gray-300">
            Reunimos as principais respostas para quem busca transformar o visual com prótese capilar na capital baiana.
            Se precisar de mais informações, nossa equipe está a um clique de distância.
          </p>
        </div>
        <Accordion type="single" collapsible className="max-w-3xl mx-auto">
          {faqItems.map((faq) => (
            <AccordionItem key={faq.question} value={faq.question}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent className="text-gray-300 leading-relaxed">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
