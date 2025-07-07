"use client"

import { useState } from "react"
import { DashboardLayout } from "@/components/dashboard/sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
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
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Download, Edit, Eye, Plus, Search, Star, Trash } from "lucide-react"
import type { Cliente } from "@/types"

export default function ClientesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [openDialog, setOpenDialog] = useState(false)
  const [openViewDialog, setOpenViewDialog] = useState(false)
  const [openEditDialog, setOpenEditDialog] = useState(false)
  const [selectedClient, setSelectedClient] = useState<Cliente | null>(null)

  // Mock data for clients
  const clientes: Cliente[] = [
    {
      id: "1",
      nome: "João Silva",
      email: "joao@email.com",
      telefone: "+5511999999991",
      foto: "https://randomuser.me/api/portraits/men/1.jpg",
      role: "cliente",
      data_cadastro: "2024-01-10",
      historico_agendamentos: ["1", "5", "8"],
      avaliacoes: ["1", "2"],
      empresa: "Tech Solutions",
      pontos: 45,
      assinatura: {
        plano: "premium",
        data_inicio: "2024-03-01",
        data_fim: "2024-04-01",
        status: "ativo",
      },
      ativo: true,
    },
    {
      id: "2",
      nome: "Pedro Santos",
      email: "pedro@email.com",
      telefone: "+5511999999992",
      foto: "https://randomuser.me/api/portraits/men/2.jpg",
      role: "cliente",
      data_cadastro: "2024-01-15",
      historico_agendamentos: ["2", "6"],
      avaliacoes: ["3"],
      empresa: "Marketing Digital",
      pontos: 20,
      assinatura: null,
      ativo: true,
    },
    {
      id: "3",
      nome: "Lucas Oliveira",
      email: "lucas@email.com",
      telefone: "+5511999999993",
      foto: "https://randomuser.me/api/portraits/men/3.jpg",
      role: "cliente",
      data_cadastro: "2024-01-20",
      historico_agendamentos: ["3", "9"],
      avaliacoes: ["4"],
      empresa: "Consultoria ABC",
      pontos: 15,
      assinatura: {
        plano: "mensal",
        data_inicio: "2024-02-15",
        data_fim: "2024-03-15",
        status: "ativo",
      },
      ativo: true,
    },
    {
      id: "4",
      nome: "Marcos Pereira",
      email: "marcos@email.com",
      telefone: "+5511999999994",
      foto: "https://randomuser.me/api/portraits/men/4.jpg",
      role: "cliente",
      data_cadastro: "2024-02-01",
      historico_agendamentos: ["4"],
      avaliacoes: [],
      empresa: "Autônomo",
      pontos: 8,
      assinatura: null,
      ativo: true,
    },
    {
      id: "5",
      nome: "Gabriel Costa",
      email: "gabriel@email.com",
      telefone: "+5511999999995",
      foto: "https://randomuser.me/api/portraits/men/5.jpg",
      role: "cliente",
      data_cadastro: "2024-02-10",
      historico_agendamentos: ["7"],
      avaliacoes: ["5"],
      empresa: "Startup XYZ",
      pontos: 30,
      assinatura: {
        plano: "mensal",
        data_inicio: "2024-03-10",
        data_fim: "2024-04-10",
        status: "ativo",
      },
      ativo: true,
    },
    {
      id: "6",
      nome: "Thiago Souza",
      email: "thiago@email.com",
      telefone: "+5511999999996",
      foto: "https://randomuser.me/api/portraits/men/6.jpg",
      role: "cliente",
      data_cadastro: "2024-02-15",
      historico_agendamentos: ["10"],
      avaliacoes: [],
      empresa: "Empresa LTDA",
      pontos: 0,
      assinatura: {
        plano: "premium",
        data_inicio: "2024-01-15",
        data_fim: "2024-02-15",
        status: "expirado",
      },
      ativo: true,
    },
  ]

  const filteredClientes = clientes.filter(
    (cliente) =>
      cliente.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cliente.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cliente.telefone.includes(searchTerm) ||
      (cliente.empresa && cliente.empresa.toLowerCase().includes(searchTerm.toLowerCase())),
  )

  const handleViewClient = (cliente: Cliente) => {
    setSelectedClient(cliente)
    setOpenViewDialog(true)
  }

  const handleEditClient = (cliente: Cliente) => {
    setSelectedClient(cliente)
    setOpenEditDialog(true)
  }

  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Clientes</h1>
            <p className="text-muted-foreground">Gerencie os clientes da barbearia</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2">
            <Dialog open={openDialog} onOpenChange={setOpenDialog}>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  Novo Cliente
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[600px]">
                <DialogHeader>
                  <DialogTitle>Adicionar Cliente</DialogTitle>
                  <DialogDescription>Preencha os dados para adicionar um novo cliente à barbearia.</DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid gap-2">
                    <Label htmlFor="nome">Nome Completo</Label>
                    <Input id="nome" placeholder="Nome do cliente" />
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
                    <Label htmlFor="empresa">Empresa</Label>
                    <Input id="empresa" placeholder="Onde trabalha" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="foto">Foto</Label>
                    <Input id="foto" type="file" />
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="notificacoes" className="rounded border-gray-300" />
                    <Label htmlFor="notificacoes">Permitir notificações via WhatsApp e e-mail</Label>
                  </div>
                </div>
                <DialogFooter>
                  <Button variant="outline" onClick={() => setOpenDialog(false)}>
                    Cancelar
                  </Button>
                  <Button type="submit">Salvar Cliente</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Exportar
            </Button>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Lista de Clientes</CardTitle>
            <CardDescription>Gerencie os clientes cadastrados na barbearia</CardDescription>
            <div className="mt-4 relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Buscar por nome, email, telefone ou empresa..."
                className="pl-8"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Cliente</TableHead>
                  <TableHead>Contato</TableHead>
                  <TableHead>Empresa</TableHead>
                  <TableHead>Visitas</TableHead>
                  <TableHead>Assinatura</TableHead>
                  <TableHead>Pontos</TableHead>
                  <TableHead className="text-right">Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredClientes.map((cliente) => (
                  <TableRow key={cliente.id}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarImage src={cliente.foto || "/placeholder.svg"} alt={cliente.nome} />
                          <AvatarFallback>{cliente.nome.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{cliente.nome}</p>
                          <p className="text-xs text-muted-foreground">
                            Desde {new Date(cliente.data_cadastro).toLocaleDateString("pt-BR")}
                          </p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-col">
                        <span>{cliente.email}</span>
                        <span className="text-xs text-muted-foreground">{cliente.telefone}</span>
                      </div>
                    </TableCell>
                    <TableCell>{cliente.empresa || "-"}</TableCell>
                    <TableCell>
                      <Badge variant="outline">{cliente.historico_agendamentos.length}</Badge>
                    </TableCell>
                    <TableCell>
                      {cliente.assinatura ? (
                        <Badge variant={cliente.assinatura.status === "ativo" ? "default" : "secondary"}>
                          {cliente.assinatura.plano === "premium" ? "Premium" : "Mensal"}
                        </Badge>
                      ) : (
                        <span className="text-xs text-muted-foreground">Sem plano</span>
                      )}
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline" className="bg-amber-50 text-amber-700 hover:bg-amber-50">
                        {cliente.pontos} pts
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="icon" title="Ver Perfil" onClick={() => handleViewClient(cliente)}>
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" title="Editar" onClick={() => handleEditClient(cliente)}>
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" title="Excluir">
                        <Trash className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>

      {/* View Client Dialog */}
      <Dialog open={openViewDialog} onOpenChange={setOpenViewDialog}>
        <DialogContent className="sm:max-w-[700px]">
          <DialogHeader>
            <DialogTitle>Detalhes do Cliente</DialogTitle>
            <DialogDescription>Informações completas do cliente</DialogDescription>
          </DialogHeader>
          {selectedClient && (
            <Tabs defaultValue="info">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="info">Informações</TabsTrigger>
                <TabsTrigger value="historico">Histórico</TabsTrigger>
                <TabsTrigger value="assinatura">Assinatura</TabsTrigger>
              </TabsList>
              <TabsContent value="info" className="space-y-4 py-4">
                <div className="flex items-center gap-4">
                  <Avatar className="h-20 w-20">
                    <AvatarImage src={selectedClient.foto || "/placeholder.svg"} alt={selectedClient.nome} />
                    <AvatarFallback>{selectedClient.nome.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-xl font-bold">{selectedClient.nome}</h3>
                    <p className="text-muted-foreground">
                      Cliente desde {new Date(selectedClient.data_cadastro).toLocaleDateString("pt-BR")}
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium mb-2">Informações de Contato</h4>
                    <div className="space-y-2">
                      <div>
                        <p className="text-sm text-muted-foreground">E-mail</p>
                        <p>{selectedClient.email}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Telefone</p>
                        <p>{selectedClient.telefone}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Empresa</p>
                        <p>{selectedClient.empresa || "-"}</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Estatísticas</h4>
                    <div className="space-y-2">
                      <div>
                        <p className="text-sm text-muted-foreground">Total de Visitas</p>
                        <p>{selectedClient.historico_agendamentos.length}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Avaliações</p>
                        <p>{selectedClient.avaliacoes.length}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Pontos Acumulados</p>
                        <p>{selectedClient.pontos} pontos</p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="historico" className="space-y-4 py-4">
                <h4 className="font-medium">Histórico de Agendamentos</h4>
                <div className="space-y-3">
                  {selectedClient.historico_agendamentos.length > 0 ? (
                    selectedClient.historico_agendamentos.map((id) => (
                      <div key={id} className="border rounded-md p-3">
                        <div className="flex justify-between">
                          <div>
                            <p className="font-medium">Corte Degradê</p>
                            <p className="text-sm text-muted-foreground">15/04/2024 - Rafael</p>
                          </div>
                          <Badge>Concluído</Badge>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="text-muted-foreground">Nenhum agendamento encontrado.</p>
                  )}
                </div>
                <h4 className="font-medium mt-6">Avaliações</h4>
                <div className="space-y-3">
                  {selectedClient.avaliacoes.length > 0 ? (
                    selectedClient.avaliacoes.map((id) => (
                      <div key={id} className="border rounded-md p-3">
                        <div className="flex items-center gap-2 mb-2">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              className={`h-4 w-4 ${star <= 4 ? "text-yellow-500 fill-yellow-500" : "text-muted-foreground"}`}
                            />
                          ))}
                        </div>
                        <p className="text-sm">Excelente atendimento! Muito satisfeito com o resultado.</p>
                        <p className="text-xs text-muted-foreground mt-1">Corte Degradê - 15/04/2024</p>
                      </div>
                    ))
                  ) : (
                    <p className="text-muted-foreground">Nenhuma avaliação encontrada.</p>
                  )}
                </div>
              </TabsContent>
              <TabsContent value="assinatura" className="space-y-4 py-4">
                <h4 className="font-medium">Detalhes da Assinatura</h4>
                {selectedClient.assinatura ? (
                  <div className="border rounded-md p-4">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-lg font-bold">
                        Plano {selectedClient.assinatura.plano === "premium" ? "Premium Ilimitado" : "Mensal Flex"}
                      </h3>
                      <Badge variant={selectedClient.assinatura.status === "ativo" ? "default" : "secondary"}>
                        {selectedClient.assinatura.status === "ativo" ? "Ativo" : "Expirado"}
                      </Badge>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <p className="text-muted-foreground">Data de início</p>
                        <p>{new Date(selectedClient.assinatura.data_inicio).toLocaleDateString("pt-BR")}</p>
                      </div>
                      <div className="flex justify-between">
                        <p className="text-muted-foreground">Próxima renovação</p>
                        <p>{new Date(selectedClient.assinatura.data_fim).toLocaleDateString("pt-BR")}</p>
                      </div>
                      <div className="flex justify-between">
                        <p className="text-muted-foreground">Valor</p>
                        <p>R$ {selectedClient.assinatura.plano === "premium" ? "100,00" : "80,00"}/mês</p>
                      </div>
                    </div>
                    <div className="mt-4 flex gap-2">
                      <Button variant="outline" size="sm">
                        Cancelar Assinatura
                      </Button>
                      <Button size="sm">Alterar Plano</Button>
                    </div>
                  </div>
                ) : (
                  <div className="border rounded-md p-4 text-center">
                    <p className="mb-2">Este cliente não possui assinatura ativa.</p>
                    <Button>Adicionar Assinatura</Button>
                  </div>
                )}
                <h4 className="font-medium mt-4">Histórico de Pontos</h4>
                <div className="border rounded-md">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Data</TableHead>
                        <TableHead>Descrição</TableHead>
                        <TableHead>Pontos</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>15/04/2024</TableCell>
                        <TableCell>Corte Degradê</TableCell>
                        <TableCell className="text-green-600">+10</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>01/04/2024</TableCell>
                        <TableCell>Barba</TableCell>
                        <TableCell className="text-green-600">+5</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>20/03/2024</TableCell>
                        <TableCell>Resgate de desconto</TableCell>
                        <TableCell className="text-red-600">-20</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </TabsContent>
            </Tabs>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setOpenViewDialog(false)}>
              Fechar
            </Button>
            <Button
              onClick={() => {
                setOpenViewDialog(false)
                if (selectedClient) handleEditClient(selectedClient)
              }}
            >
              Editar Cliente
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Edit Client Dialog */}
      <Dialog open={openEditDialog} onOpenChange={setOpenEditDialog}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Editar Cliente</DialogTitle>
            <DialogDescription>Atualize as informações do cliente</DialogDescription>
          </DialogHeader>
          {selectedClient && (
            <div className="grid gap-4 py-4">
              <div className="flex justify-center mb-2">
                <Avatar className="h-24 w-24">
                  <AvatarImage src={selectedClient.foto || "/placeholder.svg"} alt={selectedClient.nome} />
                  <AvatarFallback>{selectedClient.nome.charAt(0)}</AvatarFallback>
                </Avatar>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="edit-nome">Nome Completo</Label>
                <Input id="edit-nome" defaultValue={selectedClient.nome} />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="edit-email">E-mail</Label>
                  <Input id="edit-email" type="email" defaultValue={selectedClient.email} />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="edit-telefone">Telefone</Label>
                  <Input id="edit-telefone" defaultValue={selectedClient.telefone} />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="edit-empresa">Empresa</Label>
                <Input id="edit-empresa" defaultValue={selectedClient.empresa || ""} />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="edit-foto">Atualizar Foto</Label>
                <Input id="edit-foto" type="file" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="edit-pontos">Pontos</Label>
                  <Input id="edit-pontos" type="number" defaultValue={selectedClient.pontos} />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="edit-status">Status</Label>
                  <select
                    id="edit-status"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    defaultValue={selectedClient.ativo ? "ativo" : "inativo"}
                  >
                    <option value="ativo">Ativo</option>
                    <option value="inativo">Inativo</option>
                  </select>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="edit-notificacoes" className="rounded border-gray-300" defaultChecked />
                <Label htmlFor="edit-notificacoes">Permitir notificações via WhatsApp e e-mail</Label>
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setOpenEditDialog(false)}>
              Cancelar
            </Button>
            <Button type="submit">Salvar Alterações</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </DashboardLayout>
  )
}
