import Link from "next/link"
import { PhoneIcon } from "lucide-react"

export default function WhatsAppButton() {
  return (
    <Link
      href="https://wa.me/5571992997191"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center"
    >
      <PhoneIcon className="w-6 h-6" />
    </Link>
  )
}

