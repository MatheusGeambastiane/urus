import { ClienteSidebar } from "@/components/cliente/sidebar"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Clock, User, X, CheckCheck } from "lucide-react"
import { format } from "date-fns"
import { ptBR } from "date-fns/locale"

// Mock data for appointments
const appointments = [
  {
    id: 1,
    service: "Corte de Cabelo",
    professional: "João Silva",
    date: new Date(2025, 3, 25, 14, 30),
    status: "scheduled", // scheduled, completed, canceled
    price: 35,
  },
  {
    id: 2,
    service: "Barba",
    professional: "Carlos Oliveira",
    date: new Date(2025, 3, 28, 10, 0),
    status: "scheduled",
    price: 25,
  },
  {
    id: 3,
    service: "Corte + Barba",
    professional: "João Silva",
    date: new Date(2025, 3, 15, 16, 0),
    status: "completed",
    price: 55,
  },
  {
    id: 4,
    service: "Hidratação",
    professional: "Pedro Santos",
    date: new Date(2025, 3, 10, 11, 30),
    status: "canceled",
    price: 40,
  },
]

export default function AgendamentosPage() {
  return (
    <div className="flex min-h-screen bg-background">
      <ClienteSidebar />
      <div className="flex-1 p-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold tracking-tight">Meus Agendamentos</h1>
          <p className="text-muted-foreground">Visualize e gerencie seus agendamentos</p>
        </div>

        <Tabs defaultValue="scheduled" className="w-full">
          <TabsList className="mb-4">
            <TabsTrigger value="scheduled">Agendados</TabsTrigger>
            <TabsTrigger value="completed">Concluídos</TabsTrigger>
            <TabsTrigger value="canceled">Cancelados</TabsTrigger>
          </TabsList>

          <TabsContent value="scheduled">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {appointments
                .filter((appointment) => appointment.status === "scheduled")
                .map((appointment) => (
                  <AppointmentCard key={appointment.id} appointment={appointment} />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="completed">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {appointments
                .filter((appointment) => appointment.status === "completed")
                .map((appointment) => (
                  <AppointmentCard key={appointment.id} appointment={appointment} />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="canceled">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {appointments
                .filter((appointment) => appointment.status === "canceled")
                .map((appointment) => (
                  <AppointmentCard key={appointment.id} appointment={appointment} />
                ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

function AppointmentCard({ appointment }) {
  const statusColors = {
    scheduled: "bg-blue-100 text-blue-800",
    completed: "bg-green-100 text-green-800",
    canceled: "bg-red-100 text-red-800",
  }

  const statusLabels = {
    scheduled: "Agendado",
    completed: "Concluído",
    canceled: "Cancelado",
  }

  const statusIcons = {
    scheduled: Calendar,
    completed: CheckCheck,
    canceled: X,
  }

  const StatusIcon = statusIcons[appointment.status]

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg">{appointment.service}</CardTitle>
          <Badge className={statusColors[appointment.status]}>
            <StatusIcon className="h-3 w-3 mr-1" />
            {statusLabels[appointment.status]}
          </Badge>
        </div>
        <CardDescription>
          <div className="flex items-center mt-2">
            <Calendar className="h-4 w-4 mr-1 text-muted-foreground" />
            <span>{format(appointment.date, "dd 'de' MMMM 'de' yyyy", { locale: ptBR })}</span>
          </div>
          <div className="flex items-center mt-1">
            <Clock className="h-4 w-4 mr-1 text-muted-foreground" />
            <span>{format(appointment.date, "HH:mm")}</span>
          </div>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-2 text-sm">
          <User className="h-4 w-4 text-muted-foreground" />
          <span>Profissional: {appointment.professional}</span>
        </div>
        <div className="mt-2 text-sm font-medium">Valor: R$ {appointment.price.toFixed(2)}</div>
      </CardContent>
      <CardFooter>
        {appointment.status === "scheduled" && (
          <div className="flex gap-2 w-full">
            <Button variant="outline" className="flex-1">
              Reagendar
            </Button>
            <Button variant="destructive" className="flex-1">
              Cancelar
            </Button>
          </div>
        )}
        {appointment.status === "completed" && (
          <Button className="w-full" asChild>
            <a href="/cliente/avaliar">Avaliar Serviço</a>
          </Button>
        )}
        {appointment.status === "canceled" && (
          <Button className="w-full" asChild>
            <a href="/cliente/agendar">Agendar Novamente</a>
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}
