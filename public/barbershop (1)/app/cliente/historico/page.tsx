"use client"

import { useState } from "react"
import { format } from "date-fns"
import { ptBR } from "date-fns/locale"
import { Calendar, Clock, Scissors, Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

// Mock data para histórico de serviços
const historicoServicos = [
  {
    id: "1",
    servico: "Corte Degradê",
    profissional: {
      nome: "Rafael Silva",
      foto: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    data: "2025-04-15T14:30:00",
    valor: 45.0,
    status: "concluido",
    avaliacao: 5,
  },
  {
    id: "2",
    servico: "Barba Completa",
    profissional: {
      nome: "Carlos Oliveira",
      foto: "https://randomuser.me/api/portraits/men/44.jpg",
    },
    data: "2025-03-28T10:00:00",
    valor: 35.0,
    status: "concluido",
    avaliacao: 4,
  },
  {
    id: "3",
    servico: "Combo Clássico",
    profissional: {
      nome: "André Santos",
      foto: "https://randomuser.me/api/portraits/men/68.jpg",
    },
    data: "2025-03-10T16:30:00",
    valor: 70.0,
    status: "concluido",
    avaliacao: 5,
  },
  {
    id: "4",
    servico: "Corte Navalhado",
    profissional: {
      nome: "Rafael Silva",
      foto: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    data: "2025-04-25T11:00:00",
    valor: 50.0,
    status: "agendado",
  },
]

export default function HistoricoPage() {
  const [activeTab, setActiveTab] = useState("todos")

  const filteredServices =
    activeTab === "todos" ? historicoServicos : historicoServicos.filter((service) => service.status === activeTab)

  return (
    <div className="flex flex-col gap-5">
      <div className="mb-1">
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">Histórico de Serviços</h1>
        <p className="text-sm text-muted-foreground">Veja seus serviços agendados e concluídos</p>
      </div>

      <Tabs defaultValue="todos" onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-4 h-9">
          <TabsTrigger value="todos" className="text-xs sm:text-sm">
            Todos
          </TabsTrigger>
          <TabsTrigger value="agendado" className="text-xs sm:text-sm">
            Agendados
          </TabsTrigger>
          <TabsTrigger value="concluido" className="text-xs sm:text-sm">
            Concluídos
          </TabsTrigger>
        </TabsList>

        <TabsContent value={activeTab} className="space-y-3 sm:space-y-4">
          {filteredServices.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-muted-foreground text-sm">Nenhum serviço encontrado.</p>
            </div>
          ) : (
            filteredServices.map((item) => (
              <Card key={item.id} className="overflow-hidden shadow-sm">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row">
                    <div className="flex-1 p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-sm sm:text-base">{item.servico}</h3>
                        <Badge variant={item.status === "agendado" ? "outline" : "default"} className="text-[10px] h-5">
                          {item.status === "agendado" ? "Agendado" : "Concluído"}
                        </Badge>
                      </div>

                      <div className="flex items-center gap-2 mb-3">
                        <Avatar className="h-5 w-5 sm:h-6 sm:w-6">
                          <AvatarImage
                            src={item.profissional.foto || "/placeholder.svg"}
                            alt={item.profissional.nome}
                          />
                          <AvatarFallback>{item.profissional.nome[0]}</AvatarFallback>
                        </Avatar>
                        <span className="text-xs sm:text-sm text-muted-foreground">{item.profissional.nome}</span>
                      </div>

                      <div className="grid grid-cols-2 gap-2 sm:gap-4 text-xs sm:text-sm">
                        <div className="flex items-center gap-1 sm:gap-2">
                          <Calendar className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground" />
                          <span>{format(new Date(item.data), "dd 'de' MMM", { locale: ptBR })}</span>
                        </div>
                        <div className="flex items-center gap-1 sm:gap-2">
                          <Clock className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground" />
                          <span>{format(new Date(item.data), "HH:mm")}</span>
                        </div>
                        <div className="flex items-center gap-1 sm:gap-2">
                          <Scissors className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground" />
                          <span>R$ {item.valor.toFixed(2)}</span>
                        </div>
                        {item.avaliacao && (
                          <div className="flex items-center gap-1 sm:gap-2">
                            <Star className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-500 fill-yellow-500" />
                            <span>{item.avaliacao}/5</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {item.status === "agendado" && (
                      <div className="flex flex-row md:flex-col justify-between md:justify-center items-center gap-2 p-3 sm:p-4 bg-muted md:w-auto">
                        <Button className="h-8 text-xs flex-1 md:flex-auto md:w-full" variant="outline">
                          Reagendar
                        </Button>
                        <Button className="h-8 text-xs flex-1 md:flex-auto md:w-full" variant="destructive">
                          Cancelar
                        </Button>
                      </div>
                    )}

                    {item.status === "concluido" && !item.avaliacao && (
                      <div className="p-3 sm:p-4 bg-muted flex justify-end md:w-auto">
                        <Button className="h-8 text-xs md:w-full">Avaliar</Button>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}
