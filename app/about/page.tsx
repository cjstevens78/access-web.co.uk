import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

export const metadata = {
  title: "About Us | Access Web Limited",
  description: "Learn more about Access Web Limited, our mission, values, and team.",
}

export default function AboutPage() {
  return (
    <div className="container py-12 md:py-24 lg:py-32">
      <div className="grid gap-10 md:gap-16">
        {/* About Us Section */}
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Access Web Limited</h1>
            <p className="text-muted-foreground md:text-xl">
              Access Web Limited is a UK-based web development company specializing in accessible web development, SaaS
              product development, and UK-based hosting services.
            </p>
            <p className="text-muted-foreground">
              Founded in 2023, we've been helping businesses and public sector organizations create accessible and
              performant web experiences that meet WCAG AAA standards.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
              <Button asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/services">Our Services</Link>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="https://images.unsplash.com/photo-1522071901873-411886a10004"
              width={600}
              height={400}
              alt="Diverse team collaborating in a modern office environment, showcasing our inclusive company culture"
              className="rounded-lg object-cover"
            />
          </div>
        </div>

        {/* Our Mission Section */}
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex items-center justify-center lg:order-last">
            <Image
              src="https://images.unsplash.com/photo-1573164713988-8665fc963095"
              width={600}
              height={400}
              alt="Person using various devices and assistive technologies, representing our mission of making the web accessible to everyone"
              className="rounded-lg object-cover"
            />
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Mission</h2>
            <p className="text-muted-foreground md:text-xl">
              Our mission is to make the web accessible to everyone, regardless of ability or disability. We believe
              that the web should be a place where everyone can participate equally.
            </p>
            <p className="text-muted-foreground">
              We're committed to building websites and applications that meet the highest accessibility standards, while
              also delivering exceptional performance and user experience.
            </p>
            <ul className="grid gap-2 py-4">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>WCAG AAA compliant websites</span>
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
            </ul>
          </div>
        </div>

        {/* Our Values Section */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center">Our Values</h2>
          <p className="text-muted-foreground md:text-xl text-center max-w-3xl mx-auto">
            Our values guide everything we do, from how we work with our clients to how we build our products.
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
            <div className="space-y-2 p-6 border rounded-lg">
              <h3 className="text-xl font-bold">Accessibility</h3>
              <p className="text-muted-foreground">
                We believe that the web should be accessible to everyone, regardless of ability or disability.
              </p>
            </div>
            <div className="space-y-2 p-6 border rounded-lg">
              <h3 className="text-xl font-bold">Quality</h3>
              <p className="text-muted-foreground">
                We're committed to delivering high-quality work that meets the highest standards.
              </p>
            </div>
            <div className="space-y-2 p-6 border rounded-lg">
              <h3 className="text-xl font-bold">Personal Touch</h3>
              <p className="text-muted-foreground">
                We believe in building lasting relationships with our clients, providing personalized service and
                attention to detail.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

