"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { CreditCard } from "lucide-react"

export default function PerfilPage() {
  const [isEditing, setIsEditing] = useState(false)

  // Mock client data
  const cliente = {
    id: "1",
    nome: "Matheus Silva",
    email: "matheus@email.com",
    telefone: "+5511999999991",
    foto: "https://randomuser.me/api/portraits/men/1.jpg",
    empresa: "Tech Solutions",
    data_cadastro: "2024-01-10",
    pontos: 45,
    total_servicos: 12,
    preferencia_notificacao: {
      whatsapp: true,
      email: true,
    },
    assinatura: {
      plano: "premium",
      nome: "Premium Ilimitado",
      data_inicio: "2024-03-01",
      data_fim: "2024-04-01",
      status: "ativo",
    },
    historico_pontos: [
      { id: "1", data: "2024-04-10", descricao: "Barba Completa", pontos: 10, tipo: "credito" },
      { id: "2", data: "2024-03-25", descricao: "Corte Degradê", pontos: 10, tipo: "credito" },
      { id: "3", data: "2024-03-20", descricao: "Resgate de desconto", pontos: 20, tipo: "debito" },
      { id: "4", data: "2024-03-10", descricao: "Combo Clássico", pontos: 10, tipo: "credito" },
      { id: "5", data: "2024-02-28", descricao: "Corte Navalhado", pontos: 10, tipo: "credito" },
      { id: "6", data: "2024-02-15", descricao: "Barba Completa", pontos: 5, tipo: "credito" },
      { id: "7", data: "2024-02-01", descricao: "Resgate de desconto", pontos: 15, tipo: "debito" },
    ],
  }

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Meu Perfil</h1>
        <p className="text-muted-foreground">Gerencie suas informações pessoais e preferências</p>
      </div>

      <Tabs defaultValue="info">
        <TabsList className="mb-4">
          <TabsTrigger value="info">Informações Pessoais</TabsTrigger>
          <TabsTrigger value="assinatura">Minha Assinatura</TabsTrigger>
          <TabsTrigger value="pontos">Meus Pontos</TabsTrigger>
        </TabsList>

        <TabsContent value="info">
          <Card>
            <CardHeader>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <CardTitle>Informações Pessoais</CardTitle>
                <Button variant={isEditing ? "outline" : "default"} onClick={() => setIsEditing(!isEditing)}>
                  {isEditing ? "Cancelar" : "Editar Perfil"}
                </Button>
              </div>
              <CardDescription>Seus dados cadastrais e preferências</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3 flex flex-col items-center">
                  <Avatar className="w-32 h-32 mb-4">
                    <AvatarImage src={cliente.foto || "/placeholder.svg"} alt={cliente.nome} />
                    <AvatarFallback>{cliente.nome.charAt(0)}</AvatarFallback>
                  </Avatar>
                  {isEditing && (
                    <div className="w-full">
                      <Label htmlFor="foto" className="mb-2 block">
                        Atualizar Foto
                      </Label>
                      <Input id="foto" type="file" />
                    </div>
                  )}
                  <div className="mt-4 text-center">
                    <p className="text-sm text-muted-foreground">Cliente desde</p>
                    <p>{new Date(cliente.data_cadastro).toLocaleDateString("pt-BR")}</p>
                  </div>
                  <div className="mt-4 text-center">
                    <p className="text-sm text-muted-foreground">Total de serviços</p>
                    <p>{cliente.total_servicos}</p>
                  </div>
                </div>
                <div className="md:w-2/3">
                  {isEditing ? (
                    <div className="space-y-4">
                      <div className="grid gap-2">
                        <Label htmlFor="nome">Nome Completo</Label>
                        <Input id="nome" defaultValue={cliente.nome} />
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="grid gap-2">
                          <Label htmlFor="email">E-mail</Label>
                          <Input id="email" type="email" defaultValue={cliente.email} />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="telefone">WhatsApp</Label>
                          <Input id="telefone" defaultValue={cliente.telefone} />
                        </div>
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="empresa">Empresa</Label>
                        <Input id="empresa" defaultValue={cliente.empresa} />
                      </div>
                      <div className="space-y-2">
                        <Label>Preferências de Notificação</Label>
                        <div className="flex flex-col gap-2">
                          <div className="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              id="notif-whatsapp"
                              className="rounded border-gray-300"
                              defaultChecked={cliente.preferencia_notificacao.whatsapp}
                            />
                            <Label htmlFor="notif-whatsapp">Receber notificações via WhatsApp</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              id="notif-email"
                              className="rounded border-gray-300"
                              defaultChecked={cliente.preferencia_notificacao.email}
                            />
                            <Label htmlFor="notif-email">Receber notificações via E-mail</Label>
                          </div>
                        </div>
                      </div>
                      <div className="pt-4">
                        <Button>Salvar Alterações</Button>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <h3 className="text-sm font-medium text-muted-foreground mb-1">Nome Completo</h3>
                          <p className="text-lg">{cliente.nome}</p>
                        </div>
                        <div>
                          <h3 className="text-sm font-medium text-muted-foreground mb-1">Empresa</h3>
                          <p className="text-lg">{cliente.empresa}</p>
                        </div>
                        <div>
                          <h3 className="text-sm font-medium text-muted-foreground mb-1">E-mail</h3>
                          <p className="text-lg">{cliente.email}</p>
                        </div>
                        <div>
                          <h3 className="text-sm font-medium text-muted-foreground mb-1">WhatsApp</h3>
                          <p className="text-lg">{cliente.telefone}</p>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-muted-foreground mb-1">Preferências de Notificação</h3>
                        <div className="flex gap-2 mt-1">
                          {cliente.preferencia_notificacao.whatsapp && <Badge variant="outline">WhatsApp</Badge>}
                          {cliente.preferencia_notificacao.email && <Badge variant="outline">E-mail</Badge>}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="assinatura">
          <Card>
            <CardHeader>
              <CardTitle>Minha Assinatura</CardTitle>
              <CardDescription>Detalhes do seu plano atual</CardDescription>
            </CardHeader>
            <CardContent>
              {cliente.assinatura ? (
                <div className="space-y-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/3">
                      <Card className="border-primary">
                        <CardHeader>
                          <div className="flex justify-between items-center">
                            <div>
                              <CardTitle>{cliente.assinatura.nome}</CardTitle>
                              <CardDescription>Plano ativo</CardDescription>
                            </div>
                            <CreditCard className="h-6 w-6 text-primary" />
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            <div className="flex justify-between items-center">
                              <span className="text-muted-foreground">Valor mensal:</span>
                              <span className="font-medium">R$ 100,00</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-muted-foreground">Próxima cobrança:</span>
                              <span>{new Date(cliente.assinatura.data_fim).toLocaleDateString("pt-BR")}</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-muted-foreground">Status:</span>
                              <Badge>{cliente.assinatura.status === "ativo" ? "Ativo" : "Inativo"}</Badge>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                    <div className="md:w-2/3">
                      <h3 className="font-medium mb-4">Benefícios do seu plano</h3>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary"></div>
                          <span>Serviços ilimitados</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary"></div>
                          <span>Prioridade de agendamento</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary"></div>
                          <span>10 pontos por serviço realizado</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary"></div>
                          <span>Participação em sorteios VIP</span>
                        </li>
                      </ul>
                      <div className="mt-6">
                        <Button variant="outline">Gerenciar Assinatura</Button>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-8">
                  <CreditCard className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                  <h3 className="text-lg font-medium mb-2">Você não possui assinatura ativa</h3>
                  <p className="text-muted-foreground mb-4">
                    Assine um de nossos planos para aproveitar serviços com preços especiais e benefícios exclusivos.
                  </p>
                  <Button>Ver Planos Disponíveis</Button>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="pontos">
          <Card>
            <CardHeader>
              <CardTitle>Meus Pontos</CardTitle>
              <CardDescription>Histórico e utilização de pontos</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3">
                  <Card>
                    <CardHeader>
                      <CardTitle>Pontos Disponíveis</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-center">
                        <p className="text-4xl font-bold">{cliente.pontos}</p>
                        <p className="text-muted-foreground">pontos</p>
                      </div>
                      <div className="mt-4">
                        <p className="text-sm text-muted-foreground mb-2">Equivalente a:</p>
                        <p className="text-lg font-medium">R$ {cliente.pontos.toFixed(2)} em descontos</p>
                      </div>
                      <div className="mt-4">
                        <Button className="w-full">Usar Pontos</Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <div className="md:w-2/3">
                  <h3 className="font-medium mb-4">Histórico de Pontos</h3>
                  <div className="space-y-3">
                    {cliente.historico_pontos.map((item) => (
                      <div key={item.id} className="flex justify-between items-center border-b pb-2">
                        <div>
                          <p className="font-medium">{item.descricao}</p>
                          <p className="text-xs text-muted-foreground">
                            {new Date(item.data).toLocaleDateString("pt-BR")}
                          </p>
                        </div>
                        <div className={item.tipo === "credito" ? "text-green-600" : "text-red-600"}>
                          {item.tipo === "credito" ? "+" : "-"}
                          {item.pontos} pontos
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
