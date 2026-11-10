"use client"

import { useTranslations } from "next-intl"
import type { Translator } from "@/i18n/types"

import LanguageSwitcher from "@/components/LanguageSwitcher"
import { useState } from "react"
import { Poppins } from "next/font/google"
import { Link } from "@/i18n/navigation"
import { Menu, Scissors, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { BOOKING_URL } from "@/lib/urls"

const poppins = Poppins({
  subsets: ["latin"],
  weight: "600",
})

const navItems = (t: Translator) => [
  { href: "/#sobre", label: t("Sobre_184") },
  { href: "/#servicos", label: t("Servicos_185") },
  { href: "/protese-capilar", label: t("Protese_capilar_186") },
  {
    href: "/massoterapia-quick-massage-taping-salvador",
    label: t("Massoterapia_187"),
  },
  { href: "/#localizacao", label: t("Localizacao_188") },
]

export default function Navigation() {
  const t = useTranslations("site")

  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#030304]/80 backdrop-blur-xl">
      <div className="urus-container flex items-center justify-between py-3">
        <Link
          href="/"
          className="flex items-center gap-3"
          aria-label="URUS Barbearia"
        >
          <span
            className={`${poppins.className} text-2xl font-semibold tracking-[0.34em] text-[#EBEBEB]`}
          >
            URUS
          </span>
        </Link>

        <div className="hidden items-center gap-4 xl:gap-7 xl:flex">
          {navItems(t).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-[#EBEBEB]/80 transition hover:text-[#F2AD1D]"
            >
              {item.label}
            </Link>
          ))}
          <Button
            asChild
            className="h-11 rounded-full border border-[#EBEBEB]/20 bg-[#EBEBEB] px-6 text-sm font-extrabold text-[#030304] shadow-[0_10px_28px_rgba(235,235,235,0.18)] transition hover:bg-white"
          >
            <Link href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
              <Scissors className="h-4 w-4" />
              {t("Agendar_190")}
            </Link>
          </Button>
        </div>

        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <Button
            variant="ghost"
            size="icon"
            className="h-10 w-10 rounded-full border border-white/10 text-[#EBEBEB] hover:bg-white/10 xl:hidden"
            onClick={() => setIsOpen((value) => !value)}
            aria-label={isOpen ? t("Fechar_menu_191") : t("Abrir_menu_192")}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {isOpen ? (
        <div className="border-t border-white/10 bg-[#030304] xl:hidden">
          <div className="urus-container grid gap-1 py-4">
            {navItems(t).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-3 text-sm font-semibold text-[#EBEBEB]/85 hover:bg-white/10 hover:text-[#F2AD1D]"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button
              asChild
              className="mt-3 h-12 rounded-full bg-[#EBEBEB] font-extrabold text-[#030304] hover:bg-white"
            >
              <Link
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
              >
                <Scissors className="h-4 w-4" />
                {t("Agende_agora_193")}
              </Link>
            </Button>
          </div>
        </div>
      ) : null}
    </nav>
  )
}
