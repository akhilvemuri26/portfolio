"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { Github } from "lucide-react"

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-featured e-commerce platform built with Next.js and Stripe",
    image: "/placeholder.svg",
    tags: ["Next.js", "React", "TypeScript"],
    category: "web",
    links: {
      demo: "#",
      github: "#",
    },
  },
  {
    title: "Task Management App",
    description: "A beautiful and functional task management application",
    image: "/placeholder.svg",
    tags: ["React", "Redux", "Firebase"],
    category: "app",
    links: {
      demo: "#",
      github: "#",
    },
  },
  {
    title: "Portfolio Template",
    description: "A customizable portfolio template for developers",
    image: "/placeholder.svg",
    tags: ["Next.js", "Tailwind CSS"],
    category: "web",
    links: {
      demo: "#",
      github: "#",
    },
  },
]

export default function Projects() {
  const [filter, setFilter] = useState("all")

  const filteredProjects = projects.filter((project) => (filter === "all" ? true : project.category === filter))

  return (
    <section id="projects" className="py-24 bg-muted/50">
      <div className="container mx-auto max-w-6xl px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl dark:text-white">
            Featured Projects
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">A selection of my favorite works</p>
        </div>
        <div className="mt-8 flex justify-center space-x-4">
          <Button
            variant={filter === "all" ? "default" : "outline"}
            onClick={() => setFilter("all")}
            className={filter === "all" ? "" : "dark:text-white"}
          >
            All
          </Button>
          <Button
            variant={filter === "web" ? "default" : "outline"}
            onClick={() => setFilter("web")}
            className={filter === "web" ? "" : "dark:text-white"}
          >
            Web
          </Button>
          <Button
            variant={filter === "app" ? "default" : "outline"}
            onClick={() => setFilter("app")}
            className={filter === "app" ? "" : "dark:text-white"}
          >
            Apps
          </Button>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="overflow-hidden dark:bg-gray-800">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="object-cover w-full h-48"
                  />
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold dark:text-white">{project.title}</h3>
                    <p className="mt-2 text-muted-foreground dark:text-gray-400">{project.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary dark:bg-primary/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="mt-4 flex space-x-4">
                      <Link
                        href={project.links.github}
                        className="inline-flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary dark:text-gray-400 dark:hover:text-primary"
                      >
                        <Github className="h-4 w-4" />
                        <span>Code</span>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

