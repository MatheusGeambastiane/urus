import { getTranslations, getLocale } from "next-intl/server"
import { localizeMetadata } from "@/i18n/metadata"
import type React from "react"
import type { Metadata } from "next"

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("site")
  const locale = await getLocale()
  return localizeMetadata(
    {
      title: t("Promocao_Especial_URUS_Barbearia_Salvador_55"),
      description: t(
        "Aproveite_a_promocao_especial_da_URUS_Barbearia_na_Graca_56",
      ),
      keywords: [
        t("promocao_barbearia_salvador_57"),
        t("desconto_barbearia_graca_58"),
        t("urus_barbearia_promocao_59"),
      ],
      robots: {
        index: false,
        follow: true,
      },
      openGraph: {
        title: t("Promocao_Especial_URUS_Barbearia_Salvador_55"),
        description: t(
          "Condicoes_especiais_para_servicos_selecionados_na_URUS_Barbearia_na_60",
        ),
        images: [
          {
            url: "/urus_barbearia_espera.jpg",
            width: 1200,
            height: 630,
            alt: t("Promocao_URUS_Barbearia_Salvador_61"),
          },
        ],
      },
    },
    locale,
    "/promocao",
  )
}

export default function PromoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
