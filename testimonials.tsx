"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Small Business Owner",
    content:
      "The HP printer setup was incredibly fast! They had my network printer working within 15 minutes. Best printer support services I've ever used.",
    rating: 5,
    initials: "SJ",
  },
  {
    name: "Michael Chen",
    role: "Home Office",
    content:
      "I was struggling with driver installation for days. Their remote diagnostics team fixed everything in one session. Highly recommend their printer support services!",
    rating: 5,
    initials: "MC",
  },
  {
    name: "Emily Rodriguez",
    role: "Freelance Designer",
    content:
      "Amazing service! My HP printer wasn't connecting to WiFi. They solved it remotely and even optimized my print settings. Worth every penny.",
    rating: 5,
    initials: "ER",
  },
  {
    name: "David Thompson",
    role: "IT Manager",
    content:
      "We needed printer setup for our entire office. The technicians were professional, fast, and thorough. Our network printers have never worked better!",
    rating: 5,
    initials: "DT",
  },
  {
    name: "Lisa Anderson",
    role: "Teacher",
    content:
      "As someone who's not tech-savvy, I appreciated their patience and clear instructions. They made HP printer support so easy to understand.",
    rating: 5,
    initials: "LA",
  },
  {
    name: "James Wilson",
    role: "Entrepreneur",
    content:
      "Quick response, professional service, and permanent fixes. No more recurring printer issues. Their printer troubleshooting expertise is unmatched!",
    rating: 5,
    initials: "JW",
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-4 bg-gradient-to-br from-secondary via-background to-secondary">
      <div className="container mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground text-balance">What Our Customers Say</h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            Don't just take our word for it. See why thousands trust us for their printer support needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border-border hover:border-primary transition-all duration-300 hover:shadow-lg"
            >
              <CardContent className="pt-6">
                <div className="flex items-center gap-4 mb-4">
                  <Avatar className="h-12 w-12 bg-primary text-primary-foreground">
                    <AvatarFallback>{testimonial.initials}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-card-foreground">{testimonial.name}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>

                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">"{testimonial.content}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
