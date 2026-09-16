import { BUSINESS, SITE_URL, SERVICE_AREAS } from './business'
import type { Service } from './services'

// ─── Core Entities ────────────────────────────────────────────────────────────

export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'AutomotiveBusiness'],
    '@id': `${SITE_URL}/#business`,
    name: BUSINESS.name,
    legalName: BUSINESS.legalName,
    description: BUSINESS.description,
    url: BUSINESS.url,
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    image: `${SITE_URL}/android-chrome-512x512.png`,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_URL}/android-chrome-512x512.png`,
      width: 512,
      height: 512,
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS.address.streetAddress,
      addressLocality: BUSINESS.address.addressLocality,
      addressRegion: BUSINESS.address.addressRegion,
      addressCountry: BUSINESS.address.addressCountry,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: BUSINESS.geo.lat,
      longitude: BUSINESS.geo.lng,
    },
    // Primary contact for click-to-call from AI/voice
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: BUSINESS.phone,
        contactType: 'customer service',
        areaServed: 'AE-DU',
        availableLanguage: ['English', 'Arabic'],
        hoursAvailable: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
          opens: '00:00',
          closes: '23:59',
        },
      },
      {
        '@type': 'ContactPoint',
        telephone: BUSINESS.phone,
        contactType: 'emergency',
        areaServed: 'AE-DU',
        availableLanguage: ['English', 'Arabic'],
      },
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
        opens: '07:00',
        closes: '23:30',
        description: 'Shop hours. Mobile service available 24/7.',
      },
    ],
    currenciesAccepted: 'AED',
    paymentAccepted: 'Cash, Bank Transfer',
    priceRange: 'AED',
    areaServed: [
      { '@type': 'City', name: 'Dubai', sameAs: 'https://www.wikidata.org/wiki/Q612' },
      { '@type': 'AdministrativeArea', name: 'Dubai Emirate' },
      { '@type': 'Country', name: 'United Arab Emirates' },
    ],
    serviceArea: {
      '@type': 'GeoShape',
      name: 'Dubai, United Arab Emirates',
      addressCountry: 'AE',
    },
    // All services as offers
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Car Key Services Dubai',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Car Key Service', url: `${SITE_URL}/car-key-service-dubai/` } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Car Key Repair', url: `${SITE_URL}/car-key-repair-dubai/` } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Car Key Replacement', url: `${SITE_URL}/car-key-replacement-dubai/` } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Car Key Programming', url: `${SITE_URL}/car-key-programming-dubai/` } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Lost Car Keys', url: `${SITE_URL}/lost-car-keys-dubai/` } },
      ],
    },
    // Entity knowledge signals for AI/LLMs
    knowsAbout: [
      'Car Key Service',
      'Car Key Repair',
      'Car Key Replacement',
      'Car Key Programming',
      'Transponder Key Programming',
      'Smart Key Programming',
      'Remote Key Fob Repair',
      'Lost Car Keys',
      'Car Lockout Service',
      'Automotive Locksmith',
      'Mobile Locksmith Dubai',
      'Car Key Cutting',
      'Immobiliser Programming',
    ],
    sameAs: BUSINESS.socialLinks.google ? [
      BUSINESS.socialLinks.google,
      BUSINESS.whatsappHref,
    ] : [BUSINESS.whatsappHref],
    hasMap: `https://www.google.com/maps/search/${encodeURIComponent('Car Locksmith Dubai Al Bada\'a')}`,
    // Service areas list for AI context
    additionalProperty: SERVICE_AREAS.map((area) => ({
      '@type': 'PropertyValue',
      name: 'serviceArea',
      value: area,
    })),
  }
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: BUSINESS.name,
    description: BUSINESS.description,
    publisher: { '@id': `${SITE_URL}/#business` },
    inLanguage: 'en-AE',
    potentialAction: {
      '@type': 'SearchAction',
      target: { '@type': 'EntryPoint', urlTemplate: `${SITE_URL}/?q={search_term_string}` },
      'query-input': 'required name=search_term_string',
    },
  }
}

// ─── Navigation / Wayfinding ──────────────────────────────────────────────────

export function breadcrumbSchema(items: { name: string; href: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.href}`,
    })),
  }
}

// ─── Content Schemas ──────────────────────────────────────────────────────────

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  }
}

export function howToSchema(params: {
  name: string
  description: string
  steps: { name: string; text: string; url?: string }[]
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: params.name,
    description: params.description,
    totalTime: 'PT30M',
    step: params.steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
      ...(step.url ? { url: step.url } : {}),
    })),
    tool: [
      { '@type': 'HowToTool', name: 'Emirates ID' },
      { '@type': 'HowToTool', name: 'Vehicle Registration Card (Mulkiya)' },
    ],
    supply: [
      { '@type': 'HowToSupply', name: 'Vehicle present at location' },
    ],
  }
}

export function itemListSchema(params: {
  name: string
  description?: string
  items: { name: string; url: string; description?: string }[]
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: params.name,
    description: params.description,
    numberOfItems: params.items.length,
    itemListElement: params.items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      url: `${SITE_URL}${item.url}`,
      ...(item.description ? { description: item.description } : {}),
    })),
  }
}

// SpeakableSpecification — enables Google Assistant & AI Overview voice reads
export function speakableSchema(url: string, cssSelectors: string[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    url: `${SITE_URL}${url}`,
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: cssSelectors,
    },
  }
}

// ─── Service Schemas ──────────────────────────────────────────────────────────

export function serviceSchema(service: Service) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${SITE_URL}${service.href}#service`,
    name: service.title,
    description: service.longDescription,
    url: `${SITE_URL}${service.href}`,
    provider: { '@id': `${SITE_URL}/#business` },
    serviceType: service.shortTitle,
    areaServed: {
      '@type': 'City',
      name: 'Dubai',
      sameAs: 'https://www.wikidata.org/wiki/Q612',
    },
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: `${SITE_URL}${service.href}`,
      servicePhone: BUSINESS.phone,
      availableLanguage: ['English', 'Arabic'],
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'AED',
      seller: { '@id': `${SITE_URL}/#business` },
      areaServed: 'Dubai, UAE',
    },
    additionalType: 'https://schema.org/AutomotiveBusiness',
  }
}

// ─── Page Schema ──────────────────────────────────────────────────────────────

export function webPageSchema(params: {
  title: string
  description: string
  url: string
  type?: string
  speakableSelectors?: string[]
}) {
  return {
    '@context': 'https://schema.org',
    '@type': params.type ?? 'WebPage',
    '@id': `${SITE_URL}${params.url}#webpage`,
    url: `${SITE_URL}${params.url}`,
    name: params.title,
    description: params.description,
    isPartOf: { '@id': `${SITE_URL}/#website` },
    about: { '@id': `${SITE_URL}/#business` },
    inLanguage: 'en-AE',
    dateModified: new Date().toISOString(),
    ...(params.speakableSelectors
      ? {
          speakable: {
            '@type': 'SpeakableSpecification',
            cssSelector: params.speakableSelectors,
          },
        }
      : {}),
  }
}

// ─── Aggregate Schema (multiple types on one page) ────────────────────────────

export function servicePageGraph(service: Service, faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      serviceSchema(service),
      faqSchema(faqs),
      breadcrumbSchema([
        { name: 'Home', href: '/' },
        { name: service.title, href: service.href },
      ]),
      webPageSchema({
        title: service.metaTitle,
        description: service.metaDescription,
        url: service.href,
        type: 'WebPage',
        speakableSelectors: ['h1', '.service-intro', '.speakable'],
      }),
    ],
  }
}

// ─── Homepage Graph ───────────────────────────────────────────────────────────

export function homePageGraph(params: {
  faqs: { question: string; answer: string }[]
  services: { name: string; url: string; description?: string }[]
  howToSteps: { name: string; text: string }[]
}) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      faqSchema(params.faqs),
      howToSchema({
        name: 'How to Get Car Locksmith Help in Dubai',
        description: 'Steps to get car key assistance from Car Locksmith Dubai',
        steps: params.howToSteps,
      }),
      itemListSchema({
        name: 'Car Key Services in Dubai',
        description: 'Professional car key services provided by Car Locksmith Dubai',
        items: params.services,
      }),
      webPageSchema({
        title: 'Car Locksmith Dubai | Car Key Service & Repair | +971 52 642 6161',
        description: 'Professional car locksmith services in Dubai. Car key service, repair, replacement and programming. Mobile service across all Dubai areas.',
        url: '/',
        type: 'WebPage',
        speakableSelectors: ['#hero-heading', '#hero-description', '#service-intro', '.speakable'],
      }),
    ],
  }
}
