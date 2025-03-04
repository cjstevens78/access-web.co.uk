import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin } from "lucide-react"
import Image from "next/image"

export const metadata = {
  title: "Contact Us | Access Web Limited",
  description:
    "Get in touch with Access Web Limited for accessible web development, SaaS product development, and UK-based hosting services.",
}

export default function ContactPage() {
  return (
    <div className="container py-12 md:py-24 lg:py-32">
      <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
        <div className="space-y-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact Us</h1>
            <p className="mt-4 text-muted-foreground md:text-xl">
              We'd love to hear from you. Send us your proposal or get in touch with our team.
            </p>
          </div>
          <div className="grid gap-6">
            <div className="flex items-start gap-4">
              <Mail className="h-6 w-6 text-primary" />
              <div>
                <h3 className="font-medium">Email</h3>
                <p className="text-sm text-muted-foreground">
                  <a href="mailto:info@access-web.co.uk" className="hover:text-primary">
                    info@access-web.co.uk
                  </a>
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="h-6 w-6 text-primary" />
              <div>
                <h3 className="font-medium">Phone</h3>
                <p className="text-sm text-muted-foreground">
                  <a href="tel:07478885247" className="hover:text-primary">
                    07478 885 247
                  </a>
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="h-6 w-6 text-primary" />
              <div>
                <h3 className="font-medium">Address</h3>
                <address className="not-italic text-sm text-muted-foreground">
                  <p>11 Gorseway</p>
                  <p>Fleet, England</p>
                  <p>GU52 7NA</p>
                </address>
              </div>
            </div>
          </div>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Send us your proposal</CardTitle>
            <CardDescription>Fill out the form below and we'll get back to you within 24 hours.</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your name" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Your email" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="phone">Phone (optional)</Label>
                <Input id="phone" type="tel" placeholder="Your phone number" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="Subject of your message" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your project or inquiry"
                  className="min-h-[150px]"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="file">Attachments (optional)</Label>
                <Input id="file" type="file" multiple />
                <p className="text-xs text-muted-foreground">
                  You can attach files such as project briefs or specifications.
                </p>
              </div>
              <Image
                src="https://images.unsplash.com/photo-1516387938699-a93567ec168e"
                width={600}
                height={400}
                alt="Modern office communication setup with laptop and phone, representing our various contact channels"
                className="rounded-lg object-cover w-full mt-4"
              />
            </form>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

