"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Star, MapPin, Clock, GraduationCap, Award, Calendar } from "lucide-react"
import { AvailabilityCalendar } from "@/components/tutors/availability-calendar"

interface TutorProfilePageProps {
  tutorId: string
}

const getTutorData = (id: string) => {
  const tutors = {
    "1": {
      id: "1",
      name: "Ahmad Zain",
      subject: "Mathematics",
      rating: 4.9,
      reviewCount: 127,
      rate: 45,
      experience: "5 years",
      avatar: "/tutor-ahmad.jpg",
      location: "Kuala Lumpur, Malaysia",
      specialties: ["Calculus", "Algebra", "Statistics", "Linear Algebra", "Differential Equations"],
      bio: "I'm a passionate mathematics educator with over 5 years of experience helping students master complex mathematical concepts. I hold a Master's degree in Mathematics from University of Malaya and have worked with students from middle school to college level. My teaching approach focuses on building strong foundational understanding while making math engaging and accessible.",
      education: "M.S. Mathematics, University of Malaya",
      languages: ["English", "Bahasa Malaysia", "Arabic"],
      responseTime: "Usually responds within 1 hour",
      completedSessions: 450,
      reviews: [
        {
          id: 1,
          student: "Nurul A.",
          rating: 5,
          comment: "Ahmad helped me understand calculus concepts that I struggled with for months. Highly recommended!",
          date: "2 weeks ago",
        },
        {
          id: 2,
          student: "Hakim K.",
          rating: 5,
          comment: "Excellent tutor! Very patient and explains everything clearly.",
          date: "1 month ago",
        },
      ],
    },
  }
  return tutors[id as keyof typeof tutors]
}

export function TutorProfilePage({ tutorId }: TutorProfilePageProps) {
  const tutor = getTutorData(tutorId)

  if (!tutor) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground">Tutor not found</h1>
          <Link href="/tutors">
            <Button className="mt-4">Back to Tutors</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Profile */}
        <div className="lg:col-span-2 space-y-6">
          {/* Header */}
          <Card>
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6">
                <Avatar className="w-32 h-32">
                  <AvatarImage src={tutor.avatar || "/placeholder.svg"} alt={tutor.name} />
                  <AvatarFallback className="text-2xl">
                    {tutor.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h1 className="text-3xl font-bold text-foreground mb-2">{tutor.name}</h1>
                  <p className="text-xl text-primary font-semibold mb-3">{tutor.subject} Tutor</p>

                  <div className="flex items-center space-x-4 mb-4">
                    <div className="flex items-center space-x-1">
                      <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      <span className="font-semibold">{tutor.rating}</span>
                      <span className="text-muted-foreground">({tutor.reviewCount} reviews)</span>
                    </div>
                    <div className="flex items-center space-x-1 text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span>{tutor.location}</span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-6 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{tutor.responseTime}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Award className="w-4 h-4" />
                      <span>{tutor.completedSessions} sessions completed</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-3xl font-bold text-primary">RM {tutor.rate}/hour</div>
                    <Link href={`/book/${tutor.id}`}>
                      <Button size="lg" className="px-8">
                        Book Session
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* About */}
          <Card>
            <CardHeader>
              <CardTitle>About</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">{tutor.bio}</p>
            </CardContent>
          </Card>

          {/* Specialties */}
          <Card>
            <CardHeader>
              <CardTitle>Specialties</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {tutor.specialties.map((specialty) => (
                  <Badge key={specialty} variant="secondary" className="px-3 py-1">
                    {specialty}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Reviews */}
          <Card>
            <CardHeader>
              <CardTitle>Student Reviews</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {tutor.reviews.map((review) => (
                <div key={review.id} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="font-medium">{review.student}</span>
                      <div className="flex items-center">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                    <span className="text-sm text-muted-foreground">{review.date}</span>
                  </div>
                  <p className="text-muted-foreground">{review.comment}</p>
                  {review.id !== tutor.reviews[tutor.reviews.length - 1].id && <Separator />}
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Quick Info */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Info</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-3">
                <GraduationCap className="w-5 h-5 text-primary" />
                <div>
                  <p className="font-medium">Education</p>
                  <p className="text-sm text-muted-foreground">{tutor.education}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Award className="w-5 h-5 text-primary" />
                <div>
                  <p className="font-medium">Experience</p>
                  <p className="text-sm text-muted-foreground">{tutor.experience}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <span className="w-5 h-5 text-primary font-bold">🗣️</span>
                <div>
                  <p className="font-medium">Languages</p>
                  <p className="text-sm text-muted-foreground">{tutor.languages.join(", ")}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Availability */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span>Availability</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <AvailabilityCalendar tutorId={tutorId} />
            </CardContent>
          </Card>

          {/* Book Session CTA */}
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-6 text-center">
              <h3 className="font-semibold text-foreground mb-2">Ready to start learning?</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Book a session with {tutor.name.split(" ")[0]} and take your {tutor.subject.toLowerCase()} skills to the
                next level.
              </p>
              <Link href={`/book/${tutor.id}`}>
                <Button className="w-full">Book Session Now</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
