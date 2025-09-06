"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Calendar, Clock, Video } from "lucide-react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { RescheduleModal } from "./reschedule-modal"

export function BookingsView() {
  const bookings = [
    {
      id: 1,
      tutor: "Ahmad Zain",
      subject: "Mathematics",
      date: "2024-01-15",
      time: "2:00 PM",
      duration: "1 hour",
      status: "upcoming",
      avatar: "/tutor-ahmad.jpg",
      price: "RM 45",
    },
    {
      id: 2,
      tutor: "Fatimah Nurul",
      subject: "Physics",
      date: "2024-01-16",
      time: "4:00 PM",
      duration: "1.5 hours",
      status: "upcoming",
      avatar: "/tutor-fatimah.jpg",
      price: "RM 67.50",
    },
    {
      id: 3,
      tutor: "Yusuf Aisyah",
      subject: "Computer Science",
      date: "2024-01-10",
      time: "3:00 PM",
      duration: "2 hours",
      status: "completed",
      avatar: "/tutor-yusuf.jpg",
      price: "RM 90",
    },
  ]

  const [rescheduleModal, setRescheduleModal] = useState<{ open: boolean; bookingId: number | null }>({
    open: false,
    bookingId: null,
  })
  const router = useRouter()

  const handleJoinSession = (bookingId: number) => {
    router.push(`/session/${bookingId}`)
  }

  const handleReschedule = (bookingId: number) => {
    setRescheduleModal({ open: true, bookingId })
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "upcoming":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
      case "completed":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
      case "cancelled":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200"
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">My Bookings</h1>
        <p className="text-muted-foreground">Manage your tutoring sessions</p>
      </div>

      <div className="space-y-4">
        {bookings.map((booking) => (
          <Card key={booking.id}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src={booking.avatar || "/placeholder.svg"} alt={booking.tutor} />
                    <AvatarFallback>
                      {booking.tutor
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold text-foreground">{booking.tutor}</h3>
                    <p className="text-sm text-muted-foreground">{booking.subject}</p>
                    <p className="text-sm font-medium text-primary">{booking.price}</p>
                  </div>
                </div>
                <Badge className={getStatusColor(booking.status)}>{booking.status}</Badge>
              </div>

              <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm">{booking.date}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm">
                    {booking.time} ({booking.duration})
                  </span>
                </div>
                <div className="flex space-x-2">
                  {booking.status === "upcoming" && (
                    <>
                      <Button
                        size="sm"
                        className="flex items-center space-x-1"
                        onClick={() => handleJoinSession(booking.id)}
                      >
                        <Video className="w-4 h-4" />
                        <span>Join Session</span>
                      </Button>
                      <Button size="sm" variant="outline" onClick={() => handleReschedule(booking.id)}>
                        Reschedule
                      </Button>
                    </>
                  )}
                  {booking.status === "completed" && (
                    <Button size="sm" variant="outline">
                      Leave Review
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <RescheduleModal
        open={rescheduleModal.open}
        onOpenChange={(open) => setRescheduleModal({ open, bookingId: null })}
        bookingId={rescheduleModal.bookingId}
      />
    </div>
  )
}
