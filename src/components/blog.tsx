"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock } from "lucide-react"

const posts = [
  {
    title: "Building Scalable Web Applications",
    excerpt: "Learn how to build web applications that can handle millions of users.",
    image: "/placeholder.svg",
    date: "2024-02-15",
    readTime: "5 min read",
    slug: "building-scalable-web-applications",
  },
  {
    title: "The Future of Frontend Development",
    excerpt: "Exploring upcoming trends and technologies in frontend development.",
    image: "/placeholder.svg",
    date: "2024-02-10",
    readTime: "4 min read",
    slug: "future-of-frontend-development",
  },
  {
    title: "Mastering React Hooks",
    excerpt: "A comprehensive guide to using React Hooks effectively.",
    image: "/placeholder.svg",
    date: "2024-02-05",
    readTime: "6 min read",
    slug: "mastering-react-hooks",
  },
]

export default function Blog() {
  return (
    <section id="blog" className="py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Latest Articles</h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Thoughts, tutorials, and insights about web development
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  width={400}
                  height={300}
                  className="object-cover w-full h-48"
                />
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold">{post.title}</h3>
                  <p className="mt-2 text-muted-foreground">{post.excerpt}</p>
                  <div className="mt-4 flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Calendar className="mr-1 h-4 w-4" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="mr-1 h-4 w-4" />
                      {post.readTime}
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button variant="link" asChild className="px-0">
                    <Link href={`/blog/${post.slug}`}>Read More →</Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

