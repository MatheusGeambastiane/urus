"use client"

import { useState } from "react"
import { DashboardLayout } from "@/components/dashboard/sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
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
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { AlertCircle, ArrowDownCircle, ArrowUpCircle, Edit, Package, Plus, Search } from "lucide-react"
import type { ProdutoEstoque } from "@/types"

export default function EstoquePage() {
  const [openDialog, setOpenDialog] = useState(false)
  const [openMovimentacao, setOpenMovimentacao] = useState(false)
  const [currentTab, setCurrentTab] = useState("todos")
  const [searchTerm, setSearchTerm] = useState("")

  // Mock data for inventory
  const produtos: ProdutoEstoque[] = [
    {
      id: "1",
      nome: "Pomada Modeladora",
      quantidade: 15,
      tipo: "venda",
      categoria: "Finalização",
      preco_venda: 45.0,
      preco_custo: 25.0,
      fornecedor: "Distribuidora XYZ",
      limite_minimo: 5,
      data_cadastro: "2024-01-10",
    },
    {
      id: "2",
      nome: "Shampoo Anticaspa",
      quantidade: 8,
      tipo: "venda",
      categoria: "Higiene",
      preco_venda: 35.0,
      preco_custo: 18.0,
      fornecedor: "Distribuidora XYZ",
      limite_minimo: 3,
      data_cadastro: "2024-01-15",
    },
    {
      id: "3",
      nome: "Óleo para Barba",
      quantidade: 12,
      tipo: "venda",
      categoria: "Barba",
      preco_venda: 40.0,
      preco_custo: 22.0,
      fornecedor: "Barber Supplies",
      limite_minimo: 4,
      data_cadastro: "2024-01-20",
    },
    {
      id: "4",
      nome: "Lâminas de Barbear",
      quantidade: 30,
      tipo: "interno",
      categoria: "Consumíveis",
      preco_custo: 1.5,
      fornecedor: "Barber Supplies",
      limite_minimo: 10,
      data_cadastro: "2024-01-25",
    },
    {
      id: "5",
      nome: "Toalhas Descartáveis",
      quantidade: 2,
      tipo: "interno",
      categoria: "Consumíveis",
      preco_custo: 15.0,
      fornecedor: "Distribuidora ABC",
      limite_minimo: 5,
      data_cadastro: "2024-02-01",
    },
  ]

  const filteredProdutos = produtos
    .filter(
      (produto) =>
        currentTab === "todos" ||
        (currentTab === "venda" && produto.tipo === "venda") ||
        (currentTab === "interno" && produto.tipo === "interno") ||
        (currentTab === "baixo" && produto.quantidade <= produto.limite_minimo),
    )
    .filter(
      (produto) =>
        produto.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
        produto.categoria.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (produto.fornecedor && produto.fornecedor.toLowerCase().includes(searchTerm.toLowerCase())),
    )

  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Estoque</h1>
            <p className="text-muted-foreground">Gerencie o estoque de produtos da barbearia</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2">
            <Dialog open={openDialog} onOpenChange={setOpenDialog}>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  Novo Produto
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[550px]">
                <DialogHeader>
                  <DialogTitle>Adicionar Produto</DialogTitle>
                  <DialogDescription>Preencha os dados para adicionar um novo produto ao estoque.</DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid gap-2">
                    <Label htmlFor="nome">Nome do Produto</Label>
                    <Input id="nome" placeholder="Ex: Pomada Modeladora" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="tipo">Tipo</Label>
                      <Select>
                        <SelectTrigger id="tipo">
                          <SelectValue placeholder="Selecione" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="venda">Venda</SelectItem>
                          <SelectItem value="interno">Uso Interno</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="categoria">Categoria</Label>
                      <Input id="categoria" placeholder="Ex: Finalização" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="quantidade">Quantidade Inicial</Label>
                      <Input id="quantidade" type="number" min="0" placeholder="10" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="limite">Limite Mínimo</Label>
                      <Input id="limite" type="number" min="0" placeholder="5" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="preco_custo">Preço de Custo (R$)</Label>
                      <Input id="preco_custo" type="number" min="0" step="0.01" placeholder="25.00" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="preco_venda">Preço de Venda (R$)</Label>
                      <Input id="preco_venda" type="number" min="0" step="0.01" placeholder="45.00" />
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="fornecedor">Fornecedor</Label>
                    <Input id="fornecedor" placeholder="Ex: Distribuidora XYZ" />
                  </div>
                </div>
                <DialogFooter>
                  <Button variant="outline" onClick={() => setOpenDialog(false)}>
                    Cancelar
                  </Button>
                  <Button type="submit">Salvar Produto</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>

            <Dialog open={openMovimentacao} onOpenChange={setOpenMovimentacao}>
              <DialogTrigger asChild>
                <Button variant="outline">
                  <Package className="mr-2 h-4 w-4" />
                  Movimentação
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[550px]">
                <DialogHeader>
                  <DialogTitle>Registrar Movimentação</DialogTitle>
                  <DialogDescription>Registre entrada ou saída de produtos do estoque.</DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid gap-2">
                    <Label htmlFor="produto">Produto</Label>
                    <Select>
                      <SelectTrigger id="produto">
                        <SelectValue placeholder="Selecione um produto" />
                      </SelectTrigger>
                      <SelectContent>
                        {produtos.map((produto) => (
                          <SelectItem key={produto.id} value={produto.id}>
                            {produto.nome}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="tipo_mov">Tipo de Movimentação</Label>
                      <Select>
                        <SelectTrigger id="tipo_mov">
                          <SelectValue placeholder="Selecione" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="entrada">Entrada</SelectItem>
                          <SelectItem value="saida">Saída</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="quantidade_mov">Quantidade</Label>
                      <Input id="quantidade_mov" type="number" min="1" placeholder="5" />
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="motivo">Motivo</Label>
                    <Select>
                      <SelectTrigger id="motivo">
                        <SelectValue placeholder="Selecione o motivo" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="compra">Compra</SelectItem>
                        <SelectItem value="venda">Venda</SelectItem>
                        <SelectItem value="uso_interno">Uso Interno</SelectItem>
                        <SelectItem value="ajuste">Ajuste de Estoque</SelectItem>
                        <SelectItem value="perda">Perda/Avaria</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <DialogFooter>
                  <Button variant="outline" onClick={() => setOpenMovimentacao(false)}>
                    Cancelar
                  </Button>
                  <Button type="submit">Registrar</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <Card className="md:w-64">
            <CardHeader>
              <CardTitle>Filtros</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="search">Buscar</Label>
                <div className="relative">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="search"
                    placeholder="Nome, categoria..."
                    className="pl-8"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label>Visualização</Label>
                <Tabs value={currentTab} onValueChange={setCurrentTab}>
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="todos">Todos</TabsTrigger>
                    <TabsTrigger value="baixo" className="relative">
                      Baixo Estoque
                      {produtos.filter((p) => p.quantidade <= p.limite_minimo).length > 0 && (
                        <Badge
                          variant="destructive"
                          className="absolute -right-1 -top-1 h-4 w-4 p-0 flex items-center justify-center text-[10px]"
                        >
                          {produtos.filter((p) => p.quantidade <= p.limite_minimo).length}
                        </Badge>
                      )}
                    </TabsTrigger>
                  </TabsList>
                  <TabsList className="grid w-full grid-cols-2 mt-1">
                    <TabsTrigger value="venda">Para Venda</TabsTrigger>
                    <TabsTrigger value="interno">Uso Interno</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
            </CardContent>
          </Card>

          <Card className="flex-1">
            <CardHeader>
              <CardTitle>Lista de Produtos</CardTitle>
              <CardDescription>{filteredProdutos.length} produtos encontrados</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Nome</TableHead>
                    <TableHead>Categoria</TableHead>
                    <TableHead>Quantidade</TableHead>
                    <TableHead>Preço</TableHead>
                    <TableHead>Tipo</TableHead>
                    <TableHead className="text-right">Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredProdutos.map((produto) => (
                    <TableRow key={produto.id}>
                      <TableCell className="font-medium">{produto.nome}</TableCell>
                      <TableCell>{produto.categoria}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <span
                            className={
                              produto.quantidade <= produto.limite_minimo ? "text-destructive font-medium" : ""
                            }
                          >
                            {produto.quantidade}
                          </span>
                          {produto.quantidade <= produto.limite_minimo && (
                            <AlertCircle className="h-4 w-4 text-destructive" />
                          )}
                        </div>
                      </TableCell>
                      <TableCell>
                        {produto.tipo === "venda"
                          ? `R$ ${produto.preco_venda?.toFixed(2)}`
                          : `R$ ${produto.preco_custo.toFixed(2)}`}
                      </TableCell>
                      <TableCell>
                        <Badge variant={produto.tipo === "venda" ? "default" : "secondary"}>
                          {produto.tipo === "venda" ? "Venda" : "Interno"}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="icon" title="Entrada">
                          <ArrowUpCircle className="h-4 w-4 text-green-500" />
                        </Button>
                        <Button variant="ghost" size="icon" title="Saída">
                          <ArrowDownCircle className="h-4 w-4 text-red-500" />
                        </Button>
                        <Button variant="ghost" size="icon" title="Editar">
                          <Edit className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  )
}
