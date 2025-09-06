import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calculator, Atom, Code, BookOpen, Microscope, TrendingUp } from "lucide-react"

export function SubjectsSection() {
  const subjects = [
    {
      icon: Calculator,
      name: "Mathematics",
      description: "Algebra, Calculus, Statistics, and more",
      tutorCount: "200+ tutors",
    },
    {
      icon: Atom,
      name: "Physics",
      description: "Classical mechanics, Quantum physics, Thermodynamics",
      tutorCount: "150+ tutors",
    },
    {
      icon: Code,
      name: "Computer Science",
      description: "Programming, Data structures, Algorithms",
      tutorCount: "180+ tutors",
    },
    {
      icon: BookOpen,
      name: "English",
      description: "Literature, Writing, Grammar, ESL",
      tutorCount: "120+ tutors",
    },
    {
      icon: Microscope,
      name: "Biology",
      description: "Cell biology, Genetics, Ecology, Anatomy",
      tutorCount: "100+ tutors",
    },
    {
      icon: TrendingUp,
      name: "Business",
      description: "Economics, Finance, Marketing, Management",
      tutorCount: "90+ tutors",
    },
  ]

  return (
    <section className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Popular Subjects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Explore our most in-demand subjects with expert tutors ready to help you succeed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {subjects.map((subject, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <subject.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground mb-2">{subject.name}</h3>
                    <p className="text-sm text-muted-foreground mb-3 text-pretty">{subject.description}</p>
                    <p className="text-xs text-primary font-medium">{subject.tutorCount}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link href="/subjects">
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-secondary bg-transparent"
            >
              View All Subjects
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
