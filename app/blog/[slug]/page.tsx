import { notFound } from "next/navigation"
import { BlogPostLayout } from "@/components/blog-post-layout"
import blogData from "@/data/blog-posts.json"
import type { JSX } from "react"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const post = blogData.posts.find((post) => post.id === params.slug)

  if (!post) {
    return {
      title: "Post Not Found",
    }
  }

  return {
    title: `${post.title} | Access Web Limited Blog`,
    description: post.description,
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogData.posts.find((post) => post.id === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <BlogPostLayout
      title={post.title}
      description={post.description}
      date={post.date}
      category={post.category}
      readTime={post.readTime}
      author={post.author}
    >
      {post.content.map((block, index) => {
        switch (block.type) {
          case "paragraph":
            return <p key={index}>{block.content}</p>
          case "heading":
            const Heading = `h${block.level}` as keyof JSX.IntrinsicElements
            return <Heading key={index}>{block.content}</Heading>
          case "list":
            return (
              <ul key={index} className="list-disc pl-6 space-y-2">
                {block.items.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            )
          default:
            return null
        }
      })}
    </BlogPostLayout>
  )
}

