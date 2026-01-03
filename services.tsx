"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Printer, Settings, Wifi, Wrench } from "lucide-react"

const services = [
  {
    icon: Printer,
    title: "Printer Support",
    description:
      "Comprehensive printer support services for all major brands including HP, Canon, Epson, Brother, and more. Our expert technicians handle all printer-related issues quickly and efficiently.",
    keywords: "printer support services, technical support",
  },
  {
    icon: Settings,
    title: "Setup & Driver Installation",
    description:
      "Professional HP printer setup and driver installation services. We ensure your printer is configured correctly with the latest drivers for optimal performance and compatibility.",
    keywords: "hp printer setup, printer setup, driver installation",
  },
  {
    icon: Wifi,
    title: "Network Printer Troubleshooting",
    description:
      "Expert network printer troubleshooting to resolve connectivity issues. We diagnose and fix wireless and wired network printer problems, ensuring seamless printing across all devices.",
    keywords: "network troubleshooting, printer connectivity",
  },
  {
    icon: Wrench,
    title: "Remote Diagnostics & Maintenance",
    description:
      "Advanced remote diagnostics and maintenance services. Our technicians can remotely access your system to identify issues, perform updates, and optimize printer performance.",
    keywords: "remote support, printer maintenance",
  },
]

export default function Services() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="services" className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground text-balance">Our Printer Support Services</h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            Professional printer support services tailored to your needs. From HP printer setup to network
            troubleshooting, we've got you covered.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={index}
                className="border-border hover:border-primary transition-all duration-300 hover:shadow-lg group"
              >
                <CardHeader>
                  <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <Icon className="h-7 w-7 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl text-card-foreground">{service.title}</CardTitle>
                  <CardDescription className="text-sm text-muted-foreground pt-2">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    onClick={scrollToContact}
                    variant="outline"
                    className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                  >
                    Get Help Now
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
