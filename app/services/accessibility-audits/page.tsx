import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, ArrowRight, Shield, Users, Eye, FileSearch } from "lucide-react"

export const metadata = {
  title: "Accessibility Audits | Access Web Limited",
  description: "Comprehensive WCAG AA compliance audits and implementation services for websites and applications.",
}

export default function AccessibilityAuditsPage() {
  return (
    <div className="container py-12 md:py-24 lg:py-32">
      <div className="flex flex-col gap-12">
        {/* Hero Section */}
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Accessibility Audits</div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Make Your Website Accessible to Everyone
            </h1>
            <p className="text-muted-foreground md:text-xl">
              Our comprehensive accessibility audits ensure your website meets WCAG AA standards, making it accessible
              to all users regardless of their abilities.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
              <Button asChild size="lg">
                <Link href="/contact">Request an Audit</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="https://images.unsplash.com/photo-1551650975-87deedd944c3"
              width={600}
              height={400}
              alt="Person using assistive technology to access a website, demonstrating web accessibility in action"
              className="rounded-lg object-cover"
              priority
            />
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Why Choose Our Audit Service?</h2>
            <p className="text-muted-foreground md:text-xl mx-auto max-w-[800px]">
              Our accessibility audits go beyond basic compliance checks to ensure your website is truly accessible to
              all users.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader>
                <Shield className="h-10 w-10 text-primary mb-2" />
                <CardTitle>WCAG AAA Expertise</CardTitle>
                <CardContent className="px-0">
                  <p className="text-muted-foreground">
                    In-depth knowledge of WCAG guidelines and best practices for maximum accessibility.
                  </p>
                </CardContent>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Users className="h-10 w-10 text-primary mb-2" />
                <CardTitle>User Testing</CardTitle>
                <CardContent className="px-0">
                  <p className="text-muted-foreground">
                    Real-world testing with users who have different abilities and accessibility needs.
                  </p>
                </CardContent>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Eye className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Detailed Reports</CardTitle>
                <CardContent className="px-0">
                  <p className="text-muted-foreground">
                    Comprehensive reports with clear recommendations and implementation guidance.
                  </p>
                </CardContent>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <FileSearch className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Ongoing Support</CardTitle>
                <CardContent className="px-0">
                  <p className="text-muted-foreground">
                    Continuous support and monitoring to maintain accessibility standards.
                  </p>
                </CardContent>
              </CardHeader>
            </Card>
          </div>
        </div>

        {/* Audit Process Section */}
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Audit Process</h2>
            <p className="text-muted-foreground md:text-xl mx-auto max-w-[800px]">
              A thorough approach to identifying and resolving accessibility issues in your website or application.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Initial Assessment</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Automated accessibility testing</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Manual code review</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Content structure analysis</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Color contrast checking</span>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Detailed Testing</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Screen reader compatibility</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Keyboard navigation testing</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>User interface patterns</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Interactive elements review</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Compliance Standards Section */}
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Compliance Standards</h2>
            <p className="text-muted-foreground md:text-xl mx-auto max-w-[800px]">
              We ensure your website meets the highest accessibility standards and legal requirements.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>WCAG 2.1 AA</CardTitle>
                <CardContent className="px-0">
                  <p className="text-muted-foreground">
                    Meeting the recommended level of web content accessibility guidelines.
                  </p>
                </CardContent>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Section 508</CardTitle>
                <CardContent className="px-0">
                  <p className="text-muted-foreground">Compliance with US federal accessibility requirements.</p>
                </CardContent>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>EN 301 549</CardTitle>
                <CardContent className="px-0">
                  <p className="text-muted-foreground">
                    European accessibility requirements for ICT products and services.
                  </p>
                </CardContent>
              </CardHeader>
            </Card>
          </div>
        </div>

        {/* Deliverables Section */}
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">What You'll Receive</h2>
            <p className="text-muted-foreground md:text-xl mx-auto max-w-[800px]">
              Comprehensive documentation and support to help you achieve and maintain accessibility compliance.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Detailed Audit Report</h3>
              <p className="text-muted-foreground">
                Comprehensive analysis of accessibility issues with prioritized recommendations.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Implementation Guide</h3>
              <p className="text-muted-foreground">Step-by-step instructions for implementing recommended changes.</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Training Materials</h3>
              <p className="text-muted-foreground">Resources to help your team maintain accessibility standards.</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Compliance Documentation</h3>
              <p className="text-muted-foreground">
                Official documentation of your website's accessibility compliance.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Follow-up Support</h3>
              <p className="text-muted-foreground">Ongoing assistance to ensure successful implementation.</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Regular Updates</h3>
              <p className="text-muted-foreground">Periodic reviews to maintain compliance with evolving standards.</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="rounded-lg bg-muted p-8 md:p-10">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Ready to Make Your Website Accessible?
              </h2>
              <p className="text-muted-foreground md:text-xl mx-auto max-w-[600px]">
                Get started with a comprehensive accessibility audit and make your website accessible to everyone.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg">
                <Link href="/contact">Request an Audit</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/portfolio">
                  View Case Studies <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

