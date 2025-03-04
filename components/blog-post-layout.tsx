import type React from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface BlogPostLayoutProps {
  title: string
  description: string
  date: string
  category: string
  readTime: string
  author: string
  children: React.ReactNode
}

export function BlogPostLayout({
  title,
  description,
  date,
  category,
  readTime,
  author,
  children,
}: BlogPostLayoutProps) {
  return (
    <article className="container py-12 md:py-24 lg:py-32">
      <div className="mx-auto max-w-3xl space-y-8">
        <div>
          <Link
            href="/blog"
            className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary mb-4"
          >
            <ArrowLeft className="mr-1 h-4 w-4" /> Back to Blog
          </Link>
          <div className="flex items-center gap-2 mb-4">
            <Badge variant="secondary">{category}</Badge>
            <span className="text-sm text-muted-foreground">{date}</span>
            <span className="text-sm text-muted-foreground">{readTime}</span>
          </div>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">{title}</h1>
          <p className="text-xl text-muted-foreground">{description}</p>
          <p className="text-sm text-muted-foreground mt-4">By {author}</p>
        </div>
        <div className="prose prose-gray dark:prose-invert max-w-none">{children}</div>
        <div className="border-t pt-8">
          <Link href="/blog" className="inline-flex items-center text-sm font-medium text-primary hover:underline">
            <ArrowLeft className="mr-1 h-4 w-4" /> Back to Blog
          </Link>
        </div>
      </div>
    </article>
  )
}

