"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function About() {
  const [activeTab, setActiveTab] = useState("about")

  return (
    <section id="about" className="py-24 bg-muted/50">
      <div className="container mx-auto max-w-6xl px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl dark:text-white">About Me</h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Get to know more about me and what I do
          </p>
        </div>
        <div className="mt-12">
          <Tabs defaultValue="about" className="max-w-3xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="about">About</TabsTrigger>
              <TabsTrigger value="experience">Experience</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
            </TabsList>
            <TabsContent value="about">
              <Card>
                <CardContent className="p-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <Image src="/placeholder.svg" alt="Profile" width={400} height={400} className="rounded-lg" />
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold dark:text-white">Who am I?</h3>
                      <p className="text-muted-foreground dark:text-gray-400">
                        I&apos;m a passionate web developer with over 5 years of experience in creating beautiful and
                        functional websites. I specialize in frontend development with React and Next.js.
                      </p>
                      <ul className="space-y-2 dark:text-gray-300">
                        <li>🌍 Based in New York, USA</li>
                        <li>💼 Frontend Developer at Tech Corp</li>
                        <li>🚀 Available for freelance projects</li>
                        <li>📚 Continuous learner</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="experience">
              <Card>
                <CardContent className="p-6 space-y-4">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-bold">Senior Frontend Developer</h3>
                      <p className="text-muted-foreground">Tech Corp • 2020 - Present</p>
                      <p className="mt-2">
                        Led frontend development for multiple high-traffic web applications. Implemented modern frontend
                        practices and improved performance metrics.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Frontend Developer</h3>
                      <p className="text-muted-foreground">Web Solutions Inc • 2018 - 2020</p>
                      <p className="mt-2">
                        Developed responsive websites and web applications using React and related technologies.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="education">
              <Card>
                <CardContent className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold">Master of Computer Science</h3>
                    <p className="text-muted-foreground">Tech University • 2016 - 2018</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Bachelor of Computer Science</h3>
                    <p className="text-muted-foreground">State University • 2012 - 2016</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}

