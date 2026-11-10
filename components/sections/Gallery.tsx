"use client"

import { useTranslations } from "next-intl"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"

export default function Gallery() {
  const t = useTranslations("site")

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
    <section
      id="espaco"
      className="bg-[#EBEBEB] py-20 text-[#030304] md:py-28"
      ref={sectionRef}
    >
      <div className="urus-container">
        <h2 className="font-display text-5xl font-bold leading-none md:text-7xl">
          {t("Minimalista_climatizado_e_direto_ao_ponto_235")}
        </h2>

        <div
          className={`mt-12 grid gap-10 md:grid-cols-2 md:items-center lg:gap-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`}
        >
          <div className="space-y-6">
            <p className="text-xl leading-9 text-[#030304]/75">
              {t("Um_espaco_pensado_para_quem_procura_uma_barbearia_em_236")}
            </p>
          </div>

          <div className="relative h-[420px] overflow-hidden rounded-[18px] border border-[#030304]/10 bg-white/60 shadow-[0_24px_80px_rgba(3,3,4,0.16)] md:h-[560px]">
            <Image
              src="/urus_barbearia_espera.jpg"
              alt={t("Recepcao_da_URUS_Barbearia_237")}
              fill
              className="object-cover"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
