import { Hero } from "@/components/hero"
import { HeroStatement } from "@/components/hero-statement"
import { ProductExplainer } from "@/components/product-explainer"
import { ThreePillars } from "@/components/three-pillars"
import { Process } from "@/components/process"
import { SelfQualification } from "@/components/self-qualification"
import { Closing } from "@/components/closing"
import { CustomCursor } from "@/components/custom-cursor"
import { SectionDivider } from "@/components/section-divider"
import { Header } from "@/components/header"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background noise-bg overflow-x-hidden">
      <Header />
      <CustomCursor />
      <Hero />
      <SectionDivider fromDark={true} />
      <HeroStatement />
      <SectionDivider fromDark={false} />
      <ProductExplainer />
      <SectionDivider fromDark={true} />
      <ThreePillars />
      <SectionDivider fromDark={false} />
      <Process />
      <SectionDivider fromDark={true} variant="curved" />
      <SelfQualification />
      <SectionDivider fromDark={false} variant="curved" />
      <Closing />
    </main>
  )
}
