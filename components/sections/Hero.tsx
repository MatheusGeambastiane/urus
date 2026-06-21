"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

function gtag_report_conversion(url?: string) {
  const callback = () => {
    if (typeof url !== "undefined") {
      window.location.href = url
    }
  }

  const gtag = (window as Window & { gtag?: (...args: unknown[]) => void }).gtag
  if (typeof gtag === "function") {
    gtag("event", "conversion", {
      send_to: "AW-17609739026/6g_dCJ7Y4-QbEJKW_cxB",
      event_callback: callback,
    })
  } else {
    callback()
  }

  return false
}

export default function Hero() {
  return (
    <section id="home" className="relative h-screen bg-[#030304] pt-24">
      <div className="absolute inset-0 opacity-70">
        <div className="absolute left-0 top-0 h-[34rem] w-[34rem] rounded-full bg-[#F2AD1D]/10 blur-3xl" />
        <div className="absolute bottom-8 right-0 h-[28rem] w-[28rem] rounded-full bg-white/5 blur-3xl" />
      </div>

      <div className="urus-container relative grid h-full items-center gap-10 py-8 lg:grid-cols-[0.92fr_1.08fr] lg:py-14">
        <div className="max-w-2xl">
          <h1 className="font-display text-[clamp(2.1rem,7.2vw,5.3rem)] font-bold leading-[0.9] tracking-normal">
            Sua melhor barbearia em Salvador
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-8 text-[#EBEBEB]/80 md:text-xl">
            Mais que um corte, uma experiência
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              className="h-14 rounded-full bg-[#EBEBEB] px-7 text-base font-extrabold text-[#030304] shadow-[0_16px_45px_rgba(235,235,235,0.2)] hover:bg-white"
            >
              <Link
                href="https://agenda.urusbarbearia.com.br/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => gtag_report_conversion()}
              >
                Agende agora
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-14 rounded-full border-[#EBEBEB]/25 bg-transparent px-7 text-base font-bold text-[#EBEBEB] hover:bg-[#EBEBEB] hover:text-[#030304]"
            >
              <Link href="https://wa.me/5571992109189" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </Link>
            </Button>
          </div>

        </div>

        <div className="relative min-h-[360px] sm:min-h-[500px] lg:min-h-[680px]">
          <div className="absolute inset-0 mx-auto h-full max-w-[560px]">
            <Image
              src="/maquina_urus.png"
              alt="Máquina URUS"
              fill
              className="object-contain p-8 sm:p-12"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
