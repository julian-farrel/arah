"use client"

import Link from "next/link"
import Image from "next/image" // 1. Import the Image component
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/10">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5">
        {/* Left: Brand */}
        <Link href="/" className="flex items-center gap-2" aria-label="Arah Home">
          {/* 2. Replace the placeholder span with your logo */}
          <Image
            src="/Arah logo.png" // <-- Make sure this path matches your logo file in the /public folder
            alt="Arah Logo"
            width={20} // Adjust width as needed
            height={20} // Adjust height as needed
            className="h-5 w-5" // This ensures the size is consistent
          />
          <span className="text-sm font-medium tracking-wide text-foreground/90">Arah</span>
        </Link>

        {/* Center: Nav items */}
        <div className="hidden items-center gap-6 md:flex">
          <DropdownMenu>
            <DropdownMenuTrigger className="text-sm text-foreground/80 hover:text-foreground aria-expanded:underline">
              Resources
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="min-w-48">
              <DropdownMenuLabel>Resources</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <a href="#" aria-label="Docs">
                  Docs
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a href="#" aria-label="API Reference">
                  API Reference
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a href="#" aria-label="Security">
                  Security
                </a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <a href="#" className="text-sm text-foreground/80 hover:text-foreground">
            FAQ
          </a>

          <DropdownMenu>
            <DropdownMenuTrigger className="text-sm text-foreground/80 hover:text-foreground aria-expanded:underline">
              Community
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="min-w-48">
              <DropdownMenuLabel>Community</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <a href="#" aria-label="Discord">
                  Discord
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a href="#" aria-label="X/Twitter">
                  X/Twitter
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a href="#" aria-label="Forums">
                  Forums
                </a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Right: CTA */}
        <div className="flex items-center">
          <Button asChild className="rounded-full px-5 py-2">
            <a
              href="https://arahdex.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Launch App
            </a>
          </Button>
        </div>
      </nav>
    </header>
  )
}

export default SiteHeader