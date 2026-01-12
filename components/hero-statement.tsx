"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

export function HeroStatement() {
  const sectionRef = useRef<HTMLElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

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

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return
      const rect = sectionRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const sectionHeight = rect.height

      const progress = Math.max(0, Math.min(1, (windowHeight - rect.top) / (windowHeight + sectionHeight * 0.5)))
      setScrollProgress(progress)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const segments = [
    { text: "One foundation", delay: 0 },
    { text: "that thinks like you,", delay: 0.15 },
    { text: "evolves with AI,", delay: 0.3 },
    { text: "and becomes an asset you own.", delay: 0.45 },
  ]

  return (
    <section ref={sectionRef} className="relative py-24 md:py-32 px-6 overflow-hidden bg-[#FAFAFA]">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute left-[5%] top-1/4 w-96 h-96 rounded-full bg-primary/10 blur-3xl"
          style={{
            transform: `translateY(${(1 - scrollProgress) * 50}px)`,
            opacity: scrollProgress * 0.4,
          }}
        />
        <div
          className="absolute right-[5%] bottom-1/4 w-64 h-64 rounded-full bg-primary/15 blur-3xl"
          style={{
            transform: `translateY(${(1 - scrollProgress) * -30}px)`,
            opacity: scrollProgress * 0.3,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Statement */}
          <div className="space-y-8 order-2 lg:order-1">
            {/* Animated icon */}
            <div
              className="flex items-center gap-3 transition-all duration-700"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateX(0)" : "translateX(-20px)",
              }}
            >
              <div className="relative">
                <div className="w-8 h-8 rounded-full border-2 border-[#1A1A1A]/30 flex items-center justify-center">
                  <div
                    className="w-2.5 h-2.5 rounded-full bg-primary transition-transform duration-500"
                    style={{ transform: `scale(${0.8 + scrollProgress * 0.4})` }}
                  />
                </div>
                <div
                  className="absolute inset-0 w-8 h-8 rounded-full border border-primary/30 animate-ping"
                  style={{ animationDuration: "2s" }}
                />
              </div>
            </div>

            {/* Statement text - Dark text for light bg */}
            <div className="space-y-1">
              {segments.map((segment, i) => (
                <div key={i} className="overflow-hidden">
                  <span
                    className="block text-2xl md:text-3xl lg:text-4xl italic font-light text-[#1A1A1A] transition-all duration-700 ease-out"
                    style={{
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? "translateY(0) rotate(0deg)" : "translateY(100%) rotate(-1deg)",
                      transitionDelay: `${segment.delay}s`,
                    }}
                  >
                    {segment.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Animated underline */}
            <div
              className="h-px bg-gradient-to-r from-primary via-primary/60 to-transparent transition-all duration-1000 ease-out"
              style={{
                width: isVisible ? `${Math.min(scrollProgress * 350, 280)}px` : "0px",
                opacity: isVisible ? 1 : 0,
                transitionDelay: "0.6s",
              }}
            />
          </div>

          {/* Right: Image */}
          <div
            className="relative order-1 lg:order-2 transition-all duration-1000"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0) scale(1)" : "translateY(30px) scale(0.95)",
              transitionDelay: "0.3s",
            }}
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Glow effect behind image */}
              <div
                className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/10 blur-2xl rounded-full"
                style={{
                  transform: `scale(${1 + scrollProgress * 0.1})`,
                  opacity: scrollProgress * 0.6,
                }}
              />

              {/* Frame accents - Darker for light bg */}
              <div
                className="absolute -top-4 -left-4 w-16 h-16 border-l-2 border-t-2 border-primary/60 transition-all duration-700"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translate(0, 0)" : "translate(-10px, -10px)",
                  transitionDelay: "0.5s",
                }}
              />
              <div
                className="absolute -bottom-4 -right-4 w-16 h-16 border-r-2 border-b-2 border-primary/60 transition-all duration-700"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translate(0, 0)" : "translate(10px, 10px)",
                  transitionDelay: "0.6s",
                }}
              />

              {/* Main image */}
              <div className="relative z-10 overflow-hidden rounded-lg">
                <Image
                  src="/images/kingwillxm-thinking-man-statue-marble-epic-scuplture-wide-and-l-95238869-df76-4a92-b306-0b0e8b1484a5-20-281-29.jpeg"
                  alt="Classical philosopher statue representing timeless wisdom meets modern AI"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                  priority
                />
                {/* Subtle overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/40 via-transparent to-transparent" />
              </div>

              {/* Floating accent dots */}
              <div
                className="absolute top-1/4 -right-6 w-2 h-2 rounded-full bg-primary transition-all duration-500"
                style={{
                  opacity: scrollProgress > 0.3 ? 1 : 0,
                  transform: `translateY(${(1 - scrollProgress) * 20}px)`,
                }}
              />
              <div
                className="absolute bottom-1/3 -left-6 w-1.5 h-1.5 rounded-full bg-primary/60 transition-all duration-500"
                style={{
                  opacity: scrollProgress > 0.4 ? 1 : 0,
                  transform: `translateY(${(1 - scrollProgress) * -15}px)`,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
