import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <span className="text-xl font-bold">URUS</span>
        </Link>
        <div className="hidden md:flex items-center space-x-6">
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
            href="https://wa.me/5571992997191"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-stone-400 to-stone-800 px-4 py-2 rounded-md font-medium hover:opacity-90 transition"
          >
            Agende seu horário
          </Link>
        </div>
        <Button variant="ghost" className="md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </Button>
      </div>
    </nav>
  )
}

