"use client"

import { ThemeToggle } from "@/components/theme-toggle"
import Link from "next/link"

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="text-lg font-semibold text-foreground hover:text-primary transition-colors"
          >
            Saugat
          </Link>

          <div className="flex items-center gap-5">
            <Link
              href="/#about"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </Link>
            <Link
              href="/#projects"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Projects
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </nav>
      {/* Glassmorphism backdrop */}
      <div className="absolute inset-0 -z-10 bg-background/75 backdrop-blur-md border-b border-border" aria-hidden="true" />
    </header>
  )
}
