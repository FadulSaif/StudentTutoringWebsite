import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { FileText, Video, BookOpen, Search, TrendingUp } from "lucide-react"

export function DashboardResourcesView() {
  const recentResources = [
    {
      id: 1,
      title: "Calculus Fundamentals Guide",
      type: "PDF",
      subject: "Mathematics",
      downloadedAt: "2 days ago",
    },
    {
      id: 2,
      title: "Physics Problem Solving",
      type: "Video",
      subject: "Physics",
      downloadedAt: "1 week ago",
    },
    {
      id: 3,
      title: "Python Programming Basics",
      type: "Article",
      subject: "Computer Science",
      downloadedAt: "2 weeks ago",
    },
  ]

  const recommendedResources = [
    {
      id: 4,
      title: "Advanced Calculus Problems",
      type: "PDF",
      subject: "Mathematics",
      rating: 4.8,
    },
    {
      id: 5,
      title: "Linear Algebra Visualized",
      type: "Video",
      subject: "Mathematics",
      rating: 4.9,
    },
    {
      id: 6,
      title: "Statistics Quick Reference",
      type: "Article",
      subject: "Mathematics",
      rating: 4.7,
    },
  ]

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "PDF":
        return <FileText className="w-4 h-4" />
      case "Video":
        return <Video className="w-4 h-4" />
      case "Article":
        return <BookOpen className="w-4 h-4" />
      default:
        return <FileText className="w-4 h-4" />
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Learning Resources</h1>
        <p className="text-muted-foreground">Access study materials and practice resources</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Downloaded</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">Resources saved</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Study Time</CardTitle>
            <Video className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8.5h</div>
            <p className="text-xs text-muted-foreground">This week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Subjects</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">Active subjects</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Resources */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              Recent Downloads
              <Link href="/resources">
                <Button variant="ghost" size="sm">
                  View All
                </Button>
              </Link>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentResources.map((resource) => (
              <div key={resource.id} className="flex items-center space-x-4 p-3 border border-border rounded-lg">
                <div className="p-2 bg-primary/10 rounded-lg text-primary">{getTypeIcon(resource.type)}</div>
                <div className="flex-1">
                  <h4 className="font-medium text-foreground">{resource.title}</h4>
                  <div className="flex items-center space-x-2">
                    <Badge variant="secondary" className="text-xs">
                      {resource.subject}
                    </Badge>
                    <span className="text-sm text-muted-foreground">{resource.downloadedAt}</span>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Recommended Resources */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <TrendingUp className="w-5 h-5" />
              <span>Recommended for You</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {recommendedResources.map((resource) => (
              <div key={resource.id} className="flex items-center space-x-4 p-3 border border-border rounded-lg">
                <div className="p-2 bg-primary/10 rounded-lg text-primary">{getTypeIcon(resource.type)}</div>
                <div className="flex-1">
                  <h4 className="font-medium text-foreground">{resource.title}</h4>
                  <div className="flex items-center space-x-2">
                    <Badge variant="secondary" className="text-xs">
                      {resource.subject}
                    </Badge>
                    <div className="flex items-center space-x-1">
                      <span className="text-yellow-400">★</span>
                      <span className="text-sm text-muted-foreground">{resource.rating}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Explore Resources</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Link href="/resources?type=pdf">
              <Button
                variant="outline"
                className="w-full h-20 flex flex-col items-center justify-center space-y-2 bg-transparent"
              >
                <FileText className="w-6 h-6" />
                <span>PDF Guides</span>
              </Button>
            </Link>
            <Link href="/resources?type=video">
              <Button
                variant="outline"
                className="w-full h-20 flex flex-col items-center justify-center space-y-2 bg-transparent"
              >
                <Video className="w-6 h-6" />
                <span>Video Tutorials</span>
              </Button>
            </Link>
            <Link href="/resources?type=article">
              <Button
                variant="outline"
                className="w-full h-20 flex flex-col items-center justify-center space-y-2 bg-transparent"
              >
                <BookOpen className="w-6 h-6" />
                <span>Articles</span>
              </Button>
            </Link>
            <Link href="/resources?type=quiz">
              <Button
                variant="outline"
                className="w-full h-20 flex flex-col items-center justify-center space-y-2 bg-transparent"
              >
                <Search className="w-6 h-6" />
                <span>Practice Quizzes</span>
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
