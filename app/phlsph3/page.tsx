import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function Phlsph3Page() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="max-w-3xl mx-auto px-6 py-24 md:py-32">
        {/* Back button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-16"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="font-mono text-sm">Back</span>
        </Link>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6">phlsph3</h1>

        <p className="text-xl text-primary font-mono mb-16">On the architecture of minds that outlive their makers.</p>

        {/* Content - Expanded with storytelling, bigger vision, AI future */}
        <div className="space-y-8 text-lg text-foreground/80 leading-relaxed">
          {/* Opening vision */}
          <p className="text-2xl text-foreground font-medium leading-snug">
            We are witnessing the most significant shift in human capability since the invention of writing. And most
            people are building the wrong thing.
          </p>

          <p>
            The AI gold rush has produced a landscape of tools designed to make everyone average faster. Chatbots that
            sound like everyone. Automation that replaces thinking instead of extending it. A race to the bottom
            disguised as progress.
          </p>

          <p>We reject this future.</p>

          {/* Core thesis */}
          <div className="border-l-2 border-primary pl-6 my-12">
            <p className="text-xl text-foreground">
              The future belongs to those who can scale their thinking without sacrificing its depth.
            </p>
          </div>

          <p>
            Athio exists at the intersection of human expertise and artificial intelligence. But not in the way you have
            been told this intersection works. We are not here to augment your productivity. We are here to architect
            your immortality.
          </p>

          {/* The real problem */}
          <h2 className="text-2xl font-bold text-foreground pt-8">The Coming Compression</h2>

          <p>
            Within five years, the value of generic knowledge will approach zero. AI will handle anything that can be
            Googled, anything that can be templated, anything that has been done before. The middle will collapse.
          </p>

          <p>
            What survives? Original thought. Proprietary frameworks. The hard-won pattern recognition that took you
            twenty years to develop. The judgment calls that cannot be reverse-engineered from a blog post.
          </p>

          <p>This is what we encode. This is what we protect. This is what we scale.</p>

          {/* How it works */}
          <h2 className="text-2xl font-bold text-foreground pt-8">Cognitive Architecture</h2>

          <p>
            We leverage our internal operating system, paired with your unique expertise, to create an AI that does not
            just sound like you. It thinks like you. It reasons through problems the way you would. It catches nuances
            you would catch. It asks questions you would ask.
          </p>

          <p>
            This is not a chatbot with your vocabulary bolted on. This is a second mind, trained on the deep structure
            of your cognition, capable of operating in parallel to your biological one.
          </p>

          <p>
            Most AI tools flatten expertise into generic outputs. We do the opposite. We preserve the topology of your
            thinking. The frameworks. The heuristics. The intuitions that fire before you can articulate why.
          </p>

          {/* The asset */}
          <h2 className="text-2xl font-bold text-foreground pt-8">Building Equity in Ideas</h2>

          <p>Together, we create something unprecedented: a scalable, exitable asset built from your cognitive IP.</p>

          <p>
            Not tied to your time. Not dependent on your availability. Not limited by the hours in your day. Your
            cognitive infrastructure becomes equity that compounds while you sleep.
          </p>

          <p>
            Think about what this means. Your best thinking, available to a thousand people simultaneously. Your
            frameworks, generating revenue at 3am while you dream. Your judgment, preserved and accessible long after
            you have moved on to new challenges.
          </p>

          <div className="border-l-2 border-primary pl-6 my-12">
            <p className="italic text-foreground/90">
              "The goal is not to replace human judgment. The goal is to make it infinite."
            </p>
          </div>

          {/* The stakes */}
          <h2 className="text-2xl font-bold text-foreground pt-8">The Ownership Question</h2>

          <p>
            Here is the uncomfortable truth: someone is going to build an AI version of you. The question is whether you
            will own it or someone else will.
          </p>

          <p>
            Every piece of content you publish, every framework you share, every insight you give away is training data
            for someone else's model. The extraction has already begun. The only question is who captures the value.
          </p>

          <p>
            We build assets you own. No license fees. No subscription traps. No dependency on platforms that can change
            their terms overnight. Your AI twin can be sold, licensed, inherited, or deployed however you choose. Built
            from day one with exit in mind.
          </p>

          {/* Future vision */}
          <h2 className="text-2xl font-bold text-foreground pt-8">Where This Goes</h2>

          <p>
            We are building toward a future where the greatest minds do not die when their bodies do. Where intellectual
            legacy is not trapped in books that fade from relevance. Where wisdom compounds across generations instead
            of being rediscovered from scratch.
          </p>

          <p>
            The technology is finally here. The architecture is possible. The only missing piece is the willingness to
            build something that matters more than the next feature release.
          </p>

          <p>
            This is what Athio represents. Not another AI company. Not another productivity tool. A fundamental bet on
            the value of exceptional thinking in an age of infinite average.
          </p>

          {/* Closing */}
          <div className="pt-12 space-y-4">
            <p className="text-xl text-foreground font-medium">
              We are not for everyone. We are for the ones who have something worth preserving.
            </p>
            <p className="text-primary font-mono">The question is: do you?</p>
          </div>
        </div>

        {/* Footer mark */}
        <div className="mt-24 pt-12 border-t border-border">
          <p className="font-mono text-sm text-muted-foreground">Athio, 2025</p>
        </div>
      </div>
    </main>
  )
}
