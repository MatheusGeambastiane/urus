import type React from "react"
import { DashboardLayout } from "@/components/dashboard/sidebar"
import { MobileNav } from "@/components/cliente/mobile-nav"

export default function ClienteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {/* Sidebar para desktop */}
      <div className="hidden md:block">
        <DashboardLayout isAdmin={false}>{children}</DashboardLayout>
      </div>

      {/* Conteúdo principal para mobile */}
      <div className="md:hidden min-h-screen bg-background">
        <div className="container px-4 py-6 pb-24 max-w-md mx-auto">{children}</div>
        <MobileNav />
      </div>
    </>
  )
}
