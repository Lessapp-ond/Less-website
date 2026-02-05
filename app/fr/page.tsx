import { Metadata } from "next"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { VerifiedSection } from "@/components/verified-section"
import { HowItWorks } from "@/components/how-it-works"
import { ExamplesSection } from "@/components/examples-section"
import { DownloadSection } from "@/components/download-section"
import { FAQSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"
import { LanguageProvider } from "@/lib/language-context"

export const metadata: Metadata = {
  title: "Less - Apprenez quelque chose de nouveau en 20 secondes | App gratuite",
  description: "Application éducative gratuite pour apprendre des choses utiles en 20 secondes. Cartes intelligentes avec 3 points clés sur la psychologie, l'histoire, les sciences. Disponible sur iOS et Android.",
  keywords: [
    "application éducative",
    "apprendre en 20 secondes",
    "microlearning",
    "cartes intelligentes",
    "application gratuite",
    "iOS",
    "Android",
    "psychologie",
    "histoire",
    "sciences",
    "culture générale",
    "apprentissage rapide",
  ],
  alternates: {
    canonical: "https://less-app.com/fr",
    languages: {
      "en": "https://less-app.com",
      "fr": "https://less-app.com/fr",
      "es": "https://less-app.com/es",
    },
  },
  openGraph: {
    title: "Less - Apprenez quelque chose de nouveau en 20 secondes",
    description: "Application éducative gratuite avec des cartes intelligentes. Psychologie, histoire, sciences en micro-leçons. iOS & Android.",
    url: "https://less-app.com/fr",
    siteName: "Less",
    locale: "fr_FR",
    alternateLocale: ["en_US", "es_ES"],
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Less App" }],
    type: "website",
  },
}

export default function HomeFR() {
  return (
    <LanguageProvider defaultLocale="fr">
      <main className="min-h-screen bg-background">
        <Header />
        <HeroSection />
        <VerifiedSection />
        <HowItWorks />
        <ExamplesSection />
        <DownloadSection />
        <FAQSection />
        <Footer />
      </main>
    </LanguageProvider>
  )
}
