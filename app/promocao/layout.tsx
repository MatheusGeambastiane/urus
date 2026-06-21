import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Promoção Especial | URUS Barbearia Salvador",
  description:
    "Aproveite a promocao especial da URUS Barbearia na Graca, em Salvador, com condicoes especiais para servicos selecionados.",
  keywords: ["promocao barbearia salvador", "desconto barbearia graca", "urus barbearia promocao"],
  robots: {
    index: false,
    follow: true,
  },
  openGraph: {
    title: "Promoção Especial | URUS Barbearia Salvador",
    description:
      "Condicoes especiais para servicos selecionados na URUS Barbearia, na Graca, em Salvador.",
    images: [
      {
        url: "/urus_barbearia_espera.jpg",
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
