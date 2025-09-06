"use client"

import { useState, useMemo } from "react"
import { useRouter } from "next/navigation"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Search, Star, Filter } from "lucide-react"

const mockTutors = [
  {
    id: 1,
    name: "Ahmad Zain",
    subject: "Mathematics",
    rating: 4.9,
    rate: 45,
    experience: "5 years",
    avatar: "/tutor-ahmad.jpg",
    availability: "Available now",
    specialties: ["Calculus", "Algebra", "Statistics"],
  },
  {
    id: 2,
    name: "Fatimah Nurul",
    subject: "Physics",
    rating: 4.8,
    rate: 40,
    experience: "3 years",
    avatar: "/tutor-fatimah.jpg",
    availability: "Available today",
    specialties: ["Quantum Physics", "Mechanics", "Thermodynamics"],
  },
  {
    id: 3,
    name: "Yusuf Rahman",
    subject: "Computer Science",
    rating: 4.9,
    rate: 55,
    experience: "7 years",
    avatar: "/tutor-yusuf.jpg",
    availability: "Available tomorrow",
    specialties: ["Python", "Data Structures", "Algorithms"],
  },
  {
    id: 4,
    name: "Aisyah Binti Omar",
    subject: "English",
    rating: 4.7,
    rate: 35,
    experience: "4 years",
    avatar: "/tutor-aisyah.jpg",
    availability: "Available now",
    specialties: ["Literature", "Writing", "Grammar"],
  },
]

export function TutorSearch() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedSubject, setSelectedSubject] = useState("")
  const [priceRange, setPriceRange] = useState([0, 100])
  const [sortBy, setSortBy] = useState("rating")
  const router = useRouter()

  const filteredAndSortedTutors = useMemo(() => {
    const filtered = mockTutors.filter((tutor) => {
      // Search filter
      const matchesSearch =
        searchQuery === "" ||
        tutor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tutor.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tutor.specialties.some((specialty) => specialty.toLowerCase().includes(searchQuery.toLowerCase()))

      // Subject filter
      const matchesSubject = selectedSubject === "" || tutor.subject.toLowerCase() === selectedSubject.replace("-", " ")

      // Price filter
      const matchesPrice = tutor.rate >= priceRange[0] && tutor.rate <= priceRange[1]

      return matchesSearch && matchesSubject && matchesPrice
    })

    // Sort the filtered results
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "rating":
          return b.rating - a.rating
        case "price-low":
          return a.rate - b.rate
        case "price-high":
          return b.rate - a.rate
        case "experience":
          return Number.parseInt(b.experience) - Number.parseInt(a.experience)
        default:
          return 0
      }
    })

    return filtered
  }, [searchQuery, selectedSubject, priceRange, sortBy])

  const clearFilters = () => {
    setSearchQuery("")
    setSelectedSubject("")
    setPriceRange([0, 100])
    setSortBy("rating")
  }

  const handleBookSession = (tutorId: number) => {
    router.push(`/book/${tutorId}`)
  }

  const handleViewProfile = (tutorId: number) => {
    router.push(`/tutors/${tutorId}`)
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Find Tutors</h1>
        <p className="text-muted-foreground">Discover expert tutors for your learning needs</p>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardContent className="p-6">
          <div className="space-y-4">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search tutors by name or subject..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Filters */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Select value={selectedSubject} onValueChange={setSelectedSubject}>
                <SelectTrigger>
                  <SelectValue placeholder="Subject" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="mathematics">Mathematics</SelectItem>
                  <SelectItem value="physics">Physics</SelectItem>
                  <SelectItem value="computer-science">Computer Science</SelectItem>
                  <SelectItem value="english">English</SelectItem>
                  <SelectItem value="biology">Biology</SelectItem>
                  <SelectItem value="business">Business</SelectItem>
                </SelectContent>
              </Select>

              <div className="space-y-2">
                <label className="text-sm font-medium">
                  Price Range: RM {priceRange[0]} - RM {priceRange[1]}
                </label>
                <Slider
                  value={priceRange}
                  onValueChange={setPriceRange}
                  max={100}
                  min={0}
                  step={5}
                  className="w-full"
                />
              </div>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger>
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="experience">Most Experienced</SelectItem>
                </SelectContent>
              </Select>

              <Button variant="outline" className="flex items-center space-x-2 bg-transparent" onClick={clearFilters}>
                <Filter className="w-4 h-4" />
                <span>Clear Filters</span>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Results Count */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          Showing {filteredAndSortedTutors.length} of {mockTutors.length} tutors
        </p>
      </div>

      {/* Tutor Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAndSortedTutors.length > 0 ? (
          filteredAndSortedTutors.map((tutor) => (
            <Card key={tutor.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Avatar className="w-16 h-16">
                    <AvatarImage src={tutor.avatar || "/placeholder.svg"} alt={tutor.name} />
                    <AvatarFallback>
                      {tutor.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground">{tutor.name}</h3>
                    <p className="text-sm text-muted-foreground">{tutor.subject}</p>
                    <div className="flex items-center space-x-1 mt-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{tutor.rating}</span>
                      <span className="text-sm text-muted-foreground">({tutor.experience})</span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 space-y-3">
                  <div className="flex flex-wrap gap-1">
                    {tutor.specialties.map((specialty) => (
                      <Badge key={specialty} variant="secondary" className="text-xs">
                        {specialty}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{tutor.availability}</span>
                    <span className="text-lg font-bold text-primary">RM {tutor.rate}/hr</span>
                  </div>

                  <div className="flex space-x-2">
                    <Button
                      variant="outline"
                      className="flex-1 bg-transparent"
                      onClick={() => handleViewProfile(tutor.id)}
                    >
                      View Profile
                    </Button>
                    <Button className="flex-1" onClick={() => handleBookSession(tutor.id)}>
                      Book Session
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <p className="text-muted-foreground">No tutors found matching your criteria.</p>
            <Button variant="outline" onClick={clearFilters} className="mt-4 bg-transparent">
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
