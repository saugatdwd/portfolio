"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useState, useEffect, useCallback, useRef } from "react"
import { createPortal } from "react-dom"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [animating, setAnimating] = useState(false)
  const [portalOpen, setPortalOpen] = useState(false)
  const newBgRef = useRef("")
  const oldBgRef = useRef("")
  const ringColorRef = useRef("")

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = useCallback(() => {
    if (animating) return

    const newTheme = theme === "dark" ? "light" : "dark"
    newBgRef.current = newTheme === "dark" ? "#141414" : "#fafafa"
    oldBgRef.current = theme === "dark" ? "#141414" : "#fafafa"
    ringColorRef.current = newTheme === "dark" ? "#3b82f6" : "#f59e0b"

    setAnimating(true)
    setPortalOpen(false)

    // Trigger portal expansion on next frame
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setPortalOpen(true)
      })
    })

    // Switch theme at midpoint so content colors update as portal passes
    const timer = setTimeout(() => {
      setTheme(newTheme)
    }, 400)

    return () => clearTimeout(timer)
  }, [theme, setTheme, animating])

  const handleTransitionEnd = useCallback(() => {
    setAnimating(false)
    setPortalOpen(false)
  }, [])

  if (!mounted) {
    return <div className="size-9" />
  }

  const isDark = theme === "dark"

  return (
    <>
      {animating &&
        createPortal(
          <div
            className="pointer-events-none"
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 9998,
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            {/* 
              Portal approach:
              - The entire screen is filled with the NEW background
              - A circular clip-path mask reveals it from center outward
              - Outside the circle: OLD background (the site's actual bg)
              - Inside the circle: NEW background shows through
              - Content sits ABOVE this layer (z-index wise), so text is always visible
              - The ring/glow traces the portal edge
            */}

            {/* New theme background, revealed through expanding circle */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: newBgRef.current,
                clipPath: portalOpen
                  ? "circle(150% at 50% 50%)"
                  : "circle(0% at 50% 50%)",
                transition: "clip-path 1000ms cubic-bezier(0.22, 1, 0.36, 1)",
              }}
            />

            {/* Portal ring glow — traces the expanding edge */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  width: portalOpen ? "200vmax" : "0px",
                  height: portalOpen ? "200vmax" : "0px",
                  borderRadius: "50%",
                  boxShadow: portalOpen
                    ? `0 0 60px 15px ${ringColorRef.current}50,
                       0 0 120px 40px ${ringColorRef.current}25,
                       0 0 200px 80px ${ringColorRef.current}15,
                       inset 0 0 60px 15px ${ringColorRef.current}40`
                    : "none",
                  transition: "all 1000ms cubic-bezier(0.22, 1, 0.36, 1)",
                  opacity: portalOpen ? 1 : 0,
                }}
              />
            </div>

            {/* Portal ring border — crisp edge */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  width: portalOpen ? "200vmax" : "0px",
                  height: portalOpen ? "200vmax" : "0px",
                  borderRadius: "50%",
                  border: portalOpen
                    ? `2px solid ${ringColorRef.current}`
                    : "0px solid transparent",
                  transition: "all 1000ms cubic-bezier(0.22, 1, 0.36, 1)",
                  opacity: portalOpen ? 0.9 : 0,
                }}
              />
            </div>

            {/* Energy particles orbiting the portal edge */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {Array.from({ length: 16 }).map((_, i) => {
                const angle = (i / 16) * 360
                const rad = (angle * Math.PI) / 180
                return (
                  <div
                    key={i}
                    style={{
                      position: "absolute",
                      width: "4px",
                      height: "4px",
                      borderRadius: "50%",
                      background: ringColorRef.current,
                      boxShadow: `0 0 10px 3px ${ringColorRef.current}`,
                      transform: portalOpen
                        ? `translate(calc(cos(${rad}rad) * 100vmax), calc(sin(${rad}rad) * 100vmax))`
                        : "translate(0px, 0px)",
                      transition: "all 1000ms cubic-bezier(0.22, 1, 0.36, 1)",
                      opacity: portalOpen ? 0.9 : 0,
                      transitionDelay: `${i * 15}ms`,
                    }}
                  />
                )
              })}
            </div>
          </div>,
          document.body
        )}

      <button
        type="button"
        onClick={toggleTheme}
        className="relative inline-flex items-center justify-center size-9 rounded-full hover:bg-accent hover:text-accent-foreground transition-colors"
        aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      >
        <Sun
          className={`h-5 w-5 absolute transition-all duration-300 ${
            isDark ? "rotate-0 scale-100 opacity-100" : "rotate-90 scale-0 opacity-0"
          }`}
          aria-hidden="true"
        />
        <Moon
          className={`h-5 w-5 absolute transition-all duration-300 ${
            isDark ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"
          }`}
          aria-hidden="true"
        />
      </button>
    </>
  )
}