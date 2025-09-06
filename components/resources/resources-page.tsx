"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, FileText, Video, BookOpen, Download, ExternalLink, Filter } from "lucide-react"

const mockResources = [
  {
    id: 1,
    title: "Calculus Fundamentals Guide",
    type: "PDF",
    subject: "Mathematics",
    description: "Comprehensive guide covering limits, derivatives, and integrals with practice problems.",
    downloadCount: 1250,
    rating: 4.8,
    size: "2.3 MB",
    pages: 45,
    difficulty: "Intermediate",
    tags: ["Calculus", "Derivatives", "Integrals"],
  },
  {
    id: 2,
    title: "Physics Problem Solving Strategies",
    type: "Video",
    subject: "Physics",
    description: "Step-by-step approach to solving complex physics problems with real examples.",
    downloadCount: 890,
    rating: 4.9,
    duration: "45 min",
    difficulty: "Advanced",
    tags: ["Problem Solving", "Mechanics", "Thermodynamics"],
  },
  {
    id: 3,
    title: "Python Programming Basics",
    type: "Article",
    subject: "Computer Science",
    description: "Interactive tutorial covering Python syntax, data structures, and basic algorithms.",
    downloadCount: 2100,
    rating: 4.7,
    readTime: "15 min",
    difficulty: "Beginner",
    tags: ["Python", "Programming", "Data Structures"],
  },
  {
    id: 4,
    title: "English Grammar Quiz Pack",
    type: "Quiz",
    subject: "English",
    description: "Collection of 50 grammar exercises with detailed explanations and answers.",
    downloadCount: 675,
    rating: 4.6,
    questions: 50,
    difficulty: "Intermediate",
    tags: ["Grammar", "Writing", "Practice"],
  },
  {
    id: 5,
    title: "Cell Biology Laboratory Manual",
    type: "PDF",
    subject: "Biology",
    description: "Complete lab manual with procedures, diagrams, and analysis questions.",
    downloadCount: 445,
    rating: 4.8,
    size: "5.1 MB",
    pages: 78,
    difficulty: "Advanced",
    tags: ["Cell Biology", "Laboratory", "Experiments"],
  },
  {
    id: 6,
    title: "Business Strategy Case Studies",
    type: "Article",
    subject: "Business",
    description: "Real-world case studies analyzing successful business strategies and decisions.",
    downloadCount: 320,
    rating: 4.5,
    readTime: "25 min",
    difficulty: "Advanced",
    tags: ["Strategy", "Case Studies", "Management"],
  },
]

export function ResourcesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedSubject, setSelectedSubject] = useState("all")
  const [selectedType, setSelectedType] = useState("all")
  const [selectedDifficulty, setSelectedDifficulty] = useState("all")

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "PDF":
        return <FileText className="w-5 h-5" />
      case "Video":
        return <Video className="w-5 h-5" />
      case "Article":
        return <BookOpen className="w-5 h-5" />
      case "Quiz":
        return <Search className="w-5 h-5" />
      default:
        return <FileText className="w-5 h-5" />
    }
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner":
        return "bg-green-100 text-green-800"
      case "Intermediate":
        return "bg-yellow-100 text-yellow-800"
      case "Advanced":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const filteredResources = mockResources.filter((resource) => {
    const matchesSearch =
      resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))

    const matchesSubject = selectedSubject === "all" || resource.subject === selectedSubject
    const matchesType = selectedType === "all" || resource.type === selectedType
    const matchesDifficulty = selectedDifficulty === "all" || resource.difficulty === selectedDifficulty

    return matchesSearch && matchesSubject && matchesType && matchesDifficulty
  })

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="space-y-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Learning Resources</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Access our comprehensive library of study materials, guides, and practice resources.
          </p>
        </div>

        {/* Search and Filters */}
        <Card>
          <CardContent className="p-6">
            <div className="space-y-4">
              {/* Search Bar */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search resources by title, description, or tags..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Filters */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <Select value={selectedSubject} onValueChange={setSelectedSubject}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Subjects" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Subjects</SelectItem>
                    <SelectItem value="Mathematics">Mathematics</SelectItem>
                    <SelectItem value="Physics">Physics</SelectItem>
                    <SelectItem value="Computer Science">Computer Science</SelectItem>
                    <SelectItem value="English">English</SelectItem>
                    <SelectItem value="Biology">Biology</SelectItem>
                    <SelectItem value="Business">Business</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={selectedType} onValueChange={setSelectedType}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Types" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="PDF">PDF Documents</SelectItem>
                    <SelectItem value="Video">Video Tutorials</SelectItem>
                    <SelectItem value="Article">Articles</SelectItem>
                    <SelectItem value="Quiz">Quizzes</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={selectedDifficulty} onValueChange={setSelectedDifficulty}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Levels" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Levels</SelectItem>
                    <SelectItem value="Beginner">Beginner</SelectItem>
                    <SelectItem value="Intermediate">Intermediate</SelectItem>
                    <SelectItem value="Advanced">Advanced</SelectItem>
                  </SelectContent>
                </Select>

                <Button variant="outline" className="flex items-center space-x-2 bg-transparent">
                  <Filter className="w-4 h-4" />
                  <span>More Filters</span>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Results Count */}
        <div className="flex items-center justify-between">
          <p className="text-muted-foreground">{filteredResources.length} resources found</p>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((resource) => (
            <Card key={resource.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary">{getTypeIcon(resource.type)}</div>
                    <div>
                      <Badge variant="secondary" className="text-xs">
                        {resource.subject}
                      </Badge>
                    </div>
                  </div>
                  <Badge className={getDifficultyColor(resource.difficulty)}>{resource.difficulty}</Badge>
                </div>
                <CardTitle className="text-lg">{resource.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground line-clamp-2">{resource.description}</p>

                <div className="flex flex-wrap gap-1">
                  {resource.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center space-x-4">
                    <span>{resource.downloadCount} downloads</span>
                    <div className="flex items-center space-x-1">
                      <span>★</span>
                      <span>{resource.rating}</span>
                    </div>
                  </div>
                  <div>
                    {resource.type === "PDF" && <span>{resource.size}</span>}
                    {resource.type === "Video" && <span>{resource.duration}</span>}
                    {resource.type === "Article" && <span>{resource.readTime}</span>}
                    {resource.type === "Quiz" && <span>{resource.questions} questions</span>}
                  </div>
                </div>

                <div className="flex space-x-2">
                  <Button size="sm" className="flex-1">
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                  <Button size="sm" variant="outline" className="bg-transparent">
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredResources.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No resources found matching your criteria.</p>
            <Button
              variant="outline"
              className="mt-4 bg-transparent"
              onClick={() => {
                setSearchQuery("")
                setSelectedSubject("all")
                setSelectedType("all")
                setSelectedDifficulty("all")
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
