"use client"

import { useState } from "react"
import { DashboardLayout } from "@/components/dashboard/sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Check, CreditCard, Edit, Plus } from "lucide-react"
import type { PlanoAssinatura } from "@/types"

export default function AssinaturasPage() {
  const [openDialog, setOpenDialog] = useState(false)
  const [currentTab, setCurrentTab] = useState("planos")

  // Mock data for subscription plans
  const planos: PlanoAssinatura[] = [
    {
      id: "1",
      nome: "Mensal Flex",
      descricao: "Até 4 serviços por mês",
      valor: 80.0,
      tipo: "mensal",
      beneficios: [
        "Até 4 serviços por mês",
        "Não acumula de um mês para outro",
        "Serviços adicionais com 10% de desconto",
      ],
      limite_servicos: 4,
      acumula_servicos: false,
      desconto_adicionais: 10,
      pontos_por_servico: 5,
    },
    {
      id: "2",
      nome: "Premium Ilimitado",
      descricao: "Serviços ilimitados",
      valor: 100.0,
      tipo: "premium",
      beneficios: ["Serviços ilimitados", "Prioridade de agendamento", "Participação em sorteios VIP"],
      acumula_servicos: false,
      pontos_por_servico: 10,
    },
  ]

  // Mock data for active subscriptions
  const assinaturas = [
    {
      id: "1",
      cliente: {
        id: "1",
        nome: "João Silva",
        foto: "https://randomuser.me/api/portraits/men/1.jpg",
      },
      plano: "premium",
      data_inicio: "2024-03-01",
      data_fim: "2024-04-01",
      valor: 100.0,
      status: "ativo",
      servicos_utilizados: 3,
    },
    {
      id: "2",
      cliente: {
        id: "3",
        nome: "Lucas Oliveira",
        foto: "https://randomuser.me/api/portraits/men/3.jpg",
      },
      plano: "mensal",
      data_inicio: "2024-02-15",
      data_fim: "2024-03-15",
      valor: 80.0,
      status: "ativo",
      servicos_utilizados: 2,
    },
    {
      id: "3",
      cliente: {
        id: "5",
        nome: "Gabriel Costa",
        foto: "https://randomuser.me/api/portraits/men/5.jpg",
      },
      plano: "mensal",
      data_inicio: "2024-03-10",
      data_fim: "2024-04-10",
      valor: 80.0,
      status: "ativo",
      servicos_utilizados: 1,
    },
    {
      id: "4",
      cliente: {
        id: "6",
        nome: "Thiago Souza",
        foto: "https://randomuser.me/api/portraits/men/6.jpg",
      },
      plano: "premium",
      data_inicio: "2024-01-15",
      data_fim: "2024-02-15",
      valor: 100.0,
      status: "expirado",
      servicos_utilizados: 8,
    },
  ]

  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Assinaturas</h1>
            <p className="text-muted-foreground">Gerencie os planos e assinaturas da barbearia</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2">
            <Dialog open={openDialog} onOpenChange={setOpenDialog}>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  Novo Plano
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[600px]">
                <DialogHeader>
                  <DialogTitle>Criar Novo Plano</DialogTitle>
                  <DialogDescription>
                    Configure um novo plano de assinatura para oferecer aos clientes.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid gap-2">
                    <Label htmlFor="nome">Nome do Plano</Label>
                    <Input id="nome" placeholder="Ex: Plano Básico" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="descricao">Descrição Curta</Label>
                    <Input id="descricao" placeholder="Ex: Até 3 serviços por mês" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="valor">Valor Mensal (R$)</Label>
                      <Input id="valor" type="number" min="0" step="0.01" placeholder="79.90" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="tipo">Tipo de Plano</Label>
                      <select
                        id="tipo"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        <option value="mensal">Mensal (Limitado)</option>
                        <option value="premium">Premium (Ilimitado)</option>
                      </select>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="limite">Limite de Serviços</Label>
                      <Input id="limite" type="number" min="0" placeholder="4" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="pontos">Pontos por Serviço</Label>
                      <Input id="pontos" type="number" min="0" placeholder="5" />
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="beneficios">Benefícios (um por linha)</Label>
                    <textarea
                      id="beneficios"
                      className="flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Até 4 serviços por mês&#10;Não acumula de um mês para outro&#10;Serviços adicionais com 10% de desconto"
                    ></textarea>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="acumula" className="rounded border-gray-300" />
                    <Label htmlFor="acumula">Acumula serviços não utilizados para o próximo mês</Label>
                  </div>
                </div>
                <DialogFooter>
                  <Button variant="outline" onClick={() => setOpenDialog(false)}>
                    Cancelar
                  </Button>
                  <Button type="submit">Criar Plano</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        <Tabs defaultValue="planos" value={currentTab} onValueChange={setCurrentTab}>
          <TabsList className="mb-4">
            <TabsTrigger value="planos">Planos</TabsTrigger>
            <TabsTrigger value="assinaturas">Assinaturas Ativas</TabsTrigger>
          </TabsList>

          <TabsContent value="planos">
            <div className="grid gap-6 md:grid-cols-2">
              {planos.map((plano) => (
                <Card key={plano.id} className={plano.tipo === "premium" ? "border-primary" : ""}>
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <div>
                        <CardTitle>{plano.nome}</CardTitle>
                        <CardDescription>{plano.descricao}</CardDescription>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold">R$ {plano.valor.toFixed(2)}</div>
                        <CardDescription>por mês</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {plano.beneficios.map((beneficio, index) => (
                        <li key={index} className="flex items-start">
                          <Check className="h-5 w-5 text-primary mr-2 shrink-0" />
                          <span>{beneficio}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 pt-4 border-t">
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Cashback por serviço:</span>
                        <Badge variant="outline" className="bg-amber-50 text-amber-700 hover:bg-amber-50">
                          {plano.pontos_por_servico} pontos
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline">
                      <Edit className="h-4 w-4 mr-2" />
                      Editar
                    </Button>
                    <Button>Ver Assinantes</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="assinaturas">
            <Card>
              <CardHeader>
                <CardTitle>Assinaturas Ativas</CardTitle>
                <CardDescription>Gerenciamento de assinaturas de clientes</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Cliente</TableHead>
                      <TableHead>Plano</TableHead>
                      <TableHead>Início</TableHead>
                      <TableHead>Próxima Cobrança</TableHead>
                      <TableHead>Serviços Utilizados</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Ações</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {assinaturas.map((assinatura) => (
                      <TableRow key={assinatura.id}>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <img
                              src={assinatura.cliente.foto || "/placeholder.svg"}
                              alt={assinatura.cliente.nome}
                              className="h-8 w-8 rounded-full"
                            />
                            <span>{assinatura.cliente.nome}</span>
                          </div>
                        </TableCell>
                        <TableCell>{assinatura.plano === "premium" ? "Premium Ilimitado" : "Mensal Flex"}</TableCell>
                        <TableCell>{new Date(assinatura.data_inicio).toLocaleDateString("pt-BR")}</TableCell>
                        <TableCell>{new Date(assinatura.data_fim).toLocaleDateString("pt-BR")}</TableCell>
                        <TableCell>
                          {assinatura.plano === "mensal" ? (
                            <Badge variant="outline">{assinatura.servicos_utilizados}/4</Badge>
                          ) : (
                            <Badge variant="outline">{assinatura.servicos_utilizados}</Badge>
                          )}
                        </TableCell>
                        <TableCell>
                          <Badge variant={assinatura.status === "ativo" ? "default" : "secondary"}>
                            {assinatura.status === "ativo" ? "Ativo" : "Expirado"}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button variant="outline" size="sm">
                            <CreditCard className="h-4 w-4 mr-2" />
                            Gerenciar
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}
