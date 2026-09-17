import type { Metadata, Viewport } from 'next'
import { Inter, Outfit } from 'next/font/google'
import './globals.css'
import { BUSINESS, SITE_URL } from '@/lib/business'
import { localBusinessSchema, websiteSchema } from '@/lib/schema'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
})

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
  preload: true,
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0A0A0A',
  colorScheme: 'dark',
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Car Locksmith Dubai | Car Key Service & Repair | +971 52 642 6161',
    template: '%s | Car Locksmith Dubai',
  },
  description:
    'Professional car locksmith services in Dubai. Car key service, repair, replacement and programming. Mobile service across all Dubai areas. Call +971 52 642 6161.',
  keywords: [
    'car locksmith Dubai',
    'car key service Dubai',
    'car key repair Dubai',
    'car key replacement Dubai',
    'car key programming Dubai',
    'lost car keys Dubai',
    'car key maker Dubai',
    'auto locksmith Dubai',
    'car key cutting Dubai',
    'transponder key Dubai',
    'smart key programming Dubai',
    'car lockout Dubai',
    'mobile locksmith Dubai',
    'key fob repair Dubai',
    'car key duplication Dubai',
    'key duplication near me',
    'key copy near me',
    'car key duplication near me',
    'car unlock service Dubai',
    'car unlock near me',
    'vehicle unlock service Dubai',
    'car key battery Dubai',
    'key battery replacement near me',
    'car key fob battery Dubai',
    'spare car key Dubai',
    'key maker near me',
    'key cutting Dubai',
    'car key locksmith near me',
    'car key replacement near me',
    'auto key programmer Dubai',
  ],
  authors: [{ name: BUSINESS.name, url: BUSINESS.url }],
  creator: BUSINESS.name,
  publisher: BUSINESS.name,
  category: 'Automotive Locksmith Services',
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
  openGraph: {
    type: 'website',
    locale: 'en_AE',
    url: SITE_URL,
    siteName: BUSINESS.name,
    title: 'Car Locksmith Dubai | Car Key Service & Repair',
    description:
      'Professional car locksmith services in Dubai. Car key service, repair, replacement and programming. Mobile service across all Dubai areas.',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Car Locksmith Dubai — Car Key Service & Repair',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Car Locksmith Dubai | Car Key Service & Repair',
    description:
      'Professional car locksmith services in Dubai. Mobile car key service, repair and programming.',
    images: ['/opengraph-image'],
  },
  verification: {
    google: 'Fd8-aF_LFS9-O_1hv2OQyurEwJ4WvX6xPwqhPVnrRHw',
  },
  alternates: {
    canonical: SITE_URL,
    languages: { 'en-AE': SITE_URL },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
    other: [{ rel: 'mask-icon', url: '/favicon.ico' }],
  },
  // Geo meta tags — local SEO signal for Dubai
  other: {
    'geo.region': 'AE-DU',
    'geo.placename': 'Dubai, United Arab Emirates',
    'geo.position': `${BUSINESS.geo.lat};${BUSINESS.geo.lng}`,
    'ICBM': `${BUSINESS.geo.lat}, ${BUSINESS.geo.lng}`,
    'og:locale': 'en_AE',
    'og:locale:alternate': 'ar_AE',
    'business:contact_data:street_address': BUSINESS.address.streetAddress,
    'business:contact_data:locality': BUSINESS.address.addressLocality,
    'business:contact_data:country_name': 'United Arab Emirates',
    'business:contact_data:phone_number': BUSINESS.phone,
    'business:contact_data:website': SITE_URL,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-AE" className={`${inter.variable} ${outfit.variable}`}>
      <head>
        {/* Resource hints — performance + AI crawlers */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://wa.me" />
        <link rel="dns-prefetch" href="https://api.whatsapp.com" />

        {/* Entity / Knowledge Graph signals */}
        <meta name="subject" content="Car Locksmith Services Dubai" />
        <meta name="coverage" content="Dubai, United Arab Emirates" />
        <meta name="distribution" content="Global" />
        <meta name="target" content="all" />
        <meta name="HandheldFriendly" content="True" />
        <meta name="MobileOptimized" content="320" />

        {/* Sitelinks searchbox hint */}
        <link rel="search" type="application/opensearchdescription+xml" title="Car Locksmith Dubai" href="/opensearch.xml" />

        {/* Core schema — injected on every page */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema()) }}
        />
      </head>
      <body>
        {/* Skip to content — accessibility + crawl efficiency */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-brand-gold focus:text-zinc-950 focus:font-bold focus:rounded-lg"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
