"use client"

import type React from "react"
import { useState } from "react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, Clock } from "lucide-react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    printerBrand: "",
    issue: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  // ✅ FIXED SUBMIT HANDLER
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const res = await fetch(
        "https://script.google.com/macros/s/AKfycbwm5AopZ0fEO871O8Yr9XdE22V-o51jgWFaqOkTlm9-sDjov2--YnAgzm6l1lcB6DXhug/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            printerCompany: formData.printerBrand,
            issue: formData.issue,
          }),
        }
      )

      if (!res.ok) {
        throw new Error("Form submission failed")
      }

      setSubmitted(true)
      setFormData({
        name: "",
        email: "",
        phone: "",
        printerBrand: "",
        issue: "",
      })
    } catch (error) {
      console.error(error)
      alert("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-br from-secondary via-background to-secondary">
      <div className="container mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Get Expert Printer Support Now
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Fill out the form below or contact us directly. Our certified technicians are ready to help.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Request Printer Support</CardTitle>
                <CardDescription>
                  Tell us about your printer issue and we'll get back to you immediately
                </CardDescription>
              </CardHeader>

              <CardContent>
                {submitted ? (
                  <div className="py-12 text-center space-y-4">
                    <h3 className="text-xl font-semibold">Thank You!</h3>
                    <p className="text-muted-foreground">
                      We've received your request. Our technician will contact you shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="printerBrand">Printer Brand</Label>
                        <Input
                          id="printerBrand"
                          name="printerBrand"
                          value={formData.printerBrand}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="issue">Issue *</Label>
                      <Textarea
                        id="issue"
                        name="issue"
                        rows={5}
                        value={formData.issue}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? "Submitting..." : "Get Instant Support"}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-3">
                  <Phone className="h-5 w-5" />
                  <span>+1 (855) 756 3928</span>
                </div>
                <div className="flex gap-3">
                  <Mail className="h-5 w-5" />
                  <span>support@printer-expert.ink</span>
                </div>
                <div className="flex gap-3">
                  <Clock className="h-5 w-5" />
                  <span>24/7 Support</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
