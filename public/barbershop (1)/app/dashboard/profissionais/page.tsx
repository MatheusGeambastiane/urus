"use client"

import { useState } from "react"
import { DashboardLayout } from "@/components/dashboard/sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Edit, Plus, Star } from "lucide-react"
import type { Profissional } from "@/types"

export default function ProfissionaisPage() {
  const [openDialog, setOpenDialog] = useState(false)

  // Mock data for professionals
  const profissionais: Profissional[] = [
    {
      id: "1",
      nome: "Rafael Silva",
      email: "rafael@barbearia.com",
      telefone: "+5511999999991",
      foto: "https://randomuser.me/api/portraits/men/32.jpg",
      role: "profissional",
      bio: "Especialista em cortes degradê e modernos.",
      dias_disponiveis: ["segunda", "terça", "quarta", "quinta", "sexta"],
      horarios_por_dia: {
        segunda: ["09:00", "10:00", "11:00", "14:00", "15:00", "16:00"],
        terça: ["09:00", "10:00", "11:00", "14:00", "15:00", "16:00"],
        quarta: ["09:00", "10:00", "11:00", "14:00", "15:00", "16:00"],
        quinta: ["09:00", "10:00", "11:00", "14:00", "15:00", "16:00"],
        sexta: ["09:00", "10:00", "11:00", "14:00", "15:00", "16:00"],
      },
      servicos_ids: ["1", "3", "4"],
      comissao_tipo: "percentual",
      comissao_valor: 40,
      ativo: true,
    },
    {
      id: "2",
      nome: "Carlos Oliveira",
      email: "carlos@barbearia.com",
      telefone: "+5511999999992",
      foto: "https://randomuser.me/api/portraits/men/44.jpg",
      role: "profissional",
      bio: "Especialista em barbas e tratamentos faciais.",
      dias_disponiveis: ["segunda", "quarta", "sexta", "sábado"],
      horarios_por_dia: {
        segunda: ["09:00", "10:00", "11:00", "14:00", "15:00", "16:00"],
        quarta: ["09:00", "10:00", "11:00", "14:00", "15:00", "16:00"],
        sexta: ["09:00", "10:00", "11:00", "14:00", "15:00", "16:00"],
        sábado: ["09:00", "10:00", "11:00", "12:00"],
      },
      servicos_ids: ["2", "3"],
      comissao_tipo: "percentual",
      comissao_valor: 35,
      ativo: true,
    },
    {
      id: "3",
      nome: "André Santos",
      email: "andre@barbearia.com",
      telefone: "+5511999999993",
      foto: "https://randomuser.me/api/portraits/men/68.jpg",
      role: "profissional",
      bio: "Especialista em cortes clássicos e tratamentos capilares.",
      dias_disponiveis: ["terça", "quarta", "quinta", "sábado"],
      horarios_por_dia: {
        terça: ["09:00", "10:00", "11:00", "14:00", "15:00", "16:00"],
        quarta: ["09:00", "10:00", "11:00", "14:00", "15:00", "16:00"],
        quinta: ["09:00", "10:00", "11:00", "14:00", "15:00", "16:00"],
        sábado: ["09:00", "10:00", "11:00", "12:00", "13:00"],
      },
      servicos_ids: ["1", "2", "3", "5"],
      comissao_tipo: "fixo",
      comissao_valor: 50,
      ativo: true,
    },
  ]

  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Profissionais</h1>
            <p className="text-muted-foreground">Gerencie os barbeiros e profissionais da barbearia</p>
          </div>
          <Dialog open={openDialog} onOpenChange={setOpenDialog}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Novo Profissional
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px]">
              <DialogHeader>
                <DialogTitle>Adicionar Profissional</DialogTitle>
                <DialogDescription>
                  Preencha os dados para adicionar um novo profissional à barbearia.
                </DialogDescription>
              </DialogHeader>
              <Tabs defaultValue="dados">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="dados">Dados Pessoais</TabsTrigger>
                  <TabsTrigger value="horarios">Horários</TabsTrigger>
                  <TabsTrigger value="servicos">Serviços</TabsTrigger>
                </TabsList>
                <TabsContent value="dados" className="space-y-4 py-4">
                  <div className="grid gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="nome">Nome Completo</Label>
                      <Input id="nome" placeholder="Nome do profissional" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="grid gap-2">
                        <Label htmlFor="email">E-mail</Label>
                        <Input id="email" type="email" placeholder="email@exemplo.com" />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="telefone">Telefone</Label>
                        <Input id="telefone" placeholder="(00) 00000-0000" />
                      </div>
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="bio">Biografia</Label>
                      <Textarea id="bio" placeholder="Especialidades e experiência..." />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="grid gap-2">
                        <Label htmlFor="comissao_tipo">Tipo de Comissão</Label>
                        <Select>
                          <SelectTrigger id="comissao_tipo">
                            <SelectValue placeholder="Selecione" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="percentual">Percentual</SelectItem>
                            <SelectItem value="fixo">Valor Fixo</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="comissao_valor">Valor da Comissão</Label>
                        <Input id="comissao_valor" type="number" placeholder="40" />
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="horarios" className="space-y-4 py-4">
                  <div className="grid gap-4">
                    <div className="grid gap-2">
                      <Label>Dias Disponíveis</Label>
                      <div className="flex flex-wrap gap-2">
                        {["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo"].map((dia) => (
                          <Button key={dia} variant="outline" size="sm" className="rounded-full">
                            {dia}
                          </Button>
                        ))}
                      </div>
                    </div>
                    <div className="grid gap-2">
                      <Label>Horários por Dia</Label>
                      <div className="border rounded-md p-4">
                        <h4 className="font-medium mb-2">Segunda-feira</h4>
                        <div className="flex flex-wrap gap-2">
                          {["09:00", "10:00", "11:00", "14:00", "15:00", "16:00", "17:00"].map((hora) => (
                            <Button key={hora} variant="outline" size="sm">
                              {hora}
                            </Button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="servicos" className="space-y-4 py-4">
                  <div className="grid gap-4">
                    <div className="grid gap-2">
                      <Label>Serviços Habilitados</Label>
                      <div className="flex flex-wrap gap-2">
                        <Button variant="outline" size="sm" className="rounded-full">
                          Corte Degradê
                        </Button>
                        <Button variant="outline" size="sm" className="rounded-full">
                          Barba Completa
                        </Button>
                        <Button variant="outline" size="sm" className="rounded-full">
                          Combo Clássico
                        </Button>
                        <Button variant="outline" size="sm" className="rounded-full">
                          Corte Navalhado
                        </Button>
                        <Button variant="outline" size="sm" className="rounded-full">
                          Combo Premium
                        </Button>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
              <DialogFooter>
                <Button variant="outline" onClick={() => setOpenDialog(false)}>
                  Cancelar
                </Button>
                <Button type="submit">Salvar Profissional</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {profissionais.map((profissional) => (
            <Card key={profissional.id}>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-4">
                  <Avatar className="h-14 w-14">
                    <AvatarImage src={profissional.foto || "/placeholder.svg"} alt={profissional.nome} />
                    <AvatarFallback>{profissional.nome.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle>{profissional.nome}</CardTitle>
                    <CardDescription className="flex items-center gap-1">
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className={`h-3 w-3 ${star <= 4 ? "text-yellow-500 fill-yellow-500" : "text-muted-foreground"}`}
                          />
                        ))}
                      </div>
                      <span className="text-xs">(4.0)</span>
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pb-2">
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-muted-foreground">Especialidade</p>
                    <p className="text-sm">{profissional.bio}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Serviços</p>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {profissional.servicos_ids.map((id) => (
                        <Badge key={id} variant="secondary" className="text-xs">
                          {id === "1"
                            ? "Corte Degradê"
                            : id === "2"
                              ? "Barba"
                              : id === "3"
                                ? "Combo"
                                : id === "4"
                                  ? "Navalhado"
                                  : "Premium"}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Comissão</p>
                    <p className="text-sm">
                      {profissional.comissao_tipo === "percentual"
                        ? `${profissional.comissao_valor}% por serviço`
                        : `R$ ${profissional.comissao_valor.toFixed(2)} por serviço`}
                    </p>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm">
                  Ver Agenda
                </Button>
                <Button variant="outline" size="sm">
                  <Edit className="h-4 w-4 mr-2" />
                  Editar
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  )
}
