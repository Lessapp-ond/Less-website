"use client"

import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"

export function VerifiedSection() {
  const { locale } = useLanguage()
  const t = translations[locale]

  return (
    <section className="py-16 md:py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary mb-6">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="text-foreground"
          >
            <path
              d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 text-balance">
          {t.verified.title}
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-8 max-w-xl mx-auto">
          {t.verified.description}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <span className="px-4 py-2 bg-secondary rounded-full text-sm text-foreground">
            {t.verified.badge1}
          </span>
          <span className="px-4 py-2 bg-secondary rounded-full text-sm text-foreground">
            {t.verified.badge2}
          </span>
          <span className="px-4 py-2 bg-secondary rounded-full text-sm text-foreground">
            {t.verified.badge3}
          </span>
        </div>
      </div>
    </section>
  )
}
