import { useTranslations } from "next-intl"
import Image from "next/image"
import { Link } from "@/i18n/navigation"
import { Instagram, Scissors } from "lucide-react"
import { Button } from "@/components/ui/button"
import { BOOKING_URL } from "@/lib/urls"

export default function Footer() {
  const t = useTranslations("site")

  return (
    <footer className="bg-[#030304] py-12 text-[#EBEBEB]">
      <div className="urus-container">
        <div className="grid gap-8 border-b border-white/10 pb-8 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <Image
              src="/urus_logo_nobg_branca.png"
              alt="URUS Barbearia"
              width={112}
              height={112}
              className="h-20 w-auto"
            />
            <p className="mt-3 max-w-md text-[#EBEBEB]/60">
              {t(
                "Barbearia_protese_capilar_e_cuidado_na_Graca_em_Salvador_253",
              )}
            </p>
          </div>
          <Button
            asChild
            className="h-12 rounded-full bg-[#EBEBEB] px-7 font-extrabold text-[#030304] hover:bg-white"
          >
            <Link href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
              <Scissors className="h-4 w-4" />
              {t("Agende_agora_193")}
            </Link>
          </Button>
        </div>

        <div className="flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            {[
              ["/#home", t("Home_254")],
              ["/#sobre", t("Sobre_184")],
              ["/#servicos", t("Servicos_255")],
              ["/#localizacao", t("Localizacao_256")],
            ].map(([href, label]) => (
              <Link
                key={href}
                href={href}
                className="text-sm font-bold text-[#EBEBEB]/65 transition hover:text-[#F2AD1D]"
              >
                {label}
              </Link>
            ))}
          </div>
          <div>
            <Link
              href="https://www.instagram.com/urus_barbearia?igsh=M3c4NzBtNmcxbWh4"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-bold text-[#EBEBEB]/65 transition hover:text-[#F2AD1D]"
            >
              <Instagram className="w-5 h-5" />
              <span>Instagram</span>
            </Link>
          </div>
        </div>
        <div className="border-t border-white/10 pt-6 text-sm text-[#EBEBEB]/45">
          <p>
            &copy; {new Date().getFullYear()}{" "}
            {t("URUS_Barbearia_Todos_os_direitos_reservados_259")}
          </p>
        </div>
      </div>
    </footer>
  )
}
