import { MapPin, Clock } from "lucide-react"

export default function Location() {
  return (
    <section id="localizacao" className="py-20 bg-white text-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Onde fica a URUS Barbearia em Salvador
        </h2>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="h-96 rounded-lg overflow-hidden shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.482497741865!2d-38.5005144!3d-12.940947800000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71605f62f47ffcf%3A0x49cfd03fc7f6fbdb!2sUrus%20Barbearia%20-%20Salvador!5e0!3m2!1spt-BR!2sbr!4v1742263750701!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Localização da Barbearia"
            ></iframe>
          </div>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">Endereço</h3>
                <p className="text-gray-700">Rua Rio de São Pedro, 1</p>
                <p className="text-gray-700">Graça - Salvador/BA</p>
                <p className="text-gray-600 mt-2">
                  Fácil acesso para quem busca prótese capilar em Salvador ou deseja visitar a melhor barbearia da região
                  metropolitana.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Clock className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">Horário de Funcionamento</h3>
                <p className="text-gray-700">Segunda a Sexta: 9h às 20h</p>
                <p className="text-gray-700">Sábado: 9h às 18h</p>
                <p className="text-gray-700">Domingo: Fechado</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
