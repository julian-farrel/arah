"use client"

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10/0">
      {/* Mission */}
      <section className="mx-auto w-full max-w-4xl px-6 pt-20 text-center">
        <p className="text-pretty text-base text-muted-foreground">
          Our mission is to revolutionize trading by building provably fair, secure, and scalable infrastructure for
          finance.
        </p>
      </section>

      {/* Investors */}
      <section className="mx-auto w-full max-w-5xl px-6 pt-14">
        <p className="mb-6 text-center text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
          Investors
        </p>
        {/* <div className="flex flex-wrap items-center justify-center gap-10 opacity-90">
          <img
            src="/andreessen-horowitz-logo-white-wordmark.jpg"
            alt="Andreessen Horowitz logo"
            className="h-8 w-[220px] object-contain"
            loading="lazy"
          />
          <img
            src="/lightspeed-logo-white-wordmark.jpg"
            alt="Lightspeed logo"
            className="h-8 w-[180px] object-contain"
            loading="lazy"
          />
        </div> */}
      </section>

      {/* Audited by */}
      <section className="mx-auto w-full max-w-5xl px-6 pt-14">
        <p className="mb-6 text-center text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
          Audited by
        </p>
        {/* <div className="flex flex-wrap items-center justify-center gap-10">
          <img
            src="/zksecurity-logo-white-on-dark.jpg"
            alt="ZKSecurity logo"
            className="h-10 w-[180px] object-contain"
            loading="lazy"
          />
          <img
            src="/nethermind-logo-white-on-dark.jpg"
            alt="Nethermind logo"
            className="h-10 w-[180px] object-contain"
            loading="lazy"
          />
        </div> */}
      </section>

      {/* Bottom bar */}
      <section className="w-full pt-12 pb-10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/10">
        {/* The width, max-width, margin, and padding classes are now here */}
        <div className="mx-auto w-full max-w-6xl px-6 flex flex-col items-center justify-between gap-6 border-t border-border/60 pt-8 md:flex-row">
          <nav className="flex flex-col items-center gap-2 text-sm text-muted-foreground md:flex-row md:gap-8">
            <a href="#" className="hover:text-foreground">
              Documentation
            </a>
            <a href="#" className="hover:text-foreground">
              Status Page
            </a>
            <a href="#" className="hover:text-foreground">
              Whitepaper
            </a>
            <a href="#" className="hover:text-foreground">
              Terms of Service
            </a>
            <a href="#" className="hover:text-foreground">
              Arah Testnet
            </a>
          </nav>
          <nav className="flex items-center gap-4 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground" aria-label="Discord">
              Discord
            </a>
            <a href="#" className="hover:text-foreground" aria-label="X">
              X
            </a>
            <a href="#" className="hover:text-foreground" aria-label="LinkedIn">
              LinkedIn
            </a>
          </nav>
        </div>
      </section>
    </footer>
  )
}
