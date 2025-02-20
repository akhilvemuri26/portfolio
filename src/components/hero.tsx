"use client"

import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"
import { Button } from "@/components/ui/button"
import { ArrowDown } from 'lucide-react'
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl dark:text-white">
              Hi, I&apos;m{" "}
              <span className="text-primary">
                <TypeAnimation
                  sequence={["Akhil Vemuri", 1500, "a Developer", 1500, "a Designer", 1500]}
                  repeat={Number.POSITIVE_INFINITY}
                />
              </span>
            </h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto max-w-[700px] text-muted-foreground md:text-xl"
          >
            Crafting digital experiences with code and creativity. Specialized in building modern web applications with
            cutting-edge technologies.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-x-4"
          >
            <Button asChild>
              <a href="mailto:vemuri14@purdue.edu">Get in Touch</a>
            </Button>
            <Button variant="outline" asChild className="dark:text-white">
              <Link href="#projects">View Work</Link>
            </Button>
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  )
}

