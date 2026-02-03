"use client"

import Link from "next/link"
import { useLanguage } from "@/lib/language-context"

export function HeroSection() {
  const { t } = useLanguage()

  return (
    <section className="min-h-[85vh] flex items-center justify-center px-6 pt-16">
      <div className="max-w-3xl mx-auto text-center">
        <div className="inline-flex items-center gap-1 mb-8 px-4 py-2 bg-secondary rounded-full">
          <span className="text-sm font-medium text-foreground">Less</span>
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
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6 text-balance">
          {t.hero.tagline}
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed">
          {t.hero.description}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="#telecharger"
            className="px-6 py-3 bg-foreground text-background rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
          >
            {t.hero.downloadApp}
          </Link>
          <Link
            href="#exemples"
            className="px-6 py-3 border border-border rounded-full text-sm font-medium text-foreground hover:bg-secondary transition-colors"
          >
            {t.hero.seeExamples}
          </Link>
        </div>
      </div>
    </section>
  )
}
