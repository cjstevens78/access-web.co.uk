import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Filter } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export const metadata = {
  title: "Portfolio | Access Web Limited",
  description: "Explore our portfolio of accessible web development projects, SaaS products, and more.",
}

export default function PortfolioPage() {
  return (
    <div className="container py-12 md:py-24 lg:py-32">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Portfolio</h1>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Explore our recent projects and see how we've helped our clients achieve their goals with accessible,
            performant web solutions.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-8 mb-10">
        <p className="text-muted-foreground">Showing 6 projects</p>
        <div className="flex items-center gap-2">
          <Filter className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm font-medium">Filter by:</span>
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline" className="cursor-pointer hover:bg-muted">
              All
            </Badge>
            <Badge variant="outline" className="cursor-pointer hover:bg-muted">
              Web Development
            </Badge>
            <Badge variant="outline" className="cursor-pointer hover:bg-muted">
              SaaS
            </Badge>
            <Badge variant="outline" className="cursor-pointer hover:bg-muted">
              Accessibility
            </Badge>
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Walgreens Boots */}
        <Card className="overflow-hidden">
          <div className="relative h-48">
            <Image
              src="/placeholder.svg?height=200&width=400"
              width={400}
              height={200}
              alt="Walgreens Boots project thumbnail"
              className="object-cover w-full h-full"
            />
            <Badge className="absolute top-2 right-2">Accessibility</Badge>
          </div>
          <CardHeader className="pb-2">
            <CardTitle>Walgreens Boots</CardTitle>
            <CardDescription>Custom accessibility auditing and implementation</CardDescription>
          </CardHeader>
          <CardContent className="pb-2">
            <p className="text-sm text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
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

        {/* Equine Jobs */}
        <Card className="overflow-hidden">
          <div className="relative h-48">
            <Image
              src="/placeholder.svg?height=200&width=400"
              width={400}
              height={200}
              alt="Equine Jobs project thumbnail"
              className="object-cover w-full h-full"
            />
            <Badge className="absolute top-2 right-2">SaaS</Badge>
          </div>
          <CardHeader className="pb-2">
            <CardTitle>Equine Jobs</CardTitle>
            <CardDescription>Jobs board for the equine sector</CardDescription>
          </CardHeader>
          <CardContent className="pb-2">
            <p className="text-sm text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
            <div className="flex flex-wrap gap-1 mt-2">
              <Badge variant="secondary" className="text-xs">
                Next.js
              </Badge>
              <Badge variant="secondary" className="text-xs">
                Supabase
              </Badge>
              <Badge variant="secondary" className="text-xs">
                Tailwind
              </Badge>
            </div>
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

        {/* Rural Dreams */}
        <Card className="overflow-hidden">
          <div className="relative h-48">
            <Image
              src="/placeholder.svg?height=200&width=400"
              width={400}
              height={200}
              alt="Rural Dreams project thumbnail"
              className="object-cover w-full h-full"
            />
            <Badge className="absolute top-2 right-2">Web Development</Badge>
          </div>
          <CardHeader className="pb-2">
            <CardTitle>Rural Dreams</CardTitle>
            <CardDescription>Countryside property listings website</CardDescription>
          </CardHeader>
          <CardContent className="pb-2">
            <p className="text-sm text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
            <div className="flex flex-wrap gap-1 mt-2">
              <Badge variant="secondary" className="text-xs">
                Next.js
              </Badge>
              <Badge variant="secondary" className="text-xs">
                Supabase
              </Badge>
              <Badge variant="secondary" className="text-xs">
                Tailwind
              </Badge>
            </div>
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

        {/* Stevens Homes Group */}
        <Card className="overflow-hidden">
          <div className="relative h-48">
            <Image
              src="/placeholder.svg?height=200&width=400"
              width={400}
              height={200}
              alt="Stevens Homes Group project thumbnail"
              className="object-cover w-full h-full"
            />
            <Badge className="absolute top-2 right-2">Web Development</Badge>
          </div>
          <CardHeader className="pb-2">
            <CardTitle>Stevens Homes Group</CardTitle>
            <CardDescription>Property development company website</CardDescription>
          </CardHeader>
          <CardContent className="pb-2">
            <p className="text-sm text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
            <div className="flex flex-wrap gap-1 mt-2">
              <Badge variant="secondary" className="text-xs">
                React
              </Badge>
              <Badge variant="secondary" className="text-xs">
                Drone Footage
              </Badge>
            </div>
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

        {/* UK Aerials */}
        <Card className="overflow-hidden">
          <div className="relative h-48">
            <Image
              src="/placeholder.svg?height=200&width=400"
              width={400}
              height={200}
              alt="UK Aerials project thumbnail"
              className="object-cover w-full h-full"
            />
            <Badge className="absolute top-2 right-2">Web Development</Badge>
          </div>
          <CardHeader className="pb-2">
            <CardTitle>UK Aerials</CardTitle>
            <CardDescription>Aerial installation company website</CardDescription>
          </CardHeader>
          <CardContent className="pb-2">
            <p className="text-sm text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
            <div className="flex flex-wrap gap-1 mt-2">
              <Badge variant="secondary" className="text-xs">
                React
              </Badge>
            </div>
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

        {/* Fix Build Limited */}
        <Card className="overflow-hidden">
          <div className="relative h-48">
            <Image
              src="/placeholder.svg?height=200&width=400"
              width={400}
              height={200}
              alt="Fix Build Limited project thumbnail"
              className="object-cover w-full h-full"
            />
            <Badge className="absolute top-2 right-2">Web Development</Badge>
          </div>
          <CardHeader className="pb-2">
            <CardTitle>Fix Build Limited</CardTitle>
            <CardDescription>Property development company website</CardDescription>
          </CardHeader>
          <CardContent className="pb-2">
            <p className="text-sm text-muted-foreground">
              We created a modern, accessible website to showcase their home extension and garage conversion projects,
              helping them attract more clients.
            </p>
            <div className="flex flex-wrap gap-1 mt-2">
              <Badge variant="secondary" className="text-xs">
                Next.js
              </Badge>
              <Badge variant="secondary" className="text-xs">
                Image Gallery
              </Badge>
              <Badge variant="secondary" className="text-xs">
                Tailwind
              </Badge>
            </div>
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
      </div>

      {/* CTA Section */}
      <div className="mt-16 rounded-lg bg-muted p-8 md:p-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to start your project?</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Let's work together to create an accessible, performant web experience for your business.
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
      </div>
    </div>
  )
}

