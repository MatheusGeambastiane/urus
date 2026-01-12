import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Promoção Especial | URUS Barbearia Salvador",
  description:
    "Aproveite 15% de desconto na URUS Barbearia na Graça, Salvador. Promoção para quem busca a melhor barbearia de Salvador, barbearia na Barra e barbearia em Salvador.",
  keywords:
    "promoção barbearia salvador, desconto barbearia, barbearia na Graça, melhor barbearia de Salvador, barbearia na Barra, barbearia em Salvador",
  openGraph: {
    title: "Promoção Especial | URUS Barbearia Salvador",
    description:
      "Ganhe 15% de desconto na barbearia na Graça. Promoção da melhor barbearia de Salvador para quem busca barbearia na Barra e barbearia em Salvador.",
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
