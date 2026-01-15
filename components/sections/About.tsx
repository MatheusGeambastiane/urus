import Image from "next/image"

export default function About() {
  return (
    <section id="sobre" className="py-20 bg-[#EBEBEB]">
      <div className="container mx-auto px-4">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div className="relative w-full h-72 sm:h-96 md:h-[420px]">
            <Image
              src="/urus_barbearia_espera.jpg"
              alt="Interior da URUS Barbearia"
              fill
              className="rounded-[20px] object-cover"
              priority
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Sobre a URUS Barbearia em Salvador
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              A Urus Barbearia surge com um único propósito: oferecer mais que serviços de barbearia em Salvador, proporcionar uma experiência completa de cuidado masculino. Localizada na Graça, nossa barbearia é o destino ideal para pessoas que buscam qualidade, estilo e bem-estar em um só lugar.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
