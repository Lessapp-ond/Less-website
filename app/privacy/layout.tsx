import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for the Less app. Learn how we protect your data with no personal information collection, no tracking, and full offline functionality.",
  alternates: {
    canonical: "https://less-app.com/privacy",
  },
  openGraph: {
    title: "Privacy Policy | Less App",
    description: "Learn how Less protects your privacy with no tracking, no personal data collection, and offline-first design.",
    url: "https://less-app.com/privacy",
    type: "website",
  },
}

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
