import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, ArrowRight, Code, Zap, Layout, Palette } from "lucide-react"

export const metadata = {
  title: "Web Development Services | Access Web Limited",
  description:
    "Custom web development services using modern technologies and best practices. From simple websites to complex web applications.",
}

export default function WebDevelopmentPage() {
  return (
    <div className="container py-12 md:py-24 lg:py-32">
      <div className="flex flex-col gap-12">
        {/* Hero Section */}
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Web Development</div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Custom Web Development for Modern Businesses
            </h1>
            <p className="text-muted-foreground md:text-xl">
              We build fast, accessible, and user-friendly websites that help businesses succeed in the digital world.
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
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
              width={600}
              height={400}
              alt="Modern web development environment showing multiple screens with code, design tools, and development frameworks"
              className="rounded-lg object-cover"
              priority
            />
          </div>
        </div>

        {/* Services Section */}
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Web Development Services</h2>
            <p className="text-muted-foreground md:text-xl mx-auto max-w-[800px]">
              Comprehensive web development solutions tailored to your business needs.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <Layout className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Custom Websites</CardTitle>
                <CardContent className="px-0">
                  <p className="text-muted-foreground">
                    Bespoke websites designed and built to meet your specific business requirements.
                  </p>
                </CardContent>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Code className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Web Applications</CardTitle>
                <CardContent className="px-0">
                  <p className="text-muted-foreground">
                    Complex web applications with rich functionality and seamless user experience.
                  </p>
                </CardContent>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Palette className="h-10 w-10 text-primary mb-2" />
                <CardTitle>E-commerce Solutions</CardTitle>
                <CardContent className="px-0">
                  <p className="text-muted-foreground">
                    Online stores with secure payment processing and inventory management.
                  </p>
                </CardContent>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Zap className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Performance Optimization</CardTitle>
                <CardContent className="px-0">
                  <p className="text-muted-foreground">
                    Speed optimization and performance tuning for faster loading times.
                  </p>
                </CardContent>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Code className="h-10 w-10 text-primary mb-2" />
                <CardTitle>CMS Development</CardTitle>
                <CardContent className="px-0">
                  <p className="text-muted-foreground">Custom content management systems for easy website updates.</p>
                </CardContent>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Layout className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Website Maintenance</CardTitle>
                <CardContent className="px-0">
                  <p className="text-muted-foreground">
                    Regular updates and maintenance to keep your website secure and up-to-date.
                  </p>
                </CardContent>
              </CardHeader>
            </Card>
          </div>
        </div>

        {/* Technologies Section */}
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Modern Technology Stack</h2>
            <p className="text-muted-foreground md:text-xl mx-auto max-w-[800px]">
              We use the latest technologies and frameworks to build fast, reliable websites.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Frontend Development</CardTitle>
                <CardContent className="px-0">
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>Next.js for modern web applications</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>React for interactive interfaces</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>Tailwind CSS for responsive design</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>TypeScript for type-safe code</span>
                    </li>
                  </ul>
                </CardContent>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Backend Development</CardTitle>
                <CardContent className="px-0">
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>Node.js for server-side applications</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>PostgreSQL for reliable data storage</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>API development and integration</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>Cloud infrastructure and deployment</span>
                    </li>
                  </ul>
                </CardContent>
              </CardHeader>
            </Card>
          </div>
        </div>

        {/* Development Process Section */}
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Development Process</h2>
            <p className="text-muted-foreground md:text-xl mx-auto max-w-[800px]">
              A structured approach to delivering high-quality web projects on time and within budget.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">01</div>
              <h3 className="text-xl font-bold">Planning</h3>
              <p className="text-muted-foreground">
                Understanding your requirements and creating a detailed project plan.
              </p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">02</div>
              <h3 className="text-xl font-bold">Design</h3>
              <p className="text-muted-foreground">Creating wireframes and visual designs for your approval.</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">03</div>
              <h3 className="text-xl font-bold">Development</h3>
              <p className="text-muted-foreground">
                Building your website using modern technologies and best practices.
              </p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">04</div>
              <h3 className="text-xl font-bold">Launch</h3>
              <p className="text-muted-foreground">Testing, deployment, and ongoing support for your website.</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="rounded-lg bg-muted p-8 md:p-10">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to Start Your Web Project?</h2>
              <p className="text-muted-foreground md:text-xl mx-auto max-w-[600px]">
                Let's discuss your project and create a website that helps your business grow.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg">
                <Link href="/contact">Start Your Project</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/portfolio">
                  View Our Work <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

