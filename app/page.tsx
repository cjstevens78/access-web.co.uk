import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, ArrowRight, Code, Shield, Globe, Zap, Bot, Search } from "lucide-react"

export default function Home() {
  return (
    <div id="main-content">
      <div className="container">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none gradient-heading">
                    Accessible Web Development & UK Hosting
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    We build WCAG AA compliant websites and SaaS products with a focus on accessibility, performance,
                    and user experience.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg">
                    <Link href="/contact">Send us your proposal</Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link href="/services">Explore our services</Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
                  width={550}
                  height={550}
                  alt="Modern web development workspace with accessibility considerations, showing a clean desk setup with multiple screens displaying code and design tools"
                  className="rounded-lg object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Services</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We offer a range of services to help businesses and public sector organizations create accessible and
                  performant web experiences.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-7xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader className="pb-2">
                  <Code className="h-12 w-12 text-primary mb-2" />
                  <CardTitle>SaaS Development</CardTitle>
                  <CardDescription>Rapid product development for your SaaS ideas</CardDescription>
                </CardHeader>
                <CardContent className="pb-2">
                  <p className="text-sm text-muted-foreground">
                    We build custom SaaS products using modern technologies and best practices.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link
                    href="/services/saas-development"
                    className="text-sm font-medium text-primary flex items-center gap-1 hover:underline"
                  >
                    Learn more <ArrowRight className="h-4 w-4" />
                  </Link>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <Shield className="h-12 w-12 text-primary mb-2" />
                  <CardTitle>Accessibility Audits</CardTitle>
                  <CardDescription>WCAG AA compliance for your website</CardDescription>
                </CardHeader>
                <CardContent className="pb-2">
                  <p className="text-sm text-muted-foreground">
                    We audit your website for accessibility issues and provide recommendations for improvement.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link
                    href="/services/accessibility-audits"
                    className="text-sm font-medium text-primary flex items-center gap-1 hover:underline"
                  >
                    Learn more <ArrowRight className="h-4 w-4" />
                  </Link>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <Zap className="h-12 w-12 text-primary mb-2" />
                  <CardTitle>Web Development</CardTitle>
                  <CardDescription>Custom websites built with modern technologies</CardDescription>
                </CardHeader>
                <CardContent className="pb-2">
                  <p className="text-sm text-muted-foreground">
                    We build custom websites that are fast, accessible, and easy to maintain.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link
                    href="/services/web-development"
                    className="text-sm font-medium text-primary flex items-center gap-1 hover:underline"
                  >
                    Learn more <ArrowRight className="h-4 w-4" />
                  </Link>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <Globe className="h-12 w-12 text-primary mb-2" />
                  <CardTitle>Web Hosting</CardTitle>
                  <CardDescription>UK-based hosting with excellent support</CardDescription>
                </CardHeader>
                <CardContent className="pb-2">
                  <p className="text-sm text-muted-foreground">
                    We provide reliable UK-based hosting with 24/7 support and regular backups.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link
                    href="/services/web-hosting"
                    className="text-sm font-medium text-primary flex items-center gap-1 hover:underline"
                  >
                    Learn more <ArrowRight className="h-4 w-4" />
                  </Link>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <Bot className="h-12 w-12 text-primary mb-2" />
                  <CardTitle>AI Integration</CardTitle>
                  <CardDescription>Enhance your applications with AI capabilities</CardDescription>
                </CardHeader>
                <CardContent className="pb-2">
                  <p className="text-sm text-muted-foreground">
                    Integrate chatbots, search assistants, and other AI features into your applications.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link
                    href="/services/ai-integration"
                    className="text-sm font-medium text-primary flex items-center gap-1 hover:underline"
                  >
                    Learn more <ArrowRight className="h-4 w-4" />
                  </Link>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <Search className="h-12 w-12 text-primary mb-2" />
                  <CardTitle>SEO Services</CardTitle>
                  <CardDescription>Improve your search engine rankings</CardDescription>
                </CardHeader>
                <CardContent className="pb-2">
                  <p className="text-sm text-muted-foreground">
                    Boost your online visibility with our comprehensive SEO services.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link
                    href="/services/seo"
                    className="text-sm font-medium text-primary flex items-center gap-1 hover:underline"
                  >
                    Learn more <ArrowRight className="h-4 w-4" />
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 px-10 md:gap-16 lg:grid-cols-2">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Why Choose Us</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Accessible web development for everyone
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                  We believe that the web should be accessible to everyone, regardless of ability or disability. That's
                  why we build all our websites to WCAG AAA standards.
                </p>
                <ul className="grid gap-2 py-4">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>WCAG AA compliant websites</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>UK-based hosting and support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Experienced team of developers</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Fast and reliable websites</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Ongoing support and maintenance</span>
                  </li>
                </ul>
                <Button asChild>
                  <Link href="/about">Learn more about us</Link>
                </Button>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
                  width={550}
                  height={550}
                  alt="Team collaboration on web accessibility features, showing developers working together on inclusive design solutions"
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Case Studies</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Take a look at some of our recent projects and see how we've helped our clients achieve their goals.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-7xl items-stretch gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <Card className="flex flex-col">
                <CardHeader className="pb-2 flex-grow">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    width={400}
                    height={200}
                    alt="Walgreens Boots project thumbnail showing their digital healthcare platform"
                    className="rounded-lg object-cover w-full h-48"
                  />
                  <CardTitle className="mt-4">Walgreens Boots</CardTitle>
                  <CardDescription>Digital healthcare platform development</CardDescription>
                </CardHeader>
                <CardContent className="pb-2">
                  <p className="text-sm text-muted-foreground">
                    We developed a comprehensive digital healthcare platform, improving access to healthcare services
                    for millions of users.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link
                    href="/portfolio/walgreens-boots"
                    className="text-sm font-medium text-primary flex items-center gap-1 hover:underline"
                  >
                    View case study <ArrowRight className="h-4 w-4" />
                  </Link>
                </CardFooter>
              </Card>
              <Card className="flex flex-col">
                <CardHeader className="pb-2 flex-grow">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    width={400}
                    height={200}
                    alt="Equine Jobs project thumbnail showing their job board platform"
                    className="rounded-lg object-cover w-full h-48"
                  />
                  <CardTitle className="mt-4">Equine Jobs</CardTitle>
                  <CardDescription>Specialized job board for the equestrian industry</CardDescription>
                </CardHeader>
                <CardContent className="pb-2">
                  <p className="text-sm text-muted-foreground">
                    A custom job board platform connecting employers with qualified professionals in the equestrian
                    sector.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link
                    href="/portfolio/equine-jobs"
                    className="text-sm font-medium text-primary flex items-center gap-1 hover:underline"
                  >
                    View case study <ArrowRight className="h-4 w-4" />
                  </Link>
                </CardFooter>
              </Card>
              <Card className="flex flex-col">
                <CardHeader className="pb-2 flex-grow">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    width={400}
                    height={200}
                    alt="Rural Dreams project thumbnail showing their property listing platform"
                    className="rounded-lg object-cover w-full h-48"
                  />
                  <CardTitle className="mt-4">Rural Dreams</CardTitle>
                  <CardDescription>Rural property marketplace platform</CardDescription>
                </CardHeader>
                <CardContent className="pb-2">
                  <p className="text-sm text-muted-foreground">
                    A specialized property marketplace focusing on rural and agricultural properties, with advanced
                    search and filtering.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link
                    href="/portfolio/rural-dreams"
                    className="text-sm font-medium text-primary flex items-center gap-1 hover:underline"
                  >
                    View case study <ArrowRight className="h-4 w-4" />
                  </Link>
                </CardFooter>
              </Card>
              <Card className="flex flex-col">
                <CardHeader className="pb-2 flex-grow">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    width={400}
                    height={200}
                    alt="Fix Build Limited project thumbnail showing a completed home extension"
                    className="rounded-lg object-cover w-full h-48"
                  />
                  <CardTitle className="mt-4">Fix Build Limited</CardTitle>
                  <CardDescription>Property development company website with project showcase</CardDescription>
                </CardHeader>
                <CardContent className="pb-2">
                  <p className="text-sm text-muted-foreground">
                    We created a modern, accessible website to showcase their home extension and garage conversion
                    projects, helping them attract more clients.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link
                    href="/portfolio/fix-build-limited"
                    className="text-sm font-medium text-primary flex items-center gap-1 hover:underline"
                  >
                    View case study <ArrowRight className="h-4 w-4" />
                  </Link>
                </CardFooter>
              </Card>
              <Card className="flex flex-col">
                <CardHeader className="pb-2 flex-grow">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    width={400}
                    height={200}
                    alt="Stevens Homes Group project thumbnail"
                    className="rounded-lg object-cover w-full h-48"
                  />
                  <CardTitle className="mt-4">Stevens Homes Group</CardTitle>
                  <CardDescription>Property development company website</CardDescription>
                </CardHeader>
                <CardContent className="pb-2">
                  <p className="text-sm text-muted-foreground">
                    A modern website for a property development company, featuring interactive property listings and
                    virtual tours.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link
                    href="/portfolio/stevens-homes-group"
                    className="text-sm font-medium text-primary flex items-center gap-1 hover:underline"
                  >
                    View case study <ArrowRight className="h-4 w-4" />
                  </Link>
                </CardFooter>
              </Card>
              <Card className="flex flex-col">
                <CardHeader className="pb-2 flex-grow">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    width={400}
                    height={200}
                    alt="UK Aerials project thumbnail"
                    className="rounded-lg object-cover w-full h-48"
                  />
                  <CardTitle className="mt-4">UK Aerials</CardTitle>
                  <CardDescription>Aerial installation company website</CardDescription>
                </CardHeader>
                <CardContent className="pb-2">
                  <p className="text-sm text-muted-foreground">
                    A user-friendly website for an aerial installation company, featuring online booking and service
                    area mapping.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link
                    href="/portfolio/uk-aerials"
                    className="text-sm font-medium text-primary flex items-center gap-1 hover:underline"
                  >
                    View case study <ArrowRight className="h-4 w-4" />
                  </Link>
                </CardFooter>
              </Card>
            </div>
            <div className="flex justify-center">
              <Button variant="outline" asChild>
                <Link href="/portfolio">View all case studies</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to get started?</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Send us your proposal and we'll get back to you within 24 hours.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg">
                  <Link href="/contact">Send us your proposal</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/services/web-hosting">Sign up for web hosting</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

