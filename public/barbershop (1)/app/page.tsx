import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold">
            <span className="text-xl">BarberApp</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="ghost">Entrar</Button>
            </Link>
            <Link href="/register">
              <Button>Cadastrar</Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Sistema completo para gerenciamento de barbearias
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Agende, gerencie e acompanhe todos os aspectos do seu negócio em um único lugar.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/login">
                    <Button size="lg" className="w-full min-[400px]:w-auto">
                      Começar agora
                    </Button>
                  </Link>
                  <Link href="#features">
                    <Button size="lg" variant="outline" className="w-full min-[400px]:w-auto">
                      Saiba mais
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <img
                  alt="Barbershop Management"
                  className="aspect-video overflow-hidden rounded-xl object-cover object-center"
                  src="/placeholder.svg?height=550&width=800"
                />
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Recursos</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Tudo o que você precisa para gerenciar sua barbearia de forma eficiente
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Agendamentos</CardTitle>
                  <CardDescription>Gerencie sua agenda de forma eficiente</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Visualização diária/semanal, drag and drop, reagendamentos e lembretes automáticos.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Serviços</CardTitle>
                  <CardDescription>Organize seus serviços por categoria</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Cadastre serviços com nome, descrição, duração, valor e profissionais habilitados.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Profissionais</CardTitle>
                  <CardDescription>Gerencie sua equipe</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Cadastre profissionais com foto, bio, especialidades e configure comissões.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Clientes</CardTitle>
                  <CardDescription>Mantenha um histórico completo</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Histórico de agendamentos, avaliações, feedbacks e sistema de indicações.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Estoque</CardTitle>
                  <CardDescription>Controle seu inventário</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Gerencie produtos, quantidades, categorias e receba alertas de baixo estoque.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Relatórios</CardTitle>
                  <CardDescription>Acompanhe seu desempenho</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Relatórios financeiros, serviços mais vendidos, profissionais mais requisitados e mais.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6">
        <div className="container flex flex-col items-center justify-center gap-4 md:flex-row md:gap-8">
          <p className="text-center text-sm text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} BarberApp. Todos os direitos reservados.
          </p>
          <div className="flex gap-4">
            <Link href="/terms" className="text-sm text-muted-foreground underline underline-offset-4">
              Termos
            </Link>
            <Link href="/privacy" className="text-sm text-muted-foreground underline underline-offset-4">
              Privacidade
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
