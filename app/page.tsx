import { Hero } from "@/components/hero"
import { HeroStatement } from "@/components/hero-statement"
import { ProductExplainer } from "@/components/product-explainer"
import { ThreePillars } from "@/components/three-pillars"
import { Process } from "@/components/process"
import { SelfQualification } from "@/components/self-qualification"
import { Closing } from "@/components/closing"
import { CustomCursor } from "@/components/custom-cursor"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background noise-bg overflow-x-hidden">
      <CustomCursor />
      <Hero />
      <HeroStatement />
      <ProductExplainer />
      <ThreePillars />
      <Process />
      <SelfQualification />
      <Closing />
    </main>
  )
}
