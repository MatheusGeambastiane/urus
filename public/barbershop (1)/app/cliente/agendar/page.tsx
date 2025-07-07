"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar } from "@/components/ui/calendar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { format } from "date-fns"
import { ptBR } from "date-fns/locale"
import { Clock, Star, Info, Search, ChevronLeft, ChevronRight, X } from "lucide-react"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { clienteConfig } from "@/config/cliente-config"

export default function AgendarPage() {
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [service, setService] = useState<string>("")
  const [professional, setProfessional] = useState<string>("")
  const [time, setTime] = useState<string>("")
  const [step, setStep] = useState(1)
  const [usarPontos, setUsarPontos] = useState(false)
  const [pontosAplicados, setPontosAplicados] = useState(0)
  const [searchTerm, setSearchTerm] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedStyle, setSelectedStyle] = useState<string | null>(null)
  const [isStyleDialogOpen, setIsStyleDialogOpen] = useState(false)
  const [selectedServiceWithStyles, setSelectedServiceWithStyles] = useState<any>(null)

  const itemsPerPage = 4

  // Mock data for services with images and sub-styles
  const servicos = [
    {
      id: "1",
      nome: "Corte Degradê",
      descricao: "Corte moderno com degradê nas laterais",
      duracao_min: 40,
      preco: 45.0,
      categoria: "corte",
      imagem: "https://i.imgur.com/JYyT9Iu.jpg",
      incluso_assinatura: {
        mensal: true,
        premium: true,
      },
      tem_estilos: true,
      estilos: [
        { id: "1-1", nome: "Low Fade", imagem: "https://i.imgur.com/8cZgUBk.jpg" },
        { id: "1-2", nome: "Mid Fade", imagem: "https://i.imgur.com/JYyT9Iu.jpg" },
        { id: "1-3", nome: "High Fade", imagem: "https://i.imgur.com/Ys6Jgme.jpg" },
      ],
    },
    {
      id: "2",
      nome: "Barba Completa",
      descricao: "Aparar e modelar barba com toalha quente e produtos",
      duracao_min: 30,
      preco: 35.0,
      categoria: "barba",
      imagem: "https://i.imgur.com/Ys6Jgme.jpg",
      incluso_assinatura: {
        mensal: true,
        premium: true,
      },
      tem_estilos: false,
    },
    {
      id: "3",
      nome: "Combo Clássico",
      descricao: "Corte de cabelo + barba",
      duracao_min: 60,
      preco: 70.0,
      categoria: "combo",
      imagem: "https://i.imgur.com/8cZgUBk.jpg",
      incluso_assinatura: {
        mensal: false,
        premium: true,
      },
      tem_estilos: false,
    },
    {
      id: "4",
      nome: "Corte Navalhado",
      descricao: "Corte com acabamento de navalha",
      duracao_min: 45,
      preco: 50.0,
      categoria: "corte",
      imagem: "https://i.imgur.com/JYyT9Iu.jpg",
      incluso_assinatura: {
        mensal: true,
        premium: true,
      },
      tem_estilos: false,
    },
    {
      id: "5",
      nome: "Combo Premium",
      descricao: "Corte, barba e hidratação",
      duracao_min: 90,
      preco: 100.0,
      categoria: "combo",
      imagem: "https://i.imgur.com/8cZgUBk.jpg",
      incluso_assinatura: {
        mensal: false,
        premium: true,
      },
      tem_estilos: false,
    },
    {
      id: "6",
      nome: "Corte Americano",
      descricao: "Corte tradicional americano",
      duracao_min: 35,
      preco: 40.0,
      categoria: "corte",
      imagem: "https://i.imgur.com/Ys6Jgme.jpg",
      incluso_assinatura: {
        mensal: true,
        premium: true,
      },
      tem_estilos: true,
      estilos: [
        { id: "6-1", nome: "Escanteio", imagem: "https://i.imgur.com/8cZgUBk.jpg" },
        { id: "6-2", nome: "Arredondado", imagem: "https://i.imgur.com/JYyT9Iu.jpg" },
      ],
    },
    {
      id: "7",
      nome: "Corte Social",
      descricao: "Corte clássico e elegante",
      duracao_min: 30,
      preco: 35.0,
      categoria: "corte",
      imagem: "https://i.imgur.com/8cZgUBk.jpg",
      incluso_assinatura: {
        mensal: true,
        premium: true,
      },
      tem_estilos: false,
    },
    {
      id: "8",
      nome: "Corte Militar",
      descricao: "Corte curto e prático",
      duracao_min: 25,
      preco: 30.0,
      categoria: "corte",
      imagem: "https://i.imgur.com/JYyT9Iu.jpg",
      incluso_assinatura: {
        mensal: true,
        premium: true,
      },
      tem_estilos: false,
    },
    {
      id: "9",
      nome: "Barba Simples",
      descricao: "Aparar e alinhar a barba",
      duracao_min: 20,
      preco: 25.0,
      categoria: "barba",
      imagem: "https://i.imgur.com/Ys6Jgme.jpg",
      incluso_assinatura: {
        mensal: true,
        premium: true,
      },
      tem_estilos: false,
    },
  ]

  // Mock data for professionals
  const profissionais = [
    {
      id: "1",
      nome: "Rafael Silva",
      foto: "https://randomuser.me/api/portraits/men/32.jpg",
      especialidade: "Especialista em cortes degradê e modernos",
      avaliacao: 4.8,
      total_avaliacoes: 124,
    },
    {
      id: "2",
      nome: "Carlos Oliveira",
      foto: "https://randomuser.me/api/portraits/men/44.jpg",
      especialidade: "Especialista em barbas e tratamentos faciais",
      avaliacao: 4.6,
      total_avaliacoes: 98,
    },
    {
      id: "3",
      nome: "André Santos",
      foto: "https://randomuser.me/api/portraits/men/68.jpg",
      especialidade: "Especialista em cortes clássicos e tratamentos capilares",
      avaliacao: 4.9,
      total_avaliacoes: 156,
    },
  ]

  const availableTimes = [
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
  ]

  // Cliente data from config
  const cliente = {
    assinatura: clienteConfig.isAssinante
      ? {
          plano: clienteConfig.tipoAssinatura,
          nome: clienteConfig.assinatura.plano,
        }
      : null,
    pontos: clienteConfig.pontosDisponiveis,
  }

  // Calcular pontos aplicados quando o serviço ou o switch mudar
  useEffect(() => {
    if (service && usarPontos) {
      const selectedService = servicos.find((s) => s.id === service)
      if (selectedService) {
        // Limitar os pontos ao valor do serviço ou aos pontos disponíveis
        const maxPontosAplicaveis = Math.min(cliente.pontos, selectedService.preco)
        setPontosAplicados(maxPontosAplicaveis)
      }
    } else {
      setPontosAplicados(0)
    }
  }, [service, usarPontos, cliente.pontos])

  const handleNext = () => {
    setStep(step + 1)
  }

  const handleBack = () => {
    setStep(step - 1)
  }

  const handleSubmit = () => {
    // Here you would submit the appointment
    alert("Agendamento realizado com sucesso!")
    // Reset form
    setDate(undefined)
    setService("")
    setProfessional("")
    setTime("")
    setStep(1)
    setUsarPontos(false)
    setPontosAplicados(0)
    setSelectedStyle(null)
  }

  const handleServiceClick = (servico) => {
    if (servico.tem_estilos) {
      setSelectedServiceWithStyles(servico)
      setIsStyleDialogOpen(true)
    } else {
      setService(servico.id)
    }
  }

  const handleStyleSelect = (serviceId, styleId) => {
    setService(serviceId)
    setSelectedStyle(styleId)
    setIsStyleDialogOpen(false)
  }

  const selectedService = servicos.find((s) => s.id === service)

  // Verificar se o serviço está incluso na assinatura
  const isServicoIncluso =
    selectedService && cliente.assinatura && selectedService.incluso_assinatura[cliente.assinatura.plano]

  // Calcular valor final após desconto de pontos
  const valorFinal = selectedService
    ? isServicoIncluso
      ? 0
      : Math.max(0, selectedService.preco - pontosAplicados * clienteConfig.valorPorPonto)
    : 0

  // Filtrar serviços por categoria e termo de pesquisa
  const filtrarServicos = (categoria) => {
    return servicos
      .filter((s) => s.categoria === categoria)
      .filter(
        (s) =>
          searchTerm === "" ||
          s.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
          s.descricao.toLowerCase().includes(searchTerm.toLowerCase()),
      )
  }

  // Paginação
  const paginarServicos = (servicos) => {
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    return servicos.slice(startIndex, endIndex)
  }

  // Calcular número total de páginas
  const calcularTotalPaginas = (servicos) => {
    return Math.ceil(servicos.length / itemsPerPage)
  }

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">Agendar Serviço</h1>
        <p className="text-muted-foreground text-sm sm:text-base">Escolha o serviço, profissional e horário</p>
      </div>

      <Card className="max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle>Novo Agendamento</CardTitle>
          <CardDescription>Preencha os dados para agendar seu serviço</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between mb-8">
            <div className={`flex flex-col items-center ${step >= 1 ? "text-primary" : "text-muted-foreground"}`}>
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center mb-2 ${step >= 1 ? "bg-primary text-primary-foreground" : "bg-muted"}`}
              >
                1
              </div>
              <span className="text-xs">Serviço</span>
            </div>
            <div className="grow border-t border-muted my-4 mx-2"></div>
            <div className={`flex flex-col items-center ${step >= 2 ? "text-primary" : "text-muted-foreground"}`}>
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center mb-2 ${step >= 2 ? "bg-primary text-primary-foreground" : "bg-muted"}`}
              >
                2
              </div>
              <span className="text-xs">Profissional</span>
            </div>
            <div className="grow border-t border-muted my-4 mx-2"></div>
            <div className={`flex flex-col items-center ${step >= 3 ? "text-primary" : "text-muted-foreground"}`}>
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center mb-2 ${step >= 3 ? "bg-primary text-primary-foreground" : "bg-muted"}`}
              >
                3
              </div>
              <span className="text-xs">Data</span>
            </div>
            <div className="grow border-t border-muted my-4 mx-2"></div>
            <div className={`flex flex-col items-center ${step >= 4 ? "text-primary" : "text-muted-foreground"}`}>
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center mb-2 ${step >= 4 ? "bg-primary text-primary-foreground" : "bg-muted"}`}
              >
                4
              </div>
              <span className="text-xs">Horário</span>
            </div>
          </div>

          {step === 1 && (
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Escolha o serviço</h3>

              {/* Campo de pesquisa */}
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Pesquisar serviços..."
                  className="pl-8"
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value)
                    setCurrentPage(1) // Reset para a primeira página ao pesquisar
                  }}
                />
                {searchTerm && (
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-0 top-0 h-9 w-9"
                    onClick={() => setSearchTerm("")}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                )}
              </div>

              <Tabs defaultValue="corte" className="w-full">
                <TabsList className="grid grid-cols-3 mb-4">
                  <TabsTrigger value="corte">Corte</TabsTrigger>
                  <TabsTrigger value="barba">Barba</TabsTrigger>
                  <TabsTrigger value="combo">Combos</TabsTrigger>
                </TabsList>

                {["corte", "barba", "combo"].map((categoria) => (
                  <TabsContent key={categoria} value={categoria} className="space-y-4">
                    {filtrarServicos(categoria).length > 0 ? (
                      <>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {paginarServicos(filtrarServicos(categoria)).map((servico) => (
                            <Card
                              key={servico.id}
                              className={`cursor-pointer overflow-hidden ${
                                service === servico.id ? "border-primary" : ""
                              }`}
                              onClick={() => handleServiceClick(servico)}
                            >
                              <div className="relative h-40 w-full">
                                <img
                                  src={servico.imagem || "/placeholder.svg"}
                                  alt={servico.nome}
                                  className="h-full w-full object-cover"
                                />
                                {servico.tem_estilos && (
                                  <Badge className="absolute top-2 right-2 bg-primary text-primary-foreground">
                                    Opções de estilo
                                  </Badge>
                                )}
                              </div>
                              <CardHeader className="p-4">
                                <div className="flex justify-between items-start">
                                  <div>
                                    <CardTitle className="text-base">{servico.nome}</CardTitle>
                                    <CardDescription className="line-clamp-2">{servico.descricao}</CardDescription>
                                    <p className="text-xs text-muted-foreground mt-1">{servico.duracao_min} min</p>
                                  </div>
                                  {cliente.assinatura && servico.incluso_assinatura[cliente.assinatura.plano] ? (
                                    <Badge
                                      variant="secondary"
                                      className="bg-green-50 text-green-700 hover:bg-green-50 dark:bg-green-900/30 dark:text-green-400 dark:hover:bg-green-900/30"
                                    >
                                      Incluso
                                    </Badge>
                                  ) : (
                                    <span className="font-medium">R$ {servico.preco.toFixed(2)}</span>
                                  )}
                                </div>
                                {selectedStyle && servico.id === service && servico.tem_estilos && (
                                  <div className="mt-2 pt-2 border-t border-border">
                                    <p className="text-xs text-muted-foreground">
                                      Estilo:{" "}
                                      <span className="font-medium text-foreground">
                                        {servico.estilos.find((e) => e.id === selectedStyle)?.nome}
                                      </span>
                                    </p>
                                  </div>
                                )}
                              </CardHeader>
                            </Card>
                          ))}
                        </div>

                        {/* Paginação */}
                        {filtrarServicos(categoria).length > itemsPerPage && (
                          <div className="flex justify-center items-center gap-2 mt-4">
                            <Button
                              variant="outline"
                              size="icon"
                              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                              disabled={currentPage === 1}
                            >
                              <ChevronLeft className="h-4 w-4" />
                            </Button>
                            <span className="text-sm">
                              Página {currentPage} de {calcularTotalPaginas(filtrarServicos(categoria))}
                            </span>
                            <Button
                              variant="outline"
                              size="icon"
                              onClick={() =>
                                setCurrentPage(
                                  Math.min(calcularTotalPaginas(filtrarServicos(categoria)), currentPage + 1),
                                )
                              }
                              disabled={currentPage === calcularTotalPaginas(filtrarServicos(categoria))}
                            >
                              <ChevronRight className="h-4 w-4" />
                            </Button>
                          </div>
                        )}
                      </>
                    ) : (
                      <div className="text-center py-8">
                        <p className="text-muted-foreground">Nenhum serviço encontrado para sua pesquisa.</p>
                      </div>
                    )}
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Escolha o profissional</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {profissionais.map((prof) => (
                  <Card
                    key={prof.id}
                    className={`cursor-pointer ${professional === prof.id ? "border-primary" : ""}`}
                    onClick={() => setProfessional(prof.id)}
                  >
                    <CardHeader className="p-4 text-center">
                      <Avatar className="w-20 h-20 mx-auto mb-2">
                        <AvatarImage src={prof.foto || "/placeholder.svg"} alt={prof.nome} />
                        <AvatarFallback>{prof.nome.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <CardTitle className="text-base">{prof.nome}</CardTitle>
                      <CardDescription className="line-clamp-2">{prof.especialidade}</CardDescription>
                      <div className="flex items-center justify-center gap-1 mt-2">
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              className={`h-3 w-3 ${star <= Math.floor(prof.avaliacao) ? "text-yellow-500 fill-yellow-500" : "text-muted-foreground"}`}
                            />
                          ))}
                        </div>
                        <span className="text-xs text-muted-foreground">({prof.avaliacao})</span>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Escolha a data</h3>
              <div className="flex justify-center">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  locale={ptBR}
                  className="rounded-md border"
                  disabled={(date) => {
                    // Disable past dates and Sundays
                    const today = new Date()
                    today.setHours(0, 0, 0, 0)
                    return date < today || date.getDay() === 0
                  }}
                />
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Escolha o horário</h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2">
                {availableTimes.map((t) => (
                  <Button
                    key={t}
                    variant={time === t ? "default" : "outline"}
                    className="flex items-center justify-center gap-2"
                    onClick={() => setTime(t)}
                  >
                    <Clock className="h-3 w-3" />
                    {t}
                  </Button>
                ))}
              </div>
            </div>
          )}

          {step === 5 && (
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Confirmar agendamento</h3>
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Serviço:</span>
                      <span className="font-medium">{selectedService?.nome}</span>
                    </div>
                    {selectedStyle && selectedService?.tem_estilos && (
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Estilo:</span>
                        <span className="font-medium">
                          {selectedService.estilos.find((e) => e.id === selectedStyle)?.nome}
                        </span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Profissional:</span>
                      <span className="font-medium">{profissionais.find((p) => p.id === professional)?.nome}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Data:</span>
                      <span className="font-medium">
                        {date ? format(date, "dd 'de' MMMM 'de' yyyy", { locale: ptBR }) : ""}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Horário:</span>
                      <span className="font-medium">{time}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Duração:</span>
                      <span className="font-medium">{selectedService?.duracao_min} minutos</span>
                    </div>

                    {/* Valor e opções de pagamento */}
                    <div className="pt-4 border-t space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Valor:</span>
                        {isServicoIncluso ? (
                          <Badge
                            variant="secondary"
                            className="bg-green-50 text-green-700 hover:bg-green-50 dark:bg-green-900/30 dark:text-green-400 dark:hover:bg-green-900/30"
                          >
                            Incluso no plano {cliente.assinatura?.nome}
                          </Badge>
                        ) : (
                          <span className="font-medium">R$ {selectedService?.preco.toFixed(2)}</span>
                        )}
                      </div>

                      {/* Opção para usar pontos como desconto */}
                      {!isServicoIncluso && cliente.pontos > 0 && selectedService && (
                        <div className="flex flex-col gap-2">
                          <div className="flex items-center justify-between space-x-2">
                            <div className="flex items-center space-x-2">
                              <Switch
                                id="usar-pontos"
                                checked={usarPontos}
                                onCheckedChange={setUsarPontos}
                                disabled={!selectedService}
                              />
                              <div className="flex items-center">
                                <Label htmlFor="usar-pontos" className="text-sm mr-1">
                                  Usar pontos como desconto
                                </Label>
                                <TooltipProvider>
                                  <Tooltip>
                                    <TooltipTrigger asChild>
                                      <Info className="h-4 w-4 text-muted-foreground cursor-help" />
                                    </TooltipTrigger>
                                    <TooltipContent>
                                      <p>Cada ponto vale R$ {clienteConfig.valorPorPonto.toFixed(2)} de desconto</p>
                                    </TooltipContent>
                                  </Tooltip>
                                </TooltipProvider>
                              </div>
                            </div>
                            <span className="text-sm font-medium">{cliente.pontos} pontos disponíveis</span>
                          </div>

                          {usarPontos && (
                            <div className="bg-muted/50 p-3 rounded-md space-y-2">
                              <div className="flex justify-between text-sm">
                                <span>Pontos utilizados:</span>
                                <span>{pontosAplicados} pontos</span>
                              </div>
                              <div className="flex justify-between text-sm">
                                <span>Desconto aplicado:</span>
                                <span>R$ {(pontosAplicados * clienteConfig.valorPorPonto).toFixed(2)}</span>
                              </div>
                              <div className="flex justify-between font-medium pt-2 border-t border-border">
                                <span>Valor final:</span>
                                <span className="text-green-500">R$ {valorFinal.toFixed(2)}</span>
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </CardContent>
        <CardFooter className="flex justify-between">
          {step > 1 ? (
            <Button variant="outline" onClick={handleBack}>
              Voltar
            </Button>
          ) : (
            <div></div>
          )}
          {step < 5 ? (
            <Button
              onClick={handleNext}
              disabled={
                (step === 1 && !service) ||
                (step === 2 && !professional) ||
                (step === 3 && !date) ||
                (step === 4 && !time)
              }
            >
              Próximo
            </Button>
          ) : (
            <Button onClick={handleSubmit}>Confirmar Agendamento</Button>
          )}
        </CardFooter>
      </Card>

      {/* Dialog para seleção de estilos */}
      <Dialog open={isStyleDialogOpen} onOpenChange={setIsStyleDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Escolha o estilo de {selectedServiceWithStyles?.nome}</DialogTitle>
            <DialogDescription>Selecione o estilo que melhor atende às suas preferências.</DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <RadioGroup
              defaultValue={selectedStyle}
              onValueChange={(value) => handleStyleSelect(selectedServiceWithStyles?.id, value)}
            >
              <div className="grid grid-cols-1 gap-4">
                {selectedServiceWithStyles?.estilos.map((estilo) => (
                  <div
                    key={estilo.id}
                    className="flex items-center space-x-3 space-y-0 rounded-md border p-4 cursor-pointer hover:bg-muted"
                    onClick={() => handleStyleSelect(selectedServiceWithStyles?.id, estilo.id)}
                  >
                    <RadioGroupItem value={estilo.id} id={estilo.id} />
                    <div className="flex-1 flex items-center gap-3">
                      <img
                        src={estilo.imagem || "/placeholder.svg"}
                        alt={estilo.nome}
                        className="h-16 w-16 rounded-md object-cover"
                      />
                      <Label htmlFor={estilo.id} className="font-medium cursor-pointer">
                        {estilo.nome}
                      </Label>
                    </div>
                  </div>
                ))}
              </div>
            </RadioGroup>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
