"use client"

import Link from "next/link"
import { useLanguage } from "@/lib/language-context"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="py-10 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-1">
          <span className="text-base font-medium text-foreground">Less</span>
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
        <div className="flex items-center gap-4 text-sm">
          <Link
            href="/privacy"
            className="text-foreground underline underline-offset-2 hover:opacity-70 transition-opacity"
          >
            {t.footer.privacy}
          </Link>
          <span className="text-muted-foreground">·</span>
          <span className="text-muted-foreground">
            © {new Date().getFullYear()} Less-app. {t.footer.tagline}
          </span>
        </div>
      </div>
    </footer>
  )
}
