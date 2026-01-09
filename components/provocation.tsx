"use client"

import { useEffect, useRef, useState } from "react"

export function Provocation() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const problems = [
    {
      title: "Drift & Decay",
      body: 'Outputs diverge from your true voice and logic. Early "wow" moments give way to generic, low-value content.',
    },
    {
      title: "Vendor Lock-In",
      body: "Your intellectual property trapped in someone else's SaaS. No ownership, no exit value, no control.",
    },
    {
      title: "Brand Risk",
      body: "The wrong piece of advice or misaligned tone can damage the reputation you've spent decades building.",
    },
  ]

  return (
    <section ref={sectionRef} className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Eyebrow */}
        <p
          className={`text-xs font-mono tracking-widest text-muted-foreground uppercase transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          The Market Problem
        </p>

        {/* Headline */}
        <h2
          className={`text-[clamp(2rem,5vw,4rem)] font-bold leading-tight text-balance transition-all duration-1000 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Most "AI clones" are <em className="not-italic text-primary">hollow imitations</em>
        </h2>

        {/* Body */}
        <p
          className={`text-lg md:text-xl text-muted-foreground leading-relaxed max-w-4xl transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          The explosion of AI-driven "expert clones" has created a marketplace filled with promises of instant
          replication. But beneath the surface, most solutions are built on fragile foundations. They mimic words, not
          thinking. They drift over time. They lack the rigor needed when brand, reputation, and intellectual property
          are on the line.
        </p>

        {/* Problem Cards */}
        <div
          className={`grid md:grid-cols-3 gap-6 transition-all duration-1000 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {problems.map((problem, index) => (
            <div
              key={index}
              className="p-8 border border-border rounded-lg hover:border-destructive/50 transition-colors duration-300"
            >
              <h3 className="text-xl font-semibold text-foreground mb-3">{problem.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{problem.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
