import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, ArrowRight, Search, BarChart, Globe, Settings, LineChart, Share2 } from "lucide-react"

export const metadata = {
  title: "SEO Services | Access Web Limited",
  description:
    "Professional SEO services to improve your website's visibility and drive organic traffic through proven optimization techniques.",
}

export default function SEOPage() {
  return (
    <div className="container py-12 md:py-24 lg:py-32">
      <div className="flex flex-col gap-12">
        {/* Hero Section */}
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Search Engine Optimization</div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Boost Your Online Visibility
            </h1>
            <p className="text-muted-foreground md:text-xl">
              Improve your search engine rankings and drive more organic traffic to your website with our comprehensive
              SEO services.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
              <Button asChild size="lg">
                <Link href="/contact">Get Started</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="https://images.unsplash.com/photo-1571721795195-a2ca2d3370a9"
              width={600}
              height={400}
              alt="Data analytics dashboard showing SEO metrics and performance graphs"
              className="rounded-lg object-cover"
              priority
            />
          </div>
        </div>

        {/* Services Section */}
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our SEO Services</h2>
            <p className="text-muted-foreground md:text-xl mx-auto max-w-[800px]">
              Comprehensive SEO solutions to improve your website's visibility and performance.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <Search className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Keyword Research</CardTitle>
                <CardContent className="px-0">
                  <p className="text-muted-foreground">
                    In-depth keyword research to target the right terms for your business.
                  </p>
                </CardContent>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Settings className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Technical SEO</CardTitle>
                <CardContent className="px-0">
                  <p className="text-muted-foreground">
                    Optimize your website's technical aspects for better search engine performance.
                  </p>
                </CardContent>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Globe className="h-10 w-10 text-primary mb-2" />
                <CardTitle>On-Page SEO</CardTitle>
                <CardContent className="px-0">
                  <p className="text-muted-foreground">
                    Optimize your content and meta data for maximum search visibility.
                  </p>
                </CardContent>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Share2 className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Link Building</CardTitle>
                <CardContent className="px-0">
                  <p className="text-muted-foreground">
                    Build high-quality backlinks to improve your domain authority.
                  </p>
                </CardContent>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <BarChart className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Performance Tracking</CardTitle>
                <CardContent className="px-0">
                  <p className="text-muted-foreground">Regular monitoring and reporting of your SEO performance.</p>
                </CardContent>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <LineChart className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Local SEO</CardTitle>
                <CardContent className="px-0">
                  <p className="text-muted-foreground">
                    Improve your visibility in local search results and Google Maps.
                  </p>
                </CardContent>
              </CardHeader>
            </Card>
          </div>
        </div>

        {/* Process Section */}
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our SEO Process</h2>
            <p className="text-muted-foreground md:text-xl mx-auto max-w-[800px]">
              A systematic approach to improving your search engine rankings.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">01</div>
              <h3 className="text-xl font-bold">Audit</h3>
              <p className="text-muted-foreground">Comprehensive analysis of your current SEO performance.</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">02</div>
              <h3 className="text-xl font-bold">Strategy</h3>
              <p className="text-muted-foreground">Develop a customized SEO strategy for your business.</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">03</div>
              <h3 className="text-xl font-bold">Implementation</h3>
              <p className="text-muted-foreground">Execute optimization techniques and content improvements.</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">04</div>
              <h3 className="text-xl font-bold">Monitoring</h3>
              <p className="text-muted-foreground">Track progress and adjust strategies for optimal results.</p>
            </div>
          </div>
        </div>

        {/* Techniques Section */}
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">SEO Techniques</h2>
            <p className="text-muted-foreground md:text-xl mx-auto max-w-[800px]">
              We use proven SEO techniques to improve your search engine rankings.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Technical Optimization</CardTitle>
                <CardContent className="px-0">
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>Site speed optimization</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>Mobile responsiveness</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>XML sitemaps</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>Schema markup</span>
                    </li>
                  </ul>
                </CardContent>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Content Optimization</CardTitle>
                <CardContent className="px-0">
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>Keyword optimization</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>Meta descriptions</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>Header optimization</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>Content structure</span>
                    </li>
                  </ul>
                </CardContent>
              </CardHeader>
            </Card>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Benefits of SEO</h2>
            <p className="text-muted-foreground md:text-xl mx-auto max-w-[800px]">
              Investing in SEO can provide long-term benefits for your business.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Increased Visibility</h3>
              <p className="text-muted-foreground">
                Improve your rankings in search results and get found by more potential customers.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Quality Traffic</h3>
              <p className="text-muted-foreground">
                Attract visitors who are actively searching for your products or services.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Better ROI</h3>
              <p className="text-muted-foreground">
                Generate long-term results and sustainable organic traffic growth.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="rounded-lg bg-muted p-8 md:p-10">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to Improve Your Rankings?</h2>
              <p className="text-muted-foreground md:text-xl mx-auto max-w-[600px]">
                Get started with our SEO services and improve your online visibility today.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg">
                <Link href="/contact">Get Your SEO Audit</Link>
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

