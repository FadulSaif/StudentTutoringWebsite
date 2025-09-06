"use client"

import { motion } from "framer-motion"
import { Calculator, Atom, BookOpen, Code, TrendingUp, Clock, Globe, Palette } from "lucide-react"

export function SubjectsCarousel() {
  const subjects = [
    { name: "Mathematics", icon: Calculator, tutors: 120, color: "bg-[#F5BABB]/20 hover:bg-[#F5BABB]/30" },
    { name: "Science", icon: Atom, tutors: 95, color: "bg-[#568F87]/20 hover:bg-[#568F87]/30" },
    { name: "English", icon: BookOpen, tutors: 85, color: "bg-[#064232]/20 hover:bg-[#064232]/30" },
    { name: "Computer Science", icon: Code, tutors: 75, color: "bg-[#F5BABB]/20 hover:bg-[#F5BABB]/30" },
    { name: "Business", icon: TrendingUp, tutors: 60, color: "bg-[#568F87]/20 hover:bg-[#568F87]/30" },
    { name: "History", icon: Clock, tutors: 45, color: "bg-[#064232]/20 hover:bg-[#064232]/30" },
    { name: "Geography", icon: Globe, tutors: 40, color: "bg-[#F5BABB]/20 hover:bg-[#F5BABB]/30" },
    { name: "Art", icon: Palette, tutors: 35, color: "bg-[#568F87]/20 hover:bg-[#568F87]/30" },
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Popular Subjects</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Explore our wide range of subjects taught by expert tutors across Malaysia.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {subjects.map((subject, index) => (
            <motion.div
              key={subject.name}
              className={`${subject.color} rounded-2xl p-6 text-center cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 bg-white/50 rounded-xl flex items-center justify-center mx-auto mb-4">
                <subject.icon className="w-6 h-6 text-gray-900" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{subject.name}</h3>
              <p className="text-sm text-gray-700">{subject.tutors} tutors</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
