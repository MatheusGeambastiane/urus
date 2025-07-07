"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronRight, Scissors, BeakerIcon as Beard, Star, Package, Sparkles } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { clienteConfig } from "@/config/cliente-config"

// Categorias de serviços com ícones
const categorias = [
  { id: "corte", nome: "Cortes", icon: Scissors, cor: "bg-blue-500" },
  { id: "barba", nome: "Barba", icon: Beard, cor: "bg-amber-500" },
  { id: "combo", nome: "Combos", icon: Package, cor: "bg-green-500" },
  { id: "premium", nome: "Premium", icon: Sparkles, cor: "bg-purple-500" },
  { id: "outros", nome: "Outros", icon: Star, cor: "bg-pink-500" },
]

// Profissionais disponíveis
const profissionais = [
  {
    id: "1",
    nome: "Rafael Silva",
    foto: "https://randomuser.me/api/portraits/men/32.jpg",
    especialidade: "Especialista em cortes modernos",
    avaliacao: 4.8,
  },
  {
    id: "2",
    nome: "Carlos Oliveira",
    foto: "https://randomuser.me/api/portraits/men/44.jpg",
    especialidade: "Especialista em barbas",
    avaliacao: 4.6,
  },
  {
    id: "3",
    nome: "André Santos",
    foto: "https://randomuser.me/api/portraits/men/68.jpg",
    especialidade: "Especialista em cortes clássicos",
    avaliacao: 4.9,
  },
]

export default function ClientePage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  // Dados do cliente a partir da configuração
  const clienteData = {
    nome: clienteConfig.nome,
    pontos: clienteConfig.pontosDisponiveis,
    pontosParaProximoNivel: clienteConfig.pontosParaProximoNivel,
    assinatura: clienteConfig.isAssinante
      ? {
          plano: clienteConfig.assinatura.plano,
          validUntil: clienteConfig.assinatura.validUntil,
        }
      : null,
    proximoAgendamento: {
      service: "Corte Degradê",
      dateFormatted: "25 de abril de 2025",
      time: "14:30",
      professional: "Rafael",
    },
  }

  return (
    <div className="flex flex-col gap-5">
      {/* Cabeçalho com boas-vindas */}
      <div className="mb-1">
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">Bem-vindo, {clienteData.nome}</h1>
        <p className="text-sm text-muted-foreground">Confira seus próximos agendamentos e informações</p>
      </div>

      {/* Card de pontos com barra de progresso */}
      <Card className="shadow-sm">
        <CardContent className="p-4">
          <div className="flex justify-between items-center mb-2">
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
              <span className="font-medium">Seus pontos</span>
            </div>
            <span className="text-lg font-bold">{clienteData.pontos} pts</span>
          </div>
          <Progress value={(clienteData.pontos / clienteData.pontosParaProximoNivel) * 100} className="h-2" />
          <p className="text-xs text-muted-foreground mt-2">
            Mais {clienteData.pontosParaProximoNivel - clienteData.pontos} pontos para o próximo nível
          </p>
        </CardContent>
      </Card>

      {/* Banner promocional */}
      <div className="relative w-full h-36 sm:h-40 bg-gradient-to-r from-primary to-primary/70 rounded-lg overflow-hidden shadow-sm">
        <div className="absolute inset-0 p-4 sm:p-6 flex flex-col justify-center">
          <h3 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">Promoção de Abril</h3>
          <p className="text-sm text-white/90 mb-3 sm:mb-4">Combo corte + barba com 20% de desconto!</p>
          <Button variant="secondary" size="sm" className="w-fit text-xs sm:text-sm py-1 px-3 h-8">
            Aproveitar
          </Button>
        </div>
        <div className="absolute right-0 bottom-0 opacity-20">
          <Scissors className="h-24 sm:h-32 w-24 sm:w-32 text-white" />
        </div>
      </div>

      {/* Carrossel de categorias de serviços (estilo iFood) */}
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <h2 className="text-base sm:text-lg font-semibold">Serviços</h2>
          <Link href="/cliente/servicos" className="text-xs sm:text-sm text-primary flex items-center">
            Ver todos <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4" />
          </Link>
        </div>

        <div className="flex gap-3 sm:gap-4 overflow-x-auto pb-2 scrollbar-hide -mx-1 px-1">
          {categorias.map((categoria) => (
            <Link
              key={categoria.id}
              href={`/cliente/agendar?categoria=${categoria.id}`}
              className="flex flex-col items-center gap-1 sm:gap-2 min-w-[65px] sm:min-w-[72px]"
            >
              <div
                className={`${categoria.cor} w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center shadow-sm`}
              >
                <categoria.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
              </div>
              <span className="text-[10px] sm:text-xs text-center">{categoria.nome}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Informações da assinatura */}
      {clienteData.assinatura ? (
        <Card className="shadow-sm">
          <CardHeader className="pb-2 pt-4 px-4">
            <CardTitle className="text-base sm:text-lg">Sua Assinatura</CardTitle>
          </CardHeader>
          <CardContent className="px-4 pb-4">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-medium text-sm sm:text-base">{clienteData.assinatura.plano}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Válido até {clienteData.assinatura.validUntil}
                </p>
              </div>
              <Badge
                variant="outline"
                className="bg-green-50 text-green-700 hover:bg-green-50 dark:bg-green-900/30 dark:text-green-400 dark:hover:bg-green-900/30 text-xs"
              >
                Ativo
              </Badge>
            </div>
          </CardContent>
        </Card>
      ) : (
        <Card className="shadow-sm">
          <CardHeader className="pb-2 pt-4 px-4">
            <CardTitle className="text-base sm:text-lg">Assinatura</CardTitle>
          </CardHeader>
          <CardContent className="px-4 pb-4">
            <div className="flex flex-col gap-3">
              <p className="text-sm text-muted-foreground">Você não possui uma assinatura ativa</p>
              <Button size="sm" className="w-fit" asChild>
                <Link href="/cliente/assinatura">Ver planos</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Próximo agendamento */}
      {clienteData.proximoAgendamento && (
        <Card className="shadow-sm">
          <CardHeader className="pb-2 pt-4 px-4">
            <CardTitle className="text-base sm:text-lg">Próximo Agendamento</CardTitle>
          </CardHeader>
          <CardContent className="px-4 pb-4">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-medium text-sm sm:text-base">{clienteData.proximoAgendamento.service}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  {clienteData.proximoAgendamento.dateFormatted} às {clienteData.proximoAgendamento.time}
                </p>
                <p className="text-xs sm:text-sm">Com {clienteData.proximoAgendamento.professional}</p>
              </div>
              <Button variant="outline" size="sm" className="h-8 text-xs">
                Ver detalhes
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Profissionais disponíveis */}
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <h2 className="text-base sm:text-lg font-semibold">Profissionais Disponíveis</h2>
          <Link href="/cliente/agendar" className="text-xs sm:text-sm text-primary flex items-center">
            Agendar <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4" />
          </Link>
        </div>

        <div className="grid gap-3 sm:gap-4">
          {profissionais.map((prof) => (
            <Card key={prof.id} className="overflow-hidden shadow-sm">
              <CardContent className="p-0">
                <div className="flex items-center p-3 sm:p-4">
                  <Avatar className="h-10 w-10 sm:h-12 sm:w-12 mr-3 sm:mr-4">
                    <AvatarImage src={prof.foto || "/placeholder.svg"} alt={prof.nome} />
                    <AvatarFallback>{prof.nome.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-sm sm:text-base truncate">{prof.nome}</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground line-clamp-1">{prof.especialidade}</p>
                    <div className="flex items-center mt-1">
                      <Star className="h-3 w-3 text-yellow-500 fill-yellow-500 mr-1" />
                      <span className="text-[10px] sm:text-xs">{prof.avaliacao}</span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="h-8 text-xs whitespace-nowrap" asChild>
                    <Link href={`/cliente/agendar?profissional=${prof.id}`}>Agendar</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
