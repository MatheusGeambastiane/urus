"use client"

import { useTranslations } from "next-intl"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import { Link } from "@/i18n/navigation"
import { Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import Navigation from "@/components/Navigation"
import Footer from "@/components/sections/Footer"
import WhatsAppButton from "@/components/WhatsAppButton"
import Location from "@/components/sections/Location"

export default function PromoPage() {
  const t = useTranslations("site")

  const [isVisible, setIsVisible] = useState(false)
  const secondSectionRef = useRef<HTMLDivElement>(null)

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

    if (secondSectionRef.current) {
      observer.observe(secondSectionRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  const scrollToSecondSection = () => {
    secondSectionRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <Navigation />

      {/* First Section */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 pt-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 animate-fadeIn">
          {t("Veja_o_que_Matheus_fez_62")}
        </h1>
        <div
          className="animate-bounce mt-16 cursor-pointer"
          onClick={scrollToSecondSection}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-stone-400 hover:text-blue-400 transition-colors"
          >
            <path d="M12 5v14"></path>
            <path d="m19 12-7 7-7-7"></path>
          </svg>
        </div>
      </section>

      {/* Second Section with Scroll Effect */}
      <div ref={secondSectionRef}>
        <section
          className={`min-h-screen flex flex-col items-center justify-center text-center px-4 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-12 bg-gradient-to-r from-blue-300 to-blue-600 text-transparent bg-clip-text">
            {t("Matheus_fez_a_melhor_barbearia_da_cidade_63")}
          </h1>

          <div className="relative w-full max-w-2xl h-80 md:h-96 mb-12 rounded-lg overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-black/30 z-10 rounded-lg"></div>
            <Image
              src="/urus_barbearia_espera.jpg"
              alt={t("Barbearia_URUS_64")}
              fill
              className="object-cover object-center"
            />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-amber-400">
            {t("E_voce_acaba_de_ganhar_15_de_desconto_em_65")}
          </h2>

          <div className="max-w-2xl mx-auto bg-gray-800/50 p-6 md:p-8 rounded-xl border border-gray-700 mt-8">
            <h3 className="text-xl md:text-2xl mb-6">
              {t("Para_garantir_o_desconto_apresente_um_print_desta_pagina_66")}
            </h3>

            <div className="flex justify-center">
              <Link
                href="https://www.instagram.com/urus_barbearia?igsh=M3c4NzBtNmcxbWh4"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-6 text-lg rounded-lg flex items-center gap-2">
                  <Instagram className="w-6 h-6" />
                  {t("Siga_no_Instagram_67")}
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* Location Section */}
      <div className="py-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          {t("Venha_nos_visitar_68")}
        </h2>
        <Location />
      </div>

      <Footer />
      <WhatsAppButton />

      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fadeIn {
          animation: fadeIn 1.5s ease-in-out;
        }
      `}</style>
    </div>
  )
}
