"use client"

import { useState } from "react"
import { DashboardLayout } from "@/components/dashboard/sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { format } from "date-fns"
import { ArrowDownUp, Check, Download, DollarSign, TrendingUp, Users } from "lucide-react"

export default function FinanceiroPage() {
  const [date, setDate] = useState<Date>(new Date())
  const [currentTab, setCurrentTab] = useState("receitas")
  const [period, setPeriod] = useState("mes")

  // Mock data for financial reports
  const receitas = [
    {
      id: 1,
      data: "2024-04-15",
      cliente: "João Silva",
      servico: "Corte Degradê",
      profissional: "Rafael",
      valor: 45.0,
      status: "pago",
      forma_pagamento: "pix",
    },
    {
      id: 2,
      data: "2024-04-15",
      cliente: "Pedro Santos",
      servico: "Barba",
      profissional: "Carlos",
      valor: 35.0,
      status: "pago",
      forma_pagamento: "cartao",
    },
    {
      id: 3,
      data: "2024-04-15",
      cliente: "Lucas Oliveira",
      servico: "Combo Clássico",
      profissional: "André",
      valor: 70.0,
      status: "pago",
      forma_pagamento: "dinheiro",
    },
    {
      id: 4,
      data: "2024-04-16",
      cliente: "Marcos Pereira",
      servico: "Corte Navalhado",
      profissional: "Rafael",
      valor: 50.0,
      status: "pago",
      forma_pagamento: "cartao",
    },
    {
      id: 5,
      data: "2024-04-16",
      cliente: "Gabriel Costa",
      servico: "Barba Completa",
      profissional: "Carlos",
      valor: 35.0,
      status: "pago",
      forma_pagamento: "pix",
    },
    {
      id: 6,
      data: "2024-04-17",
      cliente: "Thiago Souza",
      servico: "Corte Clássico",
      profissional: "André",
      valor: 40.0,
      status: "pago",
      forma_pagamento: "dinheiro",
    },
    {
      id: 7,
      data: "2024-04-17",
      cliente: "Felipe Almeida",
      servico: "Combo Premium",
      profissional: "Rafael",
      valor: 100.0,
      status: "pago",
      forma_pagamento: "cartao",
    },
    {
      id: 8,
      data: "2024-04-18",
      cliente: "Ricardo Gomes",
      servico: "Corte Degradê",
      profissional: "André",
      valor: 45.0,
      status: "pago",
      forma_pagamento: "pix",
    },
    {
      id: 9,
      data: "2024-04-18",
      cliente: "Bruno Martins",
      servico: "Barba",
      profissional: "Carlos",
      valor: 35.0,
      status: "pago",
      forma_pagamento: "cartao",
    },
    {
      id: 10,
      data: "2024-04-19",
      cliente: "Leonardo Castro",
      servico: "Combo Clássico",
      profissional: "Rafael",
      valor: 70.0,
      status: "pendente",
      forma_pagamento: "pix",
    },
  ]

  const comissoes = [
    { id: 1, profissional: "Rafael", servicos: 4, valor_total: 265.0, comissao: 106.0, status: "pendente" },
    { id: 2, profissional: "Carlos", servicos: 3, valor_total: 105.0, comissao: 36.75, status: "pendente" },
    { id: 3, profissional: "André", servicos: 3, valor_total: 155.0, comissao: 150.0, status: "pendente" },
  ]

  const totalReceitas = receitas.reduce((acc, item) => acc + item.valor, 0)

  const totalPorFormaPagamento = {
    dinheiro: receitas
      .filter((item) => item.status === "pago" && item.forma_pagamento === "dinheiro")
      .reduce((acc, item) => acc + item.valor, 0),
    cartao: receitas
      .filter((item) => item.status === "pago" && item.forma_pagamento === "cartao")
      .reduce((acc, item) => acc + item.valor, 0),
    pix: receitas
      .filter((item) => item.status === "pago" && item.forma_pagamento === "pix")
      .reduce((acc, item) => acc + item.valor, 0),
  }

  const totalComissoes = comissoes.reduce((acc, item) => acc + item.comissao, 0)
  const lucroLiquido = totalReceitas - totalComissoes

  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Financeiro</h1>
            <p className="text-muted-foreground">Relatórios financeiros e comissões</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2">
            <Select value={period} onValueChange={setPeriod}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Selecione o período" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="hoje">Hoje</SelectItem>
                <SelectItem value="semana">Esta Semana</SelectItem>
                <SelectItem value="mes">Este Mês</SelectItem>
                <SelectItem value="personalizado">Personalizado</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Exportar
            </Button>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Receita Total</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">R$ {totalReceitas.toFixed(2)}</div>
              <div className="text-xs space-y-1 mt-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Cartão:</span>
                  <span>R$ {totalPorFormaPagamento.cartao.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">PIX:</span>
                  <span>R$ {totalPorFormaPagamento.pix.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Dinheiro:</span>
                  <span>R$ {totalPorFormaPagamento.dinheiro.toFixed(2)}</span>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Comissões</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">R$ {totalComissoes.toFixed(2)}</div>
              <p className="text-xs text-muted-foreground">Para 3 profissionais</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Lucro Líquido</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">R$ {lucroLiquido.toFixed(2)}</div>
              <p className="text-xs text-muted-foreground">Após comissões</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Ticket Médio</CardTitle>
              <ArrowDownUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">R$ {(totalReceitas / receitas.length).toFixed(2)}</div>
              <p className="text-xs text-muted-foreground">Por atendimento</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="receitas" value={currentTab} onValueChange={setCurrentTab}>
          <TabsList className="mb-4">
            <TabsTrigger value="receitas">Receitas</TabsTrigger>
            <TabsTrigger value="comissoes">Comissões</TabsTrigger>
            <TabsTrigger value="graficos">Gráficos</TabsTrigger>
          </TabsList>

          <TabsContent value="receitas">
            <Card>
              <CardHeader>
                <CardTitle>Receitas por Serviço</CardTitle>
                <CardDescription>Detalhamento de receitas por serviço no período selecionado</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Data</TableHead>
                      <TableHead>Cliente</TableHead>
                      <TableHead>Serviço</TableHead>
                      <TableHead>Profissional</TableHead>
                      <TableHead>Valor</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Forma de Pagamento</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {receitas.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell>{format(new Date(item.data), "dd/MM/yyyy")}</TableCell>
                        <TableCell>{item.cliente}</TableCell>
                        <TableCell>{item.servico}</TableCell>
                        <TableCell>{item.profissional}</TableCell>
                        <TableCell>R$ {item.valor.toFixed(2)}</TableCell>
                        <TableCell>
                          <Badge variant={item.status === "pago" ? "default" : "outline"}>
                            {item.status === "pago" ? "Pago" : "Pendente"}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          {item.forma_pagamento === "cartao"
                            ? "Cartão"
                            : item.forma_pagamento === "pix"
                              ? "PIX"
                              : "Dinheiro"}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="comissoes">
            <Card>
              <CardHeader>
                <CardTitle>Comissões por Profissional</CardTitle>
                <CardDescription>Detalhamento de comissões a pagar no período selecionado</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Profissional</TableHead>
                      <TableHead>Serviços Realizados</TableHead>
                      <TableHead>Valor Total</TableHead>
                      <TableHead>Comissão</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Ações</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {comissoes.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell>{item.profissional}</TableCell>
                        <TableCell>{item.servicos}</TableCell>
                        <TableCell>R$ {item.valor_total.toFixed(2)}</TableCell>
                        <TableCell>R$ {item.comissao.toFixed(2)}</TableCell>
                        <TableCell>
                          <Badge variant={item.status === "pago" ? "default" : "outline"}>
                            {item.status === "pago" ? "Pago" : "Pendente"}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button variant="outline" size="sm">
                            <Check className="mr-2 h-4 w-4" />
                            Marcar como Pago
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="graficos">
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Receita por Dia</CardTitle>
                  <CardDescription>Evolução da receita diária no período</CardDescription>
                </CardHeader>
                <CardContent className="h-80">
                  <div className="h-full w-full rounded-md border flex items-center justify-center">
                    <p className="text-muted-foreground">Gráfico de receita por dia</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Serviços Mais Vendidos</CardTitle>
                  <CardDescription>Distribuição de serviços por receita</CardDescription>
                </CardHeader>
                <CardContent className="h-80">
                  <div className="h-full w-full rounded-md border flex items-center justify-center">
                    <p className="text-muted-foreground">Gráfico de serviços mais vendidos</p>
                  </div>
                </CardContent>
              </Card>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Receita por Forma de Pagamento</CardTitle>
                <CardDescription>Distribuição das receitas por método de pagamento</CardDescription>
              </CardHeader>
              <CardContent className="h-80">
                <div className="h-full w-full rounded-md border p-6">
                  <div className="space-y-8">
                    <div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="h-4 w-4 rounded-full bg-blue-500"></div>
                          <span>Cartão</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="font-medium">R$ {totalPorFormaPagamento.cartao.toFixed(2)}</span>
                          <span className="text-muted-foreground">
                            ({Math.round((totalPorFormaPagamento.cartao / totalReceitas) * 100)}%)
                          </span>
                        </div>
                      </div>
                      <div className="mt-2 h-2 w-full rounded-full bg-muted">
                        <div
                          className="h-full rounded-full bg-blue-500"
                          style={{ width: `${(totalPorFormaPagamento.cartao / totalReceitas) * 100}%` }}
                        ></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="h-4 w-4 rounded-full bg-green-500"></div>
                          <span>PIX</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="font-medium">R$ {totalPorFormaPagamento.pix.toFixed(2)}</span>
                          <span className="text-muted-foreground">
                            ({Math.round((totalPorFormaPagamento.pix / totalReceitas) * 100)}%)
                          </span>
                        </div>
                      </div>
                      <div className="mt-2 h-2 w-full rounded-full bg-muted">
                        <div
                          className="h-full rounded-full bg-green-500"
                          style={{ width: `${(totalPorFormaPagamento.pix / totalReceitas) * 100}%` }}
                        ></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="h-4 w-4 rounded-full bg-yellow-500"></div>
                          <span>Dinheiro</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="font-medium">R$ {totalPorFormaPagamento.dinheiro.toFixed(2)}</span>
                          <span className="text-muted-foreground">
                            ({Math.round((totalPorFormaPagamento.dinheiro / totalReceitas) * 100)}%)
                          </span>
                        </div>
                      </div>
                      <div className="mt-2 h-2 w-full rounded-full bg-muted">
                        <div
                          className="h-full rounded-full bg-yellow-500"
                          style={{ width: `${(totalPorFormaPagamento.dinheiro / totalReceitas) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}
