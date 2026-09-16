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
    metaTitle: 'Car Locksmith Downtown Dubai | Key Replacement & Programming',
    metaDescription: 'Car locksmith service in Downtown Dubai. Car key replacement, repair and programming near Burj Khalifa and Dubai Mall. Mobile service — we come to you. Call +971 52 642 6161.',
  },
  {
    slug: 'dubai-marina',
    name: 'Dubai Marina',
    district: 'New Dubai',
    landmarks: ['Dubai Marina Walk', 'Marina Mall', 'JBR Beach', 'Bluewaters Island'],
    description: 'Dubai Marina is a densely populated residential and commercial district. Our technicians cover Marina towers, the Marina Walk promenade, and all surrounding streets including JBR and Bluewaters.',
    nearbyAreas: ['JBR', 'JLT', 'Palm Jumeirah'],
    metaTitle: 'Car Locksmith Dubai Marina | Key Replacement & Programming',
    metaDescription: 'Car locksmith in Dubai Marina. Lost car keys, key replacement and programming near the Marina Walk. Mobile service 24/7 — we come to you. Call +971 52 642 6161.',
  },
  {
    slug: 'jumeirah',
    name: 'Jumeirah',
    district: 'Central Dubai',
    landmarks: ['Jumeirah Beach', 'Jumeirah Mosque', 'City Walk', 'Mercato Mall'],
    description: 'Jumeirah spans a wide beachfront residential area from Umm Suqeim to the Satwa border. Our mobile units cover all of Jumeirah 1, 2 and 3, as well as Beach Road and Jumeirah streets.',
    nearbyAreas: ['Satwa', 'Al Bada\'a', 'Umm Suqeim'],
    metaTitle: 'Car Locksmith Jumeirah Dubai | Key Replacement & Repair',
    metaDescription: 'Car locksmith service in Jumeirah, Dubai. Car key replacement, repair and programming. Mobile service across Jumeirah 1, 2 and 3. Call +971 52 642 6161.',
  },
  {
    slug: 'business-bay',
    name: 'Business Bay',
    district: 'Central Dubai',
    landmarks: ['Dubai Water Canal', 'Bay Square', 'Executive Towers', 'Damac Towers'],
    description: 'Business Bay is a major commercial and residential hub adjacent to Downtown Dubai. Our mobile car key service covers all Business Bay towers, parking structures and the Water Canal promenade.',
    nearbyAreas: ['Downtown Dubai', 'DIFC', 'Al Quoz'],
    metaTitle: 'Car Locksmith Business Bay Dubai | Key Service & Programming',
    metaDescription: 'Car locksmith in Business Bay, Dubai. Car key replacement, repair and programming near Dubai Water Canal and Executive Towers. Call +971 52 642 6161.',
  },
  {
    slug: 'palm-jumeirah',
    name: 'Palm Jumeirah',
    district: 'New Dubai',
    landmarks: ['Atlantis The Palm', 'Nakheel Mall', 'The Pointe', 'Palm Monorail'],
    description: 'Palm Jumeirah is a world-famous man-made island with luxury residences and hotels. Our technicians cover the Trunk, Crescent and all Palm fronds. We serve all residential and hotel parking areas.',
    nearbyAreas: ['Dubai Marina', 'JBR', 'Jumeirah'],
    metaTitle: 'Car Locksmith Palm Jumeirah | Key Replacement & Programming',
    metaDescription: 'Car locksmith on Palm Jumeirah, Dubai. Lost keys or need car key programming? Mobile service to the Palm Crescent and all fronds. Call +971 52 642 6161.',
  },
  {
    slug: 'deira',
    name: 'Deira',
    district: 'Old Dubai',
    landmarks: ['Dubai Gold Souk', 'Deira City Centre', 'Dubai Creek', 'Naif Souk'],
    description: 'Deira is one of Dubai\'s oldest commercial districts, covering the area from Al Rigga to the Creek. Our mobile technicians serve all of Deira including Al Rigga, Al Nahda, Naif and the Creek waterfront.',
    nearbyAreas: ['Bur Dubai', 'Al Qusais', 'Garhoud'],
    metaTitle: 'Car Locksmith Deira Dubai | Key Replacement & Repair',
    metaDescription: 'Car locksmith in Deira, Dubai. Car key replacement, repair and programming near the Gold Souk and Dubai Creek. Mobile service 24/7. Call +971 52 642 6161.',
  },
  {
    slug: 'bur-dubai',
    name: 'Bur Dubai',
    district: 'Old Dubai',
    landmarks: ['BurJuman Mall', 'Textile Souk', 'Al Fahidi Fort', 'Dubai Frame'],
    description: 'Bur Dubai covers the historic western bank of the Dubai Creek. Our service area includes Karama, Mankhool, Oud Metha and all surrounding streets.',
    nearbyAreas: ['Karama', 'Deira', 'Oud Metha'],
    metaTitle: 'Car Locksmith Bur Dubai | Key Service, Repair & Replacement',
    metaDescription: 'Car locksmith in Bur Dubai. Car key service, replacement and programming near BurJuman Mall and Textile Souk. Mobile service 24/7. Call +971 52 642 6161.',
  },
  {
    slug: 'al-barsha',
    name: 'Al Barsha',
    district: 'New Dubai',
    landmarks: ['Mall of the Emirates', 'Ski Dubai', 'Al Barsha Pond Park'],
    description: 'Al Barsha is a major residential and retail district home to Mall of the Emirates. Our mobile units cover Al Barsha 1, 2 and 3, Al Barsha South, and all surrounding areas.',
    nearbyAreas: ['Al Quoz', 'JVC', 'Umm Suqeim'],
    metaTitle: 'Car Locksmith Al Barsha Dubai | Key Replacement & Programming',
    metaDescription: 'Car locksmith in Al Barsha, Dubai. Car key replacement, repair and programming near Mall of the Emirates. Mobile service — we come to you. Call +971 52 642 6161.',
  },
  {
    slug: 'jumeirah-village-circle',
    name: 'Jumeirah Village Circle',
    district: 'New Dubai',
    landmarks: ['Circle Mall', 'JVC Community Park', 'Spinneys JVC'],
    description: 'Jumeirah Village Circle (JVC) is one of Dubai\'s fastest-growing residential communities. Our mobile service covers all JVC districts and surrounding areas including JVT and Al Furjan.',
    nearbyAreas: ['Al Barsha', 'Dubai Hills', 'Motor City'],
    metaTitle: 'Car Locksmith JVC Dubai | Key Replacement & Programming',
    metaDescription: 'Car locksmith in Jumeirah Village Circle (JVC), Dubai. Car key replacement, repair and programming. Mobile service 24/7. Call +971 52 642 6161.',
  },
  {
    slug: 'jumeirah-beach-residence',
    name: 'Jumeirah Beach Residence',
    district: 'New Dubai',
    landmarks: ['The Walk JBR', 'The Beach JBR', 'Roxy Cinemas JBR'],
    description: 'Jumeirah Beach Residence (JBR) is a busy beachfront residential and entertainment district. Our technicians cover all JBR towers, The Walk, and the surrounding Marina area.',
    nearbyAreas: ['Dubai Marina', 'JLT', 'Palm Jumeirah'],
    metaTitle: 'Car Locksmith JBR Dubai | Key Service & Replacement',
    metaDescription: 'Car locksmith at Jumeirah Beach Residence (JBR), Dubai. Lost car keys or need key replacement near The Walk? Mobile service 24/7. Call +971 52 642 6161.',
  },
  {
    slug: 'difc',
    name: 'DIFC',
    district: 'Central Dubai',
    landmarks: ['Gate Building', 'Dubai International Financial Centre', 'Gate Village'],
    description: 'The Dubai International Financial Centre (DIFC) is Dubai\'s financial hub. Our mobile car key service covers the DIFC complex, Gate Village, and all adjacent buildings along Sheikh Zayed Road.',
    nearbyAreas: ['Downtown Dubai', 'Business Bay', 'Satwa'],
    metaTitle: 'Car Locksmith DIFC Dubai | Key Replacement & Programming',
    metaDescription: 'Car locksmith in DIFC, Dubai. Car key replacement, repair and programming at the Gate Building and Gate Village. Mobile service 24/7. Call +971 52 642 6161.',
  },
  {
    slug: 'dubai-hills',
    name: 'Dubai Hills',
    district: 'New Dubai',
    landmarks: ['Dubai Hills Mall', 'Dubai Hills Golf Club', 'Dubai Hills Park'],
    description: 'Dubai Hills Estate is a premium master-planned community with villas and apartments. Our mobile service covers all Dubai Hills districts, Dubai Hills Mall, and the surrounding Emaar South area.',
    nearbyAreas: ['Al Barsha', 'JVC', 'Al Quoz'],
    metaTitle: 'Car Locksmith Dubai Hills | Key Replacement & Programming',
    metaDescription: 'Car locksmith in Dubai Hills Estate. Car key replacement, repair and programming near Dubai Hills Mall. Mobile service 24/7. Call +971 52 642 6161.',
  },
]

export function getAreaBySlug(slug: string): AreaData | undefined {
  return AREA_PAGES.find((a) => a.slug === slug)
}
