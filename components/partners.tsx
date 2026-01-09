"use client"

import { useEffect, useRef, useState } from "react"

export function Partners() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const outcomes = [
    {
      metric: "$400K+",
      context: "Product revenue generated in year one",
      type: "Advisory Partner",
    },
    {
      metric: "10K+",
      context: "Users accessing scaled expertise",
      type: "Technical Operator",
    },
    {
      metric: "Exitable",
      context: "Cognitive asset with acquisition value",
      type: "Industry Expert",
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
          Building Together
        </p>

        {/* Headline - updated */}
        <h2
          className={`text-[clamp(2rem,5vw,4rem)] font-bold leading-tight transition-all duration-1000 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Partners, not clients.
        </h2>

        {/* Partner outcomes grid - updated structure */}
        <div
          className={`grid md:grid-cols-3 gap-8 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {outcomes.map((item, index) => (
            <div
              key={index}
              className="p-8 border border-border rounded-lg hover:border-primary transition-colors duration-300"
            >
              <div className="space-y-4">
                <p className="text-4xl md:text-5xl font-bold text-primary">{item.metric}</p>
                <p className="text-foreground">{item.context}</p>
                <p className="text-sm font-mono tracking-wider text-muted-foreground uppercase">{item.type}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
