"use client"

import { Card } from "@/components/ui/card"
import { useEffect, useRef, useState } from "react"

export function SkillsSection() {
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

  const skillCategories = [
    {
      category: "Frontend",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5", "CSS3", "JavaScript", "React Native", "Expo"],
    },
    {
      category: "Backend & Tools",
      skills: ["Node.js", "Express", "Git", "REST APIs", "Vite"],
    },
    {
      category: "Testing & Quality",
      skills: ["Jest", "React Testing Library", "ESLint", "Prettier"],
    },
    {
      category: "Design & UX",
      skills: ["Figma", "Responsive Design", "Accessibility", "UI/UX Principles"],
    },
  ]

  return (
    <section id="skills" ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4" />
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern web applications
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => (
              <Card
                key={category.category}
                className="p-6 hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
                style={{
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                <h3 className="text-xl font-semibold mb-4 text-primary">{category.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg text-sm hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
