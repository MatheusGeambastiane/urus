"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"

export default function Gallery() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      {
        threshold: 0.1,
      },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <section id="espaco" className="py-20 bg-white text-black" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Nosso Espaço</h2>

        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-lg text-gray-700 leading-relaxed">
            Projetado para oferecer conforto e estilo, nosso espaço combina design contemporâneo com funcionalidade.
            Cada detalhe foi pensado para proporcionar uma experiência única, desde a iluminação cuidadosamente
            posicionada até os equipamentos de última geração. Na URUS Barbearia, você encontra um ambiente minimalista
            e sofisticado, onde pode relaxar enquanto nossos profissionais cuidam do seu visual com precisão e
            dedicação.
          </p>
        </div>

        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`}
        >
          <div className="overflow-hidden rounded-lg shadow-lg">
            <div className="relative h-80">
              <Image
                src="/barbearia_fachada.jpg"
                alt="Fachada da URUS Barbearia"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-4 bg-gray-50">
              <h3 className="text-xl font-semibold mb-2">Fácil localização</h3>
              <p className="text-gray-600">
                Nosso espaço está localizado no coração da Cidade Baixa, com estacionamento na rua.
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-lg shadow-lg">
            <div className="relative h-80">
              <Image
                src="/foto_recepcao.jpeg"
                alt="Área de recepção da URUS Barbearia"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-4 bg-gray-50">
              <h3 className="text-xl font-semibold mb-2">Ambiente Minimalista e Climatizado</h3>
              <p className="text-gray-600">
                Espaço clean e climatizado para proporcionar conforto durante seu atendimento.
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-lg shadow-lg">
            <div className="relative h-80">
              <Image
                src="/foto_bancada_1.jpeg"
                alt="Estação de trabalho com equipamentos profissionais"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-4 bg-gray-50">
              <h3 className="text-xl font-semibold mb-2">Equipamentos Profissionais</h3>
              <p className="text-gray-600">
                Utilizamos apenas ferramentas de alta qualidade para garantir o melhor resultado.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-xl font-medium text-blue-600">
            Venha conhecer nosso espaço e viva uma experiência única de cuidado masculino.
          </p>
        </div>
      </div>
    </section>
  )
}

