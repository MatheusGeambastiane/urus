"use client"

import Image from "next/image"
import Link from "next/link"
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
    <section id="home" className="relative min-h-screen flex items-center bg-[#030304]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse gap-10 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl md:order-1">
            <p className="text-sm uppercase tracking-[0.3em] text-blue-200 mb-3">Salvador • Bahia</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              A sua melhor barbearia em Salvador
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-6">
              Mais que um corte, uma experiência
            </p>
            <Link
              href="https://wa.me/557192109189"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => gtag_report_conversion()}
            >
              <Button className="bg-[#EBEBEB] text-[#030304] border-0 px-8 py-6 text-lg font-semibold rounded-[25px] shadow-[0_12px_30px_rgba(235,235,235,0.25)] hover:opacity-90 hover:scale-[1.02] transition">
                Agende agora
              </Button>
            </Link>
          </div>
          <div className="w-full md:w-1/2 md:order-2">
            <div className="relative h-64 w-full sm:h-80 md:h-[630px]">
              <Image
                src="/maquina_urus.png"
                alt="Máquina URUS"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
          {/* <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {highlights.map((item) => (
              <div key={item.title} className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-blue-400 flex-shrink-0" aria-hidden />
                <div>
                  <p className="font-semibold text-white">{item.title}</p>
                  <p className="text-sm text-gray-200">{item.description}</p>
                </div>
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </section>
  )
}
