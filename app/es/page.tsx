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
  title: "Less - Aprende algo nuevo en 20 segundos | App gratuita",
  description: "Aplicación educativa gratuita para aprender cosas útiles en 20 segundos. Tarjetas inteligentes con 3 puntos clave sobre psicología, historia, ciencias. Disponible en iOS y Android.",
  keywords: [
    "aplicación educativa",
    "aprender en 20 segundos",
    "microlearning",
    "tarjetas inteligentes",
    "aplicación gratuita",
    "iOS",
    "Android",
    "psicología",
    "historia",
    "ciencias",
    "cultura general",
    "aprendizaje rápido",
  ],
  alternates: {
    canonical: "https://less-app.com/es",
    languages: {
      "en": "https://less-app.com",
      "fr": "https://less-app.com/fr",
      "es": "https://less-app.com/es",
    },
  },
  openGraph: {
    title: "Less - Aprende algo nuevo en 20 segundos",
    description: "Aplicación educativa gratuita con tarjetas inteligentes. Psicología, historia, ciencias en micro-lecciones. iOS & Android.",
    url: "https://less-app.com/es",
    siteName: "Less",
    locale: "es_ES",
    alternateLocale: ["en_US", "fr_FR"],
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Less App" }],
    type: "website",
  },
}

export default function HomeES() {
  return (
    <LanguageProvider defaultLocale="es">
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
