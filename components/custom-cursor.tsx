"use client"

import { useEffect, useRef } from "react"

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const cursorDotRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cursor = cursorRef.current
    const cursorDot = cursorDotRef.current

    if (!cursor || !cursorDot) return

    let mouseX = 0
    let mouseY = 0
    let cursorX = 0
    let cursorY = 0
    let dotX = 0
    let dotY = 0

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.tagName === "A" || target.tagName === "BUTTON" || target.getAttribute("role") === "button") {
        cursor.style.transform = `translate(-50%, -50%) scale(1.5)`
        cursor.style.borderColor = "oklch(0.59 0.19 44.36)"
      }
    }

    const handleMouseLeave = () => {
      cursor.style.transform = `translate(-50%, -50%) scale(1)`
      cursor.style.borderColor = "oklch(0.96 0.004 85.87)"
    }

    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseover", handleMouseEnter)
    document.addEventListener("mouseout", handleMouseLeave)

    const animate = () => {
      // Smooth follow animation for outer cursor
      cursorX += (mouseX - cursorX) * 0.15
      cursorY += (mouseY - cursorY) * 0.15
      cursor.style.left = `${cursorX}px`
      cursor.style.top = `${cursorY}px`

      // Faster follow for inner dot
      dotX += (mouseX - dotX) * 0.3
      dotY += (mouseY - dotY) * 0.3
      cursorDot.style.left = `${dotX}px`
      cursorDot.style.top = `${dotY}px`

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseover", handleMouseEnter)
      document.removeEventListener("mouseout", handleMouseLeave)
    }
  }, [])

  return (
    <>
      <div
        ref={cursorRef}
        className="pointer-events-none fixed z-[9999] hidden lg:block"
        style={{
          width: "32px",
          height: "32px",
          border: "2px solid oklch(0.96 0.004 85.87)",
          borderRadius: "50%",
          transform: "translate(-50%, -50%)",
          transition: "transform 0.2s ease, border-color 0.2s ease",
        }}
      />
      <div
        ref={cursorDotRef}
        className="pointer-events-none fixed z-[9999] hidden lg:block"
        style={{
          width: "6px",
          height: "6px",
          backgroundColor: "oklch(0.59 0.19 44.36)",
          borderRadius: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />
    </>
  )
}
