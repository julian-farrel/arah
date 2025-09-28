"use client"

import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative z-10 mx-auto flex max-w-3xl flex-col items-center justify-center px-6 py-16 text-center md:py-24">
      <h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground md:text-6xl">
        Trade Indonesia's Future, Decentralized.
      </h1>
      <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
        For the first time, trade perpetuals on the IDX Composite and major crypto pairs with up to 100x leverage. 
        Your assets, your control—verifiably fair.
      </p>
      <div className="mt-8">
        <Button asChild className="rounded-full px-6 py-2 text-base">
          <a 
            href="https://arahdex.vercel.app/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Launch App
          </a>
        </Button>
      </div>
    </section>
  )
}

export default Hero
