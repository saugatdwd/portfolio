import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { href: "mailto:saugatdwd@gmail.com", label: "Send me an email", icon: Mail, text: "Email" },
    {
      href: "https://github.com/saugatdwd",
      label: "Visit my GitHub profile",
      icon: Github,
      text: "GitHub",
      external: true,
    },
    {
      href: "https://linkedin.com/in/saugat-dawadi-475b0619b",
      label: "Visit my LinkedIn profile",
      icon: Linkedin,
      text: "LinkedIn",
      external: true,
    },
  ]

  return (
    <footer className="px-4 sm:px-6 lg:px-8 pb-8">
      <div className="max-w-3xl mx-auto space-y-4">
        {/* CTA Card */}
        <div className="rounded-2xl border border-border bg-card p-8 text-center">
          <p className="text-lg font-semibold text-foreground mb-6">
            Let&apos;s build something extraordinary together
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            {socialLinks.map(({ href, label, icon: Icon, text, external }) => (
              <a
                key={text}
                href={href}
                aria-label={label}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary border border-border text-sm text-foreground hover:bg-muted transition-colors"
              >
                <Icon className="h-3.5 w-3.5 text-muted-foreground" aria-hidden="true" />
                {text}
              </a>
            ))}
          </div>
        </div>

        {/* Footer Banner */}
        <div className="relative w-full rounded-2xl overflow-hidden border border-border bg-card">
          {/* Gradient background */}
          <div className="absolute inset-0 bg-linear-to-br from-primary/15 via-card to-accent/10" />
          {/* Subtle grid pattern overlay */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
          {/* Decorative glow orbs */}
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-accent/10 blur-3xl" />

          {/* Content */}
          <div className="relative px-6 py-10 sm:py-12 text-center">
            <p className="text-sm font-medium text-muted-foreground mb-1">
              Designed and Developed by
            </p>
            <p className="text-lg font-bold text-foreground mb-4">Saugat Dawadi</p>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary/80 border border-border text-xs text-muted-foreground">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500" />
              Open to opportunities
            </div>
            <p className="text-xs text-muted-foreground mt-5">
              © {currentYear} All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
