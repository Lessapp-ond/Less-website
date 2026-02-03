"use client"

import { useLanguage } from "@/lib/language-context"

interface LearningCardProps {
  title: string
  subtitle: string
  points: string[]
  whyUseful: string
  category: string
  progress?: number
}

export function LearningCard({
  title,
  subtitle,
  points,
  whyUseful,
  category,
  progress = 2,
}: LearningCardProps) {
  const { t } = useLanguage()

  return (
    <div className="w-full max-w-md bg-card border border-border rounded-2xl p-6 shadow-sm">
      <h3 className="text-xl font-bold text-foreground mb-2 text-balance">
        {title}
      </h3>
      <p className="text-base font-medium text-foreground/80 mb-5">{subtitle}</p>

      <ul className="space-y-2.5 mb-6">
        {points.map((point, index) => (
          <li key={index} className="flex items-start gap-2">
            <span className="text-foreground/70 mt-0.5">{"•"}</span>
            <span className="text-base font-medium text-foreground">{point}</span>
          </li>
        ))}
      </ul>

      <div className="mb-5">
        <p className="text-base text-foreground/70 mb-1 flex items-center gap-1.5">
          <span className="text-lg">{"💡"}</span>
          <span>{t.card.whyUseful}</span>
        </p>
        <p className="text-base text-foreground flex items-start gap-1">
          <span className="text-foreground/70">{"→"}</span>
          <span>{whyUseful}</span>
        </p>
      </div>

      <div className="flex items-center justify-between">
        <button
          type="button"
          className="px-4 py-2.5 border border-border rounded-full text-sm font-medium text-foreground hover:bg-secondary transition-colors"
        >
          {t.card.learned}
        </button>
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

      <div className="flex items-center gap-2 mt-5">
        <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
          {category}
        </span>
        <span className="text-muted-foreground">{"•"}</span>
        <div className="flex gap-1">
          {[1, 2, 3].map((i) => (
            <span
              key={i}
              className={`w-2 h-2 rounded-full ${
                i <= progress ? "bg-muted-foreground" : "bg-border"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
