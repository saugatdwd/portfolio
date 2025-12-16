"use client"

import { useEffect, useRef, useState } from "react"
import { Briefcase, Calendar } from "lucide-react"

interface Experience {
  title: string
  company: string
  period: string
  description: string
  technologies: string[]
}

const experiences: Experience[] = [
  {
    title: "Mid Level Frontend Developer",
    company: "E-Signature Pvt Ltd",
    period: "Jan 2025 - Present",
    description:
      "Lead frontend development team, architecting scalable React applications and mentoring junior developers. Improved application performance by 40% through optimization techniques.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Associate Software Engineer",
    company: "Logicabeans",
    period: "June 2023 - Jan 2025",
    description:
      "Developed responsive web applications and collaborated with UX designers to create intuitive user interfaces. Implemented modern JavaScript frameworks and best practices.",
    technologies: ["React", "TypeScript", "CSS3", "Redux"],
  },
  {
    title: "Internship",
    company: "ABC Corps",
    period: "Mar 2023 - Jul 2023",
    description:
      "Built interactive user interfaces and maintained existing web applications. Worked closely with backend team to integrate RESTful APIs.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
  },
]

export function ExperienceSection() {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set())
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observers = itemRefs.current.map((ref, index) => {
      if (!ref) return null

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleItems((prev) => new Set([...prev, index]))
            }
          })
        },
        { threshold: 0.1 },
      )

      observer.observe(ref)
      return observer
    })

    return () => {
      observers.forEach((observer) => observer?.disconnect())
    }
  }, [])

  return (
    <section id="experience" className="py-20 px-4 md:px-8 bg-background">
      <div className="max-width mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            Professional <span className="text-primary">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-balance">
            My journey in frontend development and the companies I've worked with
          </p>
        </div>

        <div className="space-y-8 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div
              key={index}
              ref={(el) => {
                itemRefs.current[index] = el
              }}
              className={`bg-card border border-border rounded-lg p-6 md:p-8 transition-all duration-700 hover:border-primary/50 ${
                visibleItems.has(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-2">
                <div>
                  <h3 className="text-xl font-semibold mb-1 text-foreground">{exp.title}</h3>
                  <div className="flex items-center gap-2 text-primary font-medium">
                    <Briefcase className="w-4 h-4" />
                    <span>{exp.company}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground text-sm md:text-base">
                  <Calendar className="w-4 h-4" />
                  <span>{exp.period}</span>
                </div>
              </div>

              <p className="text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>

              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
