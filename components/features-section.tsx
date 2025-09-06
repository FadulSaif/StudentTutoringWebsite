import { Card, CardContent } from "@/components/ui/card"
import { Banknote, Clock, User } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: Banknote,
      title: "Affordable",
      description:
        "Quality tutoring at competitive rates. Find tutors that fit your budget without compromising on quality.",
    },
    {
      icon: Clock,
      title: "On-Demand",
      description: "Book sessions when you need them. Flexible scheduling that works around your busy lifestyle.",
    },
    {
      icon: User,
      title: "Personalized",
      description: "One-on-one attention tailored to your learning style. Get the individual support you deserve.",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Why Choose X-Tutor?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            We make learning accessible, flexible, and effective for students of all levels.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">{feature.title}</h3>
                <p className="text-muted-foreground text-pretty">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
