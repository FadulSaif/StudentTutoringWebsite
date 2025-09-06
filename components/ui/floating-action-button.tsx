"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Plus, MessageSquare, Calendar, BookOpen, X } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"

export function FloatingActionButton() {
  const [isOpen, setIsOpen] = useState(false)

  const actions = [
    {
      icon: Calendar,
      label: "Book Session",
      href: "/tutors",
      color: "bg-blue-500 hover:bg-blue-600",
    },
    {
      icon: MessageSquare,
      label: "Quick Chat",
      href: "/chat",
      color: "bg-green-500 hover:bg-green-600",
    },
    {
      icon: BookOpen,
      label: "Resources",
      href: "/resources",
      color: "bg-purple-500 hover:bg-purple-600",
    },
  ]

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Action Buttons */}
      <div
        className={cn(
          "flex flex-col space-y-3 mb-3 transition-all duration-300",
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none",
        )}
      >
        {actions.map((action, index) => (
          <div
            key={action.label}
            className="flex items-center space-x-3"
            style={{ transitionDelay: `${index * 50}ms` }}
          >
            <div className="bg-background border border-border rounded-lg px-3 py-2 shadow-lg">
              <span className="text-sm font-medium text-foreground whitespace-nowrap">{action.label}</span>
            </div>
            <Link href={action.href}>
              <Button
                size="sm"
                className={cn("w-12 h-12 rounded-full shadow-lg text-white", action.color)}
                onClick={() => setIsOpen(false)}
              >
                <action.icon className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        ))}
      </div>

      {/* Main FAB */}
      <Button
        size="lg"
        className="w-14 h-14 rounded-full shadow-lg bg-primary hover:bg-primary/90 transition-all duration-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className={cn("transition-transform duration-300", isOpen && "rotate-45")}>
          {isOpen ? <X className="w-6 h-6" /> : <Plus className="w-6 h-6" />}
        </div>
      </Button>
    </div>
  )
}
