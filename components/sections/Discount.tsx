import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Discount() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto overflow-hidden rounded-xl">
          <div className="relative bg-gray-100 p-8 md:p-12 rounded-xl overflow-hidden">
            {/* Background image with overlay */}
            <div className="absolute inset-0 z-0">
              {/* <Image
                src="/placeholder.svg?height=400&width=1200"
                alt="Agendamento"
                fill
                className="object-cover opacity-40"
              /> */}
              <div className="absolute inset-0 bg-black/60"></div>
            </div>

            <div className="relative z-10 flex flex-col md:flex-row justify-between items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Desconto para funcionários:</h2>
                <div className="text-white">
                  <ul className="list-disc pl-5">
                    <li>Atento</li>
                    <li>Atacadão</li>
                    <li>Policia Militar, Civil e Bombeiros</li>
                    <li>Prefeitura</li>
                    <li>Dubai</li>
                    <li>Esquina das Embalagens</li>
                  </ul>
                </div>
              </div>
              <Link href="https://wa.me/5571992997191" target="_blank" rel="noopener noreferrer">
                <Button className="mt-6 md:mt-0 bg-gray-700 hover:bg-gray-600 text-white px-8 py-3 rounded-md transition-colors">
                  Agendar
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

