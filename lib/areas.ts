export interface AreaData {
  slug: string
  name: string
  district: string
  landmarks: string[]
  description: string
  nearbyAreas: string[]
  metaTitle: string
  metaDescription: string
}

export const AREA_PAGES: AreaData[] = [
  {
    slug: 'downtown-dubai',
    name: 'Downtown Dubai',
    district: 'Central Dubai',
    landmarks: ['Burj Khalifa', 'Dubai Mall', 'Dubai Fountain', 'The Dubai Opera'],
    description: 'Downtown Dubai is one of the busiest areas in the UAE, home to the Burj Khalifa and Dubai Mall. Our mobile car key service operates 24/7 across Downtown Dubai, Dubai Boulevard, and surrounding streets.',
    nearbyAreas: ['Business Bay', 'DIFC', 'Bur Dubai'],
    metaTitle: 'Car Locksmith Downtown Dubai | Call +971 52 642 6161',
    metaDescription: 'Call +971 52 642 6161 — Car key service near Burj Khalifa & Dubai Mall. Replacement, repair & programming in Downtown Dubai. Mobile locksmith, 24/7.',
  },
  {
    slug: 'dubai-marina',
    name: 'Dubai Marina',
    district: 'New Dubai',
    landmarks: ['Dubai Marina Walk', 'Marina Mall', 'JBR Beach', 'Bluewaters Island'],
    description: 'Dubai Marina is a densely populated residential and commercial district. Our technicians cover Marina towers, the Marina Walk promenade, and all surrounding streets including JBR and Bluewaters.',
    nearbyAreas: ['JBR', 'JLT', 'Palm Jumeirah'],
    metaTitle: 'Car Locksmith Dubai Marina | Call +971 52 642 6161',
    metaDescription: 'Call +971 52 642 6161 — Lost keys or car lockout near Marina Walk or JBR? Mobile car key service in Dubai Marina. Replacement & programming 24/7.',
  },
  {
    slug: 'jumeirah',
    name: 'Jumeirah',
    district: 'Central Dubai',
    landmarks: ['Jumeirah Beach', 'Jumeirah Mosque', 'City Walk', 'Mercato Mall'],
    description: 'Jumeirah spans a wide beachfront residential area from Umm Suqeim to the Satwa border. Our mobile units cover all of Jumeirah 1, 2 and 3, as well as Beach Road and Jumeirah streets.',
    nearbyAreas: ['Satwa', 'Al Bada\'a', 'Umm Suqeim'],
    metaTitle: 'Car Locksmith Jumeirah Dubai | Call +971 52 642 6161',
    metaDescription: 'Call +971 52 642 6161 — Mobile car key service across Jumeirah 1, 2 & 3. Key replacement, repair & programming near Jumeirah Beach. Available now.',
  },
  {
    slug: 'business-bay',
    name: 'Business Bay',
    district: 'Central Dubai',
    landmarks: ['Dubai Water Canal', 'Bay Square', 'Executive Towers', 'Damac Towers'],
    description: 'Business Bay is a major commercial and residential hub adjacent to Downtown Dubai. Our mobile car key service covers all Business Bay towers, parking structures and the Water Canal promenade.',
    nearbyAreas: ['Downtown Dubai', 'DIFC', 'Al Quoz'],
    metaTitle: 'Car Locksmith Business Bay Dubai | Call +971 52 642 6161',
    metaDescription: 'Call +971 52 642 6161 — Car key replacement & programming in Business Bay. Mobile service to Dubai Water Canal towers & Executive Towers. 24/7.',
  },
  {
    slug: 'palm-jumeirah',
    name: 'Palm Jumeirah',
    district: 'New Dubai',
    landmarks: ['Atlantis The Palm', 'Nakheel Mall', 'The Pointe', 'Palm Monorail'],
    description: 'Palm Jumeirah is a world-famous man-made island with luxury residences and hotels. Our technicians cover the Trunk, Crescent and all Palm fronds. We serve all residential and hotel parking areas.',
    nearbyAreas: ['Dubai Marina', 'JBR', 'Jumeirah'],
    metaTitle: 'Car Locksmith Palm Jumeirah | Call +971 52 642 6161',
    metaDescription: 'Call +971 52 642 6161 — Car key service on Palm Jumeirah. Lost keys near Atlantis or Nakheel Mall? Mobile locksmith to all fronds & Crescent. 24/7.',
  },
  {
    slug: 'deira',
    name: 'Deira',
    district: 'Old Dubai',
    landmarks: ['Dubai Gold Souk', 'Deira City Centre', 'Dubai Creek', 'Naif Souk'],
    description: 'Deira is one of Dubai\'s oldest commercial districts, covering the area from Al Rigga to the Creek. Our mobile technicians serve all of Deira including Al Rigga, Al Nahda, Naif and the Creek waterfront.',
    nearbyAreas: ['Bur Dubai', 'Al Qusais', 'Garhoud'],
    metaTitle: 'Car Locksmith Deira Dubai | Call +971 52 642 6161',
    metaDescription: 'Call +971 52 642 6161 — Car key service in Deira. Replacement, repair & programming near Gold Souk & Dubai Creek. Mobile locksmith, available 24/7.',
  },
  {
    slug: 'bur-dubai',
    name: 'Bur Dubai',
    district: 'Old Dubai',
    landmarks: ['BurJuman Mall', 'Textile Souk', 'Al Fahidi Fort', 'Dubai Frame'],
    description: 'Bur Dubai covers the historic western bank of the Dubai Creek. Our service area includes Karama, Mankhool, Oud Metha and all surrounding streets.',
    nearbyAreas: ['Karama', 'Deira', 'Oud Metha'],
    metaTitle: 'Car Locksmith Bur Dubai | Call +971 52 642 6161',
    metaDescription: 'Call +971 52 642 6161 — Car key service in Bur Dubai. Replacement, programming & repair near BurJuman Mall & Al Fahidi. Mobile locksmith 24/7.',
  },
  {
    slug: 'al-barsha',
    name: 'Al Barsha',
    district: 'New Dubai',
    landmarks: ['Mall of the Emirates', 'Ski Dubai', 'Al Barsha Pond Park'],
    description: 'Al Barsha is a major residential and retail district home to Mall of the Emirates. Our mobile units cover Al Barsha 1, 2 and 3, Al Barsha South, and all surrounding areas.',
    nearbyAreas: ['Al Quoz', 'JVC', 'Umm Suqeim'],
    metaTitle: 'Car Locksmith Al Barsha Dubai | Call +971 52 642 6161',
    metaDescription: 'Call +971 52 642 6161 — Car key replacement & programming in Al Barsha. Mobile service near Mall of the Emirates & Ski Dubai. All areas covered.',
  },
  {
    slug: 'jumeirah-village-circle',
    name: 'Jumeirah Village Circle',
    district: 'New Dubai',
    landmarks: ['Circle Mall', 'JVC Community Park', 'Spinneys JVC'],
    description: 'Jumeirah Village Circle (JVC) is one of Dubai\'s fastest-growing residential communities. Our mobile service covers all JVC districts and surrounding areas including JVT and Al Furjan.',
    nearbyAreas: ['Al Barsha', 'Dubai Hills', 'Motor City'],
    metaTitle: 'Car Locksmith JVC Dubai | Call +971 52 642 6161',
    metaDescription: 'Call +971 52 642 6161 — Car key service in Jumeirah Village Circle (JVC). Replacement, programming & repair near Circle Mall. Mobile 24/7.',
  },
  {
    slug: 'jumeirah-beach-residence',
    name: 'Jumeirah Beach Residence',
    district: 'New Dubai',
    landmarks: ['The Walk JBR', 'The Beach JBR', 'Roxy Cinemas JBR'],
    description: 'Jumeirah Beach Residence (JBR) is a busy beachfront residential and entertainment district. Our technicians cover all JBR towers, The Walk, and the surrounding Marina area.',
    nearbyAreas: ['Dubai Marina', 'JLT', 'Palm Jumeirah'],
    metaTitle: 'Car Locksmith JBR Dubai | Call +971 52 642 6161',
    metaDescription: 'Call +971 52 642 6161 — Car key service at JBR, Dubai. Lost keys or lockout near The Walk or The Beach? Mobile locksmith to your location 24/7.',
  },
  {
    slug: 'difc',
    name: 'DIFC',
    district: 'Central Dubai',
    landmarks: ['Gate Building', 'Dubai International Financial Centre', 'Gate Village'],
    description: 'The Dubai International Financial Centre (DIFC) is Dubai\'s financial hub. Our mobile car key service covers the DIFC complex, Gate Village, and all adjacent buildings along Sheikh Zayed Road.',
    nearbyAreas: ['Downtown Dubai', 'Business Bay', 'Satwa'],
    metaTitle: 'Car Locksmith DIFC Dubai | Call +971 52 642 6161',
    metaDescription: 'Call +971 52 642 6161 — Car key service in DIFC. Replacement & programming at Gate Building & Gate Village. Mobile locksmith, Sheikh Zayed Road. 24/7.',
  },
  {
    slug: 'dubai-hills',
    name: 'Dubai Hills',
    district: 'New Dubai',
    landmarks: ['Dubai Hills Mall', 'Dubai Hills Golf Club', 'Dubai Hills Park'],
    description: 'Dubai Hills Estate is a premium master-planned community with villas and apartments. Our mobile service covers all Dubai Hills districts, Dubai Hills Mall, and the surrounding Emaar South area.',
    nearbyAreas: ['Al Barsha', 'JVC', 'Al Quoz'],
    metaTitle: 'Car Locksmith Dubai Hills | Call +971 52 642 6161',
    metaDescription: 'Call +971 52 642 6161 — Car key service in Dubai Hills Estate. Replacement, repair & programming near Dubai Hills Mall & Golf Club. Mobile 24/7.',
  },
]

export function getAreaBySlug(slug: string): AreaData | undefined {
  return AREA_PAGES.find((a) => a.slug === slug)
}
