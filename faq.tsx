"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What printer brands do you support?",
    answer:
      "We provide comprehensive printer support services for all major brands including HP, Canon, Epson, Brother, Dell, Lexmark, Samsung, and more. Our technicians are specially trained in HP printer support and HP printer setup, but we handle all printer brands with expertise.",
  },
  {
    question: "How long does HP printer setup take?",
    answer:
      "Most HP printer setup and driver installation tasks are completed within 15-30 minutes. Our average response time is just 5 minutes, and our certified technicians work efficiently to get your printer up and running quickly. Complex network printer troubleshooting may take slightly longer depending on the issue.",
  },
  {
    question: "Do you offer remote printer support services?",
    answer:
      "Yes! We specialize in remote diagnostics and maintenance. Our technicians can securely access your system remotely to diagnose issues, install drivers, configure printer settings, and resolve most printer problems without an on-site visit. This allows for faster service and immediate printer support.",
  },
  {
    question: "What if my network printer won't connect?",
    answer:
      "Network printer troubleshooting is one of our specialties. We diagnose connectivity issues with both wireless and wired network printers, resolve IP address conflicts, configure firewall settings, and ensure seamless printing across all your devices. Our success rate for network printer issues is over 92%.",
  },
  {
    question: "How much do your printer support services cost?",
    answer:
      "Our pricing is transparent and competitive. We offer various service packages based on your needs - from one-time printer setup to ongoing maintenance plans. Contact us for a free quote, and we'll provide a detailed estimate based on your specific printer support requirements.",
  },
  {
    question: "Is technical support available 24/7?",
    answer:
      "Yes! We understand printer issues don't follow business hours. Our printer support services are available 24/7, 365 days a year. Whether you need emergency HP printer support at midnight or weekend printer setup assistance, our team is ready to help.",
  },
  {
    question: "What is included in driver installation service?",
    answer:
      "Our driver installation service includes downloading and installing the latest manufacturer drivers, configuring printer settings for optimal performance, setting up print preferences, testing print quality, and ensuring compatibility with your operating system. We handle Windows, Mac, and Linux systems.",
  },
  {
    question: "Can you help with printer error messages?",
    answer:
      "Our technicians are experts at diagnosing and resolving all types of printer error messages - from paper jams and ink cartridge errors to offline status and driver conflicts. We provide clear explanations and permanent solutions for all printer support issues.",
  },
  {
    question: "Do you provide ongoing printer maintenance?",
    answer:
      "Yes, we offer ongoing remote diagnostics and maintenance plans. These include regular driver updates, performance optimization, preventive troubleshooting, and priority support. Our maintenance plans help prevent issues before they occur and extend your printer's lifespan.",
  },
  {
    question: "What if you can't fix my printer problem?",
    answer:
      "We have a 98% success rate and offer a 100% satisfaction guarantee. In the rare case we cannot resolve your issue remotely, we'll recommend alternative solutions or provide a full refund. Your satisfaction with our printer support services is our top priority.",
  },
]

export default function FAQ() {
  return (
    <section id="faq" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground text-balance">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            Get answers to common questions about our printer support services, HP printer setup, and troubleshooting.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card border border-border rounded-lg px-6 hover:border-primary transition-colors"
            >
              <AccordionTrigger className="text-left text-card-foreground hover:text-primary font-semibold">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
