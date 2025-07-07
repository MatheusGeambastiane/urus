import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, Award, CreditCard, Scissors } from "lucide-react"
import { Progress } from "@/components/ui/progress"

export function ClienteDashboard({
  nextAppointment,
  points,
  subscription,
}: {
  nextAppointment?: any
  points: number
  subscription?: any
}) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {/* Próximo Agendamento */}
      <Card className="col-span-full md:col-span-2">
        <CardHeader>
          <CardTitle className="text-lg">Próximo Agendamento</CardTitle>
          <CardDescription>Seu próximo serviço agendado</CardDescription>
        </CardHeader>
        <CardContent>
          {nextAppointment ? (
            <div className="flex flex-col space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Scissors className="h-5 w-5 mr-2 text-primary" />
                  <span className="font-medium">{nextAppointment.service}</span>
                </div>
                <Button size="sm" variant="outline" asChild>
                  <a href="/cliente/agendamentos">Ver Detalhes</a>
                </Button>
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Calendar className="h-4 w-4 mr-1" />
                <span>{nextAppointment.dateFormatted}</span>
                <Clock className="h-4 w-4 ml-3 mr-1" />
                <span>{nextAppointment.time}</span>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-6">
              <p className="text-muted-foreground mb-4">Você não tem agendamentos</p>
              <Button asChild>
                <a href="/cliente/agendar">Agendar Agora</a>
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Pontos */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Meus Pontos</CardTitle>
          <CardDescription>Programa de fidelidade</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Award className="h-5 w-5 mr-2 text-primary" />
                <span className="font-medium">{points} pontos</span>
              </div>
              <Button size="sm" variant="outline" asChild>
                <a href="/cliente/pontos">Ver Detalhes</a>
              </Button>
            </div>
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span>Progresso para próximo benefício</span>
                <span>{points}/100 pontos</span>
              </div>
              <Progress value={points} max={100} className="h-2" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Assinatura */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Minha Assinatura</CardTitle>
          <CardDescription>Status da sua assinatura</CardDescription>
        </CardHeader>
        <CardContent>
          {subscription ? (
            <div className="flex flex-col space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <CreditCard className="h-5 w-5 mr-2 text-primary" />
                  <span className="font-medium">{subscription.plan}</span>
                </div>
                <Button size="sm" variant="outline" asChild>
                  <a href="/cliente/assinatura">Ver Detalhes</a>
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">Válido até: {subscription.validUntil}</p>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-6">
              <p className="text-muted-foreground mb-4">Você não tem assinatura ativa</p>
              <Button asChild>
                <a href="/cliente/assinatura">Assinar Agora</a>
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
