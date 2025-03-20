import Link from "next/link"
import { Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="py-10 bg-black">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <span className="text-2xl font-bold">URUS</span>
            <p className="text-ddcece mt-2">A melhor experiência em barbearia</p>
          </div>
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center">
            <Link href="#home" className="text-white hover:text-gray-300 transition">
              Home
            </Link>
            <Link href="#sobre" className="text-white hover:text-gray-300 transition">
              Sobre nós
            </Link>
            <Link href="#servicos" className="text-white hover:text-gray-300 transition">
              Serviços
            </Link>
            <Link href="#localizacao" className="text-white hover:text-gray-300 transition">
              Localização
            </Link>
            <Link
              href="https://www.instagram.com/urus_barbearia?igsh=M3c4NzBtNmcxbWh4"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-amber-400 transition flex items-center gap-1"
            >
              <Instagram className="w-5 h-5" />
              <span>Instagram</span>
            </Link>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-ddcece">
          <p>&copy; {new Date().getFullYear()} URUS Barbearia. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

