import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, ArrowRight, Globe, Shield, Zap, Clock } from "lucide-react"

export const metadata = {
  title: "Web Hosting Services | Access Web Limited",
  description: "UK-based web hosting services with excellent support, regular backups, and guaranteed uptime.",
}

export default function WebHostingPage() {
  return (
    <div className="container py-12 md:py-24 lg:py-32">
      <div className="flex flex-col gap-12">
        {/* Hero Section */}
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Web Hosting</div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Reliable UK-Based Web Hosting
            </h1>
            <p className="text-muted-foreground md:text-xl">
              Fast, secure, and reliable hosting solutions with 24/7 support and regular backups.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
              <Button asChild size="lg">
                <Link href="/contact">Get Started</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="#pricing">View Plans</Link>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31"
              width={600}
              height={400}
              alt="Data center with modern server racks and networking equipment, representing secure and reliable hosting infrastructure"
              className="rounded-lg object-cover"
              priority
            />
          </div>
        </div>

        {/* Features Section */}
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Why Choose Our Hosting?</h2>
            <p className="text-muted-foreground md:text-xl mx-auto max-w-[800px]">
              We provide reliable hosting solutions with excellent support and powerful features.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader>
                <Globe className="h-10 w-10 text-primary mb-2" />
                <CardTitle>UK Data Centers</CardTitle>
                <CardContent className="px-0">
                  <p className="text-muted-foreground">
                    Your data stays in the UK with our secure, state-of-the-art data centers.
                  </p>
                </CardContent>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Shield className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Daily Backups</CardTitle>
                <CardContent className="px-0">
                  <p className="text-muted-foreground">
                    Automatic daily backups with 30-day retention for peace of mind.
                  </p>
                </CardContent>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Clock className="h-10 w-10 text-primary mb-2" />
                <CardTitle>24/7 Support</CardTitle>
                <CardContent className="px-0">
                  <p className="text-muted-foreground">Round-the-clock support from our experienced technical team.</p>
                </CardContent>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Zap className="h-10 w-10 text-primary mb-2" />
                <CardTitle>99.9% Uptime</CardTitle>
                <CardContent className="px-0">
                  <p className="text-muted-foreground">Guaranteed uptime with our reliable hosting infrastructure.</p>
                </CardContent>
              </CardHeader>
            </Card>
          </div>
        </div>

        {/* Hosting Features Section */}
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Hosting Features</h2>
            <p className="text-muted-foreground md:text-xl mx-auto max-w-[800px]">
              Everything you need to keep your website running smoothly.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Technical Features</CardTitle>
                <CardContent className="px-0">
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>SSD storage for faster performance</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>Free SSL certificates</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>PHP 7.4 - 8.2 support</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>MySQL databases</span>
                    </li>
                  </ul>
                </CardContent>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Security Features</CardTitle>
                <CardContent className="px-0">
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>DDoS protection</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>Web application firewall</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>Malware scanning</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>IP blocking</span>
                    </li>
                  </ul>
                </CardContent>
              </CardHeader>
            </Card>
          </div>
        </div>

        {/* Pricing Section */}
        <div id="pricing" className="space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Simple, Transparent Pricing</h2>
            <p className="text-muted-foreground md:text-xl mx-auto max-w-[800px]">
              Choose the perfect hosting plan for your needs.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Starter</CardTitle>
                <div className="text-3xl font-bold">£9.99/mo</div>
                <CardContent className="px-0">
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>10GB SSD Storage</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>1 Website</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>Free SSL Certificate</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>Daily Backups</span>
                    </li>
                  </ul>
                  <Button className="w-full mt-4" asChild>
                    <Link href="/contact">Get Started</Link>
                  </Button>
                </CardContent>
              </CardHeader>
            </Card>
            <Card className="border-primary">
              <CardHeader>
                <CardTitle>Professional</CardTitle>
                <div className="text-3xl font-bold">£24.99/mo</div>
                <CardContent className="px-0">
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>50GB SSD Storage</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>5 Websites</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>Free SSL Certificates</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>Daily Backups</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>Priority Support</span>
                    </li>
                  </ul>
                  <Button className="w-full mt-4" asChild>
                    <Link href="/contact">Get Started</Link>
                  </Button>
                </CardContent>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Enterprise</CardTitle>
                <div className="text-3xl font-bold">£99.99/mo</div>
                <CardContent className="px-0">
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>200GB SSD Storage</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>Unlimited Websites</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>Free SSL Certificates</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>Daily Backups</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>24/7 Priority Support</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>Custom Solutions</span>
                    </li>
                  </ul>
                  <Button className="w-full mt-4" asChild>
                    <Link href="/contact">Get Started</Link>
                  </Button>
                </CardContent>
              </CardHeader>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="rounded-lg bg-muted p-8 md:p-10">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to Get Started?</h2>
              <p className="text-muted-foreground md:text-xl mx-auto max-w-[600px]">
                Choose your hosting plan and get your website online today with our reliable hosting services.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg">
                <Link href="/contact">Get Started</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contact">
                  Contact Sales <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

