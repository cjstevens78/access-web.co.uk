import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, CheckCircle, User } from "lucide-react"

export const metadata = {
  title: "Walgreens Boots Case Study | Access Web Limited",
  description:
    "Learn how we helped Walgreens Boots improve their website accessibility through custom auditing and implementation.",
}

export default function WalgreensBootsCaseStudy() {
  return (
    <div className="container py-12 md:py-24">
      <div className="flex flex-col gap-8">
        <div>
          <Link
            href="/portfolio"
            className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary mb-4"
          >
            <ArrowLeft className="mr-1 h-4 w-4" /> Back to Portfolio
          </Link>
          <div className="space-y-4">
            <Badge>Accessibility</Badge>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Walgreens Boots</h1>
            <p className="text-xl text-muted-foreground">Custom accessibility auditing and implementation</p>
          </div>
          <div className="flex flex-wrap gap-4 mt-4">
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span>Completed: January 2023</span>
            </div>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <User className="h-4 w-4" />
              <span>Client: Walgreens Boots Alliance</span>
            </div>
          </div>
        </div>

        <div className="aspect-video overflow-hidden rounded-lg">
          <Image
            src="/placeholder.svg?height=600&width=1200"
            width={1200}
            height={600}
            alt="Walgreens Boots project"
            className="object-cover w-full h-full"
          />
        </div>

        <div className="grid gap-10 md:gap-16 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-8">
            <section className="space-y-4">
              <h2 className="text-2xl font-bold">Project Overview</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur.
              </p>
              <p>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">The Challenge</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur.
              </p>
              <ul className="space-y-2 pl-6 list-disc">
                <li>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit</li>
                <li>Sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt</li>
                <li>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet</li>
                <li>Consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">Our Solution</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur.
              </p>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-lg border p-4">
                  <h3 className="font-bold mb-2">Comprehensive Audit</h3>
                  <p className="text-sm text-muted-foreground">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                  </p>
                </div>
                <div className="rounded-lg border p-4">
                  <h3 className="font-bold mb-2">WCAG AAA Implementation</h3>
                  <p className="text-sm text-muted-foreground">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                  </p>
                </div>
                <div className="rounded-lg border p-4">
                  <h3 className="font-bold mb-2">User Testing</h3>
                  <p className="text-sm text-muted-foreground">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                  </p>
                </div>
                <div className="rounded-lg border p-4">
                  <h3 className="font-bold mb-2">Training & Documentation</h3>
                  <p className="text-sm text-muted-foreground">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                  </p>
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">Results</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur.
              </p>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="rounded-lg bg-muted p-4 text-center">
                  <p className="text-3xl font-bold">100%</p>
                  <p className="text-sm text-muted-foreground">WCAG AAA Compliance</p>
                </div>
                <div className="rounded-lg bg-muted p-4 text-center">
                  <p className="text-3xl font-bold">35%</p>
                  <p className="text-sm text-muted-foreground">Increase in User Engagement</p>
                </div>
                <div className="rounded-lg bg-muted p-4 text-center">
                  <p className="text-3xl font-bold">20%</p>
                  <p className="text-sm text-muted-foreground">Reduction in Support Tickets</p>
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">Testimonial</h2>
              <blockquote className="border-l-4 border-primary pl-4 italic">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat."
              </blockquote>
              <p className="font-medium">- Jane Doe, Digital Accessibility Manager at Walgreens Boots Alliance</p>
            </section>
          </div>

          <div className="space-y-6">
            <div className="rounded-lg border p-6 space-y-4">
              <h3 className="text-xl font-bold">Project Details</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Client:</span>
                  <span className="font-medium">Walgreens Boots Alliance</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Timeline:</span>
                  <span className="font-medium">3 months</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Services:</span>
                  <span className="font-medium">Accessibility Audit</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Website:</span>
                  <a href="#" className="font-medium text-primary hover:underline">
                    Visit website
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-lg border p-6 space-y-4">
              <h3 className="text-xl font-bold">Key Features</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <span>WCAG AAA compliance implementation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <span>Screen reader compatibility</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <span>Keyboard navigation improvements</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <span>Color contrast optimization</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <span>Accessible forms and interactive elements</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <span>Comprehensive documentation</span>
                </li>
              </ul>
            </div>

            <div className="rounded-lg border p-6 space-y-4">
              <h3 className="text-xl font-bold">Similar Projects</h3>
              <ul className="space-y-4">
                <li>
                  <Link href="/portfolio/equine-jobs" className="flex items-center gap-2 hover:text-primary">
                    <Image
                      src="/placeholder.svg?height=40&width=40"
                      width={40}
                      height={40}
                      alt="Equine Jobs thumbnail"
                      className="rounded-md object-cover"
                    />
                    <span>Equine Jobs</span>
                  </Link>
                </li>
                <li>
                  <Link href="/portfolio/rural-dreams" className="flex items-center gap-2 hover:text-primary">
                    <Image
                      src="/placeholder.svg?height=40&width=40"
                      width={40}
                      height={40}
                      alt="Rural Dreams thumbnail"
                      className="rounded-md object-cover"
                    />
                    <span>Rural Dreams</span>
                  </Link>
                </li>
                <li>
                  <Link href="/portfolio/stevens-homes-group" className="flex items-center gap-2 hover:text-primary">
                    <Image
                      src="/placeholder.svg?height=40&width=40"
                      width={40}
                      height={40}
                      alt="Stevens Homes Group thumbnail"
                      className="rounded-md object-cover"
                    />
                    <span>Stevens Homes Group</span>
                  </Link>
                </li>
              </ul>
            </div>

            <Button asChild className="w-full">
              <Link href="/contact">Start your project</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

