/*
"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import Image from "next/image"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Product Manager",
    company: "Tech Corp",
    image: "/placeholder.svg",
    text: "Working with John was an absolute pleasure. His attention to detail and technical expertise helped us deliver our project ahead of schedule.",
  },
  {
    name: "Michael Chen",
    role: "CEO",
    company: "StartUp Inc",
    image: "/placeholder.svg",
    text: "John's ability to translate complex requirements into elegant solutions is remarkable. He's a valuable asset to any team.",
  },
  {
    name: "Emily Brown",
    role: "Creative Director",
    company: "Design Studio",
    image: "/placeholder.svg",
    text: "The level of creativity and technical skill John brings to projects is exceptional. He consistently delivers outstanding results.",
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  const next = () => {
    setCurrent((current + 1) % testimonials.length)
  }

  const previous = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto max-w-6xl px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What People Say</h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Testimonials from clients and colleagues
          </p>
        </div>
        <div className="mt-12 relative max-w-4xl mx-auto">
          <div className="absolute left-0 top-1/2 -translate-y-1/2">
            <Button variant="ghost" size="icon" onClick={previous} className="rounded-full">
              <ChevronLeft className="h-6 w-6" />
            </Button>
          </div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2">
            <Button variant="ghost" size="icon" onClick={next} className="rounded-full">
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
          <div className="overflow-hidden px-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="dark:bg-gray-800">
                  <CardContent className="p-8">
                    <Quote className="h-12 w-12 text-primary opacity-50" />
                    <p className="mt-4 text-xl dark:text-white">{testimonials[current].text}</p>
                    <div className="mt-6 flex items-center space-x-4">
                      <Image
                        src={testimonials[current].image || "/placeholder.svg"}
                        alt={testimonials[current].name}
                        width={48}
                        height={48}
                        className="rounded-full"
                      />
                      <div>
                        <h3 className="font-semibold dark:text-white">{testimonials[current].name}</h3>
                        <p className="text-sm text-muted-foreground dark:text-gray-400">
                          {testimonials[current].role} at {testimonials[current].company}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="mt-4 flex justify-center space-x-2">
            {testimonials.map((_, index) => (
              <Button
                key={index}
                variant="ghost"
                size="sm"
                className={`w-2 h-2 rounded-full p-0 ${current === index ? "bg-primary" : "bg-muted"}`}
                onClick={() => setCurrent(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
*/

