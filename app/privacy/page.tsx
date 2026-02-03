"use client"

import Link from "next/link"
import { useLanguage } from "@/lib/language-context"
import { LanguageProvider } from "@/lib/language-context"
import { LanguageSwitcher } from "@/components/language-switcher"

function PrivacyContent() {
  const { t } = useLanguage()

  return (
    <main className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
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
          <LanguageSwitcher />
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-6 pt-28 pb-16">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
          {t.privacy.title}
        </h1>
        <p className="text-lg text-muted-foreground mb-12">{t.privacy.intro}</p>

        <div className="space-y-10">
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              {t.privacy.dataCollection.title}
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {t.privacy.dataCollection.content}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              {t.privacy.usageData.title}
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {t.privacy.usageData.content}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              {t.privacy.advertising.title}
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {t.privacy.advertising.content}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              {t.privacy.tracking.title}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {t.privacy.tracking.content}
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1 mb-4">
              {t.privacy.tracking.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <p className="text-sm text-muted-foreground italic">
              {t.privacy.tracking.note}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              {t.privacy.offlineUse.title}
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {t.privacy.offlineUse.content}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              {t.privacy.contact.title}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-2">
              {t.privacy.contact.content}
            </p>
            <a
              href="mailto:alignedsystemsfrance@proton.me"
              className="text-foreground underline underline-offset-4 hover:opacity-70 transition-opacity"
            >
              alignedsystemsfrance@proton.me
            </a>
          </section>
        </div>

        <div className="mt-16 pt-8 border-t border-border">
          <Link
            href="/"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            &larr; Back to home
          </Link>
        </div>
      </div>
    </main>
  )
}

export default function PrivacyPage() {
  return (
    <LanguageProvider>
      <PrivacyContent />
    </LanguageProvider>
  )
}
