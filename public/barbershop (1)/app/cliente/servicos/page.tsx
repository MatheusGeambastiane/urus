import { ClienteSidebar } from "@/components/cliente/sidebar"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Scissors, Clock, DollarSign } from "lucide-react"

// Mock data for services
const services = [
  {
    id: 1,
    name: "Corte de Cabelo",
    description: "Corte tradicional com tesoura e máquina",
    price: 35,
    duration: 30,
    category: "Cabelo",
    popular: true,
  },
  {
    id: 2,
    name: "Barba",
    description: "Modelagem e hidratação da barba",
    price: 25,
    duration: 20,
    category: "Barba",
    popular: true,
  },
  {
    id: 3,
    name: "Corte + Barba",
    description: "Combo de corte de cabelo e barba",
    price: 55,
    duration: 50,
    category: "Combo",
    popular: true,
  },
  {
    id: 4,
    name: "Hidratação",
    description: "Tratamento para cabelos ressecados",
    price: 40,
    duration: 30,
    category: "Tratamento",
    popular: false,
  },
  {
    id: 5,
    name: "Coloração",
    description: "Pintura de cabelo com produtos de qualidade",
    price: 70,
    duration: 60,
    category: "Tratamento",
    popular: false,
  },
  {
    id: 6,
    name: "Relaxamento",
    description: "Tratamento para reduzir volume e frizz",
    price: 90,
    duration: 90,
    category: "Tratamento",
    popular: false,
  },
]

export default function ServicosPage() {
  return (
    <div className="flex min-h-screen bg-background">
      <ClienteSidebar />
      <div className="flex-1 p-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold tracking-tight">Nossos Serviços</h1>
          <p className="text-muted-foreground">Conheça todos os serviços disponíveis na nossa barbearia</p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4">Serviços Populares</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services
              .filter((service) => service.popular)
              .map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4">Todos os Serviços</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function ServiceCard({ service }) {
  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg">{service.name}</CardTitle>
          <Badge variant={service.popular ? "default" : "outline"}>{service.category}</Badge>
        </div>
        <CardDescription>{service.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-4 text-sm">
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1 text-muted-foreground" />
            <span>{service.duration} min</span>
          </div>
          <div className="flex items-center">
            <DollarSign className="h-4 w-4 mr-1 text-muted-foreground" />
            <span>R$ {service.price.toFixed(2)}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full" asChild>
          <a href="/cliente/agendar">
            <Scissors className="mr-2 h-4 w-4" />
            Agendar
          </a>
        </Button>
      </CardFooter>
    </Card>
  )
}
