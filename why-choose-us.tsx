"use client"

import { Award, Clock, Shield, Star, ThumbsUp, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

const features = [
  {
    icon: Clock,
    title: "Fast Response",
    description: "Average response time of 5 minutes. Get help when you need it most.",
  },
  {
    icon: Shield,
    title: "Certified Experts",
    description: "All technicians are certified and trained in printer support services.",
  },
  {
    icon: Star,
    title: "98% Success Rate",
    description: "Industry-leading success rate for HP printer support and setup.",
  },
  {
    icon: Zap,
    title: "Remote Support",
    description: "Quick remote diagnostics and fixes without leaving your home.",
  },
  {
    icon: Award,
    title: "All Brands Supported",
    description: "HP, Canon, Epson, Brother, Dell, and more printer brands.",
  },
  {
    icon: ThumbsUp,
    title: "Satisfaction Guaranteed",
    description: "100% satisfaction guarantee or your money back.",
  },
]

export default function WhyChooseUs() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-secondary via-background to-secondary">
      <div className="container mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground text-balance">
            Why Choose Printer-expert.ink?
          </h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            We're the trusted choice for printer support services. Here's why thousands of customers choose us.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="flex gap-4 p-6 bg-card rounded-xl border border-border hover:border-primary transition-all duration-300 hover:shadow-lg group"
              >
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <Icon className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-card-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            onClick={scrollToContact}
            className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8"
          >
            Start Your Printer Setup Now
          </Button>
        </div>
      </div>
    </section>
  )
}
