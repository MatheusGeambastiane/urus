import Image from "next/image"
import Link from "next/link"
import {
  ChevronLeft,
  ChevronRight,
  MapPin,
  Clock,
  Scissors,
  Palette,
  Pencil,
  Wind,
  Droplets,
  Sparkles,
  Instagram,
  PhoneIcon as WhatsApp,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card"

export default function BarberiaLandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <span className="text-xl font-bold">URUS</span>
          </Link>
          <div className="hidden md:flex items-center space-x-6">
            <Link href="#home" className="text-white hover:text-gray-300 transition">
              Home
            </Link>
            <Link href="#sobre" className="text-white hover:text-gray-300 transition">
              Sobre nós
            </Link>
            <Link href="#servicos" className="text-white hover:text-gray-300 transition">
              Serviços
            </Link>
            <Link href="#localizacao" className="text-white hover:text-gray-300 transition">
              Localização
            </Link>
            <Link
              href="https://wa.me/5571992997191"
              className="bg-gradient-to-r from-stone-400 to-stone-800 px-4 py-2 rounded-md font-medium hover:opacity-90 transition"
            >
              Agende seu horário
            </Link>
          </div>
          <Button variant="ghost" className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </Button>
        </div>
      </nav>

      {/* Hero Banner - Update the text styling with reduced weight and gradient highlights */}
      <section id="home" className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/70 z-10"></div>
          <Image
            src="/barbearia.png"
            alt="Barbearia"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="container mx-auto px-4 z-20">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal mb-6 leading-tight">
              Tenha a{" "}
              <span className="font-bold bg-gradient-to-r from-stone-100 to-stone-600 text-transparent bg-clip-text">
                melhor
              </span>{" "}
              experiência na barbearia{" "}
              <span className="font-bold bg-gradient-to-r from-stone-100 to-stone-600 text-transparent bg-clip-text">
                mais incrível da cidade baixa
              </span>
            </h1>
            <Link href="https://wa.me/5571992997191" target="_blank" rel="noopener noreferrer">
            <Button className="bg-gradient-to-r from-stone-400 to-stone-800 text-white border-0 px-8 py-6 text-lg hover:opacity-90 transition">
              Agende agora
            </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Replace the Discount Section with the Scheduling Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto overflow-hidden rounded-xl">
            <div className="relative bg-gray-900 p-8 md:p-12 rounded-xl overflow-hidden">
              {/* Background image with overlay */}
              <div className="absolute inset-0 z-0">
                <Image
                  src="/placeholder.svg?height=400&width=1200"
                  alt="Agendamento"
                  fill
                  className="object-cover opacity-40"
                />
                <div className="absolute inset-0 bg-black/60"></div>
              </div>

              <div className="relative z-10 flex flex-col md:flex-row justify-between items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Desconto para funcionários:</h2>
                  <div className="text-white">
                    <ul className="list-disc pl-5">
                      <li>Atento</li>
                      <li>Atacadão</li>
                      <li>Policiais</li>
                      <li>Prefeitura</li>
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

      {/* About Us */}
      <section id="sobre" className="py-20 bg-gradient-to-b from-gray-950 to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Sobre Nós</h2>
            <p className="text-lg text-ddcece leading-relaxed">
              Bem-vindo à nossa barbearia, um espaço exclusivo no coração da cidade baixa, onde tradição e modernidade
              se encontram para oferecer uma experiência única de cuidado masculino. Nosso compromisso é proporcionar
              não apenas cortes impecáveis, mas momentos de relaxamento e transformação, em um ambiente sofisticado e
              acolhedor. Aqui, cada cliente é tratado com atenção personalizada, garantindo resultados que elevam a
              autoestima e o estilo.
            </p>
          </div>

          {/* Barbers Carousel */}
          <div className="relative max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-8 text-center">Nossa Equipe</h3>
            <div className="flex overflow-x-auto gap-6 pb-4 scrollbar-hide">
              {[
                { name: "Felipe", image: "/felipe_barbeiro_urus.jpeg" },
                { name: "Henrique", image: "/henrique_barbeiro_urus.jpeg" },

              ].map((barber, index) => (
                <div key={index} className="flex-shrink-0 w-64">
                  <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src={barber.image || "/placeholder.svg"}
                      alt={barber.name}
                      width={300}
                      height={300}
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-4 text-center">
                      <h4 className="text-xl font-medium">{barber.name}</h4>
                      <p className="text-ddcece">Barbeiro Profissional</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-6 gap-2">
              <Button variant="outline" size="icon" className="rounded-full">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="servicos" className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Nossos Serviços</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Corte de Cabelo",
                description: "Cortes modernos e clássicos realizados com técnicas precisas.",
                icon: <Scissors className="w-10 h-10" />,
              },
              {
                title: "Coloração",
                description: "Mudança de visual com as melhores técnicas e produtos de qualidade.",
                icon: <Palette className="w-10 h-10" />,
              },
              {
                title: "Design de Sobrancelha",
                description: "Modelagem que valoriza e harmoniza o seu rosto.",
                icon: <Pencil className="w-10 h-10" />,
              },
              {
                title: "Escova",
                description: "Finalização perfeita para complementar o seu visual.",
                icon: <Wind className="w-10 h-10" />,
              },
              {
                title: "Hidratação",
                description: "Tratamentos que devolvem a saúde e o brilho dos seus cabelos.",
                icon: <Droplets className="w-10 h-10" />,
              },
              {
                title: "Progressiva",
                description: "Alisamento que proporciona cabelos lisos e bem cuidados.",
                icon: <Sparkles className="w-10 h-10" />,
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 hover:shadow-xl transition"
              >
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="mb-4 text-amber-500">{service.icon}</div>
                  <CardTitle className="text-xl mb-2 text-white">{service.title}</CardTitle>
                  <CardDescription className="text-ddcece">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Location and Hours */}
      <section id="localizacao" className="py-20 bg-white text-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Localização e Horários</h2>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="h-96 rounded-lg overflow-hidden shadow-xl">
              <iframe
              
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.482497741865!2d-38.5005144!3d-12.940947800000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71605f62f47ffcf%3A0x49cfd03fc7f6fbdb!2sUrus%20Barbearia%20-%20Salvador!5e0!3m2!1spt-BR!2sbr!4v1742263750701!5m2!1spt-BR!2sbr" 
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
                  <p className="text-gray-700">Avenida Conselheiro Zacarias, 7</p>
                  <p className="text-gray-700">Mares - Salvador</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Horário de Funcionamento</h3>
                  <p className="text-gray-700">Segunda a Sexta: 9h às 18h</p>
                  <p className="text-gray-700">Sábado: 9h às 16h</p>
                  <p className="text-gray-700">Domingo: Fechado</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-black">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <span className="text-2xl font-bold">BARBEARIA</span>
              <p className="text-ddcece mt-2">A melhor experiência em barbearia</p>
            </div>
            <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center">
              <Link href="#home" className="text-white hover:text-gray-300 transition">
                Home
              </Link>
              <Link href="#sobre" className="text-white hover:text-gray-300 transition">
                Sobre nós
              </Link>
              <Link href="#servicos" className="text-white hover:text-gray-300 transition">
                Serviços
              </Link>
              <Link href="#localizacao" className="text-white hover:text-gray-300 transition">
                Localização
              </Link>
              <Link
                href="https://www.instagram.com/urus_barbearia?igsh=M3c4NzBtNmcxbWh4"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-amber-400 transition flex items-center gap-1"
              >
                <Instagram className="w-5 h-5" />
                <span>Instagram</span>
              </Link>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-ddcece">
            <p>&copy; {new Date().getFullYear()} Barbearia. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <Link
        href="https://wa.me/5571992997191"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center"
      >
        <WhatsApp className="w-6 h-6" />
      </Link>
    </div>
  )
}

