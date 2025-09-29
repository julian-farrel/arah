"use client"

import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative z-10 mx-auto flex max-w-3xl flex-col items-center justify-center px-6 py-16 text-center md:py-24">
      <h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground md:text-6xl">
        Trade the World's Markets, On-Chain.
      </h1>
      <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
        Break the barriers between traditional finance and DeFi. 
        Trade tokenized perpetuals of the world's most popular stocks, amplified with up to 100x power.
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