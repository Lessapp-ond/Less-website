import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://less-app.com'),
  title: {
    default: 'Less - Learn Something New in 20 Seconds | Free Educational App',
    template: '%s | Less App',
  },
  description: 'Free educational app to learn useful things in 20 seconds. Smart cards with 3 key points on psychology, history, science & more. Available on iOS & Android. No account required.',
  keywords: [
    'less app',
    'less-app',
    'less learning',
    'less apprendre',
    'learning app',
    'educational app',
    'microlearning',
    'learn in 20 seconds',
    'smart cards',
    'free learning',
    'iOS app',
    'Android app',
    'psychology facts',
    'history facts',
    'science facts',
    'daily learning',
    'knowledge app',
    'brain training',
    'self improvement',
    'learn something new',
    'quick learning',
    'bite-sized learning',
  ],
  authors: [{ name: 'Less App' }],
  creator: 'Less App',
  publisher: 'Less App',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
  manifest: '/manifest.json',
  openGraph: {
    title: 'Less - Learn Something New in 20 Seconds',
    description: 'Free educational app with smart cards. Learn psychology, history, science & more in bite-sized lessons. iOS & Android.',
    url: 'https://less-app.com',
    siteName: 'Less',
    locale: 'en_US',
    alternateLocale: ['fr_FR', 'es_ES'],
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Less App - Smarter Scrolling',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Less - Learn Something New in 20 Seconds',
    description: 'Free educational app with smart cards. Learn in bite-sized lessons. iOS & Android.',
    images: ['/og-image.png'],
    creator: '@lessapp',
  },
  alternates: {
    canonical: 'https://less-app.com',
    languages: {
      'en': 'https://less-app.com',
      'fr': 'https://less-app.com',
      'es': 'https://less-app.com',
    },
  },
  category: 'education',
}

// JSON-LD Structured Data
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': 'https://less-app.com/#website',
      url: 'https://less-app.com',
      name: 'Less',
      description: 'Learn something new in 20 seconds with smart cards',
      publisher: { '@id': 'https://less-app.com/#organization' },
      inLanguage: ['en', 'fr', 'es'],
    },
    {
      '@type': 'Organization',
      '@id': 'https://less-app.com/#organization',
      name: 'Less App',
      url: 'https://less-app.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://less-app.com/apple-icon.png',
      },
    },
    {
      '@type': 'MobileApplication',
      '@id': 'https://less-app.com/#app',
      name: 'Less',
      operatingSystem: ['iOS', 'Android'],
      applicationCategory: 'EducationalApplication',
      description: 'Learn useful things in 20 seconds. Smart cards with 3 key points on psychology, history, science and more.',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.8',
        ratingCount: '100',
      },
      featureList: [
        'Learn in 20 seconds',
        'Smart cards with 3 key points',
        'Psychology, history, science topics',
        'Offline mode',
        'No account required',
        'Free to use',
      ],
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
