"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Scissors, Palette, Droplets, Pencil, MapPin, Clock } from "lucide-react"
import Navigation from "@/components/Navigation"
import Footer from "@/components/sections/Footer"
import WhatsAppButton from "@/components/WhatsAppButton"

export default function MotociclistaPage() {
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    servico: "",
    horario: "",
    vemmoto: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")

  const services = [
    {
      title: "Corte + Barba",
      description: "Combo completo para renovar seu visual com estilo",
      icon: <Scissors className="w-8 h-8" />,
      price: "R$ 25",
      originalPrice: "R$ 35",
    },
    {
      title: "Corte + Hidratação",
      description: "Corte moderno com tratamento que devolve vida aos fios",
      icon: <Droplets className="w-8 h-8" />,
      price: "R$ 25",
      originalPrice: "R$ 35",
    },
    {
      title: "Corte + Sobrancelha",
      description: "Visual completo com design que valoriza seu rosto",
      icon: <Palette className="w-8 h-8" />,
      price: "R$ 25",
      originalPrice: "R$ 35",
    },
    {
      title: "Corte + Pigmentação",
      description: "Corte perfeito com técnica que disfarça falhas",
      icon: <Pencil className="w-8 h-8" />,
      price: "R$ 25",
      originalPrice: "R$ 35",
    },
  ]

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage("")
    console.log("Form data:", formData)


    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({

            nome: formData.nome,
            telefone: formData.telefone,
            servico: formData.servico,
            vemmoto: formData.vemmoto,
            horario: formData.horario,

        }),
      })

      if (response.ok) {
        setSubmitMessage("Agendamento enviado com sucesso! Entraremos em contato em breve.")
        setFormData({ nome: "", telefone: "", servico: "", horario: "", vemmoto: "" })
      } else {
        setSubmitMessage("Erro ao enviar agendamento. Tente novamente.")
      }
    } catch (error) {
      setSubmitMessage("Erro ao enviar agendamento. Tente novamente.")
      console.error("Error submitting form:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-black">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/70 z-10"></div>
          <Image
            src="/motocapaurus.png"
            alt="Motociclista cortando cabelo"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="container mx-auto px-4 z-20 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            No Mês do{" "}
            <span className="bg-gradient-to-r from-red-500 to-red-700 text-transparent bg-clip-text">Motociclista</span>
            , quem vem de moto tem{" "}
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">vantagem!</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            Faça seu combo e <strong className="text-red-400">GANHE</strong> um serviço{" "}
            <strong className="text-blue-400">GRÁTIS</strong>.
          </p>
          <Link href="#reservamoto">
            <Button className="bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white px-8 py-4 text-lg font-bold rounded-lg shadow-lg">
              AGENDE AGORA
            </Button>
          </Link>
        </div>
      </section>

      {/* Sobre a Promoção */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <Image
                src="/barbeiros-barbeiro.gif"
                alt="Motociclista na barbearia"
                width={600}
                height={500}
                className="rounded-lg shadow-2xl"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Uma homenagem a quem{" "}
                <span className="bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">
                  acelera com estilo!
                </span>
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Durante todo o mês de julho, ao vir de moto até a URUS Barbearia, você garante um serviço gratuito ao
                fechar qualquer combo.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Corte, barba, hidratação e muito mais — com atendimento exclusivo para quem vive a paixão pelas duas
                rodas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nossos Serviços */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Escolha seu combo.{" "}
              <span className="bg-gradient-to-r from-red-500 to-red-700 text-transparent bg-clip-text">
                Acelere no estilo.
              </span>
            </h2>
            <p className="text-lg text-gray-300">Serviço completo, ambiente de respeito, atendimento de primeira.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 hover:shadow-xl transition"
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4 text-blue-400 bg-blue-900/20 p-3 rounded-full inline-block">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-white">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <div className="space-y-1">
                    <div className="text-sm text-gray-400 line-through">{service.originalPrice}</div>
                    <div className="text-2xl font-bold text-red-400">{service.price}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Nossa Paixão */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Somos apaixonados por{" "}
              <span className="bg-gradient-to-r from-red-500 to-red-700 text-transparent bg-clip-text">moto</span> e por{" "}
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">
                cortar cabelo
              </span>
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center mt-16">
              <div className="text-left">
                <h3 className="text-2xl font-bold mb-6 text-red-400">A paixão pelas duas rodas</h3>
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  Entendemos a liberdade que uma moto proporciona. A sensação do vento no rosto, a adrenalina da estrada
                  e o estilo único de quem escolhe viver sobre duas rodas.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Por isso, criamos esta campanha especial para homenagear todos os motociclistas que, assim como nós,
                  vivem com paixão e autenticidade.
                </p>
              </div>
              <div className="relative">
                <Image
                  src="/moto-farol-da-barra.jpeg"
                  alt="Motociclista com estilo"
                  width={500}
                  height={300}
                  className="rounded-lg shadow-2xl max-h-[400px] object-cover"
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center mt-16">
              <div className="relative order-2 md:order-1">
                <Image
                  src="/cortando_na_moto.png"
                  alt="Arte do corte de cabelo"
                  width={400}
                  height={500}
                  className="rounded-lg shadow-2xl max-h-[400px] object-cover"
                />
              </div>
              <div className="text-left order-1 md:order-2">
                <h3 className="text-2xl font-bold mb-6 text-blue-400">A arte de cortar cabelo</h3>
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  Cada corte é uma obra de arte. Combinamos técnica, criatividade e paixão para criar o visual perfeito
                  que expressa a personalidade de cada cliente.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Na URUS, acreditamos que um bom corte de cabelo é mais que estética - é atitude, é confiança, é a
                  expressão do seu estilo único.
                </p>
              </div>
            </div>
            <div className="mt-16 p-8 bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">
                <span className="text-red-400">Moto</span> + <span className="text-blue-400">Estilo</span> ={" "}
                <span className="text-white">URUS</span>
              </h3>
              <p className="text-lg text-gray-300">
                Quando essas duas paixões se encontram, nasce algo especial. Venha fazer parte dessa experiência única!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Formulário de Agendamento */}
      <section id="reservamoto" className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Reserve seu horário</h2>
              <p className="text-lg text-gray-300">
                Promoção válida até 31 de julho. <strong className="text-red-400">Vagas limitadas!</strong>
              </p>
            </div>
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="nome" className="text-white">
                      Nome completo *
                    </Label>
                    <Input
                      id="nome"
                      type="text"
                      value={formData.nome}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange("nome", e.target.value)}
                      className="bg-gray-700 border-gray-600 text-white"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="telefone" className="text-white">
                      WhatsApp *
                    </Label>
                    <Input
                      id="telefone"
                      type="tel"
                      value={formData.telefone}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange("telefone", e.target.value)}
                      className="bg-gray-700 border-gray-600 text-white"
                      placeholder="(71) 99999-9999"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="servico" className="text-white">
                      Serviço desejado *
                    </Label>
                    <Select onValueChange={(value: string) => handleInputChange("servico", value)}>
                      <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                        <SelectValue placeholder="Selecione o serviço" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service) => (
                          <SelectItem key={service.title} value={service.title}>
                            {service.title}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="horario" className="text-white">
                      Melhor horário *
                    </Label>
                    <Select onValueChange={(value: string) => handleInputChange("horario", value)}>
                      <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                        <SelectValue placeholder="Selecione o horário" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="manha">Manhã (9h às 12h)</SelectItem>
                        <SelectItem value="tarde">Tarde (12h às 18h)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="vemmoto" className="text-white">
                      Vai vir de moto? *
                    </Label>
                    <Select onValueChange={(value: string) => handleInputChange("vemmoto", value)}>
                      <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                        <SelectValue placeholder="Selecione uma opção" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="sim">Sim</SelectItem>
                        <SelectItem value="nao">Não</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white py-3 text-lg font-bold"
                  >
                    {isSubmitting ? "ENVIANDO..." : "GARANTIR MEU SERVIÇO GRÁTIS"}
                  </Button>
                  {submitMessage && (
                    <p
                      className={`text-center ${submitMessage.includes("sucesso") ? "text-green-400" : "text-red-400"}`}
                    >
                      {submitMessage}
                    </p>
                  )}
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Localização */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Chegue de moto.{" "}
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">
                A URUS te espera!
              </span>
            </h2>
          </div>
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
                <MapPin className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Endereço</h3>
                  <p className="text-gray-300">Avenida Conselheiro Zacarias, 7</p>
                  <p className="text-gray-300">Mares - Salvador</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Horário de Funcionamento</h3>
                  <p className="text-gray-300">Segunda a Sexta: 9h às 18h</p>
                  <p className="text-gray-300">Sábado: 9h às 16h</p>
                  <p className="text-gray-300">Domingo: Fechado</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  )
}
