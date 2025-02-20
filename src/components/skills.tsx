"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import {
  Html5Icon,
  CssIcon,
  JavascriptIcon,
  ReactIcon,
  NextjsIcon,
  TailwindIcon,
  TypescriptIcon,
  GitIcon,
} from "@/components/icons"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"
import Link from "next/link"

const skills = [
  {
    name: "HTML5",
    icon: Html5Icon,
    category: "Frontend",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    name: "CSS3",
    icon: CssIcon,
    category: "Frontend",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    name: "JavaScript",
    icon: JavascriptIcon,
    category: "Languages",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "React",
    icon: ReactIcon,
    category: "Frontend",
    url: "https://react.dev",
  },
  {
    name: "Next.js",
    icon: NextjsIcon,
    category: "Frontend",
    url: "https://nextjs.org",
  },
  {
    name: "Tailwind CSS",
    icon: TailwindIcon,
    category: "Frontend",
    url: "https://tailwindcss.com",
  },
  {
    name: "TypeScript",
    icon: TypescriptIcon,
    category: "Languages",
    url: "https://www.typescriptlang.org",
  },
  {
    name: "Git",
    icon: GitIcon,
    category: "Tools",
    url: "https://git-scm.com",
  },
]

const certifications = [
  {
    name: "AWS Certified AI Practitioner",
    issuer: "Amazon Web Services",
    date: "2024",
    url: "https://aws.amazon.com/certification/certified-cloud-practitioner/",
  },
  {
    name: "Python Certified Entry Programmer",
    issuer: "Python Institute",
    date: "2022",
    url: "https://pythoninstitute.org/pcep",
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto max-w-6xl px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl dark:text-white">
            Skills & Certifications
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl dark:text-gray-400">
            Technologies I work with and my professional certifications
          </p>
        </div>
        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-6 text-center dark:text-white">Technical Skills</h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="group hover:border-primary transition-colors dark:bg-gray-800">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center justify-center text-center space-y-3">
                      <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <skill.icon className="h-8 w-8 text-primary" />
                      </div>
                      <div className="w-full flex flex-col items-center">
                        <h4 className="font-semibold dark:text-white">{skill.name}</h4>
                        <p className="text-sm text-muted-foreground dark:text-gray-400">{skill.category}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-6 text-center dark:text-white">Certifications</h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={cert.url} target="_blank" rel="noopener noreferrer">
                  <Card className="dark:bg-gray-800 group hover:border-primary transition-colors">
                    <CardContent className="p-6">
                      <div className="space-y-2">
                        <div className="flex items-center space-x-1">
                          <h3 className="font-bold dark:text-white">{cert.name}</h3>
                          <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground" />
                        </div>
                        <p className="text-sm text-muted-foreground dark:text-gray-400">{cert.issuer}</p>
                        <Badge variant="secondary" className="dark:bg-gray-700 dark:text-gray-200">
                          {cert.date}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

