import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function PhilosophyPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="max-w-2xl mx-auto px-6 py-16 md:py-24">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-16"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back</span>
        </Link>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-12">Philosophy</h1>

        {/* Content */}
        <div className="space-y-8 text-lg text-muted-foreground leading-relaxed">
          <p>We believe the most valuable things cannot be automated. They can only be amplified.</p>

          <p>
            Judgment. Taste. The ability to see what others miss. These are the qualities that separate exceptional
            people from everyone else. Our job is to multiply them, not replace them.
          </p>

          <p className="text-foreground font-medium">
            We combine our proprietary operating system with your unique expertise to create something unprecedented: an
            AI that does not just sound like you. It thinks like you.
          </p>

          <p>
            Your years of pattern recognition. Your hard-won intuition. Your specific way of approaching problems. We
            capture what makes you irreplaceable and make it available at scale. 24 hours a day. Without requiring your
            time.
          </p>

          <p>
            The result is not a chatbot. It is a scalable, exitable asset. Your cognitive infrastructure becomes equity
            that compounds, not labor that depletes. Something you own outright. Something that grows in value whether
            you are in the room or not.
          </p>

          <p>
            Most AI promises to save you time. We build something different: leverage that outlasts you. An asset you
            can sell, license, or pass on. Your expertise, finally decoupled from your calendar.
          </p>
          {/* End new sections */}

          <p>
            We do not build tools for the average case. We build cognitive infrastructure for people whose work is too
            important to leave to chance, and too nuanced to leave to machines alone.
          </p>

          <p>
            This means saying no more than we say yes. It means building slowly and deliberately. It means choosing
            partners, not customers.
          </p>

          <p>
            If you need something simple, use something simple. We are for when the stakes are too high for shortcuts.
          </p>
        </div>

        {/* Divider */}
        <div className="w-12 h-px bg-muted-foreground/30 my-16" />

        {/* Footer Note */}
        <p className="text-sm text-muted-foreground">Athio | Cognitive Infrastructure for Exceptional People</p>
      </div>
    </main>
  )
}
