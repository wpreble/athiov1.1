"use client"

import { Button } from "@/components/ui/button"
import { useEffect, useRef, useState } from "react"

export function Closing() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [showEmailCapture, setShowEmailCapture] = useState(false)

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

  return (
    <section
      ref={sectionRef}
      id="apply"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 py-32 bg-background"
    >
      <div className="max-w-5xl mx-auto text-center space-y-12">
        {/* Scarcity Messaging */}
        <div
          className={`space-y-2 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-sm font-bold font-mono tracking-widest text-primary uppercase">Limited Partnerships</p>
          <p className="text-lg text-muted-foreground">
            We work with <span className="text-foreground font-medium">7 experts per quarter</span>.
          </p>
          <p className="text-primary font-medium">Current cohort: 5 positions remaining for Q1 2026.</p>
        </div>

        <div className="space-y-6">
          <h2
            className={`text-[clamp(2rem,5vw,4rem)] font-bold leading-tight transition-all duration-1000 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {"This isn't software you buy."}
          </h2>
          <p
            className={`text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {"This is a joint venture. We build together, we win together."}
          </p>
        </div>

        {/* Two CTAs */}
        {!showEmailCapture ? (
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-400 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <Button
              size="lg"
              className="text-lg px-12 py-8 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold tracking-wide transition-all duration-300 hover:scale-105"
            >
              Apply for Partnership →
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => setShowEmailCapture(true)}
              className="text-lg px-12 py-8 rounded-full border-muted-foreground/30 hover:border-foreground text-foreground font-semibold tracking-wide transition-all duration-300"
            >
              Not Ready Yet
            </Button>
          </div>
        ) : (
          <div
            className={`max-w-md mx-auto space-y-6 p-8 border border-border rounded-lg bg-card transition-all duration-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="space-y-2 text-left">
              <h3 className="text-xl font-bold text-foreground">{"Not ready? We'll be here."}</h3>
              <p className="text-muted-foreground">{"Things change. We'll keep you posted."}</p>
            </div>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Name *"
                required
                className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary"
              />
              <input
                type="email"
                placeholder="Email *"
                required
                className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary"
              />
              <input
                type="text"
                placeholder="Instagram (optional)"
                className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary"
              />
              <input
                type="text"
                placeholder="YouTube (optional)"
                className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary"
              />
              <input
                type="text"
                placeholder="TikTok (optional)"
                className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary"
              />
              <input
                type="text"
                placeholder="LinkedIn (optional)"
                className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary"
              />
              <Button
                type="submit"
                className="w-full py-6 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
              >
                Stay Connected
              </Button>
            </form>
            <button
              onClick={() => setShowEmailCapture(false)}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              ← Back
            </button>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="absolute bottom-8 left-0 right-0 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-muted-foreground">
          <p className="font-mono">© 2025 Athio</p>
          <div className="flex gap-8 font-mono">
            <a href="mailto:derek@athio.ai" className="font-bold text-primary hover:text-primary/80 transition-colors">
              derek@athio.ai
            </a>
            <a href="/phlsph3" className="hover:text-primary transition-colors">
              phlsph3
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
