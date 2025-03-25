import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Promoção Especial | URUS Barbearia Salvador",
  description:
    "Aproveite 15% de desconto em qualquer serviço na URUS Barbearia em Salvador. Cortes, barba, sobrancelha e mais na Cidade Baixa, Mares.",
  keywords: "promoção barbearia salvador, desconto barbearia, urus barbearia promoção, corte cabelo desconto salvador",
  openGraph: {
    title: "Promoção Especial | URUS Barbearia Salvador",
    description:
      "Ganhe 15% de desconto em qualquer serviço na melhor barbearia de Salvador. Apresente esta página e siga no Instagram.",
    images: [
      {
        url: "/barbearia_fachada.jpg",
        width: 1200,
        height: 630,
        alt: "Promoção URUS Barbearia Salvador",
      },
    ],
  },
}

export default function PromoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

