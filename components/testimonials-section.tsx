"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Aisyah Binti Ahmad",
      role: "Computer Science Student, UM",
      location: "Kuala Lumpur",
      rating: 5,
      text: "The tutors here are amazing! Ahmad helped me understand algorithms in a way my lecturers couldn't. My grades improved from C+ to A- in just one semester.",
      image: "/malaysian-female-student-aisyah.jpg",
    },
    {
      name: "Omar Hakim",
      role: "Form 5 Student",
      location: "Penang",
      rating: 5,
      text: "Nurul made English literature so much easier to understand. Her teaching style is perfect for SPM preparation. Highly recommend!",
      image: "/malaysian-male-student-omar.jpg",
    },
    {
      name: "Siti Nurhaliza",
      role: "Foundation Student, Taylor's",
      location: "Subang Jaya",
      rating: 5,
      text: "The interactive whiteboard and video sessions make learning so engaging. It's like having a personal teacher right at home!",
      image: "/malaysian-female-student-siti.jpg",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#064232] mb-4">What Our Students Say</h2>
          <p className="text-lg text-[#064232]/70 max-w-2xl mx-auto">
            Real feedback from Malaysian students who've transformed their learning experience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className="bg-gradient-to-br from-[#FFF5F2] to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-[#F5BABB]/20 relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-[#F5BABB]/40" />

              <div className="flex items-center gap-4 mb-6">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-3 border-[#F5BABB]/30"
                />
                <div>
                  <h3 className="font-bold text-[#064232]">{testimonial.name}</h3>
                  <p className="text-[#568F87] text-sm font-medium">{testimonial.role}</p>
                  <p className="text-[#064232]/60 text-sm">{testimonial.location}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-[#064232]/80 leading-relaxed italic">"{testimonial.text}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
