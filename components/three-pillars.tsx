"use client"

import { useEffect, useRef, useState } from "react"

export function ThreePillars() {
  const sectionRef = useRef<HTMLElement>(null)
  const [activeCard, setActiveCard] = useState<number | null>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])
  const [cardVisible, setCardVisible] = useState<boolean[]>([false, false, false])

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    cardRefs.current.forEach((card, index) => {
      if (!card) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setCardVisible((prev) => {
              const next = [...prev]
              next[index] = true
              return next
            })
          }
        },
        { threshold: 0.2 },
      )

      observer.observe(card)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  const pillars = [
    {
      number: "01",
      title: "Foundation",
      headline: "A foundation made for the future of AI.",
      bullets: ["You own it, not rent it.", "As AI evolves, you're ready.", "Never start over. Just build on."],
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="4" y="20" width="24" height="4" className="fill-primary/20 stroke-primary" strokeWidth="1.5" />
          <rect x="8" y="14" width="16" height="4" className="fill-primary/20 stroke-primary" strokeWidth="1.5" />
          <rect x="12" y="8" width="8" height="4" className="fill-primary/20 stroke-primary" strokeWidth="1.5" />
        </svg>
      ),
    },
    {
      number: "02",
      title: "Thinks Like You",
      headline: "Your expertise, communicating without you.",
      bullets: ["Your thinking, scaled.", "Your time, protected.", "Your guidance, monetized."],
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="16" cy="12" r="6" className="fill-primary/20 stroke-primary" strokeWidth="1.5" />
          <path d="M8 26c0-4.418 3.582-8 8-8s8 3.582 8 8" className="stroke-primary" strokeWidth="1.5" fill="none" />
          <circle cx="16" cy="12" r="2" className="fill-primary" />
        </svg>
      ),
    },
    {
      number: "03",
      title: "IP Asset",
      headline: "An asset you own. Built to exit.",
      bullets: [
        "Someone will clone you. Own it first.",
        "No license. No subscription. Yours.",
        "Built from day one to exit.",
      ],
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 4L28 10V22L16 28L4 22V10L16 4Z" className="fill-primary/20 stroke-primary" strokeWidth="1.5" />
          <path d="M16 4V28M4 10L28 10M4 22L16 16L28 22" className="stroke-primary" strokeWidth="1.5" />
        </svg>
      ),
    },
  ]

  return (
    <section ref={sectionRef} className="relative py-32 px-6 bg-[#FAFAFA] overflow-hidden">
      {/* Animated background grid */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #1A1A1A 1px, transparent 1px),
            linear-gradient(to bottom, #1A1A1A 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating accent orbs */}
      <div className="absolute top-20 left-[10%] w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-[10%] w-80 h-80 bg-primary/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold tracking-[0.3em] text-primary uppercase">Why Athio</h2>
        </div>

        {/* Pillars Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {pillars.map((pillar, index) => {
            const isHovered = activeCard === index
            const isCardVisible = cardVisible[index]

            return (
              <div
                key={index}
                ref={(el) => {
                  cardRefs.current[index] = el
                }}
                className="group relative"
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
                style={{
                  opacity: isCardVisible ? 1 : 0,
                  transform: isCardVisible ? "translateY(0)" : "translateY(40px)",
                  transition: "all 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                  transitionDelay: `${index * 0.1}s`,
                }}
              >
                {/* Card - Using dark card styling for contrast on light bg */}
                <div
                  className={`
                    relative p-8 rounded-2xl border transition-all duration-500
                    ${
                      isHovered
                        ? "bg-[#1A1A1A] border-primary/40 shadow-[0_0_60px_-15px] shadow-primary/30"
                        : "bg-[#2A2A2A] border-[#3A3A3A] hover:border-[#4A4A4A]"
                    }
                  `}
                >
                  {/* Corner accents */}
                  <div
                    className={`absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 rounded-tl-2xl transition-colors duration-500 ${isHovered ? "border-primary" : "border-transparent"}`}
                  />
                  <div
                    className={`absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 rounded-tr-2xl transition-colors duration-500 ${isHovered ? "border-primary" : "border-transparent"}`}
                  />
                  <div
                    className={`absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 rounded-bl-2xl transition-colors duration-500 ${isHovered ? "border-primary" : "border-transparent"}`}
                  />
                  <div
                    className={`absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 rounded-br-2xl transition-colors duration-500 ${isHovered ? "border-primary" : "border-transparent"}`}
                  />

                  {/* Number badge with icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <span
                        className={`
                          text-4xl font-bold transition-colors duration-500
                          ${isHovered ? "text-primary" : "text-white/60"}
                        `}
                      >
                        {pillar.number}
                      </span>
                      <div
                        className={`transition-all duration-500 ${isHovered ? "opacity-100 scale-100" : "opacity-80 scale-95"}`}
                      >
                        {pillar.icon}
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xs font-mono tracking-[0.2em] uppercase mb-4 text-primary">{pillar.title}</h3>

                  {/* Headline */}
                  <h4 className="text-xl lg:text-2xl font-bold text-white leading-tight mb-6">{pillar.headline}</h4>

                  {/* Animated divider */}
                  <div className="relative h-px bg-white/20 mb-6 overflow-hidden">
                    <div
                      className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary to-primary/50 transition-all duration-700"
                      style={{ width: isHovered ? "100%" : "30%" }}
                    />
                  </div>

                  <ul className="space-y-4">
                    {pillar.bullets.map((bullet, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 group/item"
                        style={{
                          transition: `all 0.4s cubic-bezier(0.16, 1, 0.3, 1) ${i * 0.1}s`,
                        }}
                      >
                        <span
                          className={`
                            flex items-center justify-center w-5 h-5 rounded-full mt-0.5 transition-all duration-500
                            ${isHovered ? "bg-primary scale-100" : "bg-primary/70 scale-90"}
                          `}
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-white" />
                        </span>
                        <span className="text-white/90">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Glow effect on hover */}
                <div
                  className={`
                    absolute -inset-px rounded-2xl bg-gradient-to-b from-primary/20 to-transparent 
                    opacity-0 blur-xl transition-opacity duration-500 -z-10
                    ${isHovered ? "opacity-100" : ""}
                  `}
                />
              </div>
            )
          })}
        </div>

        {/* Bottom connector line */}
        <div className="flex justify-center mt-16">
          <div className="relative">
            <div className="h-16 w-px bg-gradient-to-b from-[#3A3A3A] to-transparent" />
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-primary" />
          </div>
        </div>
      </div>
    </section>
  )
}
