"use client"

import { motion } from "framer-motion"
import { Star, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function FeaturedTutorsSection() {
  const tutors = [
    {
      id: 1,
      name: "Ahmad Zain",
      subject: "Mathematics & Physics",
      rating: 4.9,
      reviews: 127,
      rate: 35,
      location: "Kuala Lumpur",
      image: "/malaysian-male-tutor-ahmad.jpg",
      specialties: ["SPM", "STPM", "A-Levels"],
    },
    {
      id: 2,
      name: "Nurul Aisyah",
      subject: "English & Literature",
      rating: 4.8,
      reviews: 98,
      rate: 30,
      location: "Penang",
      image: "/malaysian-female-tutor-nurul.jpg",
      specialties: ["IELTS", "SPM", "Essay Writing"],
    },
    {
      id: 3,
      name: "Yusuf Rahman",
      subject: "Computer Science",
      rating: 5.0,
      reviews: 85,
      rate: 45,
      location: "Johor Bahru",
      image: "/malaysian-male-programmer-yusuf.jpg",
      specialties: ["Python", "Web Dev", "Data Science"],
    },
    {
      id: 4,
      name: "Fatimah Nurul",
      subject: "Biology & Chemistry",
      rating: 4.9,
      reviews: 112,
      rate: 40,
      location: "Shah Alam",
      image: "/malaysian-female-science-tutor-fatimah.jpg",
      specialties: ["SPM", "Foundation", "Pre-Med"],
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-[#FFF5F2] to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#064232] mb-4">Featured Tutors</h2>
          <p className="text-lg text-[#064232]/70 max-w-2xl mx-auto">
            Meet some of our top-rated tutors who are ready to help you succeed.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {tutors.map((tutor, index) => (
            <motion.div
              key={tutor.id}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-[#F5BABB]/20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-4">
                <img
                  src={tutor.image || "/placeholder.svg"}
                  alt={tutor.name}
                  className="w-20 h-20 rounded-full mx-auto mb-4 object-cover border-4 border-[#F5BABB]/30"
                />
                <h3 className="font-bold text-[#064232] text-lg mb-1">{tutor.name}</h3>
                <p className="text-[#568F87] font-medium mb-2">{tutor.subject}</p>

                <div className="flex items-center justify-center gap-1 mb-2">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold text-[#064232]">{tutor.rating}</span>
                  <span className="text-[#064232]/60 text-sm">({tutor.reviews})</span>
                </div>

                <div className="flex items-center justify-center gap-1 text-[#064232]/60 text-sm mb-3">
                  <MapPin className="w-3 h-3" />
                  <span>{tutor.location}</span>
                </div>

                <div className="flex flex-wrap gap-1 justify-center mb-4">
                  {tutor.specialties.map((specialty) => (
                    <span key={specialty} className="px-2 py-1 bg-[#F5BABB]/20 text-[#064232] text-xs rounded-full">
                      {specialty}
                    </span>
                  ))}
                </div>

                <div className="text-2xl font-bold text-[#568F87] mb-4">
                  RM{tutor.rate}
                  <span className="text-sm font-normal text-[#064232]/60">/hour</span>
                </div>

                <Link href={`/tutors/${tutor.id}`}>
                  <Button className="w-full bg-[#568F87] hover:bg-[#064232] text-white rounded-xl">View Profile</Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Link href="/tutors">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-[#568F87] text-[#568F87] hover:bg-[#568F87] hover:text-white px-8 py-3 rounded-xl bg-transparent"
            >
              View More Tutors
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
