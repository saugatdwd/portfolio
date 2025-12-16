"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div
          className={`transition-all duration-1000 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-block mb-4 text-primary text-sm font-mono">{"// Hello World"}</div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 text-balance">Frontend Developer</h1>

          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto text-balance">
            Crafting pixel-perfect, accessible user interfaces with modern web technologies
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <Button size="lg" asChild>
              <a href="#projects">View My Work</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#contact">Get In Touch</a>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <a href="/resume.pdf" download>
                Download Resume
              </a>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-6">
            <a
              href="https://github.com/saugatdwd"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com/in/saugat-dawadi-475b0619b"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:saugatdwd@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>

        <a href="#about" className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </a>
      </div>
    </section>
  )
}
