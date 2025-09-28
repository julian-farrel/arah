"use client"

import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative z-10 mx-auto flex max-w-3xl flex-col items-center justify-center px-6 py-16 text-center md:py-24">
      <h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground md:text-6xl">
        Trade perpetuals with unmatched efficiency and fairness.
      </h1>
      <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
        Experience the next generation of trading with Arah, where every operation is cryptographically verifiable for
        accuracy and fairness. Don’t trust—verify.
      </p>
      <div className="mt-8">
        <Button className="rounded-full px-6 py-2 text-base">Launch App</Button>
      </div>
    </section>
  )
}

export default Hero
