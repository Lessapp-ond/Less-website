export type Locale = "en" | "es" | "fr"

export const translations = {
  en: {
    nav: {
      howItWorks: "How it works",
      examples: "Examples",
      download: "Download",
    },
    hero: {
      tagline: "Smarter scrolling",
      description:
        "Learn useful things in 20 seconds. Simple cards, 3 key points, and why it matters.",
      downloadApp: "Download the app",
      seeExamples: "See examples",
    },
    verified: {
      title: "Sharpen your mind",
      description:
        "Each card is designed to make you think differently. Not random trivia, but real insights that challenge how you see the world.",
      badge1: "See differently",
      badge2: "Think deeper",
      badge3: "Question more",
    },
    howItWorks: {
      title: "Simple by design",
      subtitle: "20 seconds to learn. No endless courses.",
      steps: [
        {
          title: "Scroll",
          description:
            "Browse your card feed. Each card teaches you something new.",
        },
        {
          title: "3 points, no more",
          description:
            "The essentials in 3 clear points. No fluff, just what matters.",
        },
        {
          title: "Understand why",
          description:
            'Each card explains "why it matters". Knowledge makes sense.',
        },
      ],
    },
    examples: {
      title: "Cards that teach",
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
      title: "Start learning",
      subtitle:
        "Available for free on iOS and Android. Scan the QR code to download.",
      comingSoon: "Coming soon",
    },
    card: {
      whyUseful: "Why it matters",
      learned: "I learned something",
    },
    footer: {
      tagline: "Smarter scrolling.",
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
      tagline: "Smarter scrolling",
      description:
        "Aprende cosas útiles en 20 segundos. Tarjetas simples, 3 puntos clave, y por qué es importante.",
      downloadApp: "Descargar la app",
      seeExamples: "Ver ejemplos",
    },
    verified: {
      title: "Afila tu mente",
      description:
        "Cada tarjeta está diseñada para hacerte pensar diferente. No curiosidades al azar, sino ideas reales que desafían tu forma de ver el mundo.",
      badge1: "Ver diferente",
      badge2: "Pensar más",
      badge3: "Cuestionar más",
    },
    howItWorks: {
      title: "Simple por diseño",
      subtitle: "20 segundos para aprender. Sin cursos interminables.",
      steps: [
        {
          title: "Desliza",
          description:
            "Navega por tu feed de tarjetas. Cada tarjeta te enseña algo nuevo.",
        },
        {
          title: "3 puntos, no más",
          description:
            "Lo esencial en 3 puntos claros. Sin rodeos, solo lo importante.",
        },
        {
          title: "Entiende el porqué",
          description:
            'Cada tarjeta explica "por qué es útil". El conocimiento cobra sentido.',
        },
      ],
    },
    examples: {
      title: "Tarjetas que enseñan",
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
      title: "Empieza a aprender",
      subtitle:
        "Disponible gratis en iOS y Android. Escanea el código QR para descargar.",
      comingSoon: "Próximamente",
    },
    card: {
      whyUseful: "Por qué es útil",
      learned: "Aprendí algo",
    },
    footer: {
      tagline: "Smarter scrolling.",
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
      tagline: "Smarter scrolling",
      description:
        "Apprenez des choses utiles en 20 secondes. Des cartes simples, 3 points clés, et pourquoi c'est important.",
      downloadApp: "Télécharger l'app",
      seeExamples: "Voir des exemples",
    },
    verified: {
      title: "Affûtez votre esprit",
      description:
        "Chaque carte est conçue pour vous faire penser autrement. Pas des anecdotes au hasard, mais de vraies idées qui bousculent votre vision du monde.",
      badge1: "Voir autrement",
      badge2: "Penser plus loin",
      badge3: "Questionner plus",
    },
    howItWorks: {
      title: "Simple par design",
      subtitle: "20 secondes pour apprendre. Pas de cours interminables.",
      steps: [
        {
          title: "Scrollez",
          description:
            "Parcourez votre feed de cartes. Chaque carte vous apprend quelque chose de nouveau.",
        },
        {
          title: "3 points, pas plus",
          description:
            "L'essentiel en 3 points clairs. Pas de bla-bla, juste ce qui compte.",
        },
        {
          title: "Comprenez le pourquoi",
          description:
            'Chaque carte explique "pourquoi c\'est utile". La connaissance prend du sens.',
        },
      ],
    },
    examples: {
      title: "Des cartes qui enseignent",
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
      title: "Commencez à apprendre",
      subtitle:
        "Disponible gratuitement sur iOS et Android. Scannez le QR code pour télécharger.",
      comingSoon: "Bientôt disponible",
    },
    card: {
      whyUseful: "Pourquoi c'est utile",
      learned: "J'ai appris quelque chose",
    },
    footer: {
      tagline: "Smarter scrolling.",
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
