import { Button } from "@/components/ui/button"
import { BadgeCheck, FileText, Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"
import profile from "@/public/profile.png"

export function HeroSection() {
  return (
    <section id="about" className="px-4 sm:px-6 lg:px-8 pt-24 pb-8">
      <div className="max-w-3xl mx-auto">
        <div className="rounded-2xl border border-border bg-card overflow-hidden">
          {/* Banner Image */}
          <div className="relative w-full h-44 sm:h-52">
            <Image
              src="/icon.png"
              alt="Banner"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 768px"
            />
            {/* Profile Photo — overlapping bottom-left of banner */}
            <div className="absolute bottom-0 left-5 sm:left-6 translate-y-1/2 z-10">
              <div className="relative w-18 h-18 sm:w-20 sm:h-20 rounded-xl overflow-hidden border-2 border-card bg-muted">
                <Image
                  src={profile}
                  alt="Saugat Dawadi"
                  fill
                  className="object-cover"
                  priority
                  sizes="80px"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="px-5 sm:px-6 pt-14 pb-6">
            {/* Name + Badge */}
            <div className="flex items-center gap-2 mb-1">
              <h1 className="text-xl sm:text-2xl font-bold text-foreground">Saugat Dawadi — Frontend Developer</h1>
              <BadgeCheck className="h-5 w-5 text-primary shrink-0" aria-hidden="true" />
            </div>

            {/* Tagline */}
            <p className="text-sm text-muted-foreground mb-3">
              Frontend Developer • React • Next.js • TypeScript
            </p>

            {/* Bio */}
            <p className="text-sm text-muted-foreground leading-relaxed mb-5">
              Hey, I&apos;m Saugat Dawadi. I craft pixel-perfect, accessible user interfaces with
              modern web technologies. I specialize in building responsive, performant web
              applications using React, Next.js, and TypeScript — from design systems to production
              deployments.
            </p>

            {/* Resume Button */}
            <Button size="sm" className="rounded-full" asChild>
              <a href="/resume.pdf" download>
                <FileText className="h-4 w-4 mr-1.5" aria-hidden="true" />
                Resume / CV
              </a>
            </Button>

            {/* Social Links */}
            <div className="mt-6">
              <p className="text-sm text-muted-foreground mb-3">
                Me on <strong className="text-foreground">Internet!</strong>
              </p>
              <div className="flex flex-wrap gap-2">
                <a
                  href="mailto:saugatdwd@gmail.com"
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary border border-border text-sm text-foreground hover:bg-muted transition-colors"
                  aria-label="Send me an email"
                >
                  <Mail className="h-3.5 w-3.5 text-muted-foreground" aria-hidden="true" />
                  Email
                </a>
                <a
                  href="https://github.com/saugatdwd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary border border-border text-sm text-foreground hover:bg-muted transition-colors"
                  aria-label="Visit my GitHub profile"
                >
                  <Github className="h-3.5 w-3.5 text-muted-foreground" aria-hidden="true" />
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/saugat-dawadi-475b0619b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary border border-border text-sm text-foreground hover:bg-muted transition-colors"
                  aria-label="Visit my LinkedIn profile"
                >
                  <Linkedin className="h-3.5 w-3.5 text-muted-foreground" aria-hidden="true" />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
