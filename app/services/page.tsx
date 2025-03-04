import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Shield, Globe, Zap, Bot, Search } from "lucide-react"

export const metadata = {
  title: "Services | Access Web Limited",
  description: "Our services include SaaS development, accessibility audits, web development, and UK-based hosting.",
}

export default function ServicesPage() {
  return (
    <div className="container py-12 md:py-24 lg:py-32">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Services</h1>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            We offer a range of services to help businesses and public sector organizations create accessible and
            performant web experiences.
          </p>
        </div>
      </div>

      <div className="grid gap-10 py-10 md:gap-16">
        {/* SaaS Development */}
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">SaaS Development</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Rapid SaaS Product Development</h2>
            <p className="text-muted-foreground md:text-xl">
              We build custom SaaS products using modern technologies and best practices, helping you bring your ideas
              to market quickly.
            </p>
            <ul className="grid gap-2 py-4">
              <li className="flex items-center gap-2">
                <Code className="h-5 w-5 text-primary" />
                <span>Custom SaaS product development</span>
              </li>
              <li className="flex items-center gap-2">
                <Code className="h-5 w-5 text-primary" />
                <span>API development and integration</span>
              </li>
              <li className="flex items-center gap-2">
                <Code className="h-5 w-5 text-primary" />
                <span>Database design and optimization</span>
              </li>
              <li className="flex items-center gap-2">
                <Code className="h-5 w-5 text-primary" />
                <span>User authentication and authorization</span>
              </li>
              <li className="flex items-center gap-2">
                <Code className="h-5 w-5 text-primary" />
                <span>Subscription and payment processing</span>
              </li>
            </ul>
            <Button asChild>
              <Link href="/services/saas-development">
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/placeholder.svg?height=400&width=600"
              width={600}
              height={400}
              alt="SaaS Development"
              className="rounded-lg object-cover"
            />
          </div>
        </div>

        {/* Accessibility Audits */}
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex items-center justify-center lg:order-last">
            <Image
              src="/placeholder.svg?height=400&width=600"
              width={600}
              height={400}
              alt="Accessibility Audits"
              className="rounded-lg object-cover"
            />
          </div>
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Accessibility Audits</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">WCAG AAA Compliance</h2>
            <p className="text-muted-foreground md:text-xl">
              We audit your website for accessibility issues and provide recommendations for improvement, ensuring WCAG
              AAA compliance.
            </p>
            <ul className="grid gap-2 py-4">
              <li className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                <span>Comprehensive accessibility audits</span>
              </li>
              <li className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                <span>WCAG 2.1 AAA compliance testing</span>
              </li>
              <li className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                <span>Screen reader compatibility testing</span>
              </li>
              <li className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                <span>Keyboard navigation testing</span>
              </li>
              <li className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                <span>Color contrast and readability analysis</span>
              </li>
            </ul>
            <Button asChild>
              <Link href="/services/accessibility-audits">
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Web Development */}
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Web Development</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Custom Web Development</h2>
            <p className="text-muted-foreground md:text-xl">
              We build custom websites that are fast, accessible, and easy to maintain, using modern technologies and
              best practices.
            </p>
            <ul className="grid gap-2 py-4">
              <li className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-primary" />
                <span>Custom website development</span>
              </li>
              <li className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-primary" />
                <span>E-commerce websites</span>
              </li>
              <li className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-primary" />
              </li>
              <li className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-primary" />
                <span>Progressive web applications</span>
              </li>
              <li className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-primary" />
                <span>Website maintenance and support</span>
              </li>
            </ul>
            <Button asChild>
              <Link href="/services/web-development">
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/placeholder.svg?height=400&width=600"
              width={600}
              height={400}
              alt="Web Development"
              className="rounded-lg object-cover"
            />
          </div>
        </div>

        {/* Web Hosting */}
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex items-center justify-center lg:order-last">
            <Image
              src="/placeholder.svg?height=400&width=600"
              width={600}
              height={400}
              alt="Web Hosting"
              className="rounded-lg object-cover"
            />
          </div>
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Web Hosting</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">UK-Based Web Hosting</h2>
            <p className="text-muted-foreground md:text-xl">
              We provide reliable UK-based hosting with 24/7 support and regular backups, ensuring your website is
              always online.
            </p>
            <ul className="grid gap-2 py-4">
              <li className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-primary" />
                <span>UK-based hosting</span>
              </li>
              <li className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-primary" />
                <span>24/7 support</span>
              </li>
              <li className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-primary" />
                <span>Regular backups</span>
              </li>
              <li className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-primary" />
                <span>SSL certificates</span>
              </li>
              <li className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-primary" />
                <span>Domain name registration</span>
              </li>
            </ul>
            <Button asChild>
              <Link href="/services/web-hosting">
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        {/* AI Integration */}
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">AI Integration</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">AI-Powered Solutions</h2>
            <p className="text-muted-foreground md:text-xl">
              Enhance your applications with cutting-edge AI capabilities including chatbots, search assistants, and
              more.
            </p>
            <ul className="grid gap-2 py-4">
              <li className="flex items-center gap-2">
                <Bot className="h-5 w-5 text-primary" />
                <span>Custom AI chatbots</span>
              </li>
              <li className="flex items-center gap-2">
                <Bot className="h-5 w-5 text-primary" />
                <span>Intelligent search assistants</span>
              </li>
              <li className="flex items-center gap-2">
                <Bot className="h-5 w-5 text-primary" />
                <span>Content generation</span>
              </li>
              <li className="flex items-center gap-2">
                <Bot className="h-5 w-5 text-primary" />
                <span>Natural language processing</span>
              </li>
              <li className="flex items-center gap-2">
                <Bot className="h-5 w-5 text-primary" />
                <span>Custom AI model integration</span>
              </li>
            </ul>
            <Button asChild>
              <Link href="/services/ai-integration">
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995"
              width={600}
              height={400}
              alt="AI Integration Services"
              className="rounded-lg object-cover"
            />
          </div>
        </div>

        {/* SEO Services */}
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex items-center justify-center lg:order-last">
            <Image
              src="https://images.unsplash.com/photo-1571721795195-a2ca2d3370a9"
              width={600}
              height={400}
              alt="SEO Services"
              className="rounded-lg object-cover"
            />
          </div>
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">SEO Services</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Search Engine Optimization</h2>
            <p className="text-muted-foreground md:text-xl">
              Improve your search engine rankings and drive more organic traffic to your website with our comprehensive
              SEO services.
            </p>
            <ul className="grid gap-2 py-4">
              <li className="flex items-center gap-2">
                <Search className="h-5 w-5 text-primary" />
                <span>Keyword research and optimization</span>
              </li>
              <li className="flex items-center gap-2">
                <Search className="h-5 w-5 text-primary" />
                <span>Technical SEO improvements</span>
              </li>
              <li className="flex items-center gap-2">
                <Search className="h-5 w-5 text-primary" />
                <span>Content optimization</span>
              </li>
              <li className="flex items-center gap-2">
                <Search className="h-5 w-5 text-primary" />
                <span>Link building strategies</span>
              </li>
              <li className="flex items-center gap-2">
                <Search className="h-5 w-5 text-primary" />
                <span>Performance monitoring</span>
              </li>
            </ul>
            <Button asChild>
              <Link href="/services/seo">
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-16 rounded-lg bg-muted p-8 md:p-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to get started?</h2>
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
    </div>
  )
}

