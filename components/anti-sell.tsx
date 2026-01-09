"use client"

import { useEffect, useRef, useState } from "react"

export function AntiSell() {
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

  const redirects = [
    {
      need: "Need social media posts?",
      redirect: "Use a Delphi clone or marketing SaaS",
    },
    {
      need: "Need task automation?",
      redirect: "Use Zapier, Make, or n8n",
    },
    {
      need: "Need a basic chatbot?",
      redirect: "Use ChatGPT Enterprise",
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
          Honest Positioning
        </p>

        {/* Headline */}
        <h2
          className={`text-[clamp(2rem,5vw,4rem)] font-bold leading-tight transition-all duration-1000 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          This probably isn't for you.
        </h2>

        {/* Body */}
        <p
          className={`text-lg md:text-xl text-foreground/70 leading-relaxed max-w-3xl transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          We intentionally anti-sell. Our system is for when the stakes are too high to risk shortcuts. If a simpler
          solution works, use it.
        </p>

        {/* Redirect Cards */}
        <div
          className={`grid md:grid-cols-3 gap-6 transition-all duration-1000 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {redirects.map((item, index) => (
            <div
              key={index}
              className="p-8 border border-border rounded-lg hover:border-foreground/30 transition-all duration-300"
            >
              <p className="text-lg font-medium text-foreground mb-3">{item.need}</p>
              <p className="text-foreground/60 text-sm">→ {item.redirect}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
