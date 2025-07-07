"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { DashboardLayout } from "@/components/dashboard/sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ArrowLeft, Calendar, CreditCard, Edit, Save, Star, Trash, User } from "lucide-react"
import type { Cliente, Agendamento, Assinatura } from "@/types"

export default function ClienteDetailPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [isEditing, setIsEditing] = useState(false)
  const [activeTab, setActiveTab] = useState("perfil")

  // Mock data for client
  const cliente: Cliente = {
    id: params.id,
    nome: "João Silva",
    email: "joao@email.com",
    telefone: "+5511999999991",
    foto: "https://randomuser.me/api/portraits/men/1.jpg",
    role: "cliente",
    data_cadastro: "2024-01-10",
    historico_agendamentos: ["1", "5", "8"],
    avaliacoes: ["1", "2"],
    ativo: true,
    plano_id: "1",
    data_nascimento: "1990-05-15",
    endereco: {
      rua: "Rua das Flores",
      numero: "123",
      bairro: "Centro",
      cidade: "São Paulo",
      estado: "SP",
      cep: "01001-000",
    },
    observacoes: "Cliente prefere atendimento com Rafael",
  }

  // Mock data for appointments
  const agendamentos: Agendamento[] = [
    {
      id: "1",
      cliente_id: params.id,
      profissional_id: "1",
      servico_id: "1",
      data: "2024-04-10",
      hora: "14:30",
      status: "concluido",
      valor: 45.0,
      avaliacao: {
        nota: 5,
        comentario: "Excelente atendimento!",
      },
    },
    {
      id: "5",
      cliente_id: params.id,
      profissional_id: "1",
      servico_id: "3",
      data: "2024-03-15",
      hora: "10:00",
      status: "concluido",
      valor: 70.0,
      avaliacao: {
        nota: 4,
        comentario: "Muito bom!",
      },
    },
    {
      id: "8",
      cliente_id: params.id,
      profissional_id: "2",
      servico_id: "2",
      data: "2024-04-25",
      hora: "16:00",
      status: "agendado",
      valor: 35.0,
    },
  ]

  // Mock data for subscription
  const assinatura: Assinatura = {
    id: "101",
    cliente_id: params.id,
    plano_id: "1",
    data_inicio: "2024-03-01",
    data_fim: "2024-04-01",
    status: "ativa",
    valor_pago: 99.9,
    forma_pagamento: "cartao",
    renovacao_automatica: true,
    servicos_utilizados: [
      { servico_id: "1", quantidade_utilizada: 1 },
      { servico_id: "2", quantidade_utilizada: 0 },
    ],
  }

  // Mock data for plans
  const planos = [
    {
      id: "1",
      nome: "Plano Mensal",
      descricao: "Acesso a 2 cortes e 1 barba por mês",
      valor_mensal: 99.9,
    },
    {
      id: "2",
      nome: "Plano Trimestral",
      descricao: "Acesso a 2 cortes e 1 barba por mês por 3 meses",
      valor_mensal: 89.9,
    },
    {
      id: "3",
      nome: "Plano Anual",
      descricao: "Acesso a 2 cortes e 1 barba por mês por 12 meses",
      valor_mensal: 79.9,
    },
  ]

  const handleSave = () => {
    // Here you would save the client data
    setIsEditing(false)
  }

  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-4">
          <Button variant="outline" size="icon" onClick={() => router.back()}>
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <div>
            <h1 className="text-3xl font-bold tracking-tight">{cliente.nome}</h1>
            <p className="text-muted-foreground">Detalhes do cliente</p>
          </div>
          <div className="ml-auto">
            {isEditing ? (
              <Button onClick={handleSave}>
                <Save className="mr-2 h-4 w-4" />
                Salvar
              </Button>
            ) : (
              <Button onClick={() => setIsEditing(true)}>
                <Edit className="mr-2 h-4 w-4" />
                Editar
              </Button>
            )}
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="mb-4">
            <TabsTrigger value="perfil">Perfil</TabsTrigger>
            <TabsTrigger value="agendamentos">Agendamentos</TabsTrigger>
            <TabsTrigger value="assinatura">Assinatura</TabsTrigger>
          </TabsList>

          <TabsContent value="perfil">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Dados Pessoais</CardTitle>
                  <CardDescription>Informações básicas do cliente</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-col items-center sm:flex-row sm:items-start gap-4 mb-6">
                    <Avatar className="h-24 w-24">
                      <AvatarImage src={cliente.foto || "/placeholder.svg"} alt={cliente.nome} />
                      <AvatarFallback className="text-2xl">{cliente.nome.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 space-y-1 text-center sm:text-left">
                      <h3 className="font-semibold text-xl">{cliente.nome}</h3>
                      <p className="text-muted-foreground">
                        Cliente desde {new Date(cliente.data_cadastro).toLocaleDateString("pt-BR")}
                      </p>
                      <div className="flex flex-wrap justify-center sm:justify-start gap-2 mt-2">
                        <Badge variant={cliente.ativo ? "default" : "destructive"}>
                          {cliente.ativo ? "Ativo" : "Inativo"}
                        </Badge>
                        {cliente.plano_id && (
                          <Badge variant="secondary" className="flex items-center gap-1">
                            <CreditCard className="h-3 w-3" />
                            {planos.find((p) => p.id === cliente.plano_id)?.nome || "Plano"}
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>

                  {isEditing ? (
                    <div className="space-y-4">
                      <div className="grid gap-2">
                        <Label htmlFor="nome">Nome Completo</Label>
                        <Input id="nome" defaultValue={cliente.nome} />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-2">
                          <Label htmlFor="email">E-mail</Label>
                          <Input id="email" type="email" defaultValue={cliente.email} />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="telefone">Telefone</Label>
                          <Input id="telefone" defaultValue={cliente.telefone} />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-2">
                          <Label htmlFor="data_nascimento">Data de Nascimento</Label>
                          <Input id="data_nascimento" type="date" defaultValue={cliente.data_nascimento} />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="status">Status</Label>
                          <Select defaultValue={cliente.ativo ? "ativo" : "inativo"}>
                            <SelectTrigger id="status">
                              <SelectValue placeholder="Selecione o status" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="ativo">Ativo</SelectItem>
                              <SelectItem value="inativo">Inativo</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="observacoes">Observações</Label>
                        <Textarea id="observacoes" defaultValue={cliente.observacoes} />
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">E-mail</p>
                          <p>{cliente.email}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">Telefone</p>
                          <p>{cliente.telefone}</p>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">Data de Nascimento</p>
                          <p>
                            {cliente.data_nascimento
                              ? new Date(cliente.data_nascimento).toLocaleDateString("pt-BR")
                              : "Não informado"}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">Status</p>
                          <p>{cliente.ativo ? "Ativo" : "Inativo"}</p>
                        </div>
                      </div>
                      {cliente.observacoes && (
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">Observações</p>
                          <p>{cliente.observacoes}</p>
                        </div>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Endereço</CardTitle>
                  <CardDescription>Informações de endereço do cliente</CardDescription>
                </CardHeader>
                <CardContent>
                  {isEditing ? (
                    <div className="space-y-4">
                      <div className="grid gap-2">
                        <Label htmlFor="cep">CEP</Label>
                        <Input id="cep" defaultValue={cliente.endereco?.cep} />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="rua">Rua</Label>
                        <Input id="rua" defaultValue={cliente.endereco?.rua} />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-2">
                          <Label htmlFor="numero">Número</Label>
                          <Input id="numero" defaultValue={cliente.endereco?.numero} />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="complemento">Complemento</Label>
                          <Input id="complemento" defaultValue={cliente.endereco?.complemento} />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-2">
                          <Label htmlFor="bairro">Bairro</Label>
                          <Input id="bairro" defaultValue={cliente.endereco?.bairro} />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="cidade">Cidade</Label>
                          <Input id="cidade" defaultValue={cliente.endereco?.cidade} />
                        </div>
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="estado">Estado</Label>
                        <Select defaultValue={cliente.endereco?.estado}>
                          <SelectTrigger id="estado">
                            <SelectValue placeholder="Selecione o estado" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="SP">São Paulo</SelectItem>
                            <SelectItem value="RJ">Rio de Janeiro</SelectItem>
                            <SelectItem value="MG">Minas Gerais</SelectItem>
                            {/* Add other states */}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {cliente.endereco ? (
                        <>
                          <p>
                            {cliente.endereco.rua}, {cliente.endereco.numero}
                            {cliente.endereco.complemento && `, ${cliente.endereco.complemento}`}
                          </p>
                          <p>
                            {cliente.endereco.bairro} - {cliente.endereco.cidade}/{cliente.endereco.estado}
                          </p>
                          <p>CEP: {cliente.endereco.cep}</p>
                        </>
                      ) : (
                        <p className="text-muted-foreground">Endereço não cadastrado</p>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>

              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle>Estatísticas</CardTitle>
                  <CardDescription>Resumo da atividade do cliente</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="flex flex-col items-center p-4 border rounded-lg">
                      <Calendar className="h-8 w-8 text-primary mb-2" />
                      <p className="text-2xl font-bold">{agendamentos.length}</p>
                      <p className="text-sm text-muted-foreground">Agendamentos</p>
                    </div>
                    <div className="flex flex-col items-center p-4 border rounded-lg">
                      <Star className="h-8 w-8 text-yellow-500 mb-2" />
                      <p className="text-2xl font-bold">4.5</p>
                      <p className="text-sm text-muted-foreground">Avaliação Média</p>
                    </div>
                    <div className="flex flex-col items-center p-4 border rounded-lg">
                      <CreditCard className="h-8 w-8 text-green-500 mb-2" />
                      <p className="text-2xl font-bold">
                        R$ {agendamentos.reduce((sum, a) => sum + a.valor, 0).toFixed(2)}
                      </p>
                      <p className="text-sm text-muted-foreground">Valor Total</p>
                    </div>
                    <div className="flex flex-col items-center p-4 border rounded-lg">
                      <User className="h-8 w-8 text-blue-500 mb-2" />
                      <p className="text-2xl font-bold">{new Set(agendamentos.map((a) => a.profissional_id)).size}</p>
                      <p className="text-sm text-muted-foreground">Profissionais</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="agendamentos">
            <Card>
              <CardHeader>
                <CardTitle>Histórico de Agendamentos</CardTitle>
                <CardDescription>Todos os agendamentos do cliente</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Data</TableHead>
                      <TableHead>Horário</TableHead>
                      <TableHead>Serviço</TableHead>
                      <TableHead>Profissional</TableHead>
                      <TableHead>Valor</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Avaliação</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {agendamentos.map((agendamento) => (
                      <TableRow key={agendamento.id}>
                        <TableCell>{new Date(agendamento.data).toLocaleDateString("pt-BR")}</TableCell>
                        <TableCell>{agendamento.hora}</TableCell>
                        <TableCell>
                          {agendamento.servico_id === "1"
                            ? "Corte Degradê"
                            : agendamento.servico_id === "2"
                              ? "Barba"
                              : agendamento.servico_id === "3"
                                ? "Combo Clássico"
                                : "Serviço"}
                        </TableCell>
                        <TableCell>
                          {agendamento.profissional_id === "1"
                            ? "Rafael"
                            : agendamento.profissional_id === "2"
                              ? "Carlos"
                              : "André"}
                        </TableCell>
                        <TableCell>R$ {agendamento.valor.toFixed(2)}</TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              agendamento.status === "concluido"
                                ? "default"
                                : agendamento.status === "agendado"
                                  ? "outline"
                                  : agendamento.status === "cancelado"
                                    ? "destructive"
                                    : "secondary"
                            }
                          >
                            {agendamento.status === "concluido"
                              ? "Concluído"
                              : agendamento.status === "agendado"
                                ? "Agendado"
                                : agendamento.status === "cancelado"
                                  ? "Cancelado"
                                  : "No-show"}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          {agendamento.avaliacao ? (
                            <div className="flex items-center">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-4 w-4 ${i < agendamento.avaliacao!.nota ? "text-yellow-500 fill-yellow-500" : "text-muted-foreground"}`}
                                />
                              ))}
                            </div>
                          ) : (
                            <span className="text-xs text-muted-foreground">Sem avaliação</span>
                          )}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="ml-auto">
                  <Calendar className="mr-2 h-4 w-4" />
                  Novo Agendamento
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="assinatura">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Assinatura Atual</CardTitle>
                  <CardDescription>Detalhes da assinatura do cliente</CardDescription>
                </CardHeader>
                <CardContent>
                  {assinatura ? (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold">
                          {planos.find((p) => p.id === assinatura.plano_id)?.nome || "Plano"}
                        </h3>
                        <Badge
                          variant={
                            assinatura.status === "ativa"
                              ? "default"
                              : assinatura.status === "pendente"
                                ? "outline"
                                : "destructive"
                          }
                        >
                          {assinatura.status === "ativa"
                            ? "Ativa"
                            : assinatura.status === "pendente"
                              ? "Pendente"
                              : assinatura.status === "cancelada"
                                ? "Cancelada"
                                : "Expirada"}
                        </Badge>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">Data de Início</p>
                          <p>{new Date(assinatura.data_inicio).toLocaleDateString("pt-BR")}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">Data de Término</p>
                          <p>{new Date(assinatura.data_fim).toLocaleDateString("pt-BR")}</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">Valor Pago</p>
                          <p>R$ {assinatura.valor_pago.toFixed(2)}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">Forma de Pagamento</p>
                          <p className="capitalize">{assinatura.forma_pagamento}</p>
                        </div>
                      </div>

                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Renovação Automática</p>
                        <p>{assinatura.renovacao_automatica ? "Sim" : "Não"}</p>
                      </div>

                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Serviços Utilizados</p>
                        <div className="mt-2 space-y-2">
                          {assinatura.servicos_utilizados.map((servico) => (
                            <div key={servico.servico_id} className="flex justify-between items-center">
                              <span>
                                {servico.servico_id === "1"
                                  ? "Corte Degradê"
                                  : servico.servico_id === "2"
                                    ? "Barba"
                                    : "Serviço"}
                              </span>
                              <Badge variant="outline">
                                {servico.quantidade_utilizada} /
                                {servico.servico_id === "1" ? "2" : servico.servico_id === "2" ? "1" : "0"}
                              </Badge>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center py-8">
                      <CreditCard className="h-12 w-12 text-muted-foreground mb-4" />
                      <p className="text-muted-foreground">Cliente sem assinatura ativa</p>
                      <Button className="mt-4">Adicionar Assinatura</Button>
                    </div>
                  )}
                </CardContent>
                {assinatura && (
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" className="text-destructive">
                      <Trash className="mr-2 h-4 w-4" />
                      Cancelar Assinatura
                    </Button>
                    <Button>
                      <Edit className="mr-2 h-4 w-4" />
                      Editar Assinatura
                    </Button>
                  </CardFooter>
                )}
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Histórico de Pagamentos</CardTitle>
                  <CardDescription>Pagamentos realizados pelo cliente</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Data</TableHead>
                        <TableHead>Valor</TableHead>
                        <TableHead>Plano</TableHead>
                        <TableHead>Status</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>{new Date(assinatura.data_inicio).toLocaleDateString("pt-BR")}</TableCell>
                        <TableCell>R$ {assinatura.valor_pago.toFixed(2)}</TableCell>
                        <TableCell>{planos.find((p) => p.id === assinatura.plano_id)?.nome || "Plano"}</TableCell>
                        <TableCell>
                          <Badge variant="default">Pago</Badge>
                        </TableCell>
                      </TableRow>
                      {/* Add more payment history rows here */}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}
