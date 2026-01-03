import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Printer-expert.ink | Professional Printer Support Services & HP Printer Setup",
  description:
    "Expert printer support services including HP printer setup, driver installation, network troubleshooting, and remote diagnostics. Get your printer working in minutes with our certified technicians.",
  keywords:
    "printer support services, hp printer support, hp printer setup, printer setup, printer troubleshooting, printer installation, network printer support",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "Printer-expert.ink | Professional Printer Support Services",
    description:
      "Expert printer support services including HP printer setup, driver installation, and remote diagnostics",
    type: "website",
  },
}

export const viewport = {
  themeColor: "#3b4296",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
