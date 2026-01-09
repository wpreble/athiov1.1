"use client"

import { useEffect, useRef, useState } from "react"

export function WhoThisIsFor() {
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

  const archetypes = [
    {
      number: "01",
      title: "Thought Leaders with Deep Domain Expertise",
      body: "Bestselling authors, speakers, or advisors whose frameworks have real-world impact.",
    },
    {
      number: "02",
      title: "Consultants Whose Time is the Bottleneck",
      body: "Demand exceeds capacity. Clients want more access than you can physically provide.",
    },
    {
      number: "03",
      title: "Executives with Proprietary Frameworks",
      body: "Decision-makers whose judgment and pattern recognition drive organizational value.",
    },
    {
      number: "04",
      title: "Creators with Audiences Wanting Deeper Access",
      body: "You've built the audience. Now they want to interact with your thinking at scale.",
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
          Who This Is For
        </p>

        {/* Headline - updated */}
        <h2
          className={`text-[clamp(2rem,5vw,4rem)] font-bold leading-tight text-balance transition-all duration-1000 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Experts whose minds are <em className="not-italic text-primary">worth multiplying</em>
        </h2>

        {/* Subheadline - updated */}
        <p
          className={`text-lg md:text-xl text-muted-foreground leading-relaxed max-w-4xl transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          We partner with individuals whose expertise is central to their brand or business. People whose calendar is
          always full. Whose insights get diluted by the time they reach the people who need them.
        </p>

        {/* ICP Cards - updated with numbers and descriptions */}
        <div
          className={`grid md:grid-cols-2 gap-6 transition-all duration-1000 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {archetypes.map((archetype, index) => (
            <div
              key={index}
              className="p-8 border border-border rounded-lg hover:border-primary transition-colors duration-300"
            >
              <div className="space-y-3">
                <span className="text-sm font-mono text-muted-foreground">{archetype.number}</span>
                <h3 className="text-lg font-semibold text-foreground">{archetype.title}</h3>
                <p className="text-muted-foreground">{archetype.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
