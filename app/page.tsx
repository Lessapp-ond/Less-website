import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { VerifiedSection } from "@/components/verified-section"
import { HowItWorks } from "@/components/how-it-works"
import { ExamplesSection } from "@/components/examples-section"
import { DownloadSection } from "@/components/download-section"
import { FAQSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"
import { LanguageProvider } from "@/lib/language-context"

export default function Home() {
  return (
    <LanguageProvider defaultLocale="en">
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
