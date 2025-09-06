"use client"

import { useState, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"
import { Star, MapPin, Clock, Search, X } from "lucide-react"
import Link from "next/link"

const mockTutors = [
  {
    id: "1",
    name: "Ahmad Zain",
    subject: "Mathematics",
    rating: 4.9,
    reviewCount: 127,
    rate: 45,
    experience: "5 years",
    avatar: "/tutor-ahmad.jpg",
    availability: "Available now",
    location: "Kuala Lumpur, Malaysia",
    specialties: ["Calculus", "Algebra", "Statistics", "Linear Algebra"],
    bio: "Experienced math tutor with a passion for helping students understand complex concepts.",
  },
  {
    id: "2",
    name: "Fatimah Nurul",
    subject: "Physics",
    rating: 4.8,
    reviewCount: 89,
    rate: 40,
    experience: "3 years",
    avatar: "/tutor-fatimah.jpg",
    availability: "Available today",
    location: "Petaling Jaya, Malaysia",
    specialties: ["Quantum Physics", "Mechanics", "Thermodynamics", "Electromagnetism"],
    bio: "PhD in Physics with expertise in quantum mechanics and theoretical physics.",
  },
  {
    id: "3",
    name: "Yusuf Rahman",
    subject: "Computer Science",
    rating: 4.7,
    reviewCount: 156,
    rate: 50,
    experience: "4 years",
    avatar: "/tutor-yusuf.jpg",
    availability: "Available tomorrow",
    location: "Shah Alam, Malaysia",
    specialties: ["Python", "JavaScript", "Data Structures", "Algorithms"],
    bio: "Software engineer turned educator, specializing in programming and computer science fundamentals.",
  },
  {
    id: "4",
    name: "Aisyah Binti Omar",
    subject: "English",
    rating: 4.9,
    reviewCount: 203,
    rate: 35,
    experience: "6 years",
    avatar: "/tutor-aisyah.jpg",
    availability: "Available now",
    location: "Johor Bahru, Malaysia",
    specialties: ["Grammar", "Writing", "Literature", "IELTS Prep"],
    bio: "Native English speaker with extensive experience in language instruction and test preparation.",
  },
  {
    id: "5",
    name: "Nurul Huda",
    subject: "Biology",
    rating: 4.6,
    reviewCount: 78,
    rate: 42,
    experience: "3 years",
    avatar: "/tutor-nurul.jpg",
    availability: "Available today",
    location: "Penang, Malaysia",
    specialties: ["Cell Biology", "Genetics", "Ecology", "Human Anatomy"],
    bio: "Medical student with strong foundation in biological sciences and research experience.",
  },
  {
    id: "6",
    name: "Hakim Abdullah",
    subject: "Business",
    rating: 4.8,
    reviewCount: 134,
    rate: 48,
    experience: "7 years",
    avatar: "/tutor-hakim.jpg",
    availability: "Available tomorrow",
    location: "Cyberjaya, Malaysia",
    specialties: ["Marketing", "Finance", "Management", "Economics"],
    bio: "MBA graduate with corporate experience, helping students excel in business studies.",
  },
]

export function TutorListingPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedSubject, setSelectedSubject] = useState("all")
  const [priceRange, setPriceRange] = useState([0, 100])
  const [selectedRating, setSelectedRating] = useState("all")
  const [selectedAvailability, setSelectedAvailability] = useState("all")

  const filteredTutors = useMemo(() => {
    return mockTutors.filter((tutor) => {
      const matchesSearch =
        tutor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tutor.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tutor.specialties.some((specialty) => specialty.toLowerCase().includes(searchQuery.toLowerCase()))

      const matchesSubject = selectedSubject === "all" || tutor.subject === selectedSubject
      const matchesPrice = tutor.rate >= priceRange[0] && tutor.rate <= priceRange[1]
      const matchesRating = selectedRating === "all" || tutor.rating >= Number.parseFloat(selectedRating)
      const matchesAvailability =
        selectedAvailability === "all" ||
        (selectedAvailability === "now" && tutor.availability.includes("now")) ||
        (selectedAvailability === "today" && tutor.availability.includes("today")) ||
        (selectedAvailability === "tomorrow" && tutor.availability.includes("tomorrow"))

      return matchesSearch && matchesSubject && matchesPrice && matchesRating && matchesAvailability
    })
  }, [searchQuery, selectedSubject, priceRange, selectedRating, selectedAvailability])

  const clearFilters = () => {
    setSearchQuery("")
    setSelectedSubject("all")
    setPriceRange([0, 100])
    setSelectedRating("all")
    setSelectedAvailability("all")
  }

  const subjects = ["all", "Mathematics", "Physics", "Computer Science", "English", "Biology", "Business"]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Find Your Perfect Tutor</h1>
        <p className="text-muted-foreground">
          Browse through our qualified tutors and find the perfect match for your learning needs.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Filters Sidebar */}
        <div className="lg:col-span-1">
          <Card className="sticky top-4">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold">Filters</h2>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={clearFilters}
                  className="text-muted-foreground hover:text-foreground"
                >
                  <X className="w-4 h-4 mr-1" />
                  Clear
                </Button>
              </div>

              <div className="space-y-6">
                {/* Search */}
                <div>
                  <Label className="text-sm font-medium mb-2 block">Search</Label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <Input
                      placeholder="Search tutors or subjects..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>

                {/* Subject Filter */}
                <div>
                  <Label className="text-sm font-medium mb-2 block">Subject</Label>
                  <Select value={selectedSubject} onValueChange={setSelectedSubject}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {subjects.map((subject) => (
                        <SelectItem key={subject} value={subject}>
                          {subject === "all" ? "All Subjects" : subject}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Price Range */}
                <div>
                  <Label className="text-sm font-medium mb-2 block">
                    Hourly Rate: RM {priceRange[0]} - RM {priceRange[1]}
                  </Label>
                  <Slider
                    value={priceRange}
                    onValueChange={setPriceRange}
                    max={100}
                    min={0}
                    step={5}
                    className="mt-2"
                  />
                </div>

                {/* Rating Filter */}
                <div>
                  <Label className="text-sm font-medium mb-2 block">Minimum Rating</Label>
                  <Select value={selectedRating} onValueChange={setSelectedRating}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Ratings</SelectItem>
                      <SelectItem value="4.5">4.5+ Stars</SelectItem>
                      <SelectItem value="4.0">4.0+ Stars</SelectItem>
                      <SelectItem value="3.5">3.5+ Stars</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Availability Filter */}
                <div>
                  <Label className="text-sm font-medium mb-2 block">Availability</Label>
                  <Select value={selectedAvailability} onValueChange={setSelectedAvailability}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Any Time</SelectItem>
                      <SelectItem value="now">Available Now</SelectItem>
                      <SelectItem value="today">Available Today</SelectItem>
                      <SelectItem value="tomorrow">Available Tomorrow</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tutors Grid */}
        <div className="lg:col-span-3">
          <div className="mb-4 flex items-center justify-between">
            <p className="text-muted-foreground">
              {filteredTutors.length} tutor{filteredTutors.length !== 1 ? "s" : ""} found
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredTutors.map((tutor) => (
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
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-semibold text-lg">{tutor.name}</h3>
                          <Badge variant="secondary" className="mb-2">
                            {tutor.subject}
                          </Badge>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-primary">RM {tutor.rate}</div>
                          <div className="text-sm text-muted-foreground">/hour</div>
                        </div>
                      </div>

                      <div className="flex items-center space-x-1 mb-2">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-medium">{tutor.rating}</span>
                        <span className="text-muted-foreground">({tutor.reviewCount} reviews)</span>
                      </div>

                      <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{tutor.location}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{tutor.availability}</span>
                        </div>
                      </div>

                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{tutor.bio}</p>

                      <div className="flex flex-wrap gap-1 mb-4">
                        {tutor.specialties.slice(0, 3).map((specialty) => (
                          <Badge key={specialty} variant="outline" className="text-xs">
                            {specialty}
                          </Badge>
                        ))}
                        {tutor.specialties.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{tutor.specialties.length - 3} more
                          </Badge>
                        )}
                      </div>

                      <div className="flex space-x-2">
                        <Link href={`/tutors/${tutor.id}`} className="flex-1">
                          <Button variant="outline" className="w-full bg-transparent">
                            View Profile
                          </Button>
                        </Link>
                        <Link href={`/book/${tutor.id}`} className="flex-1">
                          <Button className="w-full">Book Session</Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredTutors.length === 0 && (
            <div className="text-center py-12">
              <div className="text-muted-foreground mb-4">
                <Search className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <h3 className="text-lg font-medium mb-2">No tutors found</h3>
                <p>Try adjusting your search criteria or filters to find more tutors.</p>
              </div>
              <Button onClick={clearFilters} variant="outline">
                Clear All Filters
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
