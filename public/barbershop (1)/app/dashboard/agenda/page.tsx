"use client"

import React from "react"

import { useState } from "react"
import { DashboardLayout } from "@/components/dashboard/sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { format } from "date-fns"
import { ptBR } from "date-fns/locale"
import { Clock, Plus, User } from "lucide-react"

export default function AgendaPage() {
  const [date, setDate] = useState<Date>(new Date())
  const [view, setView] = useState<"day" | "week">("day")
  const [professional, setProfessional] = useState<string>("all")

  // Mock data for appointments
  const appointments = [
    { id: 1, time: "09:00", client: "João Silva", service: "Corte Degradê", duration: 40, professional: "Rafael" },
    { id: 2, time: "10:00", client: "Pedro Santos", service: "Barba", duration: 30, professional: "Carlos" },
    { id: 3, time: "11:30", client: "Lucas Oliveira", service: "Combo Clássico", duration: 50, professional: "André" },
    {
      id: 4,
      time: "14:00",
      client: "Marcos Pereira",
      service: "Corte Navalhado",
      duration: 45,
      professional: "Rafael",
    },
    { id: 5, time: "15:30", client: "Gabriel Costa", service: "Barba Completa", duration: 30, professional: "Carlos" },
    { id: 6, time: "16:30", client: "Thiago Souza", service: "Corte Clássico", duration: 30, professional: "André" },
  ]

  const filteredAppointments =
    professional === "all"
      ? appointments
      : appointments.filter((app) => app.professional.toLowerCase() === professional)

  const timeSlots = [
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
    "12:30",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
    "17:30",
    "18:00",
  ]

  const professionals = ["Rafael", "Carlos", "André"]

  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Agenda</h1>
            <p className="text-muted-foreground">Gerencie os agendamentos da barbearia</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2">
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Novo Agendamento
            </Button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <Card className="md:w-64">
            <CardHeader>
              <CardTitle>Filtros</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Data</label>
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={(date) => date && setDate(date)}
                  locale={ptBR}
                  className="rounded-md border"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Profissional</label>
                <Select value={professional} onValueChange={setProfessional}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione um profissional" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todos</SelectItem>
                    {professionals.map((prof) => (
                      <SelectItem key={prof.toLowerCase()} value={prof.toLowerCase()}>
                        {prof}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Visualização</label>
                <Tabs value={view} onValueChange={(v) => setView(v as "day" | "week")}>
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="day">Dia</TabsTrigger>
                    <TabsTrigger value="week">Semana</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
            </CardContent>
          </Card>

          <Card className="flex-1">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>{format(date, "EEEE, dd 'de' MMMM", { locale: ptBR })}</CardTitle>
                <CardDescription>{filteredAppointments.length} agendamentos</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              {view === "day" ? (
                <div className="space-y-2">
                  {timeSlots.map((time) => {
                    const appointment = filteredAppointments.find((a) => a.time === time)

                    return (
                      <div key={time} className="flex items-start gap-4 py-2 border-t">
                        <div className="w-16 text-sm text-muted-foreground">{time}</div>
                        {appointment ? (
                          <Card className="flex-1 bg-primary/5 border-primary/20">
                            <CardHeader className="p-3">
                              <div className="flex justify-between items-start">
                                <div>
                                  <CardTitle className="text-base">{appointment.service}</CardTitle>
                                  <CardDescription className="flex items-center gap-1">
                                    <User className="h-3 w-3" /> {appointment.client}
                                  </CardDescription>
                                </div>
                                <div className="text-xs text-muted-foreground flex items-center gap-1">
                                  <Clock className="h-3 w-3" /> {appointment.duration} min
                                </div>
                              </div>
                            </CardHeader>
                          </Card>
                        ) : (
                          <div className="flex-1 h-12 border border-dashed rounded-md flex items-center justify-center">
                            <span className="text-xs text-muted-foreground">Disponível</span>
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <div className="min-w-[800px]">
                    <div className="grid grid-cols-8 gap-2">
                      <div className="col-span-1"></div>
                      {professionals.map((prof) => (
                        <div key={prof} className="col-span-2 text-center font-medium py-2">
                          {prof}
                        </div>
                      ))}
                      <div className="col-span-1"></div>

                      {timeSlots.map((time) => (
                        <React.Fragment key={time}>
                          <div className="col-span-1 text-sm text-muted-foreground py-2 border-t">{time}</div>

                          {professionals.map((prof) => {
                            const appointment = appointments.find((a) => a.time === time && a.professional === prof)

                            return (
                              <div key={`${prof}-${time}`} className="col-span-2 border-t py-2">
                                {appointment ? (
                                  <Card className="bg-primary/5 border-primary/20">
                                    <CardHeader className="p-2">
                                      <div className="text-xs">
                                        <div className="font-medium">{appointment.service}</div>
                                        <div className="text-muted-foreground">{appointment.client}</div>
                                      </div>
                                    </CardHeader>
                                  </Card>
                                ) : (
                                  <div className="h-10 border border-dashed rounded-md flex items-center justify-center">
                                    <span className="text-xs text-muted-foreground">Disponível</span>
                                  </div>
                                )}
                              </div>
                            )
                          })}

                          <div className="col-span-1 border-t"></div>
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  )
}
