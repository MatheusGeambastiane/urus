"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Check, CreditCard } from "lucide-react"
import type { Plano, Assinatura } from "@/types"

export default function ClienteAssinaturaPage() {
  const [activeTab, setActiveTab] = useState("minha-assinatura")

  // Mock data for client subscription
  const assinatura: Assinatura = {
    id: "101",
    cliente_id: "1",
    plano_id: "1",
    data_inicio: "2024-03-01",
    data_fim: "2024-04-01",
    status: "ativa",
    valor_pago: 99.9,
    forma_pagamento: "cartao",
    renovacao_automatica: true,
    servicos_utilizados: [
      { servico_id: "1", quantidade_utilizada: 1 }, // Corte
      { servico_id: "2", quantidade_utilizada: 0 }, // Barba
    ],
  }

  // Mock data for plans
  const planos: Plano[] = [
    {
      id: "1",
      nome: "Mensal Flex",
      descricao: "Até 4 serviços por mês",
      valor_mensal: 80.0,
      duracao_meses: 1,
      servicos_inclusos: [
        { servico_id: "1", quantidade_mensal: 4 }, // Corte/Barba combinados
      ],
      beneficios: [
        "Até 4 serviços por mês",
        "Não acumula de um mês para outro",
        "Serviços adicionais com 10% de desconto",
        "Cashback: 5 pontos por serviço",
      ],
      ativo: true,
    },
    {
      id: "2",
      nome: "Premium Ilimitado",
      descricao: "Serviços ilimitados",
      valor_mensal: 100.0,
      duracao_meses: 1,
      servicos_inclusos: [
        { servico_id: "1", quantidade_mensal: 999 }, // Ilimitado
      ],
      beneficios: [
        "Serviços ilimitados",
        "Prioridade de agendamento",
        "Cashback: 10 pontos por serviço",
        "Participação em sorteios VIP",
      ],
      ativo: true,
    },
  ]

  // Find the current plan
  const planoAtual = planos.find((p) => p.id === assinatura.plano_id)

  // Calculate days remaining
  const hoje = new Date()
  const dataFim = new Date(assinatura.data_fim)
  const diasRestantes = Math.max(0, Math.ceil((dataFim.getTime() - hoje.getTime()) / (1000 * 60 * 60 * 24)))
  const totalDias = Math.ceil((dataFim.getTime() - new Date(assinatura.data_inicio).getTime()) / (1000 * 60 * 60 * 24))
  const percentualRestante = Math.round((diasRestantes / totalDias) * 100)

  // Mock payment history
  const historicoPagamentos = [
    {
      id: "p1",
      data: "2024-03-01",
      valor: 99.9,
      metodo: "Cartão de Crédito",
      status: "Pago",
    },
  ]

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Minha Assinatura</h1>
        <p className="text-muted-foreground">Gerencie sua assinatura e veja os serviços disponíveis</p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="mb-4">
          <TabsTrigger value="minha-assinatura">Minha Assinatura</TabsTrigger>
          <TabsTrigger value="planos">Planos Disponíveis</TabsTrigger>
          <TabsTrigger value="historico">Histórico de Pagamentos</TabsTrigger>
        </TabsList>

        <TabsContent value="minha-assinatura">
          {assinatura ? (
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>{planoAtual?.nome || "Plano"}</CardTitle>
                      <CardDescription>{planoAtual?.descricao}</CardDescription>
                    </div>
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
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1 text-sm">
                      <span>Período atual</span>
                      <span>{diasRestantes} dias restantes</span>
                    </div>
                    <Progress value={percentualRestante} className="h-2" />
                    <div className="flex justify-between mt-1 text-xs text-muted-foreground">
                      <span>{new Date(assinatura.data_inicio).toLocaleDateString("pt-BR")}</span>
                      <span>{new Date(assinatura.data_fim).toLocaleDateString("pt-BR")}</span>
                    </div>
                  </div>

                  <div className="pt-2">
                    <h4 className="font-medium mb-2">Detalhes da Assinatura:</h4>
                    <ul className="space-y-2">
                      <li className="flex justify-between">
                        <span className="text-muted-foreground">Valor Mensal:</span>
                        <span>R$ {planoAtual?.valor_mensal.toFixed(2)}</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-muted-foreground">Forma de Pagamento:</span>
                        <span className="capitalize">
                          {assinatura.forma_pagamento === "cartao"
                            ? "Cartão de Crédito"
                            : assinatura.forma_pagamento === "pix"
                              ? "PIX"
                              : assinatura.forma_pagamento === "dinheiro"
                                ? "Dinheiro"
                                : "Transferência"}
                        </span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-muted-foreground">Renovação Automática:</span>
                        <span>{assinatura.renovacao_automatica ? "Sim" : "Não"}</span>
                      </li>
                    </ul>
                  </div>

                  <div className="pt-2">
                    <h4 className="font-medium mb-2">Serviços Utilizados:</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span>Cortes</span>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium">
                            {assinatura.servicos_utilizados[0].quantidade_utilizada} /
                            {planoAtual?.servicos_inclusos[0].quantidade_mensal === 999
                              ? "∞"
                              : planoAtual?.servicos_inclusos[0].quantidade_mensal}
                          </span>
                          <Progress
                            value={
                              planoAtual?.servicos_inclusos[0].quantidade_mensal === 999
                                ? 50
                                : // Show 50% for unlimited plans
                                  (assinatura.servicos_utilizados[0].quantidade_utilizada /
                                    planoAtual?.servicos_inclusos[0].quantidade_mensal!) *
                                  100
                            }
                            className="w-24 h-2"
                          />
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Barbas</span>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium">
                            {assinatura.servicos_utilizados[1].quantidade_utilizada} /
                            {planoAtual?.servicos_inclusos[0].quantidade_mensal === 999
                              ? "∞"
                              : planoAtual?.servicos_inclusos[0].quantidade_mensal}
                          </span>
                          <Progress
                            value={
                              planoAtual?.servicos_inclusos[0].quantidade_mensal === 999
                                ? 50
                                : // Show 50% for unlimited plans
                                  (assinatura.servicos_utilizados[1].quantidade_utilizada /
                                    planoAtual?.servicos_inclusos[0].quantidade_mensal!) *
                                  100
                            }
                            className="w-24 h-2"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 flex justify-between">
                    <Button variant="outline" className="text-destructive">
                      Cancelar Assinatura
                    </Button>
                    <Button>Gerenciar Pagamento</Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Benefícios do Plano</CardTitle>
                  <CardDescription>Vantagens da sua assinatura atual</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {planoAtual?.beneficios.map((beneficio, index) => (
                      <li key={index} className="flex items-center">
                        <Check className="h-4 w-4 mr-2 text-green-500" />
                        {beneficio}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          ) : (
            <Card>
              <CardHeader>
                <CardTitle>Sem Assinatura Ativa</CardTitle>
                <CardDescription>Você não possui uma assinatura ativa no momento</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col items-center py-8">
                <CreditCard className="h-16 w-16 text-muted-foreground mb-4" />
                <p className="text-center text-muted-foreground mb-4">
                  Assine um de nossos planos para aproveitar serviços com preços especiais e benefícios exclusivos.
                </p>
                <Button onClick={() => setActiveTab("planos")}>Ver Planos Disponíveis</Button>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="planos">
          <div className="grid gap-6 md:grid-cols-2">
            {planos.map((plano) => (
              <Card key={plano.id} className={plano.id === assinatura.plano_id ? "border-primary" : ""}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>{plano.nome}</CardTitle>
                      <CardDescription>{plano.descricao}</CardDescription>
                    </div>
                    {plano.id === assinatura.plano_id && <Badge>Plano Atual</Badge>}
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold">R$ {plano.valor_mensal.toFixed(2)}</span>
                    <span className="text-muted-foreground">por mês</span>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">Benefícios:</h4>
                    <ul className="space-y-1">
                      {plano.beneficios.map((beneficio, index) => (
                        <li key={index} className="flex items-center">
                          <Check className="h-4 w-4 mr-2 text-green-500" />
                          {beneficio}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4">
                    {plano.id === assinatura.plano_id ? (
                      <Button disabled className="w-full">
                        Plano Atual
                      </Button>
                    ) : (
                      <Button className="w-full">Assinar Plano</Button>
                    )}
                  </div>
                  <div className="pt-2">
                    <Button variant="link" className="w-full text-sm">
                      Ver termos do plano
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="historico">
          <Card>
            <CardHeader>
              <CardTitle>Histórico de Pagamentos</CardTitle>
              <CardDescription>Registro de pagamentos da sua assinatura</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <table className="w-full">
                  <thead>
                    <tr className="border-b bg-muted/50">
                      <th className="p-2 text-left font-medium">Data</th>
                      <th className="p-2 text-left font-medium">Plano</th>
                      <th className="p-2 text-left font-medium">Valor</th>
                      <th className="p-2 text-left font-medium">Método</th>
                      <th className="p-2 text-left font-medium">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {historicoPagamentos.map((pagamento) => (
                      <tr key={pagamento.id} className="border-b">
                        <td className="p-2">{new Date(pagamento.data).toLocaleDateString("pt-BR")}</td>
                        <td className="p-2">{planoAtual?.nome}</td>
                        <td className="p-2">R$ {pagamento.valor.toFixed(2)}</td>
                        <td className="p-2">{pagamento.metodo}</td>
                        <td className="p-2">
                          <Badge variant="outline" className="bg-green-50">
                            {pagamento.status}
                          </Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
