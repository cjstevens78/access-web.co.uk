import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, ArrowRight, Code, Zap, Shield, Cloud } from "lucide-react"

export const metadata = {
  title: "SaaS Development Services | Access Web Limited",
  description:
    "Custom SaaS product development services using modern technologies. From MVP to enterprise-scale solutions.",
}

export default function SaaSDevelopmentPage() {
  return (
    <div className="container py-12 md:py-24 lg:py-32">
      <div className="flex flex-col gap-12">
        {/* Hero Section */}
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">SaaS Development</div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Transform Your Ideas into Powerful SaaS Products
            </h1>
            <p className="text-muted-foreground md:text-xl">
              We specialize in building scalable, secure, and user-friendly SaaS applications that help businesses grow
              and succeed in the digital age.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
              <Button asChild size="lg">
                <Link href="/contact">Start Your Project</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
              width={600}
              height={400}
              alt="Modern software architecture visualization showing cloud infrastructure and microservices"
              className="rounded-lg object-cover"
              priority
            />
          </div>
        </div>

        {/* Features Section */}
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Everything You Need to Succeed</h2>
            <p className="text-muted-foreground md:text-xl mx-auto max-w-[800px]">
              Our comprehensive SaaS development services cover every aspect of your product journey, from initial
              concept to ongoing maintenance and growth.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <Code className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Custom Development</CardTitle>
                <CardContent className="px-0">
                  <p className="text-muted-foreground">
                    Tailored solutions built with modern technologies and best practices, ensuring scalability and
                    performance.
                  </p>
                </CardContent>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Shield className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Security First</CardTitle>
                <CardContent className="px-0">
                  <p className="text-muted-foreground">
                    Enterprise-grade security measures and compliance standards to protect your data and users.
                  </p>
                </CardContent>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Zap className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Rapid Development</CardTitle>
                <CardContent className="px-0">
                  <p className="text-muted-foreground">
                    Agile methodology and modern tools to bring your product to market quickly without compromising
                    quality.
                  </p>
                </CardContent>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Cloud className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Cloud Infrastructure</CardTitle>
                <CardContent className="px-0">
                  <p className="text-muted-foreground">
                    Scalable cloud solutions that grow with your business, ensuring reliability and performance.
                  </p>
                </CardContent>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Code className="h-10 w-10 text-primary mb-2" />
                <CardTitle>API Development</CardTitle>
                <CardContent className="px-0">
                  <p className="text-muted-foreground">
                    Robust API design and development for seamless integration with other services and platforms.
                  </p>
                </CardContent>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Shield className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Ongoing Support</CardTitle>
                <CardContent className="px-0">
                  <p className="text-muted-foreground">
                    Comprehensive maintenance and support to ensure your SaaS product runs smoothly and stays
                    up-to-date.
                  </p>
                </CardContent>
              </CardHeader>
            </Card>
          </div>
        </div>

        {/* Process Section */}
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Development Process</h2>
            <p className="text-muted-foreground md:text-xl mx-auto max-w-[800px]">
              A structured approach to turning your vision into reality, ensuring quality and success at every step.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">01</div>
              <h3 className="text-xl font-bold">Discovery & Planning</h3>
              <p className="text-muted-foreground">
                Understanding your vision, requirements, and business goals to create a comprehensive development plan.
              </p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">02</div>
              <h3 className="text-xl font-bold">Design & Architecture</h3>
              <p className="text-muted-foreground">
                Creating intuitive user experiences and robust technical architecture to support your product.
              </p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">03</div>
              <h3 className="text-xl font-bold">Development & Testing</h3>
              <p className="text-muted-foreground">
                Agile development with continuous testing and feedback to ensure quality and functionality.
              </p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">04</div>
              <h3 className="text-xl font-bold">Launch & Support</h3>
              <p className="text-muted-foreground">
                Smooth deployment and ongoing support to help your product grow and succeed.
              </p>
            </div>
          </div>
        </div>

        {/* Technologies Section */}
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Modern Technology Stack</h2>
            <p className="text-muted-foreground md:text-xl mx-auto max-w-[800px]">
              We use the latest technologies and frameworks to build robust, scalable SaaS applications.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Frontend Technologies</CardTitle>
                <CardContent className="px-0">
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>React & Next.js for modern web applications</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>TypeScript for type-safe code</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>Tailwind CSS for responsive design</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>Progressive Web Apps (PWA) support</span>
                    </li>
                  </ul>
                </CardContent>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Backend Technologies</CardTitle>
                <CardContent className="px-0">
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>Node.js & Express for API development</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>PostgreSQL & MongoDB databases</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>GraphQL for efficient data fetching</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>Redis for caching and performance</span>
                    </li>
                  </ul>
                </CardContent>
              </CardHeader>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="rounded-lg bg-muted p-8 md:p-10">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to Build Your SaaS Product?</h2>
              <p className="text-muted-foreground md:text-xl mx-auto max-w-[600px]">
                Let's discuss your project and create a roadmap to success. Our team is ready to help you bring your
                vision to life.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg">
                <Link href="/contact">Schedule a Consultation</Link>
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

