"use client"

import Link from "next/link"
import { useLanguage } from "@/lib/language-context"
import { LanguageSwitcher } from "./language-switcher"

export function Header() {
  const { t } = useLanguage()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-1">
          <span className="text-lg font-medium tracking-tight text-foreground">
            Less
          </span>
          <svg
            width="10"
            height="6"
            viewBox="0 0 10 6"
            fill="none"
            className="text-foreground"
          >
            <path
              d="M1 1L5 5L9 1"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="#fonctionnement"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            {t.nav.howItWorks}
          </Link>
          <Link
            href="#exemples"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            {t.nav.examples}
          </Link>
          <Link
            href="#telecharger"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            {t.nav.download}
          </Link>
        </nav>
        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <button
            type="button"
            className="w-10 h-10 border border-border rounded-full flex items-center justify-center hover:bg-secondary transition-colors"
          >
            <span className="flex gap-0.5">
              <span className="w-1 h-1 rounded-full bg-foreground" />
              <span className="w-1 h-1 rounded-full bg-foreground" />
              <span className="w-1 h-1 rounded-full bg-foreground" />
            </span>
          </button>
        </div>
      </div>
    </header>
  )
}
