"use client";

import Hero from "@/components/hero";
import Services from "@/components/services";
import WhyChooseUs from "@/components/why-choose-us";
import HowItWorks from "@/components/how-it-works";
import Testimonials from "@/components/testimonials";
import FAQ from "@/components/faq";
import ContactForm from "@/components/contact-form";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <WhyChooseUs />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <ContactForm />
      <Footer />
    </main>
  );
}
