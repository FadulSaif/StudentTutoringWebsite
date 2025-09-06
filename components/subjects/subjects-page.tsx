"use client"

import { useState, useMemo } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calculator, Atom, Code, BookOpen, Microscope, TrendingUp, Search, Star, Users, MapPin, X } from "lucide-react"
import Link from "next/link"

const subjects = [
  {
    id: "mathematics",
    name: "Mathematics",
    icon: Calculator,
    description: "Master mathematical concepts from basic arithmetic to advanced calculus",
    tutorCount: 120,
    avgRating: 4.8,
    avgPrice: 42,
    color: "bg-blue-50 border-blue-200 hover:bg-blue-100",
    iconColor: "text-blue-600",
    specialties: ["Algebra", "Calculus", "Statistics", "Geometry", "Linear Algebra", "Discrete Math"],
    levels: ["Primary", "Secondary", "University", "Professional"],
    topTutors: [
      { name: "Ahmad Zain", rating: 4.9, rate: 45, avatar: "/tutor-ahmad.jpg", location: "Kuala Lumpur" },
      { name: "Siti Aminah", rating: 4.8, rate: 40, avatar: "/tutor-siti.jpg", location: "Petaling Jaya" },
      { name: "Rahman Ali", rating: 4.7, rate: 38, avatar: "/tutor-rahman.jpg", location: "Shah Alam" },
    ],
  },
  {
    id: "physics",
    name: "Physics",
    icon: Atom,
    description: "Explore the fundamental laws of nature and understand how the universe works",
    tutorCount: 95,
    avgRating: 4.7,
    avgPrice: 45,
    color: "bg-purple-50 border-purple-200 hover:bg-purple-100",
    iconColor: "text-purple-600",
    specialties: ["Mechanics", "Thermodynamics", "Electromagnetism", "Quantum Physics", "Optics", "Nuclear Physics"],
    levels: ["Secondary", "University", "Advanced"],
    topTutors: [
      { name: "Fatimah Nurul", rating: 4.8, rate: 40, avatar: "/tutor-fatimah.jpg", location: "Petaling Jaya" },
      { name: "Hassan Ibrahim", rating: 4.9, rate: 48, avatar: "/tutor-hassan.jpg", location: "Kuala Lumpur" },
      { name: "Zainab Omar", rating: 4.6, rate: 42, avatar: "/tutor-zainab.jpg", location: "Cyberjaya" },
    ],
  },
  {
    id: "computer-science",
    name: "Computer Science",
    icon: Code,
    description: "Learn programming, algorithms, and modern software development practices",
    tutorCount: 85,
    avgRating: 4.9,
    avgPrice: 50,
    color: "bg-green-50 border-green-200 hover:bg-green-100",
    iconColor: "text-green-600",
    specialties: ["Python", "JavaScript", "Data Structures", "Algorithms", "Web Development", "Machine Learning"],
    levels: ["Beginner", "Intermediate", "Advanced", "Professional"],
    topTutors: [
      { name: "Yusuf Rahman", rating: 4.7, rate: 50, avatar: "/tutor-yusuf.jpg", location: "Shah Alam" },
      { name: "Aisha Karim", rating: 4.9, rate: 55, avatar: "/tutor-aisha.jpg", location: "Cyberjaya" },
      { name: "Omar Farid", rating: 4.8, rate: 48, avatar: "/tutor-omar.jpg", location: "Kuala Lumpur" },
    ],
  },
  {
    id: "english",
    name: "English",
    icon: BookOpen,
    description: "Improve your English language skills, from grammar to literature analysis",
    tutorCount: 75,
    avgRating: 4.6,
    avgPrice: 35,
    color: "bg-orange-50 border-orange-200 hover:bg-orange-100",
    iconColor: "text-orange-600",
    specialties: ["Grammar", "Writing", "Literature", "IELTS Prep", "Business English", "Conversation"],
    levels: ["Elementary", "Intermediate", "Advanced", "Professional"],
    topTutors: [
      { name: "Aisyah Binti Omar", rating: 4.9, rate: 35, avatar: "/tutor-aisyah.jpg", location: "Johor Bahru" },
      { name: "Sarah Abdullah", rating: 4.7, rate: 38, avatar: "/tutor-sarah.jpg", location: "Penang" },
      { name: "Mariam Hassan", rating: 4.8, rate: 40, avatar: "/tutor-mariam.jpg", location: "Kuala Lumpur" },
    ],
  },
  {
    id: "biology",
    name: "Biology",
    icon: Microscope,
    description: "Discover the fascinating world of living organisms and biological processes",
    tutorCount: 60,
    avgRating: 4.5,
    avgPrice: 40,
    color: "bg-teal-50 border-teal-200 hover:bg-teal-100",
    iconColor: "text-teal-600",
    specialties: ["Cell Biology", "Genetics", "Ecology", "Human Anatomy", "Molecular Biology", "Evolution"],
    levels: ["Secondary", "University", "Advanced"],
    topTutors: [
      { name: "Nurul Huda", rating: 4.6, rate: 42, avatar: "/tutor-nurul.jpg", location: "Penang" },
      { name: "Khalid Rashid", rating: 4.8, rate: 45, avatar: "/tutor-khalid.jpg", location: "Kuala Lumpur" },
      { name: "Laila Ahmad", rating: 4.5, rate: 38, avatar: "/tutor-laila.jpg", location: "Shah Alam" },
    ],
  },
  {
    id: "business",
    name: "Business",
    icon: TrendingUp,
    description: "Master business concepts, from basic economics to advanced management strategies",
    tutorCount: 45,
    avgRating: 4.7,
    avgPrice: 48,
    color: "bg-red-50 border-red-200 hover:bg-red-100",
    iconColor: "text-red-600",
    specialties: ["Economics", "Finance", "Marketing", "Management", "Accounting", "Entrepreneurship"],
    levels: ["Secondary", "University", "Professional", "Executive"],
    topTutors: [
      { name: "Hakim Abdullah", rating: 4.8, rate: 48, avatar: "/tutor-hakim.jpg", location: "Cyberjaya" },
      { name: "Nadia Ismail", rating: 4.9, rate: 52, avatar: "/tutor-nadia.jpg", location: "Kuala Lumpur" },
      { name: "Faiz Rahman", rating: 4.6, rate: 45, avatar: "/tutor-faiz.jpg", location: "Petaling Jaya" },
    ],
  },
]

export function SubjectsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedLevel, setSelectedLevel] = useState("all")
  const [selectedPriceRange, setSelectedPriceRange] = useState("all")
  const [sortBy, setSortBy] = useState("popularity")

  const filteredSubjects = useMemo(() => {
    const filtered = subjects.filter((subject) => {
      const matchesSearch =
        subject.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        subject.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        subject.specialties.some((specialty) => specialty.toLowerCase().includes(searchQuery.toLowerCase()))

      const matchesLevel = selectedLevel === "all" || subject.levels.includes(selectedLevel)

      const matchesPrice =
        selectedPriceRange === "all" ||
        (selectedPriceRange === "budget" && subject.avgPrice <= 35) ||
        (selectedPriceRange === "mid" && subject.avgPrice > 35 && subject.avgPrice <= 45) ||
        (selectedPriceRange === "premium" && subject.avgPrice > 45)

      return matchesSearch && matchesLevel && matchesPrice
    })

    // Sort subjects
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "popularity":
          return b.tutorCount - a.tutorCount
        case "rating":
          return b.avgRating - a.avgRating
        case "price-low":
          return a.avgPrice - b.avgPrice
        case "price-high":
          return b.avgPrice - a.avgPrice
        case "alphabetical":
          return a.name.localeCompare(b.name)
        default:
          return 0
      }
    })

    return filtered
  }, [searchQuery, selectedLevel, selectedPriceRange, sortBy])

  const clearFilters = () => {
    setSearchQuery("")
    setSelectedLevel("all")
    setSelectedPriceRange("all")
    setSortBy("popularity")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF5F2] to-white">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#064232] mb-4">Explore All Subjects</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Choose from our comprehensive range of subjects taught by expert tutors across Malaysia. Find the perfect
            match for your learning goals and academic needs.
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="space-y-4">
                {/* Search Bar */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    placeholder="Search subjects, specialties, or topics..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-12 h-12 text-lg border-gray-200 focus:border-[#568F87]"
                  />
                </div>

                {/* Filters */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <Select value={selectedLevel} onValueChange={setSelectedLevel}>
                    <SelectTrigger className="h-10">
                      <SelectValue placeholder="All Levels" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Levels</SelectItem>
                      <SelectItem value="Primary">Primary</SelectItem>
                      <SelectItem value="Secondary">Secondary</SelectItem>
                      <SelectItem value="University">University</SelectItem>
                      <SelectItem value="Professional">Professional</SelectItem>
                    </SelectContent>
                  </Select>

                  <Select value={selectedPriceRange} onValueChange={setSelectedPriceRange}>
                    <SelectTrigger className="h-10">
                      <SelectValue placeholder="All Prices" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Prices</SelectItem>
                      <SelectItem value="budget">Budget (&lt;=RM35)</SelectItem>
                      <SelectItem value="mid">Mid-range (RM35-45)</SelectItem>
                      <SelectItem value="premium">Premium (&gt;RM45)</SelectItem>
                    </SelectContent>
                  </Select>

                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="h-10">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="popularity">Most Popular</SelectItem>
                      <SelectItem value="rating">Highest Rated</SelectItem>
                      <SelectItem value="price-low">Price: Low to High</SelectItem>
                      <SelectItem value="price-high">Price: High to Low</SelectItem>
                      <SelectItem value="alphabetical">Alphabetical</SelectItem>
                    </SelectContent>
                  </Select>

                  <Button
                    variant="outline"
                    onClick={clearFilters}
                    className="h-10 bg-transparent border-gray-200 hover:bg-gray-50"
                  >
                    <X className="w-4 h-4 mr-2" />
                    Clear Filters
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            {filteredSubjects.length} subject{filteredSubjects.length !== 1 ? "s" : ""} found
          </p>
        </div>

        {/* Subjects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredSubjects.map((subject, index) => (
            <motion.div
              key={subject.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card
                className={`${subject.color} border-2 transition-all duration-300 hover:shadow-xl hover:scale-[1.02]`}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-4">
                      <div className={`w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm`}>
                        <subject.icon className={`w-8 h-8 ${subject.iconColor}`} />
                      </div>
                      <div>
                        <CardTitle className="text-2xl text-[#064232] mb-2">{subject.name}</CardTitle>
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <div className="flex items-center space-x-1">
                            <Users className="w-4 h-4" />
                            <span>{subject.tutorCount} tutors</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            <span>{subject.avgRating}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-[#568F87]">RM {subject.avgPrice}</div>
                      <div className="text-sm text-gray-500">avg/hour</div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <p className="text-gray-700 leading-relaxed">{subject.description}</p>

                  {/* Specialties */}
                  <div>
                    <h4 className="font-semibold text-[#064232] mb-3">Popular Specialties</h4>
                    <div className="flex flex-wrap gap-2">
                      {subject.specialties.slice(0, 4).map((specialty) => (
                        <Badge key={specialty} variant="secondary" className="bg-white/70 text-gray-700 hover:bg-white">
                          {specialty}
                        </Badge>
                      ))}
                      {subject.specialties.length > 4 && (
                        <Badge variant="secondary" className="bg-white/70 text-gray-700">
                          +{subject.specialties.length - 4} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Top Tutors */}
                  <div>
                    <h4 className="font-semibold text-[#064232] mb-3">Top Tutors</h4>
                    <div className="space-y-3">
                      {subject.topTutors.slice(0, 2).map((tutor) => (
                        <div key={tutor.name} className="flex items-center justify-between bg-white/50 rounded-lg p-3">
                          <div className="flex items-center space-x-3">
                            <Avatar className="w-10 h-10">
                              <AvatarImage src={tutor.avatar || "/placeholder.svg"} alt={tutor.name} />
                              <AvatarFallback>
                                {tutor.name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="font-medium text-[#064232]">{tutor.name}</div>
                              <div className="flex items-center space-x-2 text-sm text-gray-600">
                                <div className="flex items-center space-x-1">
                                  <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                                  <span>{tutor.rating}</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                  <MapPin className="w-3 h-3" />
                                  <span>{tutor.location}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="font-bold text-[#568F87]">RM {tutor.rate}</div>
                            <div className="text-xs text-gray-500">/hour</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3 pt-2">
                    <Link href={`/tutors?subject=${subject.id}`} className="flex-1">
                      <Button
                        variant="outline"
                        className="w-full bg-white/70 border-[#568F87] text-[#568F87] hover:bg-[#568F87] hover:text-white"
                      >
                        View All Tutors
                      </Button>
                    </Link>
                    <Link href={`/dashboard/tutors?subject=${subject.name}`} className="flex-1">
                      <Button className="w-full bg-[#568F87] hover:bg-[#064232]">Find a Tutor</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* No Results */}
        {filteredSubjects.length === 0 && (
          <motion.div
            className="text-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-2xl font-semibold text-[#064232] mb-4">No subjects found</h3>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              Try adjusting your search criteria or filters to find the subjects you're looking for.
            </p>
            <Button
              onClick={clearFilters}
              variant="outline"
              className="bg-transparent border-[#568F87] text-[#568F87] hover:bg-[#568F87] hover:text-white"
            >
              Clear All Filters
            </Button>
          </motion.div>
        )}

        {/* Call to Action */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Card className="bg-gradient-to-r from-[#568F87] to-[#064232] border-0 text-white">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Can't find what you're looking for?</h3>
              <p className="text-lg mb-6 opacity-90">
                Our tutors cover many more specialized topics. Get in touch and we'll help you find the perfect match.
              </p>
              <Button size="lg" variant="secondary" className="bg-white text-[#064232] hover:bg-gray-100">
                Contact Support
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
