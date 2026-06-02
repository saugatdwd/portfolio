"use client"

import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Hammer } from "lucide-react"
import Image from "next/image"

interface Project {
  title: string
  description: string
  image: string
  tech: string[]
  live?: string
  code?: string
}

const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    description:
      "A modern e-commerce solution with real-time inventory, payment integration, and admin dashboard. Features Nepali payment gateway integration with Esewa and Khalti, product management, order tracking, and a comprehensive analytics dashboard.",
    image: "/humanfit-logo.png",
    tech: ["React", "Next.js", "TypeScript", "Esewa", "Khalti"],
    live: "https://humanfitcraft.com",
  },
  {
    title: "Inshort Stories",
    description:
      "A news aggregation app that delivers concise news summaries, personalized content, and offline reading capabilities. Built with RSS feed integration, category-based filtering, and a clean reading experience optimized for mobile and desktop.",
    image: "/inshortstories-logo.svg",
    tech: ["React", "Next.js", "TypeScript", "RSS"],
    live: "https://inshortstories.com/",
  },
  {
    title: "Dating App",
    description:
      "A social networking app for connecting people based on interests and location, featuring real-time chat, profile management, and match discovery. Built with React Native for cross-platform compatibility on iOS and Android.",
    image:
      "data:image/png;base64,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",
    tech: ["React Native", "Expo", "Node.js", "Express", "MongoDB"],
    code: "https://github.com/saugatdwd/spark",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-lg font-semibold mb-6 flex items-center gap-2">
          <Hammer className="h-5 w-5 text-primary" aria-hidden="true" />
          Things I&apos;ve built
        </h2>

        <div className="space-y-4">
          {projects.map((project) => (
            <article
              key={project.title}
              className="rounded-lg border border-border bg-card/50 overflow-hidden hover:border-primary/30 transition-colors group"
            >
              <div className="flex flex-col sm:flex-row">
                {/* Project Image */}
                <div className="relative w-full sm:w-48 h-40 sm:h-auto shrink-0 bg-muted/30 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={`${project.title} — project thumbnail`}
                    fill
                    sizes="(max-width: 640px) 100vw, 192px"
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-500 ease-out"
                    unoptimized={project.image.startsWith("data:")}
                  />
                </div>

                {/* Content */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col">
                  {/* Title + Links */}
                  <div className="flex items-center gap-2 flex-wrap mb-2">
                    <h3 className="text-base font-semibold text-foreground">{project.title}</h3>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-primary hover:underline"
                        aria-label={`Visit live site for ${project.title}`}
                      >
                        <ExternalLink className="h-3 w-3" aria-hidden="true" />
                        Live
                      </a>
                    )}
                    {project.code && (
                      <a
                        href={project.code}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-primary hover:underline"
                        aria-label={`View source code for ${project.title}`}
                      >
                        <Github className="h-3 w-3" aria-hidden="true" />
                        Code
                      </a>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3 flex-1">
                    {project.description}
                  </p>

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs font-normal">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
