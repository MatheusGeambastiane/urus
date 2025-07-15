import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Campanha Motociclista | URUS Barbearia Salvador - Serviço Grátis para Motociclistas",
  description:
    "Mês do Motociclista na URUS Barbearia! Venha de moto e ganhe um serviço GRÁTIS no combo. Promoção válida em julho. Agende já!",
  keywords:
    "campanha motociclista salvador, barbearia motociclista, promoção moto salvador, urus barbearia moto, desconto motociclista",
  openGraph: {
    title: "Campanha Motociclista | URUS Barbearia - Serviço Grátis",
    description:
      "Venha de moto e ganhe um serviço GRÁTIS no combo! Promoção especial do Mês do Motociclista na URUS Barbearia.",
    images: [
      {
        url: "/maquina_urus.png",
        width: 1200,
        height: 630,
        alt: "Campanha Motociclista URUS Barbearia",
      },
    ],
  },
}

export default function MotociclistaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
