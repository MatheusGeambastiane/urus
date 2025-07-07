"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Calendar, User, Clock } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "Início", href: "/cliente", icon: Home },
  { name: "Agendar", href: "/cliente/agendar", icon: Calendar },
  { name: "Histórico", href: "/cliente/historico", icon: Clock },
  { name: "Perfil", href: "/cliente/perfil", icon: User },
]

export function MobileNav() {
  const pathname = usePathname()

  return (
    <div className="fixed bottom-0 left-0 z-50 w-full bg-background border-t shadow-lg md:hidden safe-area-bottom">
      <div className="grid h-16 grid-cols-4 max-w-md mx-auto">
        {navItems.map((item) => {
          const isActive = pathname === item.href

          return (
            <Link key={item.name} href={item.href} className="relative flex flex-col items-center justify-center">
              {isActive && <span className="absolute top-0 w-10 h-1 rounded-full bg-primary" />}
              <div
                className={cn(
                  "flex items-center justify-center w-10 h-10 rounded-full transition-colors",
                  isActive ? "text-primary" : "text-muted-foreground",
                )}
              >
                <item.icon className={cn("h-5 w-5", isActive ? "text-primary" : "text-muted-foreground")} />
              </div>
              <span
                className={cn("text-[10px] mt-0.5", isActive ? "text-primary font-medium" : "text-muted-foreground")}
              >
                {item.name}
              </span>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
