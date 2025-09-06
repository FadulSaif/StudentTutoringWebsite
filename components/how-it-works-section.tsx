"use client"

import { motion } from "framer-motion"
import { Search, CreditCard, Video } from "lucide-react"

export function HowItWorksSection() {
  const steps = [
    {
      icon: Search,
      title: "Search & Filter",
      description:
        "Browse through hundreds of verified tutors. Filter by subject, price range, availability, and student ratings.",
      step: "01",
    },
    {
      icon: CreditCard,
      title: "Book & Pay in RM",
      description:
        "Select your preferred time slot and pay securely in Malaysian Ringgit. No hidden fees, transparent pricing.",
      step: "02",
    },
    {
      icon: Video,
      title: "Join Your Session",
      description:
        "Connect via video call with interactive whiteboard, screen sharing, and real-time collaboration tools.",
      step: "03",
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
          <h2 className="text-3xl md:text-4xl font-bold text-[#064232] mb-4">How It Works</h2>
          <p className="text-lg text-[#064232]/70 max-w-2xl mx-auto">
            Getting started with personalized tutoring is simple and straightforward.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              className="flex flex-col md:flex-row items-center gap-8 mb-16 last:mb-0"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className={`flex-shrink-0 ${index % 2 === 1 ? "md:order-2" : ""}`}>
                <div className="relative">
                  <div className="w-24 h-24 bg-gradient-to-br from-[#568F87] to-[#064232] rounded-2xl flex items-center justify-center shadow-lg">
                    <step.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#F5BABB] rounded-full flex items-center justify-center text-sm font-bold text-[#064232]">
                    {step.step}
                  </div>
                </div>
              </div>

              <div className={`flex-1 text-center md:text-left ${index % 2 === 1 ? "md:order-1" : ""}`}>
                <h3 className="text-2xl font-bold text-[#064232] mb-4">{step.title}</h3>
                <p className="text-lg text-[#064232]/70 leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
