"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Calendar, Home, User, Scissors, Award, Star, LogOut, CreditCard } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const menuItems = [
  { name: "Início", href: "/cliente", icon: Home },
  { name: "Agendar", href: "/cliente/agendar", icon: Calendar },
  { name: "Meu Perfil", href: "/cliente/perfil", icon: User },
  { name: "Serviços", href: "/cliente/servicos", icon: Scissors },
  { name: "Assinatura", href: "/cliente/assinatura", icon: CreditCard },
  { name: "Pontos", href: "/cliente/pontos", icon: Award },
  { name: "Avaliar", href: "/cliente/avaliar", icon: Star },
]

export function ClienteSidebar() {
  const pathname = usePathname()

  return (
    <SidebarProvider>
      <Sidebar variant="floating" className="border-r border-border">
        <SidebarHeader className="flex items-center justify-between p-4">
          <div className="flex items-center gap-2">
            <Avatar className="h-8 w-8">
              <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Avatar" />
              <AvatarFallback>CB</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span className="text-sm font-medium">Cliente Barbearia</span>
              <span className="text-xs text-muted-foreground">cliente@email.com</span>
            </div>
          </div>
          <SidebarTrigger />
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            {menuItems.map((item) => (
              <SidebarMenuItem key={item.name}>
                <SidebarMenuButton asChild isActive={pathname === item.href} tooltip={item.name}>
                  <Link href={item.href}>
                    <item.icon className="h-4 w-4" />
                    <span>{item.name}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarContent>
        <SidebarFooter className="p-4">
          <Button variant="outline" className="w-full justify-start" asChild>
            <Link href="/login">
              <LogOut className="mr-2 h-4 w-4" />
              Sair
            </Link>
          </Button>
        </SidebarFooter>
      </Sidebar>
    </SidebarProvider>
  )
}
