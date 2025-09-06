"use client"

import { motion } from "framer-motion"
import { DollarSign, Users, Zap, Shield } from "lucide-react"

export function WhyUsSection() {
  const features = [
    {
      icon: DollarSign,
      title: "Affordable Pricing in RM",
      description:
        "Transparent rates starting from RM25/hour with no hidden fees. Quality education shouldn't break the bank.",
      color: "bg-[#F5BABB]/20 text-[#568F87]",
    },
    {
      icon: Users,
      title: "Personalized Match",
      description:
        "Our smart matching system connects you with tutors who understand your learning style and academic goals.",
      color: "bg-[#568F87]/20 text-[#064232]",
    },
    {
      icon: Zap,
      title: "Interactive Tools",
      description:
        "Virtual whiteboard, real-time chat, screen sharing, and resource library for engaging learning sessions.",
      color: "bg-[#064232]/20 text-[#568F87]",
    },
    {
      icon: Shield,
      title: "Trusted Tutors",
      description:
        "All tutors are verified with background checks, student reviews, and proven track records of success.",
      color: "bg-[#F5BABB]/20 text-[#064232]",
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
          <h2 className="text-3xl md:text-4xl font-bold text-[#064232] mb-4">Why Choose Our Platform?</h2>
          <p className="text-lg text-[#064232]/70 max-w-2xl mx-auto">
            We're committed to making quality education accessible and effective for every Malaysian student.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="text-center group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div
                className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-[#064232] mb-3">{feature.title}</h3>
              <p className="text-[#064232]/70 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
