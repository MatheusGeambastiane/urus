"use client"

import { useLocale } from "next-intl"
import { useTransition } from "react"
import { usePathname, getPathname } from "@/i18n/navigation"
import { useRouter } from "next/navigation"
import Image from "next/image"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { routing, type Locale } from "@/i18n/routing"

const labels: Record<Locale, string> = {
  "pt-BR": "Português (BR)",
  en: "English",
  es: "Español",
  fr: "Français",
}
const flags: Record<Locale, string> = {
  "pt-BR": "/flags/br.svg",
  en: "/flags/us.svg",
  es: "/flags/es.svg",
  fr: "/flags/fr.svg",
}
const accessibleLabels: Record<Locale, string> = {
  "pt-BR": "Selecionar idioma",
  en: "Select language",
  es: "Seleccionar idioma",
  fr: "Choisir la langue",
}

export default function LanguageSwitcher() {
  const locale = useLocale() as Locale
  const pathname = usePathname()
  const router = useRouter()
  const [pending, startTransition] = useTransition()

  return (
    <Select
      value={locale}
      disabled={pending}
      onValueChange={(value) => {
        const nextLocale = value as Locale
        startTransition(() => {
          router.replace(
            `${getPathname({ href: pathname, locale: nextLocale })}${window.location.search}${window.location.hash}`,
            { scroll: false },
          )
        })
      }}
    >
      <SelectTrigger
        aria-label={accessibleLabels[locale]}
        className="h-10 w-auto min-w-[170px] gap-2 rounded-full border-white/20 bg-[#030304] text-[#EBEBEB] focus:ring-[#F2AD1D] focus:ring-offset-0"
      >
        <SelectValue>
          <LanguageLabel locale={locale} />
        </SelectValue>
      </SelectTrigger>
      <SelectContent className="z-[60] border-white/20 bg-[#030304] text-[#EBEBEB]">
        {routing.locales.map((value) => (
          <SelectItem
            key={value}
            value={value}
            textValue={labels[value]}
            className="focus:bg-white/10 focus:text-white"
          >
            <LanguageLabel locale={value} />
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}

function LanguageLabel({ locale }: { locale: Locale }) {
  return (
    <span className="flex items-center gap-2 whitespace-nowrap" lang={locale}>
      <Image
        src={flags[locale]}
        alt=""
        aria-hidden="true"
        width={24}
        height={18}
        unoptimized
        className="h-[18px] w-6 shrink-0 rounded-sm object-cover"
      />
      {labels[locale]}
    </span>
  )
}
