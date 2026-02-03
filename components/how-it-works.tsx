"use client"

import { useLanguage } from "@/lib/language-context"

export function HowItWorks() {
  const { t } = useLanguage()

  return (
    <section id="fonctionnement" className="py-24 md:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            {t.howItWorks.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-lg mx-auto">
            {t.howItWorks.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {t.howItWorks.steps.map((step, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-2xl p-6"
            >
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-secondary text-foreground font-bold text-lg mb-4">
                {index + 1}
              </span>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
