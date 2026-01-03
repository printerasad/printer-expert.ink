"use client"

import { Button } from "@/components/ui/button"
import { CheckCircle2, Printer } from "lucide-react"

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-secondary via-background to-secondary">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold animate-in fade-in slide-in-from-bottom-4 duration-700">
              ✨ Trusted by 10,000+ Customers
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-foreground text-balance leading-tight animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
              Expert Printer Support Services <span className="text-primary">24/7</span>
            </h1>

            <p className="text-lg text-muted-foreground text-pretty animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
              Professional HP printer setup, driver installation, network troubleshooting, and remote diagnostics. Get
              your printer working in minutes with our certified technicians.
            </p>

            <div className="space-y-3 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
                <span className="text-foreground">Fast response time - Average 5 minutes</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
                <span className="text-foreground">Certified printer technicians</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
                <span className="text-foreground">Support for all major brands</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-400">
              <Button
                size="lg"
                onClick={scrollToContact}
                className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 animate-pulse-glow"
              >
                Get Instant Support
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={scrollToContact}
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 bg-transparent"
              >
                Schedule a Call
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
              <div>
                <div className="text-3xl font-bold text-primary">98%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
              <div className="h-12 w-px bg-border"></div>
              <div>
                <div className="text-3xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Availability</div>
              </div>
              <div className="h-12 w-px bg-border"></div>
              <div>
                <div className="text-3xl font-bold text-primary">10K+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
            </div>
          </div>

          <div className="relative animate-in fade-in slide-in-from-right-8 duration-700 delay-300">
            <div className="relative bg-card rounded-2xl p-8 shadow-2xl border border-border">
              <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground rounded-full p-4 animate-float">
                <Printer className="h-8 w-8" />
              </div>

              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-secondary rounded-lg">
                  <span className="text-sm font-medium text-secondary-foreground">Setup Success</span>
                  <span className="text-2xl font-bold text-primary">98%</span>
                </div>

                <div className="space-y-3">
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full animate-in slide-in-from-left-full duration-1000 delay-700"
                      style={{ width: "95%" }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>HP Printers</span>
                    <span>95% faster setup</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full bg-accent rounded-full animate-in slide-in-from-left-full duration-1000 delay-800"
                      style={{ width: "92%" }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Network Issues</span>
                    <span>92% resolved remotely</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full animate-in slide-in-from-left-full duration-1000 delay-900"
                      style={{ width: "88%" }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Driver Installation</span>
                    <span>88% same-day fix</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
