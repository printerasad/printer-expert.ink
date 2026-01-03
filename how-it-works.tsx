"use client"

import { Button } from "@/components/ui/button"
import { PhoneCall, Search, CheckCircle2, Smile } from "lucide-react"

const steps = [
  {
    icon: PhoneCall,
    title: "Contact Us",
    description: "Fill out our quick form or call us directly. Tell us about your printer issue.",
  },
  {
    icon: Search,
    title: "Diagnosis",
    description: "Our certified technician will diagnose your printer problem remotely or guide you through it.",
  },
  {
    icon: CheckCircle2,
    title: "Fix & Setup",
    description: "We resolve the issue, install drivers, and ensure your HP printer setup is complete.",
  },
  {
    icon: Smile,
    title: "Start Printing",
    description: "Your printer is ready! We follow up to ensure everything works perfectly.",
  },
]

export default function HowItWorks() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground text-balance">How It Works</h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            Getting printer support services has never been easier. Follow these simple steps.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="relative">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="relative">
                    <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center">
                      <Icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <div className="absolute -top-2 -right-2 bg-accent text-accent-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </div>
                  </div>

                  <h3 className="font-semibold text-xl text-foreground">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>

                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-border">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-4 border-t-transparent border-b-4 border-b-transparent border-l-8 border-l-border"></div>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            onClick={scrollToContact}
            className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8"
          >
            Get Started Now
          </Button>
        </div>
      </div>
    </section>
  )
}
