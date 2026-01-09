"use client"

import { useEffect, useRef, useState } from "react"

export function ProductExplainer() {
  const sectionRef = useRef<HTMLElement>(null)
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

  return (
    <section ref={sectionRef} className="relative py-24 md:py-32 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto space-y-16 relative z-10">
        {/* Product Explainer */}
        <div
          className={`space-y-8 text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-[clamp(1.5rem,4vw,2.5rem)] font-bold leading-tight text-balance">
            What if your expertise could deliver your transformation without you?
          </h2>
          <div className="space-y-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            <p>{"That's what we build."}</p>
            <p>
              AI that thinks and speaks like you. Your guidance, available anytime. Your clients get your transformation
              at scale.
            </p>
            <p className="text-foreground font-medium">You own it. Built from day one to exit.</p>
          </div>
        </div>

        {/* Video Placeholder */}
        <div
          className={`aspect-video bg-card border border-border rounded-lg flex items-center justify-center transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-center space-y-4">
            <div className="w-16 h-16 mx-auto border-2 border-muted-foreground rounded-full flex items-center justify-center">
              <div className="w-0 h-0 border-l-[12px] border-l-muted-foreground border-y-[8px] border-y-transparent ml-1" />
            </div>
            <p className="text-sm font-mono text-muted-foreground tracking-wider uppercase">Video Coming Soon</p>
          </div>
        </div>
      </div>
    </section>
  )
}
