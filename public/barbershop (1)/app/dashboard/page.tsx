import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DashboardLayout } from "@/components/dashboard/sidebar"
import { Calendar, Clock, DollarSign, Scissors, Users } from "lucide-react"

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">Visão geral da sua barbearia</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Agendamentos Hoje</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">+2 comparado a ontem</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Faturamento Hoje</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">R$ 580,00</div>
              <p className="text-xs text-muted-foreground">+R$ 120,00 comparado a ontem</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Clientes Novos</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <p className="text-xs text-muted-foreground">+1 comparado a ontem</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Próximo Horário</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">14:30</div>
              <p className="text-xs text-muted-foreground">Corte de cabelo - João Silva</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <Card className="col-span-4">
            <CardHeader>
              <CardTitle>Agendamentos da Semana</CardTitle>
              <CardDescription>Visão geral dos agendamentos para os próximos 7 dias</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] w-full rounded-md border">
                {/* Calendar component would go here */}
                <div className="flex h-full items-center justify-center">
                  <p className="text-muted-foreground">Calendário de agendamentos</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="col-span-3">
            <CardHeader>
              <CardTitle>Serviços Mais Populares</CardTitle>
              <CardDescription>Top serviços dos últimos 30 dias</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Scissors className="mr-2 h-4 w-4 text-muted-foreground" />
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <p className="text-sm font-medium">Corte Degradê</p>
                      <p className="text-sm text-muted-foreground">42%</p>
                    </div>
                    <div className="mt-1 h-2 w-full rounded-full bg-muted">
                      <div className="h-full w-[42%] rounded-full bg-primary"></div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Scissors className="mr-2 h-4 w-4 text-muted-foreground" />
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <p className="text-sm font-medium">Barba</p>
                      <p className="text-sm text-muted-foreground">28%</p>
                    </div>
                    <div className="mt-1 h-2 w-full rounded-full bg-muted">
                      <div className="h-full w-[28%] rounded-full bg-primary"></div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Scissors className="mr-2 h-4 w-4 text-muted-foreground" />
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <p className="text-sm font-medium">Combo (Corte + Barba)</p>
                      <p className="text-sm text-muted-foreground">18%</p>
                    </div>
                    <div className="mt-1 h-2 w-full rounded-full bg-muted">
                      <div className="h-full w-[18%] rounded-full bg-primary"></div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Scissors className="mr-2 h-4 w-4 text-muted-foreground" />
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <p className="text-sm font-medium">Coloração</p>
                      <p className="text-sm text-muted-foreground">12%</p>
                    </div>
                    <div className="mt-1 h-2 w-full rounded-full bg-muted">
                      <div className="h-full w-[12%] rounded-full bg-primary"></div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  )
}
