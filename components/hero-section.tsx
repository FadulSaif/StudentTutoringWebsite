"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, GraduationCap, BookOpen, Users, PenTool, Award } from "lucide-react"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section className="relative py-20 lg:py-32 bg-[#FFF5F2] overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-0 w-96 h-96 bg-[#F5BABB]/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Content */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-6">
                <h1 className="text-5xl md:text-7xl font-bold text-[#064232] leading-tight">
                  Find Your Perfect{" "}
                  <span className="relative">
                    Tutor
                    <motion.div
                      className="absolute -bottom-3 left-0 right-0 h-4 bg-[#F5BABB]/40 rounded-full"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: 1, duration: 0.8 }}
                    />
                  </span>{" "}
                  in Malaysia
                </h1>

                <p className="text-xl md:text-2xl text-[#064232]/70 leading-relaxed max-w-2xl">
                  Affordable, personalized, and on-demand academic support — anytime, anywhere.
                </p>
              </div>

              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <Link href="/tutors">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      size="lg"
                      className="bg-[#568F87] hover:bg-[#568F87]/90 text-white px-10 py-6 text-xl rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      Find a Tutor
                      <ArrowRight className="ml-3 w-6 h-6" />
                    </Button>
                  </motion.div>
                </Link>
              </motion.div>

              <motion.div
                className="flex items-center gap-8 pt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-[#F5BABB]/20 rounded-full flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 text-[#568F87]" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#064232]">500+ Tutors</div>
                    <div className="text-sm text-[#064232]/60">Verified & Rated</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-[#F5BABB]/20 rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5 text-[#568F87]" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#064232]">For All learners</div>
                    <div className="text-sm text-[#064232]/60">Interactive • Engaging • Effective</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right side - Illustration */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <div className="relative w-full h-[500px] flex items-center justify-center">
                <div className="relative w-80 h-80 bg-white rounded-3xl shadow-2xl flex items-center justify-center overflow-hidden border border-[#F5BABB]/20">
                  <div className="text-center space-y-6">
                    <div className="flex items-center justify-center gap-4">
                      <div className="w-20 h-20 bg-[#568F87]/20 rounded-full flex items-center justify-center">
                        <GraduationCap className="w-10 h-10 text-[#568F87]" />
                      </div>
                      <div className="w-20 h-20 bg-[#F5BABB]/30 rounded-full flex items-center justify-center">
                        <BookOpen className="w-10 h-10 text-[#064232]" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-[#064232] font-semibold text-lg">Learning Made Easy</div>
                      <div className="text-[#064232]/60 text-sm">Connect • Learn • Succeed</div>
                    </div>
                  </div>
                </div>

                <motion.div
                  className="absolute top-12 left-12 w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg border border-[#F5BABB]/30"
                  animate={{ y: [-8, 8, -8], rotate: [0, 5, 0] }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                >
                  <BookOpen className="w-8 h-8 text-[#568F87]" />
                </motion.div>

                <motion.div
                  className="absolute top-20 right-8 w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-lg border border-[#568F87]/30"
                  animate={{ y: [8, -8, 8], rotate: [0, -5, 0] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
                >
                  <PenTool className="w-6 h-6 text-[#064232]" />
                </motion.div>

                <motion.div
                  className="absolute bottom-16 left-8 w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg border border-[#064232]/20"
                  animate={{ y: [-6, 6, -6] }}
                  transition={{ duration: 3.5, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
                >
                  <Award className="w-5 h-5 text-[#F5BABB]" />
                </motion.div>

                <motion.div
                  className="absolute bottom-8 right-16 w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-lg border border-[#F5BABB]/30"
                  animate={{ y: [6, -6, 6], rotate: [0, 3, 0] }}
                  transition={{ duration: 4.5, repeat: Number.POSITIVE_INFINITY, delay: 2 }}
                >
                  <Users className="w-6 h-6 text-[#568F87]" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
