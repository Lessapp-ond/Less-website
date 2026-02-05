"use client"

import { useLanguage } from "@/lib/language-context"

const faqData = {
  en: {
    title: "Frequently Asked Questions",
    items: [
      {
        question: "Is Less really free?",
        answer: "Yes, Less is completely free to download and use. We offer optional rewarded ads if you want to support us, but they're never required."
      },
      {
        question: "Do I need to create an account?",
        answer: "No account needed. Just download and start learning immediately. Your progress is saved locally on your device."
      },
      {
        question: "How long does each card take to read?",
        answer: "Each card is designed to be read in about 20 seconds. We focus on 3 key points so you can learn quickly without feeling overwhelmed."
      },
      {
        question: "What topics are covered?",
        answer: "Less covers psychology, history, science, society, economics, and more. New cards are added regularly to keep your learning fresh."
      },
      {
        question: "Does Less work offline?",
        answer: "Yes, most features work offline. Cards are cached on your device so you can learn anywhere, even without internet."
      },
      {
        question: "Is my data private?",
        answer: "Absolutely. We don't collect personal data, don't require login, and don't track you. Your learning stays on your device."
      },
    ]
  },
  fr: {
    title: "Questions fréquentes",
    items: [
      {
        question: "Less est-il vraiment gratuit ?",
        answer: "Oui, Less est entièrement gratuit à télécharger et utiliser. Nous proposons des publicités récompensées optionnelles si vous souhaitez nous soutenir, mais elles ne sont jamais obligatoires."
      },
      {
        question: "Dois-je créer un compte ?",
        answer: "Aucun compte nécessaire. Téléchargez et commencez à apprendre immédiatement. Votre progression est sauvegardée localement sur votre appareil."
      },
      {
        question: "Combien de temps faut-il pour lire une carte ?",
        answer: "Chaque carte est conçue pour être lue en environ 20 secondes. Nous nous concentrons sur 3 points clés pour apprendre rapidement sans se sentir submergé."
      },
      {
        question: "Quels sujets sont couverts ?",
        answer: "Less couvre la psychologie, l'histoire, les sciences, la société, l'économie et plus encore. De nouvelles cartes sont ajoutées régulièrement."
      },
      {
        question: "Less fonctionne-t-il hors ligne ?",
        answer: "Oui, la plupart des fonctionnalités marchent hors ligne. Les cartes sont mises en cache sur votre appareil pour apprendre partout, même sans internet."
      },
      {
        question: "Mes données sont-elles privées ?",
        answer: "Absolument. Nous ne collectons pas de données personnelles, ne demandons pas de connexion et ne vous suivons pas. Votre apprentissage reste sur votre appareil."
      },
    ]
  },
  es: {
    title: "Preguntas frecuentes",
    items: [
      {
        question: "¿Less es realmente gratis?",
        answer: "Sí, Less es completamente gratis para descargar y usar. Ofrecemos anuncios recompensados opcionales si quieres apoyarnos, pero nunca son obligatorios."
      },
      {
        question: "¿Necesito crear una cuenta?",
        answer: "No necesitas cuenta. Solo descarga y empieza a aprender inmediatamente. Tu progreso se guarda localmente en tu dispositivo."
      },
      {
        question: "¿Cuánto tiempo toma leer cada tarjeta?",
        answer: "Cada tarjeta está diseñada para leerse en unos 20 segundos. Nos enfocamos en 3 puntos clave para que aprendas rápido sin sentirte abrumado."
      },
      {
        question: "¿Qué temas se cubren?",
        answer: "Less cubre psicología, historia, ciencias, sociedad, economía y más. Se añaden nuevas tarjetas regularmente para mantener tu aprendizaje fresco."
      },
      {
        question: "¿Less funciona sin conexión?",
        answer: "Sí, la mayoría de las funciones funcionan sin conexión. Las tarjetas se guardan en tu dispositivo para aprender en cualquier lugar, incluso sin internet."
      },
      {
        question: "¿Mis datos son privados?",
        answer: "Absolutamente. No recopilamos datos personales, no requerimos inicio de sesión y no te rastreamos. Tu aprendizaje se queda en tu dispositivo."
      },
    ]
  }
}

export function FAQSection() {
  const { locale } = useLanguage()
  const faq = faqData[locale]

  // JSON-LD for FAQ rich snippets
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faq.items.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  }

  return (
    <section id="faq" className="py-20 px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-12">
          {faq.title}
        </h2>
        <div className="space-y-6">
          {faq.items.map((item, index) => (
            <div key={index} className="border-b border-border pb-6">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {item.question}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
