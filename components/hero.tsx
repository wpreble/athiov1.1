"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"

export function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const title = titleRef.current
    if (!title) return

    const text = title.textContent || ""
    title.textContent = ""

    const chars = text.split("")
    chars.forEach((char, i) => {
      const span = document.createElement("span")
      span.textContent = char
      span.style.opacity = "0"
      span.style.display = "inline-block"
      span.style.animation = `fadeIn 0.1s ease forwards ${i * 0.05}s`
      title.appendChild(span)
    })

    const style = document.createElement("style")
    style.textContent = `
      @keyframes fadeIn {
        to {
          opacity: 1;
        }
      }
    `
    document.head.appendChild(style)

    return () => {
      style.remove()
    }
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Abstract background visual */}
      <div className="absolute inset-0 flex items-center justify-center opacity-20">
        <div className="relative w-[600px] h-[600px]">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute inset-0 border-2 border-primary rounded-full"
              style={{
                transform: `scale(${1 - i * 0.15}) translateX(${i * 40}px)`,
                opacity: 0.3 - i * 0.05,
              }}
            />
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center space-y-8 max-w-5xl">
        <h1
          ref={titleRef}
          className="text-[clamp(4rem,12vw,12rem)] font-bold leading-none tracking-tighter text-foreground"
        >
          ATHIO
        </h1>

        <p className="text-[clamp(1.1rem,2.5vw,1.75rem)] font-medium text-foreground text-balance leading-tight">
          {"Cognitive Infrastructure for Exceptional People"}
        </p>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          We create AI that thinks like you. Your guidance, available anytime.
        </p>

        <Button
          size="lg"
          asChild
          className="text-lg px-12 py-8 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold tracking-wide transition-all duration-300 hover:scale-105"
        >
          <a href="https://calendly.com/derek-athio/partnershipcall" target="_blank" rel="noopener noreferrer">Book a Call →</a>
        </Button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
        <p className="text-xs font-mono tracking-widest uppercase">{"Scroll"}</p>
        <div className="w-px h-16 bg-foreground animate-pulse" />
      </div>
    </section>
  )
}
