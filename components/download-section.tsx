"use client"

import { useLanguage } from "@/lib/language-context"

export function DownloadSection() {
  const { t } = useLanguage()

  return (
    <section id="telecharger" className="py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
          {t.download.title}
        </h2>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-16">
          {t.download.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-12 md:gap-20">
          {/* App Store */}
          <div className="flex flex-col items-center">
            <div className="w-40 h-40 bg-card border border-border rounded-2xl flex items-center justify-center mb-4">
              <svg
                viewBox="0 0 100 100"
                className="w-32 h-32"
                fill="currentColor"
              >
                <rect x="10" y="10" width="25" height="25" />
                <rect x="65" y="10" width="25" height="25" />
                <rect x="10" y="65" width="25" height="25" />
                <rect x="15" y="15" width="15" height="15" fill="white" />
                <rect x="70" y="15" width="15" height="15" fill="white" />
                <rect x="15" y="70" width="15" height="15" fill="white" />
                <rect x="20" y="20" width="5" height="5" />
                <rect x="75" y="20" width="5" height="5" />
                <rect x="20" y="75" width="5" height="5" />
                <rect x="40" y="10" width="5" height="5" />
                <rect x="50" y="10" width="5" height="5" />
                <rect x="40" y="20" width="5" height="5" />
                <rect x="50" y="25" width="5" height="5" />
                <rect x="45" y="30" width="5" height="5" />
                <rect x="10" y="40" width="5" height="5" />
                <rect x="20" y="45" width="5" height="5" />
                <rect x="30" y="40" width="5" height="5" />
                <rect x="40" y="40" width="20" height="20" />
                <rect x="45" y="45" width="10" height="10" fill="white" />
                <rect x="65" y="40" width="5" height="5" />
                <rect x="75" y="45" width="5" height="5" />
                <rect x="85" y="40" width="5" height="5" />
                <rect x="40" y="65" width="5" height="5" />
                <rect x="50" y="70" width="5" height="5" />
                <rect x="45" y="80" width="5" height="5" />
                <rect x="55" y="85" width="5" height="5" />
                <rect x="65" y="65" width="5" height="5" />
                <rect x="75" y="70" width="5" height="5" />
                <rect x="70" y="80" width="10" height="5" />
                <rect x="85" y="75" width="5" height="5" />
                <rect x="80" y="85" width="10" height="5" />
              </svg>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <svg
                className="w-6 h-6 text-foreground"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" />
              </svg>
              <span className="font-semibold text-foreground">App Store</span>
            </div>
            <p className="text-sm text-muted-foreground">iOS 14.0+</p>
          </div>

          {/* Play Store */}
          <div className="flex flex-col items-center">
            <div className="w-40 h-40 bg-card border border-border rounded-2xl flex items-center justify-center mb-4">
              <svg
                viewBox="0 0 100 100"
                className="w-32 h-32"
                fill="currentColor"
              >
                <rect x="10" y="10" width="25" height="25" />
                <rect x="65" y="10" width="25" height="25" />
                <rect x="10" y="65" width="25" height="25" />
                <rect x="15" y="15" width="15" height="15" fill="white" />
                <rect x="70" y="15" width="15" height="15" fill="white" />
                <rect x="15" y="70" width="15" height="15" fill="white" />
                <rect x="20" y="20" width="5" height="5" />
                <rect x="75" y="20" width="5" height="5" />
                <rect x="20" y="75" width="5" height="5" />
                <rect x="45" y="10" width="5" height="5" />
                <rect x="40" y="15" width="5" height="5" />
                <rect x="50" y="20" width="5" height="5" />
                <rect x="45" y="30" width="10" height="5" />
                <rect x="10" y="45" width="5" height="5" />
                <rect x="25" y="40" width="5" height="5" />
                <rect x="30" y="50" width="5" height="5" />
                <rect x="40" y="40" width="20" height="20" />
                <rect x="45" y="45" width="10" height="10" fill="white" />
                <rect x="70" y="40" width="5" height="5" />
                <rect x="80" y="50" width="5" height="5" />
                <rect x="85" y="45" width="5" height="5" />
                <rect x="45" y="65" width="5" height="5" />
                <rect x="55" y="70" width="5" height="5" />
                <rect x="40" y="80" width="5" height="5" />
                <rect x="50" y="85" width="5" height="5" />
                <rect x="70" y="65" width="5" height="5" />
                <rect x="80" y="70" width="5" height="5" />
                <rect x="65" y="80" width="10" height="5" />
                <rect x="80" y="80" width="10" height="10" />
              </svg>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <svg
                className="w-6 h-6 text-foreground"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
              </svg>
              <span className="font-semibold text-foreground">Google Play</span>
            </div>
            <p className="text-sm text-muted-foreground">Android 8.0+</p>
          </div>
        </div>
      </div>
    </section>
  )
}
