import type React from "react"
import type { Metadata } from "next"
import { Inter as FontSans } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Analytics } from "@/components/analytics"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Access Web Limited | Accessible Web Development & UK Hosting",
  description:
    "Specializing in accessible web development, SaaS product development, and UK-based hosting services. WCAG AAA compliant websites for businesses and public sector organizations.",
  keywords: ["web development", "accessibility", "WCAG AAA", "SaaS development", "UK hosting", "accessible websites"],
  authors: [{ name: "Access Web Limited" }],
  creator: "Access Web Limited",
  publisher: "Access Web Limited",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="relative flex min-h-screen flex-col">
            <div className="w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
              <div className="container">
                <Header />
              </div>
            </div>
            <main className="flex-1 w-full">{children}</main>
            <div className="w-full border-t bg-background">
              <div className="container">
                <Footer />
              </div>
            </div>
          </div>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}

import "./globals.css"



import './globals.css'