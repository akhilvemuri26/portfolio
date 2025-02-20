import Hero from "@/components/hero"
import About from "@/components/about"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import Footer from "@/components/footer"
import FloatingNav from "@/components/floating-nav"
import { Toaster } from "@/components/ui/toaster"

export default function Home() {
  return (
    <main className="min-h-screen bg-background scroll-smooth">
      <FloatingNav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Footer />
      <Toaster />
    </main>
  )
}

