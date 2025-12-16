"use client"

import { Card } from "@/components/ui/card"
import { Code2, Palette, Zap } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, scalable code following industry best practices",
    },
    {
      icon: Palette,
      title: "Design Focus",
      description: "Translating designs into pixel-perfect, responsive interfaces",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing for speed and creating smooth user experiences",
    },
  ]

  return (
    <section id="about" ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12" />

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                Hello! I'm a passionate frontend developer with a keen eye for detail and a love for creating beautiful,
                functional web experiences. With several years of experience in the industry, I specialize in building
                responsive, accessible applications that users love.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I thrive on turning complex problems into simple, elegant solutions. When I'm not coding, you'll find me
                exploring new technologies, or sharing knowledge with the
                developer community.
              </p>
            </div>

            <div className="grid gap-6">
              {highlights.map((highlight, index) => (
                <Card
                  key={highlight.title}
                  className="p-6 hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
                  style={{
                    transitionDelay: `${index * 100}ms`,
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <highlight.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">{highlight.title}</h3>
                      <p className="text-sm text-muted-foreground">{highlight.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
