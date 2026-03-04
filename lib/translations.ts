export type Locale = "en" | "es" | "fr"

export const translations = {
  en: {
    nav: {
      howItWorks: "How it works",
      examples: "Examples",
      download: "Download",
    },
    hero: {
      tagline: "Understand the world",
      description:
        "One card, one idea, 20 seconds. Understand why the world is the way it is — without the noise.",
      downloadApp: "Download the app",
      seeExamples: "See examples",
    },
    verified: {
      title: "See the world differently",
      description:
        "Each card unlocks a real insight — about history, society, science, or how people think. Not trivia. The kind of understanding that changes how you see things.",
      badge1: "See connections",
      badge2: "Think deeper",
      badge3: "Question more",
    },
    howItWorks: {
      title: "Simple by design",
      subtitle: "20 seconds. One idea. A new way to see.",
      steps: [
        {
          title: "Scroll",
          description:
            "Browse your card feed. Each card is a window into how the world actually works.",
        },
        {
          title: "3 points, no more",
          description:
            "The essentials in 3 clear points. No fluff, just what changes your understanding.",
        },
        {
          title: "Understand why",
          description:
            "Each card answers the real question: why does this matter? Knowledge that sticks.",
        },
      ],
    },
    examples: {
      title: "Ideas that open your eyes",
      subtitle: "Real examples from the app",
      cards: [
        {
          title: "Modern borders are recent",
          subtitle: "Most fixed borders are recent inventions",
          points: [
            "Ancient societies had fluid zones",
            "Lines replaced regions",
            "Maps froze movements",
          ],
          whyUseful: "It changes how we see nations",
          category: "HISTORY",
        },
        {
          title: "Social norms seem invisible",
          subtitle: "We integrate rules unconsciously",
          points: [
            "They guide behavior silently",
            "Breaking them causes discomfort",
            "They vary across cultures",
          ],
          whyUseful: "It explains social pressure",
          category: "SOCIETY",
        },
        {
          title: "Your brain predicts more than it reacts",
          subtitle: "The brain constantly anticipates what happens next",
          points: [
            "Perception is partly prediction",
            "Errors update your mental model",
            "Surprise costs energy",
          ],
          whyUseful: "Prediction makes perception faster and cheaper for the brain",
          category: "MIND",
        },
      ],
    },
    download: {
      title: "Start understanding",
      subtitle:
        "Available for free on iOS and Android. Scan the QR code to download.",
      comingSoon: "Coming soon",
    },
    card: {
      whyUseful: "Why it matters",
      learned: "I learned something",
    },
    footer: {
      tagline: "Understand the world.",
      privacy: "Privacy",
    },
    privacy: {
      title: "Privacy Policy",
      intro: "Less respects your privacy.",
      dataCollection: {
        title: "Data Collection",
        content:
          "Less does not require an account and does not collect personal data such as name, email, or location.",
      },
      usageData: {
        title: "Usage Data",
        content:
          "The app may collect anonymous usage signals locally on your device to improve the experience. No personally identifiable information is transmitted or sold.",
      },
      advertising: {
        title: "Advertising",
        content:
          "Less may display optional rewarded ads. Ads are provided by third-party services (e.g. Google AdMob) and may use device identifiers according to their own privacy policies.",
      },
      tracking: {
        title: "Tracking & Personalized Ads",
        content:
          "Less may request permission to track your activity across other companies' apps and websites. This data is used solely to display personalized ads through Google AdMob. The following data may be collected for advertising purposes:",
        items: [
          "Device identifier (IDFA)",
          "Usage data",
          "Ad interactions",
        ],
        note: "You can deny this permission at any time. The app will continue to work normally, but ads will be less relevant.",
      },
      offlineUse: {
        title: "Offline Use",
        content:
          "Most features work offline. Content is stored locally on your device.",
      },
      contact: {
        title: "Contact",
        content: "If you have questions about privacy, contact:",
      },
    },
    languages: {
      en: "English",
      es: "Spanish",
      fr: "French",
    },
  },
  es: {
    nav: {
      howItWorks: "Cómo funciona",
      examples: "Ejemplos",
      download: "Descargar",
    },
    hero: {
      tagline: "Entiende el mundo",
      description:
        "Una tarjeta, una idea, 20 segundos. Entiende por qué el mundo es como es — sin el ruido.",
      downloadApp: "Descargar la app",
      seeExamples: "Ver ejemplos",
    },
    verified: {
      title: "Ve el mundo diferente",
      description:
        "Cada tarjeta desbloquea una idea real — sobre historia, sociedad, ciencia, o cómo piensa la gente. No curiosidades. El tipo de comprensión que cambia tu perspectiva.",
      badge1: "Ver conexiones",
      badge2: "Pensar más",
      badge3: "Cuestionar más",
    },
    howItWorks: {
      title: "Simple por diseño",
      subtitle: "20 segundos. Una idea. Una nueva perspectiva.",
      steps: [
        {
          title: "Desliza",
          description:
            "Navega por tu feed de tarjetas. Cada tarjeta es una ventana a cómo funciona el mundo de verdad.",
        },
        {
          title: "3 puntos, no más",
          description:
            "Lo esencial en 3 puntos claros. Sin rodeos, solo lo que cambia tu comprensión.",
        },
        {
          title: "Entiende el porqué",
          description:
            "Cada tarjeta responde la pregunta real: ¿por qué importa esto? Conocimiento que se queda.",
        },
      ],
    },
    examples: {
      title: "Ideas que abren los ojos",
      subtitle: "Ejemplos reales de la app",
      cards: [
        {
          title: "Las fronteras modernas son recientes",
          subtitle: "La mayoría de las fronteras fijas son invenciones recientes",
          points: [
            "Las sociedades antiguas tenían zonas fluidas",
            "Las líneas reemplazaron las regiones",
            "Los mapas congelaron los movimientos",
          ],
          whyUseful: "Cambia nuestra forma de ver las naciones",
          category: "HISTORIA",
        },
        {
          title: "Las normas sociales parecen invisibles",
          subtitle: "Integramos reglas inconscientemente",
          points: [
            "Guían el comportamiento en silencio",
            "Romperlas causa incomodidad",
            "Varían según las culturas",
          ],
          whyUseful: "Explica la presión social",
          category: "SOCIEDAD",
        },
        {
          title: "Tu cerebro predice más de lo que reacciona",
          subtitle: "El cerebro anticipa constantemente lo que pasará",
          points: [
            "La percepción es en parte predicción",
            "Los errores actualizan tu modelo mental",
            "La sorpresa cuesta energía",
          ],
          whyUseful: "La predicción hace la percepción más rápida y económica",
          category: "MENTE",
        },
      ],
    },
    download: {
      title: "Empieza a entender",
      subtitle:
        "Disponible gratis en iOS y Android. Escanea el código QR para descargar.",
      comingSoon: "Próximamente",
    },
    card: {
      whyUseful: "Por qué es útil",
      learned: "Aprendí algo",
    },
    footer: {
      tagline: "Entiende el mundo.",
      privacy: "Privacidad",
    },
    privacy: {
      title: "Política de Privacidad",
      intro: "Less respeta tu privacidad.",
      dataCollection: {
        title: "Recopilación de datos",
        content:
          "Less no requiere una cuenta y no recopila datos personales como nombre, correo electrónico o ubicación.",
      },
      usageData: {
        title: "Datos de uso",
        content:
          "La aplicación puede recopilar señales de uso anónimas localmente en tu dispositivo para mejorar la experiencia. No se transmite ni vende información de identificación personal.",
      },
      advertising: {
        title: "Publicidad",
        content:
          "Less puede mostrar anuncios recompensados opcionales. Los anuncios son proporcionados por servicios de terceros (ej. Google AdMob) y pueden usar identificadores de dispositivo según sus propias políticas de privacidad.",
      },
      tracking: {
        title: "Seguimiento y anuncios personalizados",
        content:
          "Less puede solicitar permiso para rastrear tu actividad en apps y sitios web de otras empresas. Estos datos se utilizan únicamente para mostrar anuncios personalizados a través de Google AdMob. Los siguientes datos pueden recopilarse con fines publicitarios:",
        items: [
          "Identificador del dispositivo (IDFA)",
          "Datos de uso",
          "Interacciones con anuncios",
        ],
        note: "Puedes denegar este permiso en cualquier momento. La app seguirá funcionando normalmente, pero los anuncios serán menos relevantes.",
      },
      offlineUse: {
        title: "Uso sin conexión",
        content:
          "La mayoría de las funciones funcionan sin conexión. El contenido se almacena localmente en tu dispositivo.",
      },
      contact: {
        title: "Contacto",
        content: "Si tienes preguntas sobre privacidad, contacta:",
      },
    },
    languages: {
      en: "Inglés",
      es: "Español",
      fr: "Francés",
    },
  },
  fr: {
    nav: {
      howItWorks: "Comment ça marche",
      examples: "Exemples",
      download: "Télécharger",
    },
    hero: {
      tagline: "Comprendre le monde",
      description:
        "Une carte, une idée, 20 secondes. Comprenez pourquoi le monde est comme il est — sans le bruit.",
      downloadApp: "Télécharger l'app",
      seeExamples: "Voir des exemples",
    },
    verified: {
      title: "Voir le monde autrement",
      description:
        "Chaque carte déverrouille une vraie idée — sur l'histoire, la société, les sciences, ou comment les gens pensent. Pas des anecdotes. Le genre de compréhension qui change votre regard.",
      badge1: "Voir les liens",
      badge2: "Penser plus loin",
      badge3: "Questionner plus",
    },
    howItWorks: {
      title: "Simple par design",
      subtitle: "20 secondes. Une idée. Un nouveau regard.",
      steps: [
        {
          title: "Scrollez",
          description:
            "Parcourez votre feed de cartes. Chaque carte est une fenêtre sur comment le monde fonctionne vraiment.",
        },
        {
          title: "3 points, pas plus",
          description:
            "L'essentiel en 3 points clairs. Pas de bla-bla, juste ce qui change votre compréhension.",
        },
        {
          title: "Comprenez le pourquoi",
          description:
            "Chaque carte répond à la vraie question : pourquoi est-ce important ? Une connaissance qui reste.",
        },
      ],
    },
    examples: {
      title: "Des idées qui ouvrent les yeux",
      subtitle: "Exemples réels de l'app",
      cards: [
        {
          title: "Les frontières modernes sont récentes",
          subtitle: "La plupart des frontières fixes sont des inventions récentes",
          points: [
            "Les sociétés anciennes avaient des zones fluides",
            "Les lignes ont remplacé les régions",
            "Les cartes ont figé les déplacements",
          ],
          whyUseful: "Cela change notre façon de voir les nations",
          category: "HISTOIRE",
        },
        {
          title: "Les normes sociales semblent invisibles",
          subtitle: "Nous intégrons des règles inconsciemment",
          points: [
            "Elles orientent le comportement en silence",
            "Les enfreindre met mal à l'aise",
            "Elles varient selon les cultures",
          ],
          whyUseful: "Cela explique la pression sociale",
          category: "SOCIÉTÉ",
        },
        {
          title: "Votre cerveau prédit plus qu'il ne réagit",
          subtitle: "Le cerveau anticipe en permanence ce qui va se passer ensuite",
          points: [
            "La perception est en partie une prédiction",
            "Les erreurs mettent à jour votre modèle mental",
            "La surprise coûte de l'énergie",
          ],
          whyUseful: "La prédiction rend la perception plus rapide et moins coûteuse",
          category: "ESPRIT",
        },
      ],
    },
    download: {
      title: "Commencez à comprendre",
      subtitle:
        "Disponible gratuitement sur iOS et Android. Scannez le QR code pour télécharger.",
      comingSoon: "Bientôt disponible",
    },
    card: {
      whyUseful: "Pourquoi c'est utile",
      learned: "J'ai appris quelque chose",
    },
    footer: {
      tagline: "Comprendre le monde.",
      privacy: "Confidentialité",
    },
    privacy: {
      title: "Politique de Confidentialité",
      intro: "Less respecte votre vie privée.",
      dataCollection: {
        title: "Collecte de données",
        content:
          "Less ne nécessite pas de compte et ne collecte pas de données personnelles telles que nom, email ou localisation.",
      },
      usageData: {
        title: "Données d'utilisation",
        content:
          "L'application peut collecter des signaux d'utilisation anonymes localement sur votre appareil pour améliorer l'expérience. Aucune information personnellement identifiable n'est transmise ou vendue.",
      },
      advertising: {
        title: "Publicité",
        content:
          "Less peut afficher des publicités récompensées optionnelles. Les publicités sont fournies par des services tiers (ex. Google AdMob) et peuvent utiliser des identifiants d'appareil selon leurs propres politiques de confidentialité.",
      },
      tracking: {
        title: "Suivi et publicités personnalisées",
        content:
          "Less peut demander l'autorisation de suivre votre activité sur les apps et sites web d'autres entreprises. Ces données sont utilisées uniquement pour afficher des publicités personnalisées via Google AdMob. Les données suivantes peuvent être collectées à des fins publicitaires :",
        items: [
          "Identifiant de l'appareil (IDFA)",
          "Données d'utilisation",
          "Interactions avec les publicités",
        ],
        note: "Vous pouvez refuser cette autorisation à tout moment. L'app continuera de fonctionner normalement, mais les publicités seront moins pertinentes.",
      },
      offlineUse: {
        title: "Utilisation hors ligne",
        content:
          "La plupart des fonctionnalités fonctionnent hors ligne. Le contenu est stocké localement sur votre appareil.",
      },
      contact: {
        title: "Contact",
        content: "Si vous avez des questions sur la confidentialité, contactez :",
      },
    },
    languages: {
      en: "Anglais",
      es: "Espagnol",
      fr: "Français",
    },
  },
} as const

export type Translations = (typeof translations)["en"]
