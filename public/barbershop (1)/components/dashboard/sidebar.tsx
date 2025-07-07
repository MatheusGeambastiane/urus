"use client"

import type React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Calendar, Clipboard, CreditCard, Home, Package, Scissors, Settings, Users, Wallet, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarRail,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { NotificationSystem } from "@/components/notification-system"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface SidebarNavProps extends React.HTMLAttributes<HTMLDivElement> {
  isAdmin?: boolean
}

export function DashboardSidebar({ isAdmin = true, className }: SidebarNavProps) {
  const pathname = usePathname()

  const adminItems = [
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: Home,
    },
    {
      title: "Agenda",
      href: "/dashboard/agenda",
      icon: Calendar,
    },
    {
      title: "Profissionais",
      href: "/dashboard/profissionais",
      icon: Scissors,
    },
    {
      title: "Serviços",
      href: "/dashboard/servicos",
      icon: Clipboard,
    },
    {
      title: "Clientes",
      href: "/dashboard/clientes",
      icon: Users,
    },
    {
      title: "Assinaturas",
      href: "/dashboard/assinaturas",
      icon: CreditCard,
    },
    {
      title: "Estoque",
      href: "/dashboard/estoque",
      icon: Package,
    },
    {
      title: "Financeiro",
      href: "/dashboard/financeiro",
      icon: Wallet,
    },
    {
      title: "Configurações",
      href: "/dashboard/configuracoes",
      icon: Settings,
    },
  ]

  const clientItems = [
    {
      title: "Home",
      href: "/cliente",
      icon: Home,
    },
    {
      title: "Agendar",
      href: "/cliente/agendar",
      icon: Calendar,
    },
    {
      title: "Meu Perfil",
      href: "/cliente/perfil",
      icon: Users,
    },
    {
      title: "Avaliar",
      href: "/cliente/avaliar",
      icon: Clipboard,
    },
  ]

  const items = isAdmin ? adminItems : clientItems

  return (
    <Sidebar>
      <SidebarHeader className="flex h-14 items-center border-b px-4">
        <Link href={isAdmin ? "/dashboard" : "/cliente"} className="flex items-center gap-2 font-bold">
          <Scissors className="h-6 w-6" />
          <span className="text-xl">BarberApp</span>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.href}>
              <SidebarMenuButton asChild isActive={pathname === item.href} tooltip={item.title}>
                <Link href={item.href}>
                  <item.icon className="h-4 w-4" />
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/logout">
                <LogOut className="h-4 w-4" />
                <span>Sair</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}

export function DashboardLayout({
  children,
  isAdmin = true,
}: {
  children: React.ReactNode
  isAdmin?: boolean
}) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen">
        <DashboardSidebar isAdmin={isAdmin} />
        <div className="flex flex-1 flex-col">
          <header className="sticky top-0 z-10 flex h-14 items-center gap-4 border-b bg-background px-4 sm:px-6">
            <SidebarTrigger />
            <div className="flex-1" />
            <NotificationSystem />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="https://randomuser.me/api/portraits/men/32.jpg" alt="Avatar" />
                    <AvatarFallback>AD</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Minha Conta</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Perfil</DropdownMenuItem>
                <DropdownMenuItem>Configurações</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Sair</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </header>
          <main className="flex-1 p-4 sm:p-6">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  )
}
