"use client"

import { useEffect, useRef, useState } from "react"

export function Process() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const stepRefs = useRef<(HTMLDivElement | null)[]>([])
  const [stepVisible, setStepVisible] = useState<boolean[]>([false, false, false, false, false])

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
    const observers: IntersectionObserver[] = []

    stepRefs.current.forEach((step, index) => {
      if (!step) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setStepVisible((prev) => {
              const next = [...prev]
              next[index] = true
              return next
            })
          }
        },
        { threshold: 0.1 },
      )

      observer.observe(step)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  const steps = [
    {
      number: "01",
      title: "Apply",
      body: "Quick application. We need to know you're a fit.",
    },
    {
      number: "02",
      title: "Review",
      body: "We evaluate your expertise, audience, and alignment.",
    },
    {
      number: "03",
      title: "Offer",
      body: "If qualified, you receive a partnership proposal.",
    },
    {
      number: "04",
      title: "Build",
      body: "We capture your thinking and build your AI together.",
    },
    {
      number: "05",
      title: "Launch",
      body: "You go live. Recurring revenue begins.",
    },
  ]

  return (
    <section ref={sectionRef} className="relative py-32 px-6 overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[150px] pointer-events-none transition-all duration-700"
        style={{ opacity: isVisible ? 0.8 : 0 }}
      />

      <div className="max-w-6xl mx-auto space-y-16 relative">
        {/* Eyebrow */}
        <p
          className={`text-xs font-mono tracking-widest text-muted-foreground uppercase transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          What Happens Next
        </p>

        {/* Headline */}
        <h2
          className={`text-[clamp(2rem,5vw,4rem)] font-bold leading-tight text-balance transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          From application to launch.
        </h2>

        {/* Timeline Container */}
        <div
          className={`relative transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Timeline Track - Desktop */}
          <div className="hidden md:block absolute top-8 left-0 right-0 h-px bg-border/30">
            {/* Static progress line */}
            <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-primary via-primary/50 to-primary/20" />
          </div>

          {/* Process Steps */}
          <div className="grid md:grid-cols-5 gap-8 md:gap-4 relative">
            {steps.map((step, index) => (
              <div
                key={index}
                ref={(el) => {
                  stepRefs.current[index] = el
                }}
                className="relative pt-16 md:pt-20"
                style={{
                  opacity: stepVisible[index] ? 1 : 0,
                  transform: stepVisible[index] ? "translateY(0)" : "translateY(20px)",
                  transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
                  transitionDelay: `${index * 0.08}s`,
                }}
              >
                {/* Node on timeline */}
                <div className="absolute top-0 md:top-6 left-0 md:left-1/2 md:-translate-x-1/2">
                  {/* Inner dot - always visible primary color */}
                  <div className="relative w-4 h-4 rounded-full border-2 bg-primary border-primary">
                    <div className="absolute inset-0 rounded-full bg-primary/50 animate-ping opacity-30" />
                  </div>
                </div>

                {/* Vertical line on mobile */}
                {index < steps.length - 1 && (
                  <div className="md:hidden absolute top-4 left-[7px] w-px h-full bg-gradient-to-b from-primary/50 to-transparent" />
                )}

                {/* Number - brighter text */}
                <span className="block text-4xl md:text-3xl font-bold text-foreground/40">{step.number}</span>

                {/* Title - always full primary */}
                <h3 className="mt-3 text-xl md:text-lg font-mono tracking-wider text-primary">{step.title}</h3>

                <p className="mt-3 text-sm leading-relaxed text-foreground/80">{step.body}</p>

                {/* Accent bar */}
                <div
                  className="mt-4 h-0.5 bg-gradient-to-r from-primary to-transparent transition-all duration-500"
                  style={{
                    width: stepVisible[index] ? "3rem" : "0",
                    opacity: stepVisible[index] ? 1 : 0,
                    transitionDelay: `${index * 0.08 + 0.3}s`,
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
