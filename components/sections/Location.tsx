import Link from "next/link"
import { CalendarDays, Clock, MapPin, Navigation } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Location() {
  return (
    <section id="localizacao" className="bg-[#EBEBEB] py-20 text-[#030304] md:py-28">
      <div className="urus-container">
        <div className="mb-12 grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-end">
          <div>
            <h2 className="mt-4 font-display text-5xl font-bold leading-none md:text-7xl">
              Graça, Salvador.
            </h2>
          </div>
          <p className="text-lg leading-8 text-[#030304]/70">
            Fácil acesso para quem vem da Barra, Vitória, Campo Grande, Ondina e região central.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-stretch">
          <div className="min-h-[430px] overflow-hidden rounded-lg border border-[#030304]/15 bg-white shadow-[0_24px_80px_rgba(3,3,4,0.16)]">
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

          <div className="rounded-lg bg-[#030304] p-6 text-[#EBEBEB] md:p-8">
            <div className="flex items-start gap-4 border-b border-white/10 pb-6">
              <MapPin className="mt-1 h-6 w-6 flex-shrink-0 text-[#F2AD1D]" />
              <div>
                <h3 className="text-xl font-extrabold">Endereço</h3>
                <p className="mt-3 text-[#EBEBEB]/75">Rua Rio de São Pedro, 1</p>
                <p className="text-[#EBEBEB]/75">Graça - Salvador/BA</p>
                <p className="mt-3 text-sm leading-6 text-[#EBEBEB]/55">
                  Fácil acesso e ambiente preparado para receber você com conforto.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 border-b border-white/10 py-6">
              <Clock className="mt-1 h-6 w-6 flex-shrink-0 text-[#F2AD1D]" />
              <div>
                <h3 className="text-xl font-extrabold">Horário de funcionamento</h3>
                <p className="mt-3 text-[#EBEBEB]/75">Segunda a Sexta: 9h às 20h</p>
                <p className="text-[#EBEBEB]/75">Sábado: 9h às 18h</p>
                <p className="text-[#EBEBEB]/75">Domingo: Fechado</p>
              </div>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <Button asChild className="h-12 rounded-full bg-[#EBEBEB] font-extrabold text-[#030304] hover:bg-white">
                <Link href="https://agenda.urusbarbearia.com.br/" target="_blank" rel="noopener noreferrer">
                  <CalendarDays className="h-4 w-4" />
                  Agendar
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-12 rounded-full border-white/20 bg-transparent font-extrabold text-[#EBEBEB] hover:bg-white hover:text-[#030304]"
              >
                <Link
                  href="https://www.google.com/maps/place/Urus+Barbearia+-+Salvador/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Navigation className="h-4 w-4" />
                  Como chegar
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
