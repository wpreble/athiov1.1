"use client"

import { useEffect, useRef, useState } from "react"
import { Check, X } from "lucide-react"

export function SelfQualification() {
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

  const fitCriteria = [
    "You generate $250K+ annually from your expertise",
    "You reach 10,000+ people through your platforms",
    "You have a framework, method, or system people pay for",
    "You're open to a revenue-share partnership model",
    "You're AI-forward and ready to build, not looking for quick fixes",
  ]

  const notFitCriteria = [
    "You generate less than $250K annually from your expertise",
    "You reach fewer than 10,000 people through your platforms",
    "You're not open to a revenue-share partnership model",
    "You don't have a proven framework or method people pay for",
    "You need results in 30 days. This takes time to build right",
  ]

  return (
    <section ref={sectionRef} className="relative py-16 md:py-20 px-6 bg-[#FAFAFA]">
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #1A1A1A 1px, transparent 1px),
            linear-gradient(to bottom, #1A1A1A 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-6xl mx-auto space-y-10 relative z-10">
        <h2
          className={`text-sm font-bold tracking-widest text-primary uppercase transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Is This For You?
        </h2>

        {/* Grid */}
        <div
          className={`grid md:grid-cols-2 gap-12 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Fit Column */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-[#1A1A1A]">{"You're a fit if:"}</h3>
            <ul className="space-y-4">
              {fitCriteria.map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-[#1A1A1A]/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Not Fit Column */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-[#1A1A1A]/60">{"You're probably not a fit if:"}</h3>
            <ul className="space-y-4">
              {notFitCriteria.map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <X className="w-5 h-5 text-[#1A1A1A]/40 mt-0.5 shrink-0" />
                  <span className="text-[#1A1A1A]/50">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
