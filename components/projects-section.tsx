"use client"

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"

export function ProjectsSection() {
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

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A modern e-commerce solution with real-time inventory, payment integration, and admin dashboard.",
      image: "/modern-ecommerce-dashboard.png",
      tech: ["React", "Next.js", "TypeScript", "Esewa", "Khalti"],
      live: "https://humanfitcraft.com",
    },
    {
      title: "Massage Booking App",
      description: "A user-friendly platform for booking massage therapy sessions with calendar integration and payment processing.",
      image: "/task-management-kanban-board-app.jpg",
      tech: ["React", "Next.js","TypeScript", "Stripe" ],
      live: "https://uznara.com/",
    },
    {
      title: "Dating App",
      description: "A social networking app for connecting people based on interests and location, featuring chat and profile management.",
      image: "/weather-forecast-dashboard-interface.jpg",
      tech: ["React Native", "Expo", "Node.js", "Express", "MongoDB"],
      github: "https://github.com",
      code: "https://github.com/saugatdwd/spark",
    },
  ]

  return (
    <section id="projects" ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4" />
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card
                key={project.title}
                className="overflow-hidden hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group"
                style={{
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                <CardHeader className="p-0">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0 flex gap-2">
                  {project.code && (
                    <Button size="sm" variant="outline" asChild className="flex-1 bg-transparent">
                      <a href={project.code} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  )}
                  {project.live && (
                    <Button size="sm" asChild className="flex-1">
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
