"use client"

import { useEffect, useRef, useState } from "react"
import { Sparkles, Zap, Shield } from "lucide-react"

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

  const features = [
    {
      icon: <Sparkles className="w-6 h-6" />,
      text: "AI that thinks and speaks like you",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      text: "Your guidance, available anytime",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      text: "You own it. Built from day one to exit",
    },
  ]

  return (
    <section ref={sectionRef} className="relative py-24 md:py-32 px-6 overflow-hidden bg-background">
      <div className="max-w-5xl mx-auto space-y-16 relative z-10">
        {/* Main headline */}
        <div
          className={`space-y-8 text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-sm font-bold font-mono tracking-widest text-primary uppercase">The Vision</p>
          <h2 className="text-[clamp(1.5rem,4vw,2.5rem)] font-bold leading-tight text-balance">
            What if your expertise could deliver your transformation without you?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">{"That's what we build."}</p>
        </div>

        {/* Icon + Sentence Features */}
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex flex-col items-center text-center space-y-4 transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                {feature.icon}
              </div>
              <p className="text-lg text-foreground font-medium">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
