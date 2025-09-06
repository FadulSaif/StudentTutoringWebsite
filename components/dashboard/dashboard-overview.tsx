"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { AnimatedCounter } from "@/components/ui/animated-counter"
import { AchievementShowcase } from "@/components/gamification/achievement-badge"
import { FloatingActionButton } from "@/components/ui/floating-action-button"
import { Calendar, Clock, Star, TrendingUp, Users, BookOpen } from "lucide-react"
import Link from "next/link"
import { useAuth } from "@/components/auth/auth-context"

export function DashboardOverview() {
  const { user } = useAuth()

  const upcomingSessions = [
    {
      id: 1,
      tutor: "Ahmad Zain",
      subject: "Mathematics",
      date: "Today",
      time: "2:00 PM",
      duration: "1 hour",
      avatar: "/tutor-ahmad.jpg",
    },
    {
      id: 2,
      tutor: "Fatimah Nurul",
      subject: "Physics",
      date: "Tomorrow",
      time: "4:00 PM",
      duration: "1.5 hours",
      avatar: "/tutor-fatimah.jpg",
    },
  ]

  const recommendedTutors = [
    {
      id: 1,
      name: "Yusuf Rahman",
      subject: "Computer Science",
      rating: 4.9,
      rate: 35,
      avatar: "/tutor-yusuf.jpg",
    },
    {
      id: 2,
      name: "Aisyah Binti Omar",
      subject: "English",
      rating: 4.8,
      rate: 28,
      avatar: "/tutor-aisyah.jpg",
    },
    {
      id: 3,
      name: "Nurul Huda",
      subject: "Biology",
      rating: 4.9,
      rate: 32,
      avatar: "/tutor-nurul.jpg",
    },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Welcome back, {user?.name || "Student"}!</h1>
        <p className="text-muted-foreground">Here's what's happening with your learning journey.</p>
      </div>

      {/* Stats Cards with Animations */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Sessions</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              <AnimatedCounter value={24} />
            </div>
            <p className="text-xs text-muted-foreground">+2 from last month</p>
          </CardContent>
        </Card>
        <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Hours Learned</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              <AnimatedCounter value={36} />
            </div>
            <p className="text-xs text-muted-foreground">+4 from last month</p>
          </CardContent>
        </Card>
        <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Subjects</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              <AnimatedCounter value={3} />
            </div>
            <p className="text-xs text-muted-foreground">Math, Physics, CS</p>
          </CardContent>
        </Card>
      </div>

      {/* Achievements Section */}
      <Card className="overflow-hidden">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <TrendingUp className="w-5 h-5" />
            <span>Your Progress</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <AchievementShowcase />
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Upcoming Sessions */}
        <Card className="hover:shadow-md transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              Upcoming Sessions
              <Link href="/dashboard/bookings">
                <Button variant="ghost" size="sm" className="hover:bg-secondary transition-colors">
                  View All
                </Button>
              </Link>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {upcomingSessions.map((session, index) => (
              <div
                key={session.id}
                className="flex items-center space-x-4 p-3 border border-border rounded-lg hover:bg-secondary/50 transition-all duration-200 hover:scale-102"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Avatar className="ring-2 ring-primary/20">
                  <AvatarImage src={session.avatar || "/placeholder.svg"} alt={session.tutor} />
                  <AvatarFallback>
                    {session.tutor
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium text-foreground">{session.tutor}</h4>
                    <Badge variant="secondary" className="animate-pulse">
                      {session.subject}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {session.date} at {session.time} • {session.duration}
                  </p>
                </div>
              </div>
            ))}
            {upcomingSessions.length === 0 && (
              <div className="text-center py-8">
                <p className="text-muted-foreground">No upcoming sessions</p>
                <Link href="/dashboard/tutors">
                  <Button className="mt-2 hover:scale-105 transition-transform">Book a Session</Button>
                </Link>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Recommended Tutors */}
        <Card className="hover:shadow-md transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              Recommended Tutors
              <Link href="/dashboard/tutors">
                <Button variant="ghost" size="sm" className="hover:bg-secondary transition-colors">
                  View All
                </Button>
              </Link>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {recommendedTutors.map((tutor, index) => (
              <div
                key={tutor.id}
                className="flex items-center space-x-4 p-3 border border-border rounded-lg hover:bg-secondary/50 transition-all duration-200 hover:scale-102 cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Avatar className="ring-2 ring-primary/20">
                  <AvatarImage src={tutor.avatar || "/placeholder.svg"} alt={tutor.name} />
                  <AvatarFallback>
                    {tutor.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium text-foreground">{tutor.name}</h4>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{tutor.rating}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-muted-foreground">{tutor.subject}</p>
                    <p className="text-sm font-medium text-primary">RM {tutor.rate}/hr</p>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card className="hover:shadow-md transition-shadow duration-300">
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/dashboard/tutors">
              <Button className="w-full h-20 flex flex-col items-center justify-center space-y-2 hover:scale-105 transition-all duration-200">
                <Users className="w-6 h-6" />
                <span>Find a Tutor</span>
              </Button>
            </Link>
            <Link href="/dashboard/resources">
              <Button
                variant="outline"
                className="w-full h-20 flex flex-col items-center justify-center space-y-2 bg-transparent hover:scale-105 transition-all duration-200"
              >
                <BookOpen className="w-6 h-6" />
                <span>Browse Resources</span>
              </Button>
            </Link>
            <Link href="/dashboard/profile">
              <Button
                variant="outline"
                className="w-full h-20 flex flex-col items-center justify-center space-y-2 bg-transparent hover:scale-105 transition-all duration-200"
              >
                <TrendingUp className="w-6 h-6" />
                <span>View Progress</span>
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>

      {/* Floating Action Button */}
      <FloatingActionButton />
    </div>
  )
}
