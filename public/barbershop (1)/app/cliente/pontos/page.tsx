"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ArrowDown, ArrowUp, Coins } from "lucide-react"

export default function PontosPage() {
  // Mock data for client points
  const cliente = {
    id: "1",
    nome: "Matheus Silva",
    pontos: 45,
    plano: "Premium Ilimitado",
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

  // Calculate total points earned and used
  const pontosGanhos = cliente.historico_pontos
    .filter((p) => p.tipo === "credito")
    .reduce((sum, p) => sum + p.pontos, 0)

  const pontosUsados = cliente.historico_pontos.filter((p) => p.tipo === "debito").reduce((sum, p) => sum + p.pontos, 0)

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Meus Pontos</h1>
        <p className="text-muted-foreground">Acompanhe e utilize seus pontos de cashback</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Pontos Disponíveis</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <Coins className="h-5 w-5 text-yellow-500" />
              <span className="text-2xl font-bold">{cliente.pontos} pontos</span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              Equivalente a R$ {cliente.pontos.toFixed(2)} em descontos
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Pontos Ganhos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <ArrowUp className="h-5 w-5 text-green-500" />
              <span className="text-2xl font-bold">{pontosGanhos} pontos</span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">Total acumulado desde o início</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Pontos Utilizados</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <ArrowDown className="h-5 w-5 text-red-500" />
              <span className="text-2xl font-bold">{pontosUsados} pontos</span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">Total resgatado em descontos</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <CardTitle>Histórico de Pontos</CardTitle>
              <CardDescription>Registro de todas as transações de pontos</CardDescription>
            </div>
            <Button>Usar Pontos na Próxima Compra</Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Data</TableHead>
                  <TableHead>Descrição</TableHead>
                  <TableHead>Tipo</TableHead>
                  <TableHead className="text-right">Pontos</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {cliente.historico_pontos.map((transacao) => (
                  <TableRow key={transacao.id}>
                    <TableCell>{new Date(transacao.data).toLocaleDateString("pt-BR")}</TableCell>
                    <TableCell>{transacao.descricao}</TableCell>
                    <TableCell>
                      <Badge variant={transacao.tipo === "credito" ? "outline" : "secondary"}>
                        {transacao.tipo === "credito" ? "Ganho" : "Utilizado"}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <span className={transacao.tipo === "credito" ? "text-green-600" : "text-red-600"}>
                        {transacao.tipo === "credito" ? "+" : "-"}
                        {transacao.pontos}
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Regras do Sistema de Pontos</CardTitle>
          <CardDescription>Como funciona o sistema de cashback</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium mb-1">Como ganhar pontos:</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Sem plano: 2 pontos por serviço</li>
                <li>Mensal Flex: 5 pontos por serviço</li>
                <li>Premium Ilimitado: 10 pontos por serviço</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-1">Como usar pontos:</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>1 ponto equivale a R$ 1,00 de desconto</li>
                <li>Pontos podem ser usados em qualquer serviço</li>
                <li>Resgate mínimo: 10 pontos</li>
                <li>Pontos não expiram enquanto sua conta estiver ativa</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-1">Seu plano atual: {cliente.plano}</h3>
              <p>Com seu plano atual, você ganha 10 pontos por serviço realizado.</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
