import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/70 z-10"></div>
        <Image src="/barbearia.png" alt="Barbearia" fill className="object-cover" priority />
      </div>
      <div className="container mx-auto px-4 z-20">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal mb-6 leading-tight">
            Tenha a{" "}
            <span className="font-bold bg-gradient-to-r from-stone-100 to-stone-600 text-transparent bg-clip-text">
              melhor
            </span>{" "}
            experiência na barbearia{" "}
            <span className="font-bold bg-gradient-to-r from-stone-100 to-stone-600 text-transparent bg-clip-text">
              mais incrível da cidade baixa
            </span>
          </h1>
          <Link href="https://wa.me/5571992997191" target="_blank" rel="noopener noreferrer">
            <Button className="bg-gradient-to-r from-stone-400 to-stone-800 text-white border-0 px-8 py-6 text-lg hover:opacity-90 transition">
              Agende agora
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

