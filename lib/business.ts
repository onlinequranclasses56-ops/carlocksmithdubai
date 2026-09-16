export const BUSINESS = {
  name: 'Car Locksmith Dubai',
  legalName: 'Car Locksmith Dubai',
  phone: '+971526426161',
  phoneDisplay: '+971 52 642 6161',
  phoneHref: 'tel:+971526426161',
  whatsapp: '971526426161',
  whatsappHref: 'https://wa.me/971526426161',
  whatsappMessage: 'https://wa.me/971526426161?text=Hello%2C%20I%20need%20car%20key%20assistance%20in%20Dubai.',
  email: 'info@carlocksmithdubai.com',
  address: {
    streetAddress: 'Al Bada\'a',
    addressLocality: 'Dubai',
    addressRegion: 'Dubai',
    addressCountry: 'AE',
    postalCode: '',
  },
  addressDisplay: 'Al Bada\'a, Dubai, UAE',
  geo: {
    lat: 25.2048,
    lng: 55.2708,
  },
  hours: {
    shop: '7:00 AM – 11:30 PM',
    mobile: '24/7',
    schemaShop: 'Mo-Su 07:00-23:30',
  },
  url: 'https://carlocksmithdubai.com',
  description:
    'Professional car locksmith services in Dubai. Car key cutting, repair, replacement and programming. Mobile service across all Dubai areas.',
  priceRange: 'AED',
  serviceArea: 'Dubai, United Arab Emirates',
  foundingYear: undefined as number | undefined,
  socialLinks: {
    google: '',   // Add GBP URL once verified: https://g.page/...
    facebook: '', // Add Facebook URL when available
    instagram: '', // Add Instagram URL when available
    googleMaps: 'https://www.google.com/maps/search/Car+Locksmith+Dubai+Al+Bada\'a',
  },
  // Entity signals for schema.org and AI systems
  knowsAbout: [
    'Car Key Service',
    'Car Key Repair',
    'Car Key Replacement',
    'Car Key Programming',
    'Transponder Key Programming',
    'Smart Key Programming',
    'Remote Key Fob Repair',
    'Lost Car Keys Dubai',
    'Car Lockout Service',
    'Mobile Locksmith Dubai',
    'Automotive Locksmith Dubai',
  ],
} as const

export const SITE_URL = 'https://carlocksmithdubai.com'

export const SERVICE_AREAS = [
  'Al Bada\'a',
  'Satwa',
  'Downtown Dubai',
  'Dubai Marina',
  'Jumeirah Beach Residence (JBR)',
  'Business Bay',
  'Jumeirah',
  'Palm Jumeirah',
  'Deira',
  'Bur Dubai',
  'Karama',
  'Al Quoz',
  'Jumeirah Lake Towers (JLT)',
  'DIFC',
  'Sheikh Zayed Road',
  'Al Barsha',
  'Mirdif',
  'Al Qusais',
  'Dubai Silicon Oasis',
  'Discovery Gardens',
  'Jumeirah Village Circle (JVC)',
  'Arabian Ranches',
  'Dubai Hills',
  'Dubai Creek Harbour',
  'Al Nahda',
  'Oud Metha',
  'Garhoud',
  'Festival City',
  'Motor City',
  'Sports City',
  'International City',
  'Al Furjan',
  'Dubai South',
  'Jebel Ali',
] as const

export type ServiceArea = (typeof SERVICE_AREAS)[number]
