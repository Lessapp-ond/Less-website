"use client"

import { useLanguage } from "@/lib/language-context"
import { LearningCard } from "./learning-card"

export function ExamplesSection() {
  const { t } = useLanguage()

  return (
    <section id="exemples" className="py-24 md:py-32 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            {t.examples.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            {t.examples.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 justify-items-center">
          {t.examples.cards.map((card, index) => (
            <LearningCard
              key={index}
              title={card.title}
              subtitle={card.subtitle}
              points={[...card.points]}
              whyUseful={card.whyUseful}
              category={card.category}
              progress={1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
