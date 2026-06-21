"use client"

import { useState } from "react"
import { Poppins } from "next/font/google"
import Link from "next/link"
import { Menu, Scissors, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const poppins = Poppins({
  subsets: ["latin"],
  weight: "600",
})

const navItems = [
  { href: "/#sobre", label: "Sobre" },
  { href: "/#servicos", label: "Servicos" },
  { href: "/protese-capilar", label: "Protese capilar" },
  { href: "/massoterapia-quick-massage-taping-salvador", label: "Massoterapia" },
  { href: "/#localizacao", label: "Localizacao" },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#030304]/80 backdrop-blur-xl">
      <div className="urus-container flex items-center justify-between py-3">
        <Link href="/" className="flex items-center gap-3" aria-label="URUS Barbearia">
          <span className={`${poppins.className} text-2xl font-semibold tracking-[0.34em] text-[#EBEBEB]`}>
            URUS
          </span>
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
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
            <Link
              href="https://agenda.urusbarbearia.com.br/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Scissors className="h-4 w-4" />
              Agendar
            </Link>
          </Button>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="h-10 w-10 rounded-full border border-white/10 text-[#EBEBEB] hover:bg-white/10 lg:hidden"
          onClick={() => setIsOpen((value) => !value)}
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {isOpen ? (
        <div className="border-t border-white/10 bg-[#030304] lg:hidden">
          <div className="urus-container grid gap-1 py-4">
            {navItems.map((item) => (
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
                href="https://agenda.urusbarbearia.com.br/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
              >
                <Scissors className="h-4 w-4" />
                Agende agora
              </Link>
            </Button>
          </div>
        </div>
      ) : null}
    </nav>
  )
}
