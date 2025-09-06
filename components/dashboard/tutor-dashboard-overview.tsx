"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { AnimatedCounter } from "@/components/ui/animated-counter"
import { Separator } from "@/components/ui/separator"
import {
  Calendar,
  Clock,
  DollarSign,
  MessageSquare,
  Users,
  TrendingUp,
  Settings,
  BookOpen,
  Star,
  CheckCircle,
  AlertCircle,
} from "lucide-react"
import { useAuth } from "@/components/auth/auth-context"

export function TutorDashboardOverview() {
  const { user } = useAuth()

  const upcomingStudentSessions = [
    {
      id: 1,
      student: "Aminah Rashid",
      subject: "Mathematics",
      date: "Today",
      time: "2:00 PM",
      duration: "1 hour",
      status: "confirmed",
      avatar: "/student-aminah.jpg",
    },
    {
      id: 2,
      student: "Omar Hassan",
      subject: "Physics",
      date: "Tomorrow",
      time: "10:00 AM",
      duration: "1.5 hours",
      status: "pending",
      avatar: "/student-omar.jpg",
    },
    {
      id: 3,
      student: "Zara Ibrahim",
      subject: "Computer Science",
      date: "Dec 28",
      time: "4:00 PM",
      duration: "2 hours",
      status: "confirmed",
      avatar: "/student-zara.jpg",
    },
  ]

  const recentMessages = [
    {
      id: 1,
      student: "Aminah Rashid",
      message: "Hi, can we reschedule tomorrow's session?",
      time: "2 hours ago",
      unread: true,
    },
    {
      id: 2,
      student: "Omar Hassan",
      message: "Thank you for the great session yesterday!",
      time: "1 day ago",
      unread: false,
    },
    {
      id: 3,
      student: "Zara Ibrahim",
      message: "Could you share the notes from our last class?",
      time: "2 days ago",
      unread: true,
    },
  ]

  const availabilitySlots = [
    { day: "Monday", slots: "9:00 AM - 5:00 PM", booked: 3 },
    { day: "Tuesday", slots: "10:00 AM - 6:00 PM", booked: 2 },
    { day: "Wednesday", slots: "9:00 AM - 3:00 PM", booked: 4 },
    { day: "Thursday", slots: "11:00 AM - 7:00 PM", booked: 1 },
    { day: "Friday", slots: "9:00 AM - 4:00 PM", booked: 3 },
  ]

  return (
    <div className="space-y-6">
      {/* Professional Header */}
      <div className="bg-gradient-to-r from-[#568F87] to-[#064232] text-white p-6 rounded-lg">
        <h1 className="text-3xl font-bold">Good morning, {user?.name || "Tutor"}!</h1>
        <p className="text-white/90 mt-2">You have 3 sessions today and 2 new messages from students.</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="border-l-4 border-l-green-500">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Earnings</CardTitle>
            <DollarSign className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">
              RM <AnimatedCounter value={2840} />
            </div>
            <p className="text-xs text-muted-foreground">+RM 320 this week</p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-blue-500">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Sessions This Month</CardTitle>
            <Calendar className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">
              <AnimatedCounter value={28} />
            </div>
            <p className="text-xs text-muted-foreground">+4 from last month</p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-purple-500">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Students</CardTitle>
            <Users className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-600">
              <AnimatedCounter value={15} />
            </div>
            <p className="text-xs text-muted-foreground">3 new this week</p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-orange-500">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Rating</CardTitle>
            <Star className="h-4 w-4 text-orange-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-600">4.9</div>
            <p className="text-xs text-muted-foreground">Based on 47 reviews</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Upcoming Student Sessions */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span>Upcoming Student Sessions</span>
              </div>
              <Button variant="outline" size="sm">
                View Schedule
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {upcomingStudentSessions.map((session) => (
              <div
                key={session.id}
                className="flex items-center justify-between p-4 border rounded-lg hover:bg-secondary/50 transition-colors"
              >
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src={session.avatar || "/placeholder.svg"} alt={session.student} />
                    <AvatarFallback>
                      {session.student
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-medium">{session.student}</h4>
                    <p className="text-sm text-muted-foreground">
                      {session.subject} • {session.date} at {session.time}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge
                    variant={session.status === "confirmed" ? "default" : "secondary"}
                    className={session.status === "confirmed" ? "bg-green-100 text-green-800" : ""}
                  >
                    {session.status === "confirmed" ? (
                      <CheckCircle className="w-3 h-3 mr-1" />
                    ) : (
                      <AlertCircle className="w-3 h-3 mr-1" />
                    )}
                    {session.status}
                  </Badge>
                  <Button size="sm" variant="outline">
                    Join Session
                  </Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Student Messages */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <MessageSquare className="w-5 h-5" />
                <span>Student Messages</span>
              </div>
              <Badge variant="destructive" className="text-xs">
                2 new
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentMessages.map((message) => (
              <div
                key={message.id}
                className={`p-3 border rounded-lg cursor-pointer transition-colors ${
                  message.unread ? "bg-blue-50 border-blue-200" : "hover:bg-secondary/50"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <h5 className="font-medium text-sm">{message.student}</h5>
                  <span className="text-xs text-muted-foreground">{message.time}</span>
                </div>
                <p className="text-sm text-muted-foreground line-clamp-2">{message.message}</p>
                {message.unread && <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>}
              </div>
            ))}
            <Button variant="outline" className="w-full bg-transparent" size="sm">
              View All Messages
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Manage Availability */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5" />
                <span>Manage Availability</span>
              </div>
              <Button variant="outline" size="sm">
                <Settings className="w-4 h-4 mr-2" />
                Edit Schedule
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {availabilitySlots.map((slot) => (
              <div key={slot.day} className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <h5 className="font-medium">{slot.day}</h5>
                  <p className="text-sm text-muted-foreground">{slot.slots}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium">{slot.booked} sessions</p>
                  <p className="text-xs text-muted-foreground">booked</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Earnings Summary */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <TrendingUp className="w-5 h-5" />
              <span>Earnings Summary</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <p className="text-2xl font-bold text-green-600">RM 840</p>
                <p className="text-sm text-muted-foreground">This Week</p>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <p className="text-2xl font-bold text-blue-600">RM 2,840</p>
                <p className="text-sm text-muted-foreground">This Month</p>
              </div>
            </div>
            <Separator />
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm">Mathematics (12 sessions)</span>
                <span className="text-sm font-medium">RM 1,200</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Physics (8 sessions)</span>
                <span className="text-sm font-medium">RM 800</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Computer Science (8 sessions)</span>
                <span className="text-sm font-medium">RM 840</span>
              </div>
            </div>
            <Button className="w-full bg-transparent" variant="outline">
              View Detailed Report
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions for Tutors */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Button className="h-16 flex flex-col items-center justify-center space-y-1">
              <Calendar className="w-5 h-5" />
              <span className="text-sm">Set Availability</span>
            </Button>
            <Button
              variant="outline"
              className="h-16 flex flex-col items-center justify-center space-y-1 bg-transparent"
            >
              <MessageSquare className="w-5 h-5" />
              <span className="text-sm">Message Students</span>
            </Button>
            <Button
              variant="outline"
              className="h-16 flex flex-col items-center justify-center space-y-1 bg-transparent"
            >
              <BookOpen className="w-5 h-5" />
              <span className="text-sm">Upload Resources</span>
            </Button>
            <Button
              variant="outline"
              className="h-16 flex flex-col items-center justify-center space-y-1 bg-transparent"
            >
              <TrendingUp className="w-5 h-5" />
              <span className="text-sm">View Analytics</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
