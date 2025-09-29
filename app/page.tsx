import LiquidChrome from "@/components/LiquidChrome"
import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="relative min-h-[100svh]">
      {/* Background effect */}
      <LiquidChrome
        aria-hidden="true"
        // Subtle deep-blue charcoal tint for the chrome effect
        baseColor={[0, 0, 0.06]}
        speed={0.17}
        amplitude={0.55}
        frequencyX={3.0}
        frequencyY={2.0}
        interactive
      />

      {/* Foreground */}
      <SiteHeader />
      <Hero />

      {/* Screenshot section */}
      <section className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20">
        <div className="rounded-2xl border border-white/10 bg-background/20 shadow-2xl ring-1 ring-black/5 backdrop-blur-sm">
          <div className="overflow-hidden rounded-2xl">
            <img
              src="/images/arahdex new ui.PNG"
              alt="Arah trading interface preview"
              className="block h-auto w-full"
              loading="lazy"
            />
          </div>
        </div>
        <p className="sr-only">Preview of the Arah trading interface.</p>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  )
}
