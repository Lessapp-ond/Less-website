"use client"

import { useState, useRef, useEffect } from "react"
import { useLanguage } from "@/lib/language-context"
import type { Locale } from "@/lib/translations"

const localeFlags: Record<Locale, string> = {
  en: "EN",
  es: "ES",
  fr: "FR",
}

export function LanguageSwitcher() {
  const { locale, setLocale, t } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const languages: Locale[] = ["en", "es", "fr"]

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-3 py-2 border border-border rounded-full text-sm font-medium text-foreground hover:bg-secondary transition-colors"
      >
        <span>{localeFlags[locale]}</span>
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          className={`text-foreground transition-transform ${isOpen ? "rotate-180" : ""}`}
        >
          <path
            d="M1 1L5 5L9 1"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-36 bg-card border border-border rounded-xl shadow-lg overflow-hidden z-50">
          {languages.map((lang) => (
            <button
              key={lang}
              type="button"
              onClick={() => {
                setLocale(lang)
                setIsOpen(false)
              }}
              className={`w-full px-4 py-2.5 text-left text-sm flex items-center gap-2 hover:bg-secondary transition-colors ${
                locale === lang ? "bg-secondary font-medium" : ""
              }`}
            >
              <span className="text-xs font-medium text-muted-foreground w-6">
                {localeFlags[lang]}
              </span>
              <span className="text-foreground">{t.languages[lang]}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
