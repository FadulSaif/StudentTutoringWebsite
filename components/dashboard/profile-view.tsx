import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ProgressRing } from "@/components/ui/progress-ring"
import { AchievementShowcase } from "@/components/gamification/achievement-badge"
import { Edit, Trophy, Target } from "lucide-react"

export function ProfileView() {
  const learningGoals = [
    { name: "Master Calculus fundamentals", progress: 75, status: "In Progress" },
    { name: "Improve Physics problem-solving", progress: 60, status: "In Progress" },
    { name: "Learn Python programming", progress: 100, status: "Completed" },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">My Profile</h1>
        <p className="text-muted-foreground">Manage your account and track your progress</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Info */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="hover:shadow-md transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                Personal Information
                <Button variant="ghost" size="sm" className="hover:scale-105 transition-transform">
                  <Edit className="w-4 h-4" />
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-4">
                <Avatar className="w-20 h-20 ring-4 ring-primary/20">
                  <AvatarImage src="/student-profile.jpg" alt="Profile" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">John Doe</h3>
                  <p className="text-muted-foreground">Student since January 2024</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" value="John" readOnly />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" value="Doe" readOnly />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" value="john.doe@example.com" readOnly />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" value="+1 (555) 123-4567" readOnly />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Learning Goals with Progress */}
          <Card className="hover:shadow-md transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Target className="w-5 h-5" />
                <span>Learning Goals</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {learningGoals.map((goal, index) => (
                  <div
                    key={index}
                    className="p-4 border border-border rounded-lg hover:bg-secondary/20 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">{goal.name}</span>
                      <Badge variant={goal.status === "Completed" ? "default" : "secondary"}>{goal.status}</Badge>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className="bg-primary h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${goal.progress}%` }}
                      />
                    </div>
                    <div className="text-right text-sm text-muted-foreground mt-1">{goal.progress}%</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Achievements */}
          <Card className="hover:shadow-md transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Trophy className="w-5 h-5" />
                <span>Achievements</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <AchievementShowcase />
            </CardContent>
          </Card>
        </div>

        {/* Stats and Progress */}
        <div className="space-y-6">
          <Card className="hover:shadow-md transition-shadow duration-300">
            <CardHeader>
              <CardTitle>Learning Progress</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center">
              <div className="relative">
                <ProgressRing progress={72} className="relative" />
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow duration-300">
            <CardHeader>
              <CardTitle>Learning Stats</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center hover:scale-105 transition-transform duration-200">
                <div className="text-3xl font-bold text-primary">36</div>
                <p className="text-sm text-muted-foreground">Hours Learned</p>
              </div>
              <div className="text-center hover:scale-105 transition-transform duration-200">
                <div className="text-3xl font-bold text-primary">24</div>
                <p className="text-sm text-muted-foreground">Sessions Completed</p>
              </div>
              <div className="text-center hover:scale-105 transition-transform duration-200">
                <div className="text-3xl font-bold text-primary">3</div>
                <p className="text-sm text-muted-foreground">Subjects Studied</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
