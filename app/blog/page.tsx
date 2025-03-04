import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import blogData from "@/data/blog-posts.json"
import { NewsletterForm } from "@/components/newsletter-form"
import Image from "next/image"

export const metadata = {
  title: "Blog | Access Web Limited",
  description: "Industry insights, technical guides, and updates about web accessibility and SaaS development.",
}

export default function BlogPage() {
  return (
    <div className="container py-12 md:py-24 lg:py-32">
      <div className="space-y-12">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Blog</h1>
          <p className="text-muted-foreground md:text-xl max-w-[700px]">
            Industry insights, technical guides, and updates about web accessibility and SaaS development.
          </p>
          <Image
            src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
            width={800}
            height={300}
            alt="Modern workspace with laptop and notebook, representing web development and accessibility insights"
            className="rounded-lg object-cover w-full max-h-[300px]"
            priority
          />
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {blogData.posts.map((post) => (
            <Card key={post.id} className="flex flex-col">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary">{post.category}</Badge>
                  <span className="text-sm text-muted-foreground">{post.date}</span>
                </div>
                <CardTitle className="mt-4">
                  <Link href={`/blog/${post.id}`} className="hover:text-primary transition-colors">
                    {post.title}
                  </Link>
                </CardTitle>
                <CardDescription className="text-base">{post.description}</CardDescription>
              </CardHeader>
              <CardContent className="mt-auto">
                <div className="flex items-center justify-between">
                  <Link href={`/blog/${post.id}`} className="text-sm font-medium text-primary hover:underline">
                    Read more
                  </Link>
                  <span className="text-sm text-muted-foreground">{post.readTime}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex justify-center">
          <div className="space-y-4 text-center">
            <p className="text-muted-foreground">
              Subscribe to our newsletter to get notified about new blog posts and updates.
            </p>
            <NewsletterForm />
          </div>
        </div>
      </div>
    </div>
  )
}

