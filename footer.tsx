export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Printer-expert.ink</h3>
            <p className="text-sm opacity-90 leading-relaxed">
              Professional printer support services available 24/7. Expert HP printer setup, driver installation, and
              network troubleshooting.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li>
                <a href="#services" className="hover:opacity-100 transition-opacity">
                  Printer Support
                </a>
              </li>
              <li>
                <a href="#services" className="hover:opacity-100 transition-opacity">
                  HP Printer Setup
                </a>
              </li>
              <li>
                <a href="#services" className="hover:opacity-100 transition-opacity">
                  Driver Installation
                </a>
              </li>
              <li>
                <a href="#services" className="hover:opacity-100 transition-opacity">
                  Network Troubleshooting
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li>
                <a href="#services" className="hover:opacity-100 transition-opacity">
                  Services
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:opacity-100 transition-opacity">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:opacity-100 transition-opacity">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:opacity-100 transition-opacity">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li>Phone: +1 (855) 756 3928</li>
              <li>Email: support@printer-expert.ink</li>
              <li>Available: 24/7</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm opacity-90">
          <p>
            © 2025 Printer-expert.ink. All rights reserved. | Professional Printer Support Services | HP Printer Setup |
            Printer Troubleshooting
          </p>
        </div>
      </div>
    </footer>
  )
}
