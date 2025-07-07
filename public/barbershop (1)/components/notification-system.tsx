"use client"

import { useState, useEffect } from "react"
import { Bell } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import type { Notificacao } from "@/types"

export function NotificationSystem() {
  const [notifications, setNotifications] = useState<Notificacao[]>([])
  const [unreadCount, setUnreadCount] = useState(0)

  // Mock notifications data
  useEffect(() => {
    const mockNotifications: Notificacao[] = [
      {
        id: "1",
        tipo: "sistema",
        destinatario_id: "admin",
        titulo: "Estoque Baixo",
        conteudo: "Toalhas Descartáveis estão abaixo do limite mínimo (2 unidades)",
        data_envio: new Date(Date.now() - 1000 * 60 * 30).toISOString(), // 30 minutes ago
        lida: false,
      },
      {
        id: "2",
        tipo: "sistema",
        destinatario_id: "admin",
        titulo: "Novo Agendamento",
        conteudo: "Carlos Oliveira tem um novo agendamento para hoje às 15:30",
        data_envio: new Date(Date.now() - 1000 * 60 * 120).toISOString(), // 2 hours ago
        lida: false,
      },
      {
        id: "3",
        tipo: "sistema",
        destinatario_id: "admin",
        titulo: "Comissões Pendentes",
        conteudo: "Existem comissões pendentes para pagamento esta semana",
        data_envio: new Date(Date.now() - 1000 * 60 * 60 * 5).toISOString(), // 5 hours ago
        lida: true,
      },
      {
        id: "4",
        tipo: "sistema",
        destinatario_id: "admin",
        titulo: "Avaliação Recebida",
        conteudo: "Um cliente avaliou o serviço de Rafael com 5 estrelas",
        data_envio: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(), // 1 day ago
        lida: true,
      },
    ]

    setNotifications(mockNotifications)
    setUnreadCount(mockNotifications.filter((n) => !n.lida).length)
  }, [])

  const markAsRead = (id: string) => {
    setNotifications((prev) =>
      prev.map((notification) => (notification.id === id ? { ...notification, lida: true } : notification)),
    )
    setUnreadCount((prev) => Math.max(0, prev - 1))
  }

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((notification) => ({ ...notification, lida: true })))
    setUnreadCount(0)
  }

  const formatTime = (dateString: string) => {
    const date = new Date(dateString)
    const now = new Date()
    const diffMs = now.getTime() - date.getTime()
    const diffMins = Math.floor(diffMs / (1000 * 60))
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60))
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24))

    if (diffMins < 60) {
      return `${diffMins} min atrás`
    } else if (diffHours < 24) {
      return `${diffHours} h atrás`
    } else {
      return `${diffDays} d atrás`
    }
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          {unreadCount > 0 && (
            <Badge
              variant="destructive"
              className="absolute -right-1 -top-1 h-5 w-5 p-0 flex items-center justify-center"
            >
              {unreadCount}
            </Badge>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80" align="end">
        <div className="flex items-center justify-between">
          <h4 className="font-medium">Notificações</h4>
          {unreadCount > 0 && (
            <Button variant="ghost" size="sm" onClick={markAllAsRead} className="h-auto text-xs p-0">
              Marcar todas como lidas
            </Button>
          )}
        </div>
        <Separator className="my-2" />
        <div className="max-h-80 overflow-auto">
          {notifications.length === 0 ? (
            <p className="text-sm text-muted-foreground text-center py-4">Nenhuma notificação</p>
          ) : (
            <div className="space-y-2">
              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`p-2 rounded-md text-sm ${!notification.lida ? "bg-muted" : ""}`}
                  onClick={() => markAsRead(notification.id)}
                >
                  <div className="flex justify-between items-start">
                    <h5 className="font-medium">{notification.titulo}</h5>
                    <span className="text-xs text-muted-foreground">{formatTime(notification.data_envio)}</span>
                  </div>
                  <p className="text-muted-foreground">{notification.conteudo}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </PopoverContent>
    </Popover>
  )
}
