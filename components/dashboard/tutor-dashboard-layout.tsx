"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import {
  LayoutDashboard,
  Calendar,
  DollarSign,
  MessageSquare,
  Settings,
  Menu,
  X,
  GraduationCap,
  LogOut,
  Clock,
  Users,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { useAuth } from "@/components/auth/auth-context"

const tutorNavigation = [
  { name: "Dashboard", href: "/tutor-dashboard", icon: LayoutDashboard },
  { name: "My Sessions", href: "/tutor-dashboard/sessions", icon: Calendar },
  { name: "Availability", href: "/tutor-dashboard/availability", icon: Clock },
  { name: "Students", href: "/tutor-dashboard/students", icon: Users },
  { name: "Earnings", href: "/tutor-dashboard/earnings", icon: DollarSign },
  { name: "Messages", href: "/tutor-dashboard/messages", icon: MessageSquare },
  { name: "Settings", href: "/tutor-dashboard/settings", icon: Settings },
]

interface TutorDashboardLayoutProps {
  children: React.ReactNode
}

export function TutorDashboardLayout({ children }: TutorDashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()
  const { user, logout } = useAuth()

  const handleSignOut = () => {
    logout()
    router.push("/")
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile sidebar */}
      <div className={cn("fixed inset-0 z-50 lg:hidden", sidebarOpen ? "block" : "hidden")}>
        <div className="fixed inset-0 bg-black/20" onClick={() => setSidebarOpen(false)} />
        <div className="fixed left-0 top-0 h-full w-64 bg-card border-r border-border">
          <div className="flex items-center justify-between p-4 border-b border-border">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-[#568F87] rounded-lg flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-foreground">X-Tutor</span>
            </Link>
            <Button variant="ghost" size="sm" onClick={() => setSidebarOpen(false)}>
              <X className="w-5 h-5" />
            </Button>
          </div>
          <nav className="p-4 space-y-2">
            {tutorNavigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                  pathname === item.href ? "bg-[#568F87] text-white" : "text-foreground hover:bg-secondary",
                )}
                onClick={() => setSidebarOpen(false)}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.name}</span>
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Desktop sidebar */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:left-0 lg:z-50 lg:block lg:w-64 lg:bg-card lg:border-r lg:border-border">
        <div className="flex items-center p-4 border-b border-border">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-[#568F87] rounded-lg flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-foreground">X-Tutor</span>
          </Link>
        </div>
        <nav className="p-4 space-y-2">
          {tutorNavigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                pathname === item.href ? "bg-[#568F87] text-white" : "text-foreground hover:bg-secondary",
              )}
            >
              <item.icon className="w-5 h-5" />
              <span>{item.name}</span>
            </Link>
          ))}
        </nav>
        <div className="absolute bottom-4 left-4 right-4">
          <Button
            variant="ghost"
            className="w-full justify-start text-muted-foreground hover:text-foreground"
            onClick={handleSignOut}
          >
            <LogOut className="w-5 h-5 mr-3" />
            Sign Out
          </Button>
        </div>
      </div>

      {/* Main content */}
      <div className="lg:pl-64">
        {/* Top bar */}
        <div className="sticky top-0 z-40 bg-background border-b border-border">
          <div className="flex items-center justify-between px-4 py-3">
            <Button variant="ghost" size="sm" className="lg:hidden" onClick={() => setSidebarOpen(true)}>
              <Menu className="w-5 h-5" />
            </Button>
            <div className="flex items-center space-x-4 ml-auto">
              <ModeToggle />
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-[#568F87] rounded-full flex items-center justify-center">
                  <GraduationCap className="w-4 h-4 text-white" />
                </div>
                <div className="hidden sm:block">
                  <span className="text-sm font-medium text-foreground">
                    {user ? `${user.firstName} ${user.lastName}` : "Tutor"}
                  </span>
                  <p className="text-xs text-muted-foreground">Tutor Dashboard</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Page content */}
        <main className="p-6">{children}</main>
      </div>
    </div>
  )
}
