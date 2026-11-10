import { useTranslations } from "next-intl"
import { Link } from "@/i18n/navigation"
import { PhoneIcon } from "lucide-react"

export default function WhatsAppButton() {
  const t = useTranslations("site")

  return (
    <Link
      href="https://wa.me/5571992109189"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_16px_45px_rgba(37,211,102,0.36)] transition hover:scale-105 hover:bg-[#1fbd5a]"
      aria-label={t("Abrir_WhatsApp_da_URUS_Barbearia_194")}
    >
      <PhoneIcon className="w-6 h-6" />
    </Link>
  )
}
