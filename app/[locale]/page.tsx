import { localizeStructuredData } from "@/i18n/structured-data"
import { useTranslations, useLocale } from "next-intl"
import type { Translator } from "@/i18n/types"
import { getTranslations, getLocale } from "next-intl/server"
import { localizeMetadata } from "@/i18n/metadata"
import type { Metadata } from "next"
import Script from "next/script"
import Navigation from "@/components/Navigation"
import Hero from "@/components/sections/Hero"
import About from "@/components/sections/About"
import Services from "@/components/sections/Services"
import Gallery from "@/components/sections/Gallery"
import LocalSeoFaq from "@/components/sections/LocalSeoFaq"
import Team from "@/components/sections/Team"
import Location from "@/components/sections/Location"
import Footer from "@/components/sections/Footer"
import WhatsAppButton from "@/components/WhatsAppButton"

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("site")
  const locale = await getLocale()
  return localizeMetadata(
    {
      title: t("Melhor_Barbearia_na_Graca_em_Salvador_Corte_barba_e_42"),
      description: t(
        "URUS_Barbearia_na_Graca_em_Salvador_para_quem_procura_43",
      ),
      keywords: [
        t("melhor_barbearia_em_salvador_44"),
        t("melhor_barbearia_na_graca_45"),
        t("barbearia_na_Graca_6"),
        t("barbearia_boa_11"),
        t("barbearia_para_turistas_12"),
        t("barbearia_na_Barra_13"),
        t("barbearia_em_Salvador_10"),
        t("corte_masculino_Salvador_14"),
        t("barba_Salvador_15"),
        "urus barbearia",
        t("protese_capilar_em_salvador_47"),
      ],
      alternates: { canonical: "https://urusbarbearia.com.br/" },
      openGraph: {
        title: t("URUS_Barbearia_Melhor_Barbearia_na_Graca_em_Salvador_20"),
        description: t(
          "Barbearia_na_Graca_em_Salvador_com_corte_masculino_barba_48",
        ),
        url: "https://urusbarbearia.com.br/",
        type: "website",
        locale: "pt_BR",
        siteName: "URUS Barbearia",
        images: [
          {
            url: "https://urusbarbearia.com.br/urus_barbearia_espera.jpg",
            width: 1200,
            height: 630,
            alt: t("Entrada_da_URUS_Barbearia_na_Graca_Salvador_49"),
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: t("URUS_Barbearia_Melhor_Barbearia_na_Graca_em_Salvador_20"),
        description: t(
          "Barbearia_na_Graca_com_corte_barba_protese_capilar_e_50",
        ),
        images: ["https://urusbarbearia.com.br/urus_barbearia_espera.jpg"],
      },
    },
    locale,
    "/",
  )
}

const homeStructuredData = (t: Translator) => ({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://urusbarbearia.com.br/#webpage",
      url: "https://urusbarbearia.com.br/",
      name: t("URUS_Barbearia_Melhor_Barbearia_na_Graca_em_Salvador_20"),
      isPartOf: { "@id": "https://urusbarbearia.com.br/#website" },
      about: { "@id": "https://urusbarbearia.com.br/#barbershop" },
      description: t(
        "Pagina_principal_da_URUS_Barbearia_com_informacoes_sobre_corte_51",
      ),
      inLanguage: "pt-BR",
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: "https://urusbarbearia.com.br/urus_barbearia_espera.jpg",
      },
    },
    {
      "@type": "ItemList",
      name: t("Principais_servicos_da_URUS_Barbearia_52"),
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "Service",
            name: t("Corte_masculino_em_Salvador_53"),
            url: "https://urusbarbearia.com.br/#servicos",
          },
        },
        {
          "@type": "ListItem",
          position: 2,
          item: {
            "@type": "Service",
            name: t("Barba_e_barboterapia_em_Salvador_54"),
            url: "https://urusbarbearia.com.br/#servicos",
          },
        },
        {
          "@type": "ListItem",
          position: 3,
          item: {
            "@type": "Service",
            name: t("Protese_capilar_em_Salvador_36"),
            url: "https://urusbarbearia.com.br/protese-capilar",
          },
        },
      ],
    },
  ],
})

export default function BarberiaLandingPage() {
  const t = useTranslations("site")
  const locale = useLocale()

  return (
    <>
      <div className="min-h-screen overflow-hidden bg-[#030304] text-[#EBEBEB]">
        <Navigation />
        <Script id="home-structured-data" type="application/ld+json">
          {JSON.stringify(
            localizeStructuredData(homeStructuredData(t), locale),
          )}
        </Script>
        <Hero />
        <About />
        <Services />
        <Team />
        <Gallery />
        <LocalSeoFaq />
        <Location />
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  )
}
