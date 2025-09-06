"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface AvailabilityCalendarProps {
  tutorId: string
}

export function AvailabilityCalendar({ tutorId }: AvailabilityCalendarProps) {
  const [currentDate, setCurrentDate] = useState(new Date())

  // Mock availability data
  const availability = {
    "2024-01-15": ["9:00 AM", "10:00 AM", "2:00 PM", "3:00 PM"],
    "2024-01-16": ["10:00 AM", "11:00 AM", "4:00 PM"],
    "2024-01-17": ["9:00 AM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"],
    "2024-01-18": ["10:00 AM", "11:00 AM"],
    "2024-01-19": ["9:00 AM", "10:00 AM", "11:00 AM", "2:00 PM"],
  }

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const daysInMonth = lastDay.getDate()
    const startingDayOfWeek = firstDay.getDay()

    const days = []

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null)
    }

    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(new Date(year, month, day))
    }

    return days
  }

  const formatDate = (date: Date) => {
    return date.toISOString().split("T")[0]
  }

  const isAvailable = (date: Date) => {
    const dateStr = formatDate(date)
    return availability[dateStr as keyof typeof availability]?.length > 0
  }

  const navigateMonth = (direction: "prev" | "next") => {
    setCurrentDate((prev) => {
      const newDate = new Date(prev)
      if (direction === "prev") {
        newDate.setMonth(prev.getMonth() - 1)
      } else {
        newDate.setMonth(prev.getMonth() + 1)
      }
      return newDate
    })
  }

  const days = getDaysInMonth(currentDate)
  const monthYear = currentDate.toLocaleDateString("en-US", { month: "long", year: "numeric" })

  return (
    <div className="space-y-4">
      {/* Calendar Header */}
      <div className="flex items-center justify-between">
        <Button variant="ghost" size="sm" onClick={() => navigateMonth("prev")}>
          <ChevronLeft className="w-4 h-4" />
        </Button>
        <h3 className="font-semibold">{monthYear}</h3>
        <Button variant="ghost" size="sm" onClick={() => navigateMonth("next")}>
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-1 text-center">
        {/* Day headers */}
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day} className="text-xs font-medium text-muted-foreground p-2">
            {day}
          </div>
        ))}

        {/* Calendar days */}
        {days.map((day, index) => (
          <div key={index} className="aspect-square p-1">
            {day && (
              <div
                className={`w-full h-full flex items-center justify-center text-sm rounded-md cursor-pointer transition-colors ${
                  isAvailable(day)
                    ? "bg-primary/10 text-primary hover:bg-primary/20"
                    : "text-muted-foreground hover:bg-secondary"
                }`}
              >
                {day.getDate()}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="flex items-center justify-center space-x-4 text-xs">
        <div className="flex items-center space-x-1">
          <div className="w-3 h-3 bg-primary/10 rounded"></div>
          <span className="text-muted-foreground">Available</span>
        </div>
        <div className="flex items-center space-x-1">
          <div className="w-3 h-3 bg-secondary rounded"></div>
          <span className="text-muted-foreground">Unavailable</span>
        </div>
      </div>

      {/* Next Available */}
      <div className="text-center">
        <p className="text-sm text-muted-foreground mb-2">Next available slots:</p>
        <div className="space-y-1">
          <Badge variant="outline" className="text-xs">
            Today: 2:00 PM, 3:00 PM
          </Badge>
          <Badge variant="outline" className="text-xs">
            Tomorrow: 10:00 AM, 4:00 PM
          </Badge>
        </div>
      </div>
    </div>
  )
}
