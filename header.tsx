"use client"

import { Printer } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-primary p-2 rounded-lg">
            <Printer className="h-6 w-6 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold text-primary">Printer-expert.ink</span>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <a href="#services" className="text-foreground hover:text-primary transition-colors">
            Services
          </a>
          <a href="#testimonials" className="text-foreground hover:text-primary transition-colors">
            Reviews
          </a>
          <a href="#faq" className="text-foreground hover:text-primary transition-colors">
            FAQ
          </a>
          <Button onClick={scrollToContact} className="bg-accent hover:bg-accent/90 text-accent-foreground">
            Get Support Now
          </Button>
        </nav>

        <Button onClick={scrollToContact} className="md:hidden bg-accent hover:bg-accent/90 text-accent-foreground">
          Contact Us
        </Button>
      </div>
    </header>
  )
}
