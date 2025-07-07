"use client"

import { useState } from "react"
import { DashboardLayout } from "@/components/dashboard/sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
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
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Edit, Plus, Trash } from "lucide-react"
import type { Servico } from "@/types"

export default function ServicosPage() {
  const [openDialog, setOpenDialog] = useState(false)
  const [currentTab, setCurrentTab] = useState("todos")

  // Mock data for services
  const servicos: Servico[] = [
    {
      id: "1",
      nome: "Corte Degradê",
      descricao: "Corte moderno com degradê nas laterais",
      duracao_min: 40,
      preco: 45.0,
      profissionais_ids: ["1", "3"],
      categoria: "corte",
      disponivel: true,
    },
    {
      id: "2",
      nome: "Barba Completa",
      descricao: "Aparar e modelar barba com toalha quente e produtos",
      duracao_min: 30,
      preco: 35.0,
      profissionais_ids: ["2", "3"],
      categoria: "barba",
      disponivel: true,
    },
    {
      id: "3",
      nome: "Combo Clássico",
      descricao: "Corte de cabelo + barba",
      duracao_min: 60,
      preco: 70.0,
      profissionais_ids: ["1", "2", "3"],
      categoria: "combo",
      disponivel: true,
    },
    {
      id: "4",
      nome: "Corte Navalhado",
      descricao: "Corte com acabamento de navalha",
      duracao_min: 45,
      preco: 50.0,
      profissionais_ids: ["1"],
      categoria: "corte",
      disponivel: true,
    },
    {
      id: "5",
      nome: "Combo Premium",
      descricao: "Corte, barba e hidratação",
      duracao_min: 90,
      preco: 100.0,
      profissionais_ids: ["3"],
      categoria: "combo",
      disponivel: true,
    },
  ]

  const filteredServicos =
    currentTab === "todos" ? servicos : servicos.filter((servico) => servico.categoria === currentTab)

  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Serviços</h1>
            <p className="text-muted-foreground">Gerencie os serviços oferecidos pela barbearia</p>
          </div>
          <Dialog open={openDialog} onOpenChange={setOpenDialog}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Novo Serviço
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[550px]">
              <DialogHeader>
                <DialogTitle>Adicionar Serviço</DialogTitle>
                <DialogDescription>Preencha os dados para adicionar um novo serviço à barbearia.</DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="nome">Nome do Serviço</Label>
                  <Input id="nome" placeholder="Ex: Corte Degradê" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="descricao">Descrição</Label>
                  <Textarea id="descricao" placeholder="Descreva o serviço..." />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="duracao">Duração (minutos)</Label>
                    <Input id="duracao" type="number" min="5" step="5" placeholder="30" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="preco">Preço (R$)</Label>
                    <Input id="preco" type="number" min="0" step="0.01" placeholder="50.00" />
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="categoria">Categoria</Label>
                  <Select>
                    <SelectTrigger id="categoria">
                      <SelectValue placeholder="Selecione uma categoria" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="corte">Corte</SelectItem>
                      <SelectItem value="barba">Barba</SelectItem>
                      <SelectItem value="combo">Combo</SelectItem>
                      <SelectItem value="outros">Outros</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label>Profissionais Habilitados</Label>
                  <div className="flex flex-wrap gap-2">
                    <Button variant="outline" size="sm" className="rounded-full">
                      Rafael
                    </Button>
                    <Button variant="outline" size="sm" className="rounded-full">
                      Carlos
                    </Button>
                    <Button variant="outline" size="sm" className="rounded-full">
                      André
                    </Button>
                  </div>
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setOpenDialog(false)}>
                  Cancelar
                </Button>
                <Button type="submit">Salvar Serviço</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        <Tabs defaultValue="todos" value={currentTab} onValueChange={setCurrentTab}>
          <TabsList className="mb-4">
            <TabsTrigger value="todos">Todos</TabsTrigger>
            <TabsTrigger value="corte">Cortes</TabsTrigger>
            <TabsTrigger value="barba">Barba</TabsTrigger>
            <TabsTrigger value="combo">Combos</TabsTrigger>
            <TabsTrigger value="outros">Outros</TabsTrigger>
          </TabsList>
          <Card>
            <CardHeader>
              <CardTitle>Lista de Serviços</CardTitle>
              <CardDescription>{filteredServicos.length} serviços encontrados</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Nome</TableHead>
                    <TableHead>Duração</TableHead>
                    <TableHead>Preço</TableHead>
                    <TableHead>Categoria</TableHead>
                    <TableHead>Profissionais</TableHead>
                    <TableHead className="text-right">Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredServicos.map((servico) => (
                    <TableRow key={servico.id}>
                      <TableCell className="font-medium">{servico.nome}</TableCell>
                      <TableCell>{servico.duracao_min} min</TableCell>
                      <TableCell>R$ {servico.preco.toFixed(2)}</TableCell>
                      <TableCell className="capitalize">{servico.categoria}</TableCell>
                      <TableCell>{servico.profissionais_ids.length}</TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="icon">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Trash className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}
